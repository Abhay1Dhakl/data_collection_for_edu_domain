#!/usr/bin/env python3
from __future__ import annotations

import argparse
from collections import defaultdict
from pathlib import Path

from common import ALIGNED_DIR, append_csv, load_jsonl, load_registry, module_sentences_path, read_csv, timestamp_iso, write_csv

RAW_HEADER = [
    "pair_id",
    "source_id",
    "module_id",
    "screen_id",
    "en_activity_id",
    "ne_activity_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_method",
    "alignment_score",
    "review_status",
]

SCORED_HEADER = [
    "pair_id",
    "source_id",
    "module_id",
    "screen_id",
    "en_activity_id",
    "ne_activity_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_method",
    "alignment_score",
    "quality_bucket",
    "review_status",
]

REVIEW_TEMPLATE_HEADER = [
    "pair_id",
    "source_id",
    "module_id",
    "screen_id",
    "en_activity_id",
    "ne_activity_id",
    "en_text",
    "ne_text",
    "alignment_score",
    "manual_label",
    "reviewer",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Align bilingual OLE Nepal E-Paath module sentences by screen_id and activity_id.")
    parser.add_argument("--source-id")
    parser.add_argument("--align-all", action="store_true")
    parser.add_argument("--list-candidates", action="store_true")
    parser.add_argument("--window", type=int, default=1)
    parser.add_argument("--max-length-ratio", type=float, default=2.5)
    parser.add_argument("--min-score", type=float, default=0.55)
    return parser


def sentence_rows(source_id: str) -> list[dict]:
    return load_jsonl(module_sentences_path(source_id))


def length_score(en_text: str, ne_text: str, max_ratio: float) -> float:
    en_len = max(len(en_text.strip()), 1)
    ne_len = max(len(ne_text.strip()), 1)
    ratio = max(en_len, ne_len) / min(en_len, ne_len)
    if ratio > max_ratio:
        return 0.0
    return max(0.0, 1.0 - ((ratio - 1.0) / max(max_ratio - 1.0, 0.001)))


def projected_candidates(index: int, en_count: int, ne_count: int, window: int) -> range:
    if en_count <= 1 or ne_count <= 1:
        center = min(index, ne_count - 1)
    else:
        center = round(index * (ne_count - 1) / (en_count - 1))
    start = max(0, center - window)
    stop = min(ne_count, center + window + 1)
    return range(start, stop)


def align_group(
    source_id: str,
    module_id: str,
    screen_id: str,
    en_rows: list[dict],
    ne_rows: list[dict],
    window: int,
    max_ratio: float,
    min_score: float,
    pair_offset: int,
) -> tuple[list[dict[str, str]], list[dict[str, str]], list[dict[str, str]]]:
    used_ne: set[int] = set()
    raw_rows: list[dict[str, str]] = []
    scored_rows: list[dict[str, str]] = []
    template_rows: list[dict[str, str]] = []

    for en_index, en_row in enumerate(en_rows):
        best_score = -1.0
        best_ne = None
        best_ne_index = -1
        for ne_index in projected_candidates(en_index, len(en_rows), len(ne_rows), window):
            if ne_index in used_ne:
                continue
            ne_row = ne_rows[ne_index]
            score = round(
                (0.65 * (1.0 - abs((en_index / max(len(en_rows) - 1, 1)) - (ne_index / max(len(ne_rows) - 1, 1)))))
                + (0.35 * length_score(en_row["text"], ne_row["text"], max_ratio)),
                4,
            )
            if score > best_score:
                best_score = score
                best_ne = ne_row
                best_ne_index = ne_index

        if best_ne is None or best_score < min_score:
            continue

        used_ne.add(best_ne_index)
        pair_id = f"{source_id}_{pair_offset + len(raw_rows) + 1:05d}"
        quality_bucket = "high" if best_score >= 0.85 else "medium" if best_score >= 0.7 else "low"
        base = {
            "pair_id": pair_id,
            "source_id": source_id,
            "module_id": module_id,
            "screen_id": screen_id,
            "en_activity_id": str(en_row.get("activity_id", "")),
            "ne_activity_id": str(best_ne.get("activity_id", "")),
            "en_sentence_index": str(en_row.get("sentence_index", "")),
            "ne_sentence_index": str(best_ne.get("sentence_index", "")),
            "en_text": str(en_row.get("text", "")),
            "ne_text": str(best_ne.get("text", "")),
            "alignment_method": "screen_activity_position_length",
            "alignment_score": f"{best_score:.4f}",
            "review_status": "needs_manual_review",
        }
        raw_rows.append(base)
        scored_rows.append({**base, "quality_bucket": quality_bucket})
        template_rows.append(
            {
                "pair_id": pair_id,
                "source_id": source_id,
                "module_id": module_id,
                "screen_id": screen_id,
                "en_activity_id": str(en_row.get("activity_id", "")),
                "ne_activity_id": str(best_ne.get("activity_id", "")),
                "en_text": str(en_row.get("text", "")),
                "ne_text": str(best_ne.get("text", "")),
                "alignment_score": f"{best_score:.4f}",
                "manual_label": "",
                "reviewer": "",
                "notes": "",
            }
        )

    return raw_rows, scored_rows, template_rows


def replace_rows(path: Path, source_id: str, new_rows: list[dict[str, str]], header: list[str]) -> None:
    existing = read_csv(path)
    kept = [row for row in existing if row.get("source_id") != source_id]
    write_csv(path, kept + new_rows, header)


def build_candidate(row: dict[str, str]) -> dict[str, object]:
    issues: list[str] = []
    if row.get("source_name") != "OLE Nepal E-Paath":
        issues.append("unsupported_source_name")
    if row.get("data_type") not in {"bilingual_module", "verified_parallel_module"}:
        issues.append(f"data_type_not_alignable={row.get('data_type')}")
    if row.get("language_type") != "en-ne":
        issues.append("language_type_must_be_en-ne")
    if row.get("status") != "sentence_split":
        issues.append(f"status={row.get('status')}")
    sentence_path = module_sentences_path(row["source_id"])
    if not sentence_path.exists():
        issues.append("missing_sentence_split_file")
    else:
        rows = load_jsonl(sentence_path)
        languages = {record.get("language_type") for record in rows}
        if "en" not in languages:
            issues.append("missing_english_sentences")
        if "ne" not in languages:
            issues.append("missing_nepali_sentences")

    return {
        "source_id": row["source_id"],
        "module_id": row["module_id"],
        "grade": row["grade"],
        "subject": row["subject"],
        "module_slug": row["module_slug"],
        "issues": issues,
    }


def candidate_rows() -> list[dict[str, object]]:
    return [build_candidate(row) for row in load_registry()]


def print_candidates(candidates: list[dict[str, object]]) -> None:
    print("Discovered E-Paath bilingual module candidates:")
    for candidate in candidates:
        status = "READY" if not candidate["issues"] else "BLOCKED"
        print(
            f"{status:7} {candidate['source_id']} | "
            f"{candidate['grade']} | {candidate['subject']} | {candidate['module_id']}"
        )
        if candidate["issues"]:
            print(f"  issues: {'; '.join(candidate['issues'])}")


def find_registry_row(source_id: str) -> dict[str, str] | None:
    for row in load_registry():
        if row["source_id"] == source_id:
            return row
    return None


def run_alignment(row: dict[str, str], args: argparse.Namespace) -> int:
    candidate = build_candidate(row)
    if candidate["issues"]:
        raise RuntimeError(
            f"Refusing to align {row['source_id']}: {'; '.join(candidate['issues'])}. "
            "Only sentence-split bilingual E-Paath modules are alignable."
        )

    rows = sentence_rows(row["source_id"])
    en_rows = [record for record in rows if record.get("language_type") == "en"]
    ne_rows = [record for record in rows if record.get("language_type") == "ne"]

    en_by_screen: dict[str, list[dict]] = defaultdict(list)
    ne_by_screen: dict[str, list[dict]] = defaultdict(list)
    for record in en_rows:
        en_by_screen[str(record.get("screen_id", "unknown"))].append(record)
    for record in ne_rows:
        ne_by_screen[str(record.get("screen_id", "unknown"))].append(record)

    raw_rows: list[dict[str, str]] = []
    scored_rows: list[dict[str, str]] = []
    template_rows: list[dict[str, str]] = []

    for screen_id in sorted(set(en_by_screen) & set(ne_by_screen)):
        screen_en = en_by_screen[screen_id]
        screen_ne = ne_by_screen[screen_id]

        en_by_activity: dict[str, list[dict]] = defaultdict(list)
        ne_by_activity: dict[str, list[dict]] = defaultdict(list)
        for record in screen_en:
            en_by_activity[str(record.get("activity_id", ""))].append(record)
        for record in screen_ne:
            ne_by_activity[str(record.get("activity_id", ""))].append(record)

        activity_keys = sorted((set(en_by_activity) & set(ne_by_activity)) - {""})
        if activity_keys:
            for activity_key in activity_keys:
                group_raw, group_scored, group_template = align_group(
                    row["source_id"],
                    row["module_id"],
                    screen_id,
                    en_by_activity[activity_key],
                    ne_by_activity[activity_key],
                    args.window,
                    args.max_length_ratio,
                    args.min_score,
                    len(raw_rows),
                )
                raw_rows.extend(group_raw)
                scored_rows.extend(group_scored)
                template_rows.extend(group_template)
        else:
            group_raw, group_scored, group_template = align_group(
                row["source_id"],
                row["module_id"],
                screen_id,
                screen_en,
                screen_ne,
                args.window,
                args.max_length_ratio,
                args.min_score,
                len(raw_rows),
            )
            raw_rows.extend(group_raw)
            scored_rows.extend(group_scored)
            template_rows.extend(group_template)

    replace_rows(ALIGNED_DIR / "sentence_pairs_raw.csv", row["source_id"], raw_rows, RAW_HEADER)
    replace_rows(ALIGNED_DIR / "sentence_pairs_scored.csv", row["source_id"], scored_rows, SCORED_HEADER)
    replace_rows(ALIGNED_DIR / "manual_review_template.csv", row["source_id"], template_rows, REVIEW_TEMPLATE_HEADER)
    append_csv(
        "data/logs/alignment_log.csv",
        {
            "timestamp": timestamp_iso(),
            "source_id": row["source_id"],
            "module_id": row["module_id"],
            "pairs_created": str(len(raw_rows)),
            "output_path": "data/aligned/sentence_pairs_raw.csv",
            "result": "aligned" if raw_rows else "no_pairs",
            "notes": "",
        },
        ["timestamp", "source_id", "module_id", "pairs_created", "output_path", "result", "notes"],
    )
    print(f"Created {len(raw_rows)} candidate pairs for {row['source_id']}")
    return len(raw_rows)


def main() -> int:
    args = build_parser().parse_args()
    try:
        if args.source_id:
            row = find_registry_row(args.source_id)
            if row is None:
                print(f"ERROR: Unknown source ID {args.source_id}")
                return 1
            run_alignment(row, args)
            return 0

        candidates = candidate_rows()
        if args.list_candidates or not args.align_all:
            print_candidates(candidates)
            if not args.list_candidates and not args.align_all:
                print("\nRun with --align-all to align every ready bilingual module, or pass --source-id for one module.")
            return 0

        ready_rows = []
        for row in load_registry():
            candidate = build_candidate(row)
            if not candidate["issues"]:
                ready_rows.append(row)

        if not ready_rows:
            print("No alignable bilingual modules were found.")
            return 0

        total_pairs = 0
        for row in ready_rows:
            total_pairs += run_alignment(row, args)
        print(f"Aligned {len(ready_rows)} bilingual modules and created {total_pairs} candidate sentence pairs.")
        return 0
    except RuntimeError as exc:
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
