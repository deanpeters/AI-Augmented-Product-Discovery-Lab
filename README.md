# AI-Augmented Product Discovery Lab

> **Build the right thing before burning runway on building it right.**


## Use the lab

**11 discovery skills. 11 paste-ready prompt equivalents. Same conversation, two ways in.**

Start with [QUICKSTART](QUICKSTART.md), choose a motion from [the demo launchpad](DEMO.md), or go straight to [the problem-framing prompt](prompts/04-problem-frame.md). No skill installation is required for the prompt path.

Each motion offers Guided, Context dump and Best guess. Guided capture asks one question at a time, reuses supplied context, runs visible numbered steps and ends in an editable artifact plus a human decision. Each works on its own or hands a small brief to the next.

```text
Market → People → Jobs / Pains / Gains → Problem Frame
       → Synthetic Stress Tests → Opportunities / Experiments
       → Positioning → Narrative → Story → Prototype → Learning
```

The repo starts privately while we prepare Monday's attendee release. The chain interface is defined; an autonomous runner is not implemented. Mechanical checks pass; model behavior and full live rehearsal remain to be evaluated. See [readiness](docs/READINESS.md), [chain behavior](docs/CHAIN.md) and [provenance](docs/PROVENANCE.md).

The sections below preserve the original show brief. Agent strategy and broader economics are optional teaching ideas there; the current runnable catalog follows the SHOWRUN arc, with economics and hypothesis work inside the opportunity motion.

This repository is the hands-on companion to **AI-Augmented Product Discovery & Ideation Validation**, presented live by **Dean Peters** at the **Triangle Startup Collective** in Raleigh on **Monday, October 5, 2026**.

It contains the prompts, Skills, canvases, examples, experiments, narratives, prototypes, and other working artifacts used during the session.

Because AI can help you build the wrong thing really fucking fast.

---

## What This Is

This is not a slide dump.

It is a **working product discovery lab**.

The point of the Meetup is to show how AI can augment the product work that should happen **before** a team commits serious time, money, and engineering capacity to a solution.

We'll use AI to help us:

- investigate a market
- understand customers and their jobs
- frame the right problem
- separate problem space from solution space
- explore opportunities
- test economic value
- find meaningful differentiation
- shape an AI or agent strategy
- write hypotheses
- choose cheap experiments
- tell the product story
- create prototypes to learn from

The goal is not:

> **build faster**

The goal is:

> **learn faster, decide better, then build**

---

## The Meetup

**AI-Augmented Product Discovery & Ideation Validation with Dean Peters**

**Monday, October 5, 2026**
**6:00 PM to 8:00 PM EDT**

**Raleigh Founded**
509 W North St, Suite 224
Raleigh, NC

Hosted by the **Triangle Startup Collective**.

With gratitude to **Parker Mayes** and **James Fredley** for bringing the session together.

---

# The Problem

AI has collapsed the distance between:

> **idea → implementation**

It has not collapsed the distance between:

> **idea → good idea**

You can vibe-code a prototype over a weekend and still have no stinking idea whether anyone wants it.

That makes discovery more important, not less.

The most expensive mistake isn't necessarily building something badly.

It's getting really good at building the wrong thing.

---

# The Show

This Meetup is more **performance** than presentation.

Some work will happen live.

Some slower research will be run beforehand so we don't spend twenty minutes watching a progress spinner.

And because live AI demos obey Murphy's Law, some successful rehearsal artifacts will be sitting nearby as backup.

The rough arc is:

~~~text
MARKET
  ↓
PEOPLE
  ↓
PROBLEM
  ↓
AGENT STRATEGY
  ↓
OPPORTUNITIES
  ↓
ECONOMICS
  ↓
DIFFERENTIATION
  ↓
HYPOTHESIS
  ↓
EXPERIMENT
  ↓
NARRATIVE
  ↓
STORY
  ↓
PROTOTYPE
~~~

Each step should **earn the next investment**.

---

# Act I — Don't Build Yet

We start by refusing to build anything.

## Market and Segment Intelligence

We'll begin with a deep market-intelligence run using Dean's market research methods and Skills.

The full intelligence sweep will likely happen before the Meetup because good research takes longer than a stage demo should.

Live, we'll pick that work back up and turn it into something useful, such as a focused **Battle Card**.

The research should separate:

- **Fact**
- **Inference**
- **Assumption / best guess**
- **Unknown**

And wherever possible, facts should carry direct source URLs and dates.

Research without provenance is just confident storytelling.

## Customers, Jobs, Pains, and Gains

From the market, we'll work our way toward the people living inside it.

We'll use variations of:

- JTBD Customer Circle
- Productside discovery canvases
- customer evidence
- public Voice of Customer
- stakeholder and buyer perspectives

The point is not to generate a fake persona with a name, age, favorite coffee, and stock photo.

The point is to understand:

> **What are they trying to accomplish, what gets in the way, and why does it matter?**

## Problem Framing

We'll use the **MITRE Problem Framing Canvas** and a hybrid of Dean's Customer Circle + Problem Statement work.

This is where we slow down AI's natural tendency to be "helpful" by immediately suggesting dashboards, copilots, agents, alerts, recommendation engines, apps, and automation.

We still have not asked AI what to build.

That's intentional.

---

# Act II — Earn the Solution

Once the problem starts becoming defensible, we can explore what kind of solution actually deserves consideration.

## Agent Strategy Canvas

The **Agent Strategy Canvas** is one of the central artifacts in the session.

It helps separate:

### Problem Space
What condition needs to change?

### Solution Space
What should happen differently?

### Agent Space
Where, if anywhere, does autonomy help?

### Metrics Space
How will we know behavior and outcomes improved?

Finding a problem does **not** automatically mean we found an agent-shaped problem.

We'll look at context, actions, autonomy, boundaries, accountability, human handoffs, constraints, and measures.

## Opportunity Solution Tree

We'll use an **Opportunity Solution Tree** to move from:

> **Outcome → Opportunities → Solutions → Experiments**

Not:

> **Solution → justification**

The tree should make premature convergence visible.

## Add the Economics

We're extending the tree with two economic lenses.

### Value for the Customer

Could this improve:

- revenue
- throughput
- downtime
- labor
- cycle time
- quality
- waste
- capacity
- risk
- avoided loss

### Value for the Startup

Could this improve:

- acquisition
- conversion
- retention
- expansion
- willingness to pay
- margin
- cost-to-serve
- strategic leverage
- defensibility

A useful feature is not automatically a viable business.

## Benefits × Differentiation

Before writing a cute positioning statement, we'll ask two harder questions:

> **Does somebody meaningfully give a damn?**

and:

> **Why this instead of the real alternative?**

We'll use a simple Benefits × Differentiation view:

~~~text
                    HIGH DIFFERENTIATION
                           ↑
                           |
        Interesting        |        MOAT
        but weak value     |        ZONE
                           |
LOW BENEFIT ---------------+--------------- HIGH BENEFIT
                           |
        Who cares?         |        Commodity
                           |        value
                           |
                           ↓
                    LOW DIFFERENTIATION
~~~

The labels may evolve.

The point won't.

**Differentiation without value is novelty.
Value without differentiation gets commoditized.**

Only then do we move into positioning.

---

# Act III — Turn Belief Into Something Testable

Once we have a direction, we need to turn it into explicit bets.

## Epic Solution Hypothesis

We'll state the bet in a form such as:

~~~text
We believe [solution capability]
for [target audience]
will enable [behavior / outcome]
resulting in [customer + startup outcome].

We'll know this is true when [evidence].
~~~

If we can't state the bet, we can't design the learning.

## Tiny Acts of Discovery

Then we'll ask:

> **What is the cheapest thing we can do that could change our mind?**

Depending on the risk, that might be:

- a customer conversation
- a concierge test
- a fake door
- a synthetic scenario
- a workflow simulation
- a storyboard
- a landing page
- a data analysis
- a clickable prototype
- a lightweight operational test

The prototype is **not automatically the next step**.

The risk decides the experiment.

---

# Act IV — Make It Visible Without Marrying It

Once we've earned enough confidence, we'll increase fidelity.

But fidelity is not evidence.

## Minimum Viable Narrative

We'll create a **Minimum Viable Narrative** describing the smallest experience worth testing.

One possible structure:

1. Setup
2. Encounter
3. Action
4. Response
5. New Action
6. Resolution

The narrative should describe the experience before prescribing the interface.

> **Describe. Don't prescribe.**

## One Narrative, Multiple Renderers

The same narrative can then feed several tools.

### Storyboard
Turn the product idea into a visual human story.

### Explainer
Create something easy to socialize while the product is still being shaped or built.

### UI Concept
Explore how the interaction might work.

### Functional Prototype
Make the hypothesis touchable.

The important part:

> **We're not asking four AIs to invent the product four times.**

We're giving multiple tools the same target audience, problem, positioning, narrative, constraints, and branding guidance, then asking each to render that product thinking for a different purpose.

That's context engineering applied to product work.

---

# Likely Demo Scenario

The current working scenario is **Industrial IoT / manufacturing**.

A starting problem space might be:

> Help mid-sized manufacturers reduce the operational and financial impact of unplanned equipment downtime.

Notice what that does **not** say:

> Build an AI predictive-maintenance platform.

We'll discover our way toward the solution rather than planting it in the first sentence.

Possible actors include:

- maintenance technician
- reliability / maintenance manager
- plant manager
- operations executive
- IT / OT / security

We may also generate explicitly synthetic operating scenarios using signals such as vibration, temperature, current draw, pressure, flow, production load, maintenance events, operator notes, and downtime.

Synthetic data will be used to **generate hypotheses and design experiments**.

It is not real customer or plant evidence.

---

# What's In This Repo

The starter currently contains:

~~~text
/
├── README.md, AGENTS.md, SHOWRUN.md
├── QUICKSTART.md, DEMO.md
├── skills/                  11 standalone conversational motions
├── prompts/                 11 generated paste-ready equivalents
├── docs/                    chain, catalog, provenance, readiness
├── fallbacks/               synthetic illustration seeds
├── examples/                synthetic entry context
├── scripts/                 export and mechanical validation
└── .github/workflows/       automatic validation
~~~

Brand assets, sourced market research, rendered stories, prototypes and rehearsal receipts will be added as they earn their place. Private working material stays outside the tracked starter.

Some of this will be generated before the event.

Some will be created live.

Some will probably break live and be replaced with the thing we generated the night before.

That's part of the fun.

---

# Source Repositories

Much of this work builds on prompts, Skills, and product-management material Dean has already published.

## Product Manager Prompts
https://github.com/deanpeters/product-manager-prompts

## Product Manager Skills
https://github.com/deanpeters/Product-Manager-Skills

## Productside Market Intelligence Skills
https://github.com/Productside/Productside-Market-Intelligence-Skills

## MITRE ITK Skills
https://github.com/deanpeters/MITRE-ITK-Skills

## Product Manager Antagonist Skills
https://github.com/deanpeters/product-manager-antagonist-skills

## Product Manager Loops
https://github.com/deanpeters/Product-Manager-Loops

## AI Product Operating Model Skills
https://github.com/deanpeters/ai-product-operating-model-skills

## Evals for Product Managers
https://github.com/deanpeters/evals-for-product-managers

---

# Prompts, Skills, Agents, and Plugins

One of the ideas you'll see throughout this repo:

> **Don't use a more complicated AI abstraction than the work requires.**

### Prompt
Explore the play.

### Skill
Codify the play.

### Agent
Delegate multi-step work.

### Plugin
Distribute the capability.

Or:

> **Prompt → explore**
> **Skill → codify**
> **Agent → delegate**
> **Plugin → distribute**

Don't build an agent because you just learned the word agent.

---

# About Modified Material

Some prompts and Skills in this repo may be adapted specifically for the Meetup.

Where appropriate, modified material should include:

~~~text
Upstream:
Original path:
Original author / attribution:
License:
Modified for:
Changes:
~~~

This repo should not make adapted material look like canonical upstream content.

Please respect the license attached to each upstream project or file.

---

# Mural Board

A companion Mural board will be shared with Meetup participants.

It will contain the visual working space for many of the canvases and discovery motions shown live.

**Link coming soon.**

---

# Why Leave This Behind?

Because a deck explaining discovery isn't nearly as useful as actually having:

- the prompt
- the Skill
- the canvas
- the examples
- the experiment
- the story
- the prototype
- the source

The hope is that you can clone this repo, steal what helps, modify it for your own product work, and leave the rest.

---

# The Rules of the Lab

> **Outcomes > outputs**

> **Features are not strategy**

> **Context is work**

> **Discovery precedes commitment**

> **Evidence increases before fidelity increases**

> **Synthetic evidence is not customer evidence**

> **A prototype is an experiment, not production**

> **Progress means uncertainty reduced, not activity increased**

And above all:

> **Each step earns the next investment.**

---

# Final Thought

AI made building cheap.

Good.

That means we can spend less time arguing about whether something can be built and more time learning whether it **should** be built.

**Learn faster. Decide better. Then build.**
