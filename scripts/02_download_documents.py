#!/usr/bin/env python3
from __future__ import annotations

import argparse
import urllib.error
import urllib.request
from pathlib import Path

from common import (
    REGISTRY_HEADER,
    append_csv,
    infer_download_extension,
    load_registry,
    raw_subdir_for_source,
    save_registry,
    timestamp_iso,
)

DOWNLOAD_LOG_HEADER = [
    "timestamp",
    "source_id",
    "source_name",
    "url",
    "output_path",
    "http_status",
    "result",
    "notes",
]


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Download education MT source files.")
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--source-name", action="append", default=[])
    parser.add_argument("--status", action="append", default=["pending"])
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--update-status", action="store_true")
    return parser


def should_use_row(row: dict[str, str], args: argparse.Namespace) -> bool:
    if args.source_id and row["source_id"] not in args.source_id:
        return False
    if args.source_name and row["source_name"] not in args.source_name:
        return False
    if row["status"] not in args.status:
        return False
    return True


def download_row(row: dict[str, str], overwrite: bool, timeout: int) -> tuple[str, str, str]:
    target_dir = raw_subdir_for_source(row["source_name"])
    target_dir.mkdir(parents=True, exist_ok=True)
    extension = infer_download_extension(row)
    output_path = target_dir / f"{row['source_id']}{extension}"

    if output_path.exists() and not overwrite:
        return str(output_path), "skipped", "file_exists"

    request = urllib.request.Request(
        row["url"],
        headers={"User-Agent": "education-nepali-mt-collector/1.0"},
    )

    with urllib.request.urlopen(request, timeout=timeout) as response:
        body = response.read()
        content_type = response.headers.get("Content-Type", "")
        output_path = target_dir / f"{row['source_id']}{infer_download_extension(row, content_type)}"
        output_path.write_bytes(body)
        status_code = str(getattr(response, "status", 200))
        return str(output_path), "downloaded", status_code


def main() -> int:
    args = build_parser().parse_args()
    rows = load_registry()
    selected = [row for row in rows if should_use_row(row, args)][: args.limit]

    if not selected:
        print("No matching rows to download.")
        return 0

    by_id = {row["source_id"]: row for row in rows}
    for row in selected:
        output_path = ""
        result = "download_failed"
        http_status = ""
        notes = ""
        try:
            output_path, result, http_status = download_row(row, args.overwrite, args.timeout)
        except urllib.error.HTTPError as exc:
            http_status = str(exc.code)
            notes = str(exc)
        except urllib.error.URLError as exc:
            notes = str(exc.reason)
        except Exception as exc:
            notes = str(exc)

        append_csv(
            Path("data/logs/download_log.csv"),
            {
                "timestamp": timestamp_iso(),
                "source_id": row["source_id"],
                "source_name": row["source_name"],
                "url": row["url"],
                "output_path": output_path,
                "http_status": http_status,
                "result": result,
                "notes": notes,
            },
            DOWNLOAD_LOG_HEADER,
        )

        if args.update_status:
            if result == "downloaded":
                by_id[row["source_id"]]["status"] = "downloaded"
            elif result == "skipped":
                by_id[row["source_id"]]["status"] = "downloaded"
            else:
                by_id[row["source_id"]]["status"] = "download_failed"

        print(f"{row['source_id']}: {result} {output_path or notes}")

    if args.update_status:
        save_registry(list(by_id.values()))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
