# What we built and what we learned

Written October 3, 2026, two days before the show. A record of decisions, findings and working rules so none of it has to be rediscovered.

## What exists now

- **The deck:** `slides/Build-the-Right-Thing.pptx`, 21 native, editable slides in the Productside style, built by `slides/build-deck.js`. A PDF export (`slides/Build-the-Right-Thing.pdf`) is the fallback if the brand fonts are missing on the presenting machine.
- **NotebookLM source docs for the presentation:** `notebook/01-context.md` and `notebook/02-presentation-outline.md`. Sources for the Hall of Shame cases are in `notebook/hall-of-shame-sources.md`.
- **An industry case file for the attendee notebook:** `notebook/case-study/`, with an exercise guide (`00`), industry and market (`01`), customer, problem and opportunity (`02`), a source register (`03`) and `project-instructions.md` (7,407 characters, for ChatGPT Projects, Gemini Gems, Copilot Agents and NotebookLM).
- **The research behind the case file:** `research/manufacturing-pdm/`, five sourced reports plus scripts and the prompts used. Raw fetches are in the gitignored `sources/pdm-research-raw/`.
- **Rehearsal kit:** `docs/REHEARSAL.md` and `scripts/new-rehearsal.sh`.
- **License:** CC BY-NC-SA 4.0 for original lab materials. Productside canvases, logos and brand assets are Productside property used with permission.

## Show design: what we decided

- **The shape of a canvas matters, the text does not.** The first canvas slides copied Productside canvases to the letter and were unreadable in a large room. We kept each canvas's shape and cut the text to a few big words (about 16 point minimum, 18 to 26 point for main content). The detail lives in the skills, prompts, mural and speaker notes.
- **Adapt canvases to the chain without fuss.** The canvases are structural references. Order, axes and wording bend to the ten-motion chain. Only flag a mismatch if it changes what the audience sees or breaks an evidence rule.
- **The MVN has four sections, with an internal loop.** Setup, Encounter, an action and response loop of about 3 to 6 exchanges, and Resolution. "New Action" was an artifact of flattening the loop.
- **The 2x2 is a bake-off.** Every solution from the Opportunity Solution Tree, the competitors and today's workaround go on one value-versus-difference map.
- **The Segment shows TAM, SAM and SOM as three circles,** from population, trade and industry data, and competition plus reach and capacity. No numbers on the slide.
- **The storyboard arc:** who has the problem, what the problem is, the oh crap moment, the solution arrives, the solution aha moment, sharing the love.
- **The tiny-acts principle needed a correction.** "Tiniest act wins" was wrong. The winner is the tiniest act of discovery that returns the most brutal truth, or gives enough signal to pivot, punt or pursue. Tiny alone is not enough. The usual failure is overbuilding the experiment. The slide stamp reads JUST ENOUGH SIGNAL.
- **Three question-only slides mark the parts:** What problem are we solving and for whom, Where do we play and where do we win, What must be true and how do we learn.
- **No paper.** The ladder says conversation, storyboard or wireframe, interaction, build, and "lo-fi, if it tells the truth."

## Show design: what to watch

- Persona now takes two slides (JTBD framing canvas, then proto-persona canvas). Budget time for it.
- The Hall of Shame lessons for Relay.app and Humane are the loosest fits. The sources show a shutdown and a discontinued product, not why. Present the lessons as your read.
- Prototypes built in advance are implementation evidence only. The Prototyping slide no longer carries status pills. The status lives in the speaker notes.

## Industry research: what we found

The full set is in `research/manufacturing-pdm/` and in the case file. The findings worth carrying:

- **Mid-sized plants are real and countable.** Census 2023: 284,452 manufacturing plants, 22,643 with 100 to 499 employees (8.0 percent of plants, 37.2 percent of employees), 10,943 of them in six discrete subsectors.
- **Market-size numbers are not usable.** Seven analyst estimates disagree by about 1.5 times for 2025 and about 3.5 times for 2031, with no method disclosed. We did not average them.
- **A famous downtime number looks misattributed.** "$260,000 an hour" traces, in the whitepaper we opened, to a 2016 report on IT infrastructure uptime, not manufacturing.
- **No source measures downtime cost, predictive-maintenance adoption or maintenance headcount for mid-sized US plants.** All UNKNOWN.
- **Savings claims range from 5 percent to 98 percent** and mostly trace to vendors, consultancies or untraceable older studies. The neutral government source says the effect is not well documented nationally.
- **The central question is open.** No study tests whether poor information or organization, planning, permission and trust is the real obstacle to the "what do we investigate next" decision. The thin evidence leans toward organization and trust. The case file recommends a bounded discovery sprint, not a build.
- **No vendor we read frames the problem as conflicting reports needing adjudication.** That is an opening or a sign it is not the real problem, and we cannot tell which without interviews.

## Process: what we learned

- **Use Scrapling before asking a person for sources.** It is installed (`scrapling extract get URL out.md`, then `stealthy-fetch`) and `scripts/fetch-page.sh` wraps it. It fetched pages that web fetch could not.
- **Never present an unfetched or guessed URL as verified.** One CanLII URL was built from a pattern and marked as a primary source before it was checked. It turned out to be right, but the process was wrong.
- **Verify the headline numbers against the raw file.** The Census counts, DOE, NIST and Siemens figures, the Autodesk 8-K and the BLS pull were spot-checked after the agents reported.
- **Save research once.** Reports and raw files are stored so nobody pays tokens for the same work twice.
- **Conflicting evidence is a finding.** Showing the spread beat averaging it.
- **Productside canvases and the branding guide are included with permission.** Dean confirmed permission to share the supplied canvases and brand assets; their ownership remains separate from the lab license.

## Still open

- A full live rehearsal in the real tools, with outputs saved as receipts.
- Pre-run Market Intel with real sources, and replace the synthetic fallbacks with saved outputs.
- Open the deck once in PowerPoint on the presenting machine. It was only rendered in LibreOffice here.
- Relay.app and Jacob Bank X posts: confirm wording in a browser. HP and Humane own announcements: optional.
- Interviews with real maintenance managers and planners. That is the next step for the case study, not more desk research.

## Teaching lessons: preparation notes and session feedback

Preparation feedback from Dean: corporate wording gets in the way; standalone entry should be obvious; outputs need a concise decision readout; synthetic learning must not masquerade as customer truth. The entry guides, routes and transfer exercise address those observations.

Session observations are still unanswered. This is not a completed retrospective.

| Question | What we know |
|---|---|
| Which instruction confused attendees? | UNKNOWN; attendee feedback not supplied |
| Where did the live transitions or timing break? | UNKNOWN; session observations not supplied |
| Which motion could attendees use independently? | UNKNOWN; independent-use observations not supplied |
| What did Dean want to change after teaching it? | UNKNOWN; post-session observations not supplied |

When actual notes arrive, record the observation, the specific instruction/example changed and how we will check whether it helps. Do not fill these gaps with imagined feedback.
