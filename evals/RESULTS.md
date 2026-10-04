# Verification after the ten-motion correction

**Behavioral status: NOT RUN for the corrected skills and prompts.** No Claude or other model calls were made during this rebuild.

The former eleven-motion chain had model-reviewed synthetic results. Those receipts remain locally under ignored `runs/`, but their source names, asset contents, case definitions and chain order no longer match. They do not validate this revision. `summary` reports them STALE where case identities overlap; new cases report NOT RUN. Historical source snapshots were preserved under `runs/before-chain-correction/` before replacing files.

The revised nine cases cover the exact ten-motion chain, Guided Persona context reuse, missing market evidence, synthetic persona limits, hostile source instructions, cheaper fidelity and absent results, opportunity route-back, separate value/differentiation axes and Storyboard before MVN. Criteria are written before execution.

Verification completed: `./scripts/test-library.sh` passed all fourteen regression checks, ten skill/prompt pairs, bundled assets, catalog order, local links and nine case definitions. All ten skills passed native frontmatter validation. All four Mermaid diagrams rendered locally.

Local checks verify metadata, templates, worked/weak examples, prompt parity including embedded assets, local links, catalog and case references, all-stage coverage and harness regressions. They do not establish semantic quality, model adherence or live usability. Record actual verification output before claiming any behavioral pass.

Next: rehearse in the actual demo tools. Optional model tests require Claude cloud calls and consume the configured allowance or API budget. There is no paid call in `./scripts/test-library.sh` or CI.

## Segment sizing revision: October 3, 2026

Segment now reuses Market Intel and explicitly estimates population-led TAM, trade/industry-filtered SAM and competition/reach/capacity-constrained SOM. Its template, worked/weak examples, prompt and presenter motion were revised; Market Intel now carries relevant sizing inputs. The worked example is entirely fictional, with no numeric Census/trade/filing claims. Official source routes were verified separately.

Three additional behavioral cases cover sizing arithmetic, source gaps and denominator/overlap/free-share traps, bringing the definitions to twelve. They are NOT RUN; no model review or human rehearsal result is inferred. Historical receipts remain stale.

Local verification of this revision: all fifteen regression checks pass, including arithmetic recomputed from the worked example's own input table; all twelve case definitions validate; the two updated skills pass native validation; prompt/assets parity and local links pass. These are mechanical checks, not behavioral verdicts.

The bake-off and standalone-interface revisions add cases 13–14. Behavioral execution: NOT RUN. Earlier receipts do not validate these revisions.

Storyboard arc and brutal-truth experiment framing revised; cases 06 and 09 updated. Behavioral execution for these revisions: NOT RUN.

Case 15 added for cheap reaction tests versus a falsifiable behavior test. Behavioral execution: NOT RUN. Local library checks and 15 regression tests pass.

MVN now uses Setup, Encounter, an internal 3–6 transaction human/system loop, and Resolution. Cases 01 and 09 updated to check loop continuity through the portable prompt. Behavioral execution for this revision: NOT RUN.

Supplied canvas references inspected; Persona framing, Solution Hypothesis measures and Storyboard solution summary aligned. Behavioral execution for these changes: NOT RUN.

Persona and combined positioning canvas fields aligned; six supplied reference assets included with Dean's confirmed sharing permission. Behavioral execution for these revisions: NOT RUN.

October 4, 2026: Added cases 16 (current Context dump predictive-maintenance demo) and 17 (synthetic IIoT is not validation). Existing report-comparison and standalone cases remain regression coverage. New and revised behavioral definitions are NOT RUN; no cloud/model call or simulated plant experiment was executed.

Current local verification: `./scripts/test-library.sh` passes 18 regression tests, 17 case definitions, ten skill/prompt pairs, asset/link checks and kickoff/demo-fixture consistency. This is mechanical verification; cases 16 and 17 have not been run through a model.

Case 16 refined for the intentional HiPPO request → evolved predictive-intervention outcome arc. Behavioral execution remains NOT RUN; no margin improvement or observed prevention is claimed.
