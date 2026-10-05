# Segment Selection Brief

Date: October 4, 2026. Skill: `dlab-step02-segment` 0.4.0, Best guess. Built from: [Market Intel](01-market-intel.md), R1 and A1–A4 in the [register](00-source-register.md). Status: DRAFT. Codex provisional rehearsal choice, not human product approval. Synthetic status: selection, fit, reach and price are hypotheses.

## Decision, unit and boundary

Provisionally choose **US fabricated-metal establishments with 100–499 employees, critical rotating bottleneck equipment, usable condition/history data and a manager able to request a planned intervention window** (A1). The job is acting before an avoidable interruption. Count establishments; assume one annual license per site, even if procurement is central. Geography US; population reference 2023; currency USD; SOM horizon 24 months from a hypothetical commercial launch, not tonight's demo.

Include existing sensors or repeatable readings, CMMS/manual service history and genuine bottleneck consequences. Exclude data-poor sites, full replacement of monitoring/CMMS, and sites where this tool cannot affect access, interpretation or timing. Inclusions are provisional screening criteria, not measured Census filters.

## Reuse and source-gap audit

| Input | Reused / missing | Consequence |
|---|---|---|
| Population | R1 raw ZIP rechecked; manufacturing 22,643; fabricated metal 2,846 | No new broad research needed. |
| Service/need fit | UNKNOWN; A2 combined 15% / 30% / 50% | Conditional SAM, not known adoption. |
| Competition | R4–R6 overlap; matched penetration UNKNOWN | Win rate includes incumbent substitution; no subtraction of logo counts. |
| Reach/capacity | No customer list or staffed onboarding plan supplied | A4 conditional operating scenarios. |
| Price | No matched observed site price | A3 explicit what-if, not willingness to pay. |

Source location: R1 national CBP rows `31----` and `332///`, `lfo=-`, columns `n100_249` and `n250_499`. R1 release June 26, 2025, data 2023; counts are sites, not accounts. Census industry rows are mutually exclusive here. A2 jointly filters need + data + intervention fit; do not multiply additional adoption shares.

## Population-led sizing and assumptions

TAM is a broad population ceiling of **22,643 mid-sized manufacturing sites**, assuming the job might be relevant across manufacturing. This is an opportunity ceiling, not 22,643 willing buyers. SAM narrows to fabricated metal and the serviceability intersection. No total manufacturing revenue enters the calculation.

| Input | Low | Base | High | Basis |
|---|---:|---:|---:|---|
| TAM site ceiling | 22,643 | 22,643 | 22,643 | R1 fixed observed reference count |
| Industry-filtered sites | 2,846 | 2,846 | 2,846 | R1 fabricated metal sum |
| Joint need/data/access fit | 15% | 30% | 50% | A2, deliberately broad unmeasured range |
| SAM sites, rounded | 427 | 854 | 1,423 | 2,846 × fit |
| Qualified distinct sites reached in 24 months | 40 | 100 | 180 | A4; assumes industrial-software channel access |
| Competitive win rate | 10% | 20% | 25% | A4, subject to installed-tool alternatives |
| Acquisition capacity | 6 | 24 | 40 | A4 sites/24 months |
| Onboarding/service capacity | 8 | 18 | 30 | A4 sites/24 months |
| SOM licensed sites | 4 | 18 | 30 | min(SAM, reach × win, acquisition cap, onboarding cap) |
| Annual fee per site | $3,000 | $4,800 | $7,200 | A3; USD recurring, untested |

Base reach×win yields 20, constrained to 18 by onboarding. High yields 45, constrained to 30. No capacity plan actually exists. Shares are joint planning scenarios, not confidence intervals or a growth forecast.

## Segment comparison

| Candidate | Reason to investigate | Tradeoff and reversal |
|---|---|---|
| Fabricated metal, 100–499, signal/history-ready | Concentrates critical conveyors/motors and shift/changeover decisions in a coherent test story; 2,846-site anchor | Equipment mix and warning frequency UNKNOWN. Reverse if most losses are unpredictable or window access dominates. |
| Machinery, same band | 2,063-site anchor; equipment dependency plausible | Job-shop variability may complicate comparable trends. No measured preference. |
| Plastics/rubber, same band | 2,014-site anchor; rotating equipment plausibly relevant | Sustained process conditions may support prediction but intervention shutdown costs could overwhelm payoff. |

Ranking is ESTIMATE / BEST GUESS. A simpler coordination process may win in any segment. Choose fabricated metal for a discriminating rehearsal, not because desk research established best product-to-market fit.

## Sensitivity and ledger

R1 counts: ACTUAL DATA at row level; summed bands INFERRED. All eligible-site counts after A2 and all dollars: ESTIMATE / BEST GUESS. Actual target-segment need frequency, budget owner, renewal and paying-account conversion: UNKNOWN. Dates and URLs in the register apply to each ID.

At base reach/caps, halving win rate to 10% cuts SOM to 10 sites and annual potential to $48,000. Doubling reach does not increase the 18-site base cap. Base price also leaves little room for heavy human service (tested in Step 05). A2 may overstate fit; an access screen and five recent incidents would change the sizing more usefully than another market-size report.

## Small handoff for Persona

Target: maintenance manager at A1 fabricated-metal sites; counted/billable unit one site in the US.
What we believe: credible developing-risk signals can be turned into planned interventions.
Evidence: R1 size/industry counts; no actual target-site interviews.
What is inferred: this context is a useful first wedge, not a validated segment.
Desired outcome: intervene by prediction before interruption.
Biggest unanswered question: do these sites experience an actionable, purchasable warning-to-intervention gap?

Carry: TAM 22,643; SAM 427/854/1,423; 24-month SOM 4/18/30; A3 price $3,000/$4,800/$7,200 annually. Persona is synthetic.

## Final readout

**ESTIMATE / BEST GUESS:** Start with signal-ready US fabricated-metal sites with 100–499 employees and an actionable rotating-equipment bottleneck. The base case is **18 licensed sites at the 24-month endpoint and $86,400 potential annual revenue**, with low/high cases of **$12,000–$216,000**. This earns a cheap discovery test; access, incumbent substitution, untested price and onboarding capacity govern the result.

| Tier | Guesstimated populations, low / base / high; site is counted and paying unit | Potential economics, low / base / high; USD per year | Reasoning |
|---|---|---|---|
| TAM ceiling | 22,643 / 22,643 / 22,643 | $67,929,000 / $108,686,400 / $163,029,600 | R1 mid-sized sites × A3 assumed fee; broad ceiling, not measured demand |
| SAM | 427 / 854 / 1,423 | $1,281,000 / $4,099,200 / $10,245,600 | R1 fabricated metal × A2 combined fit, rounded, × A3 fee |
| SOM over 24 months | 4 / 18 / 30 | $12,000 / $86,400 / $216,000 | A4 competitive reach constrained by acquisition/onboarding; × A3 fee |

Revenue potential at the endpoint is not revenue earned over two years, customer savings or profit. Costs are modeled separately in Step 05. **Recommended:** carry this provisional context into Persona. Dean authorized the rehearsal; human commercial selection remains not recorded.
