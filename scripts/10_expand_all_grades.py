#!/usr/bin/env python3
from __future__ import annotations

import argparse
import pathlib
import subprocess
import sys

from common import load_registry, module_pairs_path, module_raw_dir, module_records_path


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Resume the full bilingual EN-NE pipeline across grades 1-8 in manageable batches."
    )
    parser.add_argument("--grades", nargs="+", default=[str(i) for i in range(1, 9)])
    parser.add_argument("--chunk-size", type=int, default=25)
    parser.add_argument("--download-timeout", type=int, default=12)
    parser.add_argument("--download-only", action="store_true")
    parser.add_argument("--extract-only", action="store_true")
    parser.add_argument("--pair-only", action="store_true")
    parser.add_argument("--overwrite", action="store_true")
    return parser


def bilingual_rows_for_grades(grades: set[str]) -> list[dict[str, str]]:
    rows = load_registry()
    return [row for row in rows if row.get("language_type") == "en-ne" and row.get("grade") in grades]


def chunked(values: list[str], size: int) -> list[list[str]]:
    return [values[index : index + size] for index in range(0, len(values), size)]


def run_script(script_name: str, source_ids: list[str], extra_args: list[str]) -> None:
    if not source_ids:
        return
    command = ["python3", f"scripts/{script_name}", "--limit", "100000"]
    if extra_args:
        command.extend(extra_args)
    for source_id in source_ids:
        command.extend(["--source-id", source_id])
    result = subprocess.run(command)
    if result.returncode != 0:
        raise SystemExit(result.returncode)


def main() -> int:
    args = build_parser().parse_args()
    grades = set(args.grades)
    rows = bilingual_rows_for_grades(grades)
    if not rows:
        print("No bilingual rows found for the requested grades.")
        return 1

    only_download = args.download_only
    only_extract = args.extract_only
    only_pair = args.pair_only
    if sum([only_download, only_extract, only_pair]) > 1:
        print("Use at most one of --download-only, --extract-only, or --pair-only.")
        return 1

    missing_downloads = [row["source_id"] for row in rows if not module_raw_dir(row["source_id"]).exists()]
    missing_extracts = [
        row["source_id"]
        for row in rows
        if module_raw_dir(row["source_id"]).exists() and not module_records_path(row["source_id"]).exists()
    ]
    missing_pairs = [
        row["source_id"]
        for row in rows
        if module_records_path(row["source_id"]).exists() and not module_pairs_path(row["source_id"]).exists()
    ]

    print(f"Requested grades: {', '.join(sorted(grades, key=int))}")
    print(f"Total bilingual modules: {len(rows)}")
    print(f"Missing downloads: {len(missing_downloads)}")
    print(f"Missing extracts: {len(missing_extracts)}")
    print(f"Missing pairs: {len(missing_pairs)}")

    if not only_extract and not only_pair:
        download_args = ["--update-status", "--timeout", str(args.download_timeout)]
        if args.overwrite:
            download_args.append("--overwrite")
        for batch in chunked(missing_downloads, args.chunk_size):
            print(f"Downloading batch of {len(batch)} modules")
            run_script("02_download_assets.py", batch, download_args)

    if not only_download and not only_pair:
        refreshed_rows = bilingual_rows_for_grades(grades)
        pending_extracts = [
            row["source_id"]
            for row in refreshed_rows
            if module_raw_dir(row["source_id"]).exists() and (args.overwrite or not module_records_path(row["source_id"]).exists())
        ]
        extract_args = ["--update-status"]
        if args.overwrite:
            extract_args.append("--overwrite")
        for batch in chunked(pending_extracts, args.chunk_size):
            print(f"Extracting batch of {len(batch)} modules")
            run_script("03_extract_records.py", batch, extract_args)

    if not only_download and not only_extract:
        refreshed_rows = bilingual_rows_for_grades(grades)
        pending_pairs = [
            row["source_id"]
            for row in refreshed_rows
            if module_records_path(row["source_id"]).exists() and (args.overwrite or not module_pairs_path(row["source_id"]).exists())
        ]
        pair_args = ["--update-status"]
        if args.overwrite:
            pair_args.append("--overwrite")
        for batch in chunked(pending_pairs, args.chunk_size):
            print(f"Pairing batch of {len(batch)} modules")
            run_script("04_pair_records.py", batch, pair_args)

    print("Expansion run finished.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
