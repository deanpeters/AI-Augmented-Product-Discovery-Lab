# 06 Positioning Statement

Lab adaptation of the supplied positioning canvas clauses, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Positioning / Context dump
- **Built from:** 05 bake-off (S2 shortlisted, S4 window request folded in); 03 Persona
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** a proposition to test. Reason to believe is UNKNOWN.

## Target and need

- **User:** maintenance manager at a mid-sized discrete plant with a CMMS and some live signals.
- **Beneficiaries:** production supervisor (fewer surprise stops), plant.
- **Likely payer:** plant manager or ops director, maintenance or reliability budget. UNKNOWN.
- **Need:** get ahead of failures instead of reacting to whatever trips first.

## Value proposition, before wordsmithing

For a manager buried in early warnings, we remove the daily scan-and-guess and enable acting on the few assets most likely to fail, improving avoided unplanned downtime through a ranked short list that shows why, where each signal came from and how old it is, versus log review, asking the senior tech, and sensor vendors' alerts on their own hardware.

## Statement

| Clause | Text |
|---|---|
| **For** | maintenance managers at mid-sized discrete plants |
| **Who** | want to get ahead of equipment failures instead of reacting to whatever trips first |
| **The** | Next Check watchlist (working name) |
| **Is a** | maintenance decision aid |
| **That** | tells them which few machines to check before they fail, and why, so the check lands in a planned window instead of an outage |
| **Unlike** | combing logs and asking the senior tech, or sensor alerts that only see their own hardware |
| **Our product gives** | a ranked short list built from the signals they already have, showing the source and age of each, where reports disagree, and the smallest check that would settle it |

## Alternative and proposed difference

- **Primary alternative:** today's workaround (the persona's real comparison). Closest rival offering: Tractian.
- **Proposed difference:** cross-source explanation that ends in a decision. A mechanism, not a claim of uniqueness.

## Budget case

- **Payer and displaced activity:** plant or ops leader; displaces time spent scanning and some wasted dispatches; competes with the CMMS add-on budget.
- **Net customer value:** illustrative base about +$18k a plant a year after a $12k fee, review time and false checks; negative in the low case (05).
- **Provider economics:** about $7k delivery contribution on $12k at base; human review of ambiguous flags is the margin risk.
- **Renewal hypothesis:** catches that would have been outages, visible in the close-out record.
- **Proof gaps:** catch rate, downtime cost per hour, payer, willingness to pay.

## Reason to believe

**UNKNOWN.** Nothing yet shows the ranking catches real failures or that the explanation changes the call. No "reduces downtime by X%" claim until tested.

## Claim check and revision

| Clause | Check | Revision made |
|---|---|---|
| That | Earlier draft said "reduces downtime." Unsupported. | Now says "so the check lands in a planned window," a mechanism, not a measured result |
| Unlike | Earlier draft said "unlike predictive platforms." Too broad; they already predict. | Narrowed to "sensor alerts that only see their own hardware" |
| Our product gives | "AI-powered" removed. AI is the ingredient, not the benefit. | |

## Alternative wordings

1. **Recommended:** the statement above.
2. Sharper on the HiPPO story: That "gets them out of intervention by exception and into intervention by prediction." Better on stage, vaguer for a customer.
3. Narrower: Who "get blindsided by breakdowns the signals saw coming." Stronger pain, but assumes E1 comes back yes.

## Claim ledger

| Claim | Label | Basis | Limitation |
|---|---|---|---|
| Sensor vendors explain their own alerts | ACTUAL DATA (vendor-reported) | Augury, Tractian, Senseye pages | Vendor claims |
| Cross-source explanation is uncommon | INFERRED | absence in pages read | Not exhaustive |
| Checks land in planned windows | ESTIMATE | mechanism hypothesis | Untested; production may say no |
| Net benefit and contribution | ESTIMATE (illustrative) | 05 arithmetic | No measured catches |

## Decision record

- **Draft choice (stand-in):** wording 1.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance managers at mid-sized discrete plants.
What we believe: A ranked, explained watchlist built from the signals they already have gets checks into planned windows before failure.
Evidence: None from customers. Competitors explain their own sensors only (vendor claims).
What is inferred: The difference is cross-source explanation ending in the smallest settling check.
Desired outcome: Intervention by prediction instead of by exception.
Biggest unanswered question: Does the list catch real failures early enough, and does the why change the call?
```

## Final readout

- **Audience:** maintenance managers at mid-sized discrete plants.
- **Need:** get ahead of failures instead of reacting to whatever trips first.
- **Primary alternative:** combing logs and asking the senior tech.

**For** maintenance managers at mid-sized discrete plants **who** want to get ahead of equipment failures instead of reacting to whatever trips first, **the** Next Check watchlist **is a** maintenance decision aid **that** tells them which few machines to check before they fail, and why, so the check lands in a planned window instead of an outage. **Unlike** combing logs and asking the senior tech, or sensor alerts that only see their own hardware, **our product gives** a ranked short list built from the signals they already have, showing the source and age of each, where reports disagree, and the smallest check that would settle it.

**Commercial case:** the payoff is avoided unplanned downtime, paid by the plant or ops leader (UNKNOWN). We're the better pick only if the list catches real failures from existing signals without a sensor rollout. Illustrative base net benefit is about +$18k a plant a year, but it goes negative if catches are rare. Delivery contribution is about $7k at a $12k price, and human review threatens it. Customers renew on catches.

**Reason to believe:** UNKNOWN. The weakest clause is "That": no evidence yet that checks reach planned windows. **Next decision:** approve wording 1 for Solution Hypothesis (Recommended). Human choice: not recorded.
