# Readiness

Status as of October 3, 2026, two days before the show.

## What is ready

- The ten-motion sequence, skills, prompts, examples, templates and the presenter script are aligned and pass local checks.
- A native, editable 21-slide deck is built from `slides/build-deck.js`, with a PDF fallback. See [SHOWRUN](../SHOWRUN.md) for the slide map.
- NotebookLM source documents exist for the presentation and for an industry case file, with project instructions for ChatGPT Projects, Gemini Gems, Copilot Agents and Notebooks. See [what we built and learned](LEARNINGS.md).
- The industry research behind the case file is saved in `research/manufacturing-pdm/`, with raw fetches kept locally.
- The Hall of Shame cases have checked sources and dates. See `notebook/hall-of-shame-sources.md`.
- Original lab materials are licensed CC BY-NC-SA 4.0.

## Verification boundaries

Local checks validate metadata, bundled assets, catalog order, prompt parity, local links, case references and harness regressions. They do not establish model adherence or human usability.

**The corrected chain has not been behaviorally re-run.** Former eleven-motion receipts do not validate the new skills. See [results](../evals/RESULTS.md). Optional model tests use cloud inference through Claude; the local check does not.

The deck was rendered and checked in LibreOffice. It was opened in PowerPoint and passed schema validation, but its slides were not viewed in PowerPoint.

## Before Monday

1. Run a full rehearsal in the real tools. See [REHEARSAL](REHEARSAL.md). Save prompts, outputs, small handoffs, timings and what broke.
2. Pre-run Market Intel with real sources and keep URLs and dates. Promote the best rehearsal outputs into `fallbacks/`.
3. Verify a new chat can consume each small handoff.
4. Page through the deck in PowerPoint on the presenting machine. Keep the PDF open as a backup.
5. Mark absent renderings, builds and participant experiments NOT RENDERED, NOT BUILT and NOT RUN. Prototypes built in advance are implementation evidence only.
6. Test the project instructions once in each tool: a case question, a request for a refused statistic, and a request to write a persona quote. It should answer the first and refuse the other two.

## Before an attendee release

Inspect repository visibility and history. Confirm Productside's permission covers redistributing its canvases, logos and the branding guide. No autonomous discovery operator, renderer or prototype build is bundled.
