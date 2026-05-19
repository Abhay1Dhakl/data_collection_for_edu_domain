#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
from collections import defaultdict

from common import (
    RECORD_REVIEW_HEADER,
    RECORD_REVIEW_QUEUE_PATH,
    SENTENCE_CANDIDATE_HEADER,
    SENTENCE_CANDIDATES_PATH,
    append_csv,
    ensure_dirs,
    load_jsonl,
    load_registry,
    module_pairs_path,
    module_records_path,
    read_csv,
    save_registry,
    select_rows,
    split_sentences,
    utc_now_iso,
    write_csv,
    write_jsonl,
)

PAIRING_LOG_HEADER = [
    "timestamp",
    "source_id",
    "module_id",
    "record_pair_count",
    "sentence_candidate_count",
    "record_review_count",
    "result",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Pair bilingual E-Paath records by exact record key before sentence-level review.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--module-id", action="append", default=[])
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def default_statuses() -> list[str]:
    return ["extracted", "pair_failed"]


def auto_detect_rows(rows: list[dict[str, str]], limit: int) -> list[dict[str, str]]:
    detected: list[dict[str, str]] = []
    for row in rows:
        records_path = module_records_path(row["source_id"])
        pair_path = module_pairs_path(row["source_id"])
        if records_path.exists() and not pair_path.exists():
            detected.append(row)
            if limit and len(detected) >= limit:
                break
    return detected


def merge_rows(primary: list[dict[str, str]], secondary: list[dict[str, str]], limit: int) -> list[dict[str, str]]:
    merged: list[dict[str, str]] = []
    seen: set[str] = set()
    for row in primary + secondary:
        source_id = row["source_id"]
        if source_id in seen:
            continue
        seen.add(source_id)
        merged.append(row)
        if limit and len(merged) >= limit:
            break
    return merged


def candidate_bucket(screen_id: str, en_text: str, ne_text: str, sentence_count: int) -> str:
    if en_text == ne_text:
        return "low_shared_text"
    if screen_id == "global":
        return "medium_global_ui"
    if sentence_count == 1:
        return "high_exact_single_sentence"
    return "high_exact_multi_sentence"


def replace_rows(path, source_id: str, new_rows: list[dict[str, str]], header: list[str]) -> None:
    existing = read_csv(path)
    kept = [row for row in existing if row.get("source_id") != source_id]
    write_csv(path, kept + new_rows, header)


def module_quality_issues(records: list[dict]) -> list[str]:
    en_records = [record for record in records if record.get("language") == "en"]
    ne_records = [record for record in records if record.get("language") == "ne"]
    en_keys = {str(record["record_key"]) for record in en_records}
    ne_keys = {str(record["record_key"]) for record in ne_records}
    overlap_ratio = len(en_keys & ne_keys) / max(1, min(len(en_keys), len(ne_keys)))
    ne_devanagari_ratio = (
        sum(1 for record in ne_records if re.search(r"[\u0900-\u097F]", str(record.get("text", "")))) / max(1, len(ne_records))
    )

    issues: list[str] = []
    if overlap_ratio < 0.5:
        issues.append(f"low_exact_key_overlap={overlap_ratio:.3f}")
    if ne_devanagari_ratio < 0.25:
        issues.append(f"low_nepali_script_ratio={ne_devanagari_ratio:.3f}")
    return issues


def pair_module(row: dict[str, str]) -> tuple[list[dict], list[dict[str, str]], list[dict[str, str]]]:
    records = load_jsonl(module_records_path(row["source_id"]))
    pairable = [record for record in records if record.get("language") in {"en", "ne"}]
    quality_issues = module_quality_issues(pairable)

    if quality_issues and quality_issues[0].startswith("low_exact_key_overlap"):
        return (
            [],
            [],
            [
                {
                    "review_item_id": f"{row['source_id']}_module_review_00001",
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "grade": row["grade"],
                    "subject": row["subject"],
                    "subdomain": row["subdomain"],
                    "screen_id": "module",
                    "activity_id": "module_quality_gate",
                    "record_key": "module_quality_gate",
                    "pair_method": "blocked_before_pairing",
                    "en_sentence_count": "",
                    "ne_sentence_count": "",
                    "en_record_text": "",
                    "ne_record_text": "",
                    "notes": ";".join(quality_issues),
                }
            ],
        )

    grouped: dict[str, dict[str, list[dict]]] = defaultdict(lambda: {"en": [], "ne": []})
    for record in pairable:
        grouped[str(record["record_key"])][str(record["language"])].append(record)

    record_pairs: list[dict] = []
    sentence_candidates: list[dict[str, str]] = []
    record_review_queue: list[dict[str, str]] = []

    pair_counter = 0
    candidate_counter = 0
    record_review_counter = 0
    for record_key in sorted(grouped):
        bucket = grouped[record_key]
        if len(bucket["en"]) != 1 or len(bucket["ne"]) != 1:
            continue

        en_record = bucket["en"][0]
        ne_record = bucket["ne"][0]
        pair_counter += 1

        en_sentences = split_sentences(str(en_record["text"]), "en")
        ne_sentences = split_sentences(str(ne_record["text"]), "ne")
        pair_method = "exact_record_key"

        pair_summary = {
            "pair_id": f"{row['source_id']}_record_{pair_counter:05d}",
            "source_id": row["source_id"],
            "module_id": row["module_id"],
            "screen_id": str(en_record["screen_id"]),
            "activity_id": str(en_record["activity_id"]),
            "record_key": record_key,
            "pair_method": pair_method,
            "en_record_text": str(en_record["text"]),
            "ne_record_text": str(ne_record["text"]),
            "en_sentence_count": len(en_sentences),
            "ne_sentence_count": len(ne_sentences),
        }
        record_pairs.append(pair_summary)

        if not en_sentences or not ne_sentences or len(en_sentences) != len(ne_sentences):
            record_review_counter += 1
            record_review_queue.append(
                {
                    "review_item_id": f"{row['source_id']}_record_review_{record_review_counter:05d}",
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "grade": row["grade"],
                    "subject": row["subject"],
                    "subdomain": row["subdomain"],
                    "screen_id": str(en_record["screen_id"]),
                    "activity_id": str(en_record["activity_id"]),
                    "record_key": record_key,
                    "pair_method": pair_method,
                    "en_sentence_count": str(len(en_sentences)),
                    "ne_sentence_count": str(len(ne_sentences)),
                    "en_record_text": str(en_record["text"]),
                    "ne_record_text": str(ne_record["text"]),
                    "notes": "sentence_count_mismatch_or_empty",
                }
            )
            continue

        for sentence_index, (en_sentence, ne_sentence) in enumerate(zip(en_sentences, ne_sentences), start=1):
            candidate_counter += 1
            sentence_candidates.append(
                {
                    "candidate_id": f"{row['source_id']}_candidate_{candidate_counter:05d}",
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "grade": row["grade"],
                    "subject": row["subject"],
                    "subdomain": row["subdomain"],
                    "screen_id": str(en_record["screen_id"]),
                    "activity_id": str(en_record["activity_id"]),
                    "record_key": record_key,
                    "pair_method": pair_method,
                    "candidate_bucket": candidate_bucket(str(en_record["screen_id"]), en_sentence, ne_sentence, len(en_sentences)),
                    "en_record_text": str(en_record["text"]),
                    "ne_record_text": str(ne_record["text"]),
                    "en_sentence_index": str(sentence_index),
                    "ne_sentence_index": str(sentence_index),
                    "en_text": en_sentence,
                    "ne_text": ne_sentence,
                }
            )

    return record_pairs, sentence_candidates, record_review_queue


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    rows = load_registry()
    statuses = args.status or ([] if (args.source_id or args.module_id) else default_statuses())
    selected = select_rows(
        rows,
        source_ids=args.source_id,
        module_ids=args.module_id,
        statuses=statuses,
        limit=args.limit,
    )
    auto_detected = False
    if not (args.source_id or args.module_id or args.status):
        detected_rows = auto_detect_rows(rows, args.limit)
        selected = merge_rows(selected, detected_rows, args.limit)
        auto_detected = bool(detected_rows)

    if not selected:
        print("No extracted modules are ready for pairing.")
        return 0

    if auto_detected:
        print("Auto-detected extracted module records whose registry status was not updated.")

    by_id = {row["source_id"]: row for row in rows}
    for row in selected:
        pair_path = module_pairs_path(row["source_id"])
        if pair_path.exists() and not args.overwrite:
            print(f"{row['source_id']}: skipped, paired record file already exists")
            continue
        try:
            record_pairs, sentence_candidates, record_review_queue = pair_module(row)
            write_jsonl(pair_path, record_pairs)
            replace_rows(SENTENCE_CANDIDATES_PATH, row["source_id"], sentence_candidates, SENTENCE_CANDIDATE_HEADER)
            replace_rows(RECORD_REVIEW_QUEUE_PATH, row["source_id"], record_review_queue, RECORD_REVIEW_HEADER)
            append_csv(
                "data/logs/pairing_log.csv",
                {
                    "timestamp": utc_now_iso(),
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "record_pair_count": str(len(record_pairs)),
                    "sentence_candidate_count": str(len(sentence_candidates)),
                    "record_review_count": str(len(record_review_queue)),
                    "result": "paired",
                    "notes": "",
                },
                PAIRING_LOG_HEADER,
            )
            if args.update_status:
                by_id[row["source_id"]]["status"] = "review_ready" if sentence_candidates else "pair_failed"
            print(
                f"{row['source_id']}: paired {len(record_pairs)} record pairs, "
                f"{len(sentence_candidates)} sentence candidates, {len(record_review_queue)} record-review items"
            )
        except Exception as exc:
            append_csv(
                "data/logs/pairing_log.csv",
                {
                    "timestamp": utc_now_iso(),
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "record_pair_count": "0",
                    "sentence_candidate_count": "0",
                    "record_review_count": "0",
                    "result": "pair_failed",
                    "notes": str(exc),
                },
                PAIRING_LOG_HEADER,
            )
            if args.update_status:
                by_id[row["source_id"]]["status"] = "pair_failed"
            print(f"{row['source_id']}: pair_failed ({exc})")

    if args.update_status:
        save_registry(list(by_id.values()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
