# 07 Solution Hypothesis

Lab adaptation of the supplied epic-level solution hypothesis canvas, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Solution Hypothesis / Context dump
- **Built from:** 06 Positioning (wording 1); 04 test cards E1, E4, E5; 03 Persona
- **Status:** DRAFT. Experiments NOT RUN.
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** SYNTHETIC. Thresholds and timeframe are a proposed protocol, not measured baselines.

## Context

- **Problem framing:** I am a maintenance manager at a mid-sized discrete plant, trying to pick what to check next before something breaks, but I am buried in early warnings that disagree, so I react to whatever trips first.
- **Positioning:** Next Check, a maintenance decision aid that tells managers which few machines to check before they fail, and why.

## If / for / then / because

- **If we** flag emerging equipment risks and explain why they matter (source, age, disagreement, smallest settling check)
- **for** maintenance managers at mid-sized discrete plants
- **then we will** help them decide what to inspect or intervene on before failure, in a planned window
- **because** *(mechanism hypothesis)* early signals usually precede failures but get lost in the noise, and a reason they can repeat to production gets them the window.

## Assumptions, by type

| Type | Assumption | Risk |
|---|---|---|
| Desirability | Early signals were present before recent failures, and managers would act on a short list | **Riskiest.** If failures come out of nowhere, or the manager knew and could not get a window, the whole bet moves to O2 |
| Differentiation | Cross-source explanation beats sensor vendors' own alerts | High |
| Usability | A manager can read and repeat the why in under a minute | Medium |
| Feasibility | A ranking can be built from CMMS history, PLC alarms and notes without new sensors | High, tested later |

## Tiny acts of discovery

| # | Act | Participants and context | Task | Expected | Disconfirming | Access / consent |
|---|---|---|---|---|---|---|
| 1 | **Review recent failures to identify causes** (E1 plus E4) | 5 to 8 maintenance managers or planners at Segment A plants, 45-minute call | Walk back their last 3 unplanned stops: what signals existed beforehand, who knew, what blocked acting, who approved the window | Early signals existed in at least 2 of 3 stops and were not acted on because nobody ranked them | Signals absent, or known and blocked by permission, parts or production | Recruiting not arranged; managers' own account, no plant data needed |
| 2 | **Simulate equipment failures using synthetic IIoT data** (E5) | Internal, then shown to the same managers | Seed known failure patterns (bearing wear, misalignment, overheating) plus noise and one conflicting technician note into synthetic data for 8 machines; does a ranking surface the seeded faults with a why a manager can repeat? | Seeded faults land in the top 3 with a readable reason | Explanations do not make sense to managers, or they would not trust them | No access needed. **Hypothesis-generating only. Not customer or plant validation.** |

## Measures (proposed)

| Measure | Type | Tied to | Proposed criterion | Baseline |
|---|---|---|---|---|
| Share of recent unplanned stops with an early signal nobody acted on, where information (not permission) was the blocker | Quantitative | Act 1 | At least half of the reviewed stops | UNKNOWN |
| Managers say the why makes the call easier to defend, and use the source or age in their own explanation | Qualitative | Acts 1 and 2 | At least 5 of 8 participants | UNKNOWN |

Deck shorthand for the same two measures: "reduce % of failures via interventions" and "increase manager confidence in identifying emerging issues." The deck's first one is the eventual outcome metric. It cannot be observed in two weeks, so the protocol uses the leading indicator above.

**Timeframe:** two weeks from the first interview.

## Final hypothesis

**If we** flag emerging equipment risks and explain why they matter **for** maintenance managers at mid-sized discrete plants, **then we will** help them decide what to inspect or intervene on before failure. **We will test our assumption by** reviewing recent failures with 5 to 8 managers to identify causes, and simulating equipment failures using synthetic IIoT data. **Within two weeks we expect to observe** at least half of reviewed stops preceded by an unacted signal where information was the blocker, and at least 5 of 8 managers saying the explanation makes the call easier to defend.

## Decision rule (written before any result)

- **Pursue** (on to Storyboard, MVN and a prototype reaction test): both criteria met.
- **Pivot to O2 / S4 incident router:** stops were preceded by signals, but permission, parts or production blocked acting.
- **Revise or stop:** predictions fail to change maintenance outcomes. In this test that means signals rarely preceded the stops, or managers would choose the same check with or without the why.
- **Punt:** too few participants recruited to read anything (under 5).

## Experiment status

NOT RUN. No observations.

## Claim ledger

| Claim | Label | Basis | Limitation |
|---|---|---|---|
| Early signals precede failures in these plants | ESTIMATE | mechanism hypothesis | The thing being tested |
| Synthetic failures can show whether a ranking is explainable | INFERRED | method reasoning | Never evidence of real plant behavior |
| Thresholds and timeframe | ESTIMATE (proposed protocol) | planning choice | Not statistical thresholds |

## Decision record

- **Draft choice (stand-in):** adopt this hypothesis and protocol; carry into Storyboard.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance managers at mid-sized discrete plants.
What we believe: If we flag emerging risks and explain why, they will check before failure, in a planned window.
Evidence: None. Experiments NOT RUN.
What is inferred: The reason they can repeat to production is what gets the window.
Desired outcome: Intervention by prediction instead of by exception.
Biggest unanswered question: Were the signals there before the last failures, and what blocked acting on them?
```

## Final readout

- **Problem:** buried in early warnings, the manager reacts to whatever trips first.
- **Positioning:** Next Check tells them which few machines to check before they fail, and why.

**Hypothesis:** If we flag emerging equipment risks and explain why they matter, for maintenance managers at mid-sized discrete plants, then we will help them decide what to inspect or intervene on before failure (mechanism: the signals were there, just buried).

| Tiny act of discovery | Assumption tested | Measure / criterion | Disconfirming observation |
|---|---|---|---|
| Review recent failures with 5 to 8 managers | Signals preceded stops, and information was the blocker | At least half of stops (quantitative) | Signals absent, or permission blocked acting |
| Simulate failures with synthetic IIoT data | A ranking can surface faults with a repeatable why | 5 of 8 managers say the why helps (qualitative) | Managers do not trust or repeat the explanation |

**Timeframe:** two weeks. **Rule:** pursue if both measures are met. Pivot to the incident router if permission blocked acting. Stop if predictions would not change what gets checked. **Riskiest assumption:** early signals were there and got ignored. **Status:** NOT RUN.

**Evidence caveat:** the simulation generates hypotheses. It cannot stand in for plant validation. **Next decision:** approve for Storyboard (Recommended). Human choice: not recorded.
