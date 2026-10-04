# Change a skill without leaving its audience behind

Canonical skill instructions, templates and examples live under `skills/`.
A change there must travel to the matching prompt and both distribution kits
in the same pull request or commit.

After editing, run one command from the repository folder:

```bash
bash scripts/refresh-library.sh
```

This regenerates all ten prompt equivalents, rebuilds the Codex and Claude
`.plugin` and `.zip` files, refreshes `plugins/codex.plugin`, and runs the
local checks. It makes no model calls, commits nothing and pushes nothing.
Review the resulting diff and include the generated changes with the skill.

The client is explicit in each filename: `dist/dlab-claude-<version>.plugin`
and `.zip` for Claude; `dist/dlab-codex-<version>.plugin` and `.zip` for Codex.
Within each client, the two extensions contain identical ZIP bytes. Keep only
the current version of each client in `dist/`; remove superseded archives when
shipping a new version. Git history retains previously committed releases.

For a release, update versions consistently in `plugin.json`,
`.codex-plugin/plugin.json`, `.claude-plugin/plugin.json` and
`.claude-plugin/marketplace.json`; update the download links in both plugin
guides before refreshing. Update affected demo context and use-case criteria
when behavior changes. Prior model receipts become stale after asset edits.

## GitHub check

The validation workflow runs on every push and pull request. It checks the
committed prompts and distribution files without rebuilding them first, so
stale derivatives fail instead of being silently repaired only inside CI.
Both clients' archives are compared against canonical content; missing files,
changed templates/examples, unexpected entries and mismatched `.zip` copies
fail. The pull-request template includes the release checklist.

Successful local/CI checks establish packaging and mechanical consistency.
Behavioral model tests and live rehearsal remain separate. Repository branch
protection must be configured separately to make this CI job a merge gate.
