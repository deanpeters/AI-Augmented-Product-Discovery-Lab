# Rehearsal

Run the whole ten-motion path once in the real tools. Real saved outputs are what make the recovery line true: "AI demos obey Murphy's Law, so I brought receipts."

```bash
./scripts/new-rehearsal.sh 2026-10-04
```

This creates `rehearsal/<date>/` (gitignored) with one capture file per motion plus `timing.md`. For each motion, save the exact prompt, the output, the small handoff, the minutes taken, and what broke.

## Checks that matter on stage

- Did a fresh chat consume each handoff without the earlier conversation?
- Is anything on a slide unreadable from the back of a large room?
- Does any generated artifact claim evidence it does not have? Synthetic stays labeled.
- Which motions go pre-baked if time runs short? Say so out loud on stage.
- Are the built prototypes labeled as implementation checks, not evidence?

Promote the best outputs into `fallbacks/` after the run.
