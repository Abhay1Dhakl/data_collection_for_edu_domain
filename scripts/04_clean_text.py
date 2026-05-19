#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    advance_status,
    format_status_counts,
    load_jsonl,
    load_registry,
    module_cleaned_path,
    module_extracted_path,
    normalize_text,
    save_registry,
    write_jsonl,
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Normalize extracted OLE Nepal E-Paath module text records.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def requested_statuses(args: argparse.Namespace) -> list[str]:
    return args.status or ["extracted"]


def should_use_row(row: dict[str, str], args: argparse.Namespace) -> bool:
    if args.source_id:
        if row["source_id"] not in args.source_id:
            return False
        if args.status and row["status"] not in args.status:
            return False
        return True
    return row["status"] in requested_statuses(args)


def main() -> int:
    args = build_parser().parse_args()
    registry_rows = load_registry()
    selected = [row for row in registry_rows if should_use_row(row, args)][: args.limit]

    if not selected:
        if args.source_id:
            print(f"No registry rows matched the requested source IDs: {', '.join(args.source_id)}")
            if args.status:
                print(f"Requested statuses: {', '.join(args.status)}")
            else:
                print("Use --overwrite to re-clean an already processed module.")
        else:
            print("No modules are ready for text cleaning.")
            print(f"Expected statuses: {', '.join(requested_statuses(args))}")
            print(f"Current registry statuses: {format_status_counts(registry_rows)}")
            print("Use --source-id <SOURCE_ID> --overwrite to re-clean an existing module.")
        return 0

    by_id = {row["source_id"]: row for row in registry_rows}

    for row in selected:
        source_id = row["source_id"]
        input_path = module_extracted_path(source_id)
        output_path = module_cleaned_path(source_id)

        if not input_path.exists():
            print(f"{source_id}: skipped, extracted JSONL not found")
            continue
        if output_path.exists() and not args.overwrite:
            print(f"{source_id}: skipped, cleaned JSONL already exists")
            continue

        rows = load_jsonl(input_path)
        cleaned_rows: list[dict] = []
        seen: set[tuple[str, str, str, str]] = set()
        for entry in rows:
            text = normalize_text(str(entry.get("text", "")))
            if not text:
                continue
            key = (
                str(entry.get("language_type", "")),
                str(entry.get("screen_id", "")),
                str(entry.get("activity_id", "")),
                text,
            )
            if key in seen:
                continue
            seen.add(key)
            cleaned_rows.append({**entry, "text": text})

        write_jsonl(output_path, cleaned_rows)
        if args.update_status:
            by_id[source_id]["status"] = advance_status(by_id[source_id].get("status", ""), "cleaned")
        print(f"{source_id}: cleaned {len(cleaned_rows)} records")

    if args.update_status:
        save_registry(list(by_id.values()))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
