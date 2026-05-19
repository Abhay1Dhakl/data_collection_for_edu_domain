# OLE Nepal E-Paath EN-NE MT Pipeline

This repository is rebuilt around one source: OLE Nepal E-Paath.

The goal is not to assume textbook parallelism. The goal is to discover real bilingual E-Paath modules, extract their English and Nepali text, pair records by module structure, and only then create manually verified gold sentence pairs.

## Why This Pipeline

E-Paath is the strongest education-domain source for English-Nepali MT because the public activity directories expose bilingual module assets such as:

- `data.xml`
- `data-np.xml`
- `page1.html`, `page2.html`, ...
- `exercise.html`
- `js/`

That allows a safer workflow than treating separate English and Nepali textbooks as if they were direct translations.

## Core Logic

1. Crawl the live E-Paath `/activity/` directory.
2. Discover grade, subject, and module directories.
3. Mark which modules are actually bilingual by checking for both `data.xml` and `data-np.xml`.
4. Download the raw module assets.
5. Extract bilingual text records from XML.
6. Use JS asset references to map string IDs to module screens.
7. Pair English and Nepali records by exact `record_key`, `screen_id`, and `activity_id`.
8. Split matched record pairs into sentence candidates only when both sides have the same sentence count.
9. Export a manual review sheet.
10. Build the final gold dataset only from manually approved rows.

## Folder Layout

```text
data/
├── source_registry.csv
├── raw/
│   └── ole_epaath/
├── extracted/
│   └── module_records/
├── paired/
│   └── module_record_pairs/
├── aligned/
│   ├── sentence_candidates.csv
│   └── record_review_queue.csv
├── reviewed/
│   ├── manual_review_template.csv
│   ├── gold_approved_pairs.csv
│   ├── rejected_pairs.csv
│   └── review_notes.csv
├── final/
│   ├── education_en_ne_gold.jsonl
│   ├── train.jsonl
│   ├── dev.jsonl
│   ├── test.jsonl
│   └── dataset_card.md
└── logs/
    ├── discovery_log.csv
    ├── download_log.csv
    ├── extraction_log.csv
    └── pairing_log.csv
reports/
├── module_quality_audit.csv
├── excluded_candidate_pairs.csv
└── final_dataset_audit.md
```

## Registry Columns

`data/source_registry.csv`

```csv
source_id,source_name,module_id,module_url,grade,subject,subdomain,module_slug,has_data_xml,has_data_np_xml,page_count,js_asset_count,exercise_asset_count,html_asset_count,data_type,language_type,module_title_en,module_title_ne,discovered_at,last_seen_at,status,notes
```

Important fields:

- `module_id`: `grade5/math/fractions`
- `language_type`: `en-ne` only when both XML files exist
- `status`: `discovered`, `downloaded`, `extracted`, `review_ready`, `reviewed`, etc.
- `subdomain`: normalized from the E-Paath subject directory

## Scripts

### `01_discover_modules.py`

Crawls the live E-Paath directory and writes the registry.

Examples:

```bash
python3 scripts/01_discover_modules.py
python3 scripts/01_discover_modules.py --only-bilingual
python3 scripts/01_discover_modules.py --grade grade5 --subject math
```

### `02_download_assets.py`

Downloads the raw assets for selected modules.

Examples:

```bash
python3 scripts/02_download_assets.py --source-id EPAATH_grade5__math__fractions --update-status
python3 scripts/02_download_assets.py --module-id grade5/math/fractions --update-status
```

### `03_extract_records.py`

Extracts records from bilingual XML and supporting HTML/JSON assets.

Notes:

- XML is the primary bilingual source.
- JS is used to map string IDs to the correct screen.
- HTML and JSON are extracted as supporting structure records.

```bash
python3 scripts/03_extract_records.py --module-id grade5/math/fractions --update-status
```

### `04_pair_records.py`

Pairs English and Nepali records by exact record key before sentence review.

Behavior:

- exact record-key match only
- sentence candidates are created only if EN and NE sentence counts match
- low-value pairs such as identical text, placeholders, numeric-only rows, and symbolic formula rows are excluded before review
- module-level QA metrics are written to `reports/module_quality_audit.csv`
- excluded rows are written to `reports/excluded_candidate_pairs.csv`
- count mismatches go into `record_review_queue.csv`

```bash
python3 scripts/04_pair_records.py --module-id grade5/math/fractions --update-status
```

### `05_prepare_review.py`

Creates `data/reviewed/manual_review_template.csv` from sentence candidates.

```bash
python3 scripts/05_prepare_review.py
```

### `06_apply_reviews.py`

Reads the manual review template and creates approved and rejected sets.

Use `manual_label` values:

- `approved`
- `rejected`

```bash
python3 scripts/06_apply_reviews.py --update-status
```

### `07_create_dataset.py`

Builds the final JSONL dataset from approved rows.

Behavior:

- removes exact duplicate approved pairs
- splits by source module to reduce train/dev/test leakage
- writes `reports/final_dataset_audit.md`

```bash
python3 scripts/07_create_dataset.py
```

### `09_audit_dataset.py`

Writes a single audit report that answers whether the current repository state is actually gold-ready.

```bash
python3 scripts/09_audit_dataset.py
```

### `08_status.py`

Shows current registry and review progress.

```bash
python3 scripts/08_status.py
```

## Recommended First Run

```bash
python3 scripts/01_discover_modules.py --only-bilingual
python3 scripts/02_download_assets.py --module-id grade5/math/fractions --update-status
python3 scripts/03_extract_records.py --module-id grade5/math/fractions --update-status
python3 scripts/04_pair_records.py --module-id grade5/math/fractions --update-status
python3 scripts/05_prepare_review.py
```

Then manually edit:

- `data/reviewed/manual_review_template.csv`

After review:

```bash
python3 scripts/06_apply_reviews.py --update-status
python3 scripts/07_create_dataset.py
```

## Scope

This pipeline is designed for the E-Paath subdomains most likely to yield usable education-domain EN-NE data:

- `mathematics`
- `science`
- `english_language`
- `nepali_language`
- `general_learning`
- `early_grade_learning`

## Important Rule

This system does not turn separate English and Nepali textbooks into parallel data.

It only creates sentence-pair candidates from bilingual E-Paath modules whose internal record structure matches across languages, followed by manual verification.

## Gold Criteria

For this repository, a dataset should only be treated as gold when all of the following are true:

- the module has passed the QA gate in `reports/module_quality_audit.csv`
- the sentence pair survived automatic low-value filtering
- a human reviewer marked the pair as `approved`
- the final dataset split was created from approved pairs only
- the audit report in `reports/final_dataset_audit.md` shows no blocking issues
