from __future__ import annotations

import csv
import html
import json
import re
import unicodedata
import urllib.parse
import urllib.request
from collections import Counter
from dataclasses import dataclass
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Iterable

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
RAW_DIR = DATA_DIR / "raw" / "ole_epaath"
EXTRACTED_DIR = DATA_DIR / "extracted" / "module_records"
PAIRED_DIR = DATA_DIR / "paired" / "module_record_pairs"
ALIGNED_DIR = DATA_DIR / "aligned"
REVIEWED_DIR = DATA_DIR / "reviewed"
FINAL_DIR = DATA_DIR / "final"
LOGS_DIR = DATA_DIR / "logs"

REGISTRY_PATH = DATA_DIR / "source_registry.csv"
SENTENCE_CANDIDATES_PATH = ALIGNED_DIR / "sentence_candidates.csv"
RECORD_REVIEW_QUEUE_PATH = ALIGNED_DIR / "record_review_queue.csv"
MANUAL_REVIEW_TEMPLATE_PATH = REVIEWED_DIR / "manual_review_template.csv"
GOLD_APPROVED_PATH = REVIEWED_DIR / "gold_approved_pairs.csv"
REJECTED_PATH = REVIEWED_DIR / "rejected_pairs.csv"
REVIEW_NOTES_PATH = REVIEWED_DIR / "review_notes.csv"

SOURCE_NAME = "OLE Nepal E-Paath"
ACTIVITY_ROOT_URL = "https://epaath.olenepal.org/activity/"

REGISTRY_HEADER = [
    "source_id",
    "source_name",
    "module_id",
    "module_url",
    "grade",
    "subject",
    "subdomain",
    "module_slug",
    "has_data_xml",
    "has_data_np_xml",
    "page_count",
    "js_asset_count",
    "exercise_asset_count",
    "html_asset_count",
    "data_type",
    "language_type",
    "module_title_en",
    "module_title_ne",
    "discovered_at",
    "last_seen_at",
    "status",
    "notes",
]

SENTENCE_CANDIDATE_HEADER = [
    "candidate_id",
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "screen_id",
    "activity_id",
    "record_key",
    "pair_method",
    "candidate_bucket",
    "en_record_text",
    "ne_record_text",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
]

RECORD_REVIEW_HEADER = [
    "review_item_id",
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "screen_id",
    "activity_id",
    "record_key",
    "pair_method",
    "en_sentence_count",
    "ne_sentence_count",
    "en_record_text",
    "ne_record_text",
    "notes",
]

MANUAL_REVIEW_HEADER = [
    "candidate_id",
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "screen_id",
    "activity_id",
    "record_key",
    "pair_method",
    "candidate_bucket",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "manual_label",
    "reviewer",
    "notes",
]

GOLD_HEADER = [
    "candidate_id",
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "screen_id",
    "activity_id",
    "record_key",
    "pair_method",
    "candidate_bucket",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "reviewer",
    "approved_at",
    "notes",
]

REJECTED_HEADER = [
    "candidate_id",
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "screen_id",
    "activity_id",
    "record_key",
    "pair_method",
    "candidate_bucket",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "reviewer",
    "rejected_at",
    "notes",
]

REVIEW_NOTES_HEADER = [
    "candidate_id",
    "source_id",
    "reviewer",
    "note_type",
    "note",
    "created_at",
]

STATUS_RANK = {
    "discovered": 0,
    "download_failed": 1,
    "downloaded": 2,
    "extract_failed": 3,
    "extracted": 4,
    "pair_failed": 5,
    "paired": 6,
    "review_ready": 7,
    "reviewed": 8,
    "finalized": 9,
}

SUBDOMAIN_MAP = {
    "math": "mathematics",
    "science": "science",
    "english": "english_language",
    "nepali": "nepali_language",
}


@dataclass
class DirectoryEntry:
    name: str
    url: str
    is_dir: bool


class DirectoryListingParser(HTMLParser):
    def __init__(self, base_url: str) -> None:
        super().__init__()
        self.base_url = base_url
        self.entries: list[DirectoryEntry] = []
        self._current_href: str | None = None

    def handle_starttag(self, tag: str, attrs) -> None:  # type: ignore[override]
        if tag != "a":
            return
        for key, value in attrs:
            if key == "href" and value:
                self._current_href = value
                break

    def handle_data(self, data: str) -> None:
        if not self._current_href:
            return
        href = self._current_href
        self._current_href = None
        name = data.strip()
        if not name or name in {"Parent Directory", "../"}:
            return
        url = urllib.parse.urljoin(self.base_url, href)
        is_dir = href.endswith("/")
        self.entries.append(DirectoryEntry(name=name.rstrip("/"), url=url, is_dir=is_dir))


def ensure_dirs() -> None:
    for path in (
        RAW_DIR,
        EXTRACTED_DIR,
        PAIRED_DIR,
        ALIGNED_DIR,
        REVIEWED_DIR,
        FINAL_DIR,
        LOGS_DIR,
    ):
        path.mkdir(parents=True, exist_ok=True)


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def ensure_parent(path: Path | str) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)


def read_csv(path: Path | str) -> list[dict[str, str]]:
    path = Path(path)
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle))


def write_csv(path: Path | str, rows: Iterable[dict[str, str]], fieldnames: list[str]) -> None:
    path = Path(path)
    ensure_parent(path)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow({field: row.get(field, "") for field in fieldnames})


def append_csv(path: Path | str, row: dict[str, str], fieldnames: list[str]) -> None:
    path = Path(path)
    ensure_parent(path)
    exists = path.exists()
    with path.open("a", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        if not exists:
            writer.writeheader()
        writer.writerow({field: row.get(field, "") for field in fieldnames})


def load_jsonl(path: Path | str) -> list[dict]:
    path = Path(path)
    if not path.exists():
        return []
    rows: list[dict] = []
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows


def write_jsonl(path: Path | str, rows: Iterable[dict]) -> None:
    path = Path(path)
    ensure_parent(path)
    with path.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")


def load_registry() -> list[dict[str, str]]:
    return read_csv(REGISTRY_PATH)


def save_registry(rows: list[dict[str, str]]) -> None:
    write_csv(REGISTRY_PATH, rows, REGISTRY_HEADER)


def module_raw_dir(source_id: str) -> Path:
    return RAW_DIR / source_id


def module_records_path(source_id: str) -> Path:
    return EXTRACTED_DIR / f"{source_id}.jsonl"


def module_pairs_path(source_id: str) -> Path:
    return PAIRED_DIR / f"{source_id}.jsonl"


def source_id_from_module_id(module_id: str) -> str:
    normalized = module_id.replace("/", "__").replace("-", "_")
    normalized = re.sub(r"[^A-Za-z0-9_]", "_", normalized)
    return f"EPAATH_{normalized}"


def grade_number_from_grade_dir(grade_dir: str) -> str:
    match = re.fullmatch(r"grade(\d+)", grade_dir)
    return match.group(1) if match else ""


def subdomain_from_subject(subject: str, grade: str) -> str:
    subject_key = subject.strip().lower()
    mapped = SUBDOMAIN_MAP.get(subject_key, subject_key or "unknown")
    if grade.isdigit() and int(grade) <= 3 and mapped in {"mathematics", "science", "english_language", "nepali_language"}:
        return mapped
    return mapped


def registry_status_counts(rows: list[dict[str, str]]) -> dict[str, int]:
    return dict(sorted(Counter(row.get("status", "unknown") for row in rows).items()))


def format_status_counts(rows: list[dict[str, str]]) -> str:
    counts = registry_status_counts(rows)
    return ", ".join(f"{status}={count}" for status, count in counts.items()) or "none"


def advance_status(current: str, candidate: str) -> str:
    if not current:
        return candidate
    if STATUS_RANK.get(candidate, -1) >= STATUS_RANK.get(current, -1):
        return candidate
    return current


def normalize_text(text: str) -> str:
    text = unicodedata.normalize("NFC", text)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[\u200b\u200c\u200d\ufeff]", "", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def strip_tags(text: str) -> str:
    return re.sub(r"<[^>]+>", " ", text)


def render_display_text(text: str) -> str:
    text = html.unescape(text)
    text = strip_tags(text)
    text = normalize_text(text)
    return text


def keep_text(text: str) -> bool:
    cleaned = normalize_text(text)
    if len(cleaned) < 2:
        return False
    return bool(re.search(r"[A-Za-z\u0900-\u097F0-9]", cleaned))


def split_sentences(text: str, language: str) -> list[str]:
    text = normalize_text(text)
    if not text:
        return []
    if language == "ne":
        pattern = r"(?<=[।!?])\s+"
    else:
        pattern = r"(?<=[.!?।])\s+"
    parts = [segment.strip() for segment in re.split(pattern, text) if segment.strip()]
    return [part for part in parts if len(part) > 1]


def build_request(url: str) -> urllib.request.Request:
    return urllib.request.Request(url, headers={"User-Agent": "epaath-mt-pipeline/2.0"})


def fetch_text(url: str, timeout: int = 30) -> str:
    with urllib.request.urlopen(build_request(url), timeout=timeout) as response:
        return response.read().decode("utf-8", errors="ignore")


def fetch_bytes(url: str, timeout: int = 30) -> bytes:
    with urllib.request.urlopen(build_request(url), timeout=timeout) as response:
        return response.read()


def parse_directory_listing(html_text: str, base_url: str) -> list[DirectoryEntry]:
    parser = DirectoryListingParser(base_url)
    parser.feed(html_text)
    deduped: dict[tuple[str, str], DirectoryEntry] = {}
    for entry in parser.entries:
        deduped[(entry.name, entry.url)] = entry
    return sorted(deduped.values(), key=lambda item: (not item.is_dir, item.name))


def relative_asset_path(module_url: str, asset_url: str) -> Path:
    module_path = urllib.parse.urlparse(module_url).path
    asset_path = urllib.parse.urlparse(asset_url).path
    relative = asset_path.replace(module_path, "", 1).lstrip("/")
    return Path(relative or "index.html")


def select_rows(
    rows: list[dict[str, str]],
    source_ids: list[str] | None = None,
    module_ids: list[str] | None = None,
    statuses: list[str] | None = None,
    limit: int | None = None,
) -> list[dict[str, str]]:
    source_id_set = set(source_ids or [])
    module_id_set = set(module_ids or [])
    status_set = set(statuses or [])
    selected: list[dict[str, str]] = []
    for row in rows:
        if source_id_set and row.get("source_id") not in source_id_set:
            continue
        if module_id_set and row.get("module_id") not in module_id_set:
            continue
        if status_set and row.get("status") not in status_set:
            continue
        selected.append(row)
        if limit is not None and len(selected) >= limit:
            break
    return selected


def bool_str(value: bool) -> str:
    return "1" if value else "0"


def is_truthy(value: str) -> bool:
    return value.strip() in {"1", "true", "True", "yes", "YES"}


def count_nonempty_rows(path: Path | str) -> int:
    return len(read_csv(path))
