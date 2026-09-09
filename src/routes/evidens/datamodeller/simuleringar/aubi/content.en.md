# AUBI Simulations

## Adaptive Universal Basic Income — simulations of need heterogeneity, social capital, and collective funding

**Status:** Exploratory. This is model and simulation output, not empirical evidence about real institutions. We never write that the simulations "empirically support H2b" — they provide **mechanistic support within the model**, which is a different thing. See **[How We Know](/evidens/sa-vet-vi/)** for the distinction.

---

## The question

> Under what conditions can an adaptive universal basic income — including a collective fund for voluntary work — improve welfare compared to pure universalism, pure targeting, or an individual basic income alone?

This is original work for Svensk Subsidiaritet (Björn Kenneth Holmström, with DeepSeek as a modelling and coding collaborator) — not a GAE report. The simulations test a specific architecture: a universal floor, a need-adaptive top-up layer, and a collective fund financing voluntary work.

---

## Three levels of evidence — and where this work sits

It's easy to conflate three different kinds of support for a hypothesis:

```text
EMPIRICAL EVIDENCE
      ↓
What actually happens to people or in societies?

MODEL EVIDENCE
      ↓
Can the proposed mechanism, in principle, generate the behaviour we expect?

SIMULATION
      ↓
Under which parameter conditions does the mechanism work — or fail?
```

The AUBI simulations give us mainly the bottom two levels: **model evidence and simulation**. They do **not** give us empirical evidence about real welfare systems. That distinction is held strictly throughout this page.

---

## An important distinction: H2b, not H2

It's tempting to connect this directly to hypothesis **H2** in the Evidence Matrix ("greater legitimate variation in preferences increases the potential value of local differentiation"). That would be a mistake.

H2 is about **preference heterogeneity** — people wanting different things.
This work tests **H2b — need heterogeneity**:

> When relevant needs vary substantially between people, groups, or places, uniform provision can perform worse than a common framework with appropriately adapted components.

A transfer that varies with disability or family circumstance doesn't test whether local *preferences* justify differentiation — it tests whether local *need differences* do. These are different mechanisms with different testable implications, and the report keeps them explicitly separate. H2b is therefore treated as its own hypothesis, not a variant of H2.

---

## What the simulations test

The architecture has three layers: a universal floor, an adaptive top-up layer driven by observed (noisy) need, and a collective fund financing voluntary work. Nine sub-studies examine heterogeneity, measurement error, dynamic parameter adjustment, objective-function weighting, feedback, social capital, the allocation between individual transfer and collective fund, sensitivity to efficiency parameters — and, in a later round, a real capacity constraint on the basic income itself.

---

## Headline result: conditional mechanistic support for H2b

> **When need heterogeneity is high and measurement error is moderate, adaptive provision gives better need coverage than pure universalism. When heterogeneity is low, universalism is often better.**

This pattern recurs both in the early comparisons and in the later allocation analysis: at high heterogeneity, the optimum sits at a lower universal floor with more adaptive/fund-based response; relatively homogeneous populations are better served by a higher, simpler floor.

That's exactly the kind of **conditionality** this line of work was looking for — "need heterogeneity → adaptation pays off" is not sufficient on its own. Measurement error, administrative cost, and how the objective function is designed are all necessary conditions, not footnotes.

### When adaptation does *not* help — failure modes

Just as important as when the mechanism works is when it doesn't. The model identifies seven ways adaptive provision can fail. These are **model-identified risks**, not observed failures of real AUBI systems:

- **Measurement failure.** At high observation error, the adaptive advantage disappears: the system misdirects resources often enough to erase the gain from better matching.
- **Administrative overload.** At low need heterogeneity, adaptation provides little or no advantage — the cost of observing and targeting becomes a pure loss. Even at high heterogeneity, sufficiently expensive differentiation can erase the advantage.
- **Objective-function failure.** Without explicit weighting against severe deprivation (λ), the objective function readily optimizes away the most vulnerable in favour of average accuracy. A pure design choice can therefore produce a result that looks good on average while performing poorly for those with the greatest need.
- **Adaptation instability.** Very rapid parameter adjustment increases responsiveness but also volatility. In the tested scenarios, moderate inertia (γ ≤ 0.5) was often preferable — a result *within the model*, not a parameter recommendation for the real world.
- **Feedback instability.** The intervention changes the variable the system is trying to control: need → provision → behaviour/conditions → changed need. This makes the problem cybernetic rather than a one-way targeting problem, and stabilizing mechanisms matter more the stronger the feedback.
- **Goodhart risk.** When provision depends on *measured* need, actors gain incentives to optimize the indicator rather than the underlying condition.
- **Capacity constraint.** Increased nominal transfers do not automatically create more real goods and services. Especially relevant for housing and other capacity-constrained goods.

### Other findings

- **Voluntary-work participation was stable at around 53%, largely independent of the basic-income level** — see the calibration caveat below before reading anything into this about real human behaviour.
- **A mix (≈60% basic income / 40% collective fund) was robust** across several scenarios once social capital was weighted in, including after a real capacity constraint was introduced for the basic income. **b ≈ 0.6 is a simulation result for this specific model, these parameters, and this objective function — not a policy recommendation.**

---

## A conditional architecture space, not a verdict on universalism vs targeting

The simulations should not be read as settling the old dispute between universalism and means-testing — in either direction. What the model describes instead is a **conditional architecture space**, where which design works depends on the system's circumstances:

```text
low heterogeneity
        ↓
a larger universal component may dominate

high heterogeneity
        ↓
adaptive/collective components gain value

poor measurement
        ↓
the adaptive advantage shrinks

high administrative burden
        ↓
the adaptive advantage shrinks

strong collective effects
        ↓
collective provision gains value
```

This makes the bridge to the actual universalism/targeting literature more useful: the question is not which principle is better, but under which observable conditions each architecture performs.

The same logic applies to AUBI itself. The simulations support treating AUBI as a **family of architectures** rather than one fixed system — the size of the floor, the strength of the adaptive layer, the method of need recognition, the speed of adjustment, administrative intensity, the fund's share, the welfare objective, and real resource constraints are all free design dimensions. The model's conclusion is therefore that **there is likely no universally optimal AUBI parameterization**, only parameter ranges that are viable given a particular context. That too is a model-derived conclusion.

---

## What we flagged ourselves, and what the report already answered

We asked internally whether the simulations actually separated money as a *non-resource* (MMT's point) from actual real resources. The latest version of the report is unusually direct about this, and deserves to be described accurately rather than softened.

The original model renamed "budget" to "real resource" (R) without structurally changing the mechanics — R was still distributed as a single scalar between basic income and collective fund, with no prices, supply elasticity, or inflation mechanism. The collective fund got a real capacity constraint (the number of financeable work hours is capped by the fund's size), but **the basic income did not** — money was distributed as though it could automatically be converted into goods and services, regardless of whether real resources actually existed to back it.

A new sub-study ("Real Capacity Model") addresses this directly: the basic income's *real* purchasing power is now bounded by a production capacity C via a saturating function, so a nominal transfer exceeding that capacity produces eroded purchasing power rather than fully met need. Result: the optimal allocation (b ≈ 0.6) remains stable across the tested capacity levels, while higher capacity consistently improves outcomes — but the report also acknowledges the real-capacity function is still heavily simplified, and that price/supply effects on the basic-income side are still not fully modelled.

**Our assessment:** this is a genuine, well-documented step forward, not a solved problem. The asymmetry between B and K is still a simplification (a single scalar capacity C, no actual price level, nothing about *which* goods are scarce). But the difference from the earlier version is real: the report now makes a concrete attempt to test the MMT mechanism in code, rather than only invoking it in prose.

---

## Empirically testable predictions

Perhaps the most valuable output of these simulations isn't "AUBI works" — it's that the model generates concrete, falsifiable predictions that can be tested against real transfer systems:

**Prediction 1 — heterogeneity.** Higher need heterogeneity in a population should increase the relative value of differentiated/adaptive provision over uniform provision. *Observable implication:* in otherwise comparable populations, need-adaptive interventions should beat uniform provision more clearly where the distribution of relevant needs is more dispersed.

**Prediction 2 — measurement quality.** Higher observation error (harder to accurately assess need) should reduce or eliminate that advantage. *Observable implication:* targeted or adaptive programmes with poorer needs assessment should show smaller gains, more misallocation, or both.

**Prediction 3 — administrative cost.** The advantage of differentiated provision should decline as the cost of differentiating rises. *Observable implication:* at similar need heterogeneity, lower-cost targeting should outperform administratively intensive targeting once total system costs are counted, not just transfer expenditure.

**Prediction 4 — objective function.** The benefit of adaptation should depend on how the welfare objective is weighted — particularly how the system treats severe deprivation, not just average accuracy. *Observable implication:* programmes optimizing average shortfall should allocate differently from programmes explicitly prioritizing the worst-off.

**Prediction 5 — adaptation speed.** Rapid parameter adaptation should create more outcome volatility than moderate adaptation, when observations are noisy. *Observable implication:* highly responsive benefit rules should show greater short-term instability when need estimates are uncertain or fast-changing.

**Prediction 6 — feedback.** The effectiveness of adaptive transfers should depend partly on whether the transfer itself changes future need. *Observable implication:* programmes that materially alter measured need should show systematic differences between static targeting evaluations and longer-run evaluations.

**Prediction 7 — collective interventions.** Where collective interventions genuinely reduce future need or create valued social capital, a mixed individual/collective architecture should outperform an equally resourced purely individual transfer, under the corresponding welfare objective. *Observable implication:* programmes combining individual transfers with effective community interventions should outperform transfer-only programmes on appropriately defined broader outcomes.

**Prediction 8 — real capacity.** The welfare effect of additional purchasing power should depend on the supply-side capacity of the relevant goods and services. *Observable implication:* the same transfer increase should have different real effects in areas and sectors with different capacity constraints — housing is the clearest case.

These predictions point toward a concrete next empirical question: **do real social-insurance and transfer systems — disability supplements, child benefits, housing support, caregiver benefits, personal budgets, adaptive social protection — have properties matching the model's assumptions, and do their actual outcomes match the predictions above?** That's where this should go next, not toward more simulations of the same model. See **[Open Questions →](/evidens/syntes/oppna-fragor/)**.

---

## What this establishes, and what it doesn't

**[R] — Rigorous within the model:** Given the model's own assumptions (gamma-distributed needs, a logistic work-decision rule, a saturating capacity function for real purchasing power), the results are internal, reproducible computational findings.

**[H] — Heuristic / exploratory:** What the results *suggest* about real AUBI systems. The report's own confidence assessment was downgraded between versions — the new hypotheses (H21–H24, and H2b) are now consistently labelled **exploratory, low confidence**, not "conditionally supported" as in an earlier draft. That's the right calibration: parameters like φ_work, η_work, and the capacity level C are freely chosen, not calibrated against real data.

**This does NOT establish:**
- that an AUBI system would work this way in reality
- that the 60/40 split is a policy recommendation
- that the participation figure (53%) says anything about real human behaviour
- that the model has fully resolved the real-resource-constraint question (see above)

---

## GAE interpretation

The simulations connect to several mechanisms in the **[GAE lens](/evidens/sa-vet-vi/gae/)**. These are *analytical mappings*, not empirical confirmation — GAE helps name what the model is doing; it doesn't confirm the model is right.

- **Variety gap.** Heterogeneous needs create demand for differentiated system responses.
- **Observability.** Adaptive provision depends on sufficient information about relevant need.
- **Goodhart risk.** Measurement-based provision creates incentives to optimize the observable indicator.
- **Adaptation bottleneck.** Slow adjustment prevents the system from matching rapidly changing needs.
- **Feedback.** The intervention changes the state it is trying to control.
- **Requisite alignment.** The architecture should match the structure of the problem and the information actually available.

---

## H2b in the Evidence Matrix

We've added a row for **H2b** in the central Evidence Matrix, with status **"Model-supported / empirically unresolved"** — a compound status description consistent with how the matrix already handles similar cases (compare H18, H20). This isn't a new formal category, just a clearer description of a state the matrix already has language for.

The four more AUBI-architecture-specific hypotheses (H21–H24) are deliberately **not** added as their own numbered entries in the central matrix yet — they concern the design of this specific collective fund rather than general governance mechanisms, and should stand on their own here until they're eventually calibrated against real data or pilot results.

**[See H2b in the Evidence Matrix →](/evidens/syntes/matris/)**

---

## Limitations (beyond the resource question above)

The report's own limitations section is unusually self-critical and worth reading in full in the complete report. Briefly: needs are represented one-dimensionally (a single scarcity scalar, not health/housing/care separately); the labour market is a simple binary logistic model without skill, health, or norms; no strategic gaming is modelled in the published results, even though earlier design discussions explicitly considered it before that track was deliberately paused in favour of the MMT perspective; grid-based optimization with few repetitions in some sensitivity analyses; no calibration against real data or pilot results.

---

## Read the full report

The complete technical report (methodology, all nine sub-studies, sensitivity analyses, code snippets, full mapping to the evidence matrix) is available as a downloadable PDF:

**[Download the full report (PDF, English) →](/downloads/AUBI-simulation-report.pdf)**
**[Download the full report (PDF, Swedish) →](/downloads/AUBI-simuleringar-rapport.pdf)**

---

## Code and Raw Data

All simulation code and all result files are openly available on GitHub:
**[svensk-subsidiaritet-simulations](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-simulations)**

The archive contains the 25 Python scripts and 28 CSV files behind the numbers on this page, divided into the simple and the extended model. Two documents are worth reading before drawing conclusions from the results:

- **MANIFEST.md** links each script to the result files it produces and to what the run investigates.
- **METOD.md** reports model assumptions and known limitations — including that Universal is not charged an administrative cost, that the loss measure differs between the two models, and that the extended model is not bit-identically reproducible because the work and cheating decisions use an unseeded random generator.

The code is licensed under MIT, results and text under CC BY 4.0.

---

## Related

**[H2b in the Evidence Matrix →](/evidens/syntes/matris/)**
**[Open Questions →](/evidens/syntes/oppna-fragor/)** — the predictions above, plus calibration against real data and modelling strategic behaviour.
**[How We Know →](/evidens/sa-vet-vi/)** — for the [R]/[IP]/[H] system and the model-vs-empirical distinction used throughout this page.

*Last updated: after the H2b synthesis (v0.1) — full failure-mode list, architecture space, eight predictions, and GAE mapping.*
