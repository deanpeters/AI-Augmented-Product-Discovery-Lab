# 10 Prototype Experiment Brief

Lab adaptation, not an authoritative Productside canvas.

- **Date:** 2026-10-04
- **Motion / mode:** Prototyping / Context dump
- **Built from:** 09 MVN (all five transactions); 07 hypothesis and decision rule; 06 positioning
- **Status:** DRAFT. **NOT BUILT** by this run. Experiment **NOT RUN.**
- **Decider:** Claude, as stand-in for Dean. **Not a recorded human approval.**
- **Synthetic status:** fictional data only. Any built prototype is a stimulus, not evidence.

## Hypothesis, riskiest assumption, brutal truth

- **Hypothesis:** flag emerging equipment risks and explain why, and managers decide what to check before failure.
- **Riskiest assumption:** early signals were there before recent failures and went unacted because nobody ranked them.
- **The brutal truth that would stop or change us:** "We knew. We couldn't get the window." Or: "That failure came out of nowhere." Either one means a better list will not change outcomes.

## What is the smallest, cheapest test we can run to learn the most brutal truth?

| Option | Truth it can expose | Cost / access | Verdict |
|---|---|---|---|
| Recent-failure conversation (Act 1) | Were signals there; what blocked acting | 5 to 8 calls; recruiting needed | **Wins.** Tiniest act that can return the brutal truth |
| Paper watchlist cards, with vs. without the why (E2) | Does the why change the pick | An hour to make; same calls | Run inside the same calls |
| Clickable prototype from the MVN | Can they follow flag → conflict → consequence → booking → reason, and repeat the why | Tonight, via Lovable or Stitch; cheap now | Use as a stimulus at the end of the call; cannot show demand, accuracy or willingness to pay |
| Synthetic IIoT failure simulation (Act 2) | Can a ranking be explained at all | Internal | Hypothesis-generating only |
| Concierge watchlist for one plant (E6) | Will a manager act on a real list | Weeks; needs plant data and consent | Next rung, only if Act 1 passes |
| Technical probe on real CMMS data | Feasibility of ranking | Needs data access | Not yet |

Lo-fi wins: the conversation plus paper cards can discriminate the assumption. The prototype is worth having because it is now nearly free and makes the loop concrete for the room and for participants, but it sits on top of the conversation, not in place of it.

## Participant task and context

45-minute call with a maintenance manager or planner at a Segment A plant:
1. Walk back their last three unplanned stops (signals, who knew, what blocked, who approved).
2. Pick next week's check from five paper cards, first without reasons, then with.
3. Click through the prototype loop and explain, in their words, why they would or would not book the check.

## Expected / disconfirming observations and rule

Uses the rule written in 07, unchanged:
- **Pursue:** at least half of reviewed stops had an unacted signal where information was the blocker, and at least 5 of 8 say the why makes the call easier to defend.
- **Pivot to the incident router (O2 / S4):** signals were there, but permission, parts or production blocked acting.
- **Revise or stop:** predictions would not change maintenance outcomes. Signals rarely preceded the stops, or picks stay the same with or without the why.
- **Punt:** fewer than 5 participants.

## Builder prompt and blocked actions

Use [`PROTOTYPE-PROMPT.md`](PROTOTYPE-PROMPT.md). It carries all five MVN transactions, the exit condition, fictional data and boundaries.

Blocked: real plant or customer data, autonomous diagnosis or scheduling, equipment control, accuracy or savings claims, logins, external integrations, anything sent outside the prototype.

## Build and experiment status

- **Build:** NOT BUILT by this run. Dean plans to generate versions in Lovable, Stitch and others before the show. Record those as builds of a fictional narrative with implementation checks (does the loop work end to end, is uncertainty visible, is the synthetic label present), not as learning results.
- **Experiment:** NOT RUN. No participants, no observations.

## Next decision

Recruit 5 to 8 managers and run the call. Boundary on further investment: no concierge pilot or feasibility work until Act 1 passes the rule.

## Claim ledger

| Claim | Label | Basis |
|---|---|---|
| The conversation can discriminate information vs. permission | INFERRED | method reasoning |
| The prototype cannot show demand, accuracy or willingness to pay | INFERRED | fidelity rule |
| Participant counts and thresholds | ESTIMATE (proposed protocol) | 07 |

## Decision record

- **Draft choice (stand-in):** run the recent-failure call with paper cards; use the prototype as the closing stimulus.
- **Decider:** Claude as stand-in. Dean's selection: not recorded.

## Handoff

```text
Target: Maintenance managers at mid-sized discrete plants.
What we believe: A short, explained watchlist moves the plant from intervention by exception to intervention by prediction.
Evidence: None yet. NOT BUILT, NOT RUN.
What is inferred: The cheapest brutal-truth test is a call about the last three failures, not a build.
Desired outcome: More checks before failure, in planned windows.
Biggest unanswered question: Were the signals there, and was information really what blocked acting?
```

## Final readout

- **Audience:** maintenance managers at mid-sized discrete plants.
- **Hypothesis:** flag emerging risks and explain why, and they check before failure.
- **Brutal truth:** "We knew. We couldn't get the window."

**What is the smallest, cheapest test we can run to learn the most brutal truth?** A 45-minute call about the last three unplanned stops, with paper watchlist cards. The prototype closes the call as a stimulus.

| Test / fidelity | Participant task | Observable evidence | Disconfirmation / decision rule | Time / cost / access |
|---|---|---|---|---|
| Conversation plus paper cards, prototype as closer | Walk back 3 stops; pick a check without and with the why; click the loop | Unacted signals where information blocked; picks or explanations change with the why | Permission blocked: pivot to router. No signals or no change: stop. Under 5 people: punt | Two weeks; 5 to 8 recruits not yet arranged |

**Status:** NOT BUILT, NOT RUN. Prototypes Dean generates tonight are implementation checks of a fictional narrative, not learning results.

**Evidence caveat:** a polished prototype is not stronger evidence. **Next decision:** recruit and run the call before any further build (Recommended). Human choice: not recorded.
