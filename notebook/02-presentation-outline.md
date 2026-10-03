# Presentation Outline: Build the Right Thing Before Building It Right

Source document for NotebookLM. It describes how the session runs. The companion "01 Context" document explains the why. Use both.

## Design principles for slides and video

- This is a performance, not a deck. Slides are chapter markers.
- Never put on a slide what Dean can demonstrate better live.
- One idea per slide. Low density. Visual hierarchy over bullets. Let diagrams carry structure.
- Do not repeat the live demo verbatim. Leave room for Dean's spoken narrative.
- Rhythm: brief framing, then live work, then audience reaction, then short synthesis, then the next live motion.
- Style with the Productside branding guide. Keep it clean and restrained. No generic AI gradients, neon, clutter or decorative icons.
- Do not invent facts, cases or numbers. Use placeholders.

## Runtime

Event block is 6:00 to 8:00 PM. Plan roughly 90 minutes of performance with about 60 minutes of live motion, leaving room for audience interaction, recovery and Q&A. These are planning targets. Rehearsal decides the real timing.

## Run of show

### Opening (about 5 minutes)

Spoken. Dean opens with the Hall of Shame: the cost of committing before understanding the market, the person and the outcome. Five cases, one line each: Relay.app (differentiation must keep being earned), Humane AI Pin (novelty does not equal customer value), Google Gemini image generation (optimizing one thing can break another), Air Canada chatbot (automation does not outsource accountability), Zillow Offers (model performance does not guarantee business viability). Do not add facts about the cases beyond these lines.

Then the premise: AI made building faster, it did not make knowing what to build easier. The starting request on screen: "Build an AI predictive-maintenance dashboard."

Disclosure, said out loud: the manufacturing situation is fictional. These aren't customers. They're hypothesis-generating machines.

Audience question: "What would you need to know before funding that dashboard?" Take two answers. They are audience suggestions, not evidence.

Slide needs: title, one Hall of Shame slide (five rows, company plus lesson, nothing else), one hook slide for the premise, one slide with the starting request.

### The rhythm for every motion

Frame (10 to 20 seconds, "what decision does this help us make?") then Run the skill or prompt then Inspect the artifact then Audience reaction then Human decision and handoff then Transition.

If a motion fails: one reasonable recovery, then show the saved artifact, then continue. Never debug on stage.

### The three parts (question-only section slides)

Three slides carry only a question, in large type, to mark the parts of the show. No other text on them.

1. **What problem are we solving, and for whom?** Market Intel, Segment, Persona.
2. **Where do we play, where do we win?** Opportunity Solution Tree, Value Prop vs. Differentiation 2x2, Positioning Statement.
3. **What must be true, how do we learn?** Solution Hypothesis, Storyboard, Minimum Viable Narrative, Prototyping.

### Live motions

Planning time is about 4 minutes each, with Persona at about 8.

| # | Motion | What the audience should see | Teaching beat |
|---|---|---|---|
| 1 | Market Intel | An evidence-aware landscape with a source register and gaps. Pre-run if real sources are used. | A market sweep is not a segment and not a market-size number. |
| 2 | Segment | A deliberate boundary with inclusions and exclusions, shown with three nested circles: TAM from population, SAM from trade and industry data, SOM from competition plus reach and capacity. No numbers on the slide. Dean makes the choice. | Sizing is an estimate until it is sourced. Choosing a segment is not proof it is attractive. |
| 3 | Persona (about 8 min) | A Guided conversation, shown on the Productside framing canvas: pains, gains and jobs-to-be-done circle, top picks, then the Problem Framing Statement. A second slide shows the Productside proto-persona canvas with demographics and quotes marked UNKNOWN. The assistant reuses supplied context and asks one missing question at a time. Dean gives a vague answer ("keep it safe"), the assistant clarifies. | A person in a situation, with jobs, pains, gains and a workaround. A hypothesis, not a customer we interviewed. |
| 4 | Opportunity Solution Tree | Outcome, opportunities, solutions, experiments. Compare "report uncertainty" against "permission and coordination". | A dashboard is a solution candidate, not a need. Ask the room: which opportunity survives if the dashboard disappears? |
| 5 | Value Prop vs. Differentiation 2x2 | A bake-off. The solution candidates from the Opportunity Solution Tree, plus competitors and the current workaround, are each placed on the same map on two independent axes, value to the persona and meaningful difference against a named comparator (technician discussion and log review). Placement decides which solutions go forward. | Different is not the same as valuable. Valuable is not the same as different. AI novelty is not evidence of either. |
| 6 | Positioning Statement | Shown on the Productside positioning statement canvas: For, who, the, is a, that, unlike, our product gives. Read aloud. | A proposed difference is not a reason to believe. |
| 7 | Solution Hypothesis | Shown on the Productside canvas: If we / for / then we will, 2 tiny acts of discovery, 1 quantitative and 1 qualitative metric with a timeframe, plus what would make us revise or stop. | Write the rule before the result exists. |
| 8 | Storyboard | Shown on the Productside storyboard canvas: a solution summary over six descriptive frames, one sentence each: who has the problem, what the problem is, the "oh crap" moment when it comes to a head, the solution arrives, the person with the problem uses it, and they help others enjoy the same success. | Descriptive before prescriptive. No MVN yet. |
| 9 | Minimum Viable Narrative | Shown on the Productside MVN canvas, with the prototype hypothesis and target audience on top and a builder prompt below. Five parts: Setup, Encounter, a loop of Action and Response repeated 3 to 6 times between the person and the system, then Resolution. The loop repeats; it is not a single pass. | The smallest story worth testing. Not a PRD, not a UI spec. |
| 10 | Prototyping | The question: what is the smallest, cheapest test we can run to learn the most brutal truth? A comparison of a conversation, a storyboard or wireframe test, an interaction, and a build. Status shown honestly: NOT BUILT, NOT RUN. | The tiniest act of discovery wins. Fidelity must earn its cost. |

Between motions, show the small handoff as a recurring visual: target, belief, evidence, inferred, outcome, biggest unanswered question.

A recurring chapter-marker slide for each motion is enough. Suggested contents: motion number and name, the single question it answers, and the artifact it produces. Nothing else.

### Optional branches

Rendering the storyboard or building a throwaway HTML prototype only happens if rehearsed and explicitly chosen. Anything shown is labeled SYNTHETIC. A working interface is implementation evidence, not validated value.

### Close (about 5 minutes)

Show one motion's package side by side: the skill, its template, a worked example, a weak example, and the paste-ready prompt.

Then the lightest-abstraction idea: Prompt explores, Skill codifies, Agent delegates, Plugin distributes. Be honest: Dean operated the chain tonight. No autonomous operator exists. Ten artifacts do not prove demand.

Closing line: **Learn faster. Decide better. Then build.**

Invitation: pick one motion, bring your own context, try it tomorrow. Confirm repo access before promising a QR code works for everyone.

## If time is tight

Show saved Market Intel and Segment. Keep Persona live. Demonstrate tree selection and the 2x2. Use saved hypothesis, storyboard and MVN handoffs to reach Prototyping. Announce which motions were saved and which were skipped. A shortened show is not a full live chain.

## Recovery lines

- Saved real rehearsal output: "AI demos obey Murphy's Law, so I brought receipts."
- Synthetic seed: "This is a synthetic illustration of the motion. It is not customer evidence."

## Visual ideas worth exploring (for NotebookLM to riff on)

Treat these as prompts to react to, not decisions.

1. **The cost curve.** Cost of building falls, cost of a wrong decision rises. One simple diagram.
2. **The ten-motion path** as a single horizontal or vertical chain, with human gates marked between motions.
3. **Evidence labels** as a small, consistent visual vocabulary (four tags) reused across slides.
4. **The small handoff** as a compact six-field card.
5. **Fidelity ladder:** conversation, storyboard or wireframe, interaction, build. Lo-fi wins. Include the Jeff Patton quote: "The most expensive way to test your idea is to build production-quality software."
6. **Prompt / Skill / Agent / Plugin** as a progression: explore, codify, delegate, distribute.
7. **Persona canvas** as a conversation: jobs, pains, gains, workaround, stakes, trigger. Mark as lab adaptation.
8. **Opportunity Solution Tree** diagram: Outcome, Opportunities, Solutions, Experiments.
9. **Value vs. Differentiation 2x2** with all four quadrants labeled and a named comparator.

## Asks for NotebookLM

- Suggest slide-by-slide chapter markers that follow the run of show, with a one-line purpose for each.
- Propose a visual treatment for each idea above, using the Productside branding guide.
- Draft a 3 to 5 minute video or audio overview of the core argument that Dean can react to.
- Point out anywhere the outline tells the audience something Dean could show live instead.
- Flag anywhere the content risks claiming evidence it does not have.
- List open questions Dean should answer before the deck is built.
