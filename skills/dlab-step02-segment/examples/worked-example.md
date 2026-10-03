# Segment Selection Brief: fictional sizing walkthrough

Lab adaptation. Date: 2026-10-03. Status: DRAFT. Decider: not recorded.

**SYNTHETIC: every numerical input below is invented for arithmetic teaching. No Census, trade, academic or filing number has been collected for this example. It establishes no actual market size, willingness to pay or customer demand. These values are not defaults.**

## Decision, scope and unit

Choose a provisional segment for investigating clearer maintenance investigation decisions. Scenario scope: one fictional national manufacturing population, reference period “teaching year.” Count billable establishments/sites, not people, firms or customer logos. We assume a per-site offer only to illustrate annual value; multi-site procurement and whether one firm buys for several sites are UNKNOWN. SOM horizon: first 12 months. Currency: fictional USD pricing scenario.

## Reuse before research

The fictional Market Intel handoff already contains F1–F3. Reuse them rather than repeat the market sweep. Reach, win assumptions, delivery capacity and price are missing, so A1–A4 are explicitly introduced as planning assumptions.

| ID | Existing fixture or new assumption | Label and limitation |
|---|---|---|
| F1 | 20,000 potentially relevant manufacturing establishments | SYNTHETIC fixture; not a real population observation |
| F2 | 8,000 establishments in the joint mid-size/discrete-manufacturing intersection of F1 | SYNTHETIC trade/industry-style fixture; already includes both size and subsector filters |
| F3 | Fictional incumbents sell site-based maintenance tools; log review and technician discussion are substitutes; switching may be slow | SYNTHETIC competitive fixture; no market share or independently verified win rate |
| A1 | 25% / 35% / 45% service/need fit within the 8,000-site intersection | ESTIMATE / BEST GUESS inside a fictional scenario; not observed problem incidence |
| A2 | 150 / 300 / 500 distinct qualified sites reachable and 10% / 15% / 20% win rates within 12 months | ESTIMATE / BEST GUESS; competitive friction motivates cautious capture, but no measured funnel exists |
| A3 | Acquisition capacity 20 / 40 / 60 sites; onboarding capacity 18 / 36 / 50 sites within 12 months | ESTIMATE / BEST GUESS; no actual team delivery plan supplied |
| A4 | $2,000 / $3,000 / $4,000 per site per year | ESTIMATE / BEST GUESS pricing scenario; not sourced spend or willingness to pay |

No real numeric source URLs exist here. For a real run, F1 would need the relevant statistical table, F2 a matched industry/size intersection and service evidence, and F3 actual company/competitor records. Missing source access must be disclosed.

## TAM: population

TAM units = F1 = 20,000 potentially relevant sites. This is the broad addressable population assumed for the outcome, not all people or all manufacturing revenue. Actual need incidence is still UNKNOWN.

## SAM: industry/trade information

F2 already narrows F1 jointly by size and subsector. Do not multiply another “mid-size share” or “discrete share” on top of it. Then apply the explicitly assumed service/need-fit share A1:

- Low: 8,000 × 25% = 2,000 sites.
- Base: 8,000 × 35% = 2,800 sites.
- High: 8,000 × 45% = 3,600 sites.

These are planning scenarios. They do not establish that a quarter or more of real plants have this problem.

## SOM: competition, reach and capacity

F3 motivates questions about current substitutes, switching and procurement. It does not establish that the remainder of the market is free. A2 proposes conditional reachable cohorts and win rates; A3 caps what could be acquired and served.

- Low: min(2,000 SAM, 150 reachable × 10% = 15, 20 acquisition capacity, 18 onboarding capacity) = **15 sites**.
- Base: min(2,800 SAM, 300 × 15% = 45, 40, 36) = **36 sites**.
- High: min(3,600 SAM, 500 × 20% = 100, 60, 50) = **50 sites**.

All capacities and qualified cohorts use the same site unit and 12-month horizon. Reach is a subset of SAM, not a second market population. Procurement or ramp delay could reduce these estimates further.

## Scenario inputs and results

| Input | Low | Base | High | Basis |
|---|---|---|---|---|
| Relevant population | 20,000 | 20,000 | 20,000 | F1, fictional |
| Industry-qualified intersection | 8,000 | 8,000 | 8,000 | F2, fictional |
| Service/need fit within intersection | 25% | 35% | 45% | A1, assumption |
| Qualified reachable sites | 150 | 300 | 500 | A2, assumption |
| Win rate | 10% | 15% | 20% | A2, assumption |
| Acquisition capacity | 20 | 40 | 60 | A3, assumption |
| Onboarding capacity | 18 | 36 | 50 | A3, assumption |
| Annual price per site | $2,000 | $3,000 | $4,000 | A4, assumption |

| Tier | Low sites | Base sites | High sites | Evidence state |
|---|---|---|---|---|
| TAM | 20,000 | 20,000 | 20,000 | SYNTHETIC fixture |
| SAM | 2,000 | 2,800 | 3,600 | ESTIMATE / BEST GUESS from fictional inputs |
| SOM, first 12 months | 15 | 36 | 50 | ESTIMATE / BEST GUESS from fictional inputs |

Optional annualized price scenarios, not observed market revenue:

| Tier | Low annualized USD | Base annualized USD | High annualized USD |
|---|---|---|---|
| TAM | $40,000,000 | $60,000,000 | $80,000,000 |
| SAM | $4,000,000 | $8,400,000 | $14,400,000 |
| SOM endpoint annualized value | $30,000 | $108,000 | $200,000 |

The last row assumes those sites at the endpoint paying the assumed annual rate. It is not recognized revenue during the first year, since acquisition timing is absent. All prices, including any implied TAM/SAM value, remain speculative.

## Candidate segments and sensitivity

| Candidate | Why investigate | Sizing basis | Tradeoff |
|---|---|---|---|
| Mid-sized discrete manufacturers | A bounded teaching context for investigation choices | F2 and A1–A4; entirely fictional | Need incidence and real access still UNKNOWN |
| Large process plants | Potentially consequential operational decisions | Population/serviceability/capture UNKNOWN | Procurement and implementation complexity may dominate |
| Small job shops | Possibly simpler access and workarounds | Population/serviceability/capture UNKNOWN | Lower stakes or limited budget could change the ranking |

Do not rank these as actual commercial opportunities. In the base scenario, onboarding capacity is the tightest SOM bound: increasing only reach or win rate does not lift SOM above 36. Need/service-fit A1 materially changes SAM, and switching or procurement delays could cut reachable wins. Raising price raises the value scenario but says nothing about willingness to pay.

## Claim ledger and next evidence

| Claim | Evidence state | Basis | Limitation |
|---|---|---|---|
| Base SAM 2,800 sites and SOM 36 sites | ESTIMATE / BEST GUESS; SYNTHETIC | F1–F3 and A1–A3 | No real population, customer or competitive evidence |
| Base price $3,000/site/year | ESTIMATE / BEST GUESS | A4 | No buyer research or observed pricing |
| Mid-sized context is worth researching | ESTIMATE / BEST GUESS | Teaching focus | Not an evidence-ranked commercial recommendation |
| Real problem incidence and obtainable scale | UNKNOWN | No actual sources/participants | Need relevant tables, practitioners and an actual delivery plan |

Recommendation: use the mid-sized candidate for this teaching path while gathering actual population/intersection data and practitioner decision evidence. Selected option and decider: not recorded. The next gate is human selection, not automatic continuation.

## Small handoff

Target: maintenance managers at mid-sized discrete-manufacturing sites; provisional SYNTHETIC target.
What we believe: clearer comparison may support a next-investigation decision; ESTIMATE / BEST GUESS.
Evidence: no actual observations; F1–F3 are fictional fixtures and A1–A4 are labeled planning assumptions.
What is inferred: a bounded teaching segment, not validated demand or obtainable revenue.
Desired outcome: clearer next-investigation choices; baseline and target UNKNOWN.
Biggest unanswered question: does report uncertainty materially affect the decision, and can we reach and serve relevant practitioners/sites?

Carry with the handoff: counted unit is billable sites, firm-to-site buying conversion UNKNOWN; fictional national scope and teaching reference year; first-12-month SOM; TAM 20,000, SAM 2,000/2,800/3,600, SOM 15/36/50; source IDs F1–F3 and assumptions A1–A4. No segment approval is recorded, and the persona is not a real interviewed customer.
