# The Cranky Conveyor Scenario: Claude's run (04OCT2026)

- **Operator:** Claude (Opus 5.5, with Sonnet 5.5 for the early setup), in Claude Code, reading the repo's `skills/dlab-step01` to `step10` SKILL.md files directly
- **Mode:** Context dump with labeled best guesses, no browsing. The sourced case file in `notebook/case-study/` was the source pack.
- **Decisions:** every gate was decided by Claude as a stand-in, because Dean asked for a hands-off run. **None is a recorded human approval.**
- **Status:** all ten motions drafted. Prototype NOT BUILT, experiments NOT RUN.

## The chain in one table

| # | Motion | Stand-in call |
|---|---|---|
| 01 | [Market Intel](01-market-intel.md) | Detection and prediction are crowded (Augury, Senseye, Tractian, CMMS AI). 22,643 US plants at 100 to 499 employees. Adoption, downtime cost and willingness to pay UNKNOWN. |
| 02 | [Segment](02-segment.md) | Mid-sized discrete plants with a CMMS plus live signals. Base SOM about 80 plants, about $1.0M a year at month 24 (range $0.1M to $2.9M), all assumptions labeled. |
| 03 | [Persona](03-persona.md) | Maintenance manager buried in early warnings, reacting to whatever trips first. Top job: pick what to check next. |
| 04 | [Opportunity Solution Tree](04-opportunity-solution-tree.md) | Y0 fewer unplanned stops. O1 see trouble before it trips; O2 get a window; O3 trust the call. S1 dashboard, S2 explained watchlist, S4 router to the bake-off. |
| 05 | [Value vs. Differentiation](05-value-prop-differentiation.md) | The HiPPO's dashboard is different but not more valuable. The explained watchlist wins, conditionally. Rival: Tractian. Illustrative base net benefit about +$18k a plant a year; negative in the low case. |
| 06 | [Positioning](06-positioning-statement.md) | Next Check, a maintenance decision aid that tells managers which few machines to check before they fail, and why. Reason to believe UNKNOWN. |
| 07 | [Solution Hypothesis](07-solution-hypothesis.md) | If we flag emerging equipment risks and explain why, then managers decide what to check before failure. Tests: review recent failures; simulate failures with synthetic IIoT data. |
| 08 | [Storyboard](08-storyboard.md) | Six frames. The gearbox seizes; later the watchlist catches bearing wear in a planned stop. |
| 09 | [Minimum Viable Narrative](09-minimum-viable-narrative.md) | Setup, Encounter, five action-response transactions, Resolution. |
| 10 | [Prototyping](10-prototyping.md) | Smallest brutal-truth test: a call about the last three failures plus paper cards. The prototype closes the call as a stimulus. |

**For tonight's builds:** [`PROTOTYPE-PROMPT.md`](PROTOTYPE-PROMPT.md), 4,607 characters, paste-ready, plus the Productside style guide.

## The arc, HiPPO to opportunity

The HiPPO asked for an AI maintenance dashboard. The chain kept the dashboard as one candidate (S1), and the bake-off found it was different but not more valuable: more to look at, same guesswork. The opportunity with the best product-market fit was moving the plant from intervention by exception (reacting to whatever trips) to intervention by prediction. That means a short, explained watchlist that ends with the smallest check and a reason production will accept. Delightful, differentiated, hard to copy and margin-enhancing are all still hypotheses.

## Things Dean should know

- **Deck alignment:** the run matches the deck's slides 15 to 17 (same IF/THEN, same two tiny acts, same MVN shape). Places it differs:
  - The OST outcome is "fewer unplanned stops," not "decrease downtime."
  - The positioning names a working product, Next Check, and a watchlist rather than a dashboard.
  - Opportunities are phrased as needs (see trouble before it trips; get a window).
- **The deck's first metric** ("reduce % of failures via interventions") is kept as the eventual outcome. The two-week test uses a leading indicator because the outcome cannot be observed that fast.
- **Persona order** follows the current skill: persona first, then jobs, pains and gains, then problem framing.
- **Numbers to treat with care:** the downtime cost per hour ($5k / $10k / $20k) and all segment shares are estimates. Only the Census plant counts are hard.
- **Codex** runs the same exercise into `../codex/`. Compare the bake-off and the MVN loop first; that is where runs differ most.
