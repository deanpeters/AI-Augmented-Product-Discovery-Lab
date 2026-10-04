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


## Segment commercial readout revision: October 4, 2026

Segment skill v0.4.0 and its self-contained prompt now require a final executive
TL;DR and TAM/SAM/SOM population / potential economics / reasoning table.
Pricing evidence is reused; absent evidence permits explicit pricing hypotheses
or illustrative what-ifs, never fabricated observed willingness to pay. The
worked example ends with 36 sites and $108,000 annual revenue potential at the
12-month endpoint ($30,000–$200,000 scenarios), not recognized year-one revenue
or profit. Template, examples, demo launches and presenter wording are aligned.

Case 10 now requires the commercial ending, Case 11 checks honest dollar gaps,
and new Case 18 tests missing-price what-ifs and the boss-ready ending. All 18
case definitions validate. All 20 local regression tests pass, including
recomputed final executive-table arithmetic, prompt parity and package checks.
Both Codex and Claude distribution bundles were refreshed from the canonical
skills. These are mechanical checks: new/revised behavioral cases are NOT RUN;
no cloud model calls or live rehearsal were performed for this revision.


## Distribution freshness gate: October 4, 2026

The GitHub validation workflow now checks committed Claude distribution content
as well as Codex content and prompt parity. `bash scripts/refresh-library.sh`
regenerates prompts, rebuilds both clients' `.plugin` and `.zip` copies and runs
the checks. The PR template records the same maintenance checklist. Checks run
without rebuilding first in CI, so stale committed artifacts fail.

All 22 local regression tests pass, including stale Claude-template and
unexpected-package-entry rejection; all 18 behavioral case definitions validate.
No behavioral model tests or live rehearsal were run for this maintenance change.


Claude distribution filenames now identify the client explicitly:
`dist/dlab-claude-0.1.1.plugin` and `dist/dlab-claude-0.1.1.zip`.
The refresh command rebuilds both alongside Codex; download links and
freshness checks follow the renamed files. The 22 local tests pass.

## Concise readout revision: October 4, 2026

Audit: nine skills had structured output lists but no required concise ending; Segment alone required its final commercial readout. The other nine now require Final readout, supported by motion-specific template fields and filled synthetic examples. Prompt equivalents and both plugin kits were regenerated as v0.1.2. The chain and combined Persona motion are unchanged. Supplied workshop canvases inform the field choices; no deck edits were made.

Case 19 covers all ten endings: populated decision notes, source/uncertainty retention, linked OST and comparison content, seven positioning clauses, falsifiable tests, six storyboard frames and all MVN transactions plus the portable prompt. Behavioral status: NOT RUN. Local checks do not prove that a model will follow the output contract.

Final mechanical verification: `bash scripts/refresh-library.sh` passed 22 regression tests, 19 case definitions, ten skill/prompt pairs, asset/link checks and both deterministic distribution-kit checks. No model calls were made.

## OST branching revision: October 4, 2026

OST v0.3.0 replaces the generic report template and tree/table ending with an actual outcome → opportunities → competing solutions → assumption-test hierarchy, delivered as Mermaid and equivalent ASCII. Its new synthetic manufacturing example preserves the dashboard request while exploring information, coordination and reasoning barriers to predictive intervention. Branch attention is justified by evidence, contribution and test constraints; no mandatory winner or automatic build is added. The ending is a short recommendation, not another copy of the diagram.

Added Case 20 for flat-list/feature-list failure, diagram parentage, divergence, disconfirmation and portfolio continuity; revised Cases 07 and 19. Behavioral execution: NOT RUN. Added local structural tests for template/example graph connectivity, layer relationships, candidate test coverage, and equivalent fallback trees, including malformed-graph failures. These checks do not establish model judgment. Both client kits are versioned v0.1.3.

Final verification: 24 regression tests and 20 case definitions pass, including skill/prompt parity and both kit content checks. Both example and template Mermaid trees rendered locally; ASCII graph parity is tested. Model behavior remains NOT RUN. Superseded v0.1.2 archives were removed; `dist/` keeps the four current v0.1.3 files. No deck or case-study files were edited.

## Customer payoff and economics revision: October 4, 2026

OST, value/differentiation and positioning skills are v0.4.0. Each embeds customer payoff, observable delight, economic realization, budget owner/switching/renewal reasoning, distinct provider delivery economics and current vs. compounding advantage tests. Templates, synthetic examples, weak-example repairs and prompt equivalents are aligned. Added `docs/CUSTOMER-VALUE-AND-DIFFERENTIATION.md`, bundled in both client kits; Claude now also includes the matching prompts so its document links resolve. Both kits are v0.1.4.

Cases 21–22 cover positive/negative customer scenarios, provider contribution vs. profit, rival parity and failed learning-rights assumptions. Behavioral execution remains NOT RUN. A local regression recomputes all F2 scenario results and break-even from the example's input table; these fictional inputs are not validated market economics. No source essay instructions authorize external actions or claim evidence. No model calls, customer experiments or deck edits were performed.

Final local verification: 25 regression tests pass; 22 behavioral-case definitions validate. Ten prompt equivalents match their skill assets; Codex (77 files) and Claude (66 files) v0.1.4 kits match canonical content. The new value-loop Mermaid diagram rendered locally. Behavioral execution for Cases 21–22 remains NOT RUN. `dist/` contains only the four current v0.1.4 archives.
