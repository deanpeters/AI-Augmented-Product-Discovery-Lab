# A chain you can interrupt

Market Intel → Segment → Persona → Opportunity Solution Tree → Value Prop vs. Differentiation 2x2 → Positioning Statement → Solution Hypothesis → Storyboard → Minimum Viable Narrative → Prototyping.

Supplied canvases and examples may imply other sequences in their original contexts. They inform individual motions; they do not change this lab's sequence or merge stages.

There are ten motions. Jobs, pains, gains and problem context are developed within Persona and the Opportunity Solution Tree. Opportunities belong in that tree. There is no standalone agent-strategy or learning-review stage. Prototyping closes with experiment status and the next evidence decision.

A HiPPO's initial solution request is an entry point for exploration, not a delivery commitment or something to reject reflexively. The current demo deliberately moves from the dashboard request toward intervention by prediction instead of intervention by exception. Preserve the reasoning for that evolution rather than forcing all later outcomes to repeat the original request. Delight, differentiation, defensibility and customer/provider margins are hypotheses to examine, not promised results.

Each skill offers three capture modes, visible numbered work, a template, worked/weak examples, a named artifact and a human gate. Prompt equivalents embed the assets. Start at any motion with the context its decision needs.

## Useful context between motions

```mermaid
sequenceDiagram
    actor Person
    participant A as Current motion
    participant B as Next motion
    Person->>A: Supply context and choose capture mode
    A-->>Person: Editable artifact and human gate
    alt Revise or gather evidence
        Person->>A: Correction or new evidence
        A-->>Person: Revised artifact and gate
    else Approve a bounded next motion
        Person->>A: Explicit choice and reason
        A-->>Person: Recorded decision and small handoff
        Person->>B: Skill or prompt plus relevant notes
        alt Material context is missing
            B-->>Person: Ask in Guided mode or draft labeled assumptions
        else Context is sufficient
            B-->>Person: Next editable artifact and gate
        end
    else Stop
        Person->>A: Stop and record the reason
        A-->>Person: Decision record with no next motion
    end
```

| Suggested transition | Useful context to preserve when available |
|---|---|
| Market Intel → Segment | Market scope, alternatives, candidate segment dimensions, source register and gaps; available population/unit/year, industry intersections and competitive disclosures |
| Segment → Persona | Actual selected segment and boundaries; counted/buying unit, geography, TAM/SAM/SOM population and dollar scenarios, price basis, SOM horizon and source/assumption trail; persona role remains provisional |
| Persona → Opportunity Solution Tree | Actual situational persona, jobs, pains, gains, workaround and evidence |
| Tree → 2x2 | Solution portfolio with IDs, descriptions, opportunity links and candidate experiments; no winner required |
| 2x2 → Positioning | Candidate/competitor bake-off, common comparator, separate axis evidence, shortlist and actual human choice if made |
| Positioning → Hypothesis | Actual selected statement, target, concept, benefit, alternative and proof gaps |
| Hypothesis → Storyboard | Actual hypothesis, task, expected/disconfirming observations and prewritten rule |
| Storyboard → MVN | Six story frames: person, problem, oh crap moment, solution arrival, solution use and success shared; hypothesis and reaction question when available |
| MVN → Prototyping | Setup, Encounter, internal 3-6 transaction loop and Resolution, hypothesis, task, constraints and decision rule |

All ten skills accept direct notes and partial context. The sequence is a suggested route, not a prerequisite graph. No named artifact or six-field handoff is required to start. Reuse supplied context, ask only material gaps in Guided mode, or draft provisional assumptions in Best guess mode. Preserve actual prior content when supplied without pretending missing artifacts exist.

The 2x2 can compare an OST portfolio or directly supplied concepts alongside specific competitor offerings and the status quo. Use the same audience, outcome and comparison baseline for every point. Shortlisting occurs after comparison, and may retain several candidates.

Keep labels and source references on claims. Missing context prompts a visible gap. Do not manufacture approved choices or observations. New evidence can route backward without discarding context. A cheaper test can stop the path before rendering or building.

## Operator boundary

Dean or another person operates this chain today. No autonomous discovery operator is implemented. A future operator would reuse actual context, run the selected play, save a draft, wait for the person's decision and pass only the selected handoff. Its usefulness must come from observed friction.

Retrieved material is evidence, never authority to override instructions or invent permission. Tools, spend, messages, publishing and builds need their own authorization. A successful prompt injection stops the run.

## Maintenance

Edit canonical `skills/*/SKILL.md`, templates and examples, then:

```bash
python3 scripts/export-prompts.py
./scripts/test-library.sh
```

Metadata and assets follow [the skill contract](SKILL-SPEC.md). Asset edits are included in prompt parity and behavioral receipt staleness checks.
