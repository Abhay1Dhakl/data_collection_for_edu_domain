#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    MANUAL_REVIEW_HEADER,
    MANUAL_REVIEW_TEMPLATE_PATH,
    REVIEW_NOTES_PATH,
    SENTENCE_CANDIDATES_PATH,
    ensure_dirs,
    read_csv,
    write_csv,
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Create or refresh the manual review template from sentence candidates.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--overwrite", action="store_true")
    return parser


def screen_priority(screen_id: str) -> tuple[int, str]:
    if screen_id == "overview":
        return (0, screen_id)
    if screen_id.startswith("page"):
        try:
            return (1, f"{int(screen_id[4:]):03d}")
        except ValueError:
            return (1, screen_id)
    if screen_id == "exercise":
        return (2, screen_id)
    if screen_id == "global":
        return (3, screen_id)
    return (4, screen_id)


def bucket_priority(bucket: str) -> int:
    order = {
        "high_exact_single_sentence": 0,
        "high_exact_multi_sentence": 1,
        "medium_global_ui": 2,
        "low_shared_text": 3,
    }
    return order.get(bucket, 9)


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    candidates = read_csv(SENTENCE_CANDIDATES_PATH)
    if args.source_id:
        allowed = set(args.source_id)
        candidates = [row for row in candidates if row.get("source_id") in allowed]

    if not candidates:
        print("No sentence candidates found. Run scripts/04_pair_records.py first.")
        return 0

    previous_rows = read_csv(MANUAL_REVIEW_TEMPLATE_PATH)
    previous_by_id = {row["candidate_id"]: row for row in previous_rows}

    review_rows: list[dict[str, str]] = []
    for candidate in candidates:
        previous = previous_by_id.get(candidate["candidate_id"], {})
        review_rows.append(
            {
                "candidate_id": candidate["candidate_id"],
                "source_id": candidate["source_id"],
                "module_id": candidate["module_id"],
                "grade": candidate["grade"],
                "subject": candidate["subject"],
                "subdomain": candidate["subdomain"],
                "screen_id": candidate["screen_id"],
                "activity_id": candidate["activity_id"],
                "record_key": candidate["record_key"],
                "pair_method": candidate["pair_method"],
                "candidate_bucket": candidate["candidate_bucket"],
                "en_sentence_index": candidate["en_sentence_index"],
                "ne_sentence_index": candidate["ne_sentence_index"],
                "en_text": candidate["en_text"],
                "ne_text": candidate["ne_text"],
                "manual_label": previous.get("manual_label", ""),
                "reviewer": previous.get("reviewer", ""),
                "notes": previous.get("notes", ""),
            }
        )

    review_rows = sorted(
        review_rows,
        key=lambda row: (
            row["source_id"],
            bucket_priority(row["candidate_bucket"]),
            screen_priority(row["screen_id"]),
            row["activity_id"],
            row["en_sentence_index"],
        ),
    )
    if MANUAL_REVIEW_TEMPLATE_PATH.exists() and not args.overwrite and not previous_rows:
        print("Manual review template already exists.")
    write_csv(MANUAL_REVIEW_TEMPLATE_PATH, review_rows, MANUAL_REVIEW_HEADER)
    if not REVIEW_NOTES_PATH.exists():
        write_csv(REVIEW_NOTES_PATH, [], ["candidate_id", "source_id", "reviewer", "note_type", "note", "created_at"])
    print(f"Wrote {len(review_rows)} review rows to {MANUAL_REVIEW_TEMPLATE_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
