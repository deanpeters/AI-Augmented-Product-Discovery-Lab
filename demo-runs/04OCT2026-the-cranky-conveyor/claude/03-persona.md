# 03 Situational Persona

Lab adaptation of the supplied proto-persona and problem-framing canvases, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Persona / Context dump plus best guess
- **Built from:** 02 Segment handoff (Segment A); case file part 2 (role map, pains, workarounds, studies)
- **Status:** DRAFT
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** SYNTHETIC proto-persona. A hypothesis, not a customer we interviewed. Voice lines are invented and labeled.

## Focal role

The **maintenance manager** at a 100 to 499 employee discrete plant with a CMMS and some live signals. Other roles stay distinct: technician (source of the "other report"), planner or scheduler, production supervisor (grants downtime), plant manager or ops director (likely budget, UNKNOWN). We develop one persona, not a blend.

## Proto-persona canvas

| Field | Content | Label |
|---|---|---|
| Name | Maintenance Manager. An archetype, not a person. | SYNTHETIC |
| Portrait | Placeholder | |
| Bio and demographics | Runs maintenance for a mid-sized discrete plant. Owns the CMMS backlog, a small crew of mechanics, and the call on what gets looked at next. Signals arrive from CMMS meter readings, a few PLC alarms, technician notes and the occasional sensor. Checks logs, asks a tech, goes on experience. Demographics UNKNOWN and not relevant. | ESTIMATE |
| Quotes | "Which signals actually matter?" / "What fails if I do nothing?" / "Is the fix worth the downtime?" | SYNTHETIC voice lines, not interview quotes |
| Desired outcomes / goals | Catch emerging failures early. Pick the right intervention. Defend the call to production. | ESTIMATE |
| Needs / pains | Too many early-warning signals with no ranking. Reports disagree. Ad-hoc breakdowns keep interrupting the plan. Balancing intervention against uptime. | ESTIMATE |

## Situation and trigger

**Situation:** the manager is running maintenance by exception. Work starts when something alarms, trips or breaks. The early signals were often there, buried among the rest.

**Trigger:** a decision deadline. A shift handover, the weekly schedule, or a planned stop window where equipment can come down.

## Jobs, pains and gains

| Jobs to be done | Pains | Gains |
|---|---|---|
| **Pick what to check next (top)** | **A flood of early warnings with no way to tell which matter (top)** | **Act before failure, in a planned window (top)** |
| Explain and defend the call to production and the next shift | Reports disagree and their source and age are hidden | A call they can explain in a sentence |
| Keep the crew pointed at the right work | Ad-hoc breakdowns blow up the schedule | Fewer interruptions, more planned work |
| Keep knowledge when senior techs leave | Getting a downtime window means negotiating with production | Knowledge that stays in the system |

**Why these three:**
- Top job: it is the decision the case premise centers on, and every other job depends on it. ESTIMATE.
- Top pain: signal overload is what turns early warnings into ignored warnings, which is how a plant ends up intervening by exception. ESTIMATE; alert-overload claims are mostly vendor-sourced (Senseye, Aspen).
- Top gain: acting in a planned window is where the downtime saving would come from. ESTIMATE.

## Current workaround

Scan the CMMS and alarm list, ask the most senior tech, go with experience, wait and see on the rest. Peer-reviewed interviews report plants hit high availability through experienced people's knowledge (Hoffmann and Lasch 2025, 15 interviews). So anything new competes with trusted judgment; it does not fill a vacuum.

## Stakes, incentives and constraints

- **Stakes:** an unplanned stop on a constrained line. Cost per hour for this segment UNKNOWN.
- **Incentives:** uptime and schedule attainment; looking competent upstairs.
- **Constraints:** small crew; production controls downtime windows (31% name scheduling conflicts with production as a barrier, UpKeep 2026, vendor-sponsored, n=214); budget authority UNKNOWN.

## Decision relationships

Maintenance manager decides what to check. Technician supplies the competing report. Planner turns it into scheduled work. Production supervisor grants the window. Plant manager or ops director probably pays.

## Problem framing statement

- **I am** a maintenance manager at a mid-sized discrete plant.
- **Trying to** pick what to check next, before something breaks.
- **But** I am buried in early warnings and reports that disagree, so I end up reacting to whatever trips first.
- **Because** nothing ranks the signals by risk or shows where each one came from and how old it is. *Cause hypothesis, not a verified root cause.*
- **Which makes me feel** UNKNOWN. Plausibly unsure and always behind, but no evidence supports a feeling, so it stays a guess.

Remove AI and the dashboard and the job, pain and current condition are still there. Good sign.

## Most dangerous assumption

That information is the obstacle. If permission, scheduling or trust decides what happens next, better ranking will not change outcomes. The case file leans INFERRED that organization is at least co-equal (Golightly 2018; IJPR 2022; Hoffmann and Lasch 2025; all small and mostly European).

## Research needed

5 to 8 conversations with maintenance managers and planners: the last ad-hoc failure, which signals were there beforehand, who decided, what blocked acting earlier.

## Claim ledger

| Statement | Label | Basis | Limitation |
|---|---|---|---|
| Maintenance manager picks what to check next | ESTIMATE | case premise | Not observed |
| Experienced staff knowledge carries availability today | ACTUAL DATA | Hoffmann and Lasch 2025 | 15 interviews, European |
| Scheduling conflicts with production are a top barrier | ACTUAL DATA (vendor-sponsored) | UpKeep 2026, n=214 | Self-selected |
| Signal overload drives reaction by exception | ESTIMATE | vendor framing (Senseye, Aspen) | Vendor-sourced |
| Feeling | UNKNOWN | none | |

## Decision record

- **Draft choice (stand-in):** keep this persona and the top three; take it into the Opportunity Solution Tree.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance manager, mid-sized discrete plant with a CMMS and some live signals.
What we believe: Buried in early warnings and disagreeing reports, they end up intervening by exception: reacting to whatever trips first. ESTIMATE.
Evidence: Role and workaround patterns from small peer-reviewed studies; scheduling conflict as a barrier (vendor-sponsored). No interviews.
What is inferred: The opportunity is moving from reacting to exceptions to acting on prediction, in planned windows.
Desired outcome: Fewer unplanned stops; more checks done in planned windows.
Biggest unanswered question: Is ranking and explaining signals the obstacle, or is getting a window from production?
```

## Final readout

**Persona:** Maintenance manager at a mid-sized discrete plant. Checks logs, asks a tech, goes on experience. Trigger: shift handover or a planned stop window.

| | Pick | Evidence status |
|---|---|---|
| Top job | Pick what to check next | ESTIMATE |
| Top pain | A flood of early warnings with no way to tell which matter | ESTIMATE (vendor-sourced framing) |
| Top gain | Act before failure, in a planned window | ESTIMATE |

**Problem framing:** I am a maintenance manager at a mid-sized discrete plant. Trying to pick what to check next, before something breaks. But I am buried in early warnings and reports that disagree, so I react to whatever trips first. Because nothing ranks the signals by risk or shows their source and age (cause hypothesis). Which makes me feel: UNKNOWN.

**Voice:** "Which signals actually matter?" SYNTHETIC. **Behavior:** asks the senior tech and waits on the rest. **Biggest uncertainty:** information versus permission. **Next evidence:** ask 5 to 8 managers about their last ad-hoc failure.

**Evidence caveat:** this persona is a hypothesis, not a customer. **Next decision:** approve for the Opportunity Solution Tree (Recommended). Human choice: not recorded.
