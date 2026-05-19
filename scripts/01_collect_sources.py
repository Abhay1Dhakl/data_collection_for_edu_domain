#!/usr/bin/env python3
from __future__ import annotations

import argparse
from collections import Counter
from typing import Sequence

from common import (
    ALLOWED_DATA_TYPES,
    ALLOWED_LANGUAGE_TYPES,
    REGISTRY_HEADER,
    REQUIRED_REGISTRY_FIELDS,
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

        for field in REQUIRED_REGISTRY_FIELDS:
            if not row.get(field, "").strip():
                errors.append(f"line {index}: missing {field}")

        if row.get("data_type") not in ALLOWED_DATA_TYPES:
            errors.append(f"line {index}: invalid data_type {row.get('data_type')}")
        if row.get("language_type") not in ALLOWED_LANGUAGE_TYPES:
            errors.append(f"line {index}: invalid language_type {row.get('language_type')}")
        if row.get("source_name") != "OLE Nepal E-Paath":
            errors.append(f"line {index}: unsupported source_name {row.get('source_name')}")
        if not row.get("module_url", "").startswith("https://epaath.olenepal.org/activity/"):
            errors.append(f"line {index}: module_url should point to an E-Paath activity directory")
        if "/" not in row.get("module_id", ""):
            errors.append(f"line {index}: module_id should look like gradeX/subject/module_slug")

    return errors


def print_summary(rows: list[dict[str, str]]) -> None:
    print(f"Total modules: {len(rows)}")
    for field in ("data_type", "language_type", "grade", "subject", "status"):
        counter = Counter(row[field] for row in rows)
        print(f"\nBy {field}:")
        for key, count in sorted(counter.items()):
            print(f"  {key}: {count}")


def add_module(args: argparse.Namespace) -> int:
    rows = load_registry()
    new_row = {
        "source_id": next_source_id(rows),
        "source_name": "OLE Nepal E-Paath",
        "module_id": args.module_id,
        "module_url": args.module_url,
        "grade": args.grade,
        "subject": args.subject,
        "module_slug": args.module_slug,
        "module_title_en": args.module_title_en or "",
        "module_title_ne": args.module_title_ne or "",
        "data_type": args.data_type,
        "language_type": args.language_type,
        "access_date": args.access_date or today_iso(),
        "license_note": args.license_note,
        "status": args.status,
        "notes": args.notes or "",
    }
    rows.append(new_row)
    errors = validate_registry(rows)
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        return 1
    save_registry(rows)
    print(f"Added {new_row['source_id']}: {new_row['module_id']}")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Validate and update the OLE Nepal E-Paath module registry.")
    parser.add_argument("--summary", action="store_true", help="Print registry counts.")
    parser.add_argument("--validate", action="store_true", help="Validate the registry.")
    parser.add_argument("--add", action="store_true", help="Append a new module row.")
    parser.add_argument("--module-id")
    parser.add_argument("--module-url")
    parser.add_argument("--grade")
    parser.add_argument("--subject")
    parser.add_argument("--module-slug")
    parser.add_argument("--module-title-en")
    parser.add_argument("--module-title-ne")
    parser.add_argument("--data-type", default="bilingual_module")
    parser.add_argument("--language-type", default="en-ne")
    parser.add_argument("--access-date")
    parser.add_argument("--license-note", default="verify_epaath_terms")
    parser.add_argument("--status", default="pending")
    parser.add_argument("--notes")
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
        fields = ["module_id", "module_url", "grade", "subject", "module_slug"]
        if not require_fields(args, fields):
            return 1
        return add_module(args)

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
