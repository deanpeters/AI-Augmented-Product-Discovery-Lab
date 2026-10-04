# Claude Code plugin

The ten discovery skills ship as a Claude Code plugin named `dlab`. Prompt, skill, agent, plugin: a prompt explores, a skill codifies, an agent delegates, a plugin distributes the kit. This is the kit.

## Install

From a clone of this repository:

```bash
claude plugin marketplace add ./
claude plugin install dlab@ai-augmented-discovery-lab
```

From GitHub, once you have access to the repository:

```bash
claude plugin marketplace add deanpeters/AI-Augmented-Product-Discovery-Lab
claude plugin install dlab@ai-augmented-discovery-lab
```

Restart any running Claude Code session so it sees the new skills.

### Upload through Customize

Claude's plugin upload accepts only a `.zip` or `.plugin` file whose root holds `.claude-plugin/plugin.json`. A zip of the whole repository will not work, because GitHub nests everything inside a folder. Build the right archive:

```bash
python3 scripts/package-plugin.py
```

Upload the [dlab-0.1.1.plugin bundle](../dist/dlab-0.1.1.plugin) or the identical [dlab-0.1.1.zip bundle](../dist/dlab-0.1.1.zip). It contains the manifest, the ten skills with their templates and examples, the reference notes, the license and a README.

## What you get

Ten skills, one per discovery motion. Each accepts direct notes or partial context, offers Guided, Context dump and Best guess modes, labels evidence (ACTUAL DATA, INFERRED, ESTIMATE / BEST GUESS, UNKNOWN), and stops at a human decision gate.

| Skill | Output |
|---|---|
| `dlab-step01-market-intel` | Market Intelligence Brief |
| `dlab-step02-segment` | Segment Selection Brief |
| `dlab-step03-persona` | Situational Persona |
| `dlab-step04-opportunity-solution-tree` | Opportunity Solution Tree |
| `dlab-step05-value-prop-differentiation` | Value Prop vs. Differentiation 2x2 |
| `dlab-step06-positioning-statement` | Positioning Statement |
| `dlab-step07-solution-hypothesis` | Solution Hypothesis |
| `dlab-step08-storyboard` | Storyboard |
| `dlab-step09-minimum-viable-narrative` | Minimum Viable Narrative |
| `dlab-step10-prototyping` | Prototype Experiment Brief |

Invoke one by name, for example `/dlab:dlab-step01-market-intel`, or ask for the motion in plain language. Start where the decision is. The chain is a teaching path, not an automatic pipeline.

## Not in the plugin

- No agent or autonomous operator. A person runs the chain.
- No ChatGPT, Gemini or Copilot packaging. Those use the paste-ready prompts in `prompts/` and the project instructions in `notebook/case-study/project-instructions.md`.
- Codex has a separate [plugin setup and downloadable bundle](CODEX-PLUGIN.md) using the same ten skills.

## Maintaining it

Edit the canonical skills in `skills/`, then run `python3 scripts/export-prompts.py`, `python3 scripts/package-plugin.py`, `python3 scripts/build-codex-plugin.py` and `./scripts/test-library.sh`. Repository installs read the canonical `skills/`; uploaded archives must be rebuilt after skill or asset changes. Bump the version in both `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` when you release.
