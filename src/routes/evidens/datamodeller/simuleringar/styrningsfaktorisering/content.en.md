# Can Governance Scale Be Factorized?

## Two Frozen Blind Tests of the Governance Factorization Simulator

**Status:** Research programme, two completed blind tests (v0.1 and v0.5). The model is frozen before each test, predictions are locked before outcome coding, and we report the mismatches as fully as the matches. These are **[R] results within an exploratory model** plus **[IP] pattern tests against Swedish institutions** — not causal tests, and not claims about what is optimal. See **[How We Know](/evidens/sa-vet-vi/)** for the claim levels.

---

## The Evidence at a Glance

| | |
|---|---|
| 🟢 **Strong structural support** | Governance functions *can* be separated across scales without the model collapsing to a single default architecture. Component separation observed in all sixteen functions examined. |
| 🟡 **Preliminary empirical support** | v0.5 improved on its locked predecessor v0.4 across four central measures in a genuinely new blind test — most strongly on the distinction between coordination and binding authority. Eight cases are too few to call the model validated. |
| 🔴 **Open residuals** | Four sharply local functions still received zero probability of a fully compatible architecture. Institutionally inherited authority, broad interfaces atop local production, and broad authority with decentralized production are missing or structurally hard in the model. |

---

## The Question

Debate about centralization and decentralization often treats a public function as though it had **one natural governance level**. But the same activity can simultaneously require local knowledge, regional specialist capacity, broad risk sharing, shared infrastructure, and sometimes binding decisions at system level.

The project's fourth synthesis claim, **C4**, originally said scale might be factorizable: that some benefits of larger scale could possibly be obtained without merging political jurisdictions. The wording was cautious for a reason — we had no test.

So we built a mechanistic model, froze it, and had it predict how real Swedish functions *ought* to be organized. Then we looked.

---

## The Method: Freeze, Predict, Then Examine

The order is the whole point. A model adjusted after seeing the answers can always be made to fit.

```text
1. Build the model
2. Freeze it                   no changes after this point
3. Code the functions blind    problem structure, without looking at the organization
4. Lock the coding
5. Run the model, lock the predictions
6. Examine reality             only now
7. Code outcomes componentwise
8. Compare                     no model adjustment permitted
```

Step 7 is a separate safeguard. If you ask directly "is this FACTORIZED?", it's easy to answer yes if anything multi-level counts. So we first code where each component actually sits, and compare against the model's ideal types only afterwards.

---

# Blind Test 1 — v0.1 Against Eight Municipal Functions

The first test used **Governance Factorization Simulator v0.1.1c**. The model described a function through five problem properties on a 0–1 scale:

| | |
|---|---|
| **L** | dependence on local information |
| **S** | economies of scale in production |
| **C** | specialist-capacity requirement (a threshold effect, not the same function as S) |
| **E** | cross-boundary externalities |
| **R** | need for financial risk pooling |

It compared five governance architectures — `LOCAL`, `MERGER`, `SHARED`, `REGIONAL`, `FACTORIZED` — under five normative weightings, with **balanced** as the primary scenario.

In v0.1, `FACTORIZED` meant roughly: local political authority, but supra-local production **and** supra-local specialist capacity **and** supra-local finance/risk. That turned out to be a decisive design choice.

## The Locked Codings

| ID | Function | L | S | C | E | R |
|---|---|---|---|---|---|---|
| F01 | Municipal IT | 0.50 | 0.75 | 0.75 | 0.50 | 0.25 |
| F02 | Procurement | 0.50 | 0.75 | 0.75 | 0.25 | 0.25 |
| F03 | Environmental inspection | 0.75 | 0.25 | 0.75 | 0.50 | 0.25 |
| F04 | Fire and rescue | 0.75 | 0.50 | 0.75 | 0.50 | 0.50 |
| F05 | Water and sewerage | 0.75 | 0.75 | 0.75 | 0.75 | 0.50 |
| F06 | Physical planning | 0.75 | 0.25 | 0.50 | 0.75 | 0.25 |
| F07 | Elder care | 0.75 | 0.25 | 0.50 | 0.25 | 0.75 |
| F08 | Specialist social services | 0.75 | 0.25 | 0.75 | 0.25 | 0.50 |

## Prediction Against Outcome

| ID | Prediction | Modal share | Audited outcome | Verdict |
|---|---|---:|---|---|
| F01 IT | SHARED | 86.1% | Mixed, SHARED-leaning | Partial match |
| F02 Procurement | SHARED | 100.0% | SHARED-like, task-selective | Functional match |
| F03 Environmental inspection | SHARED | 94.6% | Mixed local / SHARED / MERGER-like | Partial / overprediction |
| F04 Fire and rescue | FACTORIZED | 99.5% | MERGER-like + multiscale command | Adjacent, structural mismatch |
| F05 Water and sewerage | FACTORIZED | 100.0% | Local-dominant mixed | Clear mismatch |
| F06 Physical planning | FACTORIZED | 65.6% | Local + supra-local coordination | Clear mismatch |
| F07 Elder care | FACTORIZED | 100.0% | Local production + national equalization | Structural mismatch, C4-compatible |
| F08 Specialist social services | SHARED | 50.0% | Mixed; selected functions SHARED-like | Compatible but inconclusive |

A conservative reading: **one** clear functional match, **two** partial, **one** compatible but weak test, **one** adjacent structural mismatch, and **three** clear mismatches. It would be misleading to say "five out of eight correct." The model also predicted six of eight cases with very high confidence, which makes the mismatches informative — it cannot hide behind having been uncertain.

## What the Test Actually Showed

> **Reality gave more support to factorization as a phenomenon than to the model's specific FACTORIZED architecture.**

v0.1's `FACTORIZED` bundled production, specialist capacity, and finance together and moved them all upward at once. Swedish institutions often factorize **only some** components, and not always in the same direction:

- **Elder care** pools financial risk nationally through cost equalization while production stays municipal — the opposite of the model's bundle.
- **Physical planning** keeps binding authority strictly municipal via the planning monopoly while coordination happens regionally and nationally.
- **Water and sewerage** has extensive production cooperation but very little financial pooling; a joint tariff is legally difficult.
- **Fire and rescue** looks like local nodes inside a joint organization inside a still larger command system — nested scales, not a choice between local and regional.

This led to **C4 being split in two**: **C4a** (functions can be factorized across scales — conditionally supported) and **C4b** (problem structure predicts the specific factorization — mixed/unresolved). v0.1.1c was permanently archived as the project's first frozen benchmark, and the eight functions became a **development set** for the next version, not a test set.

---

# From Architecture Types to Scale Vectors

The mismatches pointed the same way: "which of five architectures is best?" was probably the wrong question. A better question was what scale each component needs — and how the interfaces between them are governed. That led to representing the architecture as a configuration rather than a category, and then, through v0.2–v0.4, to **six roles**:

```text
G = (A, P, X, F, K_P, K_I)

A    = authority         where final binding authority needs to sit
P    = production        where operational delivery is organized
X    = expertise         where specialist capacity needs to be concentrated
F    = finance/risk      where economic risk and capacity are shared
K_P  = policy coordination     where policy needs to be harmonized
K_I  = interface coordination  where shared systems and standards are coordinated
```

Each role can take one of three stylized scales, `{1, 4, 20}` — local, intermediate, broad/system-level. The numbers are mathematical scale markers, not municipality/region/state: a regional Swedish organization can be represented by scale 20 if it functionally corresponds to the broadest relevant level in the system being analysed. The architecture space contains 378 permitted combinations.

Two developments here are worth highlighting, because they come directly out of v0.1's mismatches.

**Coordination was separated from authority.** `K_P` and `K_I` are distinct mechanisms and need not sit at the same scale — and broad coordination does not automatically imply broad binding authority. That conflation is exactly what made physical planning and elder care mismatches in v0.1.

**Authority got its own problem signal.** v0.5 introduced two new inputs for binding integration need, `B₁₄` and `B₄₂₀`, in a two-step model that can represent both intermediate and system-wide authority without an artificial direct jump from local to national level.

The fixed institutional cost was also rewired: it now counts per **supra-local function actually institutionalized**, not per number of distinct scales that happen to be used. This performs better both analytically and in testing.

The frozen v0.5 implementation passed all analytical and synthetic quality controls before the blind test — design review, algebraic review, separate derivation of κ_M, preregistered locking audit, implementation audit, and a full test suite.

---

# Blind Test 2 — v0.5 Against Eight New Functions

## The Sample Was Selected Mechanically

Here we deliberately departed from what this page previously promised. The planned holdout set (waste management, public transport, libraries, upper secondary schools, building permits, food safety inspection, mobility services, civil preparedness) was **chosen by us**, which is a weakness: we cannot rule out that the selection favoured the model.

Instead, a pool of **16 previously unused functions** was created across four pre-declared stress categories, and two cases per category were selected mechanically by lowest SHA-256 hash of the candidate's pre-declared identity. No prior test cases were reused.

The eight that came out span considerably wider than the first test — from municipal property maintenance to national system operation:

school property maintenance · graffiti removal · school placement · parking enforcement · blood culture diagnostics · PET/CT diagnostics · transmission grid operation · air traffic control

Each case was coded on ten dimensions — `(L, S₁₄, S₄₂₀, C₁₄, C₄₂₀, E, R₁₄, R₄₂₀, B₁₄, B₄₂₀)` — and the coding was hashed **before** the actual institutional structure was examined. That applies in particular to the two new authority inputs. Then 10,000 realizations per function were generated and predictions were locked for locked v0.4, v0.5 functional optimum, and v0.5 realization optimum. Only then was the outcome investigation opened, and it was locked separately before any hit score was computed.

## The Result

The primary comparison is **locked v0.4 against v0.5** on the same locked cases:

| Measure | locked v0.4 | v0.5 realization | Change |
|---|---:|---:|---:|
| Mean component hit | 45.3% | 50.5% | +5.2 pp |
| Probability of fully compatible architecture | 10.4% | 28.8% | +18.4 pp |
| Architecture distance | 0.292 | 0.252 | −0.040 |
| Binding authority hit | 60.4% | 78.0% | +17.6 pp |
| Signed scale bias | 0.068 | 0.093 | +0.025 |
| Modal full architecture compatible | 1/8 | 2/8 | +1 |

**Read the delta, not the level.** No success threshold was preregistered, and the absolute percentages have no published chance baseline. Because outcome coding often permits a *range* of scales (`KOM/SAM`), the chance level for component hit sits well above 33%, so "50.5%" cannot be interpreted on its own. What is interpretable is the improvement over the locked predecessor on the same new cases — and that is unambiguous on four of six measures.

The result is also not uniformly positive. Signed scale bias increased: v0.5 comes closer to the observed architecture in absolute terms but carries a slightly larger average bias **toward broader scales**.

## The Key Finding: Coordination Is Not Authority

The two cases blind-coded with the strongest need for shared binding decision power — **transmission grid operation** (`B = (1, 1)`) and **air traffic control** (`B = (1, 0.75)`) — were also the two cases where v0.5 most clearly corrected v0.4.

For the transmission grid, v0.5 produced `(20,20,20,20,20,20)` with full component and full architecture compatibility. For air traffic control, the authority hit went from roughly **0.9 percent** under v0.4 to **100 percent** under v0.5 — despite production actually being distributed across several control centres and several certified providers.

This supports the hypothesis that these are two distinct governance needs that should be modelled separately:

> A system can need shared information, shared standards, shared financing, or shared policy **without** separate actors having to give up their final authority. Conversely, there are cases where coordination is not enough, and someone must be able to make a final binding decision.

With eight cases this is far from statistically decisive. But it is exactly the kind of observation a blind test exists for: a new mechanism made the right kind of difference on new cases coded without access to the answers.

---

## What the Model Still Misses

Four residuals, all empirically motivated rather than speculative.

**Sharp-local false factorization.** J01–J04 all received zero probability of a fully compatible architecture. School property maintenance landed at roughly 20.5 percent component hit, school placement at roughly 15.8. The model still overvalues moderate scale advantages in production, expertise, and financing for activities that in practice remain sharply local — and this applies to local *administration* too, not just physical operations. The new realization cost helps (graffiti removal went from 20.5 to 37.6 percent) but does not solve the problem.

**Institutionally inherited authority.** PET/CT got five of six roles broadly right but **0 percent** on authority. The function sits under broad authority because it is part of a regional healthcare system, not because the task itself carries strong binding pressure — `B` was blind-coded at `(0.25, 0)` and may not be adjusted after the fact. This opens a distinction the model lacks: task-required authority is not the same thing as institutionally inherited authority.

**Broad interface coordination with local production.** Parking enforcement shows `K_I ≫ P`: the notice is issued locally by municipality or police while the Swedish Transport Agency administers the national payment chain. The interface layer *can* represent this within the architecture space, but the model does not produce it naturally enough.

**Broad authority with decentralized production.** Algebraic review showed that the current functional core effectively makes `P < A`, `X < A`, and `F < A` dominated as strict optima. The model therefore struggles to describe broad binding authority alongside genuinely decentralized operational production. This is a **known validity boundary**, not something to be hidden.

Two residuals from v0.1 also persist and are not addressed in v0.5: **legal assignment** (the municipal planning monopoly is an institutional constraint that problem structure alone cannot override — a future model must distinguish *appropriate* from *permitted* architecture) and **asset specificity** (water and sewerage shows that pipe networks, water sources, and sunk capital determine production scale at least as much as general economies of scale, which is absent from the abstract `S` variable).

---

## How the Result Should Be Read

The evidence does **not** support the claim that the simulator can determine the optimal governance level for a real public function. It supports a more limited but important conclusion:

> **There are both theoretical and preliminary empirical grounds for treating public governance as a factorized architecture of several distinct functions, rather than as a single choice between municipal, regional, and national level.**

v0.5 should therefore be treated as a **frozen research checkpoint**, not a finished decision model. We will not adjust v0.5 and then report better fit on J01–J08 as new validation — that would be fitting within our own sample, and it would defeat the entire point of freezing the model. The next version should begin with the residuals as **open problems**, not with J01–J08 as training data.

---

## Implication for Subsidiarity

A governance architecture might be, for instance, `A=1, P=1, X=4, F=20, K_P=4, K_I=20`: local authority, local delivery, shared specialist capacity, broad risk sharing, some policy harmonization, and a national technical interface. Calling that construction "municipal" or "national" then says relatively little.

This points toward a more functional formulation of the subsidiarity principle:

> **Place each governance function at the lowest scale that can carry that function's requirements, and connect the levels without automatically moving the other functions with it.**

That is a stronger principle than "as local as possible," and it cuts both ways. A need for national standardization, regional specialist capacity, broad risk sharing, or system-wide infrastructure does not by itself justify centralizing production, local discretion, or final authority as well. But conversely: binding authority should not be kept local if the system function itself requires shared final decisions.

---

## What This Does Not Show

- It does **not** show that factorization is better than merger or centralization. The existence of an architecture says nothing about its outcomes.
- It is **not** a causal test. We compare a model's predictions with observed organization, nothing more — and the model does not predict historical causality either.
- Sixteen functions across two tests is a small, deliberately heterogeneous sample. The second sample was selected mechanically, which is better, but that does not make it representative.
- Coding of both problem structure and outcomes involves judgment. We lock and publish the protocol precisely so it can be challenged.
- **No success threshold was preregistered**, and no chance baseline has been published. The absolute hit percentages should therefore not be quoted standalone.
- The model is stylized: three scale levels, synthetic local states, no strategic actors, no dynamics.

---

## Consequences for the Corpus

This work underlies the following entries in the **[Evidence Matrix](/evidens/syntes/matris/)**:

- **C4a** (functions can be factorized across scales) — conditionally supported. Strengthened by the second blind test: component separation observed in all sixteen functions, now beyond the municipal sphere.
- **C4b** (problem structure predicts the specific factorization) — mixed / unresolved, but with a clear partial improvement: binding authority is now predicted considerably better than in the previous locked version.
- **C5** (coordination is a design variable) — new supporting material through the `K_P`/`K_I` separation.
- **H5**, **H7**, **H9**, **H14** — status unchanged, new evidence.

See also **[What We Know](/evidens/syntes/vad-vi-vet/)** and **[Open Questions](/evidens/syntes/oppna-fragor/)**.

---

## Download the Report

The full research report on the v0.5 blind test — model specification, all eight cases, result measures, residual analysis, and technical appendix — is available as a downloadable PDF:

**[Download the full report (PDF, English) →](/downloads/Governance-Factorization-v0.5-blind-test-report.pdf)**
**[Ladda ner hela rapporten (PDF, svenska) →](/downloads/Styrningsfaktorisering-v0.5-blindtest-rapport.pdf)**

---

## Materials and Sources

**Frozen models and locked artifacts:** model scripts v0.1.1c and v0.5, coding protocols, prediction locks, κ_M locking protocol, implementation audit, analytical/synthetic test suite, outcome audit, and prediction × outcome synthesis. The model is original work for Svensk Subsidiaritet (Björn Kenneth Holmström, with DeepSeek as a modelling and coding collaborator) — not a GAE report.

**Sources for outcome coding, blind test 1:**

- Statskontoret (2023), *Hand i hand — en analys av kommunal samverkan*
- Upphandlingsmyndigheten, national procurement survey 2025
- SKR, *Politisk organisation i kommuner och regioner* (2024) and statistics on inspection and control (2023)
- MSB, material on municipal fire and rescue services and command systems
- SOU 2024:82, *Ökad VA-beredskap*
- Boverket, PBL knowledge base on the planning monopoly and regional planning
- The Social Services Act and SCB on municipal fiscal equalization

**Sources for outcome coding, blind test 2:**

- SISAB, *Vår historia* — management of Stockholm's school buildings
- City of Stockholm, *Handlingsplan för minskat klotter* (2021)
- Skolverket, on school placement in municipal compulsory schools
- Transportstyrelsen, *Parkeringsanmärkning*
- Sahlgrenska University Hospital, *Verksamhet Klinisk mikrobiologi* and *Bild- och interventionscentrum / Nuklearmedicin*
- Svenska kraftnät, on its responsibilities in the power system
- LFV, *Här finns LFV*, and Transportstyrelsen, *Organisationer som utövar ATM/ANS-tjänst i Sverige*

Full links are in the report. The figures above are those coded in the respective outcome audits; they may have been updated since.

---

*Last updated: after the v0.5 blind test.*
