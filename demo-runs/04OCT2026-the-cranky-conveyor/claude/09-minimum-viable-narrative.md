# 09 Minimum Viable Narrative

Lab adaptation of the supplied MVN canvas, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Minimum Viable Narrative / Context dump
- **Built from:** 08 Storyboard (frame 5 loop); 07 Solution Hypothesis; 06 Positioning
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** fictional plant, machines and data. Depicted success is a hypothesis.

## Prototype hypothesis (carried in unchanged)

If we flag emerging equipment risks and explain why they matter, for maintenance managers at mid-sized discrete plants, then we will help them decide what to inspect or intervene on before failure.

**Learning question:** does a short, explained watchlist change what the manager checks, and can they repeat the why to production?

## Target audience

A maintenance manager at a mid-sized discrete manufacturing plant (100 to 499 employees) who runs a CMMS, gets some PLC alarms and sensor readings, and today reacts to whatever trips first.

## Setup

Monday morning. The manager has 140 open warnings across the CMMS, PLC alarms, a few sensors and technician notes. Last month a conveyor gearbox seized mid-shift on a warning nobody ranked. They need to pick this week's checks and defend them to production.

## Encounter

Next Check opens on a watchlist of five machines most likely to fail soon, ranked, each with a one-line reason and a rough time window. The other 135 warnings are collapsed below as "not in the top five." A small label says the data is synthetic.

## Action–Response Loop

| # | Human action / input | System response | Why the human acts next |
|---|---|---|---|
| 1 | Opens the top item, **Press Line 2 conveyor drive** | Shows the risk level, one-line why ("vibration rising 9 days; bearing at 14 months"), a rough failure window with its uncertainty ("likely 5 to 12 days, low confidence"), and three signals, each with its source and age. One is flagged: **reports disagree.** | The disagreement flag raises the obvious question: which report do I trust? |
| 2 | Taps **reports disagree** | Lays the two reports side by side: the vibration sensor (continuous, 2 hours old, trending up) and a technician's note ("a bit noisy, nothing urgent", 3 days old, by ear). Says what each can and cannot see, and names the **smallest check that would settle it**: a 10-minute handheld vibration reading at the drive-end bearing. | Knowing how to settle it, the manager wants to know what waiting costs. |
| 3 | Asks **"What if I wait?"** | Shows the likely failure path (drive-end bearing wear, then gearbox seizure), the consequence (Press Line 2 stops), what is known and what is not, and that the window is an estimate. No dollar figure unless the plant has entered one. | Waiting looks risky, so the manager wants to fit the check into a slot that does not stop the line. |
| 4 | Chooses **Book the check** (or **Dismiss with a reason**) | Lists the next planned stops; Thursday 06:00 to 06:30 fits. Shows what the check needs: one technician, a handheld analyzer, a lockout permit, 10 minutes. The manager picks Thursday and assigns a technician. | Production still has to agree to using that window. |
| 5 | Asks for **a reason to send production** | Drafts a two-line explanation using the sources and their age, plus what is uncertain. The manager edits a word and sends it to the production supervisor. A simulated reply comes back: "OK, Thursday 06:00." | Exit: check booked, reason sent, window approved. |

**Loop exit condition:** a check is booked in a planned window with production's approval, or the item is dismissed with a recorded reason.

## Resolution

Thursday, the technician logs the result: early bearing wear on the drive end. The bearing is swapped inside the planned stop. The manager records what the check found, the item drops off the watchlist, and the record of the call and its outcome is kept for next time. Depicted success is fictional. Whether real managers act this way is what the test is for.

## No/Lo-Code Prompt

The paste-ready version is in [`PROTOTYPE-PROMPT.md`](PROTOTYPE-PROMPT.md). It carries the hypothesis, audience, setup, encounter, all five transactions with their continuations, the exit condition, resolution, the fictional dataset and the boundaries.

## Narrative critique

- **Could this be tested more cheaply?** Yes, mostly. Paper cards of the five items, with and without the why, answer "does the why change the pick" (E2). The clickable prototype earns its cost only for the loop: does the manager follow from flag to conflict to consequence to booking to reason without getting lost, and do they repeat the why? Use it as a stimulus in the failure-review interviews, not as proof of demand.
- **Removed:** trend charts for every asset, fleet KPIs, mobile app, notifications, integrations, login, any accuracy percentage. None helps answer the learning question.
- **Must preserve:** the person decides every check; uncertainty stays visible; synthetic data stays labeled.

## Claim ledger

| Claim | Label | Basis |
|---|---|---|
| Plant, machines, readings, timings, reply | SYNTHETIC | invented for the narrative |
| Failure window "5 to 12 days" | SYNTHETIC | illustrative, not a model output |
| Manager trusts and repeats the why | ESTIMATE | the hypothesis under test |

## Decision record

- **Draft choice (stand-in):** approve this narrative for prototyping, as a reaction-test stimulus.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance manager, mid-sized discrete plant.
What we believe: Flag, see why and age, settle the conflict, weigh waiting, book the window, send the reason. That loop turns prediction into a planned check.
Evidence: None. Fictional narrative.
What is inferred: The prototype tests comprehension and trust in the loop, not demand or accuracy.
Desired outcome: Intervention by prediction instead of by exception.
Biggest unanswered question: Will a real manager follow the loop and repeat the why?
```

## Final readout

- **Prototype hypothesis:** flag emerging equipment risks and explain why, and managers decide what to check before failure.
- **Learning question:** does the explained list change the check, and can they repeat the why?
- **Audience:** maintenance manager, mid-sized discrete plant.

**Setup:** Monday, 140 open warnings, and a conveyor gearbox that seized last month on an unranked warning. **Encounter:** a watchlist of five, each with a one-line why and a rough window; the rest collapsed.

| # | Human action / input | System response | Why the human acts next |
|---|---|---|---|
| 1 | Opens Press Line 2 conveyor drive | Risk, why, rough window with uncertainty, three signals with source and age, "reports disagree" flag | Which report to trust? |
| 2 | Taps "reports disagree" | Sensor (2 h old, rising) vs. technician note (3 days, "a bit noisy"); smallest settling check: 10-minute handheld reading | What does waiting cost? |
| 3 | Asks "What if I wait?" | Bearing wear, then gearbox seizure, then line stop; window is an estimate | Fit the check into a planned stop |
| 4 | Books the check | Thursday 06:00 stop fits; needs one tech, analyzer, lockout permit | Production must agree |
| 5 | Asks for a reason to send | Two-line reason with sources and uncertainty; sent; "OK, Thursday 06:00" | Exit: booked and approved |

**Resolution:** the check finds early bearing wear; the bearing is swapped in the planned stop; the outcome is recorded. Fictional, a hypothesis.

**Status:** NOT BUILT, NOT RUN. **Biggest risk:** a polished prototype gets mistaken for evidence. **Next decision:** approve for Prototyping as a reaction-test stimulus (Recommended). Human choice: not recorded.
