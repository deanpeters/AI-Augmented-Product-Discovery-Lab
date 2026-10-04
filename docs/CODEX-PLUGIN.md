# Codex discovery kit

The Codex plugin is named `dlab`. It packages the same ten canonical skills,
including each template and worked/weak example. The downloadable
[.plugin bundle](../dist/dlab-codex-0.1.4.plugin) and identical
[.zip bundle](../dist/dlab-codex-0.1.4.zip) also include all ten prompt
equivalents, customer-value guidance and the optional supplied Productside canvas references. See the [attendee guide](ATTENDEE-GUIDE.md) for direct downloads and a prompt-upload fallback.

## Install from a local checkout

With Codex CLI installed, run these commands from the repository folder:

```bash
codex plugin marketplace add ./
codex plugin add dlab@ai-augmented-discovery-lab
codex plugin list
```

Open a new Codex session after installation. In the desktop app, check the
Plugins panel for **AI-Augmented Product Discovery Lab**. Restart the app if
the local marketplace does not appear. CLI installation is checked separately
from desktop discovery; the desktop install path still needs a live rehearsal.

Attendees can install from the public GitHub source:

```bash
codex plugin marketplace add deanpeters/AI-Augmented-Product-Discovery-Lab --ref main
codex plugin add dlab@ai-augmented-discovery-lab
```

The `.plugin` download is a ZIP-format distribution bundle. The marketplace
commands install the repository plugin folder, not the archive file. If using
an unpacked bundle, register it through a local marketplace rather than
passing the archive to `codex plugin add`. Both extensions contain exactly the
same ZIP bytes; providing both makes download, extraction and upload easier
across clients. The older `plugins/codex.plugin` path is retained as an
identical compatibility copy. Claude's `dist/dlab-claude-<version>.*` files stay separate
from Codex's `dist/dlab-codex-<version>.*` files.

## Start one motion

Use the skill picker to select the installed skill, or ask for it by name:

```text
Use the dlab plugin's dlab-step03-persona skill in context dump mode.
Focal persona: maintenance manager at a mid-sized manufacturing plant.
Situation: a flood of equipment warnings; checks logs and asks a technician.
Desired outcome: decide what to inspect or intervene on before equipment fails.
Select this working persona, then explore pains, gains and jobs-to-be-done,
pick the top of each and frame the problem. Synthetic teaching case;
no interviews or plant observations supplied. Stop at my decision.
```

The [demo companion](../examples/kickoff-prompts.md) supplies context for all
ten motions. Use the installed skill picker if your client requires a plugin
namespace; the companion's slash spelling is not a universal Codex command.
Step 3 remains one combined Persona motion. Earlier artifacts are optional.

This is a skills kit, with no bundled MCP server, API keys, hooks or autonomous
operator. Building and installing it make no model calls. Using its skills in
a hosted assistant uses that assistant's normal inference allowance.

## Maintain and verify

Use `bash scripts/refresh-library.sh` for the complete prompt-and-distribution refresh. See [the maintenance checklist](MAINTAINING.md); GitHub checks both kits without silently rebuilding them.

Edit the canonical files under `skills/`. Refresh prompts if skill content
changes, then rebuild the bundle and run the local checks:

```bash
python3 scripts/export-prompts.py
python3 scripts/build-codex-plugin.py
./scripts/test-library.sh
```

The test command rejects stale or missing package assets and unexpected bundle
entries. Packaging uses an explicit allowlist, excluding local research,
rehearsal transcripts, decks and credentials. Skill behavior still needs
separate use-case review and live rehearsal.

Keep the version and identity aligned in `plugin.json` and
`.codex-plugin/plugin.json`; coordinate releases with the separate Claude
manifest. `.agents/plugins/marketplace.json` exposes the repo root so installs
use the canonical skills without maintaining a second source tree. Original
lab materials retain their license; Productside references retain their
separate permission and attribution.

The layout follows [official OpenAI plugin packaging documentation](https://developers.openai.com/plugins/build/plugins):
a portable root manifest plus a Codex compatibility manifest and repo marketplace.

Verified October 4, 2026: an unpacked bundle installed and was enabled through
the local Codex CLI marketplace in an isolated temporary configuration. Its
cache contained all ten skills with templates and examples. That installation receipt predates the current customer-value revision; it is not a behavioral pass for v0.1.4. Current local checks pass 25 regression tests and 22 use-case definitions. No model calls were made. Desktop discovery and
behavioral skill execution were not exercised by this packaging check.
