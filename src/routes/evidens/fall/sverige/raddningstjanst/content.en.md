<script>
  import RevisionNotice from '$lib/components/RevisionNotice.svelte';
</script>

# S6 — The Rescue Service: cooperation and pooled authority

**Country:** Sweden · **Periods:** 1998–2004 and 2007–2015 · **Domain:** Rescue services, scale, coordination, organisational form · **Status:** Frozen result (research package v0.2, 30 September 2026)

<RevisionNotice heading="How the results should be read">
<p>A <strong>robust signal</strong> is not a <strong>universal causal effect</strong>. Both branches below are observational studies with locked designs: method, outcomes and controls were determined before outcome data were opened. This protects against our fishing for the result we want. It does not make the results general.</p>
<p>The branches measure different things during different periods. They should be compared, but not merged into a single number.</p>
</RevisionNotice>

---

## The case in brief

S1–S5 reconstruct *how* Swedish reforms distributed authority. S6 is the case corpus's first **outcome study**: it asks what happened to fires when municipalities changed how the rescue service is governed.

The study distinguishes between two things that are often lumped together under the word "cooperation":

- **K — operational coordination:** joint command, shared alerting and command systems, agreements on resources across municipal boundaries. Municipalities retain their own rescue service and their own political responsibility.
- **A — pooled authority:** a joint board or a municipal association takes over the formal responsibility for the rescue service.

It is the difference between *cooperating* and *becoming one organisation*. The old question "merger, cooperation or independent operation?" thus becomes more precise: what does A add, given how much K already exists?

## Why the rescue service

The rescue service is one of the most cooperative municipal functions: 48 percent of municipalities in Statskontoret's survey had contractual cooperation on rescue services or crisis preparedness, and many have moved on to municipal associations or joint boards ([S5](/evidens/fall/sverige/mellankommunal-samverkan/)). The function also has two characteristics that make an outcome test possible: every incident is reported nationally, and the organisational changes can be dated.

---

## Branch A — Uppsala 2012: from cooperation to joint board (K → A)

**The question.** Uppsala had long cooperated operationally with neighbouring municipalities. In 2012, a joint rescue board was formed with Tierp and Östhammar. Did the number of building fires per inhabitant that spread beyond the object of origin change, compared with rescue services that had developed cooperation but not joint authority?

**The design.**

- Clean pre-period 2007–2009; preparation and transition period 2010–2011; post-period 2012–2014.
- Outcome: building fires whose **final** extent went beyond the object of origin, per 100,000 inhabitants.
- Primary comparison: Jönköping (RäddSam F). Pre-specified secondary comparison: Piteå–Älvsbyn (Femkanten). Sensitivity test: Halmstad (RäddSam Halland) and Skåne Nordväst.
- Measure: ratio of change ratios (RRR). Below 1 means Uppsala developed more favourably than the comparison.

**The result.**

| Comparison system | RRR | Direction |
|---|---:|---|
| Jönköping / RäddSam F (primary) | 0.931 | Favourable for Uppsala |
| Piteå–Älvsbyn / Femkanten | 0.935 | Favourable for Uppsala |
| Skåne Nordväst (merged) | 0.921 | Favourable for Uppsala |
| Halmstad / RäddSam Halland | 1.105 | Opposite |

Three of four comparisons point to roughly 7 percent lower relative level in Uppsala. The uncertainty is large: the interval for the primary estimate is 0.68–1.27, and all main intervals cross 1. The intervals also capture only the random variation in the number of fires, not all causal uncertainty.

Three things weaken a simple causal interpretation:

- **Halmstad points in the other direction**, and that is not due to missing data.
- **The difference is already visible in 2011**, before the formal start. That fits better with an effect of the entire transition process, or with local random variation, than with the legislative change of 1 January 2012 flipping something.
- **The mechanism is unclear.** More severe fire grades give mixed results, so the study does not show that extinguishing became better.

**Assessment.** Direction: moderate support. Precision: low. Robustness to choice of comparison: moderate but incomplete. Mechanism: low.

> **Label:** suggestive causal signal that strengthens the hypothesis that organisational form matters — not confirming causal evidence.

---

## Branch B — The 2002 cohort: first complete pooling (→ A)

**The question.** Five rescue service systems (nine municipalities) entered full pooled authority for the first time in 2002: Falköping–Tidaholm and Skara–Götene (joint boards), Höglandet, Nerikes Brandkår (Askersund's entry) and Värend (municipal association). Did the number of building fires per inhabitant that had already spread by the time the rescue service arrived change, compared with 20 systems (33 municipalities) that had not yet pooled authority but did so later?

**The design.**

- Pre-period 1998–2000; 2001–2002 excluded as preparation and transition; post-period 2003–2004.
- Outcome: building fires that at the **rescue service's arrival** had spread beyond the object of origin, per 100,000 inhabitants. This measures the situation when the rescue service arrived, not the extinguishing result.
- The controls are municipalities that later entered A, which makes them more comparable than municipalities that never did.
- When data were opened, it turned out that Ekerö (2003, 2004) and Bjuv (2004) completely lacked incident reports. This was handled through an addendum locked **before** the estimate was made; no controls were swapped out.

**The result.** The incidence rate ratio (IRR) is **1.95** (interval 1.22–3.14). After the transition, the level in the treated systems was thus almost twice as high as it would have been if they had developed like the controls.

The direction holds in all pre-specified sensitivity tests: other pre-periods (1.73–1.81), unfavourable assumptions about incomplete reports (1.53–2.02), exclusion of systems with missing years (1.95), and when each treated system (1.81–2.04) or control system (1.49–2.15) is removed one at a time. All five treated systems move in the same direction individually.

But the signal sits at a single threshold:

| Outcome | IRR | Interval |
|---|---:|---:|
| Spread beyond the object of origin at arrival | **1.95** | 1.22–3.14 |
| Spread beyond one room | 1.40 | 0.84–2.33 |
| Spread to multiple fire cells | 0.53 | 0.20–1.43 |
| All building fires | 0.98 | 0.84–1.15 |

The result thus does not show that the fires became more severe overall. It points towards something happening *before or at* arrival — station geography, dispatch, accessibility, changed routines or changed reporting. The study cannot distinguish these explanations.

**Assessment.** Internal robustness in the direction: high. Causal identification: moderate to low (three pre-years, voluntary reporting at that time, two post-years, non-random selection). Generalisability: low. Mechanism: low.

> **Label:** robust unfavourable cohort signal that strengthens the hypothesis — not confirming evidence for a general treatment effect.

---

## What the branches say together

**It is not a failed replication.** The branches measure different steps (A on top of mature K, versus first A from varying starting points), different points in the fire sequence (final extent versus the situation at arrival) and different reporting epochs. That they point in different directions is itself information that the effect of pooled authority can vary, not proof that either of them is wrong.

**Four simple models become harder to hold on to:**

1. "More pooled authority is always better." Not supported.
2. "Cooperation is always better than pooled authority." Not supported either.
3. "Organisational form does not matter." Harder to hold: both branches give noticeable signals after pre-specified transitions.
4. "Governance scale is a single dimension." The evidence fits better with K and A being separate variables.

**The hypothesis that is emerging** — but which is not established — is that the effect of adding A depends on how much K already exists and how the transition is carried out. Uppsala went from extensive cooperation to formal pooling; the 2002 cohort entered A from more varied starting points, where operations were often reorganised at the same time.

**What has been least answered** is the comparison with genuinely independent operation. The controls in the Uppsala branch are deliberately systems with strong cooperation, and the 2002 controls did not have zero cooperation. The programme can now say more about A compared with K-without-A than about A compared with a municipality that manages entirely on its own.

| Claim | Confidence |
|---|---|
| There is a universal ranking between A and K | Low |
| K and A need to be modelled as separate variables | Medium–High |
| The effect of A depends on context and transition | Medium |
| We know which mechanism drives the variation | Low |

> **Evidence gap #3: partially closed for the Swedish rescue service — directionally mixed, structurally informative.** See [What we do not know](/evidens/syntes/okanda/).

---

## What S6 does not show

- That joint boards or municipal associations generally improve the rescue service.
- That they generally worsen it.
- That the 2002 result is a general "merger penalty", or that Uppsala shows a general "integration gain".
- That extinguishing after arrival became worse in 2002.
- That the two branches estimate the same treatment or the same outcome.

---

## Our assessment

*This is our interpretation, distinguished from the frozen results above.*

The results fit well with the project's framework of factorisation — that coordination and authority can lie at different levels. Precisely for that reason, we should be cautious. That two studies with different outcomes and periods point in different directions is partly built into how they are constructed, and cannot alone carry a conclusion that "the right level depends on the context". We have therefore not raised the confidence for the overarching synthesis claims C1 and C5 because of S6, even though the research package's own matrix does so (see the changelog in the [Evidence Matrix](/evidens/syntes/matris/)).

Worth noting in the other direction: the Uppsala branch is, as far as it goes, evidence *for* the fact that formal pooling can add something beyond mature cooperation. It is therefore also on the page [Counterevidence](/evidens/syntes/motevidens/).

---

## Next question

The old question "merger or cooperation?" is replaced by a narrower one: **what is the marginal effect of adding pooled authority, given the coordination that already exists?**

The next step is a new research architecture designed before any outcomes are opened: first a mapping of all Swedish transitions from K to A, classified by how much coordination existed beforehand (low K, established operational K, joint command or emergency centre, already highly integrated K). Only thereafter are outcomes and comparisons chosen.

The 2002 material is not analysed further. More analyses of the same data after the result is known would make the frozen finding less credible, not more.

---

## The research package

The results are frozen. No new specifications, thresholds, control choices or time windows may change them afterwards; new analysis is labelled as new.

- **Archive:** [svensk-subsidiaritet-evidence](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-evidence) on GitHub
- **Locked package:** [raddningstjanst-publication-package-v0.2.zip](https://github.com/BjornKennethHolmstrom/svensk-subsidiaritet-evidence/releases/download/rescue-service-v0.2/raddningstjanst-publication-package-v0.2.zip) (release `rescue-service-v0.2`)
- **SHA-256 for the zip file:** `1dfc519cff9ba8d2e86547dbc91aff21e84df244020b5fae088ed74072aba595`

The package contains frozen protocols and addenda, locked estimates, scripts for reproducing the results, original result archives, treatment histories and checksums for each file (`SHA256SUMS.txt`). The documents are in English; there the branches are called R9 (Uppsala) and R10 (the 2002 cohort).

---

## Related hypotheses

Primary: **H5** (scale), **H8** (cooperation without merger), **H21** and **H22** (the marginal effect of pooled authority).
Secondary: **H12** (the adaptation bottleneck — the 2011 foreshadowing), **H14** (boundary fit).
Synthesis: **C4a**, **C4c**, **C5**.

See full entries in the **[Evidence Matrix →](/evidens/syntes/matris/)**.

## Sources

- Svensk Subsidiaritet (2026), *Rescue Service — Uppsala 2012: Final Causal Synthesis v1.0*; *Historical 2002 Cohort — Finding v0.1*; *Cross-Branch Causal Synthesis v0.1*. In the research package above.
- Outcome data: national incident statistics from MCF (formerly MSB), according to the reporting systems specified in the respective protocols.
- Uppsala Municipality, [cooperation agreement for the joint rescue board](https://www.uppsala.se/contentassets/634264aaa0464a59b4fba6dc9bd58bd6/12.-samverkansavtal-for-den-gemensamma-raddningsnamnden.pdf).
- Statskontoret 2023:5, *Hand in hand — an analysis of municipal cooperation* (proportion of municipalities with cooperation on rescue services).

*Last updated: after research package v0.2.*
