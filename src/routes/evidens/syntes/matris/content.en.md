# The Evidence Matrix

## Version 0.3 — provisional by design

This is the first synthesis layer of the Svensk Subsidiaritet Evidence corpus. Statuses reflect the **current corpus**, not final conclusions, and will be updated as new studies, cases, data and models are added. See the update rule at the bottom.

---

## Status vocabulary

- **Supported** — current evidence broadly supports the hypothesis within its stated scope.
- **Conditionally supported** — evidence supports it under identifiable conditions.
- **Mixed** — credible evidence points in different directions.
- **Unresolved** — insufficient evidence to assess.
- **Weak** — some evidence exists but support is limited or poorly matched.
- **Contradicted** — current evidence conflicts with the hypothesis.

*The status field can sometimes be a compound description rather than a single category — e.g. "Model-supported / empirically unresolved" (see H2b) or "Exploratory / unresolved" (see H18, H20, H22). This is used when a hypothesis has real support from a formal model or simulation, or has emerged from a result, but has not yet been tested empirically — an important distinction, not just a stylistic variant of "Unresolved."*

**Confidence:** High / Medium / Low / Unresolved.

**Mechanism fidelity:** High (evidence closely tests the mechanism) / Partial (tests a related mechanism) / Low (relevant mainly by analogy).

**A robust signal is not a universal effect.** When a study gives a direction that holds in all sensitivity tests, that says the result does not depend on individual choices in the analysis. It says nothing about whether the same thing happens in other municipalities, other periods or other functions.

---

## Hypothesis matrix

| ID | Hypothesis | Current evidence | Counterevidence / qualification | Mechanism fit | Confidence | Status |
|---|---|---|---|---|---|---|
| H1 | Local information can improve action–condition matching when information is strongly localised and decision-makers have sufficient autonomy/capacity. | [S2](/evidens/fall/) provides evidence that local responsibility does not automatically produce better information use; international evidence (Faguet 2004) supports needs-responsive allocation under decentralisation. | Local information can be ignored, distorted or underused; capacity and incentives matter. | Partial | Medium | Conditionally supported |
| H2 | Greater legitimate variation in preferences increases the potential value of local differentiation. | Theoretical and comparative decentralisation literature supports preference heterogeneity as a mechanism; current Swedish case set does not yet test it directly. | Preference satisfaction is not identical to welfare; rights, spillovers and scale may dominate. | Partial | Low | Unresolved |
| H2b | Where relevant *needs* (as distinct from preferences) vary substantially, uniform provision can give worse coverage than a common framework with adapted components. | [AUBI simulations](/evidens/datamodeller/simuleringar/aubi/) show conditional mechanistic support within the model: adaptive provision gives better need coverage than pure universalism at high need heterogeneity and moderate measurement error; the advantage disappears at low heterogeneity or high measurement error. No empirical/institutional test yet. | This is model support, not empirical support — parameters (e.g. φ_work, η_work, capacity level C) are freely chosen, not calibrated against real data. Should be kept strictly distinct from H2 (preference heterogeneity). | High within the model; untested empirically | Low | Model-supported / empirically unresolved |
| H3 | Decentralisation is less likely to improve outcomes when receiving capacity is insufficient. | [S2](/evidens/fall/) documents capacity and local-steering weaknesses; [S5](/evidens/fall/) shows cooperation strengthening small-municipality capacity and specialist access; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) show widespread sharing of specialist capacity specifically (IT, procurement, environmental inspection, parts of social services). | Capacity is multi-dimensional and may interact with architecture. | High | Medium–High | Supported |
| H4 | Formal decentralisation does not necessarily create substantive subsidiarity when practical authority, information or initiative remain concentrated within the receiving level. | [S2](/evidens/fall/) explicitly intended decentralisation below municipal level but found uneven local steering; [S1](/evidens/fall/sverige/kommunsammanslagningar/) motivates granular internal authority mapping. | Full municipality→school/professional authority mapping is incomplete. | High | Medium | Conditionally supported |
| H5 | Where significant economies of scale or specialization exist, higher-level organisation may outperform local provision. | [S1](/evidens/fall/sverige/kommunsammanslagningar/) was explicitly justified partly by capacity/scale; [S5](/evidens/fall/) shows selective cooperation around specialist functions; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) found that functions coded high on scale and specialist requirements are in fact largely organised jointly (procurement most clearly); [S6](/evidens/fall/sverige/raddningstjanst/) provides the first *outcome evidence*: a weak favourable signal when Uppsala added joint authority on top of mature cooperation. | S1 and S5 also show that larger scale does not automatically reduce total costs; the water and sewerage case shows that general scale economies do not determine production scale when network geography and sunk capital dominate; S6's 2002 cohort gives a robust *unfavourable* signal at the first complete pooling. Higher organisation thus does not uniformly improve outcomes even within a single function. | High | Medium | Conditionally supported |
| H6 | Significant spillovers increase the value of higher-level coordination or common rules. | [S3](/evidens/fall/) shows persistent cross-principal coordination problems; further cases remain future tests. | Some coordination can be achieved through cooperation rather than centralisation. | Partial | Medium | Conditionally supported |
| H7 | Optimal governance scale varies by function rather than following one universal administrative level. | Strong pattern across [S1](/evidens/fall/sverige/kommunsammanslagningar/), S3, S4 and S5; historical Swedish reform documents themselves recognised different functional scale requirements; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) provide the first systematic cross-sector comparison — eight functions coded component by component, with clearly different scale profiles. | Eight functions is a strategic, not representative, sample; the comparison measures organisational form, not outcomes. | High | Medium–High | Supported |
| H8 | Local units can sometimes obtain scale/coordination benefits through cooperation without full merger. | [S5](/evidens/fall/) provides strong evidence for widespread cooperation, capacity and specialization gains without territorial merger; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) show the same pattern function by function, but also that fire and rescue has in practice often moved past cooperation into a joint organisation; [S6](/evidens/fall/sverige/raddningstjanst/) shows that rescue service systems with cooperation but without joint authority are fully valid governance forms, and that Uppsala's addition of joint authority gave only a small, uncertain difference. | Direct comparison against merger/independent provision is partly begun for the rescue service but otherwise unresolved; S6's point estimate for Uppsala slightly favours joint authority; coordination/accountability costs exist. | High | Medium | Conditionally supported |
| H9 | Local autonomy can coexist with higher-level fiscal equalisation and risk sharing. | S4 directly documents Swedish local autonomy combined with extensive fiscal equalisation; [S1](/evidens/fall/sverige/kommunsammanslagningar/) shows internal equalisation through territorial fusion; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) identify elder care as a clean case — local authority and local production with national cost equalisation. | Service equality is not identical to fiscal equality; incentive and formula limitations remain; water and sewerage shows that financial pooling can be legally blocked even where production is shared. | High | Medium–High | Supported |
| H10 | Longer representation chains can reduce signal fidelity from citizens/affected actors. | [S1](/evidens/fall/sverige/kommunsammanslagningar/) documents reduced democratic proximity after mergers; GAE III gives a formal mechanism for representation-chain attenuation. | Filtering/aggregation can sometimes add value; direct Swedish information-loss measures are missing. | Partial | Medium | Conditionally supported |
| H11 | More observers do not necessarily improve knowledge when observation errors are strongly correlated. | GAE X contains a direct empirical AI test with high estimated correlation; institutional generalisation is not established. | Strongly domain-specific evidence so far. | Partial | Low–Medium | Unresolved |
| H12 | Adaptation is constrained by the slowest critical link between sensing, learning and implementation. | GAE XV provides formal model support; Swedish governance cases suggest bottlenecks at interfaces; [S6](/evidens/fall/sverige/raddningstjanst/) shows in Uppsala a difference already the year before the formal transition, which makes transition processes — not just decision dates — empirically relevant. Direct empirical institutional tests are lacking. | Real systems may use parallelism/redundancy to compensate; S6 does not measure adaptive capacity directly. | Partial | Low–Medium | Unresolved |
| H13 | Preserving plural observation/model pathways can help detect failures a dominant optimized system misses. | GAE XIX/XXIV provide formal/model motivation; empirical governance evidence is not yet assembled. | Diversity can add noise and coordination cost. | Partial | Low | Unresolved |
| H14 | Governance boundaries work better when they fit functional problem boundaries or have effective bridging mechanisms. | S3 strongly supports the importance of cross-boundary coordination; [S5](/evidens/fall/) supports cooperation as one bridging mechanism; [S1](/evidens/fall/sverige/kommunsammanslagningar/) uses functional geography in design; the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) show that boundaries are in practice nested — fire and rescue's local nodes sit inside a joint organisation that sits inside a larger command system. | Boundary fit has not yet been systematically measured; the picture is more complex than one "right" boundary per function. | High | Medium–High | Conditionally supported |
| H15 | A resilient subsidiarity architecture should be able to change authority allocation as problem structure changes. | S3 shows repeated post-reform boundary adjustments; S4 shows iterative formula revision; [S1](/evidens/fall/sverige/kommunsammanslagningar/) shows a 1979 local-organs correction. | Direct evidence that adaptive reassignment improves outcomes is lacking. | Partial | Low–Medium | Unresolved |
| H16 | Decentralised decision-making works better when actors have sufficient civic/institutional capability. | Conceptually supported; R8 evidence corpus not yet assembled. | Capability is multidimensional; architecture may compensate for limited capability. | Low | Low | Unresolved |
| H17 | Meaningful participation can itself improve civic knowledge, political efficacy and deliberative capability. | Initial literature indicates gains in knowledge, internal political efficacy and reasoning in some mini-publics; full corpus still to be built. | Effects on broader civic engagement are less certain; durability is unclear. | Partial | Medium | Conditionally supported |
| H18 | Governance architectures and human capabilities can develop through mutually reinforcing or degrading feedback loops. | Theoretical compatibility with GAE and civic-participation literature; no mature longitudinal test yet. | Causal direction and time dynamics are unresolved. | Low–Partial | Low | Exploratory / unresolved |
| H19 | Systems reasoning can improve decision quality in complex governance environments. | Plausible and GAE-relevant; robust operationalisation and causal evidence are not yet established. | Risk of weak/construct-ambiguous measurement. | Low | Low | Unresolved |
| H20 | Governance architecture effectiveness depends partly on actor capability, while architecture itself may shape capability. | Emerging from S2/S3/S5 and R8 conceptual work; direct interaction tests absent. | Could be nonlinear and highly context-dependent. | Partial | Low | Exploratory / unresolved |
| H21 | Entering full pooled authority does not uniformly improve outcomes within a function — the direction can differ between transitions. | [S6](/evidens/fall/sverige/raddningstjanst/): Uppsala 2012 (cooperation → joint board) gives a small favourable but uncertain signal; the 2002 cohort (five first complete poolings) gives a large, internally robust unfavourable signal at the threshold spread at arrival. | The branches measure different outcomes, periods and transitions. That the direction differs between *transitions* can therefore not be distinguished from it differing between *outcome measures*. The favourable half rests on a single treated municipality. | High | Low–Medium | Conditionally supported |
| H22 | The marginal effect of pooled authority depends on how much operational coordination already exists — Effect(A given K₀) rather than a constant. | Has emerged from the contrast between S6's two branches: formalisation on top of mature cooperation (Uppsala) looks different from first pooling where operations are reorganised (2002). | Not tested. The contrast could equally be due to epoch, outcome measure, geography or chance. An outcome-blind mapping of Swedish transitions, classified by coordination before the transition, is planned. | High | Low | Exploratory / unresolved |

*Cases S2–S6 now have their own full pages — see [Cases](/evidens/fall/) for S2 (school decentralization), S3 (Ädelreformen), S4 (fiscal equalization), S5 (intermunicipal cooperation) and S6 (the rescue service).*

---

## Initial synthesis claims

### C1 — Governance fit
> Current evidence is more consistent with a conditional governance-fit proposition than with a universal decentralisation principle.

Basis: S1–S6, H3/H5/H7/H8/H9/H14/H21. S6 provides the first outcome test within a single function, and its two branches point in different directions. **Status:** Conditionally supported. **Confidence:** Medium.

*Confidence is not raised despite S6: the branches measure different outcomes and periods, so part of the difference between them is built into the design. That makes it a weak test of this particular claim.*

### C2 — Formal decentralisation is an insufficient proxy for subsidiarity
> Formal transfer of responsibility does not reliably establish substantive decision proximity.

Basis: S1, S2, H4, H10. **Status:** Conditionally supported. **Confidence:** Medium.

### C3 — Functional differentiation matters
> The appropriate governance scale appears to vary substantially by function.

Basis: S1, S3, S4, S5, H5, H7, H14. **Status:** Conditionally supported. **Confidence:** Medium–High.

### C4a — Governance functions can be factorized across scales
> Different components of a governance function — political authority, production, specialist capacity, financing, and coordination — can sit at different scales rather than being bundled at a single territorial level.

Basis: S4, S5, comparison with S1, H8/H9, and the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/), which found component separation in all sixteen functions examined across two frozen blind tests — the second with a mechanically (hash-)selected sample and with cases beyond the municipal sphere. [S6](/evidens/fall/sverige/raddningstjanst/) also shows that coordination without joint authority is an established and substantive governance form in the rescue service. **Status:** Conditionally supported. **Confidence:** Medium.

*Not High: sixteen functions, a small sample, judgment in the component coding — and the existence of an architecture says nothing about its outcomes. S6 is the first outcome test, and it shows no uniform direction.*

### C4b — Problem structure predicts the specific factorization
> The relative importance of local information, economies of scale, specialist capacity, spillovers and risk pooling is sufficient to predict which concrete governance components should be pooled and which should stay local.

Basis: the [governance factorization tests](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — v0.1 produced one clear functional match, two partial ones and three clear mismatches across eight functions. v0.5 improved on its locked predecessor v0.4 on four of six measures in a new blind test, most strongly on binding authority (60.4% → 78.0%), but four sharply local functions still received zero probability of a compatible full architecture. **Status:** Mixed / unresolved, with partial improvement. **Confidence:** Low–Medium.

*No success threshold was preregistered and no chance baseline has been published. The interpretable result is the improvement over the locked predecessor on the same new cases, not the absolute hit percentages.*

### C4c — Pooled authority is not a monotonic scale step
> Full pooled authority should not be treated as a mechanically better step on a one-dimensional scale from local to central. Its marginal value appears to depend on the coordination, capacity and institutional relations that already exist.

Basis: [S6](/evidens/fall/sverige/raddningstjanst/) (both branches), H8, H21, H22, S5. **Status:** Conditionally supported. **Confidence:** Low–Medium.

*The first half of the claim — that more pooled authority does not uniformly improve outcomes — has support in the robust signal from 2002. The second half — that it depends on existing coordination — is a hypothesis (H22), not a result. The claim does not mean that less pooled authority is better.*

### C5 — Coordination is a design variable, not merely a cost
> When authority and capacity are distributed across multiple nodes, coordination architecture becomes a critical determinant of whether decentralisation produces benefits or fragmentation.

Basis: S3, S5, H6/H8/H14, GAE coordination mechanisms, the separation of policy coordination from interface coordination in [governance factorization simulator v0.5](/evidens/datamodeller/simuleringar/styrningsfaktorisering/), and S6's distinction between operational coordination and formal authority. **Status:** Conditionally supported. **Confidence:** Medium.

### C6 — Human capability is an emerging missing variable
> The effectiveness of complex or decentralised governance may depend not only on institutional architecture but also on the cognitive, civic, professional and relational capabilities of actors operating within it.

Basis: R8 conceptual framework, S2 capacity findings, S3 professional boundary coordination, S5 trust/relational capability, H16–H20. **Status:** Exploratory. **Confidence:** Low.

---

## What the matrix currently does NOT support

The current corpus does **not** justify claims such as:

- decentralisation is generally better than centralisation;
- smaller municipalities are generally better;
- larger municipalities are generally better;
- municipalisation caused Sweden's school performance decline;
- local knowledge automatically produces better decisions;
- polycentric governance is automatically more resilient;
- higher civic/developmental "stages" produce better governance;
- joint rescue boards or rescue service associations generally improve outcomes — or worsen them;
- cooperation is generally better than pooled authority — or vice versa;
- the 2002 result shows a general "merger penalty", or Uppsala a general "integration gain".

These remain hypotheses, contested interpretations, or open questions.

---

## Priority evidence gaps

1. Direct measures of actual decision proximity.
2. Authority/information/resource mapping below formal administrative levels.
3. Pooled authority versus cooperation versus independent provision — now formulated as the marginal effect of pooled authority given existing coordination. **Partially closed for the rescue service (S6).**
4. Longitudinal evidence on adaptation and institutional learning, including transition costs versus lasting effects.
5. Fiscal equalisation effects on service outcomes and incentives.
6. Swedish evidence on participation and capability development.
7. Operationalisation of systems reasoning.
8. Direct tests of architecture × capability interaction.

See the full, organized list at **[What We Do Not Know →](/evidens/syntes/okanda/)** and **[Open Questions →](/evidens/syntes/oppna-fragor/)**.

---

## Update rule

The matrix should be versioned. Every significant status change should record: the date, the evidence added, and the reason for the change. A hypothesis should not move from "unresolved" to "supported" merely because one new supportive study appears if meaningful counterevidence remains unexplored.

---

## Changelog

### v0.3 — after the rescue service programme (30 September 2026)

**Evidence added:** [S6 — The Rescue Service](/evidens/fall/sverige/raddningstjanst/), two frozen outcome studies: Uppsala 2012 (cooperation → joint board) and the 2002 cohort (first complete pooling), plus a synthesis of both. The material is in a [locked research package](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-evidence/releases/tag/rescue-service-v0.2).

**Changes:**

| Item | Before | After | Reason |
|---|---|---|---|
| Evidence gap #3 | Unresolved | Partially closed for the rescue service — directionally mixed, structurally informative | First controlled outcome comparison within a single function. The question is reformulated from "which organisational form is best?" to "what does pooled authority add given existing coordination?". |
| H5 | Conditionally supported, Medium–High | Conditionally supported, **Medium** | Medium–High rested on scale- and specialist-heavy functions being *organised* jointly — evidence about form, not outcomes. The hypothesis concerns outcomes, and the first outcome evidence is mixed. |
| H8 | Conditionally supported, Medium | Unchanged, new evidence | S6 strengthens that cooperation without joint authority is a real governance form, but Uppsala's point estimate slightly favours joint authority. That does not justify a raise. |
| H12 | Unresolved | Unchanged, new evidence | The difference in Uppsala is visible before the formal transition. |
| H21 | — | Conditionally supported, Low–Medium | New. The support is strongest for the half "does not uniformly improve". |
| H22 | — | Exploratory / unresolved, Low | New. Hypothesis generated by the results, not yet tested. |
| C1 | Conditionally supported, Medium | Unchanged, new evidence | See the reasoning under C1. |
| C4a | Conditionally supported, Medium | Unchanged, new evidence | Coordination without authority confirmed as a governance form in the rescue service. |
| C4c | — | Conditionally supported, Low–Medium | New claim. |
| C5 | Conditionally supported, Medium | Unchanged, new evidence | The distinction between coordination and authority became empirically meaningful. |

**Deliberately not changed.** The research package's own matrix raises the confidence for C1, C5 and H8 to Medium–High. We do not do that here. Two studies with different outcome measures pointing in different directions are compatible with "it depends on the context", but also with the measures capturing different things. The results also fit well with the website's own factorization framework, which is a reason to be extra cautious about letting them raise the confidence for it.

*Version note: the research package calls its matrix "v0.2". It builds on an older edition and is not the same version as the website's v0.2 below. This version (v0.3) brings the package's rescue service updates into the website's matrix. The package's C4a corresponds to C4c here; R9 and R10 correspond to S6's two branches.*

---

### v0.2 — after the governance factorization test

**Evidence added:** [Can Governance Scale Be Factorized?](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — a frozen blind test of a mechanistic model against eight Swedish municipal functions, with predictions locked before outcome coding.

**Changes:**

| Item | Before | After | Reason |
|---|---|---|---|
| C4 | Promising / conditionally supported, Medium | Split into C4a and C4b | The test supports factorization as a phenomenon but not the model's specific factorization prediction. Keeping one claim would hide that one half held and the other did not. |
| C4a | — | Conditionally supported, Medium | Component separation observed in all eight functions. |
| C4b | — | Mixed / unresolved, Low–Medium | The model missed three of eight while predicting with high confidence. |
| H5 | Conditionally supported, Medium | Conditionally supported, Medium–High | Cross-sector support that scale and specialist requirements do drive joint organisation; qualified by the water and sewerage case. |
| H7 | Supported, Medium–High | Status unchanged, new evidence | The systematic cross-sector comparison the matrix asked for now exists, if only at small scale. |
| H9 | Supported, Medium–High | Status unchanged, new evidence | Elder care is a clean case of local autonomy with national risk pooling. |
| H14 | Conditionally supported, Medium–High | Status unchanged, new evidence | Boundaries turn out to be nested rather than singular. |
| H3, H8 | Unchanged | New evidence | Supporting but not status-changing. |

**Not changed:** no hypothesis moved to High confidence. A test on eight strategically chosen functions does not justify that.

---
**Evidence added (v0.5):** [Can different parts of the same societal function need to be governed at different levels?](/evidens/datamodeller/simuleringar/styrningsfaktorisering/) — a second blind test, with a mechanically hash-selected sample of eight new functions and a six-role architecture.

**Changes:**

| Item | Before | After | Reason |
|---|---|---|---|
| C4a | Conditionally supported, Medium | Status unchanged, new evidence | Component separation replicated across eight new functions, now regional and national as well. Confidence not raised: sixteen cases is still few. |
| C4b | Mixed / unresolved, Low–Medium | Mixed / unresolved with partial improvement, Low–Medium | Binding authority is predicted clearly better than in the previous locked version, but four of eight cases still have zero full-architecture compatibility. |
| C5 | Conditionally supported, Medium | Status unchanged, new evidence | Separating policy from interface coordination produced a measurable improvement — coordination architecture is a design variable in its own right. |
| H5, H7, H9, H14 | Unchanged | New evidence | Supporting but not status-changing. |

---

*Version: v0.3. Corresponds to the Swedish case set (S1–S6), research topic R1, the two frozen governance factorization tests, and the rescue service programme's two frozen branches.*
