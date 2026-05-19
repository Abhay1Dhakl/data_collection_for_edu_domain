#!/usr/bin/env python3
from __future__ import annotations

import argparse

from common import (
    ACTIVITY_ROOT_URL,
    REGISTRY_HEADER,
    SOURCE_NAME,
    append_csv,
    bool_str,
    ensure_dirs,
    fetch_text,
    format_status_counts,
    grade_number_from_grade_dir,
    load_registry,
    parse_directory_listing,
    save_registry,
    select_rows,
    source_id_from_module_id,
    subdomain_from_subject,
    utc_now_iso,
)

DISCOVERY_LOG_HEADER = [
    "timestamp",
    "grade",
    "subject",
    "module_id",
    "module_url",
    "result",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Discover live OLE Nepal E-Paath modules from the public activity directory.")
    parser.add_argument("--base-url", default=ACTIVITY_ROOT_URL)
    parser.add_argument("--grade", action="append", default=[], help="Filter grades such as grade5")
    parser.add_argument("--subject", action="append", default=[], help="Filter subject directories such as math or science")
    parser.add_argument("--limit", type=int, default=0, help="Stop after N discovered modules.")
    parser.add_argument("--only-bilingual", action="store_true")
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--summary", action="store_true")
    return parser


def filter_names(entries, allowed: set[str]) -> list:
    if not allowed:
        return list(entries)
    return [entry for entry in entries if entry.name in allowed]


def module_row_from_listing(grade_name: str, subject_name: str, module_entry, module_entries, existing: dict[str, dict[str, str]]) -> dict[str, str]:
    module_id = f"{grade_name}/{subject_name}/{module_entry.name}"
    source_id = source_id_from_module_id(module_id)
    previous = existing.get(source_id, {})

    files = {entry.name for entry in module_entries if not entry.is_dir}
    dirs = {entry.name for entry in module_entries if entry.is_dir}
    page_count = len([name for name in files if name.startswith("page") and name.endswith(".html")])
    js_asset_count = 1 if "js" in dirs else 0
    exercise_asset_count = 1 if "exercise" in dirs or "exercise.html" in files else 0
    html_asset_count = len([name for name in files if name.endswith(".html")])
    has_data_xml = "data.xml" in files
    has_data_np_xml = "data-np.xml" in files

    if has_data_xml and has_data_np_xml:
        data_type = "bilingual_module"
        language_type = "en-ne"
    elif has_data_xml:
        data_type = "monolingual_module"
        language_type = "en"
    elif has_data_np_xml:
        data_type = "monolingual_module"
        language_type = "ne"
    else:
        data_type = "monolingual_module"
        language_type = "unknown"

    discovered_at = previous.get("discovered_at") or utc_now_iso()
    status = previous.get("status") or "discovered"
    notes = previous.get("notes", "")
    if not notes and grade_number_from_grade_dir(grade_name).isdigit() and int(grade_number_from_grade_dir(grade_name)) <= 3:
        notes = "early_grade_learning_candidate"

    return {
        "source_id": source_id,
        "source_name": SOURCE_NAME,
        "module_id": module_id,
        "module_url": module_entry.url if module_entry.url.endswith("/") else module_entry.url + "/",
        "grade": grade_number_from_grade_dir(grade_name),
        "subject": subject_name,
        "subdomain": subdomain_from_subject(subject_name, grade_number_from_grade_dir(grade_name)),
        "module_slug": module_entry.name,
        "has_data_xml": bool_str(has_data_xml),
        "has_data_np_xml": bool_str(has_data_np_xml),
        "page_count": str(page_count),
        "js_asset_count": str(js_asset_count),
        "exercise_asset_count": str(exercise_asset_count),
        "html_asset_count": str(html_asset_count),
        "data_type": data_type,
        "language_type": language_type,
        "module_title_en": previous.get("module_title_en", ""),
        "module_title_ne": previous.get("module_title_ne", ""),
        "discovered_at": discovered_at,
        "last_seen_at": utc_now_iso(),
        "status": status,
        "notes": notes,
    }


def discover_rows(base_url: str, grade_filters: set[str], subject_filters: set[str], only_bilingual: bool, limit: int, timeout: int) -> list[dict[str, str]]:
    existing = {row["source_id"]: row for row in load_registry()}
    root_html = fetch_text(base_url, timeout)
    grade_entries = [entry for entry in parse_directory_listing(root_html, base_url) if entry.is_dir and entry.name.startswith("grade")]
    grade_entries = filter_names(grade_entries, grade_filters)

    rows: list[dict[str, str]] = []
    for grade_entry in grade_entries:
        grade_html = fetch_text(grade_entry.url, timeout)
        subject_entries = [entry for entry in parse_directory_listing(grade_html, grade_entry.url) if entry.is_dir]
        subject_entries = filter_names(subject_entries, subject_filters)

        for subject_entry in subject_entries:
            subject_html = fetch_text(subject_entry.url, timeout)
            module_entries = [entry for entry in parse_directory_listing(subject_html, subject_entry.url) if entry.is_dir]

            for module_entry in module_entries:
                module_html = fetch_text(module_entry.url, timeout)
                module_listing = parse_directory_listing(module_html, module_entry.url)
                row = module_row_from_listing(grade_entry.name, subject_entry.name, module_entry, module_listing, existing)
                if only_bilingual and row["language_type"] != "en-ne":
                    continue
                rows.append(row)
                append_csv(
                    "data/logs/discovery_log.csv",
                    {
                        "timestamp": utc_now_iso(),
                        "grade": row["grade"],
                        "subject": row["subject"],
                        "module_id": row["module_id"],
                        "module_url": row["module_url"],
                        "result": "discovered",
                        "notes": row["language_type"],
                    },
                    DISCOVERY_LOG_HEADER,
                )
                if limit and len(rows) >= limit:
                    return rows
    return rows


def print_summary(rows: list[dict[str, str]]) -> None:
    print(f"Discovered modules: {len(rows)}")
    bilingual = sum(1 for row in rows if row.get("language_type") == "en-ne")
    print(f"Bilingual modules: {bilingual}")
    print(f"Current registry statuses: {format_status_counts(rows)}")


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    existing_rows = load_registry()
    rows = discover_rows(
        base_url=args.base_url if args.base_url.endswith("/") else args.base_url + "/",
        grade_filters=set(args.grade),
        subject_filters=set(args.subject),
        only_bilingual=args.only_bilingual,
        limit=args.limit,
        timeout=args.timeout,
    )
    if not rows:
        print("No modules discovered with the requested filters.")
        return 1

    if args.grade or args.subject or args.limit or args.only_bilingual:
        existing_by_id = {row["source_id"]: row for row in existing_rows}
        for row in rows:
            existing_by_id[row["source_id"]] = row
        rows_to_save = sorted(existing_by_id.values(), key=lambda row: row["module_id"])
    else:
        rows_to_save = sorted(rows, key=lambda row: row["module_id"])

    save_registry(rows_to_save)

    print_summary(rows_to_save)

    sample = select_rows(rows_to_save, limit=min(10, len(rows_to_save)))
    print("\nSample modules:")
    for row in sample:
        print(f"  {row['source_id']} | {row['module_id']} | {row['language_type']} | {row['status']}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
