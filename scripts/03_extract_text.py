#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import xml.etree.ElementTree as ET
from pathlib import Path

from common import advance_status, append_csv, format_status_counts, load_jsonl, load_registry, module_extracted_path, module_raw_dir, save_registry, timestamp_iso, write_jsonl

EXTRACTION_LOG_HEADER = [
    "timestamp",
    "source_id",
    "module_id",
    "input_dir",
    "output_path",
    "record_count",
    "result",
    "notes",
]

TEXT_ATTR_NAMES = {"text", "title", "label", "question", "instruction", "content", "name", "prompt"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Extract structured bilingual text from OLE Nepal E-Paath module assets.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def requested_statuses(args: argparse.Namespace) -> list[str]:
    return args.status or ["downloaded", "extract_failed"]


def should_use_row(row: dict[str, str], args: argparse.Namespace) -> bool:
    if args.source_id:
        if row["source_id"] not in args.source_id:
            return False
        if args.status and row["status"] not in args.status:
            return False
        return True
    return row["status"] in requested_statuses(args)


def sanitize_tag(tag: str) -> str:
    return tag.split("}", 1)[-1]


def infer_language(path: Path) -> str:
    name = path.name.lower()
    if name == "data.xml":
        return "en"
    if name == "data-np.xml":
        return "ne"
    return "unknown"


def infer_screen_id(path_parts: list[str], fallback: str) -> str:
    for part in reversed(path_parts):
        lowered = part.lower()
        if re.fullmatch(r"page\d+", lowered) or lowered == "exercise":
            return lowered
    if fallback.endswith("-np"):
        return fallback[:-3]
    return fallback


def keep_text(text: str) -> bool:
    stripped = text.strip()
    if len(stripped) < 2:
        return False
    return bool(re.search(r"[A-Za-z\u0900-\u097F]", stripped))


def xml_records(source_row: dict[str, str], xml_path: Path) -> list[dict]:
    language_type = infer_language(xml_path)
    if language_type == "unknown":
        return []

    tree = ET.parse(xml_path)
    root = tree.getroot()
    records: list[dict] = []
    seen: set[tuple[str, str, str, str]] = set()

    def emit(path_parts: list[str], text: str, field_name: str) -> None:
        normalized = text.strip()
        if not keep_text(normalized):
            return
        screen_id = infer_screen_id(path_parts, xml_path.stem)
        activity_id = "/".join(path_parts[-3:]) if len(path_parts) >= 3 else "/".join(path_parts)
        key = (language_type, screen_id, activity_id, normalized)
        if key in seen:
            return
        seen.add(key)
        records.append(
            {
                "source_id": source_row["source_id"],
                "module_id": source_row["module_id"],
                "module_slug": source_row["module_slug"],
                "language_type": language_type,
                "screen_id": screen_id,
                "activity_id": activity_id,
                "origin_file": xml_path.name,
                "origin_path": "/".join(path_parts),
                "field_name": field_name,
                "text": normalized,
            }
        )

    def visit(elem: ET.Element, path_parts: list[str]) -> None:
        current_parts = path_parts + [sanitize_tag(elem.tag)]
        if elem.text and keep_text(elem.text):
            emit(current_parts, elem.text, "text")
        for attr_name, attr_value in elem.attrib.items():
            if attr_name.lower() in TEXT_ATTR_NAMES and keep_text(attr_value):
                emit(current_parts + [attr_name.lower()], attr_value, attr_name.lower())
        for child in elem:
            visit(child, current_parts)
            if child.tail and keep_text(child.tail):
                emit(current_parts + [sanitize_tag(child.tag), "tail"], child.tail, "tail")

    visit(root, [])
    return records


def module_notes(raw_dir: Path, records: list[dict]) -> str:
    has_en = any(record["language_type"] == "en" for record in records)
    has_ne = any(record["language_type"] == "ne" for record in records)
    notes: list[str] = []
    if not (raw_dir / "data.xml").exists():
        notes.append("missing_data.xml")
    if not (raw_dir / "data-np.xml").exists():
        notes.append("missing_data-np.xml")
    if not has_en:
        notes.append("no_english_records_extracted")
    if not has_ne:
        notes.append("no_nepali_records_extracted")
    return ";".join(notes)


def main() -> int:
    args = build_parser().parse_args()
    registry = load_registry()
    selected = [row for row in registry if should_use_row(row, args)][: args.limit]

    if not selected:
        if args.source_id:
            print(f"No registry rows matched the requested source IDs: {', '.join(args.source_id)}")
            if args.status:
                print(f"Requested statuses: {', '.join(args.status)}")
            else:
                print("Use --overwrite to re-extract an already processed module.")
        else:
            print("No modules are ready for extraction.")
            print(f"Expected statuses: {', '.join(requested_statuses(args))}")
            print(f"Current registry statuses: {format_status_counts(registry)}")
            print("Use --source-id <SOURCE_ID> --overwrite to re-extract an existing module.")
        return 0

    by_id = {row["source_id"]: row for row in registry}

    for row in selected:
        raw_dir = module_raw_dir(row["source_id"])
        if not raw_dir.exists():
            print(f"{row['source_id']}: skipped, no downloaded module directory found")
            continue

        output_path = module_extracted_path(row["source_id"])
        if output_path.exists() and not args.overwrite:
            result = "skipped"
            notes = "extracted JSONL already exists"
            record_count = len(load_jsonl(output_path))
        else:
            try:
                records: list[dict] = []
                for xml_name in ("data.xml", "data-np.xml"):
                    xml_path = raw_dir / xml_name
                    if xml_path.exists():
                        records.extend(xml_records(row, xml_path))
                write_jsonl(output_path, records)
                record_count = len(records)
                result = "extracted"
                notes = module_notes(raw_dir, records)
                if args.update_status:
                    by_id[row["source_id"]]["status"] = advance_status(by_id[row["source_id"]].get("status", ""), "extracted")
            except Exception as exc:
                record_count = 0
                result = "extract_failed"
                notes = str(exc)
                output_path = Path("")
                if args.update_status:
                    by_id[row["source_id"]]["status"] = advance_status(by_id[row["source_id"]].get("status", ""), "extract_failed")

        append_csv(
            "data/logs/extraction_log.csv",
            {
                "timestamp": timestamp_iso(),
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "input_dir": str(raw_dir),
                "output_path": str(output_path),
                "record_count": str(record_count),
                "result": result,
                "notes": notes,
            },
            EXTRACTION_LOG_HEADER,
        )
        if result == "skipped":
            print(f"{row['source_id']}: skipped, {notes}")
        else:
            print(f"{row['source_id']}: {result}")

    if args.update_status:
        save_registry(list(by_id.values()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
