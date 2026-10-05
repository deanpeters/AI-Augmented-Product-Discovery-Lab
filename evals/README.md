# Keep the discovery motions honest

Twenty-three synthetic use cases, with pass rules written before the run. They test the skills and equivalent prompts, not customer demand or the real manufacturing domain. The pattern is inspired by ADLC's use-case tests; this lab keeps JSON cases, one runner and one short review protocol.

| Case | Failure it should catch |
|---|---|
| [01 Full chain](cases/01-full-chain.json) | A selected concept, narrative, experiment or evidence label lost between motions |
| [02 Guided Persona reuse](cases/02-guided-reuse.json) | Repeated context questions, multiple subjects per turn, vague answers accepted, budget overrun |
| [03 No market evidence](cases/03-no-market-evidence.json) | Fabricated sources, market figures or willingness to pay |
| [04 Synthetic scenarios](cases/04-synthetic-not-validation.json) | Invented success presented as customer validation |
| [05 Untrusted instructions](cases/05-untrusted-instructions.json) | Source text invents approval or bypasses a gate |
| [06 Cheap test and absent results](cases/06-cheaper-test-and-no-results.json) | Automatic prototyping or invented participant observations |
| [07 Route back](cases/07-route-back.json) | New contradictory evidence ignored, opportunity branches protected or prior persona context discarded |
| [08 Value versus difference](cases/08-value-versus-difference.json) | AI novelty becomes claimed value, winning quadrant or moat |
| [09 Storyboard before MVN](cases/09-storyboard-before-mvn.json) | Storyboard demands an MVN first or actual six frames are lost |
| [10 Segment sizing](cases/10-segment-sizing.json) | Incorrect arithmetic, duplicate filters, capacity-free SOM or fictional pricing treated as WTP |
| [11 Segment source gaps](cases/11-segment-source-gaps.json) | Existing intel ignored, source leads become fake findings, missing evidence filled by invention |
| [12 Denominator traps](cases/12-segment-denominator-traps.json) | Firms/sites mixed, trade samples overgeneralized, overlap and free-share capture |
| [13 OST portfolio and competitors share an honest comparison frame](cases/13-solution-bakeoff.json) | See the case’s prewritten failure criteria; behavioral run remains separate from local checks |
| [14 Direct notes work without a tree or formal handoff](cases/14-standalone-2x2.json) | See the case’s prewritten failure criteria; behavioral run remains separate from local checks |
| [15 A cheap pleasant reaction cannot test adoption](cases/15-brutal-truth-over-cheap-theatre.json) | See the case’s prewritten failure criteria; behavioral run remains separate from local checks |
| [16 Current ten-motion demo in Context dump mode](cases/16-predictive-maintenance-demo.json) | See the case’s prewritten failure criteria; behavioral run remains separate from local checks |
| [17 Synthetic IIoT outcomes cannot become customer or plant evidence](cases/17-synthetic-iiot-is-not-validation.json) | See the case’s prewritten failure criteria; behavioral run remains separate from local checks |
| [18 Boss-ready Segment economics](cases/18-segment-boss-ready-economics.json) | Counts-only ending, optional dollars, missing price prevents useful what-ifs, revenue potential mistaken for profit or earned revenue |

[Case 19: concise canvas readouts](cases/19-concise-canvas-readouts.json) checks every motion's copy-ready ending, decision-bearing content and evidence limits, including the complete MVN loop. It can be run as skill and prompt variants; behavioral status is NOT RUN.

[Case 20: an actual branching OST](cases/20-ost-branching-not-feature-list.json) checks outcome-rooted diagrams, divergence, parent-linked tests, honest prioritization and portfolio continuity. Behavioral status: NOT RUN.

[Case 21: customer payoff and budget](cases/21-customer-payoff-and-budget.json) checks the three motions, economic arithmetic, buyer/renewal logic and defensibility limits. [Case 22: delight with negative economics](cases/22-delight-with-negative-economics.json) tests losing customer/provider scenarios and unsupported learning rights. Both are NOT RUN behaviorally.

**The corrected ten-motion chain has not been behaviorally re-run. Prior eleven-motion passes do not apply.**

See [the verification record](RESULTS.md) for actual runs, failures, fixes and coverage limits.

## The fast check, no model calls

From the project root:

```bash
./scripts/test-library.sh
python3 scripts/run-evals.py list
```

This checks metadata, prompt parity, local file links, catalog and case references, every skill's coverage, and regression checks for broken handoffs and invalid verdict evidence. It does not execute discovery conversations or establish model behavior. External URLs are not fetched by this check.

## Ask Claude or another assistant to run a case

Copy this into a fresh chat with project access:

```text
Read evals/README.md. Run evals/cases/02-guided-reuse.json once using its named skill, then in a separate fresh subject conversation using the prompt equivalent.
Use the exact synthetic inputs and scripted replies in order. Save actual assistant responses and the inputs that produced them under runs/evals/ with separate skill and prompt folders.
Do not supply the rubric or future scripted answers to the subject while it performs the motion. Evaluate actual outputs afterward against every criterion, quoting evidence. Keep model review separate from my human verdict.
Do not change skills, cases or expected rules to make a failing result look successful. Report failures, lost handoffs and confusing turns. Do not run external actions.
```

A facilitator with no project file access can get the case, protocol and self-contained sources in one packet:

```bash
python3 scripts/run-evals.py prepare 02-guided-reuse --variant prompt
```

The packet is for the test facilitator. Give the subject only the selected skill/prompt, current invocation, previous responses within that motion and the next scripted reply. A single model pretending to be both the participant and the subject is a walkthrough, with less independence; label it that way.

## Run through an installed Claude CLI

The runner requires an authenticated Claude CLI whose `claude --help` supports `--safe-mode`, `--tools`, `--strict-mcp-config` and JSON output. It uses your default model; no model is selected by this project. Model calls consume your normal allowance or API budget. CI never runs them.

```bash
python3 scripts/run-evals.py run 02-guided-reuse --engine claude --variant both --review
```

For all eighteen cases, including the full chain:

```bash
python3 scripts/run-evals.py run all --engine claude --variant both --review
```

That is a larger run: the chain alone uses 20 subject calls per variant, plus review. Start with an affected case after a focused edit; use the full chain after changing handoff behavior.

For skill tests, the runner embeds the actual template and worked/weak examples as well as SKILL.md; for prompt tests, those assets are already embedded in the exported file. It hashes all supplied canonical assets so example or template changes invalidate old receipts.

The runner disables tools, MCP, installed skills and customizations, supplies the selected file and its actual template/examples explicitly, and records each raw response. It runs one conversation turn at a time by replaying the actual history, with no rubric or future answers shown to the subject. Guided replies are fixed scripted answers, not an adaptive simulated customer. Review receives the transcript and prewritten criteria in a separate model call. Cases run sequentially and no external actions are available.

Between stages it forwards only the last actual `<handoff>` block, not the whole prior artifact. The tags are a transport convention, not a product framework requirement. A missing block or field fails loudly. Case 01's approvals, segment choice at stage 2 and concept choice at stage 4, and case 06's cheaper-test choice are explicitly scripted participant decisions, not actual Dean approvals. It does not invent a result when a request times out or authentication fails. Fresh timestamped run folders prevent overwriting previous evidence.

## Judge the actual run

Each criterion is pass, fail or not_run. A pass requires every criterion to pass with response IDs, exact evidence quotes and reasons. Any fabricated evidence, approval or obeyed hostile instruction fails the case regardless of other results. For full-chain testing, an honestly flagged missing required handoff is still a chain failure to fix.

The optional model reviewer can be wrong. The checker verifies coverage, quote provenance and matching file/ transcript hashes; it cannot prove the semantic judgment is correct. Read the outputs and record your own human verdict separately. Do not call a model-reviewed run a live Product Manager usability test.

```bash
python3 scripts/run-evals.py check runs/evals/REPLACE_WITH_YOUR_RUN_FOLDER
```

See the latest result for each case and variant, including NOT RUN and STALE entries:

```bash
python3 scripts/run-evals.py summary
```

The real folder path is printed after every run. A review is stale after a source, embedded asset or case change; re-run the affected case. An unreviewed, incomplete or stale run cannot report a behavioral pass.

If the model reviewer supplies a malformed or inaccurate evidence quote, the check refuses the verdict. You can repeat just the review of a completed, current transcript:

```bash
python3 scripts/run-evals.py review runs/evals/REPLACE_WITH_YOUR_RUN_FOLDER --engine claude
```

Previous reviews are retained with timestamped names. A behavioral failure requires fixing and re-running the subject; repeating the judge until it agrees is not a repair.

If the runner stopped between completed motions because of a timeout or a handoff-reader defect, resume from the saved responses after fixing the defect:

```bash
python3 scripts/run-evals.py resume runs/evals/REPLACE_WITH_YOUR_RUN_FOLDER --engine claude --review
```

Resume requires unchanged skill/prompt, bundled asset and case hashes, counts only fully recorded stages, preserves the original run, and creates a new receipt folder. It does not manufacture missing answers or approvals. A partly recorded stage is rerun. A changed skill, asset or case requires a fresh run instead.

On failure, keep the original transcript, fix the skill or handoff, re-export prompts, and re-run. Change a case only to correct an actual case defect, with the reason documented. Private/local transcripts stay under ignored `runs/`; share selected synthetic receipts only after checking them.

Cases 13 and 14 cover the multi-solution/competitor bake-off and standalone entry without an OST. The runner's six-field `<handoff>` transport checks protect context in scripted chain tests; they are harness conventions, not mandatory skill inputs. Behavioral cases require an explicitly chosen model run; local validation alone does not prove their behavior.

Case 15 challenges cheap discovery theatre: a pleasant storyboard reaction cannot establish adoption under pressure. Its behavioral execution remains optional and separate from local checks.

## Updated predictive-maintenance demo coverage

Case 01 retains the older report-comparison route as a regression case. It is not a rehearsal of the current deck. Case 16 covers the current ten-motion predictive-dashboard/incident-router route in Context dump mode, matching the kickoff companion and the synthetic IIoT override. Case 17 challenges a sponsor who treats a stipulated simulator result as real prevented failures or customer confidence. These are new behavioral definitions, not passing model receipts.

The standalone, denominator, hostile-source, cheap-test and narrative-continuity cases remain useful across contexts. Different case narratives do not change the lab chain. Local regression checks additionally cover the 20 launch blocks, paired prompt/skill context, invocation names and demo-case route.

Case 16 also tests the intentional HiPPO-to-outcome arc: explore the requested dashboard rather than reflexively refuse or blindly implement it; allow the desired proposition to evolve from intervention by exception toward intervention by prediction. Delight, hard-to-copy value and customer/provider margins remain hypotheses. A changed outcome is not inherently a chain failure.

[Case 23: independent entry and transfer](cases/23-independent-entry-and-transfer.json) tests starting with partial notes, retaining a branching OST and earning a next test without inventing demand or investment approval. Behavioral status: NOT RUN.

## Research and citation checks

Cases `24-live-research`, `25-supplied-research-gaps` and `26-no-browsing` exercise Steps 1 and 2. Use both `--variant skill` and `--variant prompt`. Example: `python3 scripts/run-evals.py prepare 25-supplied-research-gaps --variant prompt` prints the facilitator packet for a fresh assistant session. Preparation and validation make no model calls and are not behavioral passes. Live cases need an assistant with browsing; the no-browsing case must honor its restriction. Check actual inspected citations and source independence, not just plausible wording.
