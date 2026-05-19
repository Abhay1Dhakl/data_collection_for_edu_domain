#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import urllib.error
from pathlib import Path

from common import (
    append_csv,
    ensure_dirs,
    fetch_bytes,
    fetch_text,
    format_status_counts,
    load_registry,
    module_raw_dir,
    parse_directory_listing,
    relative_asset_path,
    save_registry,
    select_rows,
    utc_now_iso,
)

DOWNLOAD_LOG_HEADER = [
    "timestamp",
    "source_id",
    "module_id",
    "module_url",
    "downloaded_count",
    "result",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Download E-Paath module assets needed for bilingual extraction.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--module-id", action="append", default=[])
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--update-status", action="store_true")
    return parser


def default_statuses() -> list[str]:
    return ["discovered", "download_failed"]


def wanted_root_asset(name: str) -> bool:
    return bool(
        name in {"data.xml", "data-np.xml", "exercise.html", "index.html"}
        or re.fullmatch(r"page\d+\.html", name)
    )


def wanted_nested_asset(name: str) -> bool:
    return bool(name.endswith(".js") or name.endswith(".json") or name.endswith(".xml") or name.endswith(".html"))


def collect_asset_urls(module_url: str, timeout: int) -> list[str]:
    html_text = fetch_text(module_url, timeout)
    root_entries = parse_directory_listing(html_text, module_url)
    assets = {module_url}

    for entry in root_entries:
        if not entry.is_dir and wanted_root_asset(entry.name):
            assets.add(entry.url)
        elif entry.is_dir and entry.name in {"js", "exercise"}:
            nested_html = fetch_text(entry.url, timeout)
            nested_entries = parse_directory_listing(nested_html, entry.url)
            assets.add(entry.url)
            for nested in nested_entries:
                if not nested.is_dir and wanted_nested_asset(nested.name):
                    assets.add(nested.url)

    return sorted(assets)


def download_module(row: dict[str, str], overwrite: bool, timeout: int) -> tuple[str, int, str]:
    output_dir = module_raw_dir(row["source_id"])
    output_dir.mkdir(parents=True, exist_ok=True)
    if any(output_dir.iterdir()) and not overwrite:
        return "skipped", 0, "module directory already exists"

    module_url = row["module_url"]
    asset_urls = collect_asset_urls(module_url, timeout)
    download_count = 0
    for asset_url in asset_urls:
        relative = relative_asset_path(module_url, asset_url)
        if asset_url == module_url:
            output_path = output_dir / "index.html"
            output_path.write_text(fetch_text(asset_url, timeout), encoding="utf-8")
        elif asset_url.endswith("/"):
            output_path = output_dir / relative / "index.html"
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(fetch_text(asset_url, timeout), encoding="utf-8")
        else:
            output_path = output_dir / relative
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_bytes(fetch_bytes(asset_url, timeout))
        download_count += 1

    if download_count == 0:
        return "download_failed", 0, "no_assets_found"
    return "downloaded", download_count, f"{download_count} assets"


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()
    rows = load_registry()
    statuses = args.status or ([] if (args.source_id or args.module_id) else default_statuses())
    selected = select_rows(
        rows,
        source_ids=args.source_id,
        module_ids=args.module_id,
        statuses=statuses,
        limit=args.limit,
    )

    if not selected:
        print("No modules need downloading.")
        print(f"Expected statuses: {', '.join(statuses or default_statuses())}")
        print(f"Current registry statuses: {format_status_counts(rows)}")
        return 0

    by_id = {row["source_id"]: row for row in rows}
    for row in selected:
        result = "download_failed"
        count = 0
        notes = ""
        try:
            result, count, notes = download_module(row, args.overwrite, args.timeout)
        except urllib.error.HTTPError as exc:
            notes = f"http_{exc.code}"
        except urllib.error.URLError as exc:
            notes = str(exc.reason)
        except Exception as exc:
            notes = str(exc)

        append_csv(
            "data/logs/download_log.csv",
            {
                "timestamp": utc_now_iso(),
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "module_url": row["module_url"],
                "downloaded_count": str(count),
                "result": result,
                "notes": notes,
            },
            DOWNLOAD_LOG_HEADER,
        )

        if args.update_status:
            if result == "downloaded":
                by_id[row["source_id"]]["status"] = "downloaded"
            elif result == "download_failed":
                by_id[row["source_id"]]["status"] = "download_failed"

        if result == "skipped":
            print(f"{row['source_id']}: skipped, {notes}")
        else:
            print(f"{row['source_id']}: {result} ({count} assets)")

    if args.update_status:
        save_registry(list(by_id.values()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
