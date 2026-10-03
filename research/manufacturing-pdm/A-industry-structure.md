# A. US manufacturing industry structure and the maintenance workforce

Prepared 2026-10-03. Geography: United States. Scope: industry and market research only, nothing built.
Labels: ACTUAL DATA = read directly in a source I opened; INFERRED = my arithmetic (shown); UNKNOWN = not found.
Local files (this folder): cbp23us.txt, cbp22us.txt (Census bulk files), bls_oews.json (BLS API pull), mi_2024.txt, nam_q2_2026.txt, ces2040.txt. Scripts: cbp.py, cbp2.py, bls.py, bls2.py.

Terminology: CBP counts establishments (single physical locations) with paid employees. A "plant" is treated as an establishment. Size class = employees at the establishment, week of March 12. CBP "emp" per size class = employees working in establishments of that class. Note: Census api.census.gov returned "Missing Key" without an API key, so I used the Census bulk files instead (same publisher, same data).

## 1. Manufacturing establishments (NAICS 31-33) by employment-size class

Source file: Census County Business Patterns (CBP), national file, all legal forms (lfo "-"), NAICS code "31----" (this is the Manufacturing sector 31-33 row; checked: the size classes sum exactly to the row total, and the 21 three-digit subsectors sum to the same total).
URL 2023: https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip (opened, parsed)
URL 2022: https://www2.census.gov/programs-surveys/cbp/datasets/2022/cbp22us.zip (opened, parsed)

### 1a. All manufacturing, CBP 2023 (latest available year I found)
| Size class (employees per establishment) | Establishments | Employees in class | Label |
|---|---|---|---|
| Total | 284,452 | 12,335,234 | ACTUAL DATA |
| <5 | 102,567 | 192,694 | ACTUAL DATA |
| 5-9 | 49,034 | 328,510 | ACTUAL DATA |
| 10-19 | 42,982 | 591,968 | ACTUAL DATA |
| 20-49 | 42,477 | 1,328,624 | ACTUAL DATA |
| 50-99 | 21,365 | 1,503,015 | ACTUAL DATA |
| 100-249 | 16,896 | 2,610,858 | ACTUAL DATA |
| 250-499 | 5,747 | 1,979,361 | ACTUAL DATA |
| 500-999 | 2,347 | 1,584,859 | ACTUAL DATA |
| 1000+ | 1,037 | 2,215,345 | ACTUAL DATA |
| 100-499 combined (provisional "mid-sized") | 22,643 | 4,590,219 | INFERRED: 16,896 + 5,747 = 22,643; 2,610,858 + 1,979,361 = 4,590,219 |
| 100-499 share of total | 8.0% of establishments; 37.2% of employees | | INFERRED: 22,643/284,452; 4,590,219/12,335,234 |
| 50-499 combined | 44,008 establishments | | INFERRED: 21,365 + 22,643 |
| 50-999 combined | 46,355 establishments | | INFERRED: 44,008 + 2,347 |

Publisher: US Census Bureau. Year: 2023 (employment as of week of March 12, 2023).

### 1b. All manufacturing, CBP 2022 (for comparison)
| Size class | Establishments | Employees in class | Label |
|---|---|---|---|
| Total | 285,500 | 12,188,330 | ACTUAL DATA |
| <5 | 103,386 | 190,661 | ACTUAL DATA |
| 5-9 | 49,664 | 332,819 | ACTUAL DATA |
| 10-19 | 43,208 | 594,226 | ACTUAL DATA |
| 20-49 | 42,130 | 1,318,088 | ACTUAL DATA |
| 50-99 | 21,313 | 1,499,049 | ACTUAL DATA |
| 100-249 | 16,807 | 2,597,489 | ACTUAL DATA |
| 250-499 | 5,727 | 1,978,888 | ACTUAL DATA |
| 500-999 | 2,254 | 1,525,233 | ACTUAL DATA |
| 1000+ | 1,011 | 2,151,877 | ACTUAL DATA |
| 100-499 combined | 22,534 establishments; 4,576,377 employees | | INFERRED: 16,807 + 5,727; 2,597,489 + 1,978,888 |

### 1c. Discrete-manufacturing subsectors, CBP 2023 (establishments by size class)
URL: https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip (opened). Publisher: US Census Bureau. Year 2023. Counts are ACTUAL DATA; the 100-499 columns are INFERRED (100-249 plus 250-499).

| Subsector | Total est. | Total emp. | 50-99 est. | 100-249 est. | 250-499 est. | 100-499 est. | 100-499 emp. | 500-999 est. | 1000+ est. |
|---|---|---|---|---|---|---|---|---|---|
| 332 Fabricated metal | 53,790 | 1,441,471 | 3,900 | 2,314 | 532 | 2,846 | 528,582 | 130 | 27 |
| 333 Machinery | 21,668 | 1,086,146 | 2,115 | 1,560 | 503 | 2,063 | 409,516 | 212 | 89 |
| 336 Transportation equipment | 11,691 | 1,682,910 | 1,295 | 1,368 | 682 | 2,050 | 460,116 | 353 | 261 |
| 335 Electrical equipment/appliances | 5,398 | 369,456 | 558 | 475 | 210 | 685 | 144,161 | 87 | 41 |
| 326 Plastics and rubber | 11,392 | 815,991 | 1,730 | 1,532 | 482 | 2,014 | 402,817 | 125 | 65 |
| 334 Computer and electronic | 11,262 | 815,444 | 1,120 | 922 | 363 | 1,285 | 263,439 | 180 | 116 |
| Six subsectors combined | | | | | | 10,943 | 2,208,631 | | |

Six-subsector 100-499 total is INFERRED by addition: 10943 establishments, 48.3% of the all-manufacturing 22,643, and 2208631 employees.

Note: counts are establishments, not companies. A company with several 100-499 plants counts several times. Other subsectors (food 311, chemicals 325, primary metals 331, etc.) are not shown but are in the same file.

### 1d. Firms (not establishments), from a NAM summary of Census data
| Metric | Value | Year | Publisher | URL | Label | Note |
|---|---|---|---|---|---|---|
| Manufacturing firms, total | 239,265 | 2022 | NAM (citing BEA, Census, BLS) | https://nam.org/mfgdata/facts-about-manufacturing-expanded/ | ACTUAL DATA (secondary: NAM page; I did not open the SUSB table) | Firms, not establishments, so lower than 285,500 establishments |
| Firms under 500 employees | 235,088 (98.3%) | 2022 | NAM | same | ACTUAL DATA (secondary) | |
| Firms under 100 employees | 93.1% | 2022 | NAM | same | ACTUAL DATA (secondary) | |
| Share of sector employees at firms with 500+ employees | 59.1% | 2022 | NAM | same | ACTUAL DATA (secondary) | Firm size is not plant size. A 200-person plant can belong to a 5,000-person firm |
| SUSB tables by enterprise size | NOT OPENED | | Census | https://www2.census.gov/programs-surveys/susb/datasets/ | UNKNOWN | Directory listing exists (through 2022). I used CBP for plant-level counts instead |

## 2. Manufacturing contribution to GDP and employment

| Metric | Value | Year | Publisher | URL | Label | Note |
|---|---|---|---|---|---|---|
| Manufacturing value added as % of GDP | 2025Q1 9.5, Q2 9.5, Q3 9.6, Q4 9.5; 2026Q1 9.4, Q2 9.7 (percent) | 2025 to Q2 2026 | BEA (series VAPGDPMA), read via FRED CSV | https://fred.stlouisfed.org/graph/fredgraph.csv?id=VAPGDPMA | ACTUAL DATA | FRED republishes BEA; I did not open bea.gov. NAM states 9.4% for Q1 2026, consistent. A web-search summary quoted slightly different 2025 values (9.4/9.4/9.5/9.4); I trust the CSV I read. BEA revises, so cite the vintage |
| Manufacturing value added, 2025 | $2.90 trillion | 2025 | NAM (citing BEA) | https://nam.org/mfgdata/facts-about-manufacturing-expanded/ | ACTUAL DATA (secondary) | Q1 2026 annualized: $3.0 trillion |
| Manufacturing employment (CES) | 12,652 thousand (Sept 2026); 12,597 thousand (Apr 2026) | Sept 2026 | BLS CES series MANEMP, read via FRED | https://fred.stlouisfed.org/graph/fredgraph.csv?id=MANEMP | ACTUAL DATA | Thousands of jobs, seasonally adjusted |
| Manufacturing employment | 12,638,000 | Aug 2026 | NAM (citing BLS) | https://nam.org/mfgdata/facts-about-manufacturing-expanded/ | ACTUAL DATA (secondary) | FRED pull shows 12,643 thousand for Aug; small vintage difference |
| Manufacturing employment, CBP | 12,335,234 | March 2023 | Census CBP | see section 1 | ACTUAL DATA | Different concept than CES (establishments with paid employees, March pay period) |
| Average compensation per manufacturing employee | $106,691 | 2024 | NAM | https://nam.org/mfgdata/facts-about-manufacturing-expanded/ | ACTUAL DATA (secondary) | Wages plus benefits |
| Direct bea.gov pages | NOT OPENED | | | | | |

## 3. BLS maintenance occupations (OEWS and Occupational Outlook Handbook)

Source for employment and wages: BLS OEWS May 2025 national estimates, pulled through the public BLS API (https://api.bls.gov/publicAPI/v2/timeseries/data/, series IDs OEUN0000000{industry}{SOC}{datatype}; 01 employment, 04 annual mean wage, 13 annual median wage). I confirmed 13 = median because 49-9071 returned $49,590, which matches the BLS OOH page I read. OEWS table landing page: https://www.bls.gov/oes/tables.htm (opened via Scrapling; it lists May 2025 as the latest release, but the xlsx zips returned 403, so the API is the source). Year: May 2025.

### 3a. All industries, May 2025
| Occupation (SOC) | Employment | Mean annual wage | Median annual wage | Label |
|---|---|---|---|---|
| Industrial machinery mechanics (49-9041) | 439,640 | $68,460 | $64,520 | ACTUAL DATA |
| Maintenance workers, machinery (49-9043) | 60,020 | $64,610 | $60,850 | ACTUAL DATA |
| General maintenance and repair workers (49-9071) | 1,529,700 | $53,780 | $49,590 | ACTUAL DATA |
| First-line supervisors of mechanics, installers, repairers (49-1011) | 617,500 | $85,220 | $79,860 | ACTUAL DATA |
| Electrical and electronic engineering technologists/technicians (17-3023) | 95,130 | $80,680 | $78,190 | ACTUAL DATA |
| Industrial engineering technologists/technicians (17-3026) | 75,570 | $70,700 | $66,120 | ACTUAL DATA |
| Electro-mechanical and mechatronics technologists/technicians (17-3024) | 15,520 | $76,420 | $73,900 | ACTUAL DATA |

### 3b. Employment inside manufacturing, May 2025
The API returned no single "manufacturing (31-33)" aggregate series, so I summed the 21 three-digit manufacturing industries (311-339). The sums are my arithmetic. Medians cannot be summed, so they are shown for discrete subsectors only.
| Occupation | Sum across NAICS 311-339 | Share of all-industry employment | Label |
|---|---|---|---|
| 49-9041 Industrial machinery mechanics | 232,480 | 52.9% (232,480 / 439,640) | INFERRED. Roughly matches OOH "51% in manufacturing" |
| 49-9043 Maintenance workers, machinery | 32,460 | 54.1% (32,460 / 60,020) | INFERRED |
| 49-9071 General maintenance and repair | 206,750 | 13.5% (206,750 / 1,529,700) | INFERRED. OOH says 13% |
| 49-1011 First-line supervisors of mechanics | 63,880 | 10.3% (63,880 / 617,500) | INFERRED |
| 17-3026 Industrial engineering techs | 58,200 | 77.0% (58,200 / 75,570) | INFERRED, lower bound: industries 315 and 316 returned no value and were treated as missing, not zero |

Combined 49-9041 + 49-9043 + 49-9071 in manufacturing = 232,480 + 32,460 + 206,750 = 471,690 (INFERRED). Millwrights (49-9044) were not pulled.

Selected discrete subsectors, May 2025 (employment / median annual wage), ACTUAL DATA via BLS API:
| Subsector | 49-9041 | 49-9043 | 49-9071 | 49-1011 |
|---|---|---|---|---|
| 332 Fabricated metal | 18,330 / $61,610 | 2,730 / $59,490 | 23,820 / $59,320 | 5,290 / $84,770 |
| 333 Machinery | 24,740 / $64,050 | 2,090 / $58,590 | 12,870 / $60,240 | 4,880 / $93,470 |
| 336 Transportation equipment | 26,190 / $72,430 | 3,350 / $62,690 | 18,830 / $64,620 | 8,420 / $96,980 |
| 335 Electrical equipment | 6,040 / $62,020 | 1,290 / $62,360 | 5,230 / $62,210 | 1,720 / $87,510 |
| 326 Plastics and rubber | 17,940 / $63,970 | 2,560 / $61,290 | 17,310 / $62,200 | 4,210 / $90,060 |
| 334 Computer and electronic | 9,560 / $66,350 | 1,380 / $62,560 | 8,700 / $64,840 | 2,260 / $100,530 |

Caution: OEWS is by industry, not plant size. Maintenance headcount per 100-499 employee plant is UNKNOWN. Dividing 232,480 by plant counts would be invalid because those mechanics sit across all size classes.

### 3c. Occupational Outlook Handbook (projections 2025-2035)
URL: https://www.bls.gov/ooh/installation-maintenance-and-repair/industrial-machinery-mechanics-and-maintenance-workers-and-millwrights.htm (opened via WebFetch). Publisher: BLS.
| Metric | Value | Label | Note |
|---|---|---|---|
| Industrial machinery mechanics, machinery maintenance workers, millwrights: median pay 2025 | $64,100 | ACTUAL DATA | |
| Jobs 2025 (combined group) | 547,300 | ACTUAL DATA | Mechanics 446,900; maintenance workers machinery 59,700; millwrights 40,700 |
| Projected growth 2025-35 (combined) | 14% | ACTUAL DATA | Mechanics +18% (to 526,600); maintenance workers machinery -2% (to 58,600); millwrights +1% (to 41,000) |
| Openings per year | about 51,900 | ACTUAL DATA | Includes replacement needs |
| Share of employment in manufacturing | 51% | ACTUAL DATA | Next: wholesale trade 13%, commercial and industrial machinery repair 11%, construction 5% |
| Growth driver stated by BLS | continued adoption of automated manufacturing machinery | ACTUAL DATA (as relayed by the fetch tool, not verified word for word) | |

General maintenance and repair workers, OOH page https://www.bls.gov/ooh/Installation-Maintenance-and-Repair/General-maintenance-and-repair-workers.htm (opened via WebFetch): 2025 median pay $49,590; jobs 2025 1,621,800; outlook 2025-35 4%; about 148,700 openings per year; manufacturing 13% of employment. ACTUAL DATA.
Conflict: OOH shows 1,621,800 jobs for 49-9071, OEWS shows 1,529,700. Different concepts (OOH employment includes self-employed). Use OEWS for wage-and-salary headcount.
First-line supervisors OOH page: NOT OPENED (403). Projection for 49-1011: UNKNOWN.

## 4. Maintenance workforce shortage and skills gap

| Metric | Value | Year | Publisher | URL | Label | Note |
|---|---|---|---|---|---|---|
| Net new manufacturing employees needed 2024-2033 | about 3.8 million | study published 2024-04-03 | Deloitte and The Manufacturing Institute, "Taking charge: Manufacturers support growth with active workforce strategies" | https://themanufacturinginstitute.org/wp-content/uploads/2024/04/Digital_Skills_Report_April_2024.pdf (opened; text in mi_2024.txt) | ACTUAL DATA | A projection, not a count |
| Open jobs that could go unfilled by 2033 | about 1.9 million (around half) | same | same | same | ACTUAL DATA | "could remain unfilled if manufacturers are not able to address the skills gap and the applicant gap" |
| Industrial machinery maintenance technicians employed in manufacturing | over 270,000 (2022); could grow as much as 16% by 2032 | same | same | same | ACTUAL DATA | Compare my OEWS May 2025 sum of 232,480 for 49-9041 only. Different year and occupation scope; not reconciled |
| Manufacturers citing attracting and retaining talent as primary challenge | over 65% | NAM Q1 2024 survey, as cited in the MI report | NAM, via MI | same PDF | ACTUAL DATA (secondary) | |
| Newer Deloitte and MI technician study | 2.3 million openings across manufacturing and adjacent-industry technician occupations (2025-2030); about 500,000 open manufacturing technician roles currently unfilled; technician employment growing 6x faster than production occupations; about 2 million technicians in adjacent industries with transferable skills | released 2026-09-10 | Deloitte and The Manufacturing Institute | https://www.prnewswire.com/news-releases/deloitte-and-mi-study-shows-potential-for-ai-to-accelerate-manufacturing-skills-training-302872788.html (opened; press release only) | ACTUAL DATA (press release) | Full report NOT OPENED. Figures as extracted by the fetch tool; verify against the full report before quoting. Technician definition and the share that is maintenance: UNKNOWN |
| Older Deloitte and MI study | 2.1 million jobs could go unfilled by 2030; potential cost $1 trillion that year; talent 36% harder to find than 2018 (800+ manufacturing leaders surveyed) | published 2021-05-04 | Deloitte and The Manufacturing Institute | https://themanufacturinginstitute.org/2-1-million-manufacturing-jobs-could-go-unfilled-by-2030-11330/ (opened) | ACTUAL DATA | Superseded. Not maintenance-specific |
| NAM Q2 2026: "attracting and retaining a quality workforce" selected as a challenge | 46.95% | survey May 12-28, 2026 (n=215: small 39, medium 50-499 employees 93, large 81) | NAM Manufacturers' Outlook Survey | https://nam.org/wp-content/uploads/securepdfs/2026/06/NAM_2026_Q2_Outlook_Survey_Writeup.pdf (opened; text in nam_q2_2026.txt) | ACTUAL DATA | Multi-select list. Raw material costs (83.1%) and trade uncertainty (71.8%) ranked higher. Self-selected sample |
| NAM Q2 2026: AI training for frontline workers | 55.2% of respondents provide it; of those, 42.1% train workers on using AI for quality, production, maintenance or logistics tasks | May 2026 | NAM | same Q2 PDF | ACTUAL DATA | Tangential |
| NAM Q1 2026 (44.68%) and Q3 2026 (54.9%) workforce-challenge figures | not used | | NAM | | NOT OPENED (appeared only in a web-search summary) | Do not cite |

No study I opened gives maintenance headcount, vacancy rate or time-to-fill specifically for 100-499 employee plants. UNKNOWN.

## 5. Plants using maintenance software or sensors: official data

| Finding | Detail | Year | Publisher | URL | Label |
|---|---|---|---|---|---|
| Census Annual Business Survey (ABS) technology module | Covers five technologies: AI, specialized software, robotics, cloud-based technology, specialized equipment. Data year 2022 (from the 2023 ABS). The page as I read it does not report maintenance software, CMMS, condition monitoring or IoT sensors as separate items | 2022 data, story published Sept 2025 | Census Bureau | https://www.census.gov/library/stories/2025/09/technology-impact.html (opened) | ACTUAL DATA. The fetch summary also gave economy-wide adoption percentages that I could not verify and that are not manufacturing-specific; not used |
| ABS manufacturing tables by industry and size | Exist per search results, not opened | | Census/NSF | https://ncses.nsf.gov/surveys/annual-business-survey/2023 | NOT OPENED. Manufacturing adoption percentages: UNKNOWN |
| Survey of Manufacturing Technology (SMT) | Plant-level survey of 17 technologies including automated sensor-based inspection or testing. Collected only in 1988, 1991 and 1993, then discontinued. Not maintenance-focused | 1988-1993 | Census Bureau, described in CES Working Paper 20-40 | https://www2.census.gov/ces/wp/2020/CES-WP-20-40.pdf (opened) | ACTUAL DATA (description). Too old to use |
| Computer Network Use Supplement | One-off supplement to the 1999 Annual Survey of Manufactures, about e-commerce | 1999 | Census | same | ACTUAL DATA |
| ABS 2018 first technology module | Sample of roughly 300,000 employer firms, reference year 2017 | 2018 | Census (CES-WP-20-40) | same | ACTUAL DATA (sample description only; I did not extract manufacturing results) |
| Share of US plants using CMMS, condition monitoring or predictive-maintenance sensors | No official or semi-official statistic found | | | | UNKNOWN |

## Gaps and conflicts
- No national data on maintenance software or sensor adoption among manufacturing plants, by size class or otherwise. Largest gap for the case study.
- No source gives maintenance staff headcount per plant by size class. OEWS is by industry, not plant size.
- Employment counts differ by concept: CBP 12.34M (March 2023), BLS CES 12.65M (Sept 2026), NAM 12.64M (Aug 2026). Different years and methods, not a real conflict.
- GDP share: FRED CSV shows 9.5% (2025Q4), 9.4% (2026Q1), 9.7% (2026Q2); a search-result summary gave 9.4% for several 2025 quarters. BEA revises; cite the vintage.
- Technician counts: MI/Deloitte "over 270,000" (2022) versus my OEWS May 2025 sum of 232,480 for 49-9041 alone. Not reconciled.
- OOH 49-9071 jobs (1,621,800) versus OEWS (1,529,700): different concepts.
- NAM "workforce is a challenge" fell from over 65% (Q1 2024) to 46.95% (Q2 2026) while Deloitte/MI project structural technician shortages. They measure different things (share picking an item in a multi-select list versus a projected gap). Do not equate them.
- Sept 2026 Deloitte/MI figures come from a press release only.
- CBP counts establishments across all plant types; the 100-499 range includes food, paper and chemical plants as well as discrete. The six discrete subsectors in 1c cover 10,943 of 22,643 such establishments.
- NAM "medium" means 50-499 employees, a wider band than the provisional 100-499 definition.
- Not opened: OOH page for first-line supervisors (403), bea.gov, Census SUSB tables, ABS manufacturing tables, the full Deloitte/MI 2026 report.
