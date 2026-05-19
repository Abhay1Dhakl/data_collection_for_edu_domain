#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import random

from common import FINAL_DIR, GOLD_APPROVED_PATH, ensure_dirs, read_csv


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Create final train/dev/test JSONL files from approved E-Paath sentence pairs.")
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--train-ratio", type=float, default=0.8)
    parser.add_argument("--dev-ratio", type=float, default=0.1)
    return parser


def write_jsonl(path, rows) -> None:
    with open(path, "w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")


def to_record(row: dict[str, str]) -> dict:
    return {
        "id": row["candidate_id"],
        "translation": {
            "en": row["en_text"],
            "ne": row["ne_text"],
        },
        "metadata": {
            "source_id": row["source_id"],
            "module_id": row["module_id"],
            "grade": row["grade"],
            "subject": row["subject"],
            "subdomain": row["subdomain"],
            "screen_id": row["screen_id"],
            "activity_id": row["activity_id"],
            "record_key": row["record_key"],
            "pair_method": row["pair_method"],
            "candidate_bucket": row["candidate_bucket"],
        },
    }


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    approved_rows = read_csv(GOLD_APPROVED_PATH)
    if not approved_rows:
        print("No approved sentence pairs found.")
        print("Run scripts/06_apply_reviews.py after labeling the review template.")
        return 0

    records = [to_record(row) for row in approved_rows]
    random.Random(args.seed).shuffle(records)

    total = len(records)
    train_end = int(total * args.train_ratio)
    dev_end = train_end + int(total * args.dev_ratio)

    train_rows = records[:train_end]
    dev_rows = records[train_end:dev_end]
    test_rows = records[dev_end:]

    FINAL_DIR.mkdir(parents=True, exist_ok=True)
    write_jsonl(FINAL_DIR / "education_en_ne_gold.jsonl", records)
    write_jsonl(FINAL_DIR / "train.jsonl", train_rows)
    write_jsonl(FINAL_DIR / "dev.jsonl", dev_rows)
    write_jsonl(FINAL_DIR / "test.jsonl", test_rows)

    dataset_card = "\n".join(
        [
            "# E-Paath Education EN-NE Gold Dataset",
            "",
            f"- Total approved pairs: {total}",
            f"- Train pairs: {len(train_rows)}",
            f"- Dev pairs: {len(dev_rows)}",
            f"- Test pairs: {len(test_rows)}",
            f"- Split seed: {args.seed}",
            "",
            "This dataset only contains manually approved sentence pairs extracted from bilingual OLE Nepal E-Paath modules.",
        ]
    )
    (FINAL_DIR / "dataset_card.md").write_text(dataset_card, encoding="utf-8")
    print(f"Wrote {total} approved pairs into final JSONL files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
