# Case file, part 3: source register and evidence log

**Case:** AI predictive maintenance for mid-sized US manufacturing plants
**Prepared:** October 3, 2026
**Use:** the answer key for parts 1 and 2. Every source the case file relies on, how reliable it is, and what we refused to use.

## How to read the register

Source quality tiers: **Government** (official statistics or technical guidance), **Academic** (peer-reviewed), **Independent** (not selling a competing product), **Consultancy** (sells related services), **Vendor-sponsored** (a company that sells in this space ran or paid for it), **Paid-analyst teaser** (free landing page of a paid report, no method shown), **Trade press**, **Secondary** (reported by someone else).
Labels: ACTUAL DATA (opened and read), INFERRED (our reasoning), UNKNOWN (not found or not verifiable).
"Not opened" means seen only in a search snippet or blocked. Those are never relied on.

## A. Industry structure and workforce

| Source | Quality | What we used | URL |
|---|---|---|---|
| US Census Bureau, County Business Patterns 2023, national file | Government | Plant counts and employees by size class, NAICS 31 to 33 and six discrete subsectors | https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip |
| US Census Bureau, County Business Patterns 2022 | Government | Year-over-year comparison | https://www2.census.gov/programs-surveys/cbp/datasets/2022/cbp22us.zip |
| BLS Occupational Employment and Wage Statistics, May 2025 (via BLS public API) | Government | Employment and wages for maintenance occupations, and sums inside manufacturing industries | https://www.bls.gov/oes/tables.htm |
| BLS Occupational Outlook Handbook, industrial machinery mechanics, maintenance workers and millwrights | Government | Growth 2025 to 2035, openings, share in manufacturing | https://www.bls.gov/ooh/installation-maintenance-and-repair/industrial-machinery-mechanics-and-maintenance-workers-and-millwrights.htm |
| BLS Occupational Outlook Handbook, general maintenance and repair workers | Government | Employment, outlook | https://www.bls.gov/ooh/Installation-Maintenance-and-Repair/General-maintenance-and-repair-workers.htm |
| FRED, BEA series VAPGDPMA (manufacturing value added share of GDP) | Government via FRED | GDP share 2025 to 2026 | https://fred.stlouisfed.org/graph/fredgraph.csv?id=VAPGDPMA |
| FRED, BLS CES series MANEMP | Government via FRED | Manufacturing employment, September 2026 | https://fred.stlouisfed.org/graph/fredgraph.csv?id=MANEMP |
| NAM, Facts About Manufacturing | Secondary (trade association citing BEA, Census, BLS) | Firm counts, value added, compensation | https://nam.org/mfgdata/facts-about-manufacturing-expanded/ |
| Deloitte and The Manufacturing Institute, April 2024 workforce study | Independent consultancy plus industry institute | 3.8 million jobs needed, 1.9 million possibly unfilled, 270,000 maintenance technicians | https://themanufacturinginstitute.org/wp-content/uploads/2024/04/Digital_Skills_Report_April_2024.pdf |
| Deloitte and The Manufacturing Institute, September 2026 press release | Press release only | About 500,000 unfilled technician roles. Verify against the full report before quoting. | https://www.prnewswire.com/news-releases/deloitte-and-mi-study-shows-potential-for-ai-to-accelerate-manufacturing-skills-training-302872788.html |
| NAM Manufacturers' Outlook Survey Q2 2026 (n=215) | Trade association survey, self-selected | 46.95 percent cite workforce attraction and retention | https://nam.org/wp-content/uploads/securepdfs/2026/06/NAM_2026_Q2_Outlook_Survey_Writeup.pdf |
| Census Annual Business Survey technology module story | Government | Confirms no maintenance or sensor adoption item | https://www.census.gov/library/stories/2025/09/technology-impact.html |
| Census working paper CES-WP-20-40 | Government | Survey of Manufacturing Technology ran only 1988 to 1993 | https://www2.census.gov/ces/wp/2020/CES-WP-20-40.pdf |

## B. Maintenance practice and the cost of downtime

| Source | Quality | What we used | URL |
|---|---|---|---|
| US DOE FEMP, O&M Best Practices Guide 3.0, chapter 5 (2010) | Government, old compilation | More than 55 percent reactive, 31 preventive, 12 predictive; claimed savings; top-performer mix | https://www1.eere.energy.gov/femp/pdfs/om_5.pdf |
| NIST AMS 100-18, "The Costs and Benefits of Advanced Maintenance in Manufacturing" (2018) | Government scoping report | "Not well documented"; 15 to 98 percent range; cost as top barrier (92 percent); ideal reactive share | https://nvlpubs.nist.gov/nistpubs/ams/NIST.AMS.100-18.pdf |
| Plant Engineering Maintenance Study 2014 (n=283), on Mobil's site | Vendor-sponsored | 57 percent still rely on reactive | https://www.mobil.com/en/lubricants/for-businesses/industrial/lubricant-expertise/resources/plant-engineering-maintenance-study |
| MaintainX, State of Industrial Maintenance 2025 (n=1,320), press release | Vendor-sponsored | 58 percent of teams react more than half the time (wording inconsistent across its own pages) | https://www.getmaintainx.com/newsroom/state-of-industrial-maintenance-report-2025 |
| UpKeep, State of Maintenance 2026 (n=214) | Vendor-sponsored | Maintenance mix; barriers to preventive work | https://upkeep.com/solutions/state-of-maintenance-2026/ |
| Fluke Reliability and Censuswide survey 2026 (600-plus; US, UK, Germany), press release | Vendor-sponsored | 36 percent reactive, 45 proactive, 18 predictive | https://www.globenewswire.com/news-release/2026/05/07/3289812/0/en/Fluke-Survey-Finds-Predictive-Maintenance-Adoption-Doubles-as-Manufacturers-Boost-Digital-Investment.html |
| ABB Value of Reliability 2023 (n=3,215), via a trade reprint | Vendor-sponsored | $125,000 an hour typical, $103,000 US; mixed sectors | https://www.manufacturingtomorrow.com/story/2023/10/abb-survey-reveals-unplanned-downtime-costs-103000-per-hour-/21457/ |
| Siemens, True Cost of Downtime 2024 | Vendor-sponsored | $1.4 trillion, 11 percent of revenue, $253 million per large plant, 181 interviews | https://assets.new.siemens.com/siemens/assets/api/uuid:1b43afb5-2d07-47f7-9eb7-893fe7d0bc59/TCOD-2024_original.pdf |
| Siemens, True Cost of Downtime 2022 | Vendor-sponsored | $129 million per plant, 56 interviews (shows the baseline moved) | https://assets.new.siemens.com/siemens/assets/api/uuid:3d606495-dbe0-43e4-80b1-d04e27ada920/dics-b10153-00-7600truecostofdowntime2022-144.pdf |
| ServiceMax and Vanson Bourne whitepaper "After the Fall" | Vendor-sponsored | Shows the "$260,000 an hour" figure traces to a 2016 Aberdeen IT-infrastructure report | https://www.panelbuilderus.com/wp-content/uploads/2020/11/After-The-Fall-whitepaper-updated-global-numbers-FINAL-refresh.pdf |
| Deloitte, using predictive technologies for asset maintenance (2017) | Consultancy that sells these services | Uptime, cost and planning-time ranges; unnamed extruder case | https://www.deloitte.com/us/en/insights/industry/manufacturing-industrial-products/industry-4-0/using-predictive-technologies-for-asset-maintenance.html |
| Adu-Amankwa and others, predictive maintenance cost model for CNC SMEs (2019) | Academic | Predicted savings for small and mid-sized machine shops; 19 usable responses | https://strathprints.strath.ac.uk/70056/1/Adu_Amankwa_etal_IJAMT_2019_A_predictive_maintenance_cost_model_for_CNC_SMEs.pdf |

## C. Market size and adoption

| Source | Quality | What we used | URL |
|---|---|---|---|
| Fortune Business Insights, predictive maintenance market | Paid-analyst teaser | $13.65B (2025), $97.37B (2034), 24.30 percent | https://www.fortunebusinessinsights.com/predictive-maintenance-market-102104 |
| Mordor Intelligence | Paid-analyst teaser | $14.09B (2025), $82.17B (2031), 34.14 percent | https://www.mordorintelligence.com/industry-reports/predictive-maintenance-market |
| MarketsandMarkets, operational predictive maintenance | Paid-analyst teaser | $13.89B (2026), $23.79B (2031), 11.4 percent | https://www.marketsandmarkets.com/Market-Reports/operational-predictive-maintenance-market-8656856.html |
| Precedence Research | Paid-analyst teaser | $9.21B (2025), $94.27B (2035), US $2.26B | https://www.precedenceresearch.com/predictive-maintenance-market |
| Allied Market Research | Paid-analyst teaser | $10.1B (2023), $162.1B (2033) | https://www.alliedmarketresearch.com/predictive-maintenance-market |
| Grand View Research press release, January 2026 | Paid-analyst teaser | $98.16B (2033), 27.9 percent | https://www.grandviewresearch.com/press-release/global-predictive-maintenance-market |
| IoT Analytics, predictive maintenance market, November 2023 | Paid-analyst teaser | $5.5B (2022), $14.3B (2028); many solutions below 50 percent accuracy | https://iot-analytics.com/predictive-maintenance-market/ |
| IoT Analytics, ROI survey 2021 | Paid analyst, adopters only | 83 percent positive return, about 100 respondents | https://iot-analytics.com/predictive-maintenance-market-evolution-from-niche-topic-to-high-roi-application/ |
| Plant Engineering 2018 Maintenance Survey | Trade press, vendor-sponsored | 51 percent use predictive maintenance | https://www.plantengineering.com/2018-maintenance-survey-playing-offense-and-defense/ |
| Plant Engineering 2016 Maintenance Study | Trade press | 51 percent run a CMMS | https://www.plantengineering.com/2016-maintenance-study-seven-key-findings/ |
| Reliable Plant predictive maintenance survey 2019 (n about 150) | Trade press, self-selected | 65 percent; skills and data barriers | https://www.reliableplant.com/Read/31707/predictive-maintenance-survey-2019 |
| McKinsey, "How digital manufacturing can escape pilot purgatory" (2018) | Consultancy | Under 30 percent scaled company-wide, 700-plus respondents | https://www.mckinsey.com/capabilities/operations/our-insights/how-digital-manufacturing-can-escape-pilot-purgatory |
| MForesight report (March 2020), funded by NSF and NIST | Academic and government-funded | Re-cites the 84 percent pilot figure; small-manufacturer barriers | https://economicgrowth.umich.edu/wp-content/uploads/2021/09/MForesight-Report_Clickable_Final.pdf |
| Deloitte 2025 Smart Manufacturing Survey (n=600, large US firms) | Consultancy survey | 29 percent AI or machine learning at facility level | https://www.deloitte.com/us/en/about/press-room/deloitte-2025-smart-manufacturing-survey.html |
| IoT Analytics, AI in Machine Building 2026 | Paid analyst, wrong population (machine builders) | Barriers: cost, data, skills | https://iot-analytics.com/ai-in-machine-building-2026-adoption-barriers-use-cases-and-leading-sub-industries/ |
| IIoT World industrial data and AI readiness survey (n=272) | Trade press, self-selected | 54 percent name data quality as the top barrier | https://www.iiot-world.com/artificial-intelligence-ml/industrial-data-and-ai-readiness-survey-2027/ |
| Eurostat, use of Internet of Things in enterprises | Government (EU) | Size split of IoT and condition-based maintenance use | https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_Internet_of_Things_in_enterprises |
| Hakami, Scientific Reports (2024) | Academic | Failure data scarcity and class imbalance | https://pmc.ncbi.nlm.nih.gov/articles/PMC11053123/ |

## D. Competitors and recent events

| Source | Quality | What we used | URL |
|---|---|---|---|
| MaintainX pricing and site | Vendor | Plans, claims | https://www.getmaintainx.com/pricing |
| Fiix pricing and site | Vendor | Plans, claims | https://fiixsoftware.com/pricing/ |
| UpKeep pricing | Vendor | Plans | https://upkeep.com/pricing/ |
| Limble pricing | Vendor | No list prices | https://limble.com/pricing |
| eMaint, Fluke Reliability | Vendor | Positioning | https://www.fluke.com/en-us/products/fluke-software/emaint-cmms |
| IBM Maximo | Vendor | Positioning and cases | https://www.ibm.com/products/maximo |
| Augury | Vendor | Claims on alert ranking and customers | https://www.augury.com/ |
| Siemens Senseye | Vendor | Alert overload framing | https://www.siemens.com/en-us/products/industrial-digitalization-services/senseye-predictive-maintenance/ |
| Samotics | Vendor | Published false-alert rate and recall (vendor claims) | https://www.samotics.com/ |
| Tractian | Vendor | Claims, sensors | https://tractian.com/en |
| AspenTech Mtell, GE Vernova APM, Avathon, Uptake, Nanoprecise, Emerson AMS, Banner | Vendor | Positioning | https://www.aspentech.com/en/products/apm/aspen-mtell ; https://www.gevernova.com/software/products/asset-performance-management ; https://www.avathon.com/ ; https://www.uptake.com/ ; https://www.nanoprecise.io/ ; https://www.emerson.com/en/automation-systems/asset-performance-management/machinery-health-management/ams-wireless-vibration-monitor ; https://www.bannerengineering.com/us/en/products/wireless-sensor-networks/predictive-maintenance-selection/vibration-monitoring.html |
| Autodesk 8-K, agreement to acquire MaintainX (May 28, 2026) | Government filing | About $3.575 billion | https://www.sec.gov/Archives/edgar/data/0000769397/000121390026062125/ea0292483-8k_autodesk.htm |
| The Next Web on Autodesk and MaintainX | Trade press | Context | https://thenextweb.com/news/autodesk-maintainx-36bn-acquisition |
| Business Wire, Rockwell completes Fiix acquisition | Press release | Completion around January 2021 | https://www.businesswire.com/news/home/20210119005062/en/Rockwell-Automation-Completes-the-Acquisition-of-Fiix-Inc.-Cloud-Software-Company-for-Leading-Edge-Maintenance-Solutions |
| Siemens acquires Senseye, June 2022 | Trade press | Acquisition date | https://www.pesmedia.com/siemens-senseye-09062022 |
| TechCrunch, Augury raises $75M at over $1B (Feb 19, 2025) | Press | Funding | https://techcrunch.com/2025/02/19/augury-raises-73m-on-a-1b-valuation-for-ai-to-detect-malfunctions-in-factory-machines/ |
| Crunchbase News, Tractian Series C | Press | $120M, December 2024 | https://news.crunchbase.com/venture/sapphire-led-raise-manufacturing-ai-startup-tractian/ |
| Uptake, joining Bosch announcement | Vendor | Bosch planned acquisition, March 19, 2026 | https://uptake.com/blog/uptake-is-joining-bosch-to-scale-ai-powered-fleet-maintenance-globally/ |
| Plant Services, Limble CPTO on data discipline (July 13, 2026) | Trade press, vendor-authored | CMMS alone does not reach predictive maintenance | https://www.plantservices.com/cmms/article/55390285/data-discipline-why-your-cmms-alone-cant-mature-your-maintenance-program |

## E. The decision-problem evidence

| Source | Quality | What we used | URL |
|---|---|---|---|
| Golightly, Kefalidou and Sharples, Information Systems and e-Business Management (2018), 13 interviews | Academic | Decision fit, integration with planning, black-box outputs hard to compare | https://link.springer.com/article/10.1007/s10257-017-0343-1 |
| Hoffmann and Lasch, Schmalenbach Journal of Business Research (2025), 15 interviews | Academic | False and missed alarms; organizational barriers; tacit knowledge | https://link.springer.com/article/10.1007/s41471-024-00204-3 |
| Behavioral inquiries into predictive maintenance, International Journal of Production Research (2022), 6 experts | Academic, very small sample | Trust and ignoring decision support after errors | https://www.tandfonline.com/doi/full/10.1080/00207543.2022.2154403 |
| Dietvorst, Simmons and Massey, "Algorithm Aversion" (2015), 5 lab studies | Academic, not maintenance | Faster loss of trust in algorithms after an error | https://marketing.wharton.upenn.edu/wp-content/uploads/2016/10/Dietvorst-Simmons-Massey-2014.pdf |
| Hermansa and others, Sensors (2021) | Academic | False-alarm reduction method | https://pmc.ncbi.nlm.nih.gov/articles/PMC8749854/ |
| MDPI Applied Sciences 15(10):5465 (2025) | Academic review | Technical challenges: scarce labels, explainability | https://www.mdpi.com/2076-3417/15/10/5465 |
| Ron Moore, Reliabilityweb, "Is Wrench Time Worth Measuring?" | Trade press | Waiting for permits, access and parts | https://reliabilityweb.com/articles/entry/is-wrench-time-worth-measuring |
| Doc Palmer, Reliable Plant, "Wrench time totals" (2007) | Trade press, one plant | 35 percent in one plant study | https://www.reliableplant.com/Read/5200/wrench-time-totals |
| Plant and Works Engineering, RS and IMechE survey (Oct 2024, about 400, UK and Ireland) | Trade press of distributor-sponsored survey | Paper and Excel use; skills shortage | https://pwemag.co.uk/skills-shortage-tops-maintenance-challenges/ |
| MRO Magazine, Fluke survey (May 2026) | Trade press of vendor-sponsored survey | Skills as top obstacle | https://www.mromagazine.com/2026/05/10/fluke-survey-shows-growth-in-predictive-maintenance-adoption-as-skills-shortages-persist/ |
| Plant Engineering maintenance software survey (March 2023) | Trade press | CMMS and EAM use; integration expectations | https://www.plantengineering.com/maintenance-survey-indicates-shift-to-cloud/ |

## F. Claims we saw and refused to use

These circulate widely. We could not trace them to a primary source, or they trace somewhere other than where they are cited.

| Claim | Where it circulates | Why we do not use it |
|---|---|---|
| "Aberdeen: unplanned downtime costs $260,000 an hour" in manufacturing | Many vendor and trade pages | In the whitepaper we opened it traces to a 2016 Aberdeen report on IT infrastructure uptime. The Aberdeen original was not opened. INFERRED mis-attribution. |
| "80 percent of predictive-maintenance projects fail" | Vendor blog attributing to PwC and Plant Engineering | No study, date or link named |
| "38 percent of manufacturers have predictive-maintenance AI deployed" (IoT Analytics 2025) | A third-party blog | Could not be located on the IoT Analytics site |
| "47 percent piloted or deployed predictive maintenance" (IDC 2024) | Search snippet | Not traced to IDC |
| "70 percent of alerts are ignored" and "42 percent cite alert overload (Gartner)" | Vendor blogs | Attribution unverifiable |
| "46 percent cite poor communication with production" | Trade blog | Not in the Plant Engineering survey we opened |
| "Wrench time rises from 35 percent to 55 to 65 percent" attributed to DOE | Vendor blog | Not found in the DOE guide text we extracted |
| "Best-in-class firms see 3.5 percent versus 12 percent unplanned downtime" (Aberdeen) | Trade blog | No method or primary source |
| "77.5 percent cite a trust barrier" | Vendor blogs | The matching document is a software debugging paper, not maintenance |
| "49 percent of plants still use spreadsheets; 70 percent have a CMMS" | A 2025 compilation and an aggregator | Secondhand with weak attribution |
| Siemens "$150,000 an hour" for small and medium manufacturers | Siemens report | Used only as a stated aside, labeled as having no method |
| Discrete manufacturing downtime "$10,000 to $50,000 an hour" | Trade aggregator | No traceable primary source |

## G. Conflicts and gaps, in one place

**Conflicts (not resolved, shown so nobody averages them):**
- Maintenance-mix baselines: DOE more than 55 percent reactive, Plant Engineering 2014 57 percent use reactive, UpKeep 30.9 percent mostly reactive, MaintainX 58 percent react more than half the time, Fluke 36 percent reactive. Different measures, populations and years.
- What a good reactive share is: DOE under 10 percent for top performers, NIST 30 to 40 percent as an ideal in some literature.
- Savings from predictive maintenance: 5 to 10 percent (Deloitte), 25 percent (same Deloitte paper), 8 to 12 and over 30 to 40 percent (DOE), 40 percent (Siemens clients), 15 to 98 percent (NIST literature range).
- Siemens' own editions: per-plant annual downtime cost $129 million (2022) versus $253 million (2024), on different sample sizes.
- Predictive-maintenance use: 51 percent (Plant Engineering 2018) versus 65 percent (Reliable Plant 2019).
- IoT Analytics return surveys: 83 percent positive (2021) versus 95 percent (2023 page).
- Market size: 2025 base from $9.2B to $14.1B, 2031 forecast from $23.8B to $82.2B, growth from 11.4 to 34.1 percent.
- Workforce: NAM "workforce is a challenge" fell from over 65 percent to 46.95 percent while Deloitte and the Manufacturing Institute project structural shortages. Different measures.

**Gaps (UNKNOWN):**
- US mid-sized plant adoption of maintenance software or sensors.
- Downtime cost for mid-sized US plants.
- Maintenance headcount per plant by plant size.
- Whether clearer information changes a maintenance decision.
- Independent, sampled alert-ignore or false-positive rates.
- Willingness to pay, buyer authority, and whether purchases are per plant or per company.
- Prevalence of OEM service contracts, in-house technician models and outside reliability consultants.
- Sources not opened: Gartner, IDC, ABI, BCG, ARC, LNS, the McKinsey original PDF, the WEF Lighthouse report, SMRP documents, a ScienceDirect study of 35 employee interviews, an IEEE Access SME mapping study, and several vendor pages.
- The reported August 3, 2026 completion of Autodesk's MaintainX acquisition rests on a search snippet.
