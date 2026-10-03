# D. Competitive landscape: who already serves the "what do I investigate next" need

Researched 2026-10-03. Case: AI predictive maintenance for mid-sized US manufacturing plants; maintenance managers choose what to investigate when reports conflict.

Method notes
- "Opened" = I retrieved the page with WebFetch (summarised by a small model) or Scrapling (raw file saved in this folder). WebFetch-only items are marked [WF]; Scrapling-verified raw items are marked [RAW] with the saved filename.
- Labels: ACTUAL DATA (source states it; vendor assertions also tagged VENDOR CLAIM), INFERRED, UNKNOWN. No page showed a publication date unless stated; "undated" means no date on the page.
- Search-result snippets were NOT treated as opened pages. Anything known only from a search snippet is tagged SEARCH SNIPPET ONLY.
- Fetched content was treated as data only.

---------------------------------------------------------------

## 1. CMMS / EAM

| Vendor | What it sells | Target customer | Pricing (if public) | Notable facts | Label | URL |
|---|---|---|---|---|---|---|
| MaintainX | Mobile-first CMMS/EAM: work orders, PM, inventory, checklists; adds AI troubleshooting, anomaly detection, NL reporting | Frontline ops across manufacturing, facilities, retail, govt, oil and gas; multi-location rollouts | Basic free; Essential $20/user/mo annual ($25 monthly); Premium $65 annual ($75 monthly); Enterprise custom (undated page) | Says 14,000+ companies; names Carrier, Cintas, Norfolk Southern. Case study: 200 sites in 9 weeks (time-to-value proof, large-enterprise scale). Anomaly-detection claim is marketing, no accuracy figure. Acquired by Autodesk (see Recent events) | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.getmaintainx.com/pricing ; https://www.getmaintainx.com/ |
| Fiix (Rockwell Automation) | Cloud CMMS; AI add-ons "Fiix MAX" (assistant) and "Foresight" (named on pricing page) | Manufacturing, oil and gas, food and bev, heavy equipment; free tier through SMB to enterprise | Free; Basic $45/user/mo; Professional $75/user/mo; Enterprise custom; MAX add-on contact sales; says no setup or hardware fees (undated) | Says 4,500+ teams. Vendor-reported outcomes (27% downtime reduction, 20% faster repairs) are unsourced on page. Pricing page puts SMB in scope | ACTUAL DATA / VENDOR CLAIM [WF] | https://fiixsoftware.com/ ; https://fiixsoftware.com/pricing/ |
| Limble CMMS | CMMS with standard / premium / enterprise tiers | Teams improving PM through multi-location operations | Prices NOT shown; price calculator only | Limble's CPTO (Jason Penkethman, 13 Jul 2026) argues CMMS alone does not reach predictive maintenance without data discipline (see Section 5) | ACTUAL DATA [WF] | https://limble.com/pricing |
| UpKeep | CMMS/EAM with Essential / Premium / Professional / Enterprise plans | Small teams and single sites getting off spreadsheets and paper, up to multi-site | Essential $24/user/mo; Premium $55/user/mo; Professional and Enterprise by quote; implementation packages from $500 (undated) | Explicitly positions entry tier as moving off spreadsheets/paper | ACTUAL DATA [WF] | https://upkeep.com/pricing/ |
| IBM Maximo | EAM + APM + asset investment planning suite with embedded AI | Large asset-heavy orgs: utilities, transport, manufacturing, healthcare, govt | Credit-based "AppPoints" licensing; no figures | Client-managed or SaaS (incl. AWS Marketplace). Case studies are large (TfL, Downer, power plants), none mid-sized plant. Page does not address mid-market | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.ibm.com/products/maximo |
| eMaint (Fluke Reliability) | CMMS + EAM | "Single-plant facilities to Fortune 500" | Not found | Says 150,000+ users; Gartner "visionary" 2022 per Fluke; supports small pilot then rollout | ACTUAL DATA / VENDOR CLAIM [RAW emaint.md] | https://www.fluke.com/en-us/products/fluke-software/emaint-cmms |
| SAP, Infor | Not researched | n/a | n/a | NOT OPENED. SAP appears only as an integration partner on Tractian and Samotics pages | UNKNOWN | n/a |

## 2. Predictive maintenance / APM platforms

| Vendor | What it sells | Target customer | Pricing | Notable facts | Label | URL |
|---|---|---|---|---|---|---|
| Augury | Sensors + AI for machine health; now "Industrial AI Workforce" with role-based agents | Plant managers, maintenance and reliability; food and bev, CPG, chemicals, metals, etc. | Not public | Says 170+ manufacturers in 40+ countries; names PepsiCo, Nestle, DuPont, Hershey. Says alerts are ranked and give root cause, urgency, recommended action. Contrasts itself with "alerts that never stop" lacking context. Forrester TEI 310% ROI is VENDOR CLAIM. Deployment from self-serve to white-glove. TechCrunch: 80% of deployments brownfield | ACTUAL DATA / VENDOR CLAIM [RAW augury.md; WF TechCrunch] | https://www.augury.com/ ; https://techcrunch.com/2025/02/19/augury-raises-73m-on-a-1b-valuation-for-ai-to-detect-malfunctions-in-factory-machines/ |
| Siemens Senseye Predictive Maintenance | Cloud SaaS PdM (bought 2022) | Page cases are enterprise/multi-site (BlueScope Steel, Sachsenmilch, auto). Search snippet says small/mid/enterprise (SEARCH SNIPPET ONLY) | Contact sales. Third-party directory prices unreliable | Page names the pain: teams "overwhelmed by alerts without clear priorities"; makes no false-positive or explainability claim. No time-to-value figure. 2022 press: up to 50% less unplanned downtime (VENDOR CLAIM, PES article) | ACTUAL DATA [WF] | https://www.siemens.com/en-us/products/industrial-digitalization-services/senseye-predictive-maintenance/ |
| Samotics (SAM4) | Electrical-signature analysis of motors from the cabinet, hardware + cloud + engineer review | Water, oil and gas, mining, chemicals, pulp and paper, airports; hard-to-instrument assets | Not public | VENDOR CLAIM: 2.1% post-review false-alert rate and 95.5% recall (1,402 alerts / 1,437 faults, trailing 12 months); site notes strongest ROI evidence is customer-reported. Ambiguous detections reviewed by Samotics engineers before reaching customer. Each alert carries diagnosis, severity, evidence, action. Install under 60 min per asset | ACTUAL DATA / VENDOR CLAIM [RAW samotics.md lines 178, 388, 368] | https://www.samotics.com/ |
| AspenTech Mtell | Predictive failure-pattern detection, APM | Oil and gas, mining, power, chemicals, food and bev | Not public | VENDOR CLAIM: warns up to 90 days ahead; cites YPF "eliminating alert fatigue". Integrates with EAM/ERP and Emerson AMS. Process-industry skew | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.aspentech.com/en/products/apm/aspen-mtell |
| GE Vernova APM | Meridium, SmartSignal and related APM modules | Oil and gas, power, mining, pulp and paper, chemicals, advanced manufacturing | Not public | Page does not address false positives or explainability. Cases: Xcel, SOCAR, Sasol (utility/energy scale). Composable modules, AWS partnership | ACTUAL DATA [WF] | https://www.gevernova.com/software/products/asset-performance-management |
| Avathon (ex-SparkCognition) | "Autonomous operations" AI platform: knowledge/ontology, decision intelligence, governance | Aerospace, energy, govt/defense, manufacturing, mining, supply chain | Not public | Page says "formerly SparkCognition" (rebrand; date not verified). Customers: National Grid, Airbus, Orsted. Moved from PdM point product to agentic platform framing | ACTUAL DATA [WF] | https://www.avathon.com/ |
| Uptake | PdM for fleets (trucking, bus, construction, mining, federal) | Fleet operators, not plant maintenance | Not public | Now fleet-focused. Bosch announced planned acquisition 19 Mar 2026. Includes "4x ROI" United Road case (VENDOR CLAIM) | ACTUAL DATA [WF] | https://www.uptake.com/ |
| Seeq, Honeywell Forge, PTC | Not opened | n/a | n/a | Seeq: Series D $50M Aug 2024 per SEARCH SNIPPET ONLY | UNKNOWN | n/a |

## 3. Condition-monitoring hardware / sensors

| Vendor | What it sells | Target customer | Pricing | Notable facts | Label | URL |
|---|---|---|---|---|---|---|
| Tractian | Vibration/temperature sensors + AI diagnostics + CMMS/work-order app | Says 2,000 manufacturers; names Whirlpool, Unilever, Cummins, McKesson | Calculator, no list prices on opened page. Claims "3-month payback" (VENDOR CLAIM). Sensor battery 3-5 yrs, 4G/LTE | No accuracy or false-positive figures and no time-to-value on homepage. Sells monitoring and CMMS together, so it spans categories 1 and 3 | ACTUAL DATA / VENDOR CLAIM [RAW tractian.md; WF pricing page] | https://tractian.com/en ; https://tractian.com/en/solutions/condition-monitoring/vibration-sensor/pricing |
| Nanoprecise | MachineDoctor 6-in-1 sensor, energy products, AI analytics | 12+ verticals; Petronas, Tata Steel, Cameco, Weyerhaeuser | Not public (ROI calculators only) | Headline "Predictive Maintenance that isn't Noisy"; no false-alert metric on page | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.nanoprecise.io/ |
| Emerson AMS Wireless Vibration Monitor | WirelessHART vibration/temp sensors, PeakVue analytics; capex or "AMS Machine Works Connect" monitoring-as-a-service | Process/manufacturing plants with many rotating assets, moving off manual routes | Quote only | Customers: Shell, HF Sinclair (350+ assets), Evergy (5,300+ sensors), E&J Gallo. Large-site skew | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.emerson.com/en/automation-systems/asset-performance-management/machinery-health-management/ams-wireless-vibration-monitor |
| Banner Engineering | Modular wireless vibration sensors, nodes, gateways, kits ("no programming required" for kits) | Operations managers monitoring motors, fans, pumps | "Starting at" placeholders, no numbers on fetched text | Self-assembly kit model, lower-touch than platform vendors | ACTUAL DATA / VENDOR CLAIM [WF] | https://www.bannerengineering.com/us/en/products/wireless-sensor-networks/predictive-maintenance-selection/vibration-monitoring.html |
| SKF Enlight; Fluke Reliability | Wireless vibration sensors / test instruments, software | n/a | n/a | SKF and Fluke vendor pages returned empty or generic content (WF returned only header / generic page). NOT OPENED for substance. "SKF aimed at mid-market and enterprise" is SEARCH SNIPPET ONLY from a third-party site | UNKNOWN | https://www.skf.com/us/products/condition-monitoring-systems (NOT OPENED) |

## 4. Status quo (alternatives to buying software)

| Alternative | What the evidence says | Label | URL |
|---|---|---|---|
| Spreadsheets and paper | Plant Engineering reported that only 51% of surveyed plants ran a CMMS in its 2016 maintenance study (49% did not). This is 10 years old. A May 2025 Sockeye compilation says ~49% of plants still use in-house spreadsheets and ~70% have CMMS/EAM, and that 87% use PM while 59% of those spend under half their time on it. The compilation names Plant Engineering 2021, MaintainX 2024, ATS 2020, Limble 2024, Siemens 2022 as underlying sources but does not tie each stat to one, so these are secondhand and mixed-date | 2016 stat: ACTUAL DATA (dated). Sockeye stats: SECONDHAND, weak attribution | https://www.plantengineering.com/cmms-adoption-enhances-maintenance-strategies/ [RAW pe.md] ; https://www.getsockeye.com/blog/maintenance-statistics/ [WF] |
| Reactive work remains large | Limble's CPTO, writing 13 Jul 2026, says over a third of asset-intensive orgs report more than 50% of maintenance work unplanned and one in four cite reactive work or poor maintenance history as a major constraint. No underlying study named in what I saw; vendor-authored | VENDOR CLAIM | https://www.plantservices.com/cmms/article/55390285/data-discipline-why-your-cmms-alone-cant-mature-your-maintenance-program [WF] |
| Downtime stakes | Siemens "True Cost of Downtime 2024": ~$1.4T/yr across world's 500 largest firms, 11% of revenue. Only a search snippet; page not opened. Sample is global giants, not mid-sized plants | SEARCH SNIPPET ONLY, NOT OPENED | https://www.automation.com/article/white-paper-true-costs-downtime-2024 |
| OEM service contracts; in-house technicians; third-party reliability consultants (e.g. IDCON) | No manufacturing-specific prevalence source found. My search returned IT/data-center third-party maintenance surveys, which are not applicable | UNKNOWN | n/a |

## 5. Recent events

| Date | Event | Source (opened?) | Label |
|---|---|---|---|
| Nov 2020 announced; closing reported Jan 2021 | Rockwell completes acquisition of Fiix (AI-enabled CMMS, Toronto). Press release confirms completion; reported in Software & Control segment. ~$290M price appears only in search snippets (MarketScreener), not in text I opened | https://www.businesswire.com/news/home/20210119005062/en/Rockwell-Automation-Completes-the-Acquisition-of-Fiix-Inc.-Cloud-Software-Company-for-Leading-Edge-Maintenance-Solutions [RAW fiix_bw.md]. Note a Jan 2021 BusinessWire URL date vs "closed Dec 2020" in snippets: not reconciled | ACTUAL DATA (completion); $290M UNVERIFIED |
| 9 Jun 2022 | Siemens Digital Industries acquires Senseye (Southampton UK); 100% subsidiary effective 1 Jun 2022; terms not disclosed in article | https://www.pesmedia.com/siemens-senseye-09062022 [RAW senseye_pes.md] | ACTUAL DATA |
| Aug 2023; Dec 2024 | Tractian: $45M growth round Aug 2023 led by General Catalyst; $120M Series C Dec 2024 led by Sapphire Ventures; >$180M raised in total per Crunchbase News | https://news.crunchbase.com/venture/sapphire-led-raise-manufacturing-ai-startup-tractian/ [RAW tractian_cb.md] | ACTUAL DATA. $720M valuation only from search snippets/aggregators |
| 19 Feb 2025 | Augury: $75M first tranche of Series F led by Lightrock, valuation over $1B, ~$100M total expected; revenue up 5x since 2021 round; 80% of deployments brownfield | https://techcrunch.com/2025/02/19/augury-raises-73m-on-a-1b-valuation-for-ai-to-detect-malfunctions-in-factory-machines/ [WF] | ACTUAL DATA (reported by TechCrunch) |
| 9 Jul 2025 | MaintainX: $150M Series D at $2.5B valuation, co-led by Bain Capital Ventures and Bessemer | SEARCH SNIPPET ONLY (BusinessWire page returned 403/empty; Bloomberg not opened) | NOT OPENED |
| 28 May 2026 (8-K); completed 3 Aug 2026 | Autodesk to acquire MaintainX for approx. $3.575B (merger agreement, 8-K). Completion on 3 Aug 2026 is from a search snippet only; TNW article (29 May 2026) says integration work begins "after August" | https://www.sec.gov/Archives/edgar/data/0000769397/000121390026062125/ea0292483-8k_autodesk.htm [RAW adsk8k.md] ; https://thenextweb.com/news/autodesk-maintainx-36bn-acquisition [RAW tnw.md] | ACTUAL DATA (agreement); completion date UNVERIFIED |
| 19 Mar 2026 | Bosch announces planned acquisition of Uptake (fleet predictive maintenance); financial terms not disclosed (per snippet) | https://uptake.com/blog/uptake-is-joining-bosch-to-scale-ai-powered-fleet-maintenance-globally/ [WF] | ACTUAL DATA (announcement); closing UNKNOWN |
| Date not verified | SparkCognition rebrands as Avathon (platform repositioned to autonomous operations) | https://www.avathon.com/ [WF] (date from MMH snippet not opened) | ACTUAL DATA (name change); date UNKNOWN |
| Shutdowns | None found for PdM/CMMS vendors in my searches. Absence of evidence only; not a systematic search | n/a | UNKNOWN |

Pattern (INFERRED): both CMMS leaders (Fiix, MaintainX) are now owned by bigger software or automation parents, and the PdM leaders (Augury, Tractian) are well funded. The space is consolidating at the CMMS layer and crowded with funded sensor-plus-AI players.

## 6. Who says they serve mid-sized plants, and time-to-value claims

- Fiix pricing tiers run from Free to $75/user/mo and say no setup or hardware fees. INFERRED: aimed at SMB to mid-size. https://fiixsoftware.com/pricing/
- UpKeep: Essential/Premium aimed at small and growing teams. https://upkeep.com/pricing/
- eMaint: "single-plant" through Fortune 500. https://www.fluke.com/en-us/products/fluke-software/emaint-cmms
- Banner: self-assembly kit, no programming. Positioning toward smaller buyers is INFERRED.
- Tractian: calls out 2,000 manufacturers and a calculator; no explicit mid-size statement on the homepage.
- Augury, Samotics, Siemens Senseye, GE, Aspen, Maximo, Emerson: customer lists skew to large enterprises or process industries. None of the opened pages said "mid-sized plant" outright. Siemens mid-market positioning is a search snippet only.
- Time-to-value claims (all VENDOR CLAIM): MaintainX 200 sites in 9 weeks; Samotics install under 60 min per asset; Tractian "3-month payback"; Augury customer quote of value "within a couple of weeks" (RAW augury.md line 439, customer testimonial); Fiix: none stated; Senseye: none stated.

## 7. Alert quality, false positives, data context, explainability: what incumbents emphasise

- Everyone's pitch is "more signal, less noise." Augury sells ranked alerts with root cause, urgency and action. Nanoprecise sells "isn't noisy." Aspen cites eliminating alert fatigue. Siemens Senseye names alert overload as the problem it solves. (Opened pages above.)
- Only Samotics publishes a measured false-alert rate and recall, and it gets there by adding human engineer review of ambiguous detections before the customer sees them. VENDOR CLAIM; sample sizes stated on page. INFERRED: even a leader treats ambiguous detections as a human-judgment problem.
- Augury, Samotics and Fiix MAX attach diagnosis, severity, evidence or recommended action to alerts. Model-level explainability (why the model fired) is not claimed by GE Vernova or Siemens on the pages opened.
- Nobody opened frames the problem as conflicting reports from different sources (technician, operator, CMMS history, sensor) needing adjudication. Vendors frame it as missing or noisy sensor data. Limble's own CPTO frames it as poor data discipline. INFERRED: the "which report do I believe" decision is largely unaddressed in vendor messaging; it is not proven absent.
- Independent evidence on false-alarm rates: NONE found. Figures such as "42% of teams cite alert overload (Gartner)" and "70% of alerts ignored" came from search snippets of vendor blogs (oxmaint etc.) with unverifiable attribution. Do not use. Reliable Plant "false alarm problem" expert column located but could not be read. UNKNOWN.

## 8. Gaps and conflicts

- Tractian Series C lead: Crunchbase News says Sapphire Ventures; an aggregator (salestools.io) said Tiger Global and a September 2024 date. Use Crunchbase; the aggregator is wrong or unreliable.
- Tractian HQ: Crunchbase says Atlanta; aggregator says Sao Paulo. Not resolved (company has Brazilian origin; not verified here).
- Fiix timing: "closed December 2020" (search snippets) vs BusinessWire release dated around 19 Jan 2021. Not reconciled.
- Autodesk-MaintainX completion date 3 Aug 2026 comes only from a search snippet. Verify in Autodesk 10-Q (sec.gov links seen but not opened).
- Not opened or failed: MaintainX BusinessWire and Bloomberg funding pages; SKF, Fluke Reliability, SAP, Infor, Seeq, Honeywell, PTC vendor pages; Siemens True Cost of Downtime report; Reliable Plant false-alarm column.
- WebFetch summaries are model-generated; the key numbers I leaned on most (Samotics, Augury, Tractian, eMaint, Fiix/Fiix BW, Autodesk 8-K, Plant Engineering 2016) were cross-checked in raw saved files.
- No source for the prevalence of OEM contracts, in-house tech models, or outside reliability consultants in US manufacturing.
- No independent (non-vendor) mid-sized-plant buyer evidence at all. Everything about mid-size fit is vendor positioning or inference.
- Pricing public only for MaintainX, Fiix and UpKeep (per-user CMMS). PdM and sensor pricing is quote-based, so INFERRED enterprise-style sales motion.
