#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

from common import advance_status, append_csv, format_status_counts, load_registry, module_raw_dir, save_registry, timestamp_iso

DOWNLOAD_LOG_HEADER = [
    "timestamp",
    "source_id",
    "module_id",
    "module_url",
    "output_dir",
    "downloaded_files",
    "result",
    "notes",
]


class LinkCollector(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:  # type: ignore[override]
        if tag != "a":
            return
        for key, value in attrs:
            if key == "href" and value:
                self.links.append(value)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Download raw OLE Nepal E-Paath module assets.")
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--timeout", type=int, default=30)
    parser.add_argument("--update-status", action="store_true")
    parser.add_argument("--include-js", action="store_true", help="Download one-level JS and JSON assets from js/ directories.")
    return parser


def requested_statuses(args: argparse.Namespace) -> list[str]:
    return args.status or ["pending", "download_failed"]


def should_use_row(row: dict[str, str], args: argparse.Namespace) -> bool:
    if args.source_id:
        if row["source_id"] not in args.source_id:
            return False
        if args.status and row["status"] not in args.status:
            return False
        return True
    return row["status"] in requested_statuses(args)


def build_request(url: str) -> urllib.request.Request:
    return urllib.request.Request(url, headers={"User-Agent": "education-nepali-mt-collector/1.0"})


def fetch_text(url: str, timeout: int) -> tuple[str, str]:
    with urllib.request.urlopen(build_request(url), timeout=timeout) as response:
        body = response.read().decode("utf-8", errors="ignore")
        return body, str(getattr(response, "status", 200))


def fetch_bytes(url: str, timeout: int) -> tuple[bytes, str]:
    with urllib.request.urlopen(build_request(url), timeout=timeout) as response:
        return response.read(), str(getattr(response, "status", 200))


def parse_listing_links(html_text: str, base_url: str) -> list[str]:
    parser = LinkCollector()
    parser.feed(html_text)
    return [urllib.parse.urljoin(base_url, href) for href in parser.links]


def listing_name(url: str) -> str:
    path = urllib.parse.urlparse(url).path.rstrip("/")
    return path.split("/")[-1]


def is_root_asset(url: str) -> bool:
    name = listing_name(url)
    return bool(
        name in {"data.xml", "data-np.xml", "exercise.html"}
        or re.fullmatch(r"page\d+\.html", name)
    )


def is_js_dir(url: str) -> bool:
    parsed = urllib.parse.urlparse(url)
    return parsed.path.endswith("/js/")


def is_js_asset(url: str) -> bool:
    name = listing_name(url)
    return bool(name.endswith(".js") or name.endswith(".json") or name.endswith(".xml"))


def relative_asset_path(base_url: str, asset_url: str) -> Path:
    base_path = urllib.parse.urlparse(base_url).path
    asset_path = urllib.parse.urlparse(asset_url).path
    relative = asset_path.replace(base_path, "", 1).lstrip("/")
    return Path(relative or "index.html")


def download_module(row: dict[str, str], overwrite: bool, timeout: int, include_js: bool) -> tuple[str, str, str]:
    output_dir = module_raw_dir(row["source_id"])
    output_dir.mkdir(parents=True, exist_ok=True)

    if any(output_dir.iterdir()) and not overwrite:
        return str(output_dir), "skipped", "module directory already exists"

    module_url = row["module_url"]
    if not module_url.endswith("/"):
        module_url += "/"

    html_text, status_code = fetch_text(module_url, timeout)
    (output_dir / "index.html").write_text(html_text, encoding="utf-8")

    links = parse_listing_links(html_text, module_url)
    asset_urls = [url for url in links if is_root_asset(url)]

    if include_js:
        js_dirs = [url for url in links if is_js_dir(url)]
        for js_dir in js_dirs:
            js_index_text, _ = fetch_text(js_dir, timeout)
            js_rel_dir = relative_asset_path(module_url, js_dir)
            js_index_path = output_dir / js_rel_dir / "index.html"
            js_index_path.parent.mkdir(parents=True, exist_ok=True)
            js_index_path.write_text(js_index_text, encoding="utf-8")
            js_links = parse_listing_links(js_index_text, js_dir)
            asset_urls.extend(url for url in js_links if is_js_asset(url))

    downloaded_files: list[str] = []
    for asset_url in sorted(set(asset_urls)):
        rel_path = relative_asset_path(module_url, asset_url)
        output_path = output_dir / rel_path
        output_path.parent.mkdir(parents=True, exist_ok=True)
        body, _ = fetch_bytes(asset_url, timeout)
        output_path.write_bytes(body)
        downloaded_files.append(str(rel_path))

    if not downloaded_files:
        return str(output_dir), "download_failed", "no_epaath_assets_found"

    return str(output_dir), "downloaded", f"{len(downloaded_files)} files"


def main() -> int:
    args = build_parser().parse_args()
    rows = load_registry()
    selected = [row for row in rows if should_use_row(row, args)][: args.limit]

    if not selected:
        if args.source_id:
            print(f"No registry rows matched the requested source IDs: {', '.join(args.source_id)}")
            if args.status:
                print(f"Requested statuses: {', '.join(args.status)}")
            else:
                print("Use --overwrite to redownload an already processed module.")
        else:
            print("No modules need downloading.")
            print(f"Expected statuses: {', '.join(requested_statuses(args))}")
            print(f"Current registry statuses: {format_status_counts(rows)}")
            print("Use --source-id <SOURCE_ID> --overwrite to redownload an existing module.")
        return 0

    by_id = {row["source_id"]: row for row in rows}
    for row in selected:
        output_dir = ""
        result = "download_failed"
        notes = ""
        try:
            output_dir, result, notes = download_module(row, args.overwrite, args.timeout, args.include_js)
        except urllib.error.HTTPError as exc:
            notes = f"http_{exc.code}"
        except urllib.error.URLError as exc:
            notes = str(exc.reason)
        except Exception as exc:
            notes = str(exc)

        append_csv(
            "data/logs/download_log.csv",
            {
                "timestamp": timestamp_iso(),
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "module_url": row["module_url"],
                "output_dir": output_dir,
                "downloaded_files": notes if result == "downloaded" else "",
                "result": result,
                "notes": "" if result == "downloaded" else notes,
            },
            DOWNLOAD_LOG_HEADER,
        )

        if args.update_status:
            if result == "downloaded":
                by_id[row["source_id"]]["status"] = advance_status(by_id[row["source_id"]].get("status", ""), "downloaded")
            elif result == "download_failed":
                by_id[row["source_id"]]["status"] = advance_status(by_id[row["source_id"]].get("status", ""), "download_failed")

        if result == "skipped":
            print(f"{row['source_id']}: skipped, {notes}")
        else:
            print(f"{row['source_id']}: {result} {output_dir or notes}")

    if args.update_status:
        save_registry(list(by_id.values()))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
