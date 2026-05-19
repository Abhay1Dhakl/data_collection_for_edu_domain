#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from html.parser import HTMLParser
from pathlib import Path

from common import (
    append_csv,
    ensure_dirs,
    format_status_counts,
    is_truthy,
    keep_text,
    load_registry,
    module_raw_dir,
    module_records_path,
    normalize_text,
    render_display_text,
    save_registry,
    select_rows,
    utc_now_iso,
    write_jsonl,
)

EXTRACTION_LOG_HEADER = [
    "timestamp",
    "source_id",
    "module_id",
    "record_count",
    "result",
    "notes",
]

TITLE_KEYS = [
    "strings/string#id=title1",
    "lesson/chapter",
    "lesson/objective/title",
]


class VisibleTextParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self._skip_depth = 0
        self.texts: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:  # type: ignore[override]
        if tag in {"script", "style"}:
            self._skip_depth += 1

    def handle_endtag(self, tag: str) -> None:  # type: ignore[override]
        if tag in {"script", "style"} and self._skip_depth > 0:
            self._skip_depth -= 1

    def handle_data(self, data: str) -> None:
        if self._skip_depth:
            return
        text = render_display_text(data)
        if keep_text(text) and "Hello World!!!" not in text:
            self.texts.append(text)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Extract bilingual module records from E-Paath XML assets and supporting HTML/JSON structure.")
    parser.add_argument("--source-id", action="append", default=[])
    parser.add_argument("--module-id", action="append", default=[])
    parser.add_argument("--status", action="append", default=[])
    parser.add_argument("--limit", type=int, default=10)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--update-status", action="store_true")
    return parser


def default_statuses() -> list[str]:
    return ["downloaded", "extract_failed"]


def auto_detect_rows(rows: list[dict[str, str]], limit: int) -> list[dict[str, str]]:
    detected: list[dict[str, str]] = []
    for row in rows:
        raw_dir = module_raw_dir(row["source_id"])
        output_path = module_records_path(row["source_id"])
        if raw_dir.exists() and any(raw_dir.iterdir()) and not output_path.exists():
            detected.append(row)
            if limit and len(detected) >= limit:
                break
    return detected


def merge_rows(primary: list[dict[str, str]], secondary: list[dict[str, str]], limit: int) -> list[dict[str, str]]:
    merged: list[dict[str, str]] = []
    seen: set[str] = set()
    for row in primary + secondary:
        source_id = row["source_id"]
        if source_id in seen:
            continue
        seen.add(source_id)
        merged.append(row)
        if limit and len(merged) >= limit:
            break
    return merged


def sanitize_tag(tag: str) -> str:
    return tag.split("}", 1)[-1]


def infer_screen_id_from_string_id(string_id: str, usage_map: dict[str, set[str]]) -> str:
    if string_id in usage_map and len(usage_map[string_id]) == 1:
        return sorted(usage_map[string_id])[0]
    if match := re.match(r"p(\d+)", string_id):
        return f"page{match.group(1)}"
    if string_id.startswith(("next_", "pctext", "pdiy", "predo", "phint", "smultiply", "title1")):
        return "global"
    if string_id.startswith(("ques", "format", "hint", "p6_")):
        return "exercise"
    return "overview"


def collect_js_usage_map(raw_dir: Path) -> dict[str, set[str]]:
    usage: dict[str, set[str]] = defaultdict(set)
    for js_path in sorted((raw_dir / "js").glob("*.js")):
        screen_id = "exercise" if js_path.stem == "exercise" else js_path.stem
        text = js_path.read_text(encoding="utf-8", errors="ignore")
        for string_id in re.findall(r"data\.string\.([A-Za-z0-9_]+)", text):
            usage[string_id].add(screen_id)
    return usage


def xml_records(row: dict[str, str], xml_path: Path, language: str, usage_map: dict[str, set[str]]) -> list[dict]:
    tree = ET.parse(xml_path)
    root = tree.getroot()
    records: list[dict] = []
    seen: set[tuple[str, str, str, str]] = set()

    def emit(record_key: str, screen_id: str, activity_id: str, origin_path: str, raw_text: str) -> None:
        text = render_display_text(raw_text)
        if not keep_text(text):
            return
        key = (language, record_key, activity_id, text)
        if key in seen:
            return
        seen.add(key)
        records.append(
            {
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "grade": row["grade"],
                "subject": row["subject"],
                "subdomain": row["subdomain"],
                "language": language,
                "screen_id": screen_id,
                "activity_id": activity_id,
                "record_key": record_key,
                "origin_type": "xml",
                "origin_file": xml_path.name,
                "origin_path": origin_path,
                "text": text,
                "text_raw": normalize_text(raw_text),
            }
        )

    def visit(elem: ET.Element, current_parts: list[str]) -> None:
        current_tag = sanitize_tag(elem.tag)

        if current_tag == "string" and "id" in elem.attrib:
            string_id = elem.attrib["id"]
            record_key = f"strings/string#id={string_id}"
            screen_id = infer_screen_id_from_string_id(string_id, usage_map)
            emit(record_key, screen_id, string_id, record_key, elem.text or "")
            return

        if elem.text and keep_text(render_display_text(elem.text)):
            record_key = "/".join(current_parts)
            emit(record_key, "overview", record_key, record_key, elem.text)

        child_tag_counts: Counter[str] = Counter()
        for child in elem:
            child_tag = sanitize_tag(child.tag)
            child_tag_counts[child_tag] += 1
            occurrence = child_tag_counts[child_tag]
            child_part = child_tag if occurrence == 1 else f"{child_tag}[{occurrence}]"
            visit(child, current_parts + [child_part])

    visit(root, [])
    return records


def html_records(row: dict[str, str], html_path: Path) -> list[dict]:
    parser = VisibleTextParser()
    parser.feed(html_path.read_text(encoding="utf-8", errors="ignore"))
    screen_id = html_path.stem
    records: list[dict] = []
    for index, text in enumerate(parser.texts, start=1):
        records.append(
            {
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "grade": row["grade"],
                "subject": row["subject"],
                "subdomain": row["subdomain"],
                "language": "unknown",
                "screen_id": screen_id,
                "activity_id": f"html_text_{index}",
                "record_key": f"html/{screen_id}/{index}",
                "origin_type": "html",
                "origin_file": html_path.name,
                "origin_path": f"html/{screen_id}/{index}",
                "text": text,
                "text_raw": text,
            }
        )
    return records


def json_leaf_records(row: dict[str, str], json_path: Path) -> list[dict]:
    try:
        payload = json.loads(json_path.read_text(encoding="utf-8", errors="ignore"))
    except json.JSONDecodeError:
        return []

    records: list[dict] = []

    def visit(value, path_parts: list[str]) -> None:
        if isinstance(value, dict):
            for key, child in value.items():
                visit(child, path_parts + [str(key)])
        elif isinstance(value, list):
            for index, child in enumerate(value, start=1):
                visit(child, path_parts + [str(index)])
        elif isinstance(value, str):
            text = render_display_text(value)
            if not keep_text(text):
                return
            path = "/".join(path_parts)
            records.append(
                {
                    "source_id": row["source_id"],
                    "module_id": row["module_id"],
                    "grade": row["grade"],
                    "subject": row["subject"],
                    "subdomain": row["subdomain"],
                    "language": "unknown",
                    "screen_id": json_path.stem,
                    "activity_id": path,
                    "record_key": f"json/{json_path.stem}/{path}",
                    "origin_type": "json",
                    "origin_file": json_path.name,
                    "origin_path": path,
                    "text": text,
                    "text_raw": normalize_text(value),
                }
            )

    visit(payload, [])
    return records


def extract_xml_language_records(
    row: dict[str, str],
    raw_dir: Path,
    usage_map: dict[str, set[str]],
    filename: str,
    language: str,
    issues: list[str],
) -> list[dict]:
    xml_path = raw_dir / filename
    if not xml_path.exists():
        issues.append(f"missing_{filename}")
        return []

    xml_text = xml_path.read_text(encoding="utf-8", errors="ignore")
    if not xml_text.strip():
        issues.append(f"empty_{filename}")
        return []

    try:
        return xml_records(row, xml_path, language, usage_map)
    except ET.ParseError as exc:
        issues.append(f"invalid_{filename}:{exc}")
        return []


def update_titles(row: dict[str, str], records: list[dict]) -> None:
    for language in ("en", "ne"):
        language_records = {record["record_key"]: record["text"] for record in records if record["language"] == language}
        title = ""
        for key in TITLE_KEYS:
            if key in language_records:
                title = language_records[key]
                break
        if language == "en" and title:
            row["module_title_en"] = title
        if language == "ne" and title:
            row["module_title_ne"] = title


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
    auto_detected = False
    if not (args.source_id or args.module_id or args.status):
        detected_rows = auto_detect_rows(rows, args.limit)
        selected = merge_rows(selected, detected_rows, args.limit)
        auto_detected = bool(detected_rows)

    if not selected:
        print("No modules are ready for extraction.")
        print(f"Expected statuses: {', '.join(statuses or default_statuses())}")
        print(f"Current registry statuses: {format_status_counts(rows)}")
        return 0

    if auto_detected:
        print("Auto-detected downloaded module folders whose registry status was not updated.")

    by_id = {row["source_id"]: row for row in rows}
    for row in selected:
        raw_dir = module_raw_dir(row["source_id"])
        output_path = module_records_path(row["source_id"])
        if output_path.exists() and not args.overwrite:
            print(f"{row['source_id']}: skipped, extracted records already exist")
            continue
        if not raw_dir.exists():
            print(f"{row['source_id']}: skipped, raw module directory not found")
            continue

        result = "extract_failed"
        issues: list[str] = []
        records: list[dict] = []
        try:
            usage_map = collect_js_usage_map(raw_dir)
            if is_truthy(row.get("has_data_xml", "")):
                records.extend(extract_xml_language_records(row, raw_dir, usage_map, "data.xml", "en", issues))
            if is_truthy(row.get("has_data_np_xml", "")):
                records.extend(extract_xml_language_records(row, raw_dir, usage_map, "data-np.xml", "ne", issues))
            for html_path in sorted(raw_dir.glob("page*.html")):
                records.extend(html_records(row, html_path))
            if (raw_dir / "exercise.html").exists():
                records.extend(html_records(row, raw_dir / "exercise.html"))
            for json_path in sorted(raw_dir.rglob("*.json")):
                records.extend(json_leaf_records(row, json_path))

            write_jsonl(output_path, records)
            if not records:
                issues.append("no_records_extracted")

            en_xml_records = [
                record for record in records if record.get("origin_type") == "xml" and record.get("language") == "en"
            ]
            ne_xml_records = [
                record for record in records if record.get("origin_type") == "xml" and record.get("language") == "ne"
            ]
            if is_truthy(row.get("has_data_xml", "")) and not en_xml_records:
                issues.append("missing_en_xml_records")
            if is_truthy(row.get("has_data_np_xml", "")) and not ne_xml_records:
                issues.append("missing_ne_xml_records")

            result = "extracted" if not issues else "extract_failed"
            notes = f"{len(records)} records"
            if issues:
                notes = f"{notes}; {';'.join(issues)}"
            update_titles(by_id[row["source_id"]], records)
            if args.update_status:
                by_id[row["source_id"]]["status"] = result
        except Exception as exc:
            notes = str(exc)
            if args.update_status:
                by_id[row["source_id"]]["status"] = "extract_failed"

        append_csv(
            "data/logs/extraction_log.csv",
            {
                "timestamp": utc_now_iso(),
                "source_id": row["source_id"],
                "module_id": row["module_id"],
                "record_count": str(len(records)),
                "result": result,
                "notes": notes,
            },
            EXTRACTION_LOG_HEADER,
        )
        print(f"{row['source_id']}: {result} ({len(records)} records)")

    if args.update_status:
        save_registry(list(by_id.values()))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
