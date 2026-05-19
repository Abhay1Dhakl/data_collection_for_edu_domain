#!/usr/bin/env python3
from __future__ import annotations

import argparse
import math
from pathlib import Path

from common import ALIGNED_DIR, append_csv, load_jsonl, read_csv, timestamp_iso, write_csv

RAW_HEADER = [
    "pair_id",
    "en_source_id",
    "ne_source_id",
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
    "en_source_id",
    "ne_source_id",
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
    "en_source_id",
    "ne_source_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_score",
    "manual_label",
    "reviewer",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Create conservative candidate alignments for near-parallel sources.")
    parser.add_argument("--en-source", required=True)
    parser.add_argument("--ne-source", required=True)
    parser.add_argument("--window", type=int, default=2)
    parser.add_argument("--max-length-ratio", type=float, default=2.5)
    parser.add_argument("--min-score", type=float, default=0.55)
    return parser


def sentence_path(source_id: str) -> Path | None:
    matches = list(Path("data/extracted").rglob(f"{source_id}.sentences.jsonl"))
    return matches[0] if matches else None


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


def align_sentences(
    en_rows: list[dict],
    ne_rows: list[dict],
    en_source: str,
    ne_source: str,
    window: int,
    max_ratio: float,
    min_score: float,
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
            length_component = length_score(en_row["text"], ne_row["text"], max_ratio)
            position_component = 1.0 - (
                abs((en_index / max(len(en_rows) - 1, 1)) - (ne_index / max(len(ne_rows) - 1, 1)))
            )
            score = round((0.65 * position_component) + (0.35 * length_component), 4)
            if score > best_score:
                best_score = score
                best_ne = ne_row
                best_ne_index = ne_index

        if best_ne is None or best_score < min_score:
            continue

        used_ne.add(best_ne_index)
        pair_id = f"{en_source}_{ne_source}_{len(raw_rows) + 1:05d}"
        review_status = "needs_manual_review"
        quality_bucket = "high" if best_score >= 0.85 else "medium" if best_score >= 0.7 else "low"

        base = {
            "pair_id": pair_id,
            "en_source_id": en_source,
            "ne_source_id": ne_source,
            "en_sentence_index": str(en_row["sentence_index"]),
            "ne_sentence_index": str(best_ne["sentence_index"]),
            "en_text": en_row["text"],
            "ne_text": best_ne["text"],
            "alignment_method": "position_length_heuristic",
            "alignment_score": f"{best_score:.4f}",
            "review_status": review_status,
        }
        raw_rows.append(base)
        scored_rows.append({**base, "quality_bucket": quality_bucket})
        template_rows.append(
            {
                "pair_id": pair_id,
                "en_source_id": en_source,
                "ne_source_id": ne_source,
                "en_sentence_index": str(en_row["sentence_index"]),
                "ne_sentence_index": str(best_ne["sentence_index"]),
                "en_text": en_row["text"],
                "ne_text": best_ne["text"],
                "alignment_score": f"{best_score:.4f}",
                "manual_label": "",
                "reviewer": "",
                "notes": "",
            }
        )

    return raw_rows, scored_rows, template_rows


def replace_rows(path: Path, new_rows: list[dict[str, str]], key_fields: tuple[str, str], header: list[str]) -> None:
    existing = read_csv(path)
    kept = [
        row
        for row in existing
        if not (row.get(key_fields[0]) == new_rows[0][key_fields[0]] and row.get(key_fields[1]) == new_rows[0][key_fields[1]])
    ] if new_rows else existing
    write_csv(path, kept + new_rows, header)


def main() -> int:
    args = build_parser().parse_args()
    en_path = sentence_path(args.en_source)
    ne_path = sentence_path(args.ne_source)
    if en_path is None or ne_path is None:
        print("Sentence JSONL not found for one or both source IDs.")
        return 1

    en_rows = load_jsonl(en_path)
    ne_rows = load_jsonl(ne_path)
    if not en_rows or not ne_rows:
        print("Empty sentence list for one or both sources.")
        return 1

    raw_rows, scored_rows, template_rows = align_sentences(
        en_rows,
        ne_rows,
        args.en_source,
        args.ne_source,
        args.window,
        args.max_length_ratio,
        args.min_score,
    )

    replace_rows(ALIGNED_DIR / "sentence_pairs_raw.csv", raw_rows, ("en_source_id", "ne_source_id"), RAW_HEADER)
    replace_rows(ALIGNED_DIR / "sentence_pairs_scored.csv", scored_rows, ("en_source_id", "ne_source_id"), SCORED_HEADER)
    replace_rows(ALIGNED_DIR / "manual_review_template.csv", template_rows, ("en_source_id", "ne_source_id"), REVIEW_TEMPLATE_HEADER)
    append_csv(
        Path("data/logs/alignment_log.csv"),
        {
            "timestamp": timestamp_iso(),
            "en_source_id": args.en_source,
            "ne_source_id": args.ne_source,
            "pairs_created": str(len(raw_rows)),
            "output_path": "data/aligned/sentence_pairs_raw.csv",
            "result": "aligned" if raw_rows else "no_pairs",
            "notes": "",
        },
        [
            "timestamp",
            "en_source_id",
            "ne_source_id",
            "pairs_created",
            "output_path",
            "result",
            "notes",
        ],
    )
    print(f"Created {len(raw_rows)} candidate pairs for {args.en_source} vs {args.ne_source}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
