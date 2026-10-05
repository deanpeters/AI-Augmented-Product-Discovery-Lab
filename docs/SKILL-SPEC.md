# Discovery skill contract

The canonical sequence is Market Intel → Segment → Persona → Opportunity Solution Tree → Value Prop vs. Differentiation 2x2 → Positioning Statement → Solution Hypothesis → Storyboard → Minimum Viable Narrative → Prototyping.

Every skill bundles `SKILL.md`, `template.md`, `examples/worked-example.md` and `examples/weak-example.md`. The worked example fills the actual artifact sections with labeled fictional content; the weak example identifies and repairs a motion-specific failure.

Repository frontmatter puts each discovery field at the top level so GitHub displays it in a separate row. The Codex archive builder nests custom fields under `metadata` for the native kit. This preserves author, version, intent, phase, audience, use cases, inputs, outputs, timing guidance, standalone entry, chaining, provenance and resource paths. These fields are adapted from the recent ADLC and Precedents libraries; their content and licenses are not copied. Original lab materials use CC BY-NC-SA 4.0; Productside references retain separate ownership and sharing permission.

The validator reads this deliberately small YAML subset: JSON-quoted field values and a plain skill name. It also reads the nested metadata in Codex kits. There is no new YAML dependency.

Each body has three capture modes, up to five numbered questions and two clarifications, visible numbered work, an editable named artifact, claim-level evidence states and a human gate. Synthetic examples never become customer truth. Supplied context is reused.

Prompt export embeds the body, template, worked example and weak example with local asset links converted to internal anchors. A pasted prompt requires no repository access. Asset edits must be re-exported and make prior eval receipts stale.

Prototyping closes with experiment status, actual observations when available and the next evidence task. There is no separate learning-review stage or agent-strategy canvas in this chain. Storyboard can reuse a Solution Hypothesis; Minimum Viable Narrative can reuse a storyboard. Both also accept standalone notes and label newly drafted assumptions.

## Concise final readouts

All completed drafts end with a copy-ready motion-specific readout. Segment retains its executive TL;DR and population / potential economics / reasoning table. The other nine end with `Final readout`: actual field values, compact tables or story beats, the material evidence limit and a specific next decision. Template fields are a checklist, not an invitation to write an essay per field. Supporting sources, calculations and test assumptions remain traceable; avoid repeating them in both the handoff and ending.

The October 4 workshop canvases inform field selection, not chain order. Market Intel's Decision/Scope/Outcome/Inputs/Uncertainty fields frame research; the ending also includes actual findings or honest gaps. Persona includes its snapshot, top job/pain/gain and problem framing in the same motion. OST requires a branching Mermaid diagram plus equivalent plain-text tree, from outcome through opportunities, competing options and assumption tests; a table alone is insufficient. Its final readout references recommended branches without repeating the tree. The 2x2 keeps a shared comparator and separate value/difference evidence. Positioning keeps all seven clauses; Solution Hypothesis keeps tiny tests, observable measures and a falsifying rule. Storyboard retains our six-frame arc. MVN retains every internal transaction, continuation, exit and portable prompt. Prototyping ends with an experiment card, actual status and next evidence decision.

Aim for about 200 words of summary prose, allowing the required artifacts and portable prompts the space they need. Concision cannot justify invented evidence, deleted alternatives, a flattened loop or false approval. Shorten explanation; preserve the decision-bearing content.

OST, the value/differentiation bake-off and positioning embed the customer payoff/budget test: changed work → customer outcome → economic lever → budget/renewal choice, with separate provider delivery economics and rival-relative/compounding-advantage proof gaps. The axes and ten-motion sequence remain unchanged. See [Earn the customer's budget](CUSTOMER-VALUE-AND-DIFFERENTIATION.md). This supporting document is bundled in both kits; the prompt itself contains the operational guidance.

## Frontmatter audit, October 5, 2026

The repository uses separate top-level catalog fields for readable GitHub rows. The Codex kit converts these into a string-valued `metadata` map; values and instructions stay the same. Descriptions say when to use the play, what to bring, what it produces and its main limit. Detailed instructions live in the body’s **Start here** section.

[OpenAI’s skill guidance](https://developers.openai.com/plugins/build/skills) puts selection cues in the description and procedures in the body. [Claude’s frontmatter reference](https://code.claude.com/docs/en/skills) supports `metadata` for custom catalog data but does not act on its contents. The [Agent Skills specification](https://agentskills.io/specification) supports this map. Custom catalog fields help readers choose a play; they do not add tool, model or invocation controls.

`phase` remains the motion number for existing tooling. `discovery-phase` names the teaching group. `input-artifacts` and `output-artifacts` describe useful context and results; `optional-upstream` and `optional-downstream` suggest nearby plays. `depends-on` remains “none; standalone entry supported.” These catalog fields are not runtime dependencies or proof that an earlier artifact exists.

Every entry guide explains use, minimum useful context, substitutions, output/decision and what the result cannot prove. Worked examples explain why the author made an illustrative turn, what is still guessed and the real evidence needed next. Regenerate prompts and both kits after changing any of these resources.

## Helping readers choose a play

`operating-level` names where the decision sits, such as product strategy or customer discovery. `audience` names relevant roles. `best-for` gives a few practical reasons to use the play; `scenarios` describes situations readers recognize. `combine-with` suggests optional companion plays, including useful returns to earlier motions. It does not require those plays to run.

`source-basis` explains the framework or authored adaptation behind the play. `sources` contains a short semicolon-separated set of direct reference URLs. These are framework and provenance references, not evidence for a customer, market or synthetic case. The prompt exporter includes these reader fields outside the copy-ready instruction block, so uploading the file preserves the selection guidance without changing the play’s workflow. Changes to these fields invalidate prompt parity.

## Research in the first two motions

Market Intel and Segment embed the source routes, research capability check, three-bullet plan and clickable claim-level citation contract. Segment also seeks independent published estimates and reconciles them with its bottom-up model. These instructions travel in the exported prompts; [How we search](SEARCHING-PHILOSOPHY.md) explains the philosophy and investigator hats. Earlier artifacts remain optional; ordinary public research needs no extra approval turn.
