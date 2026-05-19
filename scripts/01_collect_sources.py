#!/usr/bin/env python3
from __future__ import annotations

import argparse
from collections import Counter
from typing import Sequence

from common import (
    ALLOWED_DATA_TYPES,
    ALLOWED_LANGUAGE_TYPES,
    REGISTRY_HEADER,
    load_registry,
    next_source_id,
    save_registry,
    today_iso,
)


def validate_registry(rows: list[dict[str, str]]) -> list[str]:
    errors: list[str] = []
    seen_ids: set[str] = set()
    for index, row in enumerate(rows, start=2):
        source_id = row.get("source_id", "")
        if source_id in seen_ids:
            errors.append(f"line {index}: duplicate source_id {source_id}")
        seen_ids.add(source_id)

        if row.get("data_type") not in ALLOWED_DATA_TYPES:
            errors.append(f"line {index}: invalid data_type {row.get('data_type')}")
        if row.get("language_type") not in ALLOWED_LANGUAGE_TYPES:
            errors.append(f"line {index}: invalid language_type {row.get('language_type')}")
        if row.get("file_type") not in {"pdf", "html", "zip"}:
            errors.append(f"line {index}: invalid file_type {row.get('file_type')}")
        for field in REGISTRY_HEADER:
            if not row.get(field, "").strip():
                errors.append(f"line {index}: missing {field}")
    return errors


def print_summary(rows: list[dict[str, str]]) -> None:
    print(f"Total sources: {len(rows)}")
    for field in ("source_name", "data_type", "language_type", "subdomain", "status"):
        counter = Counter(row[field] for row in rows)
        print(f"\nBy {field}:")
        for key, count in sorted(counter.items()):
            print(f"  {key}: {count}")


def add_source(args: argparse.Namespace) -> int:
    rows = load_registry()
    new_row = {
        "source_id": next_source_id(rows),
        "source_name": args.source_name,
        "url": args.url,
        "title": args.title,
        "subdomain": args.subdomain,
        "data_type": args.data_type,
        "language_type": args.language_type,
        "file_type": args.file_type,
        "access_date": args.access_date or today_iso(),
        "license_note": args.license_note,
        "status": args.status,
    }
    rows.append(new_row)
    errors = validate_registry(rows)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    save_registry(rows)
    print(f"Added {new_row['source_id']}: {new_row['title']}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Validate and update the education MT source registry.")
    parser.add_argument("--summary", action="store_true", help="Print registry counts.")
    parser.add_argument("--validate", action="store_true", help="Validate the registry.")
    parser.add_argument("--add", action="store_true", help="Append a new source row.")
    parser.add_argument("--source-name")
    parser.add_argument("--url")
    parser.add_argument("--title")
    parser.add_argument("--subdomain")
    parser.add_argument("--data-type")
    parser.add_argument("--language-type")
    parser.add_argument("--file-type")
    parser.add_argument("--access-date")
    parser.add_argument("--license-note", default="verify_source_terms")
    parser.add_argument("--status", default="pending")
    return parser


def require_fields(args: argparse.Namespace, fields: Sequence[str]) -> bool:
    missing = [field for field in fields if not getattr(args, field.replace("-", "_"), None)]
    if missing:
        print("Missing required fields for --add:")
        for field in missing:
            print(f"  --{field}")
        return False
    return True


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if args.add:
        fields = [
            "source_name",
            "url",
            "title",
            "subdomain",
            "data_type",
            "language_type",
            "file_type",
        ]
        if not require_fields(args, fields):
            return 1
        return add_source(args)

    rows = load_registry()
    if not rows:
        print("Registry is empty.")
        return 1

    if args.validate or not args.summary:
        errors = validate_registry(rows)
        if errors:
            for error in errors:
                print(f"ERROR: {error}")
            return 1
        print("Registry validation passed.")

    if args.summary or not args.validate:
        print_summary(rows)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
