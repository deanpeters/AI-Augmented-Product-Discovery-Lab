# Discovery skill contract

The canonical sequence is Market Intel → Segment → Persona → Opportunity Solution Tree → Value Prop vs. Differentiation 2x2 → Positioning Statement → Solution Hypothesis → Storyboard → Minimum Viable Narrative → Prototyping.

Every skill bundles `SKILL.md`, `template.md`, `examples/worked-example.md` and `examples/weak-example.md`. The worked example fills the actual artifact sections with labeled fictional content; the weak example identifies and repairs a motion-specific failure.

Frontmatter keeps `name` and `description` at the top level and rich discovery fields in a supported `metadata` map of string values. This preserves author, version, intent, phase, audience, use cases, inputs, outputs, timing guidance, standalone entry, chaining, provenance and resource paths without adding unsupported top-level keys. These fields are adapted from the recent ADLC and Precedents libraries; their content and licenses are not copied. New lab licensing remains unselected.

The validator reads this deliberately small YAML subset: JSON-quoted description and metadata values, plain skill name, two-space metadata indentation. There is no new YAML dependency.

Each body has three capture modes, up to five numbered questions and two clarifications, visible numbered work, an editable named artifact, claim-level evidence states and a human gate. Synthetic examples never become customer truth. Supplied context is reused.

Prompt export embeds the body, template, worked example and weak example with local asset links converted to internal anchors. A pasted prompt requires no repository access. Asset edits must be re-exported and make prior eval receipts stale.

Prototyping closes with experiment status, actual observations when available and the next evidence task. There is no separate learning-review stage or agent-strategy canvas in this chain. Storyboard consumes Solution Hypothesis; Minimum Viable Narrative consumes the actual storyboard.
