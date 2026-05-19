# Education Domain English-Nepali MT Collection

This repository is a starter workspace for collecting, classifying, aligning, and reviewing education-domain English-Nepali machine translation data.

The collection strategy is intentionally different from healthcare. Education documents are often related by grade, subject, or curriculum, but many are not direct translations. The workflow here therefore prioritizes source discovery and classification before sentence alignment.

## Core Strategy

1. Collect education documents first.
2. Label each source as `parallel_candidate`, `comparable_candidate`, or `monolingual`.
3. Align only true or near-true parallel sources.
4. Keep monolingual and comparable corpora separate from gold MT pairs.

## Priority Sources

### 1. CDC Nepal E-Library / Curriculum Development Centre

Primary source for official school textbooks, curriculum documents, teacher guides, and subject-wise materials.

Priority subdomains:

- `mathematics`
- `science`
- `health_physical_education`
- `social_studies`
- `english_language`
- `nepali_language`
- `technical_vocational_education`
- `curriculum_policy`

### 2. CEHRD / Sikai Chautari Learning Portal

Use for grade-wise reading materials, teacher materials, and digital textbooks available without account requirements for public access.

### 3. OLE Nepal E-Paath

Use for bilingual or near-bilingual interactive learning modules, especially grades 1-8 math, science, social studies, and language content.

### 4. OLE Nepal E-Pustakalaya

Use mainly for monolingual education corpora, children reading materials, and back-translation resources.

### 5. Education Policy and Sector Documents

Use later for formal education-domain MT and terminology extraction:

- MoEST
- CDC
- CEHRD
- UNICEF Nepal
- Global Partnership for Education

## Data Categories

### Category 1: Parallel-Ready Data

Use when English and Nepali are actual translations or near translations.

Examples:

- Same document in English and Nepali
- Same lesson or module in English and Nepali
- Same policy document in both languages

This is the gold-data candidate pool.

### Category 2: Comparable Data

Use when English and Nepali are about the same topic but are not exact translations.

Examples:

- Grade 5 Mathematics English version
- Grade 5 Mathematics Nepali version
- Same subject and same grade, but wording or ordering differs

These sources require manual verification before they can become gold pairs.

### Category 3: Monolingual Data

Use when only English or only Nepali exists.

Examples:

- Single-language textbooks
- Teacher guides
- Reading materials
- Children's books

Use this pool for back-translation, terminology mining, language-model adaptation, and domain language modeling.

## Education Domain Subdomains

- `mathematics`: Grade-wise mathematics textbooks and learning materials.
- `science`: Science textbooks, exercises, and learning modules.
- `health_physical_education`: Health, hygiene, physical education, and life-skills content.
- `social_studies`: Social studies, civic education, history, geography, and life skills.
- `english_language`: English language textbooks and learning materials.
- `nepali_language`: Nepali language textbooks and reading materials.
- `early_childhood_education`: ECED/ECD learning materials.
- `teacher_training`: Teacher guides, training manuals, and professional development content.
- `curriculum_policy`: Curriculum framework, subject curriculum, and policy documents.
- `assessment_exam_materials`: Model questions, specification grids, and exam materials.
- `technical_vocational_education`: Technical and vocational textbooks.
- `children_reading_materials`: Story books and reading materials for children.
- `education_policy`: School education plans, reports, and education-sector documents.
- `language_policy`: Medium-of-instruction and language-learning policy documents.

## Registry Schema

`data/source_registry.csv` uses this header:

```csv
source_id,source_name,url,title,subdomain,data_type,language_type,file_type,access_date,license_note,status
```

Allowed `data_type` values:

- `parallel_candidate`
- `comparable_candidate`
- `monolingual_pdf`
- `monolingual_html`
- `bilingual_module`
- `policy_document`
- `textbook_pdf`
- `teacher_guide`

Allowed `language_type` values:

- `en-ne`
- `en`
- `ne`
- `unknown`

## Folder Layout

```text
.
├── data/
│   ├── source_registry.csv
│   ├── raw/
│   │   ├── cdc_elibrary/
│   │   ├── cehrd_learning_portal/
│   │   ├── ole_epaath/
│   │   ├── ole_epustakalaya/
│   │   └── policy_documents/
│   ├── extracted/
│   │   ├── pdf_text/
│   │   ├── html_text/
│   │   └── module_text/
│   ├── categorized/
│   │   ├── parallel_candidates/
│   │   ├── comparable_candidates/
│   │   └── monolingual/
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
│   ├── source_summary.md
│   ├── subdomain_summary.md
│   ├── dataset_statistics.md
│   └── license_review.md
└── README.md
```

## Practical Collection Order

### Step 1: CDC and CEHRD Textbooks

Collect 30-50 documents first, prioritizing:

- Grade 4-8 Mathematics
- Grade 4-8 Science
- Grade 4-8 Social Studies
- Grade 4-8 Health and Physical Education

These subjects usually contain clearer instructional language and more reusable terminology than literature-heavy texts.

### Step 2: OLE E-Paath Modules

Collect matching English and Nepali modules when the same lesson exists in both languages.

### Step 3: Education Policy Documents

Collect sector plans, curriculum reform documents, teacher-training documents, and language-policy materials.

### Step 4: E-Pustakalaya

Use mainly for monolingual Nepali text and children reading materials unless matched English-Nepali versions can be verified.

## Dataset Design

Build two separate datasets:

- Dataset A: Gold parallel education dataset
- Dataset B: Monolingual and comparable education corpus

Dataset A is for MT training and evaluation.
Dataset B is for back-translation, terminology extraction, domain vocabulary mining, and domain adaptation.

## Target Size

- Minimum gold target: 3,000-5,000 sentence pairs
- Strong gold target: 7,000-10,000 sentence pairs
- External test set: 500-1,000 sentence pairs
- Monolingual education text: 50,000+ sentences
- Terminology glossary: 300-500 terms

## First Milestone

The first milestone for this repository is:

1. Collect 30 education sources from CDC, CEHRD, and OLE.
2. Classify them as parallel, comparable, or monolingual candidates.
3. Produce 1,000 manually verified English-Nepali sentence pairs.

## Important Warning

Do not assume that the following are parallel by default:

- Grade 5 Mathematics English textbook
- Grade 5 Mathematics Nepali textbook

Treat these as `comparable_candidate` unless manual verification shows that they are true or near-true translations.

## Script Entry Points

Typical local workflow:

```bash
python3 scripts/01_collect_sources.py --summary
python3 scripts/02_download_documents.py --limit 10
python3 scripts/03_extract_text.py --limit 10
python3 scripts/04_clean_text.py
python3 scripts/05_sentence_split.py --source-id EDU_0001
python3 scripts/06_align_sentences.py
python3 scripts/06_align_sentences.py --list-candidates
python3 scripts/06_align_sentences.py --en-source EDU_0001 --ne-source EDU_0002 --include-flagged
python3 scripts/06_align_sentences.py --align-all
python3 scripts/07_manual_review_filter.py --allow-score-only
python3 scripts/08_create_final_splits.py
```

The alignment script is intentionally conservative. Running it without arguments lists discovered source pairs and their blocked or flagged status instead of crashing.

`--include-flagged` should only be used for inspection or manual review when extraction quality is known to be imperfect.
