#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    advance_status,
    format_status_counts,
    load_jsonl,
    load_registry,
    module_extracted_path,
    module_sentences_path,
    module_cleaned_path,
    save_registry,
    split_sentences,
    write_jsonl,
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Split cleaned OLE Nepal E-Paath module records into sentence JSONL files.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--use-raw", action="store_true", help="Use .jsonl files instead of .clean.jsonl files.")
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def requested_statuses(args: argparse.Namespace) -> list[str]:
    return ["extracted"] if args.use_raw else ["cleaned"]


def should_use_row(row: dict[str, str], args: argparse.Namespace) -> bool:
    if args.source_id:
        if row["source_id"] not in args.source_id:
            return False
        if args.status and row["status"] not in args.status:
            return False
        return True
    return row["status"] in (args.status or requested_statuses(args))


def main() -> int:
    args = build_parser().parse_args()
    registry_rows = load_registry()
    registry = {row["source_id"]: row for row in registry_rows}
    selected = [row for row in registry_rows if should_use_row(row, args)][: args.limit]

    if not selected:
        if args.source_id:
            print(f"No registry rows matched the requested source IDs: {', '.join(args.source_id)}")
            if args.status:
                print(f"Requested statuses: {', '.join(args.status)}")
            else:
                print("Use --overwrite to re-run sentence splitting for an existing module.")
        else:
            print("No modules are ready for sentence splitting.")
            print(f"Expected statuses: {', '.join(requested_statuses(args))}")
            print(f"Current registry statuses: {format_status_counts(registry_rows)}")
            print("Use --source-id <SOURCE_ID> --overwrite to re-run sentence splitting.")
        return 0

    for row in selected:
        source_id = row["source_id"]
        input_path = module_extracted_path(source_id) if args.use_raw else module_cleaned_path(source_id)
        output_path = module_sentences_path(source_id)

        if not input_path.exists():
            print(f"{source_id}: skipped, input JSONL not found")
            continue
        if output_path.exists() and not args.overwrite:
            print(f"{source_id}: skipped, sentence JSONL already exists")
            continue

        records = load_jsonl(input_path)
        sentences: list[dict] = []
        sentence_counter = 0
        for record_index, record in enumerate(records):
            parts = split_sentences(str(record.get("text", "")), str(record.get("language_type", "unknown")))
            for local_index, sentence in enumerate(parts):
                sentences.append(
                    {
                        "source_id": source_id,
                        "module_id": record.get("module_id", row["module_id"]),
                        "language_type": record.get("language_type", row["language_type"]),
                        "screen_id": record.get("screen_id", ""),
                        "activity_id": record.get("activity_id", ""),
                        "record_id": f"{source_id}:{record_index}",
                        "record_index": record_index,
                        "sentence_index": sentence_counter,
                        "local_sentence_index": local_index,
                        "origin_file": record.get("origin_file", ""),
                        "origin_path": record.get("origin_path", ""),
                        "text": sentence,
                    }
                )
                sentence_counter += 1

        write_jsonl(output_path, sentences)
        if args.update_status:
            registry[source_id]["status"] = advance_status(registry[source_id].get("status", ""), "sentence_split")
        print(f"{source_id}: wrote {len(sentences)} sentences")

    if args.update_status:
        save_registry(list(registry.values()))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
