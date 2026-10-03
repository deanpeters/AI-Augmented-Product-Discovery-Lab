# C. Market size and adoption evidence: predictive maintenance (PdM) and industrial IoT

Researched 2026-10-03. Audience: product team deciding whether to build AI PdM for mid-sized US manufacturing plants. Outcome: decide whether the market evidence earns the next investment.
Labels: ACTUAL DATA (in a source I opened), INFERRED (my arithmetic, shown), UNKNOWN.
"Opened" = fetched via WebFetch or scrapling and read. Items seen only in a search-result snippet are marked SNIPPET ONLY and are not relied on.
Raw fetched files saved in this folder: gvr.md, gvrpr.md, allied.md, mck.md, mf.txt (MForesight PDF text), aemt.md.

---------------------------------------------------------------------
## 1. Market size estimates (global PdM)

All are paid-analyst teasers (landing pages or press releases). None disclosed methodology beyond generic "primary and secondary research" language on what I opened; no sample sizes, no model inputs. Treat all as SOURCE QUALITY: paid analyst teaser.

| Metric | Value | Year | Publisher | Source quality | URL | Label | Note |
|---|---|---|---|---|---|---|---|
| Global PdM, base | USD 13.65B (2025); 17.11B (2026) | 2025 base | Fortune Business Insights (report FBI102104), page last updated 2026-09-14 | paid analyst teaser | https://www.fortunebusinessinsights.com/predictive-maintenance-market-102104 | ACTUAL DATA | Opened. Forecast 2034 = USD 97.37B, CAGR 24.30% (2026-2034). Methodology not shown on page. |
| Global PdM, base | USD 14.09B (2025); 18.9B (2026) | 2025 base | Mordor Intelligence | paid analyst teaser | https://www.mordorintelligence.com/industry-reports/predictive-maintenance-market | ACTUAL DATA | Opened. Forecast 2031 = USD 82.17B, CAGR 34.14% (2026-2031). Publication date not shown on page. Methodology page not opened. 2026 value 18.9 stated in search result snippet only. |
| Global PdM, base | USD 13.89B (2026); 23.79B (2031) | 2026 est. | MarketsandMarkets (TC 4154), published March 2026 | paid analyst teaser | https://www.marketsandmarkets.com/Market-Reports/operational-predictive-maintenance-market-8656856.html | ACTUAL DATA | Opened. CAGR 11.4% (2026-2031). Base year stated as 2025, but 2025 value not shown. Methodology not shown. Note title "operational predictive maintenance", scope may be narrower. |
| Global PdM, base | USD 9.21B (2025); 11.70B (2026) | 2025 base | Precedence Research (code 2453), updated 2026-10-01 | paid analyst teaser | https://www.precedenceresearch.com/predictive-maintenance-market | ACTUAL DATA | Opened. Forecast 2035 = USD 94.27B, CAGR 26.19% (2026-2035). Methodology not shown. |
| Global PdM, base | USD 10.1B (2023) | 2023 base | Allied Market Research | paid analyst teaser | https://www.alliedmarketresearch.com/predictive-maintenance-market | ACTUAL DATA | Opened via scrapling stealthy-fetch (WebFetch 403). Forecast 2033 = USD 162.1B, CAGR 32.2% (2024-2033). Different base year to others. Publication date not captured. Methodology not shown. |
| Global PdM, forecast | USD 98.16B (2033), CAGR 27.9% (2026-2033) | 2033 | Grand View Research press release, January 2026 | paid analyst teaser | https://www.grandviewresearch.com/press-release/global-predictive-maintenance-market | ACTUAL DATA | Opened via scrapling. Base-year value NOT shown in the free text I got. An older GVR figure (USD 60.13B by 2030, 29.5% CAGR) appeared in a search snippet only, NOT OPENED. |
| Global PdM, 2022 | USD 5.5B (2022); USD 14.3B (2028); CAGR 17% | 2022 / 2028 | IoT Analytics, article dated 2023-11-29 | paid analyst teaser (free blog of paid report) | https://iot-analytics.com/predictive-maintenance-market/ | ACTUAL DATA | Opened. Older vintage and likely stricter definition. Source of the 17% CAGR; report 2023-2028 is 295 pages (paid, not opened). Software = 44% of stack in 2022. |
| Global PdM (manufacturing only) | USD 2.8B (2024) to 9.8B (2030), CAGR 23.4% | 2024 | Research and Markets (Global Industry Analysts "Strategic Business Report") | paid analyst teaser | https://www.researchandmarkets.com/reports/5027961/predictive-maintenance-for-manufacturing | SNIPPET ONLY | Not opened. Included only to show that "manufacturing-only" scope can be far below "all industry" figures. Do not cite until opened. |
| Others in search snippets (TechSci 6.77B 2024; MarkNtel 10.93B 2024; Next Move 5.93B 2023) | various | 2023-24 | TechSci, MarkNtel, Next Move | paid analyst teaser | see search results | SNIPPET ONLY | NOT OPENED. Not used in spread. |
| Gartner, IDC, ABI | no free headline PdM market-size figure found | n/a | n/a | n/a | n/a | UNKNOWN | Not found in free sources. |

### Spread (computed, not averaged)

| Comparison | Calc | Result | Label |
|---|---|---|---|
| 2025 global base: Mordor 14.09 vs Precedence 9.21 (USD B) | 14.09 / 9.21 | 1.53x (Fortune 13.65 sits near Mordor) | INFERRED |
| 2031 forecast: Mordor 82.17 vs MarketsandMarkets 23.79 (USD B) | 82.17 / 23.79 | 3.45x | INFERRED |
| 2033 forecast: Allied 162.1 vs Grand View 98.16 (USD B) | 162.1 / 98.16 | 1.65x | INFERRED |
| CAGR: Mordor 34.14% vs MarketsandMarkets 11.4% | 34.14 / 11.4 | 3.0x; spread of 22.7 percentage points | INFERRED |
| Mid-2030s: Fortune 97.37 (2034) vs Precedence 94.27 (2035) | nearly identical numbers one year apart | not directly comparable (different years) | INFERRED |

Plain statement: today's base-year estimates differ by roughly 1.5x (about USD 9B to 14B in 2025). The forecasts diverge much more: for 2031 the highest estimate I opened is 3.5x the lowest, and CAGRs range from 11.4% to 34.1%. Nobody agrees on the growth rate, and the stated 2033 numbers span USD 98B to 162B. I did not average these. Note that the high-end firms are all quoting 24% to 34% CAGR, which is plausibly a convention among paid-report publishers, not independent corroboration (INFERRED; no source states this).

Corroboration warning: the figures are NOT independent measurements. I could not see any methodology, so I cannot tell whether two firms agree because they measured the same thing or because they used similar definitions. Fortune (13.65) and Mordor (14.09) being close is not proof of anything.

### North America (and US)

| Metric | Value | Year | Publisher | Source quality | URL | Label | Note |
|---|---|---|---|---|---|---|---|
| North America PdM | USD 4.54B (33.30% share); 5.52B in 2026 | 2025 | Fortune Business Insights | paid analyst teaser | https://www.fortunebusinessinsights.com/predictive-maintenance-market-102104 | ACTUAL DATA | Opened. |
| North America share | 33.4% | 2025 | Grand View Research | paid analyst teaser | https://www.grandviewresearch.com/press-release/global-predictive-maintenance-market | ACTUAL DATA | Share only; dollar value not in the text I got. |
| North America share | 28.85% | 2025 | Mordor Intelligence | paid analyst teaser | https://www.mordorintelligence.com/industry-reports/predictive-maintenance-market | ACTUAL DATA | |
| North America share | 32.25% (expected) | 2026 | MarketsandMarkets | paid analyst teaser | https://www.marketsandmarkets.com/Market-Reports/operational-predictive-maintenance-market-8656856.html | ACTUAL DATA | |
| US only | USD 2.26B (2025); USD 23.66B (2035); CAGR 26.47% | 2025 | Precedence Research | paid analyst teaser | https://www.precedenceresearch.com/predictive-maintenance-market | ACTUAL DATA | US only, not all of North America. |
| NA implied $ (Mordor) | 0.2885 x 14.09 = about USD 4.07B | 2025 | derived | n/a | n/a | INFERRED | My arithmetic from two opened figures. |
| NA implied $ (M&M) | 0.3225 x 13.89 = about USD 4.48B | 2026 | derived | n/a | n/a | INFERRED | |
| NA/US spread | USD 2.26B (US, Precedence) to 4.54B (NA, Fortune) in 2025 = 2.0x | 2025 | derived | n/a | n/a | INFERRED | Not like for like (US vs NA). Shares cluster 29% to 33%; dollar values do not. |
| US manufacturing mid-sized plant segment | no sourced figure | n/a | n/a | n/a | n/a | UNKNOWN | None of the opened sources slice by plant size and US. Mordor says large enterprises = 63.65% of 2025 revenue, so SMEs = about 36% (INFERRED: 100 minus 63.65, assuming only two size classes), globally and not mid-sized plants specifically. |

Scope note (ACTUAL DATA, ranges differ): GVR says the on-premise segment led in 2025 and solutions = 80.1% of 2025 revenue. Fortune says software = 55.70% share in 2026. Mordor says hardware = 45.18% in 2025. Segment definitions clearly differ (hardware-in, hardware-out), which is one visible reason base values differ.

---------------------------------------------------------------------
## 2. Adoption evidence (surveys)

| Metric | Value | Year | Publisher | Source quality | URL | Label | Note |
|---|---|---|---|---|---|---|---|
| Plants using predictive maintenance | 51% (47% in 2017) | 2018 | Plant Engineering Maintenance Survey, published 2018-03-15, sponsor Advanced Technology Services | industry media, vendor-sponsored | https://www.plantengineering.com/2018-maintenance-survey-playing-offense-and-defense/ | ACTUAL DATA | Opened. Sample size and plant size mix not disclosed on the page. Same article: preventive 80%, run-to-failure 57%, CMMS 50% (59% in 2017). |
| Facilities using a CMMS | 51% | 2016 | Plant Engineering 2016 Maintenance Study, published 2016-04-11 | industry media | https://www.plantengineering.com/2016-maintenance-study-seven-key-findings/ | ACTUAL DATA | Opened. Same page: preventive 76%, run-to-failure 61%. No sample size, sponsor, or size mix on the page. |
| Predictive maintenance use | 65% (up 11 points from 2018); ~89% of plants lack internet/wireless connectivity; only 5.5% use internet-based systems | 2019 | Reliable Plant (Noria), author Jonathan Trout | trade media, vendor-adjacent (training/consulting firm) | https://www.reliableplant.com/Read/31707/predictive-maintenance-survey-2019 | ACTUAL DATA | Opened. n = nearly 150 maintenance managers/supervisors, 20+ industries. Self-selected readers; geography not stated. Note its 65% vs Plant Engineering's 51% a year earlier: definitions of "predictive" are loose in both. |
| Top barrier to connected PdM | 71% concerned about lack of skilled internal staff; 69% data standardization | 2019 | Reliable Plant (same survey) | trade media | same URL | ACTUAL DATA | |
| Industrial companies piloting vs scaling Industry 4.0 | "Less than 30 percent" rolled out relevant solutions company-wide; about two-thirds say digitizing production is a top priority | 2018 (published 2018-07-23) | McKinsey, Digital Manufacturing Global Expert Survey (4th edition) | consultancy research (independent of PdM vendors, but sells transformation work) | https://www.mckinsey.com/capabilities/operations/our-insights/how-digital-manufacturing-can-escape-pilot-purgatory | ACTUAL DATA | Opened via scrapling. 700+ respondents, companies with 50+ employees and over USD 10M revenue, global, many sectors. "Under 30%" comes from an exhibit caption; "pilot purgatory" term attributed to McKinsey/WEF work. Not PdM-specific. Older (8 years). |
| Pilots stuck over a year | 84% over 1 year; 28% over 2 years | c.2018 | McKinsey figure re-cited by MForesight (NSF/NIST funded) | academic/government-funded | MForesight PDF https://economicgrowth.umich.edu/wp-content/uploads/2021/09/MForesight-Report_Clickable_Final.pdf (March 2020) | ACTUAL DATA (as cited) | I read the PDF text; it repeats McKinsey. Note: the 84% stat appeared in search-result summaries of McKinsey as "85%" in one place; I did not verify which is in the McKinsey PDF. McKinsey PDF itself NOT OPENED. This is a repeated claim, not independent corroboration. |
| US large manufacturers using AI/ML at facility or network level | 29% (GenAI 24%) | 2024 fieldwork (Aug-Sep 2024) | Deloitte, 2025 Smart Manufacturing Survey | consultancy survey | https://www.deloitte.com/us/en/about/press-room/deloitte-2025-smart-manufacturing-survey.html | ACTUAL DATA | Opened. n = 600 US executives, companies with USD 500M+ revenue and 1,000+ employees, so large firms only. No PdM-specific figure. |
| Machine builders: PdM deployed | 54% deployment as production AI use case; 55% scaled at least one AI use case, 41% in pilots | 2026 (report May 2026) | IoT Analytics, AI in Machine Building 2026 | paid analyst (free summary) | https://iot-analytics.com/ai-in-machine-building-2026-adoption-barriers-use-cases-and-leading-sub-industries/ | ACTUAL DATA | Opened. Search snippet says n = 120 decision-makers across 22 sub-industries (snippet only for n). Population is machinery OEMs, not plants running equipment, so poor proxy for our target. |
| Barriers (machine builders) | cost 54%; data infrastructure 43%; skills 43% | 2026 | IoT Analytics | paid analyst | same URL | ACTUAL DATA | |
| Industrial AI readiness barrier | 54% named data quality and availability top barrier | 2026 edition | IIoT World reader survey | trade media | https://www.iiot-world.com/artificial-intelligence-ml/industrial-data-and-ai-readiness-survey-2027/ | ACTUAL DATA | Opened. n = 272 industrial professionals; sponsor, geography, size mix not stated. Self-selected. |
| Share of manufacturers with PdM AI in at least one facility | 38% (22% in 2022); 31% in pilots | 2025 | Attributed to "IoT Analytics Industrial AI Report 2025" | secondary blog (stealthagents.com), traceable to no primary page | https://stealthagents.com/research/ai-predictive-maintenance-statistics-2026 | UNKNOWN | I opened the blog; it gives no link or date for the original. I searched IoT Analytics' site and could not locate this statistic. Do NOT use. |
| IDC: 47% of manufacturers piloted or deployed PdM (2024) | 47% | 2024 | attributed to IDC Manufacturing Insights | secondary (search snippet) | not opened | NOT OPENED | Do not use until traced to IDC. |
| Rockwell State of Smart Manufacturing | 1,560 respondents, 17 countries, fielded March 2025, revenue USD 100M to 30B+; quality control now top AI use case ahead of PdM (per search snippet) | 2025 | Rockwell Automation (vendor) | vendor-sponsored | https://www.rockwellautomation.com/en-us/company/news/press-releases/Ninety-Five-Percent-of-Manufacturers-Are-Investing-in-AI-to-Navigate-Uncertainty-and-Accelerate-Smart-Manufacturing.html | ACTUAL DATA (sample details); the "PdM no longer top" claim is SNIPPET ONLY | Opened press release: no PdM figure in it. Vendor with a hardware interest. |
| McKinsey, Deloitte "30% to 50% downtime reduction" ranges | as quoted by blogs | various | blogs citing McKinsey/Deloitte | secondary | n/a | UNKNOWN | Not traced to a primary page. Deloitte's own 2017 page gives lower ranges (see section 3). |
| BCG, ARC Advisory, LNS Research, Gartner PdM adoption surveys | none found with free, citable numbers | n/a | n/a | n/a | n/a | UNKNOWN | I did not find or open any. LNS 2016 survey appears only as a footnote in the MForesight PDF. |
| WEF Global Lighthouse Network | network grew from 16 to 223 sites; PdM near the top of solutions at new sites | 2025 | WEF (via search snippet) | WEF, curated showcase, selection-biased | https://reports.weforum.org/docs/WEF_Global_Lighthouse_Network_2025.pdf | SNIPPET ONLY | NOT OPENED. Lighthouses are showcase sites chosen for success, so not a measure of typical adoption. |

Reading across: the "how many manufacturers use PdM" number ranges from 51% (2018, Plant Engineering) to 65% (2019, Reliable Plant) to "unknown" for rigorous recent US data. These are readers of maintenance trade media, who skew toward maintenance-engaged plants, and "predictive" is self-defined. INFERRED.

---------------------------------------------------------------------
## 3. ROI and failure evidence

| Metric | Value | Year | Publisher | Source quality | URL | Label | Note |
|---|---|---|---|---|---|---|---|
| PdM typical gains | uptime +10% to 20%; maintenance cost -5% to 10%; planning time -20% to 50% | 2017-05-09 | Deloitte Insights (Deuel, Chandramouli, Coleman, Damodaran) | consultancy; sells PdM services | https://www.deloitte.com/us/en/insights/industry/manufacturing-industrial-products/industry-4-0/using-predictive-technologies-for-asset-maintenance.html | ACTUAL DATA | Opened. Estimates, not measured survey. |
| Named case: chemical manufacturer extruder pilot | 80% less unplanned downtime; about USD 300,000 savings per asset; later expanded to multiple sites | 2017 | Deloitte Insights (same) | consultancy case, unnamed client, single anecdote | same URL | ACTUAL DATA | Treat as vendor-style case study. Client not named. |
| Deloitte named barriers | cost and technical support, talent requirements, legacy equipment integration, cybersecurity, data management | 2017 | Deloitte Insights | consultancy | same URL | ACTUAL DATA | Recommends piloting on high-value assets first. |
| PdM ROI survey | 83% of implementations reported positive ROI; 45% of those amortized in under a year | 2021 | IoT Analytics | paid analyst | https://iot-analytics.com/predictive-maintenance-market-evolution-from-niche-topic-to-high-roi-application/ | ACTUAL DATA | Opened. n about 100 senior IT/OT managers, geography not stated. Survey of those who had implemented: survivorship bias likely (INFERRED). Another IoT Analytics page (2023-11-29) says 95% of adopters reported positive ROI and 27% paid back within a year, a different figure from the same publisher, so the exact number is unstable. |
| Solution accuracy | many solutions operate below 50% accuracy | 2023 | IoT Analytics | paid analyst | https://iot-analytics.com/predictive-maintenance-market/ | ACTUAL DATA | Opened; no definition of accuracy on the page. Directly relevant to false alerts. |
| Interoperability pain | 78% rated missing standards challenging or very challenging | 2016 | IoT Analytics | paid analyst | https://iot-analytics.com/predictive-maintenance-market-evolution-from-niche-topic-to-high-roi-application/ | ACTUAL DATA | Old. |
| Unplanned downtime cost | USD 1.4T a year for the world's 500 largest companies = 11% of revenue | 2024 | Siemens, True Cost of Downtime 2024 (data from Senseye, a Siemens PdM product) | vendor-sponsored | https://www.theaemt.com/resource/the-true-cost-of-downtime-2024-a-comprehensive-analysis.html (secondary summary, opened). Original on automation.com not readable | ACTUAL DATA (as summarized) | The 181-respondent sample size is SNIPPET ONLY. Largest companies only, vendor motive to inflate downtime cost. Not applicable to mid-sized plants without scaling. |
| "80% of PdM initiatives fail" | 80% | undated | attributed to PwC and Plant Engineering by LLumin (a CMMS vendor) | vendor blog, untraceable | https://llumin.com/blog/why-80-of-factories-fail-at-predictive-maintenance/ | UNKNOWN | Opened. No date, link, or study named. Do NOT repeat as a fact. |
| "False alarms are the primary reason PdM fails" | claim | undated | oxmaint.com and other vendor blogs | vendor blogs | search results only | SNIPPET ONLY | Plausible mechanism (INFERRED) but I found no independent measurement of alert fatigue prevalence. |
| Data scarcity and class imbalance | failures are rare vs healthy data; hard to train supervised models | 2024 | Ali Hakami, Scientific Reports | academic | https://pmc.ncbi.nlm.nih.gov/articles/PMC11053123/ | ACTUAL DATA (qualitative) | Opened. Supports the lack-of-failure-data risk. Also notes failure-only-at-end-of-run structure. No prevalence number. |
| Pilot-to-scale | under 30% reach company-wide rollout; 84% of pilots over a year | 2018 | McKinsey / MForesight | see section 2 | see section 2 | ACTUAL DATA | General Industry 4.0, not PdM-specific. |
| Maintenance data quality in CMMS | technicians skip closing work orders, so labeled failure history is thin | undated | tractian/oxmaint blogs | vendor blog | search results only | SNIPPET ONLY | Mechanism plausible. Not independently verified. |
| Lighthouse metals producer: furnace failures cut downtime 42% in six months, conversion costs -20% | 42% / 20% | 2025 | WEF network | showcase | https://reports.weforum.org/docs/WEF_Global_Lighthouse_Network_2025.pdf | SNIPPET ONLY | NOT OPENED. Selected best cases. |

Net: there is no independent, quantified measure of PdM project failure rates in what I could open. The "80% fail" number is untraceable. The only measured stall evidence is McKinsey's general Industry 4.0 pilot purgatory data (2018) and survey-reported barriers (skills, data, cost).

---------------------------------------------------------------------
## 4. Company-size split (SME vs large)

| Metric | Value | Year | Publisher | Source quality | URL | Label | Note |
|---|---|---|---|---|---|---|---|
| EU enterprises using IoT | small 26%, medium 37%, large 48% | 2021 data, published May 2022 | Eurostat | official statistics, independent | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_Internet_of_Things_in_enterprises | ACTUAL DATA | Opened. EU, all sectors, not US, not PdM-specific. |
| Condition-based maintenance use among IoT-using enterprises | small 22%, large 44% | 2021 | Eurostat | official statistics, independent | same URL | ACTUAL DATA | Opened. Base is firms already using IoT. Large is 2x small. |
| IoT for production processes | manufacturing 32% | 2021 | Eurostat | official | same URL | ACTUAL DATA | |
| Eurostat medium-sized share of condition-based maintenance | not in what I read | | | | | UNKNOWN | Medium (the closest proxy to our target) was not given for condition-based maintenance on the page text I got. |
| PdM revenue by enterprise size | large 63.65%; SMEs fastest growth, 36.2% CAGR (2026-2031) | 2025 | Mordor Intelligence | paid analyst teaser | https://www.mordorintelligence.com/industry-reports/predictive-maintenance-market | ACTUAL DATA | A growth forecast with no disclosed method. Also: Mordor attributes SME growth to cloud subscription pricing (their claim, unverified). |
| US small manufacturers' barriers | cost, skills, cybersecurity fear; entry-level suggestion is low-cost pilots | March 2020 | MForesight (U. Michigan), funded by NSF and NIST | academic/government-funded | https://economicgrowth.umich.edu/wp-content/uploads/2021/09/MForesight-Report_Clickable_Final.pdf | ACTUAL DATA (qualitative) | Read via PDF text. No SME PdM adoption percentage in what I read. |
| US mid-sized plant PdM adoption rate | no figure found | n/a | n/a | n/a | n/a | UNKNOWN | Plant Engineering and Reliable Plant surveys do not publish size splits on the opened pages. Deloitte (large only) and McKinsey (50+ employees) bracket the range without isolating mid-market. |
| Rockwell survey size mix | revenue USD 100M to 30B+ | 2025 | Rockwell | vendor | see section 2 | ACTUAL DATA | Mid-market (USD 100M+) is the floor of that survey; no breakdown given in the press release. |

Reading: the only rigorous firm-size data I opened (Eurostat, EU, 2021) shows large firms adopting IoT and condition-based maintenance at about 2x small firms. For the US mid-sized plant it is UNKNOWN. INFERRED: mid-sized sits between the two, but that is my interpolation, not a measured number.

---------------------------------------------------------------------
## Gaps and conflicts

1. Market size is a range, not a number. 2025 global base is about USD 9.21B to 14.09B (1.53x); 2031 forecasts differ 3.45x (23.79B vs 82.17B); CAGRs span 11.4% to 34.14%. None disclose methodology on their free pages, so I cannot rank them. Do not use any as a TAM without a bottom-up count (US plants x asset classes x price).
2. Definitions drift: software vs hardware split, "operational predictive maintenance" (M&M) vs all PdM, and manufacturing-only (R&M, snippet only) vs all industry. Part of the spread is scope, and I cannot say how much.
3. Base years differ (2023 Allied, 2025 Fortune/Mordor/Precedence, 2026 M&M). Do not compare raw numbers across publishers without aligning years.
4. North America share looks tidy (29% to 33%) because it is simply a share of different totals. In dollars, 2025 NA runs from about USD 4.07B (INFERRED from Mordor) to USD 4.54B (Fortune). Precedence US-only is USD 2.26B.
5. Adoption surveys are old or non-comparable: 2016 to 2019 for plant PdM use (51% to 65%, trade-media readers, tiny or undisclosed samples); 2018 for McKinsey; Deloitte 2024 covers only USD 500M+ firms. I found no recent, independent, US, mid-sized-plant PdM adoption survey.
6. Conflict: PdM use 51% (Plant Engineering 2018) vs 65% (Reliable Plant 2019) vs CMMS use 59% to 50% falling over 2017 to 2018 while PdM rose. Likely sampling and definition noise (INFERRED).
7. Conflict inside one publisher: IoT Analytics ROI survey figures (83% positive, 2021) differ from the 95% positive figure on its 2023 page.
8. Untraceable claims to avoid: "38% of manufacturers deployed PdM AI" (IoT Analytics 2025, via stealthagents blog), "47% piloted or deployed" (IDC 2024, search snippet), "80% of PdM initiatives fail" (LLumin citing PwC/Plant Engineering), "30% to 50% downtime reduction" (blogs citing McKinsey/Deloitte).
9. Repeated claim vs corroboration: the pilot-purgatory figures all trace to McKinsey 2018 (re-cited by MForesight and consultant blogs). That is one source, not three.
10. ROI evidence is vendor, consultancy, or showcase-biased (Deloitte 2017 case, IoT Analytics survey of adopters, Lighthouse). No independent controlled evidence found.
11. Not opened: Gartner, IDC, ABI, BCG, ARC Advisory, LNS, Manufacturing Institute PdM data, WEF Lighthouse PDF, McKinsey PDF, Siemens original report, Grand View full report (base value). These are the next places to look if the case needs them.
12. Synthetic reminder: none of this is customer evidence from mid-sized plants. Market-size figures are hypothesis-setting inputs, not validation.
