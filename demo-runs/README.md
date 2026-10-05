# Demo runs

One folder per full run of the ten-motion chain, named `DDMMMYYYY-the-fun-scenario-name`. Each run folder holds one subfolder per operator, so the same scenario can be run by Claude, Codex or Dean and compared side by side.

```text
demo-runs/
└── 04OCT2026-the-cranky-conveyor/
    ├── README.md            what the scenario is and how the runs differ
    ├── claude/              Claude's run (this is the pattern to copy)
    │   ├── README.md        run card: inputs, stand-in decisions, status
    │   ├── 01-market-intel.md … 10-prototyping.md
    │   └── PROTOTYPE-PROMPT.md   paste-ready MVN prompt for Lovable, Stitch and friends
    └── codex/               add Codex's run here
```

Rules for every run: save each motion as `NN-name.md`, mark every stand-in decision as not human-approved, keep SYNTHETIC and evidence labels, and never overwrite an earlier run. Start a new dated folder instead.

`runs/` is gitignored (eval receipts). `demo-runs/` is tracked on purpose.
