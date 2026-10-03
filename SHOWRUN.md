# SHOWRUN.md

# Build the Right Thing Before Building It Right

## Performance Scaffold

This document controls the **show**, not just the slides.

The event should feel like a live working session with a narrative arc, not a lecture followed by demos.

The basic rhythm:

> **frame → show → interact → synthesize → move**

The audience should repeatedly watch Dean move from uncertainty toward better evidence and better decisions.

---

# 1. SHOW PROMISE

> **Learn to identify the right thing to build before burning runway on building it right.**

The performance should make one thing painfully clear:

> **AI made building faster. It did not make knowing what to build easier.**

---

# 2. TARGET RUNTIME

Event block:

- **6:00 PM–8:00 PM**
- target performance: approximately **90 minutes**
- target active demo/content: approximately **60 minutes**
- remaining time: framing, interaction, recovery, discussion, Q&A

Do not fill every minute.

Live AI work needs breathing room.

---

# 3. PERFORMANCE RHYTHM

Prefer:

~~~text
SLIDE / FRAME
      ↓
LIVE MOTION
      ↓
AUDIENCE REACTION
      ↓
SYNTHESIS
      ↓
NEXT QUESTION
~~~

Avoid:

~~~text
SLIDE
SLIDE
SLIDE
SLIDE
SLIDE
"Now let me show you something..."
~~~

Slides are chapter markers.

The live work is the show.

---

# 4. ACT 0 — COLD OPEN: HALL OF SHAME

## Purpose

Create tension before introducing a framework.

The audience should recognize that AI product failure comes in different forms.

Candidate examples:

- Relay.app
- Humane AI Pin
- Google Gemini image generation
- Air Canada chatbot
- Zillow Offers

Possible mapping:

| Example | Product Failure Pattern |
|---|---|
| Relay.app | Differentiation must keep being earned |
| Humane AI Pin | Novelty does not equal customer value |
| Gemini | Optimizing one thing can break another |
| Air Canada | Automation does not outsource accountability |
| Zillow Offers | Model performance does not guarantee business viability |

## Slide

### THE AI PRODUCT HALL OF SHAME

Keep it visually simple.

Logos / names + short failure pattern.

Do not turn it into a case-study lecture.

## Spoken Pivot

> **Different failures. Similar unanswered questions.**

Then:

> **We committed before we knew enough.**

Possible next slide:

### MARKET? PEOPLE? PROBLEM? OUTCOME? EVIDENCE?

Then:

> **So let's run a discovery play.**

Leave the deck.

---

# 5. ACT 1 — MARKET / SEGMENT

## Core Question

> **Where should we play?**

## Live Motion

Use Dean's **Mother of All Market Intelligence** prompt.

Likely domain:

> Industrial IoT / manufacturing

Possible broad challenge:

> Reduce the operational and financial impact of unplanned equipment downtime.

Do not begin with “predictive maintenance platform.”

## Show on Screen

Run market / segment research.

Look for:

- category structure
- relevant segments
- incumbents
- substitutes
- market shifts
- technology shifts
- regulatory / operational constraints
- switching behavior
- underserved areas
- evidence of pain

## Guardrail to Demonstrate

Require:

- URL citations
- actual data
- inference
- best guess
- unknown

## Audience Teaching Point

> **AI can investigate. It doesn't get to declare its best guess a market fact.**

## Handoff

Capture only:

~~~text
Target segment:
Evidence:
What we infer:
Why this segment is interesting:
Biggest unknown:
~~~

## Fallback

Prepared market-research output + sources.

---

# 6. ACT 2 — PEOPLE

## Core Question

> **Who is actually living inside this market?**

Potential actors:

- maintenance technician
- reliability / maintenance manager
- plant manager
- operations executive
- IT / OT / security influencer

## Live Motion

Use research context to identify:

- primary user
- buyer
- influencer
- blocker / approver

Optional visual generation:

Show one or more actors in a realistic operating context.

Avoid cartoon persona templates.

## Audience Teaching Point

> **Personas should behave like actors in a system, not posters on a wall.**

## Handoff

~~~text
Primary user:
Buyer:
Influencer / blocker:
Context where the problem appears:
Desired outcome:
Biggest unanswered question:
~~~

## Fallback

Prepared persona / stakeholder artifact.

---

# 7. ACT 3 — JOBS / PAINS / GAINS

## Core Question

> **What are they actually trying to get done?**

## Live Motion

Use Productside's JTBD Customer Circle.

Move through:

> **Jobs → Pains → Gains**

Use AI as facilitator.

Do not let the model fill the canvas and declare victory.

Interrogate:

- What is supported?
- What is inferred?
- What is synthetic?
- What is missing?
- What would we ask a real customer?

## Audience Teaching Point

> **AI can help structure the conversation. It cannot magically interview customers we never talked to.**

## Handoff

~~~text
Primary job:
Important pain:
Desired gain:
Evidence:
Assumptions:
Unknowns:
~~~

## Fallback

Prepared Customer Circle.

---

# 8. ACT 4 — PROBLEM FRAMING

## Core Question

> **What problem deserves our attention?**

## Live Motion

Use the Productside Problem Framing Canvas.

Move from customer context into:

- problem
- stakes
- desired outcome
- constraints
- evidence
- assumptions

Keep solutions out.

If the AI starts suggesting dashboards, agents, copilots, alerts, or apps, call it out.

## Audience Teaching Point

> **This is where AI loves to screw up by being helpful too early.**

Possible line:

> **We still haven't asked it what to build. That's intentional.**

## Handoff

~~~text
Target:
Problem:
Desired outcome:
Evidence:
What is inferred:
Biggest unanswered question:
~~~

## Fallback

Prepared Problem Framing Canvas.

---

# 9. ACT 5 — SYNTHETIC SCENARIOS / DATA

## Core Question

> **What might we still be missing about the problem?**

## Purpose

Use synthetic data to stress-test understanding before solution commitment.

Do not use synthetic data to pretend we have validation.

## Potential Industrial IoT Dataset

~~~text
timestamp
asset_id
motor_temperature
vibration
current_draw
pressure
flow_rate
production_load
maintenance_event
operator_note
downtime_minutes
failure_type
~~~

Possible generated scenarios:

- gradual bearing degradation
- clogged filter
- normal high-load operation
- sensor malfunction
- sudden motor failure
- repeated nuisance alert
- maintenance intervention

## Live Motion

Generate or inspect synthetic scenarios.

Ask:

- Which patterns might matter?
- Which signals could mislead?
- What would a technician need?
- What would a plant manager care about?
- Which assumptions should be tested with real plant data?

## Audience Teaching Point

> **Synthetic data helps us explore. It does not turn a guess into evidence.**

Or:

> **These aren't customers. They're hypothesis-generating machines.**

## Handoff

~~~text
Scenario:
Potential signal:
Possible interpretation:
Risk of misreading:
Question to validate:
~~~

## Fallback

Prepared synthetic dataset + a few preselected patterns.

---

# 10. ACT 6 — OPPORTUNITY SOLUTION TREE

## Core Question

> **Where are the opportunities before we pick a solution?**

## Live Motion

Start with the desired outcome.

Possible top-level outcome:

> **Reduce unplanned downtime caused by critical rotating equipment.**

Potential opportunity areas:

- detect degradation earlier
- determine which signals matter
- prioritize intervention
- reduce false alarms
- coordinate maintenance action
- explain why something deserves attention

Then derive candidate solution approaches.

Do not start with a giant feature dump.

## Audience Teaching Point

> **Outcome → Opportunities → Solutions. Not solution → justification.**

## Handoff

~~~text
Desired outcome:
Top opportunities:
Candidate approaches:
What we still do not know:
~~~

## Fallback

Prepared OST screenshot / export.

---

# 11. ACT 7 — POSITIONING

## Core Question

> **Why would anyone care?**

## Live Motion

Shape the emerging concept around:

- for whom
- struggling with what
- desired outcome
- existing alternative
- meaningful difference
- reason to believe

Possible emerging proposition:

> **Turn noisy equipment signals into maintenance decisions your plant team can actually act on.**

Do not assume this wording is final.

The discovery work should earn it.

## Audience Teaching Point

> **If we cannot explain the value before drawing the UI, prettier screens won't save us.**

## Handoff

~~~text
For:
Who struggle with:
Our approach helps:
Unlike:
Because:
~~~

## Fallback

Prepared positioning statement / canvas.

---

# 12. ACT 8 — MINIMUM VIABLE NARRATIVE

## Core Question

> **What is the smallest story worth testing?**

## Live Motion

Build an MVN such as:

1. Setup
2. Encounter
3. Action
4. Response
5. New Action
6. Resolution

Possible industrial example:

- maintenance manager starts the morning with too many equipment alerts
- a small number deserve attention
- one asset shows a meaningful combination of signals
- the system explains why it matters
- manager investigates likely causes
- intervention is planned
- unplanned downtime is avoided

## Guardrail

Stay descriptive.

Do not prescribe exact screens.

## Audience Teaching Point

> **Describe the experience before prescribing the interface.**

## Fallback

Prepared MVN.

---

# 13. ACT 9 — STORYBOARD / EXPLAINER

## Core Question

> **Can someone understand the idea before we build the thing?**

## Live Motion

Use the MVN to generate:

- storyboard
- concept frames
- explainer video
- narrated walkthrough

Let the rendering tool make many visual choices.

Critique the result.

## Audience Teaching Point

> **Increase fidelity only when it buys additional learning.**

## Fallback

Prepared storyboard / video.

---

# 14. ACT 10 — THROWAWAY PROTOTYPE

## Core Question

> **Can we make the hypothesis touchable?**

## Live Motion

Use the reinforced MVN + positioning + style guidance.

Possible tools later:

- Stitch
- Figma
- Lovable
- Claude Code
- Gemini Canvas
- other builders

Possible output:

> functional throwaway HTML5 SPA

## Audience Teaching Point

> **Learn, not ship.**

Possible line:

> **A gorgeous prototype can still be a beautifully rendered pile of assumptions.**

## Fallback

Prepared prototype + screenshots / screen recording.

---

# 15. CLOSING MOVE

Return to the macro chain:

~~~text
MARKET
  ↓
PEOPLE
  ↓
PROBLEM
  ↓
EVIDENCE
  ↓
OPPORTUNITIES
  ↓
POSITIONING
  ↓
NARRATIVE
  ↓
PROTOTYPE
~~~

Then:

> **Each step earned the next investment.**

Close with:

# Learn faster. Decide better. Then build.

And return to the original promise:

> **Learn to identify the right thing to build before burning runway on building it right.**

---

# 16. PROMPT / SKILL / AGENT MOMENT

Do not save this as an abstract appendix if the audience has already watched it happen.

Point out where different abstractions appeared:

### Prompt

Exploratory market intelligence.

### Skill

Repeatable bounded plays such as:

- market research
- problem framing
- precedents
- critique
- positioning
- MVN generation

### Agent

Only where an operator must coordinate multiple steps, tools, or Skills.

### Plugin

When distributing a reusable capability.

Teaching line:

> **Don't build an agent because you learned the word agent.**

---

# 17. SLIDE RHYTHM

Possible deck rhythm:

### Opening

- Slide 1: Promise
- Slide 2: Hall of Shame
- Slide 3: Different failures. Similar unanswered questions.

### Live Block 1

Market + People

### Bridge

- Slide: Facts ≠ Inference ≠ Best Guess
- Slide: Don't ask AI what to build yet

### Live Block 2

JTBD + Problem Frame + Synthetic Stress Test

### Bridge

- Slide: Outcome → Opportunities → Solutions
- Slide: Fidelity ≠ Evidence

### Live Block 3

OST + Positioning + MVN + Storyboard

### Bridge

- Slide: Learn, not ship

### Live Block 4

Prototype

### Close

- Slide: Prompt → Skill → Agent → Plugin
- Slide: Learn faster. Decide better. Then build.

This is a scaffold, not a final slide list.

Delete slides that explain what the live work demonstrates better.

---

# 18. SHOW-CONTROL CHECKLIST

For every live motion maintain:

| Item | Required |
|---|---|
| Learning objective | Yes |
| Target audience / actor | Yes |
| Exact prompt / Skill | Yes |
| Required context | Yes |
| Live tool | Yes |
| Expected output | Yes |
| Small handoff | Yes |
| Fallback artifact | Yes |
| Recovery line | Yes |
| Time budget | Yes |

---

# 19. PRE-SHOW REHEARSAL

Run the entire show before the event.

Do not merely test individual tools.

Rehearse:

- transitions
- typing / copy-paste motions
- login state
- browser tabs
- file locations
- handoffs
- tool latency
- screen sharing
- fallbacks
- recovery language
- timing

Capture the successful rehearsal outputs.

The rehearsal should leave behind a complete alternate version of the show if every live service decides to misbehave.

---

# 20. FAILURE RECOVERY

When a tool fails:

1. Give it one reasonable recovery attempt.
2. Do not debug live beyond that.
3. Use the recovery line.
4. Show the fallback.
5. Continue the story.

Default recovery line:

> **AI demos obey Murphy's Law, so I brought receipts.**

The audience came to learn product thinking.

They did not come to watch Dean troubleshoot OAuth.

---

# 21. FINAL PERFORMANCE TEST

Before adding any slide, demo, tool, or artifact, ask:

> **Does this advance the story?**

> **Does this reduce uncertainty?**

> **Does this demonstrate a useful product behavior?**

> **Could I make the same point faster?**

> **If this fails live, can the show continue?**

If not, cut it.
