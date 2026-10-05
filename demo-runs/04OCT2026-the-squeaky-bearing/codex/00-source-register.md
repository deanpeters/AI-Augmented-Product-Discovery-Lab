# Source register and evidence rules

Date/access date: October 4, 2026. Run: The Squeaky Bearing Scenario. Operator: Codex.

ACTUAL DATA means a source says it, not that every claim in that source is independently true. INFERRED is our interpretation. ESTIMATE / BEST GUESS is unverified planning. UNKNOWN is missing evidence. All people, incidents, sensor values, prices and prototype outcomes in this run are SYNTHETIC unless specifically identified otherwise.

| ID | Source / direct URL | Publication / reference date | What was used and verification | Limit |
|---|---|---|---|---|
| R1 | [Census CBP 2023 national dataset](https://www2.census.gov/programs-surveys/cbp/datasets/2023/cbp23us.zip); [dataset index](https://www.census.gov/programs-surveys/cbp/data/datasets.html) | 2023 data; index lists June 26, 2025 release | Reparsed existing local government ZIP October 4. All legal forms `lfo=-`, manufacturing `31----`: 16,896 establishments with 100–249 workers; 5,747 with 250–499. Fabricated metal `332///`: 2,314 + 532. Six distinct subsectors total 10,943. | Establishments, not firms, customers or adoption. Employee band is our definition of mid-sized. No incidence or willingness to pay. This is a 2023 reference base, not a claim about 2026 population. |
| R2 | [Golightly, Kefalidou & Sharples: human and organisational factors in predictive maintenance](https://link.springer.com/article/10.1007/s10257-017-0343-1) | Published May 22, 2017; journal issue 2018 | Opened in this run. Thirteen cross-sector expert interviews; abstract and discussion support decision-led design, operational fit, knowledge and resourcing. | Small expert study; not a representative study of US mid-sized plant managers. No effect size used. |
| R3 | [Hoffmann & Lasch: potentials, barriers and critical success factors](https://link.springer.com/article/10.1007/s41471-024-00204-3) | January 21, 2025 | Opened in this run. Fifteen European companies/expert interviews; readiness, data accessibility, integration and maintenance organisation matter. | Does not prove this segment's need or our product's efficacy. |
| R4 | [Augury Machine Health](https://www.augury.com/machine-health/) | Page publication date UNKNOWN; accessed October 4, 2026 | Current official offering advertises early detection, AI diagnostics and reliability-expert guidance. | Vendor capability claim, not independently measured efficacy. Public matched site price UNKNOWN. Earlier `/solutions/machine-health/` URL failed; this working page replaced it. |
| R5 | [AssetWatch condition monitoring](https://www.assetwatch.com/) | Page publication date UNKNOWN; accessed October 4, 2026 | Current official offering advertises vibration/temperature/oil analysis, predictive monitoring and dedicated engineer insights. | Vendor claim. Trial price is not a recurring site price. Matched adoption cost UNKNOWN. |
| R6 | [MaintainX maintenance platform](https://www.getmaintainx.com/) | Page publication date UNKNOWN; accessed October 4, 2026 | Current official offering advertises work orders, preventive/condition-based work, anomalies and AI-assisted asset insights. | Vendor claim. Company/customer counts cannot be converted to our site penetration. No matched price or comparison measured. |
| L1 | `notebook/case-study/00-case-study.md`, `examples/kickoff-prompts.md`, current slide outline | Local files inspected October 4 | Authored HiPPO request and demo context. Preserve supplied prototype hypothesis: “Surface the highest-risk equipment so managers can intervene before failure.” | Exercise, not a real leadership request or customer report. |
| L2 | `research/manufacturing-pdm/{A,B,C,D,E}-*.md`; `notebook/case-study/01-market-intel.addendum.md` | October 3–4, 2026 | Existing research reused as routes and gap inventory; counts checked against R1, selected capabilities/papers checked live. | Generated reports are not independent corroboration of each other. Their other numbers remain supplied research, not newly verified findings. |
| L3 | `docs/CUSTOMER-VALUE-AND-DIFFERENTIATION.md`, canonical `skills/` and templates | Local working tree October 4 | Customer payoff, net economics, rival-relative difference and concise readout instructions. | Reasoning guidance, not customer or market evidence. |
| L4 | `reference/supplied-canvases.md`, `assets/productside/canvases/` | Supplied October 3 | Persona fields; job/pain/gain framing; seven positioning clauses; hypothesis measures; six storyboard frames; MVN fields. | Markdown outputs preserve field meaning, not official canvas artwork. |

## Run-specific assumptions

| ID | Assumption / rationale | Status |
|---|---|---|
| A1 | Initial wedge: US fabricated-metal sites, 100–499 employees, critical rotating bottleneck equipment, some usable condition data, CMMS/manual history and a manager who can request a planned access window. Concentrates the workflow test. | ESTIMATE / BEST GUESS; fit frequency UNKNOWN |
| A2 | Serviceable need/data/access fraction of 2,846 sites: 15% / 30% / 50%. Combined conditional filter avoids multiplying unmeasured marginal rates. | Illustrative planning range, not adoption data |
| A3 | Annual site fee USD $3,000 / $4,800 / $7,200. Base is a $400/month discovery what-if for an incremental software layer using existing sources, not a sensor/engineering service quote. | Untested price; explicit planning assumption |
| A4 | 24-month distinct qualified reach: 40 / 100 / 180 sites; win 10% / 20% / 25%; acquisition capacity 6 / 24 / 40; onboarding capacity 8 / 18 / 30. Requires an existing industrial-software company's channel; no actual account list supplied. | Capacity/win hypotheses, not a forecast |
| A5 | Annual recoverable avoided unplanned hours: 4 / 12 / 20; contribution/hour $4,000; realisation 25% / 50% / 65%. Used to expose a break-even question, not claim savings. | Entirely illustrative customer economics |
| A6 | Base annual fee $4,800; extra interventions $6,000; review $1,200; first-year customer adoption $3,000. Provider inference $480, hosting $600, support $1,440/year, onboarding $1,800/site. | Entirely illustrative delivery economics |
| A7 | Five managers for paired task sessions, two purchasing conversations, proposed 10-business-day test window and decision thresholds in Step 07. | Proposed protocol; NOT RUN |
| F1 | Fictional manager Jordan; invented fabricated-metal plant with 180 employees; three assets and all warning/inspection events. | SYNTHETIC narrative fixture |

## Material conflicts and gaps

Reports may imply clearer information is the gap. R2/R3 also point to organisational constraints. Test evidence confidence and permission separately. Prediction alone is already offered by R4/R5; its presence is not differentiation. No verified US target-segment incident frequency, avoided-downtime value, comparative effectiveness, data rights, buying authority or willingness to pay exists in this run.
