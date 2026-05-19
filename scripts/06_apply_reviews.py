#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    GOLD_APPROVED_PATH,
    GOLD_HEADER,
    MANUAL_REVIEW_TEMPLATE_PATH,
    REJECTED_HEADER,
    REJECTED_PATH,
    REVIEW_NOTES_HEADER,
    REVIEW_NOTES_PATH,
    append_csv,
    ensure_dirs,
    load_registry,
    read_csv,
    save_registry,
    utc_now_iso,
    write_csv,
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Apply manual review labels to sentence candidates and create approved/rejected sets.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--update-status", action="store_true")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    review_rows = read_csv(MANUAL_REVIEW_TEMPLATE_PATH)
    if args.source_id:
        allowed = set(args.source_id)
        review_rows = [row for row in review_rows if row.get("source_id") in allowed]

    if not review_rows:
        print("No manual review rows found. Run scripts/05_prepare_review.py first.")
        return 0

    approved: list[dict[str, str]] = []
    rejected: list[dict[str, str]] = []
    notes: list[dict[str, str]] = []
    labeled_count = 0
    now = utc_now_iso()

    for row in review_rows:
        label = row.get("manual_label", "").strip().lower()
        reviewer = row.get("reviewer", "").strip()
        note = row.get("notes", "").strip()
        if label:
            labeled_count += 1

        if label in {"approved", "approve", "accept", "gold"}:
            approved.append(
                {
                    **{field: row.get(field, "") for field in GOLD_HEADER if field not in {"reviewer", "approved_at", "notes"}},
                    "reviewer": reviewer,
                    "approved_at": now,
                    "notes": note,
                }
            )
        elif label in {"rejected", "reject", "drop"}:
            rejected.append(
                {
                    **{field: row.get(field, "") for field in REJECTED_HEADER if field not in {"reviewer", "rejected_at", "notes"}},
                    "reviewer": reviewer,
                    "rejected_at": now,
                    "notes": note,
                }
            )

        if note:
            notes.append(
                {
                    "candidate_id": row["candidate_id"],
                    "source_id": row["source_id"],
                    "reviewer": reviewer,
                    "note_type": "manual_review",
                    "note": note,
                    "created_at": now,
                }
            )

    write_csv(GOLD_APPROVED_PATH, approved, GOLD_HEADER)
    write_csv(REJECTED_PATH, rejected, REJECTED_HEADER)
    write_csv(REVIEW_NOTES_PATH, notes, REVIEW_NOTES_HEADER)

    print(f"Approved: {len(approved)}")
    print(f"Rejected: {len(rejected)}")
    if labeled_count == 0:
        print("No manual labels found in the review template.")
        print("Fill manual_label with approved or rejected, then rerun this script.")

    if args.update_status and approved:
        registry_rows = load_registry()
        approved_sources = {row["source_id"] for row in approved}
        for row in registry_rows:
            if row.get("source_id") in approved_sources:
                row["status"] = "reviewed"
        save_registry(registry_rows)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
