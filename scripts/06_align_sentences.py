#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
from pathlib import Path

from common import ALIGNED_DIR, append_csv, load_jsonl, load_registry, read_csv, timestamp_iso, write_csv

RAW_HEADER = [
    "pair_id",
    "en_source_id",
    "ne_source_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_method",
    "alignment_score",
    "review_status",
]

SCORED_HEADER = [
    "pair_id",
    "en_source_id",
    "ne_source_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_method",
    "alignment_score",
    "quality_bucket",
    "review_status",
]

REVIEW_TEMPLATE_HEADER = [
    "pair_id",
    "en_source_id",
    "ne_source_id",
    "en_sentence_index",
    "ne_sentence_index",
    "en_text",
    "ne_text",
    "alignment_score",
    "manual_label",
    "reviewer",
    "notes",
]

CANDIDATE_DATA_TYPES = {"parallel_candidate", "comparable_candidate"}
NEPALI_DIGITS = str.maketrans("०१२३४५६७८९", "0123456789")


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Create conservative candidate alignments for near-parallel sources."
    )
    parser.add_argument("--en-source")
    parser.add_argument("--ne-source")
    parser.add_argument("--align-all", action="store_true", help="Align every discovered candidate pair.")
    parser.add_argument(
        "--list-candidates",
        action="store_true",
        help="List discovered English-Nepali source pairs and their readiness.",
    )
    parser.add_argument(
        "--include-flagged",
        action="store_true",
        help="Allow alignment even when extraction logs report quality issues.",
    )
    parser.add_argument("--window", type=int, default=2)
    parser.add_argument("--max-length-ratio", type=float, default=2.5)
    parser.add_argument("--min-score", type=float, default=0.55)
    return parser


def sentence_path(source_id: str) -> Path | None:
    matches = list(Path("data/extracted").rglob(f"{source_id}.sentences.jsonl"))
    return matches[0] if matches else None


def latest_extraction_info() -> dict[str, dict[str, str]]:
    rows = read_csv("data/logs/extraction_log.csv")
    latest: dict[str, dict[str, str]] = {}
    for row in rows:
        source_id = row.get("source_id", "")
        if source_id:
            previous = latest.get(source_id)
            if previous is None:
                latest[source_id] = row
                continue
            if row.get("result") != "skipped":
                latest[source_id] = row
            elif previous.get("result") == "skipped":
                latest[source_id] = row
    return latest


def extract_grade(title: str) -> str | None:
    normalized = title.translate(NEPALI_DIGITS)
    patterns = [
        r"\bgrade\s*[-:]?\s*(\d+)\b",
        r"कक्षा\s*([0-9]+)\b",
    ]
    for pattern in patterns:
        match = re.search(pattern, normalized, flags=re.IGNORECASE)
        if match:
            return match.group(1)
    return None


def length_score(en_text: str, ne_text: str, max_ratio: float) -> float:
    en_len = max(len(en_text.strip()), 1)
    ne_len = max(len(ne_text.strip()), 1)
    ratio = max(en_len, ne_len) / min(en_len, ne_len)
    if ratio > max_ratio:
        return 0.0
    return max(0.0, 1.0 - ((ratio - 1.0) / max(max_ratio - 1.0, 0.001)))


def projected_candidates(index: int, en_count: int, ne_count: int, window: int) -> range:
    if en_count <= 1 or ne_count <= 1:
        center = min(index, ne_count - 1)
    else:
        center = round(index * (ne_count - 1) / (en_count - 1))
    start = max(0, center - window)
    stop = min(ne_count, center + window + 1)
    return range(start, stop)


def align_sentences(
    en_rows: list[dict],
    ne_rows: list[dict],
    en_source: str,
    ne_source: str,
    window: int,
    max_ratio: float,
    min_score: float,
) -> tuple[list[dict[str, str]], list[dict[str, str]], list[dict[str, str]]]:
    used_ne: set[int] = set()
    raw_rows: list[dict[str, str]] = []
    scored_rows: list[dict[str, str]] = []
    template_rows: list[dict[str, str]] = []

    for en_index, en_row in enumerate(en_rows):
        best_score = -1.0
        best_ne = None
        best_ne_index = -1
        for ne_index in projected_candidates(en_index, len(en_rows), len(ne_rows), window):
            if ne_index in used_ne:
                continue
            ne_row = ne_rows[ne_index]
            length_component = length_score(en_row["text"], ne_row["text"], max_ratio)
            position_component = 1.0 - (
                abs((en_index / max(len(en_rows) - 1, 1)) - (ne_index / max(len(ne_rows) - 1, 1)))
            )
            score = round((0.65 * position_component) + (0.35 * length_component), 4)
            if score > best_score:
                best_score = score
                best_ne = ne_row
                best_ne_index = ne_index

        if best_ne is None or best_score < min_score:
            continue

        used_ne.add(best_ne_index)
        pair_id = f"{en_source}_{ne_source}_{len(raw_rows) + 1:05d}"
        review_status = "needs_manual_review"
        quality_bucket = "high" if best_score >= 0.85 else "medium" if best_score >= 0.7 else "low"

        base = {
            "pair_id": pair_id,
            "en_source_id": en_source,
            "ne_source_id": ne_source,
            "en_sentence_index": str(en_row["sentence_index"]),
            "ne_sentence_index": str(best_ne["sentence_index"]),
            "en_text": en_row["text"],
            "ne_text": best_ne["text"],
            "alignment_method": "position_length_heuristic",
            "alignment_score": f"{best_score:.4f}",
            "review_status": review_status,
        }
        raw_rows.append(base)
        scored_rows.append({**base, "quality_bucket": quality_bucket})
        template_rows.append(
            {
                "pair_id": pair_id,
                "en_source_id": en_source,
                "ne_source_id": ne_source,
                "en_sentence_index": str(en_row["sentence_index"]),
                "ne_sentence_index": str(best_ne["sentence_index"]),
                "en_text": en_row["text"],
                "ne_text": best_ne["text"],
                "alignment_score": f"{best_score:.4f}",
                "manual_label": "",
                "reviewer": "",
                "notes": "",
            }
        )

    return raw_rows, scored_rows, template_rows


def replace_rows(path: Path, new_rows: list[dict[str, str]], key_fields: tuple[str, str], header: list[str]) -> None:
    existing = read_csv(path)
    kept = (
        [
            row
            for row in existing
            if not (row.get(key_fields[0]) == new_rows[0][key_fields[0]] and row.get(key_fields[1]) == new_rows[0][key_fields[1]])
        ]
        if new_rows
        else existing
    )
    write_csv(path, kept + new_rows, header)


def build_pair(
    en_row: dict[str, str],
    ne_row: dict[str, str],
    extraction_info: dict[str, dict[str, str]],
) -> dict[str, object]:
    issues: list[str] = []
    warnings: list[str] = []

    for row in (en_row, ne_row):
        if row.get("status") != "extracted":
            issues.append(f"{row['source_id']}:status={row.get('status', 'unknown')}")
        if sentence_path(row["source_id"]) is None:
            issues.append(f"{row['source_id']}:missing_sentence_split")
        extract_row = extraction_info.get(row["source_id"], {})
        note = extract_row.get("notes", "").strip()
        if note:
            warnings.append(f"{row['source_id']}:{note}")

    return {
        "en_source_id": en_row["source_id"],
        "ne_source_id": ne_row["source_id"],
        "en_title": en_row["title"],
        "ne_title": ne_row["title"],
        "source_name": en_row["source_name"],
        "subdomain": en_row["subdomain"],
        "grade": extract_grade(en_row["title"]) or extract_grade(ne_row["title"]) or "?",
        "issues": issues,
        "warnings": warnings,
    }


def discover_candidate_pairs() -> list[dict[str, object]]:
    rows = load_registry()
    extraction_info = latest_extraction_info()
    grouped: dict[tuple[str, str, str], list[dict[str, str]]] = {}

    for row in rows:
        if row.get("data_type") not in CANDIDATE_DATA_TYPES:
            continue
        if row.get("language_type") not in {"en", "ne"}:
            continue
        grade = extract_grade(row.get("title", ""))
        if grade is None:
            continue
        key = (row["source_name"], row["subdomain"], grade)
        grouped.setdefault(key, []).append(row)

    pairs: list[dict[str, object]] = []
    for key in sorted(grouped):
        group_rows = grouped[key]
        en_rows = sorted((row for row in group_rows if row["language_type"] == "en"), key=lambda row: row["source_id"])
        ne_rows = sorted((row for row in group_rows if row["language_type"] == "ne"), key=lambda row: row["source_id"])
        for en_row, ne_row in zip(en_rows, ne_rows):
            pairs.append(build_pair(en_row, ne_row, extraction_info))

    return pairs


def find_row(rows: list[dict[str, str]], source_id: str) -> dict[str, str] | None:
    for row in rows:
        if row.get("source_id") == source_id:
            return row
    return None


def build_explicit_pair(en_source_id: str, ne_source_id: str) -> dict[str, object]:
    rows = load_registry()
    extraction_info = latest_extraction_info()
    en_row = find_row(rows, en_source_id)
    ne_row = find_row(rows, ne_source_id)

    if en_row is None or ne_row is None:
        missing = [source_id for source_id, row in ((en_source_id, en_row), (ne_source_id, ne_row)) if row is None]
        raise ValueError(f"Unknown source ID(s): {', '.join(missing)}")
    if en_row.get("language_type") != "en":
        raise ValueError(f"{en_source_id} is not labeled as English in the registry.")
    if ne_row.get("language_type") != "ne":
        raise ValueError(f"{ne_source_id} is not labeled as Nepali in the registry.")

    return build_pair(en_row, ne_row, extraction_info)


def print_candidates(pairs: list[dict[str, object]]) -> None:
    if not pairs:
        print("No English-Nepali candidate pairs were discovered in the registry.")
        return

    print("Discovered candidate pairs:")
    for pair in pairs:
        issues = pair["issues"]
        warnings = pair["warnings"]
        status = "READY"
        if issues:
            status = "BLOCKED"
        elif warnings:
            status = "FLAGGED"

        print(
            f"{status:7} {pair['en_source_id']} <-> {pair['ne_source_id']} | "
            f"{pair['subdomain']} | grade {pair['grade']}"
        )
        if issues:
            print(f"  issues: {'; '.join(issues)}")
        if warnings:
            print(f"  warnings: {'; '.join(warnings)}")


def should_block_pair(pair: dict[str, object], include_flagged: bool) -> tuple[bool, str]:
    issues = list(pair["issues"])
    warnings = list(pair["warnings"])
    messages: list[str] = []
    if issues:
        messages.extend(issues)
    if warnings and not include_flagged:
        messages.extend(warnings)
    return bool(messages), "; ".join(messages)


def run_alignment(pair: dict[str, object], args: argparse.Namespace) -> int:
    blocked, message = should_block_pair(pair, args.include_flagged)
    if blocked:
        raise RuntimeError(
            f"Refusing to align {pair['en_source_id']} vs {pair['ne_source_id']}: {message}. "
            "Use --include-flagged only if you intentionally want to align low-quality extractions."
        )

    en_path = sentence_path(str(pair["en_source_id"]))
    ne_path = sentence_path(str(pair["ne_source_id"]))
    if en_path is None or ne_path is None:
        raise RuntimeError("Sentence JSONL not found for one or both source IDs.")

    en_rows = load_jsonl(en_path)
    ne_rows = load_jsonl(ne_path)
    if not en_rows or not ne_rows:
        raise RuntimeError("Empty sentence list for one or both sources.")

    raw_rows, scored_rows, template_rows = align_sentences(
        en_rows,
        ne_rows,
        str(pair["en_source_id"]),
        str(pair["ne_source_id"]),
        args.window,
        args.max_length_ratio,
        args.min_score,
    )

    replace_rows(ALIGNED_DIR / "sentence_pairs_raw.csv", raw_rows, ("en_source_id", "ne_source_id"), RAW_HEADER)
    replace_rows(ALIGNED_DIR / "sentence_pairs_scored.csv", scored_rows, ("en_source_id", "ne_source_id"), SCORED_HEADER)
    replace_rows(
        ALIGNED_DIR / "manual_review_template.csv",
        template_rows,
        ("en_source_id", "ne_source_id"),
        REVIEW_TEMPLATE_HEADER,
    )
    append_csv(
        Path("data/logs/alignment_log.csv"),
        {
            "timestamp": timestamp_iso(),
            "en_source_id": str(pair["en_source_id"]),
            "ne_source_id": str(pair["ne_source_id"]),
            "pairs_created": str(len(raw_rows)),
            "output_path": "data/aligned/sentence_pairs_raw.csv",
            "result": "aligned" if raw_rows else "no_pairs",
            "notes": "include_flagged" if args.include_flagged and pair["warnings"] else "",
        },
        [
            "timestamp",
            "en_source_id",
            "ne_source_id",
            "pairs_created",
            "output_path",
            "result",
            "notes",
        ],
    )
    print(f"Created {len(raw_rows)} candidate pairs for {pair['en_source_id']} vs {pair['ne_source_id']}")
    return len(raw_rows)


def main() -> int:
    args = build_parser().parse_args()
    try:
        if (args.en_source and not args.ne_source) or (args.ne_source and not args.en_source):
            print("Both --en-source and --ne-source must be provided together.")
            return 1

        if args.en_source and args.ne_source:
            pair = build_explicit_pair(args.en_source, args.ne_source)
            run_alignment(pair, args)
            return 0

        discovered_pairs = discover_candidate_pairs()

        if args.list_candidates or (not args.align_all and not args.en_source and not args.ne_source):
            print_candidates(discovered_pairs)
            if not args.list_candidates and not args.align_all:
                print("\nRun with --align-all to align ready pairs, or pass --en-source/--ne-source for a specific pair.")
            return 0

        if args.align_all:
            ready_pairs = []
            skipped_pairs = []
            for pair in discovered_pairs:
                blocked, message = should_block_pair(pair, args.include_flagged)
                if blocked:
                    skipped_pairs.append((pair, message))
                else:
                    ready_pairs.append(pair)

            if not ready_pairs:
                print("No alignable candidate pairs were found.")
                if skipped_pairs:
                    print_candidates([pair for pair, _ in skipped_pairs])
                return 0

            total_pairs = 0
            for pair in ready_pairs:
                total_pairs += run_alignment(pair, args)
            print(f"Aligned {len(ready_pairs)} source pairs and created {total_pairs} candidate sentence pairs.")
            return 0

        print("Nothing to do.")
        return 0
    except (ValueError, RuntimeError) as exc:
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
