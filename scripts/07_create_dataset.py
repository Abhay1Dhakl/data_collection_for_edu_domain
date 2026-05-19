#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import random
from collections import defaultdict

from common import FINAL_DATASET_AUDIT_PATH, FINAL_DIR, GOLD_APPROVED_PATH, ensure_dirs, normalize_text, read_csv


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


def pair_signature(row: dict[str, str]) -> tuple[str, str]:
    return (
        normalize_text(row.get("en_text", "")).lower(),
        normalize_text(row.get("ne_text", "")).lower(),
    )


def deduplicate_rows(rows: list[dict[str, str]]) -> tuple[list[dict[str, str]], int]:
    unique_rows: list[dict[str, str]] = []
    seen: set[tuple[str, str]] = set()
    duplicates_removed = 0
    for row in rows:
        signature = pair_signature(row)
        if signature in seen:
            duplicates_removed += 1
            continue
        seen.add(signature)
        unique_rows.append(row)
    return unique_rows, duplicates_removed


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
            "module_quality_score": row.get("module_quality_score", ""),
            "module_risk_level": row.get("module_risk_level", ""),
            "module_quality_flags": row.get("module_quality_flags", ""),
            "review_priority": row.get("review_priority", ""),
            "auto_decision": row.get("auto_decision", ""),
            "qa_flags": row.get("qa_flags", ""),
        },
    }


def split_by_source(records: list[dict], seed: int, train_ratio: float, dev_ratio: float) -> tuple[list[dict], list[dict], list[dict]]:
    grouped: dict[str, list[dict]] = defaultdict(list)
    for record in records:
        grouped[str(record["metadata"]["source_id"])].append(record)

    source_ids = list(grouped)
    random.Random(seed).shuffle(source_ids)

    total = len(records)
    train_target = total * train_ratio
    dev_target = total * dev_ratio

    train_rows: list[dict] = []
    dev_rows: list[dict] = []
    test_rows: list[dict] = []

    for source_id in source_ids:
        group = grouped[source_id]
        if len(train_rows) < train_target:
            train_rows.extend(group)
        elif len(dev_rows) < dev_target:
            dev_rows.extend(group)
        else:
            test_rows.extend(group)

    return train_rows, dev_rows, test_rows


def build_audit_markdown(
    total: int,
    duplicates_removed: int,
    approved_source_count: int,
    train_rows: list[dict],
    dev_rows: list[dict],
    test_rows: list[dict],
    seed: int,
) -> str:
    train_sources = sorted({row["metadata"]["source_id"] for row in train_rows})
    dev_sources = sorted({row["metadata"]["source_id"] for row in dev_rows})
    test_sources = sorted({row["metadata"]["source_id"] for row in test_rows})
    warnings: list[str] = []

    if approved_source_count < 3:
        warnings.append("Too few reviewed source modules for a reliable train/dev/test evaluation split.")
    if not dev_rows or not test_rows:
        warnings.append("At least one evaluation split is empty.")

    lines = [
        "# Final Dataset Audit",
        "",
        f"- Total approved pairs after deduplication: {total}",
        f"- Exact duplicate pairs removed: {duplicates_removed}",
        f"- Approved source modules: {approved_source_count}",
        f"- Train pairs: {len(train_rows)} from {len(train_sources)} modules",
        f"- Dev pairs: {len(dev_rows)} from {len(dev_sources)} modules",
        f"- Test pairs: {len(test_rows)} from {len(test_sources)} modules",
        f"- Split seed: {seed}",
        "",
        "## Split Policy",
        "",
        "- Source modules are kept intact per split to avoid sentence-level leakage.",
        "",
        "## Warnings",
        "",
    ]
    if warnings:
        lines.extend(f"- {warning}" for warning in warnings)
    else:
        lines.append("- None")
    return "\n".join(lines)


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    approved_rows = read_csv(GOLD_APPROVED_PATH)
    if not approved_rows:
        print("No approved sentence pairs found.")
        print("Run scripts/06_apply_reviews.py after labeling the review template.")
        return 0

    approved_rows, duplicates_removed = deduplicate_rows(approved_rows)
    records = [to_record(row) for row in approved_rows]
    train_rows, dev_rows, test_rows = split_by_source(records, args.seed, args.train_ratio, args.dev_ratio)

    FINAL_DIR.mkdir(parents=True, exist_ok=True)
    write_jsonl(FINAL_DIR / "education_en_ne_gold.jsonl", records)
    write_jsonl(FINAL_DIR / "train.jsonl", train_rows)
    write_jsonl(FINAL_DIR / "dev.jsonl", dev_rows)
    write_jsonl(FINAL_DIR / "test.jsonl", test_rows)

    dataset_card = "\n".join(
        [
            "# E-Paath Education EN-NE Gold Dataset",
            "",
            f"- Total approved pairs after deduplication: {len(records)}",
            f"- Exact duplicate pairs removed: {duplicates_removed}",
            f"- Train pairs: {len(train_rows)}",
            f"- Dev pairs: {len(dev_rows)}",
            f"- Test pairs: {len(test_rows)}",
            f"- Split seed: {args.seed}",
            "",
            "This dataset only contains manually approved sentence pairs extracted from bilingual OLE Nepal E-Paath modules.",
            "Splits are assigned by source module to reduce train/dev/test leakage.",
        ]
    )
    (FINAL_DIR / "dataset_card.md").write_text(dataset_card, encoding="utf-8")
    FINAL_DATASET_AUDIT_PATH.write_text(
        build_audit_markdown(
            total=len(records),
            duplicates_removed=duplicates_removed,
            approved_source_count=len({row["source_id"] for row in approved_rows}),
            train_rows=train_rows,
            dev_rows=dev_rows,
            test_rows=test_rows,
            seed=args.seed,
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(records)} approved pairs into final JSONL files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
