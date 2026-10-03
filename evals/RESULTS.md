# Verification after the ten-motion correction

**Behavioral status: NOT RUN for the corrected skills and prompts.** No Claude or other model calls were made during this rebuild.

The former eleven-motion chain had model-reviewed synthetic results. Those receipts remain locally under ignored `runs/`, but their source names, asset contents, case definitions and chain order no longer match. They do not validate this revision. `summary` reports them STALE where case identities overlap; new cases report NOT RUN. Historical source snapshots were preserved under `runs/before-chain-correction/` before replacing files.

The revised nine cases cover the exact ten-motion chain, Guided Persona context reuse, missing market evidence, synthetic persona limits, hostile source instructions, cheaper fidelity and absent results, opportunity route-back, separate value/differentiation axes and Storyboard before MVN. Criteria are written before execution.

Verification completed: `./scripts/test-library.sh` passed all fourteen regression checks, ten skill/prompt pairs, bundled assets, catalog order, local links and nine case definitions. All ten skills passed native frontmatter validation. All four Mermaid diagrams rendered locally.

Local checks verify metadata, templates, worked/weak examples, prompt parity including embedded assets, local links, catalog and case references, all-stage coverage and harness regressions. They do not establish semantic quality, model adherence or live usability. Record actual verification output before claiming any behavioral pass.

Next: rehearse in the actual demo tools. Optional model tests require Claude cloud calls and consume the configured allowance or API budget. There is no paid call in `./scripts/test-library.sh` or CI.
