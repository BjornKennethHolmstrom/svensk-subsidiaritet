# Can Governance Scale Be Factorized?

## A Frozen-Model Test Across Eight Swedish Municipal Functions

**Status:** Research note, v0.1. The model was frozen before we examined how any of these functions is actually organized, and its predictions were locked before outcomes were coded. The result was mixed — and that is the interesting part. This is an **[R] result inside an exploratory model** plus an **[IP] pattern test against Swedish institutions**. It is not a causal test and not a claim about what is optimal. See **[How We Know](/evidens/sa-vet-vi/)** for the claim levels.

---

## The Question

The project's fourth synthesis claim, **C4**, has so far said that scale *might* be factorizable: that some benefits of larger scale can perhaps be obtained through shared financing or shared functions without merging the underlying political jurisdictions. The hedging was deliberate — we had no test.

The underlying question:

> Under what conditions can jurisdictions obtain economies of scale, specialist capacity, risk pooling, and cross-boundary coordination **without** also centralizing political decision-making?

To answer it we built a small mechanistic model, froze it, and let it predict how eight Swedish municipal functions *ought* to be organized. Then we went and looked.

---

## What We Did, and in What Order

The order is the whole point. A model adjusted after seeing the answers can always be made to fit.

```text
1. Build the model                Governance Factorization Simulator v0.1
2. Freeze it                      v0.1.1c, no changes after this point
3. Code eight functions blind     problem structure [L,S,C,E,R], without looking at organization
4. Lock the coding
5. Run the model, lock predictions
6. Research reality               only now
7. Code outcomes component-wise   authority / production / specialist / finance / coordination
8. Compare                        no model modification permitted
```

Step 7 is a separate safeguard. If you ask "is this FACTORIZED?" directly, it is easy to say yes whenever anything looks multilevel. So we first coded where each component actually sits, and only then compared against the model's ideal types.

---

## The Model in Brief

The model describes a public function using five problem characteristics, each on a 0–1 scale:

| | |
|---|---|
| **L** | dependence on local information |
| **S** | economies of scale in production |
| **C** | specialist-capacity requirement (a threshold effect, deliberately not the same function as S) |
| **E** | cross-boundary spillovers |
| **R** | risk- and finance-pooling requirement |

It then compares five governance architectures — `LOCAL`, `MERGER`, `SHARED`, `REGIONAL`, `FACTORIZED` — under five normative weightings. We used **balanced** as the primary scenario and the other four as robustness checks.

In the model, `FACTORIZED` means roughly: local political authority, but supra-local production **and** supra-local specialist capacity **and** supra-local finance/risk. That bundling turns out to matter a great deal.

---

## The Locked Codings

Eight deliberately heterogeneous functions, coded on a five-point anchored scale (0 / 0.25 / 0.50 / 0.75 / 1.00) before their organization was examined.

| ID | Function | L | S | C | E | R |
|---|---|---|---|---|---|---|
| F01 | Municipal IT | 0.50 | 0.75 | 0.75 | 0.50 | 0.25 |
| F02 | Procurement | 0.50 | 0.75 | 0.75 | 0.25 | 0.25 |
| F03 | Environmental inspection | 0.75 | 0.25 | 0.75 | 0.50 | 0.25 |
| F04 | Fire and rescue services | 0.75 | 0.50 | 0.75 | 0.50 | 0.50 |
| F05 | Water and sewerage | 0.75 | 0.75 | 0.75 | 0.75 | 0.50 |
| F06 | Physical planning | 0.75 | 0.25 | 0.50 | 0.75 | 0.25 |
| F07 | Elder care | 0.75 | 0.25 | 0.50 | 0.25 | 0.75 |
| F08 | Specialist social services | 0.75 | 0.25 | 0.75 | 0.25 | 0.50 |

---

## The Locked Predictions

| ID | Function | Model prediction | Modal share | Strength |
|---|---|---|---:|---|
| F01 | Municipal IT | SHARED | 86.1% | Strong |
| F02 | Procurement | SHARED | 100.0% | Strong |
| F03 | Environmental inspection | SHARED | 94.6% | Strong |
| F04 | Fire and rescue | FACTORIZED | 99.5% | Strong |
| F05 | Water and sewerage | FACTORIZED | 100.0% | Strong |
| F06 | Physical planning | FACTORIZED | 65.6% | Strong |
| F07 | Elder care | FACTORIZED | 100.0% | Strong |
| F08 | Specialist social services | SHARED | 50.0% | Weak / contested |

The model made very strong predictions in six of eight cases. That makes the later misses informative: it cannot hide behind having been uncertain.

---

## What Sweden Actually Does

Outcome coding places each component on a scale: `KOM` = individual municipality, `SAM` = stable intermunicipal level, `REG` = region, `NAT` = national.

| ID | Function | Authority | Production | Specialist | Finance/risk | Coordination |
|---|---|---|---|---|---|---|
| F01 | IT | KOM | KOM/SAM | KOM/SAM/NAT | KOM | SAM/NAT |
| F02 | Procurement | KOM | KOM/SAM | KOM/SAM | KOM | SAM/NAT |
| F03 | Environmental inspection | KOM/SAM | KOM/SAM | KOM/SAM | KOM/SAM | SAM/NAT |
| F04 | Fire and rescue | often SAM | SAM | SAM | KOM/SAM | larger SAM/NAT |
| F05 | Water and sewerage | KOM | mainly KOM | KOM/SAM | mainly KOM | KOM/SAM/NAT |
| F06 | Physical planning | KOM | mainly KOM | KOM/SAM | KOM | KOM/REG/NAT |
| F07 | Elder care | KOM | mainly KOM | mainly KOM | KOM + NAT equalization | REG/NAT |
| F08 | Specialist social services | KOM | KOM/SAM | KOM/SAM | KOM + NAT equalization | SAM/NAT |

Some of the figures behind this coding: Statskontoret found contractual cooperation on IT systems in 32 percent of responding municipalities, but only 7 percent for residential and home elder care. The 2025 national procurement survey reported 84.2 percent using coordinated procurement but only around 19 percent with a joint purchasing function hosted by another organization. SKR's mapping showed 170 municipalities in 35 fire-and-rescue federations. The water and sewerage inquiry (SOU 2024:82) surveyed all 290 municipalities and found 31 percent using a clearly intermunicipal organizational form — the rest operate in-house or through their own company. Full sources at the end.

---

## The Comparison

| ID | Prediction | Audited outcome | Verdict |
|---|---|---|---|
| F01 IT | SHARED | Mixed, SHARED-leaning | Partial match |
| F02 Procurement | SHARED | SHARED-like, task-selective | Functional match |
| F03 Environmental inspection | SHARED | Mixed local / SHARED / MERGER-like | Partial / overprediction |
| F04 Fire and rescue | FACTORIZED | MERGER-like + multiscale command | Adjacent, structural mismatch |
| F05 Water and sewerage | FACTORIZED | Local-dominant mixed | Clear mismatch |
| F06 Physical planning | FACTORIZED | Local + supra-local coordination | Clear mismatch |
| F07 Elder care | FACTORIZED | Local production + national fiscal pooling | Structural mismatch, C4-compatible |
| F08 Specialist social services | SHARED, weak | Mixed; selected functions strongly SHARED-like | Compatible but inconclusive |

A conservative reading: **one** clear functional match, **two** partial, **one** compatible but weak test, **one** adjacent structural mismatch, and **three** clear mismatches. It would be misleading to say "five out of eight correct."

---

## Result I — The SHARED Mechanism Holds Up Better Than the FACTORIZED Architecture

The model's four SHARED predictions did reasonably well. Procurement is the cleanest case: Swedish municipalities coordinate purchasing very widely while remaining separate political entities. That is exactly the mechanism the model tries to capture — high specialist-capacity requirements plus limited need for full political integration produce shared capacity without merger.

IT and environmental inspection point in the right direction, but the model underestimates institutional diversity. Contractual cooperation, a joint committee, and a municipal federation are three very different things; the model has one ideal type for all of them.

The FACTORIZED predictions fared worse, and the model made them with high confidence. That is the most informative part of the test.

---

## Result II — The Central Finding

> **Reality supports factorization as a phenomenon better than it supports the model's specific FACTORIZED architecture.**

The distinction matters. The model's FACTORIZED bundles production, specialist capacity, and finance and moves all of them up together. Swedish institutions frequently factorize **only some** of these components, and not always in the same direction:

- **Elder care** pools fiscal risk nationally through cost equalization while production stays municipal. That is the inverse of the model's bundle — and the architecture does not exist in v0.1.1c.
- **Physical planning** keeps binding authority strictly municipal through the planning monopoly while coordination runs regionally and nationally. Regional plans are advisory, not binding.
- **Water and sewerage** shows extensive production cooperation but very little financial pooling — the inquiry explicitly describes joint tariff collectives as legally difficult.
- **Fire and rescue** looks like local nodes inside a joint organization inside a still larger command system. That is a hierarchy of functionally distinct scales, not a choice between local and regional.

In other words: component separation is genuinely widespread in Swedish governance. It just is not the separation we happened to encode.

---

## Why We Are Splitting C4 in Two

Keeping C4 as a single claim would conflate something the evidence supports with something it does not.

### C4a — Governance Functions Can Be Factorized Across Scales

> Different components of a governance function — political authority, production, specialist capacity, financing, and coordination — can be located at different scales rather than bundled at a single territorial level.

**Status:** Conditionally supported. **Confidence:** Medium.

Not high, because only eight functions have been analyzed, the sample is strategic rather than representative, component coding involves judgment, and the *existence* of an architecture does not prove it works well. But this has moved past "empirically unresolved."

### C4b — Problem Structure Predicts the Specific Optimal Factorization

> The relative importance of local information, scale economies, specialist capacity, spillovers, and risk pooling is sufficient to predict which concrete components should be pooled and which should stay local.

**Status:** Mixed / unresolved. **Confidence:** Low–Medium.

This is the claim the test actually pressured, and it did not hold up well.

---

## What the Mismatches Say the Model Is Missing

Four gaps are now empirically motivated rather than speculative.

**Component-selective pooling.** The model needs to be able to place finance at one scale without moving production. Elder care is the clearest case.

**Legal and constitutional assignment.** The municipal planning monopoly is an institutional constraint that problem structure alone cannot override. A future model must distinguish *optimal* architecture from *feasible* architecture.

**Asset specificity and network geography.** Water and sewerage shows that strong general scale economies do not mean the region is the right production scale. Pipe networks, water sources, catchment areas, and sunk capital determine scale at least as much. None of that lives in the abstract `S` variable.

**Hierarchical multiscale coordination.** Fire and rescue shows local nodes inside a joint organization inside a larger command system. The model has no way to express nested scales.

---

## What We Will Not Do

We will **not** adjust v0.1.1c and then report improved fit on the same eight functions as new validation. That is textbook in-sample fitting, and it would destroy the point of freezing the model.

v0.1.1c is therefore archived permanently as the project's **first frozen benchmark**. The eight functions become a **development set** for the next version — not a test set.

---

## v0.2 — From Architecture Types to Scale Vectors

The mismatches all point the same way. "Which of five architectures is best?" is probably the wrong question. A better one:

> **Which scale does each component of the function require — and how should the interfaces between them be governed?**

That means representing a governance architecture as a configuration rather than a category:

```text
G = (A, P, C, F, K)

A = authority scale
P = production scale
C = specialist-capacity scale
F = finance / risk scale
K = coordination scale
```

Then the model can actually express what Sweden does:

```text
Elder care          A=KOM  P=KOM  C=KOM     F=KOM+NAT  K=REG/NAT
Fire and rescue     A=SAM  P=SAM  C=SAM     F=KOM/SAM  K=larger network
Physical planning   A=KOM  P=KOM  C=KOM/SAM F=KOM      K=REG/NAT
```

v0.2 must then be tested against **new** functions it was not developed on. A planned holdout set: waste management, public transport, libraries, upper secondary schools, building permits, food safety inspection, mobility services, and civil preparedness.

---

## What This Does Not Show

- It does **not** show that factorization outperforms merger or centralization. The existence of an architecture says nothing about its outcomes.
- It is **not** a causal test. We compare one model's predictions against observed organization, nothing more.
- Eight functions is a small, deliberately heterogeneous sample, not a representative one.
- Coding of both problem structure and outcomes involves judgment. We locked it and published the protocol precisely so it can be contested.
- The model is stylized: 20 equal-sized jurisdictions, synthetic local states, no strategic actors, no dynamics.

---

## Summary

The frozen model received limited support as an architecture predictor and substantially stronger support for its underlying premise. The main lesson is not that factorization is uniformly superior, but that governance components do appear at different scales — in more combinations than the model allows.

> **The design question seems to be less *which level should govern a function* and more *which component of the function requires which scale, and how should the resulting interfaces be governed*.**

Methodologically we also got something worth having: **the model was allowed to fail before we changed it.** The next version can therefore learn something from reality rather than being built to confirm the original idea.

---

## Consequences for the Corpus

This work is behind the following updates to the **[Evidence Matrix](/evidens/syntes/matris/)**:

- **C4** is split into **C4a** (conditionally supported) and **C4b** (mixed / unresolved).
- **H5** (scale economies and specialization) — confidence raised to Medium–High.
- **H7** (functional scale variation), **H9** (local autonomy with fiscal equalization), and **H14** (boundary fit) — strengthened, confidence unchanged.
- **H3** and **H8** — new supporting material, status unchanged.

See also **[What We Know](/evidens/syntes/vad-vi-vet/)** and **[Open Questions](/evidens/syntes/oppna-fragor/)**.

---

## Materials and Sources

**Frozen model and locked artifacts:** model script v0.1.1c, coding protocol v0.1, prediction lock v0.1, outcome coding audit, and prediction × outcome synthesis. The model is original work for Swedish Subsidiarity (Björn Kenneth Holmström, with DeepSeek as modelling and code partner) — not a GAE report.

**Sources for outcome coding:**

- Statskontoret (2023), *Hand i hand — en analys av kommunal samverkan*
- Upphandlingsmyndigheten, national procurement survey 2025
- SKR, *Politisk organisation i kommuner och regioner* (2024) and inspection statistics (2023)
- MSB, material on municipal fire and rescue services and command systems
- SOU 2024:82, *Ökad VA-beredskap*
- Boverket, PBL knowledge bank on the planning monopoly and regional planning
- The Social Services Act and SCB on municipal fiscal equalization

The figures above are those coded during the outcome audit from these sources; they may have been updated since.
