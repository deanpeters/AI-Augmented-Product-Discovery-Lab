# Take the discovery lab with you

Use this kit to explore what deserves investment before committing to a build. You get ten skills, ten equivalent prompts, editable templates, examples and optional Productside canvas references. Start with one decision; you do not have to run the whole chain.

## The easiest route: upload a prompt

1. Open the [demo launchpad](../DEMO.md) and choose a motion.
2. Open its prompt file and use GitHub's **Download raw file** button. Upload that `.md` file to your AI assistant. Alternatively, paste everything inside the prompt's large code block into your chat.
3. Paste the matching context kickoff from the [demo companion](../examples/kickoff-prompts.md). Each command has its own copy-ready block. Replace the teaching context with your situation when ready.
4. Review the result, its evidence limits and final readout. Choose revise, gather evidence, a bounded next motion or stop. No automatic build follows.

For example, upload `prompts/05-value-prop-differentiation.md`, then paste:

```text
For maintenance managers at mid-sized manufacturing plants, run this attached prompt in context dump mode.
SYNTHETIC teaching exercise; no observed plant or customer evidence.
Outcome: reduce avoidable unplanned downtime through justified intervention before failure.
Compare predictive signal context, shift intervention huddles and an evidence checklist.
Current alternative: reactive log review and technician discussion.
Explain what's in it for the customer, who might fund it, what makes choosing us rational,
and what evidence is missing about customer net benefit and our delivery economics.
No price, willingness-to-pay evidence or measured savings supplied; keep assumptions explicit.
Finish with a concise commercial readout and stop at my decision. Do not build.
```

The prompt includes the skill instructions, template and worked/weak examples. You do not need Git, Terminal, Python or a plugin. File-upload support depends on your assistant; pasting is the fallback.

## Prefer installed skills?

Use the guide for your client:

| Client | Setup | Current v0.1.4 download |
|---|---|---|
| Claude | [Claude setup](PLUGIN.md) | [ZIP](https://raw.githubusercontent.com/deanpeters/AI-Augmented-Product-Discovery-Lab/main/dist/dlab-claude-0.1.4.zip) / [.plugin](https://raw.githubusercontent.com/deanpeters/AI-Augmented-Product-Discovery-Lab/main/dist/dlab-claude-0.1.4.plugin) |
| Codex | [Codex setup](CODEX-PLUGIN.md) | [ZIP](https://raw.githubusercontent.com/deanpeters/AI-Augmented-Product-Discovery-Lab/main/dist/dlab-codex-0.1.4.zip) / [.plugin](https://raw.githubusercontent.com/deanpeters/AI-Augmented-Product-Discovery-Lab/main/dist/dlab-codex-0.1.4.plugin) |

Both kits contain the same canonical skills, prompts, examples and customer-value guidance, with client-specific packaging. Within each client, `.zip` and `.plugin` contain identical bytes. Keep the ZIP intact for upload where supported. Codex's documented marketplace install uses the repository, not an archive upload. Follow your client's guide; an extension alone does not make a kit installable in every assistant.

If an installed skill still gives an old result, confirm you have **v0.1.4** and start a new session after updating through your client's plugin manager. OST, the 2x2 and Positioning should show skill version **0.4.0**. Uploading the current prompt is a quick fallback that bypasses an old installed skill. Do not delete your client configuration to troubleshoot a cache.

## What to expect at the end

- Segment: a commercial TL;DR and TAM/SAM/SOM population / potential economics / reasoning table.
- OST: an actual branching Mermaid tree and equivalent plain-text fallback, followed by a short recommendation.
- The 2x2 and positioning: customer payoff, budget/switching/renewal reasoning, rival-relative proof gaps and separate provider economics. See [Earn the customer's budget](CUSTOMER-VALUE-AND-DIFFERENTIATION.md).
- Storyboard: six story beats. Minimum Viable Narrative: all 3–6 internal human-action/system-response transactions and a portable prototype prompt.
- Every motion: evidence labels, material uncertainty and your next decision.

Mermaid may display as text in some assistants; the OST includes a readable plain-text tree. Simulations and fictional examples generate hypotheses, not customer truth. A compelling demo does not establish demand, measured savings or a moat.

## Continue learning

Use the [case-study kickoff companion](../examples/kickoff-prompts.md), [chain guide](CHAIN.md) and [customer-value guide](CUSTOMER-VALUE-AND-DIFFERENTIATION.md). The [use cases](../evals/README.md) support independent testing. Local maintainer checks pass; the revised behavioral cases and full live rehearsal remain unrun. See [readiness](READINESS.md) and [verification results](../evals/RESULTS.md) for the exact limits.

Downloading/building the kit makes no model calls. Running a skill or prompt in a hosted assistant uses that assistant's normal allowance. The optional Claude behavioral runner consumes cloud inference; it is separate from local checks.

Original lab materials use [CC BY-NC-SA 4.0](../LICENSE). Productside canvases and brand assets are included with Dean's confirmed sharing permission and retain their separate ownership; see [provenance](PROVENANCE.md).
