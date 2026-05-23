# Dataset Audit

- Gold readiness: NO
- Registry modules: 630
- Registry statuses: discovered=57, pair_failed=157, review_ready=50, reviewed=366
- Audited modules: 573
- Module risk levels: high=138, low=387, medium=48
- Sentence candidates for review: 44743
- Excluded low-value candidate pairs: 17798
- Record review queue items: 5639
- Manual review rows: 15000
- Manual review labeled: 15000
- Approved gold pairs: 15000
- Final JSONL pairs: 15000
- Train/Dev/Test sizes: 12043/1576/1381

## Blockers

- 138 audited modules are still high risk.
- Record-level review queue still contains unresolved items.

## Recommended Next Step

- Dataset artifacts exist; spot-check the final JSONL and audit report before research use.