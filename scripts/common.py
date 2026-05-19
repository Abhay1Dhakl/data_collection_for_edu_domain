from __future__ import annotations

import csv
import json
import re
import unicodedata
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

REGISTRY_HEADER = [
    "source_id",
    "source_name",
    "url",
    "title",
    "subdomain",
    "data_type",
    "language_type",
    "file_type",
    "access_date",
    "license_note",
    "status",
]

ALLOWED_DATA_TYPES = {
    "parallel_candidate",
    "comparable_candidate",
    "monolingual_pdf",
    "monolingual_html",
    "bilingual_module",
    "policy_document",
    "textbook_pdf",
    "teacher_guide",
}

ALLOWED_LANGUAGE_TYPES = {"en-ne", "en", "ne", "unknown"}

SOURCE_NAME_TO_RAW_DIR = {
    "CDC Nepal E-Library": "cdc_elibrary",
    "CEHRD Learning Portal": "cehrd_learning_portal",
    "OLE Nepal E-Paath": "ole_epaath",
    "OLE Nepal E-Pustakalaya": "ole_epustakalaya",
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
        match = re.fullmatch(r"EDU_(\d{4})", row.get("source_id", ""))
        if match:
            highest = max(highest, int(match.group(1)))
    return f"EDU_{highest + 1:04d}"


def raw_subdir_for_source(source_name: str) -> Path:
    subdir = SOURCE_NAME_TO_RAW_DIR.get(source_name, "policy_documents")
    return RAW_DIR / subdir


def infer_download_extension(row: dict[str, str], content_type: str = "") -> str:
    url = row.get("url", "").lower()
    file_type = row.get("file_type", "").lower()
    if url.endswith(".pdf") or file_type == "pdf" or "application/pdf" in content_type:
        return ".pdf"
    if url.endswith(".zip") or "application/zip" in content_type:
        return ".zip"
    return ".html"


def find_downloaded_file(source_id: str) -> Path | None:
    for path in RAW_DIR.rglob(f"{source_id}.*"):
        if path.is_file():
            return path
    return None


def cleaned_variant(path: Path) -> Path:
    if path.suffix == ".txt":
        return path.with_name(path.stem + ".clean.txt")
    return path.with_suffix(path.suffix + ".clean.txt")


def sentence_jsonl_variant(path: Path) -> Path:
    if path.name.endswith(".clean.txt"):
        return path.with_name(path.name[:-10] + ".sentences.jsonl")
    if path.suffix == ".txt":
        return path.with_name(path.stem + ".sentences.jsonl")
    return path.with_suffix(path.suffix + ".sentences.jsonl")


def output_text_dir(row: dict[str, str]) -> Path:
    if row.get("data_type") == "bilingual_module":
        return EXTRACTED_DIR / "module_text"
    if row.get("file_type") == "html":
        return EXTRACTED_DIR / "html_text"
    return EXTRACTED_DIR / "pdf_text"


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
