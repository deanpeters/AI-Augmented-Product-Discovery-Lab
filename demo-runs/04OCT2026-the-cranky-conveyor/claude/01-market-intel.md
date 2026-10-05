# 01 Market Intelligence Brief

Lab adaptation, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Market Intel / Context dump (source pack supplied, no new browsing)
- **Built from:** `notebook/case-study/01-industry-and-market.md` and `02-customer-problem-and-opportunity.md` (desk research, Oct 3 2026; raw files in `sources/pdm-research-raw/`), plus Dean's consolidated `01-market-intel.addendum.md`
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean per his "use your best judgement" instruction. **Not a recorded human approval.**
- **Synthetic status:** market facts are sourced; every statement about a customer, need or behavior is SYNTHETIC / hypothesis.

## Scope and decision

- **Starting request (HiPPO):** build an AI-enhanced maintenance dashboard for managers at mid-sized manufacturers. That is a solution, not a market.
- **Market decision:** is there a decision-shaped job here, around what a maintenance manager checks next, worth carrying into Segment?
- **Desired outcome:** fewer unplanned stops because managers act before failure. Baseline and target UNKNOWN.
- **Geography / unit:** United States; the plant (Census establishment). Mid-sized provisionally 100 to 499 employees.

## Landscape and alternatives

| Layer | Who | What they sell (vendor claim) | Gap for this job |
|---|---|---|---|
| CMMS / EAM | MaintainX, Fiix (Rockwell), UpKeep, Limble, eMaint (Fluke) | Work orders, PM, asset history, AI add-ons. Public pricing $0 to ~$85 per user per month | Records and routes work. Does not claim to resolve conflicting evidence |
| Predictive platforms and sensors | Augury, Siemens Senseye, Tractian, Samotics | Sensors plus AI, ranked and explained alerts, prediction | Already sell prediction. Pricing quote-only, enterprise skew, mid-sized fit unproven |
| Enterprise APM | IBM Maximo, SAP APM, GE Vernova | Asset health and recommended actions | Broadest overlap; mid-market affordability UNKNOWN |
| Status quo (the real competitor) | Technician knowledge, log review, huddles, spreadsheets, OEM calls | Free, trusted, tacit | Invisible, undocumented, expert-dependent |

**Read:** the market for *detecting and predicting* equipment trouble is crowded and funded. A dashboard that only predicts walks into Augury, Senseye and Tractian.

## Signals and shifts

1. CMMS is turning into a connected evidence platform that recommends actions. ACTUAL DATA (vendor-reported).
2. Sensor-plus-AI vendors are well funded (Augury $75M at over $1B, Feb 2025; Tractian $120M Series C, Dec 2024). ACTUAL DATA (press, Crunchbase).
3. The CMMS layer is consolidating into larger parents (Fiix into Rockwell; MaintainX toward Autodesk, 8-K May 28 2026, completion unverified). ACTUAL DATA.
4. Skilled-labor scarcity: about 3.8M manufacturing jobs needed 2024 to 2033, about 1.9M possibly unfilled (Deloitte and Manufacturing Institute, Apr 2024). ACTUAL DATA.
5. Vendors sell "more signal, less noise." No vendor page read frames the problem as conflicting reports needing adjudication. INFERRED from absence; not proof of a gap.

## Candidate segment dimensions (no segment selected here)

Evidence environment (paper, CMMS, CMMS plus PLC/SCADA, continuous monitoring); process type (discrete, batch, continuous, high-mix); consequence profile; plant size and maintenance-team size; in-house versus outsourced reliability capacity; single versus multi-site; installed vendor ecosystem.

## Sizing inputs handed to Segment

| Input | Value | Label | Source |
|---|---|---|---|
| US manufacturing plants, all sizes | 284,452 | ACTUAL DATA | S1 |
| Plants with 100 to 499 employees | 22,643 (16,896 + 5,747); 4,590,219 employees; 8.0% of plants, 37.2% of employees | ACTUAL DATA / INFERRED sum | S1 |
| Plants in six discrete subsectors (332, 333, 336, 335, 326, 334) at 100 to 499 | 10,943 (48.3% of the band) | INFERRED sum | S1 |
| Plants using maintenance software or sensors, by size | UNKNOWN | UNKNOWN | none exists |
| Public pricing | CMMS per user only (Fiix $45/$75; UpKeep $24/$55; MaintainX $20 to $65); predictive vendors quote-only | ACTUAL DATA (vendor) | S3 |
| Downtime cost for mid-sized US plants | UNKNOWN | UNKNOWN | none measured |

## Source register

| ID | Source | Date | Direct URL / location | Limitation |
|---|---|---|---|---|
| S1 | US Census Bureau, County Business Patterns, national file, NAICS 31 to 33 | data year 2023 (March 12 week) | https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip | Establishments, not firms; "mid-sized" line is our assumption |
| S2 | BLS OEWS May 2025 and Occupational Outlook Handbook 2025 to 2035 | 2025 to 2026 | via case file part 1 §5 | By industry, not plant size |
| S3 | Vendor pricing and product pages (MaintainX, Fiix, UpKeep, Limble, Augury, Tractian, Senseye) | accessed Oct 3 2026 | listed in `03-source-register-and-evidence-log.md` | Vendor claims; no independent outcomes |
| S4 | US DOE FEMP O&M Best Practices 3.0 (2010); NIST AMS 100-18 (2018) | 2010, 2018 | case file part 1 §6 | Old; savings range wide and untraced |
| S5 | Analyst market-size teasers (Precedence, Fortune BI, Mordor, MarketsandMarkets, Allied, Grand View, IoT Analytics) | 2023 to 2026 | case file part 1 §7 | No method disclosed; not used as a market size |
| S6 | Peer-reviewed interview studies (Golightly 2018; Hoffmann and Lasch 2025; IJPR 2022) | 2018 to 2025 | case file part 2 §4 | Small n, mostly European |

## Conflicts and gaps

- **Size band:** 100 to 499 (22,643, CBP 2023, read from raw file) versus 50 to 499 (44,008 by the same CBP file; 44,973 reported from BLS QCEW in Dean's addendum, not re-verified). Different sources and vintages. This run uses 100 to 499 and shows the wider band as a sensitivity.
- **Market size:** analyst figures disagree about 1.5 times for 2025 and 3.5 times for 2031. Not used.
- **Downtime cost:** circulating figures are vendor-sponsored, large-firm and not comparable. One famous number appears misattributed. Nothing for mid-sized US plants.
- **Information versus organization:** the case file leans INFERRED that planning, permission and trust are at least co-equal blockers to information quality. No study of this exact decision exists.
- **UNKNOWN, field questions:** how often it happens, what it costs, who pays, who signs.

## Research recommendation

Enough to carry the plant counts into Segment. Not enough to size value. The cheapest next evidence is conversations with maintenance managers and planners, not more desk research.

## Claim ledger

| Statement | Label | Basis | Date | Limitation |
|---|---|---|---|---|
| 22,643 US plants have 100 to 499 employees | ACTUAL DATA | S1 | 2023 | Provisional size definition |
| 10,943 of them are in six discrete subsectors | INFERRED | S1 sum | 2023 | Subsector choice is ours |
| Incumbents already sell prediction and ranked, explained alerts | ACTUAL DATA (vendor-reported) | S3 | Oct 2026 | No independent outcomes |
| No vendor page read frames conflicting reports as the problem | INFERRED | absence in S3 pages | Oct 2026 | Not exhaustive |
| Adoption of maintenance software or sensors by plant size | UNKNOWN | none | | |
| Cost of an hour of downtime for these plants | UNKNOWN | none | | |

## Decision record

- **Draft choice (stand-in):** approve Segment as the next bounded motion, for segment comparison only.
- **Reason:** population inputs exist; the remaining gaps are field questions the later motions are built to test.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.
- **Unresolved:** whether "which check next" is a distinct unmet job or ordinary reliability work in new words.

## Handoff

```text
Target: Maintenance managers at mid-sized (100 to 499 employee) US discrete-manufacturing plants. SYNTHETIC, provisional.
What we believe: Managers face a flood of early-warning signals and reports that do not agree, and decide what to check next without a visible, defensible basis. ESTIMATE / BEST GUESS.
Evidence: 22,643 plants in the band, 10,943 in six discrete subsectors (Census CBP 2023, ACTUAL DATA). Incumbents sell prediction and explained alerts (vendor claims). No vendor frames conflicting reports as the problem (INFERRED).
What is inferred: Prediction alone is crowded. Whitespace, if any, is explaining the call: source, timing and uncertainty behind each flag.
Desired outcome: Fewer unplanned stops because managers intervene before failure. Baseline UNKNOWN.
Biggest unanswered question: Is information really the obstacle, or do permission, scheduling and trust dominate once a manager knows something is wrong?
```

## Final readout

**Decision and scope:** is there a decision-shaped job behind the dashboard request; US, plant-level, 100 to 499 employees. Outcome: fewer unplanned stops, baseline UNKNOWN.

**Findings:**
1. Detection and prediction are crowded and funded (Augury, Senseye, Tractian, CMMS add-ons). ACTUAL DATA (vendor-reported), S3.
2. The plant count is real: 22,643 in the band, 10,943 in discrete subsectors. ACTUAL DATA / INFERRED, S1.
3. Adoption, downtime cost and willingness to pay for this segment are UNKNOWN. No source measures them.

**Alternatives and candidate dimensions:** CMMS, predictive platforms, enterprise APM, the status quo. Dimensions: evidence environment, process type, plant size, in-house reliability capacity.

**Biggest uncertainty and next task:** information versus organization as the obstacle; interview managers about their last disagreement.

**Evidence caveat:** the market numbers that circulate are not trustworthy enough to size an investment; only the plant counts are solid.

**Next decision:** approve Segment for comparison only. Recommended; recorded by stand-in, not by Dean.
