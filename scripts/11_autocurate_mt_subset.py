#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import math
import re
import shutil
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime
from difflib import SequenceMatcher
from pathlib import Path

import torch
from sentence_transformers import SentenceTransformer, util
from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

from common import MANUAL_REVIEW_HEADER, MANUAL_REVIEW_TEMPLATE_PATH, REPORTS_DIR, ensure_dirs, normalize_text, read_csv, write_csv

TRANSLATION_MODEL_NAME = "iamTangsang/MarianMT-Nepali-to-English-Translation-Final"
ENGLISH_SIM_MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"
MULTILINGUAL_SIM_MODEL_NAME = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

NEPALI_DIGITS = str.maketrans("०१२३४५६७८९", "0123456789")
BANNED_FLAGS = {
    "lesson_metadata",
    "global_ui",
    "module_low_coverage",
    "module_low_nepali_script",
    "module_high_risk",
    "devanagari_in_english",
    "latin_only_nepali",
    "very_short",
}
IMPORTANT_QUESTION_WORDS = {"what", "when", "where", "which", "who", "why", "how"}
CONTENT_STOPWORDS = (set(ENGLISH_STOP_WORDS) - IMPORTANT_QUESTION_WORDS) | {
    "let",
    "lets",
    "let's",
    "okay",
    "ok",
}
COLOR_WORDS = {
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "black",
    "white",
    "brown",
    "pink",
    "purple",
    "grey",
    "gray",
}
POLAR_WORDS = {
    "yes",
    "no",
    "true",
    "false",
    "same",
    "different",
    "inside",
    "outside",
    "up",
    "down",
    "left",
    "right",
    "more",
    "less",
    "bigger",
    "smaller",
    "greater",
    "equal",
    "before",
    "after",
    "first",
    "second",
    "third",
}
KINSHIP_WORDS = {
    "mother",
    "father",
    "mom",
    "dad",
    "brother",
    "sister",
    "uncle",
    "aunt",
    "teacher",
    "student",
    "friend",
    "friends",
    "child",
    "children",
}
TIME_WORDS = {
    "morning",
    "evening",
    "night",
    "day",
    "days",
    "week",
    "month",
    "year",
    "hour",
    "hours",
    "minute",
    "minutes",
    "second",
    "seconds",
}


@dataclass
class Candidate:
    row: dict[str, str]
    en_clean: str
    ne_clean: str
    signature: tuple[str, str]
    pair_frequency: int
    en_variant_count: int
    ne_variant_count: int
    backtranslated_en: str = ""
    en_back_similarity: float = 0.0
    en_ne_similarity: float = 0.0
    content_f1: float = 0.0
    sequence_ratio: float = 0.0
    length_ratio_back: float = 0.0
    confidence_score: float = 0.0
    reject_reasons: list[str] | None = None

    def kept_row(self, reviewer: str) -> dict[str, str]:
        updated = dict(self.row)
        updated["en_text"] = self.en_clean
        updated["ne_text"] = self.ne_clean
        updated["manual_label"] = "approved"
        updated["reviewer"] = reviewer
        updated["notes"] = ""
        return updated


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Auto-curate a high-confidence EN-NE subset for MT training.",
    )
    parser.add_argument("--input", default=str(MANUAL_REVIEW_TEMPLATE_PATH))
    parser.add_argument("--output", default=str(MANUAL_REVIEW_TEMPLATE_PATH))
    parser.add_argument(
        "--decision-report",
        default=str(REPORTS_DIR / "auto_curated_mt_subset.csv"),
        help="CSV report with keep/drop decisions and scores.",
    )
    parser.add_argument("--target-size", type=int, default=15000)
    parser.add_argument("--reviewer", default="codex_auto_curator")
    parser.add_argument("--batch-size", type=int, default=32)
    return parser


def clean_training_text(text: str) -> str:
    cleaned = normalize_text(text)
    cleaned = cleaned.replace("::", " ")
    cleaned = cleaned.replace(";;", " ")
    cleaned = cleaned.replace("#", "")
    cleaned = cleaned.replace("@", "")
    cleaned = re.sub(r"\s+", " ", cleaned)
    cleaned = re.sub(r"\s+([,.;:!?।])", r"\1", cleaned)
    cleaned = re.sub(r"([(\[{])\s+", r"\1", cleaned)
    cleaned = re.sub(r"\s+([)\]}])", r"\1", cleaned)
    return cleaned.strip()


def normalized_signature(en_text: str, ne_text: str) -> tuple[str, str]:
    return (clean_training_text(en_text).lower(), clean_training_text(ne_text).lower())


def has_latin(text: str) -> bool:
    return bool(re.search(r"[A-Za-z]", text))


def has_devanagari(text: str) -> bool:
    return bool(re.search(r"[\u0900-\u097F]", text))


def normalized_numbers(text: str) -> list[str]:
    return re.findall(r"\d+", text.translate(NEPALI_DIGITS))


def word_count(text: str) -> int:
    return len(clean_training_text(text).split())


def script_and_shape_ok(en_text: str, ne_text: str) -> bool:
    if not has_latin(en_text):
        return False
    if not has_devanagari(ne_text):
        return False
    if normalized_numbers(en_text) != normalized_numbers(ne_text):
        return False
    en_len = max(len(en_text), 1)
    ratio = len(ne_text) / en_len
    return 0.35 <= ratio <= 4.0


def token_list(text: str) -> list[str]:
    return re.findall(r"[a-z0-9]+", text.lower())


def normalize_english_token(token: str) -> str:
    token = token.lower()
    if token == "colour":
        return "color"
    if len(token) > 4 and token.endswith("ies"):
        return token[:-3] + "y"
    if len(token) > 4 and token.endswith("sses"):
        return token[:-2]
    if len(token) > 3 and token.endswith("es") and token[:-2].endswith(("s", "x", "z", "ch", "sh")):
        return token[:-2]
    if len(token) > 3 and token.endswith("s") and not token.endswith("ss"):
        return token[:-1]
    return token


def content_tokens(text: str) -> list[str]:
    return [
        normalize_english_token(token)
        for token in token_list(text)
        if normalize_english_token(token) not in CONTENT_STOPWORDS
    ]


def content_token_f1(left: str, right: str) -> float:
    left_counts = Counter(content_tokens(left))
    right_counts = Counter(content_tokens(right))
    if not left_counts and not right_counts:
        return 1.0
    overlap = sum(min(left_counts[token], right_counts[token]) for token in left_counts.keys() & right_counts.keys())
    precision = overlap / max(sum(right_counts.values()), 1)
    recall = overlap / max(sum(left_counts.values()), 1)
    if precision + recall == 0:
        return 0.0
    return (2 * precision * recall) / (precision + recall)


def keyword_set(text: str, vocabulary: set[str]) -> set[str]:
    return {token for token in content_tokens(text) if token in vocabulary}


def keyword_mismatch_penalty(en_text: str, backtranslated_en: str) -> tuple[float, list[str]]:
    penalties = 0.0
    reasons: list[str] = []
    for vocabulary, reason, weight in (
        (COLOR_WORDS, "color_mismatch", 0.12),
        (KINSHIP_WORDS, "role_mismatch", 0.12),
        (TIME_WORDS, "time_mismatch", 0.08),
        (POLAR_WORDS | IMPORTANT_QUESTION_WORDS, "question_or_polarity_mismatch", 0.10),
    ):
        source_terms = keyword_set(en_text, vocabulary)
        back_terms = keyword_set(backtranslated_en, vocabulary)
        if source_terms != back_terms:
            penalties += weight
            reasons.append(reason)
    return penalties, reasons


def consistency_penalty(candidate: Candidate) -> tuple[float, list[str]]:
    penalty = 0.0
    reasons: list[str] = []
    if candidate.en_variant_count > 1:
        penalty += 0.04
        reasons.append("english_has_multiple_nepali_variants")
    if candidate.ne_variant_count > 1:
        penalty += 0.04
        reasons.append("nepali_has_multiple_english_variants")
    return penalty, reasons


def fragment_penalty(en_text: str, backtranslated_en: str, content_f1_value: float) -> tuple[float, list[str]]:
    reasons: list[str] = []
    en_tokens = content_tokens(en_text)
    back_tokens = content_tokens(backtranslated_en)
    if len(en_tokens) <= 4 and content_f1_value < 0.55:
        reasons.append("short_low_overlap")
        return 0.12, reasons
    if len(back_tokens) > len(en_tokens) + 3 and content_f1_value < 0.60:
        reasons.append("backtranslation_drift")
        return 0.08, reasons
    return 0.0, reasons


def choose_device() -> str:
    if torch.backends.mps.is_available():
        return "mps"
    return "cpu"


def backtranslate_nepali(candidates: list[Candidate], batch_size: int) -> None:
    tokenizer = AutoTokenizer.from_pretrained(TRANSLATION_MODEL_NAME)
    model = AutoModelForSeq2SeqLM.from_pretrained(TRANSLATION_MODEL_NAME)
    device = choose_device()
    model.to(device)
    model.eval()

    texts = [candidate.ne_clean for candidate in candidates]
    outputs: list[str] = []
    for start in range(0, len(texts), batch_size):
        batch = texts[start : start + batch_size]
        encoded = tokenizer(batch, return_tensors="pt", padding=True, truncation=True).to(device)
        with torch.no_grad():
            generated = model.generate(**encoded, max_length=128)
        outputs.extend(tokenizer.batch_decode(generated, skip_special_tokens=True))

    for candidate, translated in zip(candidates, outputs):
        candidate.backtranslated_en = clean_training_text(translated)


def compute_similarity_scores(candidates: list[Candidate], batch_size: int) -> None:
    english_model = SentenceTransformer(ENGLISH_SIM_MODEL_NAME)
    multilingual_model = SentenceTransformer(MULTILINGUAL_SIM_MODEL_NAME)

    en_texts = [candidate.en_clean for candidate in candidates]
    backtranslated = [candidate.backtranslated_en for candidate in candidates]
    ne_texts = [candidate.ne_clean for candidate in candidates]

    en_embeddings = english_model.encode(
        en_texts,
        convert_to_tensor=True,
        normalize_embeddings=True,
        batch_size=batch_size,
        show_progress_bar=True,
    )
    back_embeddings = english_model.encode(
        backtranslated,
        convert_to_tensor=True,
        normalize_embeddings=True,
        batch_size=batch_size,
        show_progress_bar=True,
    )
    en_multi_embeddings = multilingual_model.encode(
        en_texts,
        convert_to_tensor=True,
        normalize_embeddings=True,
        batch_size=batch_size,
        show_progress_bar=True,
    )
    ne_multi_embeddings = multilingual_model.encode(
        ne_texts,
        convert_to_tensor=True,
        normalize_embeddings=True,
        batch_size=batch_size,
        show_progress_bar=True,
    )

    en_back_scores = util.cos_sim(en_embeddings, back_embeddings).diagonal().tolist()
    en_ne_scores = util.cos_sim(en_multi_embeddings, ne_multi_embeddings).diagonal().tolist()

    for candidate, en_back_score, en_ne_score in zip(candidates, en_back_scores, en_ne_scores):
        candidate.en_back_similarity = float(en_back_score)
        candidate.en_ne_similarity = float(en_ne_score)
        candidate.content_f1 = content_token_f1(candidate.en_clean, candidate.backtranslated_en)
        candidate.sequence_ratio = SequenceMatcher(
            None,
            candidate.en_clean.lower(),
            candidate.backtranslated_en.lower(),
        ).ratio()
        candidate.length_ratio_back = len(content_tokens(candidate.backtranslated_en)) / max(len(content_tokens(candidate.en_clean)), 1)


def score_candidate(candidate: Candidate) -> None:
    reasons: list[str] = []
    score = 0.0
    score += 0.40 * candidate.en_back_similarity
    score += 0.20 * candidate.en_ne_similarity
    score += 0.25 * candidate.content_f1
    score += 0.10 * candidate.sequence_ratio
    score += 0.03 * min(candidate.pair_frequency, 3) / 3
    if candidate.en_variant_count == 1 and candidate.ne_variant_count == 1:
        score += 0.02

    score_penalty, penalty_reasons = keyword_mismatch_penalty(candidate.en_clean, candidate.backtranslated_en)
    score -= score_penalty
    reasons.extend(penalty_reasons)

    score_penalty, penalty_reasons = consistency_penalty(candidate)
    score -= score_penalty
    reasons.extend(penalty_reasons)

    score_penalty, penalty_reasons = fragment_penalty(candidate.en_clean, candidate.backtranslated_en, candidate.content_f1)
    score -= score_penalty
    reasons.extend(penalty_reasons)

    if candidate.length_ratio_back > 1.8 or candidate.length_ratio_back < 0.55:
        score -= 0.05
        reasons.append("backtranslation_length_shift")
    if candidate.en_back_similarity < 0.35:
        reasons.append("weak_backtranslation_semantics")
    if candidate.content_f1 < 0.50:
        reasons.append("low_content_overlap")
    if candidate.en_ne_similarity < 0.18:
        reasons.append("weak_crosslingual_similarity")

    candidate.confidence_score = score
    candidate.reject_reasons = sorted(set(reasons))


def build_candidates(rows: list[dict[str, str]]) -> list[Candidate]:
    pair_frequencies: Counter[tuple[str, str]] = Counter()
    english_variants: dict[str, set[str]] = defaultdict(set)
    nepali_variants: dict[str, set[str]] = defaultdict(set)

    for row in rows:
        signature = normalized_signature(row.get("en_text", ""), row.get("ne_text", ""))
        pair_frequencies[signature] += 1
        english_variants[signature[0]].add(signature[1])
        nepali_variants[signature[1]].add(signature[0])

    deduped: dict[tuple[str, str], Candidate] = {}
    for row in rows:
        qa_flags = {flag for flag in str(row.get("qa_flags", "") or "").split(";") if flag}
        if str(row.get("module_risk_level", "")).strip().lower() != "low":
            continue
        if str(row.get("candidate_bucket", "")).strip() != "high_exact_single_sentence":
            continue
        if qa_flags & BANNED_FLAGS:
            continue

        en_clean = clean_training_text(row.get("en_text", ""))
        ne_clean = clean_training_text(row.get("ne_text", ""))
        if word_count(en_clean) < 2 or word_count(ne_clean) < 2:
            continue
        if not script_and_shape_ok(en_clean, ne_clean):
            continue

        signature = (en_clean.lower(), ne_clean.lower())
        if signature in deduped:
            continue

        deduped[signature] = Candidate(
            row=dict(row),
            en_clean=en_clean,
            ne_clean=ne_clean,
            signature=signature,
            pair_frequency=pair_frequencies[signature],
            en_variant_count=len(english_variants[signature[0]]),
            ne_variant_count=len(nepali_variants[signature[1]]),
        )

    return list(deduped.values())


def make_backup(path: Path) -> Path:
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = path.with_name(f"{path.stem}.pre_autocurate_{timestamp}{path.suffix}")
    shutil.copy2(path, backup_path)
    return backup_path


def write_decision_report(path: Path, kept: list[Candidate], dropped: list[Candidate]) -> None:
    fieldnames = [
        "decision",
        "confidence_score",
        "candidate_id",
        "source_id",
        "module_id",
        "grade",
        "subject",
        "screen_id",
        "activity_id",
        "record_key",
        "pair_frequency",
        "en_variant_count",
        "ne_variant_count",
        "en_back_similarity",
        "en_ne_similarity",
        "content_f1",
        "sequence_ratio",
        "backtranslated_en",
        "reject_reasons",
        "en_text",
        "ne_text",
    ]
    rows: list[dict[str, str]] = []
    for decision, group in (("approved", kept), ("rejected", dropped)):
        for candidate in group:
            rows.append(
                {
                    "decision": decision,
                    "confidence_score": f"{candidate.confidence_score:.4f}",
                    "candidate_id": candidate.row.get("candidate_id", ""),
                    "source_id": candidate.row.get("source_id", ""),
                    "module_id": candidate.row.get("module_id", ""),
                    "grade": candidate.row.get("grade", ""),
                    "subject": candidate.row.get("subject", ""),
                    "screen_id": candidate.row.get("screen_id", ""),
                    "activity_id": candidate.row.get("activity_id", ""),
                    "record_key": candidate.row.get("record_key", ""),
                    "pair_frequency": str(candidate.pair_frequency),
                    "en_variant_count": str(candidate.en_variant_count),
                    "ne_variant_count": str(candidate.ne_variant_count),
                    "en_back_similarity": f"{candidate.en_back_similarity:.4f}",
                    "en_ne_similarity": f"{candidate.en_ne_similarity:.4f}",
                    "content_f1": f"{candidate.content_f1:.4f}",
                    "sequence_ratio": f"{candidate.sequence_ratio:.4f}",
                    "backtranslated_en": candidate.backtranslated_en,
                    "reject_reasons": ";".join(candidate.reject_reasons or []),
                    "en_text": candidate.en_clean,
                    "ne_text": candidate.ne_clean,
                }
            )

    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def main() -> int:
    args = build_parser().parse_args()
    ensure_dirs()

    input_path = Path(args.input)
    output_path = Path(args.output)
    decision_report_path = Path(args.decision_report)
    rows = read_csv(input_path)
    if not rows:
        print(f"No rows found in {input_path}")
        return 0

    candidates = build_candidates(rows)
    if len(candidates) < args.target_size:
        print(
            f"Only {len(candidates)} high-confidence structural candidates remain after filtering; "
            f"target {args.target_size} cannot be reached."
        )
        return 1

    backtranslate_nepali(candidates, batch_size=args.batch_size)
    compute_similarity_scores(candidates, batch_size=args.batch_size)
    for candidate in candidates:
        score_candidate(candidate)

    ranked = sorted(
        candidates,
        key=lambda candidate: (
            candidate.confidence_score,
            candidate.content_f1,
            candidate.en_back_similarity,
            candidate.pair_frequency,
        ),
        reverse=True,
    )
    kept = ranked[: args.target_size]
    dropped = ranked[args.target_size :]

    if output_path.resolve() == input_path.resolve():
        backup_path = make_backup(input_path)
        print(f"Backed up original review file to {backup_path}")

    curated_rows = [candidate.kept_row(args.reviewer) for candidate in kept]
    curated_rows.sort(key=lambda row: row.get("candidate_id", ""))
    write_csv(output_path, curated_rows, MANUAL_REVIEW_HEADER)
    write_decision_report(decision_report_path, kept=kept, dropped=dropped)

    print(f"Read rows: {len(rows)}")
    print(f"Strict structural candidate pool: {len(candidates)}")
    print(f"Approved rows written: {len(kept)}")
    print(f"Dropped rows recorded: {len(dropped)}")
    print(f"Decision report: {decision_report_path}")
    print(
        f"Confidence range kept: {min(candidate.confidence_score for candidate in kept):.4f}"
        f" .. {max(candidate.confidence_score for candidate in kept):.4f}"
    )
    print(
        f"Confidence range dropped: {min(candidate.confidence_score for candidate in dropped):.4f}"
        f" .. {max(candidate.confidence_score for candidate in dropped):.4f}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
