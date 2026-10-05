# 05 Value Prop vs. Differentiation 2x2

Lab adaptation, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Value Prop vs. Differentiation bake-off / Context dump plus best guess
- **Built from:** 04 OST portfolio (S1, S2, S4); competitive scan in case file part 1 §9; persona; Segment price scenarios
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** placements are judgments (INFERRED / ESTIMATE). All dollar figures are ILLUSTRATIVE what-ifs with stated assumptions, not measured savings or willingness to pay.

## Audience, outcome and common comparator

- **Audience:** maintenance manager, mid-sized discrete plant with a CMMS and some live signals.
- **Desired progress:** act before failure in a planned window instead of reacting to whatever trips first.
- **Shared baseline (B0):** today's workaround: CMMS and alarm list, ask the senior tech, experience, wait and see.
- **Value axis:** low = no realized change in what gets checked, or adoption burden eats the benefit. High = more checks happen before failure, net of fee, review time and false alarms.
- **Difference axis (against B0 only):** low = same mechanism as today. High = a materially different way to decide what to check.

## Candidate inventory

| ID | Type | Description | OST link | Source |
|---|---|---|---|---|
| S1 | Solution | Predictive maintenance dashboard: all assets, trends, alerts, risk scores (the HiPPO's ask) | O1 | Stakeholder request |
| S2 | Solution | **Explained risk watchlist:** the few assets most likely to fail soon, each with why, the source and age of every signal, where reports disagree, and the smallest check that would settle it | O1 (with O3 folded in) | Proposed |
| S4 | Solution | Incident router: sends a flagged check to planner and production to get a window | O2 | Deck candidate |
| C1 | Competitor | CMMS with AI add-ons (MaintainX, Fiix, UpKeep) | | Vendor pages, Oct 2026 |
| C2 | Competitor | Sensor-plus-AI predictive platforms (Tractian, Augury) | | Vendor pages, Oct 2026 |
| C3 | Competitor | Enterprise predictive / APM (Siemens Senseye, IBM Maximo) | | Vendor pages, Oct 2026 |
| B0 | Baseline | Today's workaround | | Case file part 2 §2 |

## Customer payoff and budget case

| ID | User / beneficiary / budget owner | Friction removed or new action | Outcome → economic lever | Budget source | Trigger / switching burden / renewal reason | Gap |
|---|---|---|---|---|---|---|
| S1 | Manager / plant / plant manager | Everything in one place | Maybe fewer surprises; risk of more noise | Maintenance software line | Trigger: a bad outage. Burden: integrate all assets, learn a new screen. Renewal: only if it gets used | Does a fuller view change any decision? |
| S2 | Manager / production and plant / plant manager or ops director | Stop scanning everything. Act on three to five assets, with a reason they can repeat to production | Avoided unplanned downtime hours; fewer wasted dispatches | Maintenance software or reliability budget; possibly the downtime-reduction initiative | Trigger: an outage that "we had signals for." Burden: connect CMMS plus existing signals, about a week of a manager's attention. Renewal: catches that would have been outages | Accuracy, downtime cost, budget owner all UNKNOWN |
| S4 | Planner and production supervisor / plant / plant manager | Stop negotiating each window from scratch | Faster time to fix; more planned work | CMMS line | Burden: production has to play along | Does permission dominate? (E4) |
| C1 | Whole maintenance team | Records, PM schedules, some anomaly flags | Planned work share | Already funded | Incumbent | Does not claim to rank or explain cross-source risk |
| C2 | Manager and techs | New sensors, ranked and explained alerts on monitored assets | Avoided downtime on monitored assets | Capital plus subscription, quote-only | Burden: sensor rollout | Explains its own sensors, not the tech's note or the CMMS history |

## Customer and provider economics (ILLUSTRATIVE, per plant per year, USD)

Assumptions, all ESTIMATE: downtime $5k / $10k / $20k per hour (inside the $2k to $50k mid-market range in Dean's addendum, which is itself secondary-source ESTIMATE; no source measures this segment). Manager time to review the watchlist 2 hours a week at about $45 an hour loaded (BLS supervisor median $79,860 a year is about $38 an hour before load) = $4,680. One wasted check a week at one mechanic hour, about $31 (BLS median $64,520 a year) = about $1,600. Realization: share of flagged-and-checked catches that actually avoid a stop.

| Candidate / scenario | Gross value | Customer fee + adoption and operating cost | Customer net benefit | Provider revenue − delivery cost | Biggest sensitivity |
|---|---|---|---|---|---|
| S2 low | 2 avoided hours × $5k × 50% = $5,000 | $6,000 + $4,680 + $1,600 = $12,280 | **−$7,280** (customer loses) | $6,000 − $5,000 = $1,000 | Too few real catches |
| S2 base | 6 × $10k × 60% = $36,000 | $12,000 + $6,280 = $18,280 | **+$17,720** | $12,000 − $5,000 = $7,000 (58%) | Downtime cost per hour |
| S2 high | 12 × $20k × 70% = $168,000 | $24,000 + $6,280 = $30,280 | **+$137,720** | $24,000 − $8,000 = $16,000 | Human review load |
| S1 base | Same catches at best, more noise: assume 4 × $10k × 50% = $20,000 | $12,000 + review of a full dashboard, assume 4 h/wk = $9,360 + $1,600 | **about −$3,000** | Higher integration cost (all assets) | Does anyone look at it daily? |
| S4 base | Faster windows; value UNKNOWN until E4 | $6,000 + production time | UNKNOWN | Low delivery cost | Production cooperation |

Provider delivery cost per plant (ESTIMATE): hosting and inference about $1k, human review of ambiguous flags $3k base ($6k high), support $1k. One-time onboarding about $6k (40 hours at $150) for CMMS and signal mapping. This is delivery contribution, not profit; acquisition and fixed costs are not modeled.

**Break-even for the customer (S2 base):** realized avoided downtime has to beat about $18k a year. At $10k an hour that is under two realized hours. Low bar if the catches are real, a loss if they are not.

## The 2x2 (against B0, today's workaround)

| Difference vs. today | Low proposed customer value | High proposed customer value |
|---|---|---|
| **High** | **S1** dashboard: new screen, new mechanism, but more to look at and no better call. Different, not valuable. | **S2** explained watchlist (conditional on E1, E2). **C2** sensor-plus-AI (conditional on sensors being deployed and affordable). |
| **Low** | **B0** today (no difference by definition; value UNKNOWN). | **C1** CMMS with AI add-ons: useful records, similar decision mechanism. |

Unplaced: **S4** (value depends on E4; difference low to moderate, overlaps CMMS scheduling). **C3** (high on both for large plants; mid-sized fit and price UNKNOWN). UNKNOWN is not low.

## Evidence and bake-off

| ID | Value | Difference | Confidence | Cheapest test that moves it |
|---|---|---|---|---|
| S1 | Low: shows exceptions faster; does not rank or explain | High vs. B0, none vs. C2/C3 | Medium. Alert-overload framing is vendor-sourced | E2: give managers the full view vs. the short list |
| S2 | High if early signals preceded recent failures | High vs. B0; vs. C2 rests on cross-source explanation | Low. No customer evidence | E1 then E2 |
| S4 | Conditional | Low to moderate | Low | E4 |
| C1 | Moderate | Low | Medium (vendor pages) | n/a |
| C2 | High on monitored assets | High vs. B0 | Medium (vendor claims; Tractian "3 month payback" unverified) | n/a |

## Why ours, and what could compound

| Candidate | Closest rival | Reason to choose ours over that rival | Asset or loop | How a rival copies it | Proof needed |
|---|---|---|---|---|---|
| S2 | **Tractian** (sensors plus CMMS app, says 2,000 manufacturers) | 1. Starts from signals the plant already has: CMMS history, PLC alarms, meter readings, technician notes. No sensor rollout before value. 2. Explains disagreement *across* sources, including the human ones, where sensor vendors explain their own alerts. 3. Ends in a decision: the smallest check that settles it, and a sentence for production. | **Adjudication history:** every call the manager makes, and what the check found, labels which signals mattered at this plant. That outcome feedback could sharpen the ranking per plant over time. Belongs to the customer. | Tractian or MaintainX ingest notes and add an explanation layer. Likely within a year if the job proves real. | Do managers record what the check found? Does the ranking improve with it? Rights to use it? |
| S2 | Augury | Same, plus no per-machine sensor pricing | Same | Augury adds CMMS ingestion | Same |
| S1 | Everyone | None we can name. Prediction dashboards are the incumbents' home turf. | None | Already exists | n/a |

Hard to copy and margin-enhancing are **hypotheses**. Today's real difference is mechanism (cross-source, ends in a check). The compounding advantage only exists if close-out outcomes get captured, and that is unproven. Shared models and "more data" are not a moat.

## Provisional shortlist

1. **S2 explained risk watchlist (Recommended).** The only candidate that turns prediction into a decision the manager can act on and explain. Fold S4's "request the window" step in as its last move, so the coordination hedge is tested in the same loop.
2. **S4 standalone** stays on the shelf. Promote it if E4 says permission dominates.
3. **S1 dashboard:** do not build as asked. Different, not valuable. What the HiPPO wants (get ahead of failures) lives in S2.

Could overturn it: E1 showing failures came without early signals; customer net benefit negative at realistic downtime cost; human review cost eating the provider margin.

## Claim ledger

| Claim | Label | Basis | Limitation |
|---|---|---|---|
| Tractian, Augury sell sensor-plus-AI with ranked, explained alerts | ACTUAL DATA (vendor-reported) | Case file part 1 §9 | Vendor claims |
| No vendor frames cross-source disagreement as the job | INFERRED | absence in pages read | Not exhaustive |
| Downtime $5k / $10k / $20k per hour | ESTIMATE | addendum range, secondary | Not measured for segment |
| BLS medians for supervisor and mechanic | ACTUAL DATA | BLS OEWS May 2025 | Wage, not loaded rate |
| Customer net benefit and provider contribution | ESTIMATE (illustrative) | arithmetic above | No measured catches |
| Adjudication history compounds | ESTIMATE (hypothesis) | mechanism reasoning | Needs outcome capture |

## Decision record

- **Draft choice (stand-in):** shortlist S2 with S4's window request folded in. Take it to Positioning.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.
- **Unresolved:** whether the plant manager or ops director funds it; whether Tractian already covers it well enough for this segment.

## Handoff

```text
Target: Maintenance manager, mid-sized discrete plant; budget likely plant manager or ops director (UNKNOWN).
What we believe: An explained risk watchlist moves the plant from intervention by exception to intervention by prediction, and the HiPPO's full dashboard does not.
Evidence: Competitors sell prediction on their own sensors (vendor claims). No customer evidence.
What is inferred: Our difference is cross-source explanation that ends in the smallest settling check and a sentence for production; compounding needs captured outcomes.
Desired outcome: More checks before failure, in planned windows.
Biggest unanswered question: Are realized catches worth more than about $18k per plant per year?
```

## Final readout

The customer payoff is fewer unplanned stops: the maintenance manager acts on a short, explained list of what is likely to fail, instead of reacting to whatever trips first. **Recommend S2, the explained risk watchlist, with the window request folded in.** Don't build the HiPPO's dashboard (S1) as asked. It is different from today but not more valuable: more to look at, same guesswork. **Why buy ours over Tractian or Augury:** it works from the signals the plant already has, explains disagreement across sources including the technician's note, and ends with the smallest check that would settle it plus a sentence for production. **Payer:** plant manager or ops director, from the maintenance or reliability budget (UNKNOWN). **Illustrative net benefit:** about +$18k a plant a year in the base case, negative in the low case, so real catches decide everything. **Provider contribution:** about $7k on a $12k base price, after human review of ambiguous flags, which is the margin threat. **Renewal:** catches that would have been outages. **Largest downside:** a sensor vendor adds cross-source explanation within a year. **Next decision:** approve S2 for Positioning (Recommended). Human choice: not recorded.
