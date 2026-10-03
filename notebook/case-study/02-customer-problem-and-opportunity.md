# Case file, part 2: the customer, the problem and the opportunity

**Case:** AI predictive maintenance for mid-sized US manufacturing plants
**Prepared:** October 3, 2026
**Builds on:** "01 Industry and Market." Read that first for the plant counts, workforce, market-size spread and competitive landscape.
**Status:** desk research and reasoning. No customer has been interviewed. Every statement about a person, a need or a behavior in this part is a hypothesis unless a source is cited.

## Rules for any answer drawn from this notebook

- Labels: ACTUAL DATA (a source we read), INFERRED (reasoning, shown), ESTIMATE / BEST GUESS (plausible, unverified), UNKNOWN (not found).
- The customer picture below is a thinking aid built from role data and published studies. It is not customer evidence, and it contains no invented quotes, names or demographics.
- When a question needs evidence we do not have, say so and name the cheapest way to get it.

## 1. Who we are designing for

The decision under study belongs to the **maintenance manager** at a mid-sized plant: what to investigate next when equipment reports disagree. Four roles sit around that decision. This is a provisional map from role data and the literature, not an observed org chart.

| Role | What we believe they do in this decision | Basis | Label |
|---|---|---|---|
| Maintenance manager (or lead) | Decides what gets investigated next and explains the choice upward | The case premise | ESTIMATE / BEST GUESS |
| Technician or mechanic | Reports what they see and hears what the equipment sounds like; often the source of the "other report" | BLS counts 439,640 industrial machinery mechanics and 1,529,700 general maintenance workers; about 53 percent of the mechanics work in manufacturing | ACTUAL DATA for counts; role in this decision is INFERRED |
| Planner or scheduler | Turns an investigation into scheduled work: parts, permits, access, crew | Peer-reviewed interview studies say planning stayed a human task because scheduling, parts and staffing systems were not integrated | ACTUAL DATA (small studies); applicability to mid-sized US plants is INFERRED |
| Production supervisor or plant manager | Grants or denies downtime and approval | Scheduling conflicts with production are a top-named barrier to preventive maintenance (31 percent, UpKeep, vendor-sponsored) | ACTUAL DATA (vendor-sponsored); role INFERRED |

**Unknown:** who holds budget, whether purchases happen per plant or per company, how many maintenance staff a 100 to 499 employee plant has, and whether a planner role even exists at that size. All UNKNOWN. OEWS counts by industry, not plant size.

## 2. The situation, trigger and jobs

**Situation (hypothesis):** before a shift handover or a planned stop, two sources of equipment information disagree. A sensor alert says one thing, a technician or a maintenance record says another, or two reports differ in age or source. Someone has to choose what to investigate first.

**Trigger:** a decision deadline, such as a shift change, a production schedule or a window to take equipment down.

**Jobs (hypotheses):**
- Functional: decide which equipment concern to investigate next.
- Social: explain and defend that choice to production, a supervisor or the next shift.
- Emotional: UNKNOWN. We have no evidence about how this feels and will not invent it.

**Pains (hypotheses, each with its support):**
- Reports conflict and their source or age is unclear. Support is thin: interviewees in one peer-reviewed study said failure knowledge is often undocumented and that outputs from "black box" suppliers cannot be compared across vendors (Golightly 2018, 13 interviews). ACTUAL DATA for what interviewees said; relevance to mid-sized US plants INFERRED.
- Time to act is scarce. Staffing and production scheduling are the named barriers to preventive work (UpKeep 2026, vendor-sponsored, n=214). Wrench-time writing says waiting for permits, access and parts consumes more time than hands-on work (trade press, weak sourcing).
- Records are poor. A UK and Ireland survey of nearly 400 maintenance professionals found 59 percent still use paper records and 37 percent use Excel (RS and IMechE, via trade press, not US).
- Skilled people are scarce and retiring. See the Deloitte and Manufacturing Institute figures in part 1.

**Gains (hypotheses):** a call the manager can defend; less time reconciling sources; knowledge that does not leave with a person.

**Current workaround (not observed):** talk to a technician, look at the maintenance history, rely on experience. Peer-reviewed interviews report that many plants reach high availability through experienced employees' knowledge (Hoffmann and Lasch 2025, 15 interviews). That means any new information competes with trusted human judgment. It does not fill a vacuum.

## 3. The problem framing statement

A hypothesis, in the Productside problem-framing pattern:

- **I am** a maintenance manager at a mid-sized plant.
- **Trying to** decide which equipment concern to investigate next, and explain why.
- **But** the reports I have disagree and I cannot tell which to trust.
- **Because** their source, age and uncertainty are not visible. This is a cause hypothesis, not a verified root cause.
- **Which makes me feel:** UNKNOWN.

The "because" is the weakest link. The next section shows why.

## 4. The central uncertainty: is it information, or something else?

The question that decides whether this is a product opportunity at all: **when reports conflict, is poor or uncertain information the real obstacle, or do permission, coordination, planning and trust matter more?**

The research found no study of this exact decision in US mid-sized plants. Everything below is indirect. Treat the weighing as a reasoned lean, not a finding.

### Evidence that information is the obstacle

- False and missed alarms and scarce failure data are acknowledged by authors and interviewees (Hermansa 2021, a method that cut false alarms by 90.25 percent on two industrial use cases; Hoffmann and Lasch 2025; an MDPI literature review 2025). Peer-reviewed.
- Conflicting black-box vendor outputs are hard to compare (Golightly 2018). This is the closest match to the "conflicting reports" scenario.
- Records are often fragmented (the RS and IMechE survey above).
- Scientific Reports (2024) documents that failures are rare against healthy data, which makes supervised models hard to build.

### Evidence that organization, planning, permission and trust are the obstacle

- Peer-reviewed interview studies repeatedly find that fit with the decision, integration with scheduling, resourcing, reluctance and trust matter more than analytic accuracy (Golightly 2018, 13 interviews; a behavioral study in the International Journal of Production Research 2022, 6 experts; Hoffmann and Lasch 2025, 15 interviews). All are small and mostly European.
- Wrench-time writing in trade press puts waiting for permits, access and parts as the bulk of lost technician time. The typical 25 to 35 percent figure is cited without a source, ranges conflict even within one outlet (18 to 30 percent and 25 to 50 percent), and the best-known single-plant study is from 2007. Weak, but it points the same way.
- Skills dominate the stated obstacles in Fluke's 2026 survey (n over 600, US, UK and Germany), though the sponsor sells condition-monitoring tools and the figure is worded inconsistently. Deloitte and the Manufacturing Institute (independent) show structural labor pressure.
- Vendor and NIST sources point at cost, staffing, production access and data readiness as limiting factors, not at the lack of prediction itself. NIST cited cost as the top barrier (92 percent of respondents in a survey it reports).

### Where the two are entangled

Information errors can turn into a trust problem that outlasts the fix. A lab study (Dietvorst, Simmons and Massey 2015, five experiments, forecasting tasks, not maintenance) found people lose confidence in an algorithm faster than in a human after the same error. Experts in the 2022 behavioral study said decision support is ignored faster than humans after it errs. So "information versus organization" may be a false binary. INFERRED, not shown for maintenance managers.

### The lean, honestly stated

INFERRED, not proven: organization, planning, permission and trust are at least co-equal blockers and probably dominant for "what do we do next once we know something is wrong." Information quality is real but acts mostly by driving trust.

### What we explicitly do not know

- No independent, sampled measure of how often condition-monitoring or predictive-maintenance alerts are ignored in manufacturing. UNKNOWN.
- No study that compares the same maintenance decision with and without clearer information. The claim that clearer information changes what a manager investigates is UNKNOWN.
- No independent data on permit delay, planner capacity, backlog or production veto in US mid-sized plants. UNKNOWN.
- Several statistics that circulate on vendor blogs could not be traced and are not used: "70 percent of alerts are ignored," "42 percent cite alert overload (Gartner)," "46 percent cite poor production communication," "77.5 percent trust barrier." See the evidence log.

## 5. What the incumbents do and do not address

From the competitive scan in part 1:

- Vendors pitch less noise, ranked alerts, root cause and recommended action. Samotics publishes a false-alert rate and gets there by having engineers review ambiguous detections before customers see them, a vendor claim. Even a leader treats ambiguity as a human-judgment problem (INFERRED).
- No vendor page we read frames the problem as conflicting reports from different sources needing adjudication. Limble's own chief product officer frames it as poor data discipline.
- No independent, non-vendor evidence about mid-sized buyers exists in what we found.

**Two readings, and we cannot yet pick one (INFERRED):** either the "which report do I believe" decision is an under-served gap, or it is not a real, frequent, consequential problem and vendors are right to ignore it. Evidence from the people who make the decision would separate them.

## 6. The opportunity solution tree

**Outcome:** maintenance managers at mid-sized plants make a clearer, more defensible next-investigation decision. Baseline and target UNKNOWN.

**Opportunities (needs and obstacles, all hypotheses):**
- **O1. Know which signal or report to trust.** Its source, age and uncertainty are visible.
- **O2. Get approval and time to act.** Permission, access, parts and scheduling stop being the blocker.
- **O3. Keep scarce planner and technician capacity pointed at the right work.**
- **O4. Keep knowledge when experienced people leave.**

**Solution candidates:**
- Under O1: **S1** a report-comparison view that shows source, timing and uncertainty side by side. **S2** a predictive-maintenance sensor and AI platform (build, buy or partner).
- Under O2 and O3: **S3** a planning and permission workflow connected to the maintenance system the plant already uses.
- Under O4: **S4** a way to capture technician reasoning into work orders.
- **S5** a service, not software: a reliability or reconciliation service delivered by people.

A predictive dashboard is a solution candidate, not a need. The test is which opportunity survives if the dashboard disappears.

**Cheap experiments, each with a way to be wrong:**

| Experiment | What it could reveal | What would make us stop or change |
|---|---|---|
| Interview 5 to 8 maintenance managers and planners about the last time two reports disagreed: who decided, what they needed, who had to approve | Whether conflicting reports actually occur, how often, and what really blocked the next step | If the answer is always permission or scheduling, drop O1 and S1 and look at O2 and S3 |
| Show real report pairs with and without source and timing, and ask them to choose and explain | Whether visibility changes the choice or just feels nice | If people choose the same way either way, information is not the lever |
| Walk one recent real decision end to end with a practitioner | Where the time went | If waiting dominates, investing in diagnosis will not change outcomes |

## 7. Bake-off: where each option sits

The two axes are independent. **Value to the persona:** does it plausibly help this decision? **Meaningful difference:** is it a different way to resolve the uncertainty compared with today's workaround (technician discussion, maintenance history, experience)? All placements are judgments (INFERRED) and conditional. Missing evidence is UNKNOWN, not low.

| Option | Value to the decision | Difference from today's workaround | Why, and what is missing |
|---|---|---|---|
| Today's workaround (technician plus history plus experience) | UNKNOWN effectiveness | None, by definition | Trusted but invisible and undocumented |
| CMMS products (Fiix, UpKeep, MaintainX) | Helps with records and scheduling; does not claim to resolve conflicting reports | Low to moderate | Public per-user pricing, mid-market positioning (INFERRED). Now inside larger parents. |
| Predictive platforms with explained alerts (Augury, Senseye, Samotics) | Plausibly high if the problem is signal quality | High | Enterprise and process-industry skew, quote-only pricing, mid-sized fit unproven |
| Sensor plus CMMS bundles (Tractian) | Plausibly high if the problem is missing data | Moderate to high | Vendor claims on payback; no independent proof |
| S1 report-comparison view | Conditional on information being the real obstacle | Moderate; the mechanism may be inside incumbents' alert explanations | Value rests on the central uncertainty in section 4 |
| S3 planning and permission workflow | Conditional on coordination being the real obstacle | Moderate; overlaps with CMMS scheduling | Value rests on the same uncertainty, on the other side |
| S5 reconciliation service | UNKNOWN | High | Cheapest to test, hardest to scale |

**Reading it:** no option wins on evidence today. The decisive question is the one in section 4, not a feature comparison. A recommendation to build any of these now would be a guess.

## 8. Positioning, as a hypothesis to test

For maintenance managers at mid-sized plants who must decide what to investigate next when reports conflict, a source-aware comparison view is a decision aid that shows where each report came from, how current it is and how sure it is. Unlike technician discussion and maintenance-history lookups, it makes the grounds for the call visible and inspectable. **Reason to believe: UNKNOWN.** Remove any claim of reduced downtime or superiority until tested.

## 9. The solution hypothesis and the tiny acts of discovery

**If** we make source, timing and uncertainty visible for a maintenance manager facing conflicting reports, **then** they will pick, and explain, the next investigation with less avoidable doubt.

**We will test it by (tiny acts of discovery):**
1. Interviews about the last disagreement between two reports (section 6).
2. A storyboard or wireframe task with real report pairs from a willing plant, with and without source context.

**We will know it holds if, within a short window we set before starting,** we see one quantitative signal (time to explain the choice, against a baseline we measure) and one qualitative signal (people say the choice is easier to defend, and their reasoning uses the source context). The thresholds and the window are set before the test. Baseline is UNKNOWN.

**Revise or stop if** permission, scheduling or approval, not information, turns out to decide the choice. That rule is written now, before any result.

**Which act wins:** the tiniest act that returns the most brutal truth, or gives enough signal to pivot, punt or pursue. Tiny is not enough on its own. Teams usually overbuild their experiments. A conversation or a storyboard that can discriminate between the two explanations beats a built dashboard.

## 10. The brutal truths we are afraid of

- The information is already good enough, and the real barrier is approval, access and time. A dashboard would not help.
- Maintenance managers in mid-sized plants do not have budget authority, and the real buyer sits above them.
- Incumbents with alert explanations and funded sensor stacks already cover the need well enough, and a newcomer cannot differentiate.
- The segment is too small or too slow to buy to justify the build. The only sized quantity is the plant count; value is UNKNOWN.
- A prediction-first product loses trust after early false alerts and cannot recover.

## 11. Recommendation: pivot, punt or pursue

**Recommended: pursue, but only as a bounded discovery sprint. Punt on any build.**

Why not pursue a build: the evidence that earns a build is missing. Adoption by plant size, downtime cost, willingness to pay and the central information-versus-organization question are all UNKNOWN. Analyst market figures disagree by three and a half times and show no method.

Why not stop: the plant count is real (22,643 mid-sized plants, 10,943 in the discrete subsectors), the workforce is tight and growing, the incumbents are consolidating and funded (a sign someone believes in the space), and the "conflicting reports" framing is not visible in vendor messaging. That could be an opening.

**What would move us toward pivot:** interviews show permission and scheduling dominate. Then the opportunity is O2 and S3, not a prediction product.

**What would move us toward punt:** interviews show no frequent, consequential problem, or that mid-sized plants do not hold buying authority.

**What would move us toward a build conversation:** repeated, specific, costly instances of the conflicting-report problem, a named buyer with budget, and a baseline we can measure.

## 12. Next 30 days

1. Recruit 5 to 8 maintenance managers and planners at US plants in the 100 to 499 range. Prefer the six discrete subsectors. Access is not arranged.
2. Run the interviews on the last disagreement and capture decision, approval and delay.
3. Run the report-pair task with willing plants.
4. Ask each plant what an hour of unplanned downtime costs them, since no published number fits this segment.
5. Ask how purchases are made, per plant or per company, and who signs.
6. Write the pivot, punt or pursue memo from what the people say, not from analyst reports.

## 13. Open questions

- Does the conflicting-report problem occur often enough to matter?
- Who decides and who pays?
- What is the real baseline cost of unplanned downtime for these plants?
- What fraction already run a CMMS, sensors or both?
- Does clearer information change the decision, or does trust and approval dominate?
