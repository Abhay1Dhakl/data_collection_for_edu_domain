from __future__ import annotations

import re
from collections import defaultdict
from dataclasses import dataclass

from common import SENTENCE_CANDIDATE_HEADER, normalize_text

NEPALI_DIGIT_TRANSLATION = str.maketrans("०१२३४५६७८९", "0123456789")
PLACEHOLDER_PATTERNS = (
    "loading",
    "under construction",
    "hello world",
)
EXCLUSION_FLAGS = {
    "identical_text",
    "numeric_only",
    "formula_or_symbolic",
    "placeholder_text",
}

MODULE_QUALITY_HEADER = [
    "source_id",
    "module_id",
    "grade",
    "subject",
    "subdomain",
    "en_record_count",
    "ne_record_count",
    "overlap_key_count",
    "coverage_min_ratio",
    "coverage_max_ratio",
    "ne_devanagari_ratio",
    "content_pair_count",
    "content_screen_pair_count",
    "identical_pair_count",
    "numeric_pair_count",
    "formula_pair_count",
    "latin_only_ne_pair_count",
    "quality_score",
    "risk_level",
    "recommended_action",
    "quality_flags",
]

EXCLUDED_CANDIDATE_HEADER = [*SENTENCE_CANDIDATE_HEADER, "exclude_reason"]


@dataclass(frozen=True)
class ModuleQuality:
    source_id: str
    module_id: str
    grade: str
    subject: str
    subdomain: str
    en_record_count: int
    ne_record_count: int
    overlap_key_count: int
    coverage_min_ratio: float
    coverage_max_ratio: float
    ne_devanagari_ratio: float
    content_pair_count: int
    content_screen_pair_count: int
    identical_pair_count: int
    numeric_pair_count: int
    formula_pair_count: int
    latin_only_ne_pair_count: int
    quality_score: int
    risk_level: str
    recommended_action: str
    quality_flags: tuple[str, ...]

    def as_row(self) -> dict[str, str]:
        return {
            "source_id": self.source_id,
            "module_id": self.module_id,
            "grade": self.grade,
            "subject": self.subject,
            "subdomain": self.subdomain,
            "en_record_count": str(self.en_record_count),
            "ne_record_count": str(self.ne_record_count),
            "overlap_key_count": str(self.overlap_key_count),
            "coverage_min_ratio": f"{self.coverage_min_ratio:.3f}",
            "coverage_max_ratio": f"{self.coverage_max_ratio:.3f}",
            "ne_devanagari_ratio": f"{self.ne_devanagari_ratio:.3f}",
            "content_pair_count": str(self.content_pair_count),
            "content_screen_pair_count": str(self.content_screen_pair_count),
            "identical_pair_count": str(self.identical_pair_count),
            "numeric_pair_count": str(self.numeric_pair_count),
            "formula_pair_count": str(self.formula_pair_count),
            "latin_only_ne_pair_count": str(self.latin_only_ne_pair_count),
            "quality_score": str(self.quality_score),
            "risk_level": self.risk_level,
            "recommended_action": self.recommended_action,
            "quality_flags": ";".join(self.quality_flags),
        }


def strip_custom_markup(text: str) -> str:
    cleaned = normalize_text(text)
    cleaned = cleaned.replace("::", " ")
    cleaned = cleaned.replace(";;", " ")
    cleaned = cleaned.replace("#", "")
    cleaned = cleaned.replace("@", "")
    cleaned = cleaned.translate(NEPALI_DIGIT_TRANSLATION)
    cleaned = re.sub(r"\s+", " ", cleaned)
    return cleaned.strip()


def normalized_compare_text(text: str) -> str:
    cleaned = strip_custom_markup(text).lower()
    cleaned = re.sub(r"[^\w\u0900-\u097F]+", "", cleaned)
    return cleaned


def contains_devanagari(text: str) -> bool:
    return bool(re.search(r"[\u0900-\u097F]", text))


def contains_latin(text: str) -> bool:
    return bool(re.search(r"[A-Za-z]", text))


def looks_like_placeholder(text: str) -> bool:
    normalized = strip_custom_markup(text).lower()
    return any(pattern in normalized for pattern in PLACEHOLDER_PATTERNS)


def looks_like_numeric_only(text: str) -> bool:
    normalized = strip_custom_markup(text)
    normalized = re.sub(r"[0-9\s.,/%()+\-=:×xX_]+", "", normalized)
    return not normalized


def looks_like_formula_or_symbolic(text: str) -> bool:
    normalized = strip_custom_markup(text)
    if not normalized:
        return False
    formula_markers = sum(
        marker in text
        for marker in ("::", "_/_", "=", "×", "+", "÷")
    )
    if formula_markers >= 1:
        return True
    non_linguistic = re.sub(r"[\s0-9A-Za-z\u0900-\u097F.,!?()]", "", normalized)
    return bool(non_linguistic)


def is_content_screen(screen_id: str, record_key: str) -> bool:
    return screen_id.startswith("page") or record_key.startswith("strings/string#id=p")


def base_candidate_flags(en_text: str, ne_text: str, screen_id: str, record_key: str) -> list[str]:
    flags: list[str] = []
    if normalized_compare_text(en_text) == normalized_compare_text(ne_text):
        flags.append("identical_text")
    if looks_like_placeholder(en_text) or looks_like_placeholder(ne_text):
        flags.append("placeholder_text")
    if looks_like_numeric_only(en_text) and looks_like_numeric_only(ne_text):
        flags.append("numeric_only")
    if looks_like_formula_or_symbolic(en_text) and looks_like_formula_or_symbolic(ne_text):
        flags.append("formula_or_symbolic")
    if record_key.startswith("lesson/"):
        flags.append("lesson_metadata")
    if screen_id == "global":
        flags.append("global_ui")
    if contains_latin(ne_text) and not contains_devanagari(ne_text) and not looks_like_numeric_only(ne_text):
        flags.append("latin_only_nepali")
    if contains_devanagari(en_text):
        flags.append("devanagari_in_english")
    if len(strip_custom_markup(en_text)) < 4 or len(strip_custom_markup(ne_text)) < 4:
        flags.append("very_short")
    return sorted(set(flags))


def pairable_exact_matches(records: list[dict]) -> list[tuple[str, dict, dict]]:
    grouped: dict[str, dict[str, list[dict]]] = defaultdict(lambda: {"en": [], "ne": []})
    for record in records:
        language = str(record.get("language", ""))
        if language not in {"en", "ne"}:
            continue
        grouped[str(record["record_key"])][language].append(record)

    pairs: list[tuple[str, dict, dict]] = []
    for record_key in sorted(grouped):
        bucket = grouped[record_key]
        if len(bucket["en"]) == 1 and len(bucket["ne"]) == 1:
            pairs.append((record_key, bucket["en"][0], bucket["ne"][0]))
    return pairs


def compute_module_quality(row: dict[str, str], records: list[dict]) -> ModuleQuality:
    en_records = [record for record in records if record.get("language") == "en"]
    ne_records = [record for record in records if record.get("language") == "ne"]
    en_keys = {str(record["record_key"]) for record in en_records}
    ne_keys = {str(record["record_key"]) for record in ne_records}
    exact_pairs = pairable_exact_matches(records)

    overlap_key_count = len(exact_pairs)
    min_denominator = max(1, min(len(en_keys), len(ne_keys)))
    max_denominator = max(1, max(len(en_keys), len(ne_keys)))
    coverage_min_ratio = overlap_key_count / min_denominator
    coverage_max_ratio = overlap_key_count / max_denominator
    ne_devanagari_ratio = (
        sum(1 for record in ne_records if contains_devanagari(str(record.get("text", "")))) / max(1, len(ne_records))
    )

    content_pair_count = 0
    content_screen_pair_count = 0
    identical_pair_count = 0
    numeric_pair_count = 0
    formula_pair_count = 0
    latin_only_ne_pair_count = 0

    for record_key, en_record, ne_record in exact_pairs:
        flags = base_candidate_flags(
            str(en_record.get("text", "")),
            str(ne_record.get("text", "")),
            str(en_record.get("screen_id", "")),
            record_key,
        )
        flag_set = set(flags)
        if "identical_text" in flag_set:
            identical_pair_count += 1
        if "numeric_only" in flag_set:
            numeric_pair_count += 1
        if "formula_or_symbolic" in flag_set:
            formula_pair_count += 1
        if "latin_only_nepali" in flag_set:
            latin_only_ne_pair_count += 1
        if not flag_set & EXCLUSION_FLAGS:
            content_pair_count += 1
            if is_content_screen(str(en_record.get("screen_id", "")), record_key):
                content_screen_pair_count += 1

    flags: list[str] = []
    if not en_records:
        flags.append("no_english_records")
    if not ne_records:
        flags.append("no_nepali_records")
    if coverage_min_ratio < 0.30:
        flags.append("low_overlap_min")
    if coverage_max_ratio < 0.20:
        flags.append("low_overlap_max")
    if ne_devanagari_ratio < 0.40:
        flags.append("low_nepali_script")
    if content_pair_count < 5:
        flags.append("few_content_pairs")
    if content_screen_pair_count == 0:
        flags.append("no_content_screen_pairs")
    if overlap_key_count and identical_pair_count / overlap_key_count > 0.25:
        flags.append("many_identical_pairs")
    if overlap_key_count and latin_only_ne_pair_count / overlap_key_count > 0.25:
        flags.append("many_latin_only_ne_pairs")

    score = 100
    if "no_english_records" in flags or "no_nepali_records" in flags:
        score = 0
    else:
        if coverage_max_ratio < 0.15:
            score -= 40
        elif coverage_max_ratio < 0.30:
            score -= 25
        elif coverage_max_ratio < 0.60:
            score -= 10

        if coverage_min_ratio < 0.20:
            score -= 20
        elif coverage_min_ratio < 0.50:
            score -= 10

        if ne_devanagari_ratio < 0.25:
            score -= 25
        elif ne_devanagari_ratio < 0.60:
            score -= 10

        if content_pair_count < 5:
            score -= 15
        elif content_pair_count < 15:
            score -= 5

        if content_screen_pair_count == 0:
            score -= 15

        if overlap_key_count and identical_pair_count / overlap_key_count > 0.25:
            score -= 10

        if overlap_key_count and latin_only_ne_pair_count / overlap_key_count > 0.25:
            score -= 10

    score = max(0, min(score, 100))
    if score < 45:
        risk_level = "high"
        recommended_action = "manual_block_or_recheck"
    elif score < 75:
        risk_level = "medium"
        recommended_action = "manual_review_required"
    else:
        risk_level = "low"
        recommended_action = "review_candidates"

    return ModuleQuality(
        source_id=row["source_id"],
        module_id=row["module_id"],
        grade=row["grade"],
        subject=row["subject"],
        subdomain=row["subdomain"],
        en_record_count=len(en_records),
        ne_record_count=len(ne_records),
        overlap_key_count=overlap_key_count,
        coverage_min_ratio=coverage_min_ratio,
        coverage_max_ratio=coverage_max_ratio,
        ne_devanagari_ratio=ne_devanagari_ratio,
        content_pair_count=content_pair_count,
        content_screen_pair_count=content_screen_pair_count,
        identical_pair_count=identical_pair_count,
        numeric_pair_count=numeric_pair_count,
        formula_pair_count=formula_pair_count,
        latin_only_ne_pair_count=latin_only_ne_pair_count,
        quality_score=score,
        risk_level=risk_level,
        recommended_action=recommended_action,
        quality_flags=tuple(flags),
    )


def candidate_flags(
    module_quality: ModuleQuality,
    en_text: str,
    ne_text: str,
    screen_id: str,
    record_key: str,
) -> list[str]:
    flags = set(base_candidate_flags(en_text, ne_text, screen_id, record_key))
    if module_quality.coverage_max_ratio < 0.20:
        flags.add("module_low_coverage")
    if module_quality.ne_devanagari_ratio < 0.40:
        flags.add("module_low_nepali_script")
    if module_quality.content_pair_count < 5:
        flags.add("module_low_content_overlap")
    if module_quality.risk_level == "high":
        flags.add("module_high_risk")
    return sorted(flags)


def should_exclude_candidate(flags: list[str]) -> bool:
    flag_set = set(flags)
    if flag_set & EXCLUSION_FLAGS:
        return True
    if "module_high_risk" in flag_set and "lesson_metadata" in flag_set:
        return True
    if "module_high_risk" in flag_set and "latin_only_nepali" in flag_set:
        return True
    if "module_low_nepali_script" in flag_set and "latin_only_nepali" in flag_set:
        return True
    return False


def auto_decision(flags: list[str], module_quality: ModuleQuality) -> str:
    flag_set = set(flags)
    if should_exclude_candidate(flags):
        return "likely_reject"
    if module_quality.risk_level == "high":
        return "review_carefully"
    if flag_set & {"lesson_metadata", "global_ui", "latin_only_nepali"}:
        return "review_carefully"
    return "review_first"


def review_priority(auto_decision_value: str) -> str:
    order = {
        "review_first": "high",
        "review_carefully": "medium",
        "likely_reject": "low",
    }
    return order.get(auto_decision_value, "medium")
