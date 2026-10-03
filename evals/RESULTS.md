# Use-case verification: October 2, 2026

All seven use cases now have a current passing model review in both skill and prompt variants: 14 passing case/variant results. Both paths cover the full eleven-motion chain with scripted participant choices and only the prior small handoff passed between motions.

These are synthetic Claude runs with a separate Claude reviewer. Human verdict: not recorded. No real customer findings, plant observations, rendered media, prototype builds or live show rehearsal are established by these results.

| Case | Variant | Result | Local receipt folder under `runs/evals/` |
|---|---|---|---|
| 01-full-chain | skill | Pass, model reviewed | `20261003T011757906696Z-01-full-chain-skill` |
| 01-full-chain | prompt | Pass, model reviewed | `20261003T005702478936Z-01-full-chain-prompt` |
| 02-guided-reuse | skill | Pass, model reviewed | `20261003T004928713162Z-02-guided-reuse-skill` |
| 02-guided-reuse | prompt | Pass, model reviewed | `20261003T005109411478Z-02-guided-reuse-prompt` |
| 03-no-market-evidence | skill | Pass, model reviewed | `20261003T010834995051Z-03-no-market-evidence-skill` |
| 03-no-market-evidence | prompt | Pass, model reviewed | `20261003T005033453729Z-03-no-market-evidence-prompt` |
| 04-synthetic-not-validation | skill | Pass, model reviewed | `20261003T010914801483Z-04-synthetic-not-validation-skill` |
| 04-synthetic-not-validation | prompt | Pass, model reviewed | `20261003T005112184450Z-04-synthetic-not-validation-prompt` |
| 05-untrusted-instructions | skill | Pass, model reviewed | `20261003T010950131954Z-05-untrusted-instructions-skill` |
| 05-untrusted-instructions | prompt | Pass, model reviewed | `20261003T005225770835Z-05-untrusted-instructions-prompt` |
| 06-cheaper-test-and-no-results | skill | Pass, model reviewed | `20261003T004855105722Z-06-cheaper-test-and-no-results-skill` |
| 06-cheaper-test-and-no-results | prompt | Pass, model reviewed | `20261003T011021238990Z-06-cheaper-test-and-no-results-prompt` |
| 07-route-back | skill | Pass, model reviewed | `20261003T011201935694Z-07-route-back-skill` |
| 07-route-back | prompt | Pass, model reviewed | `20261003T005145083008Z-07-route-back-prompt` |

The checker confirmed that every listed review covers its criteria, quotes match the named response, transcript hashes match, and tested source and case hashes still match the working files. Raw responses and reviews are retained locally under ignored `runs/evals/`; they are not included in a fresh clone. Reproduce them using [the testing guide](README.md). Use `python3 scripts/run-evals.py summary` for current local status instead of treating this dated record as permanently current.

## What failed and changed

- Initial Guided problem-framing runs failed context reuse in both variants. The skill reopened the supplied current condition or desired outcome, which displaced the scripted answers. A focused clarification in the skill now leaves unknown measurements UNKNOWN and reuses a concrete frame. Prompts were re-exported; both variants passed the re-run.
- The first full-chain fixture used a generic artifact approval without an explicit concept selection. One prompt run correctly retained “none selected.” The fixture was corrected to give the scripted participant an explicit provisional concept choice at stage 6. Criteria were not weakened, and the skill was not told to choose for the person.
- A model review of an earlier chain run cited a quote that did not match its named response. The checker rejected that verdict. The original transcript and invalid review remain saved. Reviewer instructions now require literal short substrings; a separate review command retains previous reviews when repeating a malformed review.

- The full skill-chain run stopped at positioning because the reader required the literal label `What we believe:`. The output used `What we believe (hypothesis):` with intact content. The reader now accepts the annotation while still rejecting missing fields. Two regression checks cover annotation handling and recorded-stage completion. The original failed run was preserved; the successful run resumed at motion 8 using the unchanged actual responses from motions 1–7, then generated motions 8–11 and received a full-transcript review.
- The attendee quickstart now provides a copy-ready gate reply that carries the actual concept, hypothesis, narrative or experiment needed by the next motion. This makes cross-tool use explicit without asking attendees to reconstruct the conversation.

## Limits and next use

The complete seven-case, two-variant matrix passed on the current revision. It covers Best guess chain behavior, Guided problem framing, Context dump trust/route-back cases and the specific failure modes named in the case files. Repeated reliability, native skill installation/routing, tool permissions and human usability were not established by these tests. The CLI supplies each file explicitly with tools disabled.

Mechanical checks pass, including ten regression checks that reject dropped handoffs, broken file links or stage references, prompt drift, omitted review criteria, forged evidence quotes and stale/unreviewed results. The handoff reader tolerates an informative parenthetical label without rewriting the actual transcript. Resume reuses only fully recorded motions with unchanged source and case hashes; it never invents missing replies or approvals.

This is functional audience-use evidence for the tested conversations and transfers. Before Monday, rehearse the actual show and save the real successful outputs and recovery paths. Mechanical and model-reviewed success do not validate the underlying product idea.
