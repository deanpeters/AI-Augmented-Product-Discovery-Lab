# Case file, part 1: the industry and the market

**Case:** AI predictive maintenance for mid-sized US manufacturing plants
**Prepared:** October 3, 2026
**Status:** desk research only. No customers interviewed, nothing built, nothing tested.
**Companion documents:** "02 Customer, Problem and Opportunity" and "03 Source Register and Evidence Log."

## Rules for any answer drawn from this notebook

- Every figure carries one of four labels. ACTUAL DATA: stated in a source that was opened and read. INFERRED: arithmetic or interpretation, with the reasoning shown. ESTIMATE / BEST GUESS: plausible but not verified. UNKNOWN: not found. If this notebook does not say, the answer is UNKNOWN.
- Never invent a number, a company, a quote or a source. Never average conflicting estimates into one figure.
- A vendor or analyst claim is a claim, not a fact. Repeated claims are not independent corroboration.
- Nothing here is customer evidence. The customer sections of part 2 are hypotheses.
- Say what would change the answer. Recommend evidence before building.

## 1. The decision, the audience and the outcome

**Who this is for:** a product leadership team at a software or industrial-technology company deciding whether to invest in an AI predictive-maintenance product for mid-sized US manufacturers.

**The request that started it:** "Build an AI predictive-maintenance dashboard." That is a solution. The work is to find out whether there is a problem worth solving, for whom, and what the cheapest honest test is.

**The outcome we care about:** maintenance managers in mid-sized plants make a clearer, more defensible call on what to investigate next.

**The decision this file supports:** pursue, punt or pivot. Not "what do we build." The market work asks whether the evidence earns the next investment.

## 2. Scope and working definitions

- **Geography:** United States. UNKNOWN for anything outside it.
- **Unit:** the plant, meaning a Census establishment (a single physical location with paid employees). A company with several plants counts several times.
- **Mid-sized plant, provisional:** 100 to 499 employees at the establishment. This is an assumption we chose, not a standard. The 50 to 99 and 500 to 999 classes are shown too so a reader can move the line. The National Association of Manufacturers calls 50 to 499 employees "medium," which is wider.
- **Discrete manufacturing, working definition:** NAICS 332 fabricated metal, 333 machinery, 336 transportation equipment, 335 electrical equipment, 326 plastics and rubber, 334 computer and electronic. This is our choice, not an official category.
- **The buyer and user:** the maintenance manager decides what to investigate next. Buyer and budget authority are UNKNOWN.

## 3. What the research found, in nine lines

1. Manufacturing is large and fragmented by plant size. Mid-sized plants are a small share of plants but over a third of manufacturing employees (ACTUAL DATA, below).
2. There are about 22,600 plants in the 100 to 499 band, and about 10,900 of them sit in six discrete subsectors (INFERRED from Census counts).
3. The maintenance workforce is large, mostly inside manufacturing for the machinery roles, and projected to grow (BLS). Labor is tight (Deloitte and the Manufacturing Institute).
4. No official source says how many plants use maintenance software or condition-monitoring sensors. That number is UNKNOWN. It is the single biggest hole in market sizing.
5. Published predictive-maintenance market-size estimates disagree by about 1.5 times today and about 3.5 times by 2031, and none of the free pages disclose method. We do not use any of them as a market size.
6. The downtime-cost numbers that circulate are mostly vendor-sponsored, from large global firms, and not comparable. One famous figure appears to be misattributed. No source measures downtime for mid-sized US plants.
7. Reported savings from predictive maintenance range from a few percent to nearly 100 percent depending on the source, and the neutral government source says the effect is "not well documented" nationally.
8. The competitive space is crowded and consolidating: both leading maintenance-software vendors now sit inside, or are moving into, larger parents, and sensor-plus-AI players are heavily funded.
9. Nobody we found frames the problem as conflicting reports that need adjudicating. That could be a gap or a sign it is not the real problem. Part 2 weighs it.

## 4. Industry structure: how many plants, how big

Source: US Census Bureau, County Business Patterns (CBP), national file, NAICS sector 31 to 33 (Manufacturing), data year 2023, employment as of the week of March 12, 2023. File: https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip. Parsed from the raw bulk file and checked: the size classes sum to the total.

| Plant size (employees) | Establishments | Employees in those plants | Label |
|---|---|---|---|
| All manufacturing | 284,452 | 12,335,234 | ACTUAL DATA |
| Under 5 | 102,567 | 192,694 | ACTUAL DATA |
| 5 to 9 | 49,034 | 328,510 | ACTUAL DATA |
| 10 to 19 | 42,982 | 591,968 | ACTUAL DATA |
| 20 to 49 | 42,477 | 1,328,624 | ACTUAL DATA |
| 50 to 99 | 21,365 | 1,503,015 | ACTUAL DATA |
| 100 to 249 | 16,896 | 2,610,858 | ACTUAL DATA |
| 250 to 499 | 5,747 | 1,979,361 | ACTUAL DATA |
| 500 to 999 | 2,347 | 1,584,859 | ACTUAL DATA |
| 1,000 or more | 1,037 | 2,215,345 | ACTUAL DATA |
| **100 to 499 combined** | **22,643** | **4,590,219** | INFERRED: 16,896 + 5,747, and 2,610,858 + 1,979,361 |
| Share of all manufacturing | 8.0% of plants | 37.2% of employees | INFERRED |
| 50 to 499 combined | 44,008 | not totaled | INFERRED |

The 2022 file gives 285,500 establishments and 22,534 in the 100 to 499 band, so the picture is stable year to year (ACTUAL DATA, same source).

**Reading it:** 8 percent of plants employ 37 percent of manufacturing workers. Mid-sized plants are not the long tail of tiny shops, and they are not the 1,000-plus giants. They are numerous enough to matter and big enough to have a maintenance function.

### Discrete subsectors in the 100 to 499 band (CBP 2023)

| Subsector | Plants, 100 to 499 | Employees in those plants | Label |
|---|---|---|---|
| 332 Fabricated metal | 2,846 | 528,582 | INFERRED (100 to 249 plus 250 to 499) |
| 333 Machinery | 2,063 | 409,516 | INFERRED |
| 336 Transportation equipment | 2,050 | 460,116 | INFERRED |
| 326 Plastics and rubber | 2,014 | 402,817 | INFERRED |
| 334 Computer and electronic | 1,285 | 263,439 | INFERRED |
| 335 Electrical equipment and appliances | 685 | 144,161 | INFERRED |
| **Six subsectors combined** | **10,943 plants (48.3% of the 22,643)** | **2,208,631** | INFERRED |

The other half of the 100 to 499 band is food, chemicals, primary metals, paper and similar. They also run equipment that fails. They are excluded from the discrete working definition by choice, not because they lack the need.

### Firms versus plants

A NAM summary of Census data reports 239,265 manufacturing firms in 2022, of which 98.3 percent have fewer than 500 employees (ACTUAL DATA, secondary: https://nam.org/mfgdata/facts-about-manufacturing-expanded/). Firms and plants differ: a 200-person plant can belong to a 5,000-person company. Buying decisions may be made at firm level, which would mean fewer buyers than plants. How often is UNKNOWN.

### Size of the sector

- Manufacturing value added was about 9.4 to 9.7 percent of US GDP across 2025 and the first half of 2026 (BEA series read through FRED, ACTUAL DATA). BEA revises, so cite the vintage.
- NAM, citing BEA, reports about $2.90 trillion of manufacturing value added in 2025 (ACTUAL DATA, secondary).
- Manufacturing employment was about 12.65 million in September 2026 (BLS CES via FRED, ACTUAL DATA). The Census March 2023 figure is 12.34 million. They are different concepts and dates, not a conflict.

## 5. The maintenance workforce

Source: BLS Occupational Employment and Wage Statistics (OEWS), May 2025 national estimates, pulled through the public BLS API (ACTUAL DATA). Occupational Outlook Handbook projections for 2025 to 2035 (ACTUAL DATA).

| Occupation | US employment | Median annual wage | Label |
|---|---|---|---|
| Industrial machinery mechanics | 439,640 | $64,520 | ACTUAL DATA |
| Maintenance workers, machinery | 60,020 | $60,850 | ACTUAL DATA |
| General maintenance and repair workers | 1,529,700 | $49,590 | ACTUAL DATA |
| First-line supervisors of mechanics, installers and repairers | 617,500 | $79,860 | ACTUAL DATA |

Inside manufacturing industries, summed across the 21 three-digit manufacturing industries: 232,480 industrial machinery mechanics (about 53 percent of that occupation), 32,460 machinery maintenance workers and 206,750 general maintenance workers (INFERRED by addition).

BLS projects industrial machinery mechanics, machinery maintenance workers and millwrights combined to grow 14 percent from 2025 to 2035, with mechanics at 18 percent and machinery maintenance workers at minus 2 percent, and about 51,900 openings a year, 51 percent of them in manufacturing (ACTUAL DATA). BLS ties the growth to continued adoption of automated manufacturing machinery.

**Labor pressure.** Deloitte and the Manufacturing Institute (April 2024) project about 3.8 million manufacturing jobs needed from 2024 to 2033, with about 1.9 million possibly going unfilled, and over 270,000 industrial machinery maintenance technicians employed in 2022 (ACTUAL DATA, survey of 200-plus US manufacturers plus labor data). A September 2026 update from the same pair reports about 500,000 unfilled technician roles; we read only the press release, so verify before quoting. The NAM Q2 2026 outlook found 46.95 percent of 215 respondents picked workforce attraction and retention as a challenge, down from over 65 percent in Q1 2024. These measure different things and should not be equated.

**What we cannot say:** maintenance headcount per plant, by plant size, is UNKNOWN. OEWS is by industry, not plant size. Dividing mechanics by plants would be invalid.

## 6. How maintenance is practiced, and what it costs

### Practice mix: nobody agrees on the baseline

| Source | Finding | Quality | Label |
|---|---|---|---|
| US DOE FEMP O&M Best Practices Guide 3.0 (2010) | More than 55% of an average facility's maintenance is reactive, 31% preventive, 12% predictive. Underlying study is from about 2000. | Government compilation, 26 years old, widely re-cited as if current | ACTUAL DATA |
| Plant Engineering Maintenance Study (2014, n=283, Mobil-sponsored) | 57% still rely on reactive; about 31% have preventive programs | Vendor-sponsored trade survey | ACTUAL DATA |
| MaintainX State of Industrial Maintenance 2025 (n=1,320) | 58% of teams spend more than half their time reacting, per the press release; MaintainX words the same number two opposite ways on different pages | Vendor-sponsored | ACTUAL DATA |
| UpKeep State of Maintenance 2026 (n=214; 24% manufacturing and plant operations) | 30.9% mostly reactive, 43.6% balanced, 25.5% mostly or fully proactive | Vendor-sponsored, small, self-selected | ACTUAL DATA |
| Fluke Reliability 2026 (Censuswide, 600-plus in US, UK and Germany) | Reactive 36%, proactive 45%, predictive 18% | Vendor-sponsored, press release only | ACTUAL DATA |

These measure different things (share of work, share of assets, share of respondents), different populations and different years. They should not be averaged. The neutral sources also disagree on what "good" looks like: DOE says top performers run under 10 percent reactive, while NIST cites 30 to 40 percent as ideal in some literature.

What the UpKeep survey names as barriers to preventive maintenance is worth noting: staffing and resources (31 percent), scheduling conflicts with production (31 percent), training (24 percent). The constraint named is capacity and production access, not a lack of insight (ACTUAL DATA, vendor-sponsored).

### The cost of downtime: a number everyone quotes and nobody measured for this segment

| Source | Finding | Caveat |
|---|---|---|
| Siemens, True Cost of Downtime 2024 (data from Senseye, a Siemens product) | About $1.4 trillion a year lost by the Fortune Global 500, equal to 11% of revenue. Average large plant: $253 million a year. Hourly cost from $36,000 (fast-moving consumer goods) to $2.3 million (automotive). | Vendor-sponsored. Based on 181 interviews at large firms in four sectors, then extrapolated. The 2022 edition used 56 interviews and said $129 million per plant. The editions are not comparable. |
| ABB Value of Reliability 2023 (n=3,215) | About $125,000 an hour typical globally, about $103,000 in the US | Vendor-sponsored. Read through a trade reprint. Mixed sectors including utilities and energy, so not a manufacturing figure. Median versus mean unclear. |
| "Aberdeen: $260,000 an hour" | Widely presented as a manufacturing average | In the whitepaper we opened, it traces to a 2016 Aberdeen report on IT infrastructure uptime, not manufacturing. INFERRED mis-attribution; the Aberdeen original was not opened. |
| Siemens aside on small and medium manufacturers | Downtime can reach $150,000 an hour at the top end | No method stated. |

**No source measures the cost of downtime for mid-sized US manufacturers.** UNKNOWN. Any model that needs it should measure it with the target plants.

### What predictive maintenance saves: wide, old and mostly vendor-sourced

- **NIST AMS 100-18 (2018, government, a scoping report):** the effect of predictive maintenance on maintenance cost "is not well documented at the national level." Firm-level studies report cost reductions from 15 percent to 98 percent. In a survey NIST cites, cost was the most prevalent barrier to adopting advanced maintenance (92 percent of respondents). NIST notes advanced maintenance is not cost-effective in all cases. ACTUAL DATA.
- **DOE (2010):** estimated savings of 12 to 18 percent for preventive over reactive and 8 to 12 percent for predictive over preventive, and "exceeding 30 to 40 percent" in reactive-heavy facilities. It cites no study for these figures and lists untraceable "independent survey" results (10 times return, 70 to 75 percent fewer breakdowns). ACTUAL DATA that the guide says this. Validity UNKNOWN.
- **Deloitte (2017, a consultancy that sells predictive-maintenance services):** uptime up 10 to 20 percent, maintenance cost down 5 to 10 percent, planning time down 20 to 50 percent. The same paper elsewhere says 25 percent cost reduction. An unnamed extruder pilot shows 80 percent less downtime.
- **Siemens (vendor):** its own clients show 50 percent less unplanned downtime and 40 percent lower maintenance cost. Selection bias likely.
- **An academic cost model for small and mid-sized CNC machine shops (2019, 19 usable UK responses):** predicted savings of £22,804 to £48,585 a year per shop. Predicted, not observed, with stated assumptions. It states no prior value study for this segment existed.
- **Independent meta-analysis or controlled field study of predictive maintenance impact:** none found. UNKNOWN.

**Reading it:** treat every saving figure as a hypothesis to test, not an expected return. Most trace to vendor client work or untraceable older studies.

## 7. Predictive-maintenance market size: a range, not a number

All of the following are paid-analyst teasers (landing pages or press releases). None disclose method, sample or model inputs on the pages we could read.

| Publisher | Base | Forecast | Growth rate | Label |
|---|---|---|---|---|
| Precedence Research (updated Oct 1, 2026) | $9.21B (2025) | $94.27B (2035) | 26.19% | ACTUAL DATA |
| Fortune Business Insights (updated Sep 14, 2026) | $13.65B (2025) | $97.37B (2034) | 24.30% | ACTUAL DATA |
| Mordor Intelligence | $14.09B (2025) | $82.17B (2031) | 34.14% | ACTUAL DATA |
| MarketsandMarkets (March 2026, title says "operational predictive maintenance") | $13.89B (2026) | $23.79B (2031) | 11.4% | ACTUAL DATA |
| Allied Market Research | $10.1B (2023) | $162.1B (2033) | 32.2% | ACTUAL DATA |
| Grand View Research (January 2026) | not shown in free text | $98.16B (2033) | 27.9% | ACTUAL DATA |
| IoT Analytics (November 2023; narrower, older vintage) | $5.5B (2022) | $14.3B (2028) | 17% | ACTUAL DATA |

**The spread, stated plainly (INFERRED):** the 2025 global base ranges from $9.2B to $14.1B, about 1.5 times. For 2031 the highest estimate is about 3.5 times the lowest ($82.2B versus $23.8B). Growth rates run from 11.4 percent to 34.1 percent, about three times. We did not average them.

**Why it matters:** the high-end firms cluster at 24 to 34 percent growth, which may be a convention among report publishers and not independent measurement. Two publishers landing close together proves nothing, because neither shows its method. Definitions also differ (hardware in or out, software share, all industry versus manufacturing only), and part of the spread is scope.

**North America:** 2025 estimates run from about $4.07B (implied from Mordor's 28.85 percent share, INFERRED) to $4.54B (Fortune, 33.3 percent share). A US-only figure from Precedence is $2.26B. Shares cluster at 29 to 33 percent but dollars do not.

**No source slices by US plant size.** The US mid-sized manufacturing slice is UNKNOWN. Mordor says large enterprises are 63.65 percent of 2025 revenue and small and medium firms are the fastest-growing at 36.2 percent a year with no method disclosed. Gartner, IDC and ABI had no free headline figure.

**Conclusion:** do not use any of these as a TAM. A credible number comes from a bottom-up build: plants times asset classes times price. Section 10 builds the plant count and leaves the price and reach as named unknowns.

## 8. Adoption evidence: old, small, or the wrong population

| Source | Finding | Caveat |
|---|---|---|
| Plant Engineering Maintenance Survey 2018 (sponsor Advanced Technology Services) | 51% of plants use predictive maintenance (47% in 2017); 50% use a CMMS | No sample size or size mix disclosed. Maintenance-trade readers skew toward engaged plants. |
| Reliable Plant 2019 (n about 150, 20-plus industries) | 65% use predictive maintenance; about 89% lack internet or wireless connectivity for it; top barriers: skills (71%) and data standardization (69%) | Self-selected readers, geography not stated. Conflicts with the 51% a year earlier: "predictive" is defined loosely. |
| McKinsey Digital Manufacturing survey 2018 (700-plus respondents, firms with 50-plus employees, global) | Under 30% had rolled out Industry 4.0 solutions company-wide. Re-cited elsewhere: 84% of pilots stuck over a year. | General Industry 4.0, not predictive maintenance. Eight years old. The pilot figures all trace to this one source. |
| Deloitte 2025 Smart Manufacturing Survey (fieldwork 2024, n=600 US executives, firms with $500M-plus revenue) | 29% use AI or machine learning at facility or network level | Large firms only. Not predictive-maintenance specific. |
| IoT Analytics 2026, machine builders | 54% report predictive maintenance deployed as a production AI use case | Machinery makers, not plants running equipment. Poor proxy. |
| Eurostat 2021 (EU, all sectors, official) | IoT use: small firms 26%, medium 37%, large 48%. Condition-based maintenance among IoT users: small 22%, large 44%. | EU, not US, not predictive-maintenance specific. The only rigorous size split we found. |

**US mid-sized plant adoption rate: UNKNOWN.** No recent, independent, US survey separates it. INFERRED only: mid-sized plants likely sit between small and large, but that is interpolation.

**Return and failure evidence.** IoT Analytics surveys of adopters (about 100 respondents) report 83 percent positive return in 2021 and 95 percent on a 2023 page, so even one publisher's number moves, and a survey of those who adopted carries survivorship bias. The same page says many solutions run below 50 percent accuracy, with no definition given. The well-known "80 percent of predictive-maintenance projects fail" appears only in vendor blogs with no study named, and we do not use it. Survey-reported stall causes are skills, data quality and cost. Scarce and imbalanced failure data is documented in the academic literature (Scientific Reports, 2024). Alert fatigue is plausible but is supported only by vendor blogs here.

## 9. The competitive landscape

Everything in this section about what a vendor sells comes from the vendor's own pages and is a **vendor claim** unless noted. Funding and acquisition facts come from filings, press releases or reputable press.

### Maintenance software (CMMS and EAM)

| Vendor | What it sells | Public pricing | Notes |
|---|---|---|---|
| MaintainX | Mobile-first work orders and preventive maintenance with AI add-ons | Free; $20 to $65 per user per month annual; enterprise custom | Says 14,000-plus companies. Autodesk announced an agreement to acquire it for about $3.575B (8-K, May 28, 2026). Completion date unverified. |
| Fiix (Rockwell Automation) | Cloud CMMS with AI add-ons | Free; $45 and $75 per user per month; enterprise custom | Says 4,500-plus teams. Rockwell completed the acquisition around January 2021 (Business Wire). |
| UpKeep | CMMS and EAM, positioned to get teams off spreadsheets and paper | $24 and $55 per user per month; higher tiers by quote | Entry tier aimed at small and single-site teams. |
| Limble CMMS | CMMS | Calculator only, no list prices | Its chief product officer argues a CMMS alone does not reach predictive maintenance without data discipline (Plant Services, July 13, 2026). |
| eMaint (Fluke Reliability) | CMMS and EAM | Not found | Says single plants to Fortune 500 and 150,000-plus users. |
| IBM Maximo | EAM, asset performance management and AI suite | Credit-based licensing, no figures | Cases are large utilities and transport, none mid-sized plants. |

### Predictive-maintenance platforms and sensors

| Vendor | What it sells | Notes |
|---|---|---|
| Augury | Sensors plus AI machine-health diagnostics, now framed as an "industrial AI workforce" | Says 170-plus manufacturers in 40-plus countries. Raised $75M at a valuation over $1B in February 2025 (TechCrunch). Pricing not public. Claims ranked alerts with root cause, urgency and recommended action. |
| Siemens Senseye | Cloud predictive maintenance, bought by Siemens in June 2022 | Names alert overload as the problem it solves. Cases are enterprise. Contact sales. |
| Tractian | Vibration and temperature sensors plus AI diagnostics plus a CMMS app | Says 2,000 manufacturers. $120M Series C December 2024 (Crunchbase). Claims a "3 month payback" (vendor claim). |
| Samotics | Motor electrical-signature analysis | The only vendor found publishing a false-alert rate (2.1 percent) and recall (95.5 percent), both vendor claims, achieved by having its own engineers review ambiguous detections before customers see them. |
| AspenTech Mtell, GE Vernova APM, Emerson AMS, Nanoprecise, Banner | Asset performance management, sensors and kits | Process-industry or large-site skew, except Banner's kit model. Pricing is quote-only. |
| Uptake | Fleet predictive maintenance | Now fleet-focused, not plant maintenance. Bosch announced a planned acquisition on March 19, 2026. |
| Avathon (formerly SparkCognition) | Autonomous-operations AI platform | Moved from a predictive-maintenance point product to a platform framing. |

**Pricing pattern (INFERRED):** public per-user pricing exists only for CMMS products. Predictive-maintenance and sensor vendors are quote-only, which points to enterprise-style sales motions.

### The status quo is also a competitor

Spreadsheets, paper, technician knowledge and OEM service contracts. One hard number: Plant Engineering's 2016 study found 51 percent of plants ran a CMMS (49 percent did not). Newer figures such as "49 percent still use spreadsheets" come from secondhand compilations with weak attribution and are not used here. The prevalence of OEM contracts, in-house technician models and outside reliability consultants is UNKNOWN.

### Who says they serve mid-sized plants

No vendor page we opened says "mid-sized plant" outright. Fiix, UpKeep, eMaint and Banner are the closest fit by pricing and positioning (INFERRED). Augury, Samotics, Senseye, GE, Aspen, Emerson and Maximo show enterprise or process-industry customers. Time-to-value claims are all vendor claims: MaintainX cites 200 sites in nine weeks, Samotics under 60 minutes per asset, Tractian a three-month payback.

### Pattern (INFERRED)

The CMMS layer is consolidating into larger parents (Fiix into Rockwell, MaintainX toward Autodesk). Sensor-plus-AI vendors are well funded. We searched for shutdowns among these vendors and found none, but the search was not systematic.

### What incumbents emphasise about alerts

Everyone sells "more signal, less noise." Augury sells ranked, explained alerts. Nanoprecise sells being "not noisy." Aspen cites eliminating alert fatigue. Senseye names alert overload as the problem. **No vendor page we opened frames the problem as conflicting reports from different sources (technician, operator, maintenance history, sensor) that need adjudicating.** They frame it as missing or noisy sensor data. This is an inference from absence in the pages we read. It is not proof the problem is unaddressed, and it is not proof the problem is real.

## 10. Sizing: total, serviceable and obtainable, built only from sourced inputs

The unit is the plant. Each tier uses the kind of source it should use.

| Tier | Built from | Value | Label |
|---|---|---|---|
| **TAM (population)** | Census count of manufacturing plants in the mid-sized band | **22,643 plants** with 100 to 499 employees (4,590,219 employees). For reference, 44,008 plants at 50 to 499. | ACTUAL DATA for the plant counts; the "mid-sized" line is our assumption |
| **SAM (trade and industry)** | Plants in the discrete subsectors where equipment-heavy production is the norm | **10,943 plants** in the six discrete subsectors. Adding food, chemicals and primary metals would raise it. | INFERRED |
| **SOM (competition, reach and capacity)** | SAM times the share we could reach, times the share we could win, limited by how many plants we can onboard in the first 12 months | **UNKNOWN** | UNKNOWN |

**SOM formula:** plants won in year one equals the smaller of (a) SAM times the fraction we can reach times the win rate against the status quo and incumbents, and (b) our delivery capacity in plants per year. Revenue equals plants won times annual price per plant.

**The named unknowns, and what resolves each:**

| Unknown | Why it matters | What would resolve it |
|---|---|---|
| Fraction of SAM with a real, recurring problem of this kind | Not every plant has the need | Interviews, then a short screener |
| Fraction already served by a CMMS or sensors | Sets the starting point and the competitors | No official data exists. Needs primary research. |
| Buyer authority and whether purchases happen per plant or per firm | Multi-plant firms count several plants but may buy once | Interviews |
| Price per plant per year | The CMMS public prices are per user. Predictive-maintenance prices are quote-only. | Willingness-to-pay conversations, not guesses |
| Win rate against the status quo | Spreadsheets and technician knowledge are the incumbent | A small test with real reports |
| Delivery capacity | Onboarding is human work | Cost and time of a pilot |

**Caution:** the plant counts are real. The commercial value is not known. No tier here is a revenue forecast.

## 11. What this research does not tell us

- How many US mid-sized plants use maintenance software or condition-monitoring sensors. UNKNOWN. The Census Annual Business Survey technology module covers AI, specialized software, robotics, cloud and specialized equipment, and we found no maintenance or sensor item. The Survey of Manufacturing Technology ran only from 1988 to 1993.
- What unplanned downtime costs a mid-sized US plant. UNKNOWN.
- Whether better information changes the decision a maintenance manager makes. UNKNOWN. See part 2.
- Willingness to pay. UNKNOWN.
- The size of the predictive-maintenance market that is real and addressable. UNKNOWN. Analyst figures disagree and disclose no method.

## 12. Verdict at the market level

The industry is large, the maintenance workforce is large and growing, labor is tight, and the incumbent set is well funded and consolidating. That earns a closer look. It does not earn a build. The market numbers that circulate are not trustworthy enough to size an investment, and the facts that would matter most (adoption by plant size, downtime cost, willingness to pay) are all UNKNOWN. The cheapest way to reduce that uncertainty is not more desk research. It is talking to maintenance managers and planners. Part 2 explains what to ask.
