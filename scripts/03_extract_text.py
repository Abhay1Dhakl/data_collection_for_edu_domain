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


def looks_like_pdf(path: Path) -> bool:
    return path.read_bytes()[:16].lstrip().startswith(b"%PDF-")


def looks_like_html(path: Path) -> bool:
    sample = path.read_bytes()[:512].lstrip().lower()
    return sample.startswith(b"<!doctype html") or sample.startswith(b"<html") or b"<head" in sample


def extract_pdf_text(path: Path) -> str:
    try:
        import fitz  # type: ignore
    except ImportError:
        raise RuntimeError("Install PyMuPDF (`pip install pymupdf`) to extract PDF text.") from None

    pages: list[str] = []
    with fitz.open(path) as document:
        for page in document:
            pages.append(page.get_text("text"))
    return "\n\n".join(pages).strip()


def extract_html_text(path: Path) -> str:
    parser = TextOnlyHTMLParser()
    parser.feed(path.read_text(encoding="utf-8", errors="ignore"))
    return parser.text()


def contains_devanagari(text: str) -> bool:
    return any("\u0900" <= char <= "\u097F" for char in text)


def extraction_warning(row: dict[str, str], text: str) -> str:
    language_type = row.get("language_type", "")
    if language_type == "ne" and not contains_devanagari(text):
        return "possible_legacy_preunicode_font_or_language_mismatch"
    if language_type == "en" and contains_devanagari(text):
        return "contains_devanagari_text_check_language_label"
    return ""


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
                if looks_like_pdf(source_path):
                    text = extract_pdf_text(source_path)
                elif looks_like_html(source_path):
                    text = extract_html_text(source_path)
                else:
                    raise RuntimeError(f"Unsupported file content for {source_path.name}")
                output_path.write_text(text, encoding="utf-8")
                result = "extracted"
                notes = extraction_warning(row, text)
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
