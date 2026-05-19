#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import random
from datetime import date

from common import FINAL_DIR, read_csv


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Create final train/dev/test splits from approved E-Paath pairs.")
    parser.add_argument("--seed", type=int, default=13)
    parser.add_argument("--train-ratio", type=float, default=0.8)
    parser.add_argument("--dev-ratio", type=float, default=0.1)
    return parser


def write_jsonl(path, rows):
    with open(path, "w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")


def to_record(row: dict[str, str]) -> dict:
    return {
        "id": row["pair_id"],
        "translation": {
            "en": row["en_text"],
            "ne": row["ne_text"],
        },
        "metadata": {
            "source_id": row["source_id"],
            "module_id": row["module_id"],
            "screen_id": row["screen_id"],
            "en_activity_id": row["en_activity_id"],
            "ne_activity_id": row["ne_activity_id"],
            "alignment_score": row["alignment_score"],
        },
    }


def main() -> int:
    args = build_parser().parse_args()
    gold_rows = read_csv("data/reviewed/gold_approved_pairs.csv")
    records = [to_record(row) for row in gold_rows]

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

    dataset_card = f"""# Education EN-NE Gold Dataset Card

Generated on: {date.today().isoformat()}

- Total approved pairs: {total}
- Train pairs: {len(train_rows)}
- Dev pairs: {len(dev_rows)}
- Test pairs: {len(test_rows)}
- Split seed: {args.seed}

This dataset only includes manually approved sentence pairs extracted from bilingual OLE Nepal E-Paath module assets.
"""
    (FINAL_DIR / "dataset_card.md").write_text(dataset_card, encoding="utf-8")
    print(f"Wrote {total} approved pairs into final splits.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
