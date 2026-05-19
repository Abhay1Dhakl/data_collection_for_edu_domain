#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    EXCLUDED_CANDIDATES_PATH,
    MODULE_QUALITY_AUDIT_PATH,
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
    replace_rows_for_sources,
    save_registry,
    select_rows,
    split_sentences,
    utc_now_iso,
    write_jsonl,
)
from quality import (
    EXCLUDED_CANDIDATE_HEADER,
    MODULE_QUALITY_HEADER,
    ModuleQuality,
    auto_decision,
    candidate_flags,
    compute_module_quality,
    pairable_exact_matches,
    review_priority,
    should_exclude_candidate,
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


def pair_module(row: dict[str, str]) -> tuple[ModuleQuality, list[dict], list[dict[str, str]], list[dict[str, str]], list[dict[str, str]]]:
    records = load_jsonl(module_records_path(row["source_id"]))
    pairable = [record for record in records if record.get("language") in {"en", "ne"}]
    module_quality = compute_module_quality(row, pairable)
    exact_pairs = pairable_exact_matches(pairable)

    record_pairs: list[dict] = []
    sentence_candidates: list[dict[str, str]] = []
    excluded_candidates: list[dict[str, str]] = []
    record_review_queue: list[dict[str, str]] = []

    pair_counter = 0
    candidate_counter = 0
    record_review_counter = 0
    if module_quality.quality_flags:
        record_review_counter += 1
        record_review_queue.append(
            {
                "review_item_id": f"{row['source_id']}_module_review_{record_review_counter:05d}",
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "grade": row["grade"],
                "subject": row["subject"],
                "subdomain": row["subdomain"],
                "screen_id": "module",
                "activity_id": "module_quality_gate",
                "record_key": "module_quality_gate",
                "pair_method": "module_audit",
                "en_sentence_count": str(module_quality.en_record_count),
                "ne_sentence_count": str(module_quality.ne_record_count),
                "en_record_text": "",
                "ne_record_text": "",
                "notes": (
                    f"quality_score={module_quality.quality_score};"
                    f"risk_level={module_quality.risk_level};"
                    f"recommended_action={module_quality.recommended_action};"
                    f"flags={';'.join(module_quality.quality_flags)}"
                ),
            }
        )

    for record_key, en_record, ne_record in exact_pairs:
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
            qa = candidate_flags(
                module_quality,
                en_sentence,
                ne_sentence,
                str(en_record["screen_id"]),
                record_key,
            )
            decision = auto_decision(qa, module_quality)
            candidate_row = {
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
                "module_quality_score": str(module_quality.quality_score),
                "module_risk_level": module_quality.risk_level,
                "module_quality_flags": ";".join(module_quality.quality_flags),
                "review_priority": review_priority(decision),
                "auto_decision": decision,
                "qa_flags": ";".join(qa),
                "en_record_text": str(en_record["text"]),
                "ne_record_text": str(ne_record["text"]),
                "en_sentence_index": str(sentence_index),
                "ne_sentence_index": str(sentence_index),
                "en_text": en_sentence,
                "ne_text": ne_sentence,
            }
            if should_exclude_candidate(qa):
                excluded_candidates.append({**candidate_row, "exclude_reason": ";".join(qa)})
                continue
            sentence_candidates.append(candidate_row)

    return module_quality, record_pairs, sentence_candidates, excluded_candidates, record_review_queue


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
            module_quality, record_pairs, sentence_candidates, excluded_candidates, record_review_queue = pair_module(row)
            write_jsonl(pair_path, record_pairs)
            replace_rows_for_sources(SENTENCE_CANDIDATES_PATH, [row["source_id"]], sentence_candidates, SENTENCE_CANDIDATE_HEADER)
            replace_rows_for_sources(RECORD_REVIEW_QUEUE_PATH, [row["source_id"]], record_review_queue, RECORD_REVIEW_HEADER)
            replace_rows_for_sources(MODULE_QUALITY_AUDIT_PATH, [row["source_id"]], [module_quality.as_row()], MODULE_QUALITY_HEADER)
            replace_rows_for_sources(EXCLUDED_CANDIDATES_PATH, [row["source_id"]], excluded_candidates, EXCLUDED_CANDIDATE_HEADER)
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
                    "notes": (
                        f"quality_score={module_quality.quality_score};"
                        f"risk_level={module_quality.risk_level};"
                        f"excluded_candidates={len(excluded_candidates)}"
                    ),
                },
                PAIRING_LOG_HEADER,
            )
            if args.update_status:
                by_id[row["source_id"]]["status"] = "review_ready" if sentence_candidates else "pair_failed"
            print(
                f"{row['source_id']}: paired {len(record_pairs)} record pairs, "
                f"{len(sentence_candidates)} sentence candidates, {len(excluded_candidates)} excluded, "
                f"{len(record_review_queue)} record-review items"
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
