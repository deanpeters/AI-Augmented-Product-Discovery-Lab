# 08 Storyboard

Lab adaptation, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Storyboard / Context dump
- **Built from:** 07 Solution Hypothesis; 06 Positioning; 03 Persona
- **Status:** DRAFT. NOT RENDERED.
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** fictional story. Every success shown is a story hypothesis, not an observed result. Plant, machines and events are invented.

## Solution summary

If we surface the highest-risk equipment early and explain why, the maintenance manager can check it in a planned window instead of losing a shift to a breakdown. Expected outcome is a hypothesis.

- **Persona:** maintenance manager, mid-sized discrete plant (fictional: a 240-person metal-fabrication plant).
- **Hypothesis:** flag emerging risks and explain why, and the manager checks before failure.
- **Reaction question:** "When did you last lose a line to something the signals saw coming, and would this have changed what you checked?"

## Frames

| # | Beat | Actor and motivation | Information exchanged | Still uncertain |
|---|---|---|---|---|
| 1 | **Who has the problem.** The maintenance manager starts Monday with 140 open warnings across the CMMS, PLC alarms and two technician notes. | Wants to plan the week, not fight fires | A long, unranked list | Whether 140 is typical (UNKNOWN) |
| 2 | **What is the problem.** Most warnings are noise. Two reports disagree about the paint-line conveyor drive: a vibration reading creeping up, and a technician's note saying "sounds fine." No way to tell which matters, so the manager goes with experience and moves on. | Wants to pick the right check and defend it | Conflicting reports with hidden source and age | Which report was right |
| 3 | **The oh crap moment.** Wednesday, mid-shift, the conveyor drive gearbox seizes. The paint line is down most of a shift. The production supervisor asks the question nobody wants: "Didn't we have a warning on that?" | Wants to stop being blindsided | Yes, the signal was there, buried | Cost of the stop (UNKNOWN for this segment) |
| 4 | **The solution arrives.** The plant tries Next Check. It reads the signals they already have and shows a short watchlist: five machines most likely to fail soon. No new sensors. | Skeptical: "another dashboard?" | Five ranked items, each with a one-line why | Whether the ranking is right |
| 5 | **The person uses it.** Two weeks later the press-line conveyor tops the list. The manager opens it: vibration trending up for nine days (sensor, 2 hours old), a technician note saying "a bit noisy" (3 days old), and the last bearing change 14 months ago (CMMS). It suggests a 10-minute handheld vibration check. The manager books it into Thursday's planned stop and sends production a two-line reason. The check finds early bearing wear; the bearing is swapped in the window. | Wants to act before failure and keep production on side | Ranked risk, source and age of each signal, the settling check, a shareable reason | Whether real managers trust the why |
| 6 | **Helping others enjoy the same success.** At the Monday meeting, the manager shows the production supervisor and the second-shift lead how the watchlist reasons. The supervisor agrees to a standing 30-minute check window on Thursdays. The shift lead starts adding notes, because now they get used. | Wants the plant to plan, not react | The shared reason; the standing window | Whether production would really agree |

The manager makes every call. The system ranks and explains; it never diagnoses on its own or touches equipment.

## Renderer prompt (optional)

```text
Create a six-panel storyboard, simple line-art comic style, one person as the hero: a maintenance manager at a mid-sized metal-fabrication plant. Panels: (1) Monday, staring at a long unranked list of equipment warnings; (2) two reports disagree about a conveyor drive, the manager shrugs and moves on; (3) mid-shift, the conveyor gearbox seizes, the line is down, a production supervisor asks "Didn't we have a warning on that?"; (4) a short ranked watchlist of five machines appears, each with a one-line reason; (5) the manager opens the top item, sees the evidence and its age, books a 10-minute check in Thursday's planned stop, a technician finds early bearing wear; (6) the manager shows the production supervisor and a shift lead how the list reasons, and they agree on a standing check window. Keep the person in charge of every decision. No dashboards full of charts, no robots, no logos. Fictional scenario.
```

## Status and critique

- NOT RENDERED.
- Continuity: same protagonist; the solution does not rescue magically; frame 5 shows the person acting; frame 6 shows them helping others, not just celebrating.
- Weakest beat: frame 6 assumes production agrees to a window. That is the O2 risk, made visible on purpose.

## Claim ledger

| Claim | Label | Basis |
|---|---|---|
| Plant, machines, counts, timings | SYNTHETIC | invented for the story |
| Signals preceded the failure | ESTIMATE | the hypothesis under test |
| Production agrees to a standing window | ESTIMATE | story hypothesis; E4 tests it |

## Decision record

- **Draft choice (stand-in):** approve the six frames for the Minimum Viable Narrative.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance manager, mid-sized discrete plant.
What we believe: A ranked, explained watchlist turns a buried signal into a planned check.
Evidence: None. Fictional story.
What is inferred: Frame 5's loop (open, see why and age, pick the settling check, book the window, send the reason) is the interaction to prototype.
Desired outcome: Intervention by prediction instead of by exception.
Biggest unanswered question: Would a real manager trust the why enough to book the check?
```

## Final readout

- **Solution summary:** surface the highest-risk equipment early, with the why, so the check lands in a planned window. Outcome is a hypothesis.
- **Persona:** maintenance manager, mid-sized discrete plant.
- **Reaction question:** "When did you last lose a line to something the signals saw coming, and would this have changed what you checked?"

| Frame | Story beat | What we can observe |
|---|---|---|
| 1 Who has the problem | A maintenance manager starts the week with 140 unranked warnings | Whether real managers recognize the flood |
| 2 What is the problem | Two reports disagree about a conveyor drive; the manager goes with experience | How they decide today |
| 3 Oh crap moment | The gearbox seizes mid-shift; "Didn't we have a warning on that?" | Whether this has happened to them |
| 4 Solution arrives | A watchlist of five, built from signals they already have | First reaction: "another dashboard?" |
| 5 Person uses it | Opens the top item, sees the why and age of each signal, books a 10-minute check in the planned stop, sends production a reason; bearing wear caught | Whether they trust and repeat the why |
| 6 Helps others succeed | Shows production and the next shift; they agree to a standing check window | Whether production would agree |

**Evidence status:** fictional. **Rendering:** NOT RENDERED. **Biggest story assumption:** production grants the window. **Next decision:** approve for the MVN (Recommended). Human choice: not recorded.
