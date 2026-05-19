from __future__ import annotations

import csv
import json
import re
import unicodedata
from collections import Counter
from datetime import date, datetime
from pathlib import Path
from typing import Iterable

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"
RAW_DIR = DATA_DIR / "raw"
EXTRACTED_DIR = DATA_DIR / "extracted"
ALIGNED_DIR = DATA_DIR / "aligned"
REVIEWED_DIR = DATA_DIR / "reviewed"
FINAL_DIR = DATA_DIR / "final"
LOGS_DIR = DATA_DIR / "logs"
REGISTRY_PATH = DATA_DIR / "source_registry.csv"
SOURCE_ID_PREFIX = "EPAATH"

REGISTRY_HEADER = [
    "source_id",
    "source_name",
    "module_id",
    "module_url",
    "grade",
    "subject",
    "module_slug",
    "module_title_en",
    "module_title_ne",
    "data_type",
    "language_type",
    "access_date",
    "license_note",
    "status",
    "notes",
]

REQUIRED_REGISTRY_FIELDS = {
    "source_id",
    "source_name",
    "module_id",
    "module_url",
    "grade",
    "subject",
    "module_slug",
    "data_type",
    "language_type",
    "access_date",
    "license_note",
    "status",
}

ALLOWED_DATA_TYPES = {
    "bilingual_module",
    "monolingual_module",
    "verified_parallel_module",
    "policy_document",
}

ALLOWED_LANGUAGE_TYPES = {"en-ne", "en", "ne", "unknown"}

SOURCE_NAME_TO_RAW_DIR = {
    "OLE Nepal E-Paath": "ole_epaath",
}

STATUS_RANK = {
    "pending": 0,
    "download_failed": 1,
    "downloaded": 2,
    "extract_failed": 3,
    "extracted": 4,
    "cleaned": 5,
    "sentence_split": 6,
    "aligned": 7,
    "reviewed": 8,
    "finalized": 9,
}


def today_iso() -> str:
    return date.today().isoformat()


def timestamp_iso() -> str:
    return datetime.utcnow().replace(microsecond=0).isoformat() + "Z"


def ensure_parent(path: Path | str) -> None:
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)


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
        writer.writerows(rows)


def append_csv(path: Path | str, row: dict[str, str], fieldnames: list[str]) -> None:
    path = Path(path)
    ensure_parent(path)
    exists = path.exists()
    with path.open("a", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        if not exists:
            writer.writeheader()
        writer.writerow(row)


def load_registry() -> list[dict[str, str]]:
    return read_csv(REGISTRY_PATH)


def save_registry(rows: list[dict[str, str]]) -> None:
    write_csv(REGISTRY_PATH, rows, REGISTRY_HEADER)


def next_source_id(rows: list[dict[str, str]]) -> str:
    highest = 0
    for row in rows:
        match = re.fullmatch(rf"{SOURCE_ID_PREFIX}_(\d{{4}})", row.get("source_id", ""))
        if match:
            highest = max(highest, int(match.group(1)))
    return f"{SOURCE_ID_PREFIX}_{highest + 1:04d}"


def raw_subdir_for_source(source_name: str) -> Path:
    subdir = SOURCE_NAME_TO_RAW_DIR.get(source_name, "ole_epaath")
    return RAW_DIR / subdir


def module_raw_dir(source_id: str) -> Path:
    return RAW_DIR / "ole_epaath" / source_id


def module_extracted_path(source_id: str) -> Path:
    return EXTRACTED_DIR / "module_text" / f"{source_id}.jsonl"


def module_cleaned_path(source_id: str) -> Path:
    return EXTRACTED_DIR / "module_text" / f"{source_id}.clean.jsonl"


def module_sentences_path(source_id: str) -> Path:
    return EXTRACTED_DIR / "module_text" / f"{source_id}.sentences.jsonl"


def advance_status(current: str, candidate: str) -> str:
    if not candidate:
        return current
    if not current:
        return candidate
    if STATUS_RANK.get(candidate, -1) >= STATUS_RANK.get(current, -1):
        return candidate
    return current


def cleaned_variant(path: Path) -> Path:
    if path.name.endswith(".clean.jsonl"):
        return path
    if path.suffix == ".jsonl":
        return path.with_name(path.stem + ".clean.jsonl")
    if path.suffix == ".txt":
        return path.with_name(path.stem + ".clean.txt")
    return path.with_suffix(path.suffix + ".clean")


def sentence_jsonl_variant(path: Path) -> Path:
    if path.name.endswith(".clean.jsonl"):
        return path.with_name(path.name[: -len(".clean.jsonl")] + ".sentences.jsonl")
    if path.name.endswith(".clean.txt"):
        return path.with_name(path.name[:-10] + ".sentences.jsonl")
    if path.suffix == ".jsonl":
        return path.with_name(path.stem + ".sentences.jsonl")
    if path.suffix == ".txt":
        return path.with_name(path.stem + ".sentences.jsonl")
    return path.with_suffix(".sentences.jsonl")


def registry_status_counts(rows: list[dict[str, str]]) -> dict[str, int]:
    counts = Counter((row.get("status") or "unknown") for row in rows)
    return dict(sorted(counts.items()))


def format_status_counts(rows: list[dict[str, str]]) -> str:
    counts = registry_status_counts(rows)
    return ", ".join(f"{status}={count}" for status, count in counts.items()) or "none"


def normalize_text(text: str) -> str:
    text = unicodedata.normalize("NFC", text)
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[\u200b\u200c\u200d\ufeff]", "", text)
    lines = [re.sub(r"[ \t]+", " ", line).strip() for line in text.splitlines()]
    text = "\n".join(lines)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def split_sentences(text: str, language_type: str) -> list[str]:
    if language_type == "en":
        pattern = r"(?<=[.!?])\s+"
    elif language_type == "ne":
        pattern = r"(?<=[।!?])\s+"
    else:
        pattern = r"(?<=[.!?।])\s+"
    sentences = [segment.strip() for segment in re.split(pattern, text) if segment.strip()]
    return [sentence for sentence in sentences if len(sentence) > 1]


def load_jsonl(path: Path | str) -> list[dict]:
    path = Path(path)
    rows: list[dict] = []
    if not path.exists():
        return rows
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            rows.append(json.loads(line))
    return rows


def write_jsonl(path: Path | str, rows: Iterable[dict]) -> None:
    path = Path(path)
    ensure_parent(path)
    with path.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")
