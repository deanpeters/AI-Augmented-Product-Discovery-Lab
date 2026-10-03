# Start with one discovery motion

For Product Managers, founders and product teams exploring what deserves to be built. The outcome is a clearer decision and a next experiment, not a pile of completed canvases.

## Use a prompt, no installation

1. Open a prompt from the [demo launchpad](DEMO.md).
2. Copy everything inside its large code block into your AI chat.
3. Add your idea, notes or the small handoff from a previous motion.
4. Choose Guided, Context dump or Best guess. Guided asks one question at a time.
5. Edit the draft. Choose approve, revise, gather evidence or stop at the decision gate.

You can start with any motion. Nothing requires completing eleven steps first. For a first swing, try [Frame the Problem](prompts/04-problem-frame.md).

Append this example context after the prompt:

```text
Mode: Guided
Target: maintenance managers in mid-sized manufacturing plants.
Desired outcome: make clearer decisions about which equipment concern to investigate next.
Initial ask: someone suggested an AI predictive-maintenance dashboard.
Evidence: no customer interviews or plant observations supplied yet.
Constraint: this is a teaching exercise with fictional material.
Help me frame the problem before choosing a solution.
```

That names a discovery direction. It does not claim the problem is real or the solution useful.

## Use the equivalent skill

Open or attach the corresponding `skills/<name>/SKILL.md` to a skill-capable assistant and ask it to follow that file. Each skill is self-contained. If your tool has a skill installer, install the selected folder using that tool's supported workflow; this project does not require a plugin.

Example for an assistant with workspace file access:

```text
Read skills/dlab-step04-problem-frame/SKILL.md and follow it.
Mode: Guided.
Use the manufacturing teaching context above.
Stop at the human decision gate.
```

An installed tool may expose it as `$dlab-step04-problem-frame`. Merely cloning this project does not install skills into your assistant.

## Hand off without hauling the whole conversation

```text
Target:
What we believe:
Evidence:
What is inferred:
Desired outcome:
Biggest unanswered question:
```

Carry source references and uncertainty labels with the claims. Add a selected concept or hypothesis where the next motion needs it. A small handoff can travel between tools; approval does not turn a belief into evidence.

## Get a local copy

While this repository is private, GitHub access is required. After public release, attendees can use the prompt files directly in the browser.

```bash
git clone https://github.com/deanpeters/AI-Augmented-Product-Discovery-Lab.git
cd AI-Augmented-Product-Discovery-Lab
```

No local runtime is required to copy a prompt. Maintainers need Python 3.9 or newer and Bash only for the mechanical checks:

```bash
./scripts/test-library.sh
```

If `python3` is unavailable, prompt and skill use still works; the maintenance checks cannot run until Python is available.
