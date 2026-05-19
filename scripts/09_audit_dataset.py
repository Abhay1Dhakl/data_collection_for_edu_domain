#!/usr/bin/env python3
from __future__ import annotations

from collections import Counter
from pathlib import Path

from common import (
    EXCLUDED_CANDIDATES_PATH,
    FINAL_DATASET_AUDIT_PATH,
    FINAL_DIR,
    GOLD_APPROVED_PATH,
    MANUAL_REVIEW_TEMPLATE_PATH,
    MODULE_QUALITY_AUDIT_PATH,
    RECORD_REVIEW_QUEUE_PATH,
    REGISTRY_PATH,
    SENTENCE_CANDIDATES_PATH,
    count_nonempty_rows,
    read_csv,
)


def jsonl_count(path: Path) -> int:
    if not path.exists():
        return 0
    with path.open("r", encoding="utf-8") as handle:
        return sum(1 for line in handle if line.strip())


def main() -> int:
    registry_rows = read_csv(REGISTRY_PATH)
    module_quality_rows = read_csv(MODULE_QUALITY_AUDIT_PATH)
    review_rows = read_csv(MANUAL_REVIEW_TEMPLATE_PATH)
    labeled_review_rows = [row for row in review_rows if str(row.get("manual_label", "") or "").strip()]
    approved_rows = read_csv(GOLD_APPROVED_PATH)

    status_counts = Counter(row.get("status", "unknown") for row in registry_rows)
    risk_counts = Counter(row.get("risk_level", "unknown") for row in module_quality_rows)

    blockers: list[str] = []
    if not approved_rows:
        blockers.append("No manually approved gold pairs exist yet.")
    if review_rows and len(labeled_review_rows) != len(review_rows):
        blockers.append("Manual review is incomplete.")
    if risk_counts.get("high", 0):
        blockers.append(f"{risk_counts['high']} audited modules are still high risk.")
    if count_nonempty_rows(RECORD_REVIEW_QUEUE_PATH):
        blockers.append("Record-level review queue still contains unresolved items.")

    final_gold_path = FINAL_DIR / "education_en_ne_gold.jsonl"
    train_path = FINAL_DIR / "train.jsonl"
    dev_path = FINAL_DIR / "dev.jsonl"
    test_path = FINAL_DIR / "test.jsonl"
    gold_ready = not blockers and final_gold_path.exists()

    lines = [
        "# Dataset Audit",
        "",
        f"- Gold readiness: {'YES' if gold_ready else 'NO'}",
        f"- Registry modules: {len(registry_rows)}",
        f"- Registry statuses: {', '.join(f'{key}={value}' for key, value in sorted(status_counts.items())) or 'none'}",
        f"- Audited modules: {len(module_quality_rows)}",
        f"- Module risk levels: {', '.join(f'{key}={value}' for key, value in sorted(risk_counts.items())) or 'none'}",
        f"- Sentence candidates for review: {count_nonempty_rows(SENTENCE_CANDIDATES_PATH)}",
        f"- Excluded low-value candidate pairs: {count_nonempty_rows(EXCLUDED_CANDIDATES_PATH)}",
        f"- Record review queue items: {count_nonempty_rows(RECORD_REVIEW_QUEUE_PATH)}",
        f"- Manual review rows: {len(review_rows)}",
        f"- Manual review labeled: {len(labeled_review_rows)}",
        f"- Approved gold pairs: {len(approved_rows)}",
        f"- Final JSONL pairs: {jsonl_count(final_gold_path)}",
        f"- Train/Dev/Test sizes: {jsonl_count(train_path)}/{jsonl_count(dev_path)}/{jsonl_count(test_path)}",
        "",
        "## Blockers",
        "",
    ]

    if blockers:
        lines.extend(f"- {blocker}" for blocker in blockers)
    else:
        lines.append("- None")

    lines.extend(
        [
            "",
            "## Recommended Next Step",
            "",
        ]
    )
    if not review_rows:
        lines.append("- Run `python3 scripts/05_prepare_review.py` after pairing is complete.")
    elif len(labeled_review_rows) != len(review_rows):
        lines.append("- Finish the manual review sheet, starting with rows tagged `review_priority=high`.")
    elif not approved_rows:
        lines.append("- Re-run `python3 scripts/06_apply_reviews.py --update-status` after labeling approved pairs.")
    elif not final_gold_path.exists():
        lines.append("- Run `python3 scripts/07_create_dataset.py` to build the final grouped splits.")
    else:
        lines.append("- Dataset artifacts exist; spot-check the final JSONL and audit report before research use.")

    FINAL_DATASET_AUDIT_PATH.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote audit report to {FINAL_DATASET_AUDIT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
