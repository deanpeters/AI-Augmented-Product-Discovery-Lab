# Minimum Viable Narrative

Date: October 4, 2026. Skill: `dlab-step09-minimum-viable-narrative` 0.3.1, Best guess. Built from: [Storyboard](08-storyboard.md), [Hypothesis](07-solution-hypothesis.md), F1, L4 MVN fields. Status: DRAFT. Narrative SYNTHETIC; customer experiments NOT RUN; prototype NOT BUILT by this run. Codex provisional narrative decision; human product/narrative approval not recorded.

## Prototype hypothesis and learning question

**Surface the highest-risk equipment so managers can intervene before failure.** This supplied hypothesis is retained unchanged.

Question: can the manager turn an inspectable warning into a justified, feasible early action, including when evidence fails to confirm the suspected fault or the desired window is unavailable? Opportunity is intervention by prediction, not intervention by exception or interruption.

## Target audience

Actor: synthetic Jordan, maintenance manager at an invented 180-person US fabricated-metal plant. Event audience: Product Managers, founders and product teams watching the discovery chain. Future testing audience: real A1 maintenance managers and production/budget owners. Watching a demo is not validation by those users.

## Setup

A flood of warnings arrives before a heavy run. A bottleneck conveyor's load-matched vibration trend worsens while temperature stays normal and an old inspection note reassures. A pump has a louder but questionable warning. Jordan needs to act before an avoidable interruption, without inventing certainty or forcing an unnecessary shutdown.

## Encounter

Before the Bang highlights the conveyor investigation and explains the conditional priority. It also shows the pump's signal-validity gap and the compressor's stale high-consequence evidence. Source age and uncertainty are part of the case, not hidden behind a score. The fictional 14:00 changeover is an available production-context input, not a predicted deadline before failure.

## Action–Response Loop

| No. | Human action / input | System response / information | Why the human acts next |
|---|---|---|---|
| 1 | Compare the three cases and choose what to investigate first. | Show FC-17 Conveyor as the first proposed investigation: persistent comparable vibration trend plus bottleneck consequence, despite normal temperature. P-04 Pump has a loud warning but uncertain sensor validity; C-02 Compressor has stale evidence requiring fresh verification. Explain rank and evidence gaps, not a precise failure probability. | Jordan must inspect the conveyor evidence rather than equate the loudest alert with highest risk. |
| 2 | Open FC-17 evidence and challenge the normal temperature and reassuring inspection note. | Return timestamped synthetic readings, comparable-load context, the older note and contradictory normal temperature. Distinguish possible bearing deterioration from measurement/load issues. Offer a specific verification question and expose that remaining useful life is UNKNOWN. | Jordan needs a fresh condition check before committing to intervention. |
| 3 | Request verification and enter the fictional technician finding: deterioration confirmed, not a load-only or sensor issue. Allow an alternate unconfirmed finding. | Rebuild the case from the entered finding. Confirmed path: show stronger support for planned bearing intervention and still-unknown failure timing. Unconfirmed path: reduce confidence, propose measurement review/fresh evidence and allow deferral with owner/revisit trigger. Preserve the original evidence and correction. | Jordan chooses whether an intervention is justified, then needs to find a workable action window. On the unconfirmed path, Jordan exits to a verification follow-up rather than fake repair. |
| 4 | For the confirmed path, enter the available production window and technician/part constraints; challenge an unavailable-window variant. | Relate the proposed action to the entered access context: fictional 14:00 changeover, qualified technician available and correct spare awaiting human confirmation. If blocked, show the unresolved constraint and alternatives for authorised review; never assume permission or say it is safe to run until an invented deadline. | Jordan must agree the owner/window with production, or escalate/replan; prediction by itself is insufficient. |
| 5 | Choose and record the justified early-action plan, or document deferral/escalation and its reason; share the decision card with the next shift. | Return a copyable case summary: evidence, contradictions, new finding, chosen action, human approval status, owner, window, outstanding checks and revisit condition. Mark the intervention PLANNED until a person records completion. Offer an explicitly separate fictional story epilogue, not an observed operational result. | The loop exits with a traceable human decision and a clear next action. Another shift can reconstruct it without restarting the argument. |

**Exit:** recorded human action plan with owner, timing, remaining checks and revisit condition; or explicit verification follow-up, deferral or escalation. The system never counts acceptance as a completed intervention. Five transactions are enough; there is no added setup/settings flow.

**Behavior to observe:** the person inspects and challenges the evidence, requests appropriate verification, revises the decision when findings change, accounts for access/authority and produces a defensible handoff. Ordering/display alone does not pass.

## Resolution

Jordan has a defensible next action before a breakdown forces the schedule, or an honest escalation where action cannot be arranged. Intervention remains **PLANNED** until a human records actual completion.

Separate **FICTIONAL STORY OUTCOME:** the team receives approved access, completes the bearing intervention and avoids an unplanned conveyor stop in the story. Jordan shares the case and revisit conditions with the next shift. This preserves the storyboard's shared-success ending while keeping counterfactual avoided failure unobserved.

## No/Lo-Code Prompt and boundaries

The complete self-contained prompt follows. It is also saved as [PROTOTYPE-PROMPT.md](PROTOTYPE-PROMPT.md) for upload/paste. Optional synthetic records are in [SCENARIO-DATA.json](SCENARIO-DATA.json). The builder needs this prompt and Dean's separate style guide, not the entire upstream research pile.

# Prototype prompt: Before the Bang

Create the smallest interactive demonstration of this story. Apply the separately attached Productside style guide if provided. Keep the experience descriptive: choose visual treatment yourself while preserving the human decisions and evidence boundaries below. Do not claim the current repository's logos/canvas references constitute a full style guide.

## Prototype hypothesis and target audience

**Surface the highest-risk equipment so managers can intervene before failure.**

Actor: Jordan, fictional maintenance manager at a 180-person US fabricated-metal plant with existing equipment signals and maintenance history. Testing audience: maintenance managers in similar real situations; teaching audience: Product Managers, founders and product teams. Desired outcome is intervention by prediction before a breakdown dictates the schedule, not more alarms or a prettier dashboard.

Working concept: Before the Bang. It connects an inspectable cross-source risk case (S1) with plant action-window context (S4). No functioning predictive model is supplied. All records and responses below are synthetic. Keep a visible plain-language “Synthetic discovery demo” label. Data and outcomes do not prove customer demand, comparative advantage or downtime savings.

## Setup

Jordan faces a flood of warning signals before a heavy production run. The bottleneck conveyor has a worsening vibration trend, normal temperature and an older reassuring inspection note. Another pump has a dramatic but questionable alert. The next changeover offers a limited opportunity for verification and intervention while equipment is still running. Jordan wants to protect production without an unnecessary shutdown.

## Encounter and fictional records

Start with three equipment cases and understandable proposed priorities. FC-17 Conveyor is highlighted because persistent comparable deterioration plus bottleneck consequence may warrant early investigation. Ranking is conditional and inspectable, not a failure prediction claimed as fact.

- FC-17 Conveyor: invented vibration values 2.8, 3.9, 5.2 and 6.1 mm/s across four shifts under fictional comparable load; temperature normal; previous-shift note says no issue. Values are demonstration props, not calibrated limits. Suspected bearing deterioration and measurement/load issues remain distinct possibilities. Remaining useful life and failure time UNKNOWN.
- P-04 Rinse pump: a high-temperature alert with questionable sensor attachment. A standby pump is said to exist in the fictional record but its availability is unverified. Do not claim a false alarm has been established.
- C-02 Air compressor: old severe alarm, stale evidence, potentially consequential shared supply. Fresh verification is needed; do not convert missing data into low risk or permission to operate.

## Action–Response Loop

Preserve ALL five transactions below. Each response must actually enable the next decision. Use deterministic demonstration states so the loop can be rehearsed and reset reliably; labels and ordinary text inputs/choices may replace live services.

| No. | Human action / input | System response / information | Why the human acts next |
|---|---|---|---|
| 1 | Compare the three cases and choose what to investigate first. | Show FC-17 Conveyor as the first proposed investigation: persistent comparable vibration trend plus bottleneck consequence, despite normal temperature. P-04 Pump has a loud warning but uncertain sensor validity; C-02 Compressor has stale evidence requiring fresh verification. Explain rank and evidence gaps, not a precise failure probability. | Jordan must inspect the conveyor evidence rather than equate the loudest alert with highest risk. |
| 2 | Open FC-17 evidence and challenge the normal temperature and reassuring inspection note. | Return timestamped synthetic readings, comparable-load context, the older note and contradictory normal temperature. Distinguish possible bearing deterioration from measurement/load issues. Offer a specific verification question and expose that remaining useful life is UNKNOWN. | Jordan needs a fresh condition check before committing to intervention. |
| 3 | Request verification and enter the fictional technician finding: deterioration confirmed, not a load-only or sensor issue. Allow an alternate unconfirmed finding. | Rebuild the case from the entered finding. Confirmed path: show stronger support for planned bearing intervention and still-unknown failure timing. Unconfirmed path: reduce confidence, propose measurement review/fresh evidence and allow deferral with owner/revisit trigger. Preserve the original evidence and correction. | Jordan chooses whether an intervention is justified, then needs to find a workable action window. On the unconfirmed path, Jordan exits to a verification follow-up rather than fake repair. |
| 4 | For the confirmed path, enter the available production window and technician/part constraints; challenge an unavailable-window variant. | Relate the proposed action to the entered access context: fictional 14:00 changeover, qualified technician available and correct spare awaiting human confirmation. If blocked, show the unresolved constraint and alternatives for authorised review; never assume permission or say it is safe to run until an invented deadline. | Jordan must agree the owner/window with production, or escalate/replan; prediction by itself is insufficient. |
| 5 | Choose and record the justified early-action plan, or document deferral/escalation and its reason; share the decision card with the next shift. | Return a copyable case summary: evidence, contradictions, new finding, chosen action, human approval status, owner, window, outstanding checks and revisit condition. Mark the intervention PLANNED until a person records completion. Offer an explicitly separate fictional story epilogue, not an observed operational result. | The loop exits with a traceable human decision and a clear next action. Another shift can reconstruct it without restarting the argument. |

Exit condition: a recorded human plan with owner, timing, unresolved checks and revisit condition, OR an explicit verification follow-up/deferral/escalation. “Accepted alert” is not a completed intervention. Keep the unconfirmed-finding path and unavailable-window path meaningful; do not force success.

## Resolution

Immediate observable resolution is the decision card and handoff, with intervention status PLANNED or verification/escalation required. If the presenter opens the clearly separate fictional epilogue: after approved access and completion checks, the team replaces the confirmed worn bearing during the planned window; in the story an unplanned stop is averted. Jordan gives the next shift the rationale and follow-up conditions so they can make a similar decision. Label the epilogue “Fictional story outcome.” Never show it as measured savings, a completed real work order or proof of predictive accuracy.

## Task, test and decision rule

Task for the evaluator: “What would you investigate or intervene on next, why, and what would have to be true for it to happen before the next access window closes?” Observe whether they inspect contradictions, choose a verification before committing, revise on an unconfirmed finding, account for a blocked window and preserve uncertainty in the handoff.

Proposed test, NOT RUN: compare with a paper evidence/huddle card using five managers and counterbalanced comparable cases. Continue to a bounded field test only if at least four of five make a defensible evidence/action decision and at least three improve a rubric item over control without losing uncertainty recognition. Also require two permissioned real incident/budget replays to establish plausible pre-event lead time, action and incremental payoff over installed/vendor alternatives. A small task sample is not statistical validation; historical replay is not causal downtime evidence. If the paper process wins, revise toward process. If early warning cannot change action or a supplier already solves this at lower burden, punt the bet.

## Boundaries and acceptance check

Keep the experience focused on the five exchanges. No real sensor feed, equipment control, live work-order dispatch or purchasing is needed. Do not invent precise failure countdowns, calibrated confidence percentages, site-specific safe-to-run guidance or automatic permission. Preserve explicit human judgment and applicable plant review. Do not add authentication, billing, fleet management or unrelated features. Copying the decision card is a handoff, not an external message.

Provide a restartable demonstration with: the three initial cases; inspected evidence and source age; confirmed/unconfirmed verification; available/unavailable action-window context; copyable decision card; distinct fictional epilogue. The ordinary path must go from ranked case to evidence to verification to window to decision. The two counter-paths must change the outcome rather than cosmetically dismiss a warning. Keep “failure time UNKNOWN” and “PLANNED” status visible when relevant. An attractive screen is not the success criterion.

## Narrative critique and claim ledger

| Claim / element | Evidence label / basis / date | Limit |
|---|---|---|
| Prediction-to-intervention direction and prototype hypothesis | Supplied intent, L1 / Dean, October 4 | Not evidence that prediction works |
| Jordan, readings, risks, 14:00 window, technician findings, repair and avoided stop | SYNTHETIC F1, October 4 | No real records or customer result; no engineering calibration |
| Evidence plus action context may improve decision | ESTIMATE / BEST GUESS S1/S4, informed by R2/R3 | Actual effect and comparative value UNKNOWN |
| Candidate economics and purchase logic | Illustrative A3/A5/A6 | Keep commercial ROI out of the scenario success screen |
| Usability, demand, prevented downtime, moat and model performance | UNKNOWN | No test run or deployment in this rehearsal |

The loop is coherent because each response creates the next missing decision: priority → evidence → verification → workable window → recorded plan. Strongest weakness is a conveniently confirming fictional inspection. The unconfirmed/blocked-window branches prevent forced success but do not solve the evidence gap. A paper reveal sequence is cheaper for early customer testing. Interaction is justified here by tonight's requested prototype comparison and show preparation, not by a claim that fidelity validates the product.

## Decision record

Recommended: use this draft for separate prototype renderings and compare whether each preserves the same human decisions. Product/narrative human approval: not recorded. Execution permission: Dean explicitly requested the autonomous chain and intends to build elsewhere tonight. Codex stops at MVN; Step 10 has not been run. Any real plant intervention or field test requires its own applicable permissions and evidence.

## Final readout

**Hypothesis:** surface the highest-risk equipment so managers can intervene before failure. **Audience:** synthetic Jordan; eventual task users are real A1 maintenance managers. **Setup:** conflicting warnings before a heavy run. **Encounter:** a conditional developing-risk priority with visible evidence gaps.

| No. | Human action / input | System response / information | Why the human acts next |
|---|---|---|---|
| 1 | Compare the three cases and choose what to investigate first. | Show FC-17 Conveyor as the first proposed investigation: persistent comparable vibration trend plus bottleneck consequence, despite normal temperature. P-04 Pump has a loud warning but uncertain sensor validity; C-02 Compressor has stale evidence requiring fresh verification. Explain rank and evidence gaps, not a precise failure probability. | Jordan must inspect the conveyor evidence rather than equate the loudest alert with highest risk. |
| 2 | Open FC-17 evidence and challenge the normal temperature and reassuring inspection note. | Return timestamped synthetic readings, comparable-load context, the older note and contradictory normal temperature. Distinguish possible bearing deterioration from measurement/load issues. Offer a specific verification question and expose that remaining useful life is UNKNOWN. | Jordan needs a fresh condition check before committing to intervention. |
| 3 | Request verification and enter the fictional technician finding: deterioration confirmed, not a load-only or sensor issue. Allow an alternate unconfirmed finding. | Rebuild the case from the entered finding. Confirmed path: show stronger support for planned bearing intervention and still-unknown failure timing. Unconfirmed path: reduce confidence, propose measurement review/fresh evidence and allow deferral with owner/revisit trigger. Preserve the original evidence and correction. | Jordan chooses whether an intervention is justified, then needs to find a workable action window. On the unconfirmed path, Jordan exits to a verification follow-up rather than fake repair. |
| 4 | For the confirmed path, enter the available production window and technician/part constraints; challenge an unavailable-window variant. | Relate the proposed action to the entered access context: fictional 14:00 changeover, qualified technician available and correct spare awaiting human confirmation. If blocked, show the unresolved constraint and alternatives for authorised review; never assume permission or say it is safe to run until an invented deadline. | Jordan must agree the owner/window with production, or escalate/replan; prediction by itself is insufficient. |
| 5 | Choose and record the justified early-action plan, or document deferral/escalation and its reason; share the decision card with the next shift. | Return a copyable case summary: evidence, contradictions, new finding, chosen action, human approval status, owner, window, outstanding checks and revisit condition. Mark the intervention PLANNED until a person records completion. Offer an explicitly separate fictional story epilogue, not an observed operational result. | The loop exits with a traceable human decision and a clear next action. Another shift can reconstruct it without restarting the argument. |

**Exit:** record a justified plan or explicit verification/escalation, with owner/window/uncertainty. **Resolution:** a traceable decision and shared handoff; the separate averted-failure epilogue is fictional. Experiments **NOT RUN**, prototype **NOT BUILT**. Biggest risk: useful warning lead time may not change a feasible action or beat a cheaper process. **Recommended:** build this bounded story in the chosen tools with the same counter-paths, then run Step 07's task comparison; human product approval not recorded.
