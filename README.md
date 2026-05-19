# OLE Nepal E-Paath Education EN-NE MT Pipeline

This repository is now focused on one primary source for education-domain English-Nepali MT: OLE Nepal E-Paath.

The previous textbook-first workflow has been retired. CDC and CEHRD textbook pairs are no longer treated as the main path for parallel data because they are usually comparable, not true translations.

## Why E-Paath First

OLE Nepal states that E-Paath has 500+ interactive learning modules aligned with Nepal's national curriculum, covering grades 1-8 and available in Nepali and English.

This makes E-Paath the best practical source for education-domain parallel or near-parallel data.

Official OLE Nepal source:

- https://olenepal.org/digital-learning-solutions/e-paath/

Public E-Paath activity directories also expose structured module assets such as:

- `data.xml`
- `data-np.xml`
- `page1.html`, `page2.html`, ...
- `exercise.html`
- `js/`

This supports a module-centric extraction workflow instead of a PDF-centric workflow.

## Core Logic

Use this process:

1. Collect an E-Paath module directory.
2. Download bilingual assets such as `data.xml` and `data-np.xml`.
3. Extract text from the module assets.
4. Pair extracted records by `module_id`, `screen_id`, and `activity_id`.
5. Manually verify the aligned EN-NE candidates.
6. Promote approved pairs to gold parallel data.

## Subdomains

The current E-Paath-first pipeline is suitable for:

- `mathematics`
- `science`
- `english_language`
- `nepali_language`
- `general_learning`
- `early_grade_learning`

## Data Model

The registry is module-centric, not document-centric.

`data/source_registry.csv` header:

```csv
source_id,source_name,module_id,module_url,grade,subject,module_slug,module_title_en,module_title_ne,data_type,language_type,access_date,license_note,status,notes
```

Field meaning:

- `source_id`: local registry ID such as `EPAATH_0001`
- `module_id`: path-style identifier such as `grade5/math/fractions`
- `module_url`: E-Paath activity directory URL
- `module_slug`: final path segment of the module
- `data_type`: one of `bilingual_module`, `monolingual_module`, `verified_parallel_module`, `policy_document`
- `language_type`: usually `en-ne` for bilingual E-Paath modules
- `status`: pipeline stage such as `pending`, `downloaded`, `extracted`, `cleaned`, `sentence_split`

Important rule:

- `bilingual_module` means the raw module has bilingual assets available.
- `verified_parallel_module` means the module has already passed human pairing checks and is safe to use as high-confidence parallel material.

Stage scripts are status-aware by default:

- `02_download_documents.py` targets `pending` and `download_failed`
- `03_extract_text.py` targets `downloaded` and `extract_failed`
- `04_clean_text.py` targets `extracted`
- `05_sentence_split.py` targets `cleaned`

If a module is already at a later stage, the script will report that nothing is pending. Use `--source-id <SOURCE_ID> --overwrite` to rerun a specific module intentionally.

## Folder Layout

```text
.
├── data/
│   ├── source_registry.csv
│   ├── raw/
│   │   └── ole_epaath/
│   │       └── EPAATH_0001/
│   ├── extracted/
│   │   └── module_text/
│   ├── aligned/
│   │   ├── sentence_pairs_raw.csv
│   │   ├── sentence_pairs_scored.csv
│   │   └── manual_review_template.csv
│   ├── reviewed/
│   │   ├── gold_approved_pairs.csv
│   │   ├── rejected_pairs.csv
│   │   └── review_notes.csv
│   ├── final/
│   │   ├── train.jsonl
│   │   ├── dev.jsonl
│   │   ├── test.jsonl
│   │   ├── education_en_ne_gold.jsonl
│   │   └── dataset_card.md
│   └── logs/
│       ├── download_log.csv
│       ├── extraction_log.csv
│       ├── alignment_log.csv
│       └── quality_report.csv
├── scripts/
│   ├── 01_collect_sources.py
│   ├── 02_download_documents.py
│   ├── 03_extract_text.py
│   ├── 04_clean_text.py
│   ├── 05_sentence_split.py
│   ├── 06_align_sentences.py
│   ├── 07_manual_review_filter.py
│   └── 08_create_final_splits.py
├── reports/
└── README.md
```

## Script Roles

### `01_collect_sources.py`

Maintains the E-Paath module registry.

Use it to:

- validate the registry
- add a new module row
- summarize modules by subject, grade, type, and status

### `02_download_documents.py`

Downloads raw module assets from an E-Paath activity directory.

Current logic:

- saves the module directory listing
- downloads `data.xml`
- downloads `data-np.xml`
- downloads `page*.html`
- downloads `exercise.html`
- optionally downloads one-level JS and JSON assets from `js/`

### `03_extract_text.py`

Extracts structured records mainly from `data.xml` and `data-np.xml`.

Output records preserve:

- `source_id`
- `module_id`
- `language_type`
- `screen_id`
- `activity_id`
- `origin_file`
- `origin_path`
- `text`

### `04_clean_text.py`

Normalizes extracted module text and removes exact duplicates.

### `05_sentence_split.py`

Splits cleaned records into sentence JSONL while preserving module, screen, and activity metadata.

### `06_align_sentences.py`

Aligns bilingual E-Paath sentence records within the same module.

Alignment basis:

- exact `screen_id` match first
- exact `activity_id` match where available
- position and length heuristic within matched screen or activity groups

### `07_manual_review_filter.py`

Converts reviewed alignment candidates into approved and rejected sets.

### `08_create_final_splits.py`

Builds final train/dev/test JSONL files from approved E-Paath pairs.

## Current Usage

```bash
python3 scripts/01_collect_sources.py --validate --summary
python3 scripts/02_download_documents.py --source-id EPAATH_0001 --include-js --update-status
python3 scripts/03_extract_text.py --source-id EPAATH_0001 --update-status
python3 scripts/04_clean_text.py --source-id EPAATH_0001 --update-status
python3 scripts/05_sentence_split.py --source-id EPAATH_0001 --update-status
python3 scripts/06_align_sentences.py --source-id EPAATH_0001
python3 scripts/07_manual_review_filter.py
python3 scripts/08_create_final_splits.py
```

Once the seed module has advanced to `sentence_split`, these no-arg stage commands should no-op with an explanation instead of failing:

```bash
python3 scripts/02_download_documents.py
python3 scripts/03_extract_text.py
python3 scripts/04_clean_text.py
python3 scripts/05_sentence_split.py
```

## Manual Review Rule

Do not treat aligned E-Paath candidates as gold automatically.

Gold parallel data should only come after:

1. module-level bilingual availability check
2. screen or activity-level alignment
3. human verification

## Seed Module

The repository is seeded with one public E-Paath module example:

- `grade5/math/fractions`
- `https://epaath.olenepal.org/activity/grade5/math/fractions/`

This module directory is useful because public indexing shows both `data.xml` and `data-np.xml`, which fits the bilingual extraction workflow.
