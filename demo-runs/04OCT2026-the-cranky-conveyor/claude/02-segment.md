# 02 Segment Selection Brief

Lab adaptation, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Segment / Context dump, with labeled best-guess assumptions
- **Built from:** 01 Market Intel handoff (this run); Census CBP 2023 counts (S1); vendor pricing (S3)
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** plant counts are ACTUAL DATA. Every filter, reach, win rate, capacity and price below is ESTIMATE / BEST GUESS. Willingness to pay is untested.

## Decision, unit and horizon

- **Decision:** which bounded segment do we deliberately learn about first?
- **Outcome:** fewer unplanned stops because managers intervene before failure.
- **Counted and paying unit:** the plant (Census establishment), priced per plant per year. A multi-plant firm may buy once; how often is UNKNOWN.
- **Geography / reference period:** United States, CBP 2023.
- **SOM horizon:** 24 months from first pilot.

## Reuse and gap audit

| Status | Content |
|---|---|
| Known | 22,643 plants at 100 to 499; 10,943 in six discrete subsectors (S1). CMMS list prices per user (S3). Incumbents sell prediction (S3). |
| Assumed | Share of discrete plants with enough mixed digital evidence and failure-sensitive equipment to feel the problem; reach; win rate; onboarding capacity; price. |
| Missing | Adoption of software or sensors by plant size; downtime cost; budget owner; willingness to pay. |
| Conflicting | 50 to 499 band gives 44,008 plants (CBP) versus 44,973 (QCEW, as reported). Not re-verified. |

No new browsing in this run. Gaps stay UNKNOWN or become labeled assumptions.

## Price hypothesis (pricing scenario, not willingness-to-pay evidence)

| Scenario | Per plant per year | Basis |
|---|---|---|
| Low | $6,000 | About a CMMS-priced add-on: 10 users (assumed) × Fiix $45 list × 12 months = $5,400 |
| Base | $12,000 | About twice a CMMS seat bundle, for a decision aid sitting on top of existing systems |
| High | $24,000 | Toward sensor-plus-AI bundles (quote-only, so no anchor) and below Maximo Essentials "from under $40k a year" (vendor-reported) |

## TAM: population

All US manufacturing plants with 100 to 499 employees: **22,643 plants** (ACTUAL DATA, S1). Same count in every scenario; the line itself is our assumption. Sensitivity: 44,008 at 50 to 499.

## SAM: trade and industry filters

| Step | Low | Base | High | Label |
|---|---|---|---|---|
| Discrete subsectors 332, 333, 336, 335, 326, 334 | 10,943 | 10,943 | 10,943 | INFERRED from S1 (one filter, observed intersection, not multiplied marginals) |
| × share with mixed digital evidence (CMMS plus PLC, meters or sensors) and failure-sensitive lines | 20% | 35% | 50% | ESTIMATE. No source measures this. |
| **SAM plants** | **2,189** | **3,830** | **5,472** | INFERRED from ESTIMATE |

## SOM over 24 months: competition, reach and capacity

SOM = min(SAM × reachable share × win rate against status quo and incumbents, onboarding capacity).

| Input | Low | Base | High | Why |
|---|---|---|---|---|
| Reachable share of SAM | 15% | 25% | 35% | Direct outreach plus a CMMS partner channel; ESTIMATE |
| Reachable plants | 328 | 958 | 1,915 | INFERRED |
| Win rate | 5% | 10% | 15% | Status quo is free and trusted; Augury, Tractian and CMMS AI add-ons compete; ESTIMATE |
| Plants won if unconstrained | 16 | 96 | 287 | INFERRED |
| Onboarding capacity, 24 months | 40 | 80 | 120 | A small team onboarding by hand; ESTIMATE |
| **SOM plants** | **16** | **80** (capacity-bound) | **120** (capacity-bound) | min of the two |

SOM ≤ SAM ≤ TAM holds in every scenario.

## Candidate segments compared

| Candidate | Need and stakes | Access and buying path | Obtainable scale | Read |
|---|---|---|---|---|
| **A. Mid-sized discrete plants with mixed digital evidence (Recommended)** | Enough signals to disagree and to predict from; downtime hurts throughput | Maintenance manager reachable; buyer may be plant manager or ops director (UNKNOWN) | Base 80 plants in 24 months | Best fit for prediction plus explanation |
| B. High-mix job shops and low-digital plants | Conflicts live in tacit knowledge; few signals to predict from | Low budget tolerance (R3 in addendum) | Smaller, slower | Wrong place for prediction first |
| C. Multi-site mid-market firms | Fleet view versus local experience | Enterprise sales complexity without enterprise deal size | Fewer logos, bigger deals | Revisit after A proves the job |

**Assumption that most changes the ranking:** the mixed-digital-evidence share (20 to 50%). It moves SAM by 2.5 times. Second: price, which nobody has tested.

**Evidence that would reverse it:** interviews showing mid-sized discrete plants have too few connected signals to predict from, or that the plant has no budget authority.

## Recommended boundary

- **Include:** US plants, 100 to 499 employees, six discrete subsectors, running a CMMS plus at least one live signal source (PLC, meters or condition sensors), in-house maintenance team.
- **Exclude for now:** process industries (food, chemicals, primary metals), paper-only plants, OEM service providers, multi-site enterprise deals.

## Claim ledger

| Statement | Label | Basis | Limitation |
|---|---|---|---|
| 22,643 plants at 100 to 499 | ACTUAL DATA | S1 | Size line assumed |
| 10,943 in six discrete subsectors | INFERRED | S1 | Subsector choice ours |
| 20 / 35 / 50% mixed digital evidence | ESTIMATE | none | Biggest swing factor |
| $6k / $12k / $24k per plant per year | ESTIMATE (pricing scenario) | CMMS list prices, S3 | Not willingness to pay |
| Reach, win rate, capacity | ESTIMATE | planning assumptions | No sales data |

## Decision record

- **Draft choice (stand-in):** Segment A. Approve Persona for this boundary.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.
- **Unresolved:** per-plant versus per-firm buying; whether the maintenance manager holds any budget.

## Handoff

```text
Target: Maintenance managers at US discrete-manufacturing plants, 100 to 499 employees, running a CMMS plus at least one live signal source.
What we believe: These plants have enough signals to predict from and enough signals to disagree; managers still react to exceptions. ESTIMATE.
Evidence: 22,643 plants in the band; 10,943 in discrete subsectors (Census CBP 2023). SAM 2,189 / 3,830 / 5,472 plants; SOM 16 / 80 / 120 plants in 24 months (ESTIMATE filters).
What is inferred: Base SOM is capacity-bound, not demand-bound.
Desired outcome: Fewer unplanned stops because managers intervene before failure.
Biggest unanswered question: What share of these plants have the signals and the pain, and who signs?
```

## Final readout

**TL;DR for the boss:** Recommended segment is US mid-sized discrete plants (100 to 499 employees) with a CMMS and at least one live signal source. Base case: about **80 plants and roughly $1.0M in annual recurring revenue at the 24-month mark** (range about $0.1M to $2.9M), in USD, at an assumed $12,000 per plant per year. Every price and share is an estimate. Onboarding capacity, not demand, caps the base case, and the share of plants with usable signals is what moves the number most. That earns a cheap discovery sprint, not a build.

| Tier | Guesstimated populations (low / base / high; plants) | Potential economics (low / base / high; USD per year) | Reasoning |
|---|---|---|---|
| TAM | 22,643 / 22,643 / 22,643 | $136M / $272M / $543M | Census CBP 2023, plants at 100 to 499 employees × pricing scenario $6k / $12k / $24k |
| SAM | 2,189 / 3,830 / 5,472 | $13M / $46M / $131M | 10,943 discrete plants × 20 / 35 / 50% mixed digital evidence (ESTIMATE) |
| SOM over 24 months | 16 / 80 / 120 | $0.10M / $0.96M / $2.88M at the 24-month endpoint | min(reach 15 / 25 / 35% × win 5 / 10 / 15%, onboarding cap 40 / 80 / 120) × price |

Annual revenue at the endpoint is not revenue recognized in the period, profit or customer savings. Costs not yet modeled.

**Next decision:** approve Persona for Segment A (Recommended). **Biggest risk:** the plants with signals may already be Augury, Tractian or CMMS-AI customers. **Evidence caveat:** every number past the plant count is an assumption. Human choice: not recorded.
