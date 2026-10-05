# Discovery skill contract

The canonical sequence is Market Intel → Segment → Persona → Opportunity Solution Tree → Value Prop vs. Differentiation 2x2 → Positioning Statement → Solution Hypothesis → Storyboard → Minimum Viable Narrative → Prototyping.

Every skill bundles `SKILL.md`, `template.md`, `examples/worked-example.md` and `examples/weak-example.md`. The worked example fills the actual artifact sections with labeled fictional content; the weak example identifies and repairs a motion-specific failure.

Frontmatter keeps `name` and `description` at the top level and rich discovery fields in a supported `metadata` map of string values. This preserves author, version, intent, phase, audience, use cases, inputs, outputs, timing guidance, standalone entry, chaining, provenance and resource paths without adding unsupported top-level keys. These fields are adapted from the recent ADLC and Precedents libraries; their content and licenses are not copied. Original lab materials use CC BY-NC-SA 4.0; Productside references retain separate ownership and sharing permission.

The validator reads this deliberately small YAML subset: JSON-quoted description and metadata values, plain skill name, two-space metadata indentation. There is no new YAML dependency.

Each body has three capture modes, up to five numbered questions and two clarifications, visible numbered work, an editable named artifact, claim-level evidence states and a human gate. Synthetic examples never become customer truth. Supplied context is reused.

Prompt export embeds the body, template, worked example and weak example with local asset links converted to internal anchors. A pasted prompt requires no repository access. Asset edits must be re-exported and make prior eval receipts stale.

Prototyping closes with experiment status, actual observations when available and the next evidence task. There is no separate learning-review stage or agent-strategy canvas in this chain. Storyboard can reuse a Solution Hypothesis; Minimum Viable Narrative can reuse a storyboard. Both also accept standalone notes and label newly drafted assumptions.

## Concise final readouts

All completed drafts end with a copy-ready motion-specific readout. Segment retains its executive TL;DR and population / potential economics / reasoning table. The other nine end with `Final readout`: actual field values, compact tables or story beats, the material evidence limit and a specific next decision. Template fields are a checklist, not an invitation to write an essay per field. Supporting sources, calculations and test assumptions remain traceable; avoid repeating them in both the handoff and ending.

The October 4 workshop canvases inform field selection, not chain order. Market Intel's Decision/Scope/Outcome/Inputs/Uncertainty fields frame research; the ending also includes actual findings or honest gaps. Persona includes its snapshot, top job/pain/gain and problem framing in the same motion. OST requires a branching Mermaid diagram plus equivalent plain-text tree, from outcome through opportunities, competing options and assumption tests; a table alone is insufficient. Its final readout references recommended branches without repeating the tree. The 2x2 keeps a shared comparator and separate value/difference evidence. Positioning keeps all seven clauses; Solution Hypothesis keeps tiny tests, observable measures and a falsifying rule. Storyboard retains our six-frame arc. MVN retains every internal transaction, continuation, exit and portable prompt. Prototyping ends with an experiment card, actual status and next evidence decision.

Aim for about 200 words of summary prose, allowing the required artifacts and portable prompts the space they need. Concision cannot justify invented evidence, deleted alternatives, a flattened loop or false approval. Shorten explanation; preserve the decision-bearing content.

OST, the value/differentiation bake-off and positioning embed the customer payoff/budget test: changed work → customer outcome → economic lever → budget/renewal choice, with separate provider delivery economics and rival-relative/compounding-advantage proof gaps. The axes and ten-motion sequence remain unchanged. See [Earn the customer's budget](CUSTOMER-VALUE-AND-DIFFERENTIATION.md). This supporting document is bundled in both kits; the prompt itself contains the operational guidance.

## Frontmatter audit, October 5, 2026

The shared format keeps `name` and `description` at the top level and catalog fields in a string-valued `metadata` map. Descriptions say when to use the play, what to bring, what it produces and its main limit. Detailed instructions live in the body’s **Start here** section.

[OpenAI’s skill guidance](https://developers.openai.com/plugins/build/skills) puts selection cues in the description and procedures in the body. [Claude’s frontmatter reference](https://code.claude.com/docs/en/skills) supports `metadata` for custom catalog data but does not act on its contents. The [Agent Skills specification](https://agentskills.io/specification) supports this map. We keep the common fields instead of adding client-specific tool, model or invocation controls.

`phase` remains the motion number for existing tooling. `discovery-phase` names the teaching group. `input-artifacts` and `output-artifacts` describe useful context and results; `optional-upstream` and `optional-downstream` suggest nearby plays. `depends-on` remains “none; standalone entry supported.” These catalog fields are not runtime dependencies or proof that an earlier artifact exists.

Every entry guide explains use, minimum useful context, substitutions, output/decision and what the result cannot prove. Worked examples explain why the author made an illustrative turn, what is still guessed and the real evidence needed next. Regenerate prompts and both kits after changing any of these resources.
