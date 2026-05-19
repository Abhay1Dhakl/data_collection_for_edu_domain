#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter

from common import (
    GOLD_APPROVED_PATH,
    MANUAL_REVIEW_TEMPLATE_PATH,
    RECORD_REVIEW_QUEUE_PATH,
    SENTENCE_CANDIDATES_PATH,
    count_nonempty_rows,
    format_status_counts,
    load_registry,
    read_csv,
)


def print_counter(label: str, values: list[str]) -> None:
    counter = Counter(values)
    print(label)
    for key, count in sorted(counter.items()):
        print(f"  {key}: {count}")


def main() -> int:
    rows = load_registry()
    if not rows:
        print("Registry is empty. Run scripts/01_discover_modules.py first.")
        return 0

    print(f"Total modules: {len(rows)}")
    print(f"By status: {format_status_counts(rows)}")
    print_counter("By subject:", [row["subject"] for row in rows])
    print_counter("By language_type:", [row["language_type"] for row in rows])

    print("")
    print(f"Sentence candidates: {count_nonempty_rows(SENTENCE_CANDIDATES_PATH)}")
    print(f"Record review queue: {count_nonempty_rows(RECORD_REVIEW_QUEUE_PATH)}")
    review_rows = read_csv(MANUAL_REVIEW_TEMPLATE_PATH)
    labeled = sum(1 for row in review_rows if row.get("manual_label", "").strip())
    print(f"Manual review rows: {len(review_rows)}")
    print(f"Manual review labeled: {labeled}")
    print(f"Approved gold pairs: {count_nonempty_rows(GOLD_APPROVED_PATH)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
