#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import EXTRACTED_DIR, load_registry, sentence_jsonl_variant, split_sentences, write_jsonl


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Split cleaned text into sentence JSONL files.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--use-raw", action="store_true", help="Use .txt files instead of .clean.txt files.")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    registry = {row["source_id"]: row for row in load_registry()}

    if args.use_raw:
        candidates = sorted(path for path in EXTRACTED_DIR.rglob("*.txt") if not path.name.endswith(".clean.txt"))
    else:
        candidates = sorted(EXTRACTED_DIR.rglob("*.clean.txt"))

    if args.source_id:
        allowed = set(args.source_id)
        candidates = [path for path in candidates if path.name.split(".")[0] in allowed]

    if not candidates:
        print("No text files found for sentence splitting.")
        return 0

    for path in candidates:
        source_id = path.name.split(".")[0]
        row = registry.get(source_id)
        if not row:
            print(f"{source_id}: skipped, not found in registry")
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        sentences = split_sentences(text, row["language_type"])
        records = [
            {
                "source_id": source_id,
                "sentence_index": index,
                "language_type": row["language_type"],
                "text": sentence,
            }
            for index, sentence in enumerate(sentences)
        ]
        output_path = sentence_jsonl_variant(path)
        write_jsonl(output_path, records)
        print(f"{source_id}: wrote {len(records)} sentences")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
