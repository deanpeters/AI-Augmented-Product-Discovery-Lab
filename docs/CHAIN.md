# A chain you can interrupt

Market Intel → Segment → Persona → Opportunity Solution Tree → Value Prop vs. Differentiation 2x2 → Positioning Statement → Solution Hypothesis → Storyboard → Minimum Viable Narrative → Prototyping.

There are ten motions. Jobs, pains, gains and problem context are developed within Persona and the Opportunity Solution Tree. Opportunities belong in that tree. There is no standalone agent-strategy or learning-review stage. Prototyping closes with experiment status and the next evidence decision.

Each skill offers three capture modes, visible numbered work, a template, worked/weak examples, a named artifact and a human gate. Prompt equivalents embed the assets. Start at any motion with the context its decision needs.

## What crosses the boundary

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
        Person->>B: Selected skill or prompt plus actual handoff
        alt Required content is missing
            B-->>Person: Flag the gap and ask for context
        else Context is sufficient
            B-->>Person: Next editable artifact and gate
        end
    else Stop
        Person->>A: Stop and record the reason
        A-->>Person: Decision record with no next motion
    end
```

| Boundary | Content to preserve beyond the six common fields |
|---|---|
| Market Intel → Segment | Market scope, alternatives, candidate segment dimensions, source register and gaps |
| Segment → Persona | Actual selected segment and boundaries; persona role remains provisional |
| Persona → Opportunity Solution Tree | Actual situational persona, jobs, pains, gains, workaround and evidence |
| Tree → 2x2 | Human-selected opportunity and solution concept; competing branches and candidate experiments |
| 2x2 → Positioning | Proposed value and difference assessed separately; comparator and confidence |
| Positioning → Hypothesis | Actual selected statement, target, concept, benefit, alternative and proof gaps |
| Hypothesis → Storyboard | Actual hypothesis, task, expected/disconfirming observations and prewritten rule |
| Storyboard → MVN | Actual six frames, actor action loop, hypothesis and reaction question |
| MVN → Prototyping | Full six-part narrative, hypothesis, task, constraints and decision rule |

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
