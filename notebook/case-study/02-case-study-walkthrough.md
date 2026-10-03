# Case study walkthrough: ten moves, one synthetic case

Source document for the attendee notebook. Everything below is SYNTHETIC and drawn from authored worked examples. It is not research. Each move shows the question, what the artifact said, the human decision gate, and what carried forward.

Rule for answers: keep the labels, add no facts, and say UNKNOWN when this document does not say.

## Part 1. What problem are we solving, and for whom?

### 1. Market Intel

**Question:** what is the landscape, and how much of what we know is evidence?

**What the artifact said:** manufacturing maintenance decisions, with geography and time horizon UNKNOWN. Plausible alternatives: manual log review, technician discussion and existing maintenance software. No sources were supplied, so adoption, market shares, demand, purchasing authority, downtime costs and willingness to pay are all UNKNOWN. Candidate ways to slice a segment: plant size, operating environment, how often the decision comes up, coordination constraints.

**Teaching point:** a market sweep is not a segment, and it is not a market-size number.

**Decision gate:** approve the landscape for segment comparison only, or gather evidence.

**Carried forward:** the source register (empty, on purpose), the alternatives, the candidate segment dimensions, and the gaps.

### 2. Segment

**Question:** which bounded context are we deliberately choosing to learn about?

**What the artifact said:** pick the unit to count (sites, not people or logos), then size in three circles. TAM comes from population data, SAM from trade and industry data, SOM from competition plus reach and capacity. Every size is an ESTIMATE until sourced, and the inputs are labeled as invented in this example. The provisional focus: mid-sized manufacturing plants where maintenance managers make investigation decisions, with explicit inclusions and exclusions.

**Teaching point:** sizing is an estimate until it is sourced. Choosing a segment is not proof it is attractive.

**Decision gate:** a person chooses the segment. The assistant does not choose quietly.

**Carried forward:** the segment boundary, the counted unit, the scenario and time horizon, and the assumptions behind each circle.

### 3. Persona

**Question:** who is this person, in what situation, trying to make what progress?

**What the artifact said:** a role, not an invented person: a maintenance manager. Two Productside canvases shaped it.
- *Framing:* list pains, gains and jobs-to-be-done, pick the top of each, then write the problem framing statement. Top job: explain the next equipment investigation. Top pain: conflicting reports with unclear source and recency. Top gain: an explainable next action with uncertainty visible.
- *Proto-persona:* name (a role label), portrait (a placeholder, no real person), bio and demographics (UNKNOWN), quotes (UNKNOWN, no interviews), desired outcomes, needs and pains.

The problem framing pattern: I am a maintenance manager before a shift handover. I am trying to explain the next investigation. But conflicting reports make the choice hard to defend. Because the source and recency may be unclear. Which makes me feel: UNKNOWN.

**Teaching point:** a hypothesis, not a customer we interviewed. Never invent quotes or demographics.

**Also noted:** permission or scheduling may be the stronger obstacle. A current workaround is plausible, not observed: talk with a technician and review logs.

**Decision gate:** keep this persona for exploration only.

**Carried forward:** the persona, jobs, pains, gains, the workaround and the open question about what is really blocking the decision.

## Part 2. Where do we play, where do we win?

### 4. Opportunity Solution Tree

**Question:** which needs are worth pursuing, and which solutions and cheap experiments hang off them?

**What the artifact said:** the outcome is clearer next-investigation decisions. Two opportunities, both hypotheses:
- O1: understand the source and recency of conflicting information.
- O2: clarify who can authorize an investigation.

Solution candidates: under O1, a storyboard report comparison and an annotated digital comparison. Under O2, an explicit permission and scheduling process. A predictive dashboard is a solution candidate, not a need. No winner was selected, and a lo-fi test may answer the first question.

**Teaching point:** a dashboard is a solution candidate, not a need. Which opportunity survives if the dashboard disappears?

**Decision gate:** carry the candidate set forward. Comparing options does not require picking a winner first.

**Carried forward:** the candidates with their opportunity links, cheap experiment ideas, and the coordination alternative.

### 5. Value Prop vs. Differentiation 2x2

**Question:** where does each solution sit: does the value matter, and is the difference meaningful?

**What the artifact said:** a bake-off. Every candidate from the tree, a fictional rival offering, and today's workaround go on one map. Horizontal axis: value to the persona. Vertical axis: meaningful difference from the workaround. Placements are conditional, and missing evidence is UNKNOWN, not low.
- The storyboard comparison landed as modestly different, possibly useful.
- The digital comparison and the rival landed together in the "may help, different" area, so no advantage over the rival is established.
- The permission process stayed unplaced, because if coordination is the real obstacle it could beat the report ideas.

Recommendation in the example: test the storyboard comparison and the permission process before investing in the digital version.

**Teaching point:** different is not the same as valuable, and AI novelty is evidence of neither. A quadrant is a discussion aid, not proof or a moat.

**Decision gate:** a person chooses which candidate goes forward.

**Carried forward:** the placements, the comparator, and the proof gaps.

### 6. Positioning Statement

**Question:** why is this for this person, and why would they choose it over today's workaround?

**What the artifact said (all hypotheses):**
- For maintenance managers at mid-sized plants,
- who need to explain an investigation choice when reports conflict,
- the Report Comparison Aid (a provisional name)
- is a source-context comparison aid
- that may support an explainable next action with uncertainty visible.
- Unlike technician discussion and manual log review,
- our product gives side-by-side source, timing and uncertainty context.

Reason to believe: UNKNOWN. Remove any claim of reduced downtime or superiority.

**Teaching point:** a proposed difference is not a reason to believe.

**Decision gate:** choose the wording only if it keeps the real alternative and the uncertainty.

## Part 3. What must be true, how do we learn?

### 7. Solution Hypothesis

**Question:** what do we believe will change, and what would make us revise or stop?

**What the artifact said:** If we expose source, recency and uncertainty for a maintenance manager facing conflicting reports, then we will support a more explainable next-investigation choice. Two tiny acts of discovery: examine a recent real decision, and compare fictional report pairs with and without source context. One quantitative and one qualitative measure with a timeframe, with thresholds set before the test and baselines UNKNOWN. Riskiest assumption: report uncertainty, not approval or scheduling, changes investigation choices.

Revise or stop if permission dominates. Experiment status: NOT RUN.

**Teaching point:** write the rule before the result exists.

### 8. Storyboard

**Question:** what does the story look like, from who has the problem to who else gets the win?

**What the artifact said:** six frames, descriptive and fictional.
1. Who has the problem: a maintenance manager must explain the next investigation before a shift handover.
2. What is the problem: conflicting reports with unclear sources and timestamps.
3. The oh crap moment: the handover starts and a technician asks what to investigate first. The manager cannot defend a choice.
4. The solution arrives: a comparison aid shows source, timing and uncertainty side by side. It gives context, not a command.
5. The solution aha moment: the manager notices a stale item and an unresolved claim, then explains a next step or asks for missing information.
6. Sharing the love: the manager walks the next shift lead through it. Shared success is a story hypothesis, not a result.

Status: NOT RENDERED. Aim for authenticity, simplicity and emotion.

### 9. Minimum Viable Narrative

**Question:** what is the smallest story worth testing?

**What the artifact said:** five parts. Setup: the manager needs an explainable choice before handover. Encounter: two conflicting reports with incomplete source context. Then the action and response loop, a few exchanges between the person and the system:
1. Selects two reports; the system shows sources, timestamps and uncertainty, and one item looks stale.
2. Inspects the stale item; the system reveals its earlier date and a claim with a missing basis.
3. Marks what is missing; the system keeps the gap visible without deciding.
4. Chooses a next investigation or asks for clarification, with a reason; the system reflects the reasoning back.

Loop exit: the person states a next action, a rationale and the unresolved uncertainty. Resolution: the manager shares the reasoning with the next shift lead (a story hypothesis).

It ends in a descriptive prompt for a no or low code builder: not a UI spec, not a PRD. Not built.

**Teaching point:** a prototype is a story. The smallest version that still lets you observe the behavior wins.

### 10. Prototyping

**Question:** what is the smallest, cheapest test we can run to learn the most brutal truth?

**What the artifact said:** the brutal truth is that source and recency context might not matter because authority or scheduling decides. Recommendation: examine a recent real decision with a relevant practitioner, then run a storyboard or wireframe task to contrast the two explanations. A comprehension check alone cannot show adoption or value. Tiniest act of discovery wins. Lo-fi wins.

Build status and experiment status: not built, not run. Next decision: gather practitioner evidence before increasing fidelity.

**Teaching point:** the most expensive way to test your idea is to build production-quality software (Jeff Patton).

## What the case study did and did not show

- It showed how a vague solution request becomes a falsifiable bet with a cheap first test.
- It did not show that anyone wants the product. That is the point.
- The next real step is not a build. It is finding relevant practitioners and examining a recent real decision.

## Questions this notebook can answer

- What does each of the ten moves ask, and what did it produce here?
- What would make us stop or change direction in this case?
- How do the evidence labels work, and where did each get used?
- How would I run one of these moves on my own idea?

## Questions this notebook should not answer

- Anything about real market size, real customers or real results. All UNKNOWN.
- Whether to build the dashboard. The case argues for evidence first.
