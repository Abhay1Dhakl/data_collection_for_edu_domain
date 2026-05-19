#!/usr/bin/env python3
from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path

from common import append_csv, find_downloaded_file, load_registry, output_text_dir, save_registry, timestamp_iso

EXTRACTION_LOG_HEADER = [
    "timestamp",
    "source_id",
    "input_path",
    "output_path",
    "result",
    "notes",
]


class TextOnlyHTMLParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []
        self._ignored_depth = 0

    def handle_starttag(self, tag: str, attrs) -> None:  # type: ignore[override]
        if tag in {"script", "style"}:
            self._ignored_depth += 1

    def handle_endtag(self, tag: str) -> None:  # type: ignore[override]
        if tag in {"script", "style"} and self._ignored_depth > 0:
            self._ignored_depth -= 1

    def handle_data(self, data: str) -> None:  # type: ignore[override]
        if self._ignored_depth == 0 and data.strip():
            self.parts.append(data.strip())

    def text(self) -> str:
        return "\n".join(self.parts)


def extract_pdf_text(path: Path) -> str:
    try:
        from pypdf import PdfReader  # type: ignore
    except ImportError:
        try:
            from PyPDF2 import PdfReader  # type: ignore
        except ImportError as exc:
            raise RuntimeError("Install pypdf or PyPDF2 to extract PDF text.") from exc

    reader = PdfReader(str(path))
    pages = [page.extract_text() or "" for page in reader.pages]
    return "\n\n".join(pages).strip()


def extract_html_text(path: Path) -> str:
    parser = TextOnlyHTMLParser()
    parser.feed(path.read_text(encoding="utf-8", errors="ignore"))
    return parser.text()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Extract text from downloaded PDF and HTML sources.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    registry = load_registry()
    selected = [row for row in registry if not args.source_id or row["source_id"] in args.source_id][: args.limit]
    by_id = {row["source_id"]: row for row in registry}

    for row in selected:
        source_path = find_downloaded_file(row["source_id"])
        if source_path is None:
            print(f"{row['source_id']}: skipped, no downloaded file found")
            continue

        output_path = output_text_dir(row) / f"{row['source_id']}.txt"
        output_path.parent.mkdir(parents=True, exist_ok=True)
        if output_path.exists() and not args.overwrite:
            result = "skipped"
            notes = "text_exists"
        else:
            try:
                if source_path.suffix.lower() == ".pdf":
                    text = extract_pdf_text(source_path)
                else:
                    text = extract_html_text(source_path)
                output_path.write_text(text, encoding="utf-8")
                result = "extracted"
                notes = ""
                if args.update_status:
                    by_id[row["source_id"]]["status"] = "extracted"
            except Exception as exc:
                result = "extract_failed"
                notes = str(exc)
                output_path = Path("")
                if args.update_status:
                    by_id[row["source_id"]]["status"] = "extract_failed"

        append_csv(
            Path("data/logs/extraction_log.csv"),
            {
                "timestamp": timestamp_iso(),
                "source_id": row["source_id"],
                "input_path": str(source_path),
                "output_path": str(output_path),
                "result": result,
                "notes": notes,
            },
            EXTRACTION_LOG_HEADER,
        )
        print(f"{row['source_id']}: {result}")

    if args.update_status:
        save_registry(list(by_id.values()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
