#!/usr/bin/env python3
from __future__ import annotations

import argparse
from datetime import date

from common import read_csv, write_csv


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Convert reviewed E-Paath alignment candidates into approved and rejected sets.")
    parser.add_argument("--score-threshold", type=float, default=0.9)
    parser.add_argument("--allow-score-only", action="store_true")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    review_rows = read_csv("data/aligned/manual_review_template.csv")
    today = date.today().isoformat()

    approved: list[dict[str, str]] = []
    rejected: list[dict[str, str]] = []
    notes: list[dict[str, str]] = []

    for row in review_rows:
        label = row.get("manual_label", "").strip().lower()
        note = row.get("notes", "").strip()
        score = float(row.get("alignment_score", "0") or "0")

        if label in {"approved", "accept", "gold"} or (args.allow_score_only and not label and score >= args.score_threshold):
            approved.append(
                {
                    "pair_id": row["pair_id"],
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "screen_id": row["screen_id"],
                    "en_activity_id": row["en_activity_id"],
                    "ne_activity_id": row["ne_activity_id"],
                    "en_text": row["en_text"],
                    "ne_text": row["ne_text"],
                    "alignment_score": row["alignment_score"],
                    "reviewer": row.get("reviewer", ""),
                    "approved_date": today,
                    "notes": note,
                }
            )
        elif label in {"rejected", "reject", "drop"}:
            rejected.append(
                {
                    "pair_id": row["pair_id"],
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "screen_id": row["screen_id"],
                    "en_activity_id": row["en_activity_id"],
                    "ne_activity_id": row["ne_activity_id"],
                    "en_text": row["en_text"],
                    "ne_text": row["ne_text"],
                    "alignment_score": row["alignment_score"],
                    "reviewer": row.get("reviewer", ""),
                    "rejected_date": today,
                    "notes": note,
                }
            )

        if note:
            notes.append(
                {
                    "pair_id": row["pair_id"],
                    "source_id": row["source_id"],
                    "reviewer": row.get("reviewer", ""),
                    "note_type": "manual_review",
                    "note": note,
                    "created_date": today,
                }
            )

    write_csv(
        "data/reviewed/gold_approved_pairs.csv",
        approved,
        [
            "pair_id",
            "source_id",
            "module_id",
            "screen_id",
            "en_activity_id",
            "ne_activity_id",
            "en_text",
            "ne_text",
            "alignment_score",
            "reviewer",
            "approved_date",
            "notes",
        ],
    )
    write_csv(
        "data/reviewed/rejected_pairs.csv",
        rejected,
        [
            "pair_id",
            "source_id",
            "module_id",
            "screen_id",
            "en_activity_id",
            "ne_activity_id",
            "en_text",
            "ne_text",
            "alignment_score",
            "reviewer",
            "rejected_date",
            "notes",
        ],
    )
    write_csv(
        "data/reviewed/review_notes.csv",
        notes,
        ["pair_id", "source_id", "reviewer", "note_type", "note", "created_date"],
    )

    print(f"Approved: {len(approved)}")
    print(f"Rejected: {len(rejected)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
