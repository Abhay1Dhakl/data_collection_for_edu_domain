#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

from common import EXTRACTED_DIR, cleaned_variant, normalize_text


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Normalize extracted text files.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--overwrite", action="store_true")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    candidates = sorted(path for path in EXTRACTED_DIR.rglob("*.txt") if not path.name.endswith(".clean.txt"))

    if args.source_id:
        allowed = set(args.source_id)
        candidates = [path for path in candidates if path.stem in allowed]

    if not candidates:
        print("No extracted text files found.")
        return 0

    for path in candidates:
        output_path = cleaned_variant(path)
        if output_path.exists() and not args.overwrite:
            print(f"{path.stem}: skipped")
            continue
        cleaned = normalize_text(path.read_text(encoding="utf-8", errors="ignore"))
        output_path.write_text(cleaned + "\n", encoding="utf-8")
        print(f"{path.stem}: cleaned")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
