# Prototype prompt: Next Check (The Cranky Conveyor, 04OCT2026)

Paste everything inside the block into Lovable, Stitch, v0, Bolt or similar. Attach the Productside style guide alongside it. The prompt describes the story; let the tool decide the layout.

````text
Build a clickable prototype of "Next Check," a maintenance decision aid. This is a throwaway learning prototype with fictional data, not a production app. No login, no backend, no integrations.

WHY IT EXISTS
Hypothesis: if we flag emerging equipment risks and explain why they matter, maintenance managers at mid-sized factories will decide what to inspect before failure, in a planned window, instead of reacting to whatever breaks first.
We are testing whether a short, explained watchlist changes what the manager checks and whether they can repeat the "why" to production.

WHO USES IT
A maintenance manager at a 240-person metal-fabrication plant. They have a maintenance system (CMMS), some machine alarms, a few sensors and technician notes. Today they face 140 open warnings with no ranking.

SETUP
Monday morning. Last month a conveyor gearbox seized mid-shift on a warning nobody ranked. The manager needs to pick this week's checks and defend them to production.

ENCOUNTER
The app opens on a watchlist of the five machines most likely to fail soon, ranked, each with a one-line reason and a rough time window. The other 135 warnings are collapsed below as "not in the top five." A small label says "Synthetic demo data."

THE LOOP (the person drives every step)
1. Manager opens the top item, Press Line 2 conveyor drive. The app shows risk level, the one-line why, a rough failure window with its uncertainty ("likely 5 to 12 days, low confidence"), and three signals, each with its source and age. One is flagged "Reports disagree." That flag makes them ask which report to trust.
2. Manager taps "Reports disagree." The app shows the two reports side by side: vibration sensor (continuous, 2 hours old, rising for 9 days) vs. technician note ("a bit noisy, nothing urgent," 3 days old, by ear). It says what each can and cannot detect and names the smallest check that would settle it: a 10-minute handheld vibration reading at the drive-end bearing. Now they want to know what waiting costs.
3. Manager asks "What if I wait?" The app shows the likely failure path (bearing wear, then gearbox seizure, then Press Line 2 stops), what is known and unknown, and that the window is an estimate. No dollar figures. Waiting looks risky, so they look for a slot.
4. Manager chooses "Book the check" (or "Dismiss with a reason"). The app lists upcoming planned stops; Thursday 06:00 to 06:30 fits. It shows what the check needs: one technician, a handheld analyzer, a lockout permit, 10 minutes. Manager picks Thursday and assigns a technician. Production still has to agree.
5. Manager asks for "a reason to send production." The app drafts two plain sentences citing the sources, their age and what is uncertain. Manager edits it and sends it to the production supervisor. A simulated reply arrives: "OK, Thursday 06:00."
Loop ends when a check is booked with production's OK, or the item is dismissed with a recorded reason.

RESOLUTION
Thursday, the technician logs: early bearing wear on the drive end; bearing replaced in the planned stop. The manager records what the check found and the item leaves the watchlist. Show that the outcome is kept as history for next time.

FICTIONAL DATA (the five watchlist items)
1. Press Line 2 conveyor drive. High. Vibration rising 9 days (sensor, 2 h old); tech note "a bit noisy" (3 days old) disagrees; bearing replaced 14 months ago (CMMS). Check: 10-min handheld vibration reading.
2. Paint line oven exhaust fan. Elevated. Motor current 6% above normal (machine alarm, 1 day old); preventive maintenance 3 weeks overdue (CMMS). Check: belt tension inspection.
3. CNC cell 4 spindle. Elevated. 3 temperature alarms in 7 days (machine alarm, 5 h old); tech note "coolant issue, fixed" (6 days old) disagrees. Check: verify coolant flow and temperature log.
4. Hydraulic press 1. Moderate. Pressure swings in weekly meter reading (4 days old). Check: accumulator precharge.
5. Air compressor 2. Moderate. Run hours past service threshold (CMMS). Check: oil sample.

BOUNDARIES
- The manager decides every check. The app ranks and explains; it never diagnoses on its own, schedules without the manager, or controls equipment.
- Always show where each signal came from and how old it is. Keep uncertainty visible; never show accuracy percentages or savings claims.
- Keep "Synthetic demo data" visible.
- Leave out trend charts for every asset, fleet KPIs, notifications and settings. Small and focused beats complete.
- If a brand style guide is attached, follow it for type, color and spacing. Otherwise keep it clean and calm, not neon or "AI glowy."
````

Status: NOT BUILT by this run. Anything Lovable, Stitch or other tools produce is an implementation of a fictional narrative. It is not customer evidence.
