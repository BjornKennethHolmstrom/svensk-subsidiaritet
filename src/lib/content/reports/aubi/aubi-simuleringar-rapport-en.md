## Summary

This report examines **adaptive universal basic income (AUBI)** – a hybrid between universal basic security, needs-based adjustment, and a collective fund for voluntary work. The aim is to test the conditions under which such an architecture can improve welfare compared with pure universalism, targeted support alone, or individual basic income alone.

**Method:** We have developed a series of simulations in which a population with heterogeneous needs receives support through different architectures. The model has been successively extended to include:

- **Individual architectures:** Universal, Targeted, and Adaptive (base + needs-tested top-up).
- **Dynamic adjustment** with measurement error, adjustment speed, and feedback.
- **Social capital** as a separate outcome measure.
- **Voluntary work** financed via a collective fund.
- **Real capacity constraint** for basic income, inspired by MMT.

Several substudies have been carried out: from static comparisons to sensitivity analyses of allocation shares and efficiency parameters.

**Main results:**

- **Heterogeneity and measurement error determine the value of individual-based adaptivity.** With high need heterogeneity and moderate measurement error, an adaptive top-up can reduce both average loss and severe deprivation. With low heterogeneity, simple universalism is often best.

- **The objective function is decisive.** By explicitly weighting severe deprivation (λ ≈ 1–2), the proportion of severely underprovided individuals can be reduced substantially at a moderate cost in average coverage.

- **Social capital and voluntary work are important dimensions.** Voluntary work reduces material deprivation and markedly increases social capital. Participation is stable around 53% and largely independent of the basic income level, suggesting that work is driven by motives other than economic desperation.

- **A mix of basic income and collective fund is robust.** When social capital is valued, an allocation of 60% basic income and 40% collective fund is optimal in most tested scenarios, especially with high heterogeneity. This result remains even when a real capacity constraint is introduced for basic income.

- **Real capacity is crucial.** In an economy with limited production capacity, a high nominal basic income can lead to inflation and eroded purchasing power. A collective fund that creates real production then becomes particularly valuable.

The results are model-based and exploratory. They constitute mechanistic support, not empirical evidence, and require calibration against real data before they can inform policy.

**Conclusions:** AUBI should be seen as a family of architectures rather than a specific system. The simulations indicate that a combination of high basic income and collectively financed voluntary work can balance material security and social capital. However, the results are **exploratory** and based on simplified assumptions. Before they can inform policy, calibration against empirical data and field studies is required.

The report concludes with a discussion of methodological limitations and suggestions for future research.

---

## 1. Introduction and Purpose

### Background

The debate on universal basic income (UBI) has long focused on a simple question: can an unconditional and general cash transfer reduce poverty and insecurity better than targeted support? Research provides some support that unconditional cash transfers can improve material and psychological outcomes, but it also shows that a uniform amount does not suit everyone. People have different needs depending on, for example, disability, family situation, place of residence, and life stage.

This report examines an extension of UBI: **adaptive universal basic income (AUBI)**. Unlike traditional UBI, AUBI combines a universal foundation with an adaptive layer that can be adjusted according to observed needs. The purpose is to maintain the simplicity of universalism and its protection against exclusion, while enabling the system to respond to heterogeneous needs without becoming a classic means-tested benefit.

During the course of the work, the model has been further broadened. Beyond the individual adaptive layer, we have included a **collective fund** that finances voluntary work and common goods. This is inspired by two perspectives:

- **Modern Monetary Theory (MMT):** money is not the primary constraint; the real limit is set by the availability of real resources such as labor, knowledge, infrastructure, and ecological capacity. Thus, financing a basic income is not about "finding money," but about how society chooses to use its real resources.
- **Work in Liberation:** work should be voluntary and non-participation a legitimate lifestyle. An AUBI system should therefore not require reciprocity, but can offer meaningful opportunities for contribution that build social capital and reduce need.

### Research Question

The report tests the following overarching question:

> Under what conditions can an adaptive universal basic income – including a collective fund for voluntary work – improve welfare compared to pure universalism, targeted support alone, or individual basic income alone?

More specifically, we examine:

- How do need heterogeneity and measurement error affect the value of adaptivity?
- How should the system's base level and target group be designed?
- Can ongoing (dynamic) parameter adjustment improve results?
- How does feedback from transfer to need affect the system's stability and distributional effects?
- What role do social capital and voluntary work play for total welfare?
- How should a given real resource be distributed between individual basic income and a collective fund?

**Methodological note:** This report is based exclusively on simulations. Simulations are not empirical proof. They can show which mechanisms are logically possible and under which assumptions they produce certain outcomes, but they say nothing about how strong the mechanisms are in reality. All conclusions should therefore be read as model-based hypotheses, not as established relationships.

### Connection to Theoretical Frameworks

The work is part of the research program for **Swedish Subsidiarity** and builds on the hypothesis **H2b – need heterogeneity**:

> When relevant needs vary substantially between people, groups, or places, a uniform provision can give worse fit than a common framework with appropriately adapted components.

We also use perspectives from **Governance as Engineering (GAE)** to understand why systems fail. Particularly relevant concepts are variety gap, measurement error, Goodhart-like risks, adaptation bottleneck, and feedback dynamics.

The later simulations are also explicitly influenced by **MMT** and **Work in Liberation**, which means that we do not model a monetary budget constraint, but a real resource constraint, and that voluntariness and social capital are central outcome measures.

### Structure

The report is organized as follows:

- **Section 2** presents the theoretical framework, including H2b, GAE, MMT, and Work in Liberation, as well as previous results.
- **Section 3** describes the simulation model and methodology, including social capital, voluntary work, and collective fund.
- **Section 4** reports the results from nine sub-studies: static analysis, optimization, dynamic adaptation, sensitivity to weighting parameters, feedback, social capital, collective fund, sensitivity analysis of efficiency parameters, and the importance of heterogeneity.
- **Section 5** discusses implications, risks, and design principles.
- **Section 6** draws conclusions and connects to AUBI research.
- **Section 7** addresses limitations and future research needs.
- **Appendices** contain parameter overview, code snippets, result tables, connection to the evidence matrix, and a theoretical reference to MMT and Work in Liberation.

---

## 2. Theoretical Framework

This report builds on four complementary perspectives: the hypothesis of need heterogeneity (H2b), Governance as Engineering (GAE), Modern Monetary Theory (MMT), and the Work in Liberation framework. Together they provide a common foundation for understanding when and how an adaptive universal basic income can be designed.

### 2.1 The Hypothesis of Need Heterogeneity (H2b)

The starting point is the hypothesis **H2b – need heterogeneity**:

> When relevant needs vary substantially between people, groups, or places, a uniform provision can give worse fit than a common framework with appropriately adapted components.

**Important distinction:** H2b is not a variant or specification of the existing hypothesis H2. H2 concerns **preference heterogeneity** – people want different things. H2b concerns **need heterogeneity** – people need different resources to achieve comparable outcomes. These are different mechanisms with different testable implications. A transfer that varies with disability or family situation does not test whether local preferences justify differentiation, but whether local capacity conditions do. We therefore maintain H2b as a hypothesis in its own right.

The concept of *need* is defined here not as an absolute condition, but as the resources, conditions, or support required for an individual or group to reach a certain relevant outcome or maintain a minimum level of participation. Need heterogeneity can manifest in magnitude, type, duration, timing, and context-dependence.

In the simulations, need heterogeneity is operationalized through the shape parameter \(k\) in a gamma distribution: low \(k\) gives a skewed distribution with large spread, while high \(k\) gives a more homogeneous population.

### 2.2 AUBI as Architecture

Adaptive universal basic income (AUBI) is not a finished system but an **architecture** with two or three layers:

1. **A universal foundation** – an unconditional and general cash transfer that provides a common minimum security.
2. **An adaptive layer** – a need-dependent supplement that can be adjusted according to observed needs, for example by certain individuals or households receiving an addition.
3. **A collective fund** – resources used to finance voluntary work, public goods, and interventions that reduce need and build social capital.

The first two layers are individual; the third is collective. In the earlier simulations, we focused on the first two layers. The later models include all three, in line with MMT's emphasis on real resources and Work in Liberation's emphasis on voluntariness and social value.

The architecture's central parameters are:

- **α** – the base level in the individual system (how large a share of the transfer budget lies in the universal foundation).
- **p_high** – the proportion of individuals identified as having higher needs and thus receiving a supplement.
- **b** – the share of the total real resource \(R\) that goes to individual basic income; the remainder goes to the collective fund.
- **λ** – the weight the system assigns to severe deprivation in its objective function.

### 2.3 Governance as Engineering (GAE)

We use perspectives from **Governance as Engineering** to analyze why certain system designs fail or succeed. Particularly relevant concepts are:

- **Variety gap:** A system with too little internal variety cannot match the variety of needs it must handle. Universal has a large variety gap because it treats everyone equally; adaptive systems try to reduce the gap but simultaneously create new error sources.

- **Measurement error and Goodhart-like risks:** When the system optimizes on observable signals (observed needs) instead of real needs, it can overfit to noise or miss important dimensions. This is a central risk in all need-based systems. In our simulations, this manifests through an objective function that only minimizes average deviation potentially leading to increased severe deprivation.

- **Adaptation bottleneck:** Dynamic adaptation is limited by how quickly and reliably the system can perceive and react to changes. We model this through the parameter **γ** (adaptation speed). Fast adaptation can worsen problems by capturing noise.

- **Feedback dynamics:** Transfer in reality affects individuals' life situations, which in turn affects their future needs. A system that does not account for this can end up in self-reinforcing negative spirals. Our simulations show that weighting toward severe deprivation and sufficiently high base level contribute to stability.

### 2.4 Modern Monetary Theory (MMT)

MMT questions the traditional notion that the state must finance expenditures through taxes or loans before it can spend. In a system with sovereign currency, the state can always issue money to pay for what society has decided to do. The real constraint is **the availability of real resources**: labor, raw materials, energy, technology, knowledge, and ecological capacity.

For AUBI, this means two things:

- **The financing of basic income is not an insurmountable obstacle.** The state can create the money. What really matters is whether the economy has real resources to meet the increased demand – which is a question of production capacity, not budget ceilings.
- **The choice between individual transfer and collective investments is a resource allocation question.** We model this through a fixed real resource per capita \(R\) that can be distributed between basic income and collective fund. This reflects MMT's core message that it is not money that is limited, but how society chooses to use its real capacity.

### 2.5 Work in Liberation

Work in Liberation is a framework that emphasizes that work must be voluntary and that non-participation is a legitimate lifestyle. It proceeds from the principle that material security must be decoupled from work for work to be truly voluntary.

Key concepts:

- **Voluntariness and the right not to participate:** No one should be forced to work or to make their contributions visible. Low formal activity must not be interpreted as laziness or failure.
- **Social capital:** Relationships, trust, and community are central values. Work can contribute to social capital, but only if it is voluntary and does not lead to overload.
- **Collective fund:** Part of society's resources should be used to finance work that produces collective goods – care, education, ecological restoration – rather than relying solely on individual demand.
- **Basic income as precondition:** A sufficiently high unconditional foundation is necessary for work to be an offer, not a survival strategy.

In the simulations, these ideas are operationalized by individuals being able to choose to work voluntarily, work providing both individual income and collective benefit, and social capital being an outcome measure.

### 2.6 Previous Results and Open Questions

From the literature, we know that:

- Unconditional cash transfers can improve material and psychological outcomes, but effects vary between groups and contexts.
- Targeted systems often have significant exclusion and inclusion errors as well as administrative costs.
- Adaptive social protection (ASP) is already used in some contexts to respond to shocks, but it is usually categorical rather than universal.

Our previous simulations (Section 4.1–4.5) showed that:

- Adaptivity pays off under high need heterogeneity and moderate measurement error, but pure universalism is often better under low heterogeneity.
- The objective function's design is crucial: without weighting of severe deprivation, the system risks neglecting the weakest.
- Dynamic adaptation can improve results but requires caution to avoid volatility.
- Feedback from transfer to need can create instability if the system is not properly calibrated.

The new simulations (Section 4.6–4.9) build on this by including social capital, voluntary work, and collective fund. They aim to answer questions about how a real resource should be distributed between individual basic income and collective investments, and how this is affected by the population's need structure and society's values.

---

## 3. Model Description and Methodology

This section describes the simulation model used in the report. The model has been built up incrementally: from a static comparison of three architectures to a dynamic model with social capital, voluntary work, and collective fund. We present the complete structure here, but note when certain parts are only used in specific sub-studies.

### 3.1 Population and Needs

The simulations are based on a population of \(N\) individuals. Each individual has a long-term mean need \(\mu_i\), drawn from a gamma distribution with mean 1 and shape parameter \(k\). The parameter \(k\) controls heterogeneity:

- Low \(k\) (e.g., 0.5) gives a skewed distribution with large spread: many with low needs but some with very high.
- High \(k\) (e.g., 10) gives a more symmetric and homogeneous distribution.

Needs can change over time (see 3.6), but in the static analyses they are held constant. Needs are measured in a generic resource unit and represent the minimum level of material security required for the individual to achieve a basic standard of living.

### 3.2 Real Resource and Allocation

Instead of a monetary budget constraint, we assume that society has a fixed real resource per individual and period, denoted \(R\). This resource represents the total capacity to produce goods and services, including labor, infrastructure, and ecological carrying capacity. In most runs, \(R = 1.0\).

The resource can be distributed between two main uses:

- **Individual basic income (B):** \(B = b \cdot R\), where \(b\) is the share of the resource given as cash transfer to all individuals.
- **Collective fund (K):** \(K = (1-b) \cdot R\), which finances voluntary work and common goods.

This formulation is inspired by MMT: it is not money that is limited, but real capacity. The choice of \(b\) is a political allocation question.

**Real capacity constraint for basic income.**  
In the extended model (substudy 4.10), we introduce a real production capacity \(C\) per individual. The nominal value of basic income \(B = b \cdot R\) is assumed not always to be convertible into real purchasing power. Instead, real purchasing power is modeled as a soft capacity function:

\[
\text{real\_B} = C \cdot (1 - e^{-B/C})
\]

This function implies that when \(B\) is small relative to \(C\), real purchasing power is approximately equal to \(B\), but as \(B\) grows the marginal benefit diminishes and real purchasing power approaches \(C\) asymptotically. This is a simple way to represent inflation or supply constraints: if demand exceeds the economy’s production capacity, prices rise and real purchasing power falls.

Labor income, on the other hand, is assumed to be real, since labor produces services directly and is therefore not exposed to the same form of demand inflation.

### 3.3 Architectures

In the earlier sub-studies, three basic architectures were compared:

- **Universal:** Everyone receives the same transfer – the entire individual budget is divided equally.
- **Targeted:** Only those classified as having high needs receive transfer; others receive nothing.
- **Adaptive:** Everyone receives a base transfer, and those classified as having high needs also receive a supplement.

For Targeted and Adaptive, the following parameters are used:

- **p_high** – the proportion of individuals classified as high-need.
- **α (alpha)** – the base level in Adaptive: the share of the transfer budget distributed equally to all. The remainder goes to supplements for high-need individuals.

Administrative cost is assumed to be proportional to the number of classified individuals and is deducted from the budget before transfer is calculated.

In the later models, the architecture is expanded with a collective fund and voluntary work, as described in 3.5 and 3.7.

### 3.4 Observation and Measurement Error

The system does not observe real needs directly, but a noisy signal:

\[
\hat{b}_i = b_i + \varepsilon_i, \quad \varepsilon_i \sim N(0, \sigma_{\varepsilon}^2)
\]

\(\sigma_{\varepsilon}\) represents measurement error. In most analyses, \(\sigma_{\varepsilon}=0.3\). Classification of high need is made based on the observed distribution, which creates exclusion and inclusion errors.

In the dynamic simulations, the observation is smoothed with an exponential moving average:

\[
s_i(t) = \gamma \hat{b}_i(t) + (1-\gamma)s_i(t-1)
\]

\(\gamma\) is the adaptation speed. \(\gamma=1\) means the system reacts directly to the latest observation, while lower values give more sluggish adaptation.

### 3.5 Social Capital

Social capital \(S_i(t)\) is a stock representing the individual's relational resources: trust, networks, belonging, and ability to cooperate. It is updated each period according to:

\[
S_i(t+1) = S_i(t) + (1-\rho_S)(\bar{S} - S_i(t)) + \gamma_{rel}\cdot \text{rel\_time}_i - \gamma_{stress}\cdot \text{stress}_i + \text{work\_effect}_i + \eta \cdot L
\]

where:

- \(\bar{S}\) is the long-term mean (set to 1).
- \(\rho_S\) is persistence (0.9).
- rel_time is a measure of time for relationships, approximated as material security (income/need).
- stress is the gap between need and income.
- work_effect is a function of voluntary work (positive up to an optimal level, negative at overload).
- \(\eta \cdot L\) is the collective effect of society's total work: the more work hours per capita, the greater the social capital addition.

Social capital can take values between 0 and 3.

### 3.6 Voluntary Work

Individuals can choose to participate in voluntary work, which gives them work income in addition to basic income. The work decision is modeled as a logistic function:

\[
P(\text{works}) = \frac{1}{1 + \exp(-s \cdot (w - \text{reservation\_wage}))}
\]

where:

- \(w\) is the hourly wage (0.05 in the base model),
- reservation wage depends on material stress: the greater the gap between need and transfer, the lower the reservation wage,
- \(s\) is the sensitivity parameter (5.0).

Work time is either 0 or max_hours (15 hours). The collective fund \(K\) sets a ceiling for the total number of work hours that can be financed:

\[
\text{max total hours} = \frac{K \cdot N}{w}
\]

If the demand for work exceeds this ceiling, all individuals' work hours are scaled down proportionally.

Work produces two types of collective benefit:

- **Need reduction:** \( \phi_{work} \cdot L \), where \(L\) is average work hours per capita. This represents that care work, education, ecological restoration, etc., reduce future needs.
- **Social capital addition:** \( \eta_{work} \cdot L \), which is added to everyone's social capital.

### 3.7 Collective Fund

The collective fund \(K\) finances work and thereby collective benefit. In the model, the fund is not a passive sum of money, but a real resource that enables employment of labor. The larger \(K\), the more work hours can be performed, which in turn reduces needs and strengthens social capital. The fund's efficiency is determined by the parameters \(\phi_{work}\) and \(\eta_{work}\).

### 3.8 Dynamics and Feedback

In the dynamic simulations, needs follow an AR(1) process:

\[
b_i(t+1) = \rho b_i(t) + (1-\rho)\mu_i + \varepsilon_i(t) - \phi_{work}L(t)
\]

where \(\rho\) controls persistence and \(\varepsilon_i(t)\) is a shock with standard deviation 0.1. The last term represents the collective need reduction from work.

In some models, feedback from transfer to need is also included: if transfer falls below need, need can increase the next period. This was modeled with a saturating function in Section 4.5, but in the later models, the feedback has been simplified away to focus on the allocation question.

### 3.9 Objective Function and Evaluation

To compare different allocations and architectures, a multidimensional welfare function is used:

\[
W = -\omega_1 \cdot \text{underprovision} - \omega_2 \cdot \text{severe} + \omega_3 \cdot \text{social capital}
\]

where:

- **Underprovision** is the average absolute difference between need and income when income falls below need; overincome is not penalized.
- **Severe** is the proportion of individuals whose income falls below 50% of need.
- **Social capital** is average social capital in the population.

The weights \(\omega_1, \omega_2, \omega_3\) can be varied to reflect different societal priorities. In most analyses, either equal weights (0.33, 0.33, 0.34) or a weighting where material deprivation dominates (0.6, 0.2, 0.2) are used.

### 3.10 Optimization Method

In the static and early dynamic analyses, parameters such as \(p_{high}\) and \(\alpha\) were optimized through grid search over a discrete parameter space. In the later models, \(b\) is the primary allocation parameter, and we test values from 0.2 to 1.0.

For each parameter combination, multiple repetitions (usually 5–10) are conducted with different random seeds. Results are averaged over repetitions and over time periods (T = 50).

### 3.11 Simulation Scenarios

The report encompasses nine sub-studies:

- **4.1–4.5:** The earlier models – static analysis, optimization, dynamic adaptation, λ-sensitivity, feedback.
- **4.6:** Social capital and voluntary work.
- **4.7:** Collective fund and MMT-inspired distribution.
- **4.8:** Sensitivity analysis of \(\phi_{work}\), \(\eta_{work}\), and weights.
- **4.9:** The importance of heterogeneity for allocation mix.

---

## 4. Simulation Results

This section reports the results from nine sub-studies. The first five (4.1–4.5) focus on individual adaptive mechanisms: heterogeneity, optimization, dynamics, objective function, and feedback. The following four (4.6–4.9) extend the analysis with social capital, voluntary work, collective fund, and the importance of heterogeneity for allocation mix.

### 4.1 Static Analysis: Heterogeneity, Measurement Error, and Administrative Cost

In the first sub-study, Universal, Targeted, and Adaptive were compared under varying need heterogeneity (\(k\)) and measurement error (\(\sigma\)). Administrative cost was set to zero or varied in a later step.

**Main results:**

- Under **high heterogeneity** (\(k \leq 2\)) and moderate measurement error (\(\sigma \leq 0.6\)), Adaptive was best in terms of average absolute loss. Under very high measurement error (\(\sigma = 1.0\)), the difference between Adaptive and Universal was small, but Adaptive was still often better.
- Under **low heterogeneity** (\(k \geq 5\)), Universal was best, regardless of measurement error. Adaptive could improve average loss somewhat, but at the price of a higher share of severely underprovisioned.
- Targeted was never competitive, as it left a large part of the population without support.

**Conclusion:** Adaptivity pays off when need dispersion is large and measurement error is not too great. Pure universalism is preferable when needs are relatively homogeneous.

### 4.2 Optimization of Base Level and Target Group

Here, how the choice of base level (\(\alpha\)) and share of high-need (\(p_{\text{high}}\)) affects Adaptive was examined. The purpose was to find optimal combinations under different heterogeneity.

**Main results:**

- Under high heterogeneity, a relatively low base (\(\alpha \approx 0.4\text{–}0.6\)) and a moderate target group (\(p_{\text{high}} \approx 0.2\text{–}0.4\)) was optimal for minimizing average loss. To reduce severe deprivation, however, a higher base was required (\(\alpha \geq 0.6\)).
- Under low heterogeneity, a high base (\(\alpha \approx 0.8\text{–}0.9\)) and a broader target group (\(p_{\text{high}} \approx 0.3\text{–}0.5\)) was best.
- There was a clear goal conflict: the parameter set that minimized mean absolute loss differed from the one that minimized severe deprivation, particularly under high heterogeneity.

**Conclusion:** There is no general optimal parameter set; the choice must be linked to which welfare goal is prioritized and how heterogeneous the population is.

### 4.3 Dynamic Adaptation

In this sub-study, time variation in needs was introduced through an AR(1) process. We compared fixed parameters with a dynamic optimization that each period chose \(\alpha\) and \(p_{\text{high}}\) based on the latest observation.

**Main results:**

- Dynamic optimization reduced average loss compared to fixed parameters, especially when needs changed.
- The adaptation speed \(\gamma\) was important: fast adaptation (\(\gamma = 1\)) led to higher volatility, while more sluggish adaptation (\(\gamma = 0.1\text{–}0.5\)) gave more stable results and often lower mean loss.
- The dynamic variant could in some cases reduce severe deprivation (especially under low heterogeneity), but under high heterogeneity it tended to increase severe compared to fixed parameters if only mean absolute loss was optimized.

**Conclusion:** Ongoing parameter adjustment can improve accuracy, but requires careful choice of adaptation speed and objective function to avoid creating new problems.

### 4.4 Weighted Objective Function (λ-sensitivity)

To handle the trade-off between average loss and severe deprivation, a weighted objective function was introduced: \( \text{Objective} = \text{mean\_abs} + \lambda \cdot \text{severe} \). We tested different values of \(\lambda\).

**Main results:**

- With \(\lambda = 0\) (only mean absolute loss), mean loss was lowest, but the share of severely underprovisioned was high.
- By increasing \(\lambda\) to 0.5–1.0, severe decreased dramatically, often by 30–50%, at a moderate increase in mean absolute loss (5–10% under high heterogeneity, almost none under low).
- \(\lambda = 1.0\) appeared as a robust starting point. \(\lambda = 2.0\) gave further reduction in severe but marginally, and sometimes somewhat higher mean absolute loss.
- Volatility decreased in several cases with higher \(\lambda\), suggesting that the weighting also stabilized the system.

**Conclusion:** Explicitly including severe deprivation in the objective function is central. Without weighting, the system risks optimizing away the weakest. A \(\lambda\) in the interval 1–2 seems balanced.

### 4.5 Feedback Model

In this sub-study, feedback was modeled: transfer affects future needs. A first linear version became unstable under strong feedback, but a saturating and asymmetric function stabilized the system.

**Main results:**

- Under moderate feedback (\(\beta = 0.1\text{–}0.5\)), Adaptive with dynamic optimization and \(\lambda \geq 1\) performed best. It had both lower mean absolute loss and lower severe than Universal and fixed parameters.
- Under strong feedback (\(\beta = 1.0\)), all losses increased, but the dynamic model was still most robust.
- Weighting toward severe deprivation also proved to dampen need spirals: systems with higher \(\lambda\) tended to get lower final mean need.

**Conclusion:** Under feedback, adaptive dynamics with weighted objective function become even more important. Without adaptation, the system can end up in a negative spiral where insufficient support increases future needs.

### 4.6 Social Capital and Voluntary Work

Here, the model was extended with a variable for social capital and the possibility of voluntary work. Work was initially financed as a separate income, without competing with basic income.

**Main results:**

- Voluntary work reduced underprovision and severe considerably: underprovision fell from 0.319 to 0.207 and severe from 0.140 to 0.074.
- Social capital increased markedly, from 1.86 to 2.50.
- Participation was moderate (53%) and largely independent of basic income level, suggesting that work is voluntary and not driven by desperation.

**Conclusion:** A voluntary work layer can complement basic income and improve both material and relational welfare, provided that the basic security is sufficient.

### 4.7 Collective Fund and MMT-inspired Distribution

The model was reformulated so that a fixed real resource \(R\) is distributed between basic income (\(B\)) and collective fund (\(K\)). The collective fund finances work that reduces needs (\(\phi_{work}\)) and builds social capital (\(\eta_{work}\)).

**Main results:**

- Under standard parameters (\(\phi_{work}=0.004\), \(\eta_{work}=0.006\)), the allocation \(b = 0.6\) (60% basic income, 40% collective fund) was optimal for a broad set of weights.
- A pure basic income (\(b = 1.0\)) gave the lowest material deprivation, but lower social capital.
- A too-large collective fund (low \(b\)) led to too-low basic income, which increased stress and reduced social capital despite work.

**Conclusion:** Basic income and collective fund are complements. A mix of approximately 60/40 can balance material security and relational welfare.

### 4.8 Sensitivity Analysis of Efficiency Parameters and Weights

We varied \(\phi_{work}\), \(\eta_{work}\), and the weights for underprovision, severe, and social capital.

**Main results:**

- When social capital weighed heavily (ω₃ ≥ 0.34), \(b = 0.6\) was optimal in all tested combinations.
- When only material deprivation weighed (ω₃ = 0), \(b = 1.0\) was usually best, but higher \(\phi_{work}\) could shift the optimum to \(b = 0.6\text{–}0.8\).
- Higher \(\phi_{work}\) and \(\eta_{work}\) always improved total welfare, regardless of weights.
- Work participation was insensitive to these parameters and remained stable at approximately 53%.

**Conclusion:** The collective fund's value depends on how efficiently work is converted into need reduction and social capital. If society values relational welfare highly, a significant collective fund is justified.

### 4.9 The Importance of Heterogeneity for Allocation Mix

Finally, how the shape of the need distribution (\(k\)) affects the optimal allocation was examined.

**Main results:**

- Under high heterogeneity (\(k \leq 2\)), \(b = 0.6\) was optimal for both tested weightings.
- Under low heterogeneity (\(k \geq 5\)), the optimum shifted to \(b = 0.8\), especially when underprovision weighed heavily.
- Underprovision and severe decreased with increasing \(k\), while social capital increased.
- Participation was constant (~53%) regardless of heterogeneity.

**Conclusion:** The more unevenly distributed needs are, the greater the benefit of the collective fund. In relatively homogeneous societies, a higher basic income may be more appropriate.

To address the criticism that the previous model did not fully implement the MMT perspective, an extended simulation was conducted in which basic income’s real purchasing power is constrained by a production capacity \(C\). The purpose is to examine how the economy’s real capacity affects the optimal allocation between basic income and the collective fund.

**Method:**  
Basic income is converted into real purchasing power using the function \(C \cdot (1 - e^{-B/C})\). Five capacity levels were tested: \(C = 0.5, 0.8, 1.0, 1.5, 2.0\). For each level, five allocation shares were simulated: \(b = 0.2, 0.4, 0.6, 0.8, 1.0\). Welfare was calculated with equal weights (ω₁=ω₂=ω₃=1).

**Results:**

| C   | Best b | W      | Underprovision | Severe | Social capital |
|-----|--------|--------|----------------|--------|----------------|
| 0.5 | 0.6    | 1.353  | 0.494          | 0.287  | 2.134          |
| 0.8 | 0.6    | 1.541  | 0.448          | 0.246  | 2.235          |
| 1.0 | 0.6    | 1.602  | 0.436          | 0.231  | 2.269          |
| 1.5 | 0.6    | 1.696  | 0.412          | 0.210  | 2.319          |
| 2.0 | 0.6    | 1.767  | 0.392          | 0.196  | 2.354          |

**Observations:**

- The optimal allocation is \(b = 0.6\) for all capacity levels. This confirms that a mix with 60% basic income and 40% collective fund is robust even when basic income’s purchasing power is constrained.
- Higher capacity leads to better outcomes on all dimensions: underprovision, severe, and stress decrease, while social capital increases.
- At low capacity (C = 0.5), a pure basic income (b = 1.0) is sharply worse (W = 0.211 compared with 1.353 at b = 0.6). This is because nominal basic income exceeds capacity, which erodes real purchasing power.
- The collective fund functions as a real investment: it creates jobs and production that reduce needs without fueling demand inflation.

**Conclusion:**  
The economy’s real capacity is crucial for the effectiveness of basic income. When capacity is low, it is especially important to complement basic income with a collective fund that creates real production. The result strengthens the argument for a mixed allocation and provides further support for the MMT perspective.

## 4.10 Real Capacity Model

To address the criticism that the previous model did not fully implement the MMT perspective, an extended simulation was conducted in which basic income’s real purchasing power is constrained by a production capacity \(C\). The purpose is to examine how the economy’s real capacity affects the optimal allocation between basic income and the collective fund.

**Method:**  
Basic income is converted into real purchasing power using the function \(C \cdot (1 - e^{-B/C})\). Five capacity levels were tested: \(C = 0.5, 0.8, 1.0, 1.5, 2.0\). For each level, five allocation shares were simulated: \(b = 0.2, 0.4, 0.6, 0.8, 1.0\). Welfare was calculated with equal weights (ω₁=ω₂=ω₃=1).

**Results:**

| C   | Best b | W      | Underprovision | Severe | Social capital |
|-----|--------|--------|----------------|--------|----------------|
| 0.5 | 0.6    | 1.353  | 0.494          | 0.287  | 2.134          |
| 0.8 | 0.6    | 1.541  | 0.448          | 0.246  | 2.235          |
| 1.0 | 0.6    | 1.602  | 0.436          | 0.231  | 2.269          |
| 1.5 | 0.6    | 1.696  | 0.412          | 0.210  | 2.319          |
| 2.0 | 0.6    | 1.767  | 0.392          | 0.196  | 2.354          |

**Observations:**

- The optimal allocation is \(b = 0.6\) for all capacity levels. This confirms that a mix with 60% basic income and 40% collective fund is robust even when basic income’s purchasing power is constrained.
- Higher capacity leads to better outcomes on all dimensions: underprovision, severe, and stress decrease, while social capital increases.
- At low capacity (C = 0.5), a pure basic income (b = 1.0) is sharply worse (W = 0.211 compared with 1.353 at b = 0.6). This is because nominal basic income exceeds capacity, which erodes real purchasing power.
- The collective fund functions as a real investment: it creates jobs and production that reduce needs without fueling demand inflation.

**Conclusion:**  
The economy’s real capacity is crucial for the effectiveness of basic income. When capacity is low, it is especially important to complement basic income with a collective fund that creates real production. The result strengthens the argument for a mixed allocation and provides further support for the MMT perspective. This is a model-based result; its external validity remains to be tested empirically.

---

## 5. Discussion

The simulations provide a coherent picture of when and how an adaptive universal basic income (AUBI) can be justified. They also show that adaptivity is not an end in itself: under certain conditions, pure universalism is preferable, and a poorly designed adaptive component can create more problems than it solves. Below, we discuss the most important insights thematically.

### 5.1 When Is Adaptive Universalism Justified?

The results point to three conditions that together favor an adaptive architecture:

1. **Significant need heterogeneity.** When need dispersion is large (low \(k\)), a uniform transfer cannot meet the variation. An adaptive layer – or a collective fund that generally reduces needs – captures part of this variation and improves average need coverage.

2. **Moderate measurement error.** If the system cannot identify who has higher needs with reasonable precision, the value of individual-based adaptation is eroded. Under very high measurement error, adaptivity can even worsen outcomes compared to universalism.

3. **Prioritization of relational welfare and social capital.** If society weighs social capital heavily in its objective function, the collective fund becomes especially valuable. Without such weighting, it is often best to give everything as individual basic income.

When these conditions are not met – for example in a relatively homogeneous population with small need differences – a simple universalism is often both more effective and more robust.

### 5.2 MMT and Real Resources: Budget vs. Capacity

The MMT perspective has inspired the later models, but we should be clear that **the model does not fully implement MMT**. We have replaced a monetary budget label with a variable called “real resource” \(R\), but mathematically \(R\) still functions as a scalar budget constraint: it is allocated between basic income and the collective fund without modeling prices, supply elasticity, or inflation mechanisms.

This means that:

- **Basic income (B) lacks a real capacity constraint.** We assume that distributed money can be converted into goods and services without affecting supply or prices. In practice, a large transfer can increase demand for housing, food, or care, which can lead to inflation or queues if supply does not keep up.

- **The collective fund (K), on the other hand, has a capacity limit.** In the later simulations, the number of work hours is limited by the size of the fund (`max_total_hours = K·N/w`). This is a form of real constraint—it reflects that work requires labor, not just money.

- **The asymmetry between B and K is a simplification.** MMT’s central insight is precisely that both cash transfers and public spending must relate to real capacity. Our model captures this for the work fund but not for basic income.

**New insight from substudy 4.10:**  
When we introduce a real capacity constraint for basic income (C), the MMT perspective is confirmed with greater precision. At low capacity, a high nominal basic income leads to inflation (represented as lower real purchasing power), which worsens the outcome. A collective fund that finances work, on the other hand, creates real production and reduces needs without fueling demand inflation. This is exactly the mechanism MMT emphasizes: it is not money that is limited, but the real capacity to produce goods and services.

Despite this limitation, the model provides a useful illustration of MMT’s core message: the choice between individual transfers and collective investments is a resource allocation issue, not a question of “finding the money.” However, the conclusions should be read as preliminary, since we have not fully modeled the real feedback loops that MMT emphasizes.

### 5.3 Social Capital and Relational Welfare

Social capital proved to be an important dimension often overlooked in traditional analyses. In the simulations:

- Higher material security led to lower stress and more time for relationships, which increased social capital.
- Voluntary work could further strengthen social capital, but only if it was moderate and did not lead to overload.
- The collective fund contributed to social capital through both direct effect (\(\eta_{work}\)) and indirectly by reducing needs.

When social capital weighed heavily in the objective function, a mixed allocation (b ≈ 0.6) became optimal in almost all tested scenarios. This underscores the importance of not focusing solely on income measures, but also on relational and social outcomes.

### 5.4 Voluntariness and the Right Not to Participate

Work in Liberation emphasizes that work must be voluntary and that non-participation is a legitimate lifestyle. Our simulations confirm that:

- **Participation in voluntary work is stable around 53%** and largely independent of basic income level. This suggests that people are not primarily driven by economic desperation, but by other motives – social capital, meaning, belonging.

- **A sufficiently high basic income is a prerequisite for work to be truly voluntary.** At too-low base (b ≤ 0.4), stress led to lower social capital despite work. It is only when basic security is ensured that work can become a source of meaning rather than survival.

- **We do not need to judge those who do not participate.** The model shows that non-participants do not notably worsen the system's functioning, and that their absence should not be interpreted as laziness. This is an important ethical and practical insight.

### 5.5 Collective Fund as Complement to Basic Income

The collective fund is not a competitor to basic income, but a complement. It finances work that produces collective goods – care, education, ecological restoration – and thereby reduces needs for everyone, especially for those with the greatest needs.

The results show that:

- Under high heterogeneity, the collective fund is particularly valuable, as it functions as a general equalization mechanism without requiring individual-based means-testing.
- Under low heterogeneity, the fund's relative value decreases, and a higher basic income may be more appropriate.
- The fund's efficiency (\(\phi_{work}\), \(\eta_{work}\)) is crucial. The better work is converted into need reduction and social capital, the more a large collective fund is justified.

### 5.6 Design Principles and Political Trade-offs

Based on the results, we propose the following principles for designing an AUBI system:

1. **Include more dimensions than income in the objective function.** Severe deprivation, social capital, and ecological sustainability should be included. Without such weights, the system risks optimizing away the weakest and missing relational welfare.

2. **Use moderate adaptation speed.** Fast adaptation (γ = 1.0) increases volatility without necessarily improving results. Slower adaptation (γ ≤ 0.5) smooths out noise and gives more stable systems.

3. **Ensure a sufficiently high base level.** The base (\(\alpha\) or \(B\)) should not be set too low. In heterogeneous populations, a base around 0.6 of mean need may be necessary to avoid a high share of severe deprivation, even if it means somewhat higher mean loss.

4. **Let the collective fund be an integrated part of the system.** It should finance work that reduces needs and builds social capital, rather than being seen as a separate cost.

5. **Protect voluntariness and non-participation.** The system should not require reciprocity or punish those who choose to stand outside. Work is an offer, not an obligation.

6. **Be prepared to adjust allocation over time.** Since the optimal distribution depends on the population's need structure and society's values, the system should be flexible and democratically governed.

### 5.7 Connection to Theoretical Frameworks

The simulation results provide conditional mechanistic support for H2b within the specified model. They do not establish that the mechanism works with the same strength in real welfare systems. Within the model, need heterogeneity can justify adaptive components, but only under certain conditions: measurement error must be moderate, administrative costs must not be too high, and society must explicitly value more dimensions than average income.

From a **GAE perspective**, the results illustrate several central concepts:

- **The variety gap** decreases when the system gets more degrees of freedom to respond to different needs, but it does not reduce the gap to zero. Measurement error and model limitations mean that part of the variation always remains unseen.
- **Goodhart-like risks** arise when the system optimizes on observable signals. Our simulations show that this can lead to severe deprivation increasing if the objective function does not explicitly counteract it.
- **The adaptation bottleneck** becomes visible in the dynamics: even with ongoing optimization, the system is limited by observation quality and adaptation speed.
- **Feedback** between system and environment can create both negative and positive spirals. An adaptive design must therefore contain mechanisms that dampen unwanted feedback.

**MMT** contributes the insight that financing is not the primary problem, but resource allocation. **Work in Liberation** reminds us that voluntariness and social capital are central values that must not be sacrificed for efficiency.

### 5.8 Policy Implications

For a future AUBI policy, the results imply that:

- **A universal foundation should be the backbone.** It guarantees that no one falls outside and reduces the need for exact needs assessments.
- **A collective fund for voluntary work can be a valuable complement.** It should finance labor-intensive services that reduce needs and build social capital.
- **The allocation between base and fund should be determined democratically and adjustable.** Our simulations point to a distribution around 60/40 being a robust starting point when social capital is valued, but the exact mix must be adapted to local conditions and preferences.
- **Evaluation and learning are central.** The system should continuously follow up multidimensional outcomes and be adjusted when conditions change.

---

## 6. Conclusions and Implications for AUBI

The simulations in this report have tested a broad set of questions about adaptive universal basic income (AUBI). From static comparisons of individual architectures to dynamic models with social capital, voluntary work, and collective fund, we have identified recurring patterns that together provide a basis for cautious conclusions.

### 6.1 Main Conclusions

**1. Need heterogeneity is a necessary but not sufficient condition for individual-based adaptivity.**
When needs are strongly heterogeneous and measurement error is moderate, an adaptive supplement can improve need coverage compared to a uniform transfer. Under low heterogeneity or large measurement error, pure universalism is often better and simpler. This provides conditional support for hypothesis H2b.

**2. The objective function's design is crucial.**
A system that only minimizes average deviation tends to neglect the worst-off. By explicitly weighting severe deprivation (λ ≈ 1–2), the share of severely underprovisioned can be reduced dramatically at a moderate cost in average coverage. This insight applies regardless of whether we are talking about individual adaptivity or collective fund.

**3. Social capital and relational welfare are central dimensions.**
When social capital is included as an outcome measure, the optimal policy changes. Voluntary work and collective investments become more important, as they build trust, community, and meaning – values not captured by income measures.

**4. Voluntary work can complement basic income without coercion.**
Participation in voluntary work is stable around 53% and largely independent of basic income level. This suggests that work, when basic security is ensured, is driven by motives other than economic desperation. A collective fund that finances such work can reduce needs and build social capital without requiring reciprocity.

**5. The MMT perspective shifts focus from budget to real resources.**
There is no monetary constraint to guaranteeing basic security; the real question is how society uses its real capacity. Our simulations show that a mix of individual basic income and collective fund is often superior to a pure model, especially when social capital is valued.

**6. An allocation around 60% basic income and 40% collective fund is robust under many conditions.**
Under high need heterogeneity and when social capital weighs at least as heavily as material deprivation, b = 0.6 is the allocation that maximizes welfare in most tested scenarios. Under low heterogeneity, a higher basic income (b = 0.8) may be more appropriate.

**7. Dynamic adaptation requires caution.**
Ongoing parameter adjustment can improve accuracy, but fast adaptation leads to volatility. Sluggishness (γ ≤ 0.5) is often preferable. Feedback from transfer to need reinforces the need for stabilizing mechanisms such as weighting toward severe deprivation.

### 6.2 Support for H2b and Theoretical Frameworks

The results provide conditional mechanistic support for H2b within the simulated model. They show that need heterogeneity can justify both individual-based adaptivity and a collective fund, but only when:

- measurement error is moderate,
- administrative costs are not too high,
- and society explicitly values more dimensions than average income.

This does not mean that the mechanism is empirically confirmed, but rather that it is theoretically plausible given the model’s assumptions.

From a **GAE perspective**, the simulations illustrate several central mechanisms: variety gap, measurement error, Goodhart-like risks, adaptation bottleneck, and feedback dynamics. These are not abstract concepts but concrete design obstacles that must be addressed.

**MMT** reminds us that financing is not the primary problem; resource allocation is. **Work in Liberation** contributes normative principles about voluntariness, non-participation, and social capital that should guide design.

### 6.3 Implications for AUBI Research

For continued research on AUBI, the results imply that:

- **AUBI should be seen as a family of architectures rather than a specific system.** The exact design of base level, target group definition, collective fund, and adaptation mechanism is crucial and must be studied separately.

- **There is no "one size fits all."** Optimal parameters vary with the population's need profile, data quality, and political priorities. This argues for AUBI systems being flexible and adjustable over time.

- **Simulation results must be complemented with empirical studies.** The models capture mechanisms but build on simplified assumptions. Field pilots and naturalistic experiments are needed to validate the conclusions.

- **The collective fund is a promising complement.** It can function as a general equalization mechanism without requiring individual-based means-testing, and it can build social capital. Its efficiency depends on how well work is converted into need reduction and relational welfare.

### 6.4 Policy Recommendations

Based on the results, we propose the following guidelines for an AUBI architecture:

1. **Establish a high unconditional basic income.** It should be sufficiently high to eliminate the worst material stress, but not necessarily cover all needs fully.

2. **Establish a collective fund for voluntary work.** The fund should finance labor-intensive services that reduce needs and build social capital. The size should be determined democratically, considering need structure and values.

3. **Include multidimensional goals in governance.** Severe deprivation, social capital, and ecological sustainability should be included in evaluation. Without such weights, the system risks optimizing away the weakest.

4. **Use moderate adaptation speed and protect voluntariness.** Sluggishness is a virtue. The system should not require reciprocity or punish non-participation.

5. **Be prepared to adjust allocation over time.** Since the optimal distribution depends on the population's need structure and society's values, the system should be flexible and democratically governed.

### 6.5 Concluding Reflection

Adaptive universal basic income is a promising research field, but it requires disciplined thinking about goals, measurement error, and dynamics. Our simulations show that a well-designed AUBI can combine the security of universalism with better matching to heterogeneous needs – and additionally build social capital through voluntary work.

For Swedish Subsidiarity, this means that AUBI can be a valuable tool in a broader toolbox, but it should not be treated as a universal solution. The most important lesson is that **architecture is more important than label** – a system called UBI that in practice is means-tested can have completely different effects than a genuinely universal system with a cautious adaptive layer and a well-balanced collective fund.

---

## 7. Limitations and Future Research

The simulations in this report provide valuable insights, but they build on a series of simplifications. This section presents the most important limitations and suggestions for how research can proceed.

### 7.1 Model Limitations

**One-dimensional need.**
In the model, need is represented by a single scalar resource deficiency. In practice, needs are multidimensional: health, housing, education, care, mobility, and social participation interact. An individual can have low income need but great need for care. The collective fund is assumed to reduce needs generally, but in reality may need to be directed toward specific types of needs.

**Simplified labor market.**
Work participation is modeled as a simple binary choice (work max hours or not) with a logistic decision rule. In reality, labor supply is affected by a multitude of factors: skills, health, family situation, work environment, social norms, and access to education. We have also not modeled that work can produce differentiated goods and services directed at specific recipients.

**Collective benefit as general need reduction.**
Work's collective effect is modeled as a uniform reduction of everyone's needs (φ_work) and a general addition to social capital (η_work). In reality, effects are heterogeneous: care work reduces care needs, ecological restoration improves the environment, education raises future productivity. A more nuanced model would link different work types to different need dimensions.

**No strategic gaming.**
Despite previous discussions about cheating and verification, the final models contain no strategic behavior. Individuals cannot exaggerate their needs or fake work efforts. This is a significant simplification, as all need-based systems risk being manipulated. Future models should include the possibility that individuals adapt their behavior to maximize their own benefits.

**Simplified dynamics.**
The need process is a simple AR(1) model with constant shocks. We have not modeled sudden crises, slow trend shifts, migration, or demographic changes. Nor have we included that individuals can change their need level through their own investments (e.g., education, relocation, healthcare).

**The difference between monetary budget and real resource is not fully modeled.**
In the later simulations, \(R\) is called a "real resource," but mathematically it functions as a monetary budget constraint. Basic income is assumed to be able to meet needs without prices or supply being affected, while the collective fund has a capacity limit in the form of a maximum number of work hours. This is an asymmetry that does not capture the MMT perspective's central point that even cash transfers must relate to real capacity. We have not modeled inflation, supply elasticity, or queues.

**The parameters φ_work and η_work are arbitrarily chosen.**
These control how efficiently work is converted into need reduction and social capital, respectively. They are not calibrated against empirical data, and different values can yield different conclusions about the optimal allocation. This is a form of Goodhart risk that the report warns about generally, but which also applies to our own parameters. Future work should calibrate these against existing research on the effects of care work.

**The capacity function is simple.**  
In substudy 4.10, basic income’s real purchasing power is modeled with a soft function \(C \cdot (1 - e^{-B/C})\). This captures general congestion but not sectoral bottlenecks (e.g., housing shortages, care queues) or dynamic effects where investments can increase capacity over time. Labor income is assumed to be fully real and unaffected by capacity constraints, which is not always realistic. Future models should differentiate capacity by sector and allow work to build capacity (e.g., through education or infrastructure).

### 7.2 Methodological Limitations

**Grid-based optimization.**
We have used discrete parameter spaces and manual grid search. This gives a rough picture and can miss optima between tested values. A continuous optimization method or Bayesian approach could give more precise results.

**Limited number of repetitions.**
In some sensitivity analyses, only 3–5 repetitions per cell were used, which can give uncertain estimates. More repetitions or variance reduction techniques would increase reliability.

**Simplified real resource.**
The resource \(R\) is assumed to be constant and fully usable either as cash transfer or as work financing. In practice, there may be diminishing marginal utility, rigidities, and conversion costs. Moreover, the model does not account for part of the resource going to administration, infrastructure, or capital formation.

**No financing side.**
Although the MMT perspective says that money is not limited, real resources require financing in the form of taxes or institutional arrangements. The model does not specify how the resource \(R\) arises or is distributed, making the analysis incomplete for policy use.

### 7.3 Empirical Limitations

**Simulations are not evidence.**
The results build on assumptions and mechanisms we have specified. They show what can happen under these assumptions, not what actually happens in reality. To validate the conclusions, empirical studies are required – experiments, pilot projects, or natural experiments.

**Calibration against real data is lacking.**
Model parameters such as measurement error, administrative costs, social capital formation, and work efficiency have been set arbitrarily. To increase credibility, they should be calibrated against data from existing social insurance systems, UBI pilots, or registry studies.

**External validity problems.**
Even if a simulation shows that a certain architecture is better in the model, it does not mean it is better in all societies. Institutional conditions, cultural norms, and political processes can change outcomes.

### 7.4 Suggestions for Future Research

**Extend the need model.**
Multiple dimensions of need should be included, as well as the possibility that needs change differently for different groups. A more realistic model could build on microsimulation with individuals whose life trajectories follow empirical patterns.

**Model strategic behavior and gaming.**
Introduce the possibility that individuals adapt their reporting or behavior to influence classification. This would illuminate the risks of adaptive systems and the need for verification mechanisms.

**Differentiate collective benefit.**
Link different types of work to different need dimensions and let the collective fund finance a portfolio of services rather than a general need reduction.

**Include financing and tax effects.**
Link transfer to a tax base and let labor supply be affected by system design. This would enable analysis of long-term equilibrium effects.

**Conduct sensitivity analyses on a broader scale.**
Systematically vary all parameters over larger intervals to identify robust regions and breakpoints.

**Validate with empirical data.**
Collaborate with researchers who have access to registry data or ongoing UBI experiments to test the model's predictions. Particularly interesting is to see if weighting toward severe deprivation and social capital leads to better outcomes in practice.

**Develop protocols for pilot studies.**
Based on simulation results, small-scale pilots can be designed where different allocation mixes and work models are tested. Such pilots should have clear evaluation criteria and the ability to adjust the system during operation.

**Analyze institutional aspects.**
The model treats the system as if governed by a benevolent planner. Future work should include political economy, interest groups, bureaucracy, and democratic processes to understand how allocation decisions are made in practice.

### 7.5 Conclusion on Limitations

Overall, the limitations show that this report is a first step rather than a definitive analysis. The simulations provide a conceptual framework and point to central mechanisms, but they cannot replace empirical testing. For Swedish Subsidiarity, this means that AUBI should be considered a **research hypothesis** – not a finished policy recommendation.

---

## Appendix A – Parameter Overview

This appendix summarizes the parameters used in the simulations. Since the model has been built up incrementally, not all parameters are used in every sub-study. We therefore indicate in which context each parameter occurs.

### A.1 Basic Population Parameters

| Parameter | Description | Typical value / interval | Used in |
|-----------|-------------|---------------------------|-----------|
| `N` | Number of individuals in the population | 1000–10000 | All sub-studies |
| `T` | Number of time periods in dynamic simulations | 30–100 (usually 50) | 4.3–4.9 |
| `mean_need` | Long-term mean need | 1.0 | All sub-studies |
| `k` | Shape parameter in gamma distribution for need; low k gives high heterogeneity | 0.5, 1.0, 2.0, 5.0, 10.0 | All sub-studies |
| `R` | Total real resource per individual and period | 1.0 | 4.7–4.9 |
| `C` | Real production capacity per individual; limits basic income’s real purchasing power | 0.5, 0.8, 1.0, 1.5, 2.0 | 4.10 |

### A.2 Measurement Error, Dynamics, and Feedback

| Parameter | Description | Typical value / interval | Used in |
|-----------|-------------|---------------------------|-----------|
| `sigma_eps` | Measurement error (standard deviation in observation of need) | 0.0–1.0 (usually 0.3) | 4.1–4.5 |
| `sigma_shock` | Standard deviation for shocks in AR(1) process | 0.1 | 4.3–4.9 |
| `rho` | Persistence in need process | 0.0, 0.5, 0.9 | 4.3–4.9 |
| `gamma` | Adaptation speed in exponential moving average | 0.1, 0.5, 1.0 | 4.3–4.5, 4.7–4.9 (in 4.7–4.9 gamma not actively used) |
| `beta_pos` | Feedback strength at underprovision | 0.1, 0.5, 1.0 | Only 4.5 |
| `beta_neg` | Feedback strength at overprovision | beta_pos / 2 | Only 4.5 |
| `scale_feedback` | Saturation scale in tanh function | 0.5 | Only 4.5 |

### A.3 Administrative Costs

| Parameter | Description | Typical value / interval | Used in |
|-----------|-------------|---------------------------|-----------|
| `c_admin` | Administrative cost per classified individual (share of transfer budget) | 0.0–0.2 (usually 0.05) | 4.1–4.5 |

### A.4 Individual Architecture Parameters

| Parameter | Description | Typical value / interval | Used in |
|-----------|-------------|---------------------------|-----------|
| `p_high` | Share of individuals classified as high-need | 0.1–0.9 (grid) | 4.1–4.5 |
| `alpha` | Base level in Adaptive: share of transfer budget distributed equally | 0.0–1.0 (grid) | 4.2–4.5 |
| `lambda_sev` (λ) | Weight for severe deprivation in objective function | 0.0, 0.5, 1.0, 2.0 (in sensitivity analysis up to 10) | 4.4–4.5 |

### A.5 Social Capital

| Parameter | Description | Typical value | Used in |
|-----------|-------------|---------------|-----------|
| `S_bar` | Long-term mean for social capital | 1.0 | 4.6–4.9 |
| `rho_S` | Persistence in social capital | 0.9 | 4.6–4.9 |
| `gamma_rel` | Effect of relationship time on social capital | 0.2 | 4.6–4.9 |
| `gamma_stress` | Effect of material stress on social capital | 0.3 | 4.6–4.9 |
| `gamma_work` | Positive effect of moderate work on social capital | 0.1 | 4.6–4.9 |
| `gamma_overwork` | Negative effect of overwork on social capital | 0.15 | 4.6–4.9 |
| `optimal_work` | Optimal work time for social capital (hours) | 15.0 | 4.6–4.9 |

### A.6 Labor Market and Collective Fund

| Parameter | Description | Typical value | Used in |
|-----------|-------------|---------------|-----------|
| `w` | Hourly wage for voluntary work | 0.05 | 4.6–4.9 |
| `max_hours` | Maximum number of work hours per individual and period | 15.0 | 4.6–4.9 |
| `reservation_wage` | Reservation wage (lowest hourly wage to want to work at low stress) | 0.02 | 4.6–4.9 |
| `participation_sensitivity` | Sensitivity in logistic work decision model | 5.0 | 4.6–4.9 |
| `b` | Share of real resource R going to basic income | 0.2–1.0 (grid) | 4.7–4.9 |
| `phi_work` | Need reduction per worked hour per capita | 0.002–0.008 (sensitivity analysis) | 4.7–4.9 |
| `eta_work` | Social capital addition per worked hour per capita | 0.001–0.012 (sensitivity analysis) | 4.7–4.9 |

*Note:* In an earlier version of the collective fund (before work was linked to the fund), the parameters `phi` and `eta` were used directly on K, but these were replaced by `phi_work` and `eta_work`.

### A.7 Objective Function Weights (Welfare Function)

In the later sub-studies (4.7–4.9), a linear welfare function is used:

\[
W = -\omega_1 \cdot \text{underprovision} - \omega_2 \cdot \text{severe} + \omega_3 \cdot \text{social capital}
\]

| Parameter | Description | Typical values |
|-----------|-------------|----------------|
| `omega1` (ω₁) | Weight for underprovision | 0.0–1.0 |
| `omega2` (ω₂) | Weight for severe deprivation | 0.0–1.0 |
| `omega3` (ω₃) | Weight for social capital | 0.0–1.0 |

Common weight combinations:
- (1.0, 0.0, 0.0) – only underprovision
- (0.0, 1.0, 0.0) – only severe
- (0.0, 0.0, 1.0) – only social capital
- (0.33, 0.33, 0.34) – approximately equal weights
- (0.2, 0.2, 0.6) – social capital dominates
- (0.6, 0.2, 0.2) – underprovision dominates

### A.8 Repetitions and Random Seeds

| Parameter | Description | Typical value |
|-----------|-------------|---------------|
| `n_rep` | Number of repetitions per parameter combination | 3–10 (usually 5–10) |
| `seed` | Random seed for reproducibility | 42 |

---

## Appendix B – Code Snippets

This appendix contains central code snippets from the final simulation model (social capital, voluntary work, collective fund, and heterogeneity analysis). The code is written in Python 3 with NumPy. Complete scripts are available in the project's code repository.

### B.1 Generation of Initial Needs

```python
def generate_initial_needs(k, mean, N, rng):
    theta = mean / k
    return rng.gamma(shape=k, scale=theta, size=N)
```

### B.2 Updating Needs with Collective Effect

```python
def update_needs(prev_needs, mu, rho, shock, phi_effect):
    new_needs = rho * prev_needs + (1 - rho) * mu + shock - phi_effect
    return np.clip(new_needs, 0.1, 5.0)
```

### B.3 Updating Social Capital

```python
def update_social_capital(S, total_income, needs, work_hours, phi_effect, eta_effect, params):
    material_security = np.clip(total_income / np.maximum(needs, 0.01), 0, 2)
    stress = np.maximum(0, needs - total_income) / np.maximum(needs, 0.01)
    rel_time = np.clip(material_security, 0, 1)

    work_effect = np.zeros_like(work_hours)
    mask = work_hours > 0
    work_effect[mask] = np.where(work_hours[mask] <= params['optimal_work'],
                                 work_hours[mask] / params['optimal_work'] * params['gamma_work'],
                                 params['gamma_work'] - params['gamma_overwork'] * (work_hours[mask] - params['optimal_work']) / params['optimal_work'])

    dS = (1 - params['rho_S']) * (params['S_bar'] - S) + \
         params['gamma_rel'] * rel_time - \
         params['gamma_stress'] * stress + \
         work_effect + \
         eta_effect

    return np.clip(S + dS, 0, 3)
```

### B.4 Work Decision (Voluntary Logistic Model)

```python
def decide_work(needs, transfer, wage, params):
    material_stress = np.maximum(0, needs - transfer) / np.maximum(needs, 0.01)
    reserv = params['reservation_wage'] * (1 + material_stress)
    p_work = 1 / (1 + np.exp(-params['participation_sensitivity'] * (wage - reserv)))
    random_draw = np.random.rand(len(needs))
    desired = np.where(random_draw < p_work, params['max_hours'], 0.0)
    return desired
```

### B.5 Allocation of Work Hours Under Budget Ceiling

```python
def allocate_work(desired_hours, max_total_hours):
    total_desired = np.sum(desired_hours)
    if total_desired <= max_total_hours:
        return desired_hours.copy()
    else:
        scale = max_total_hours / total_desired
        return desired_hours * scale
```

### B.6 Calculation of Loss Measures

```python
def compute_under_loss(needs, income):
    """Asymmetric loss: penalizes only underprovision."""
    return np.mean(np.maximum(0, needs - income))

def compute_severe(needs, income):
    return np.mean(income < 0.5 * needs)
```

### B.7 Main Loop (Simplified)

```python
for t in range(T):
    # Basic income
    transfer = np.full(N, B)

    # Work decision
    desired = decide_work(needs, transfer, w, params)
    actual_hours = allocate_work(desired, max_total_hours)

    # Income
    labor_income = actual_hours * w
    total_income = transfer + labor_income

    # Collective effects
    L_per_capita = np.sum(actual_hours) / N
    phi_effect = phi_work * L_per_capita
    eta_effect = eta_work * L_per_capita

    # Losses
    abs_loss = compute_under_loss(needs, total_income)
    severe = compute_severe(needs, total_income)

    # Social capital
    social = update_social_capital(social, total_income, needs, actual_hours,
                                   phi_effect, eta_effect, social_params)

    # Update needs
    shock = rng.normal(0, sigma_shock, size=N)
    needs = update_needs(needs, mu, rho, shock, phi_effect)
```

### B.8 Welfare Function

```python
def compute_welfare(mean_abs, mean_severe, mean_social, w1, w2, w3):
    return -w1 * mean_abs - w2 * mean_severe + w3 * mean_social
```

### B.9 Real Basic Income

```python
def real_basic_income(B, C):
    """
    Calculate real purchasing power of basic income given capacity limit C.
    Soft capacity limit: real_B = C * (1 - exp(-B/C)).
    """
    if C <= 0:
        return 0.0
    return C * (1 - np.exp(-B / C))
```

---

## Appendix C – Result Tables

This appendix summarizes key results from the simulations in Section 4.6–4.9. Complete data are available in separate CSV files. The tables illustrate the most important patterns.

### C.1 Social Capital and Voluntary Work

Comparison between scenarios without and with the possibility of voluntary work (model with separate work income, basic income B=0.6, wage 0.05, max 15 hours, 5 repetitions).

| Scenario | Underprovision | Severe | Social capital | Participation |
|----------|------------------|--------|-----------------|------------|
| Without work | 0.319 | 0.140 | 1.864 | – |
| With work | 0.207 | 0.074 | 2.495 | 53.4% |

Work reduces material deprivation considerably and increases social capital by approximately 34%.

### C.2 Allocation Between Basic Income and Collective Fund

Results for different shares of basic income (b) when the collective fund finances work (R=1.0, φ_work=0.004, η_work=0.006, 5 repetitions).

| b   | Underprovision | Severe | Social capital | Participation | Average hours |
|-----|------------------|--------|-----------------|------------|-----------------------|
| 0.2 | 0.545            | 0.375  | 1.792           | 52.3%     | 7.85                  |
| 0.4 | 0.456            | 0.255  | 2.119           | 53.0%     | 7.94                  |
| 0.6 | 0.359            | 0.164  | 2.343           | 53.1%     | 7.92                  |
| 0.8 | 0.345            | 0.136  | 2.256           | 53.3%     | 4.00                  |
| 1.0 | 0.359            | 0.132  | 2.063           | 0.0%      | 0.00                  |

At b=0.6, the highest combination of material security and social capital is obtained when they are weighted equally.

### C.3 Sensitivity to φ_work and η_work

Sensitivity analysis of the collective benefit's efficiency (ω₁=ω₂=ω₃=1, 10 repetitions). In all tested combinations, b=0.6 was optimal.

| φ_work | η_work | Best b | Welfare W | Underp. | Severe | Social capital |
|--------|--------|---------|-----------|---------|--------|-----------------|
| 0.002  | 0.001  | 0.6     | 1.689     | 0.384   | 0.176  | 2.250           |
| 0.002  | 0.012  | 0.6     | 1.992     | 0.379   | 0.174  | 2.544           |
| 0.004  | 0.006  | 0.6     | 1.864     | 0.372   | 0.172  | 2.408           |
| 0.008  | 0.012  | 0.6     | 2.073     | 0.343   | 0.157  | 2.574           |

Higher efficiency always leads to higher W, but does not change the optimal allocation.

### C.4 Weighting Sensitivity for φ_work and η_work

Optimal allocation b for different weight combinations (φ_work=0.004, η_work=0.006, 5 repetitions).

| Weighting (ω₁,ω₂,ω₃) | Best b | W      | Underp. | Severe | Social |
|----------------------|---------|--------|---------|--------|---------|
| (1, 0, 0)            | 0.8     | -0.368 | 0.368   | 0.147  | 2.188   |
| (0, 1, 0)            | 1.0     | -0.137 | 0.367   | 0.137  | 2.042   |
| (0, 0, 1)            | 0.6     | 2.251  | 0.385   | 0.176  | 2.251   |
| (0.33,0.33,0.34)     | 0.6     | 0.581  | 0.385   | 0.176  | 2.252   |
| (0.2,0.2,0.6)        | 0.6     | 1.240  | 0.384   | 0.176  | 2.254   |
| (0.6,0.2,0.2)        | 0.6     | 0.185  | 0.384   | 0.176  | 2.253   |

When social capital weighs heavily (ω₃ ≥ 0.2), b=0.6 is optimal. Only material deprivation tends to give b=0.8–1.0.

### C.5 The Importance of Heterogeneity

Optimal allocation b for different need heterogeneity (k) and two weightings (φ_work=0.004, η_work=0.006, 5 repetitions).

| k   | Weighting (0.33,0.33,0.34) | Weighting (0.6,0.2,0.2) |
|-----|----------------------------|------------------------|
|     | Best b | W      | Best b | W      |
| 0.5 | 0.6     | 0.613  | 0.6     | 0.181  |
| 1.0 | 0.6     | 0.641  | 0.6     | 0.224  |
| 2.0 | 0.6     | 0.689  | 0.6     | 0.286  |
| 5.0 | 0.6     | 0.752  | 0.8     | 0.365  |
| 10.0| 0.8     | 0.799  | 0.8     | 0.412  |

Under high heterogeneity (k ≤ 2), a collective fund of 40% is justified regardless of weighting. Under low heterogeneity (k ≥ 5), a higher basic income (b = 0.8) becomes better.

### C.6 Real Capacity Model

Optimal allocation for different capacity levels (ω₁=ω₂=ω₃=1, 5 repetitions).

| C   | Best b | W      | Underprovision | Severe | Social capital |
|-----|--------|--------|----------------|--------|----------------|
| 0.5 | 0.6    | 1.353  | 0.494          | 0.287  | 2.134          |
| 0.8 | 0.6    | 1.541  | 0.448          | 0.246  | 2.235          |
| 1.0 | 0.6    | 1.602  | 0.436          | 0.231  | 2.269          |
| 1.5 | 0.6    | 1.696  | 0.412          | 0.210  | 2.319          |
| 2.0 | 0.6    | 1.767  | 0.392          | 0.196  | 2.354          |

---

## Appendix D – Connection to the Evidence Matrix for Swedish Subsidiarity

This appendix places the AUBI simulations in relation to the evidence matrix. The simulations do not constitute an empirical case in the traditional sense, but they function as **mechanistic model tests** of several hypotheses, especially H2 (need heterogeneity) and related governance principles. The status indications follow the matrix's vocabulary and should be read as preliminary.

### D.1 Direct Connection to H2 (Need Heterogeneity)

The matrix's H2 is formulated based on preference heterogeneity, but in the AUBI work we have used a more precise version – **H2b – need heterogeneity**:

> When relevant needs vary substantially between people, groups, or places, a uniform provision can give worse fit than a common framework with appropriately adapted components.

**What the simulations contribute:**

- They show that need heterogeneity (measured as dispersion in the need distribution) can justify an adaptive component, but only when measurement error is moderate and administrative costs are not too high.
- They show that the value of adaptation varies greatly with the population's need profile: under low heterogeneity, universalism is almost always better.
- They show that the choice of objective function (especially weighting of severe deprivation) is crucial for whether adaptation improves or worsens outcomes for the worst-off.
- The new results show that even a collective fund can function as a general adaptation mechanism, especially under high heterogeneity.

**Status in the matrix:** H2b is not yet formally introduced in the matrix, but the simulations provide **conditional support** for the hypothesis.

**Mechanism fit:** High – the simulations directly test the mechanism "heterogeneous needs → adaptive distribution → better fit."

**Confidence:** Medium – the model results are clear, but build on simplified assumptions.

### D.2 Connection to H3 (Capacity)

H3: *Decentralization is less likely to improve outcomes when receiving capacity is insufficient.*

The AUBI simulations do not model institutional capacity explicitly, but administrative costs and measurement error function as indirect indicators of capacity deficiencies.

- When measurement error is large (corresponding to weak needs assessment capacity), the value of adaptivity decreases.
- When administrative costs are high, much of the advantage of differentiating support disappears.
- In the later models, the capacity to convert work into need reduction and social capital (φ_work, η_work) is a crucial factor.

**Mechanism fit:** Partial – capacity is represented through costs and noise, not as organizational ability.

**Confidence:** Medium – the results are consistent but model-based.

### D.3 Connection to H7 (Functional Scale)

H7: *Optimal governance scale varies per function rather than following a single universal administrative level.*

The AUBI question can be seen as a functional scale question: should income support be entirely individual (targeting), entirely general (national equal treatment), or a hybrid (universal base + adaptive layer + collective fund)?

The simulations show that the optimal degree of differentiation and allocation depends on the need distribution – which is a form of functional adaptation. Under high heterogeneity, a collective fund is justified; under low heterogeneity, a higher basic income is more appropriate. This aligns with H7's core message that scale should not be uniform.

**Mechanism fit:** Partial – the simulations test degree of differentiation rather than territorial scale.

**Confidence:** Medium.

### D.4 Connection to H9 (Fiscal Equalization)

H9: *Local autonomy can coexist with fiscal equalization and risk-sharing at a higher level.*

AUBI can be seen as a form of individual equalization: a nationally financed foundation with locally/individually adapted supplements. The simulations show that such a hybrid is possible and can be effective, but that the design of the equalization mechanism (base level + supplement + collective fund) is crucial. The collective fund functions as a general equalization by reducing needs for everyone, especially those with the greatest needs.

**Mechanism fit:** Partial – the simulation concerns individuals, not territories, but the principle of combined universalism and adaptation is the same.

**Confidence:** Medium.

### D.5 Connection to H12 (Adaptation Bottleneck)

H12: *Adaptation is limited by the slowest critical link between sensing, learning, and implementation.*

The dynamic part of the simulations models an adaptation chain:

- **Sensing** = observation of needs with measurement error.
- **Learning** = estimation of need distribution and choice of parameters.
- **Implementation** = payment of transfer and financing of work.

The results show that adaptation speed (γ) and measurement error (σ) set limits on how well the system can perform. Fast adaptation can even worsen outcomes due to noise. This is a concrete example of H12's core mechanism.

**Mechanism fit:** High – the simulation contains an explicit adaptation loop with limitations.

**Confidence:** Medium – model support but not yet empirically tested in institutional environments.

### D.6 Connection to H13 (Plural Observation)

H13: *Preserving plural observation/multiple model paths can help detect errors that a dominant optimized system misses.*

The AUBI simulations use a single observation source (individual needs assessments). They show that a system relying solely on a noisy signal can make systematic erroneous decisions, especially when the objective function is misspecified. This suggests that plural observation or multiple information sources could improve robustness, but this has not been tested. The new results with collective fund show that a general mechanism can function as a complement to individual-based observation, reducing dependence on exact needs measurement.

**Mechanism fit:** Low–Partial – the simulations illustrate the risk of singular observation but do not test pluralism.

**Confidence:** Low – no direct results.

### D.7 Connection to H15 (Adaptive Authority Distribution)

H15: *A resilient subsidiarity architecture should be able to change authority distribution when the problem structure changes.*

AUBI with dynamic optimization is an example of a system that continuously changes distribution parameters (base level, target group, allocation share b) when the need picture changes. The simulations show that this adaptability can improve accuracy, but also that it can create volatility if not restrained. The new insight is that even the collective fund's size (b) may need to be adjusted over time when the population's need structure changes.

**Mechanism fit:** High – the simulation implements a form of adaptive authority distribution (between general and targeted distribution, and between individual and collective resource use).

**Confidence:** Medium.

### D.8 New Hypotheses Based on the Later Simulations

Based on the results in Section 4.6–4.9, we propose the following hypotheses for introduction into the evidence matrix. Since they build on simulations with arbitrarily calibrated parameters, they should be classified as **exploratory** and given **low confidence** until validated with empirical data or calibrated models.

**H21 – Collective fund as complement to basic income**
> A collective fund that finances voluntary work can improve both material and relational welfare compared to individual basic income alone, especially when needs are heterogeneous and the work efficiently reduces needs and builds social capital.

*Status: Exploratory. Confidence: Low.*

**H22 – The importance of social capital in the objective function**
> When social capital is included as an explicit goal in the welfare function, the optimal allocation changes: a significant part of the resource should be set aside for collective investments rather than solely individual transfer.

*Status: Exploratory. Confidence: Low.*

**H23 – Voluntariness and work participation**
> Voluntary work can be a stable and significant element in the economy without coercion, provided that basic security is sufficiently high. Participation is relatively insensitive to basic income level, suggesting that work is driven by motives other than economic desperation.

*Status: Exploratory. Confidence: Low.*

**H24 – Real resource allocation (MMT perspective)**
> The optimal distribution of a given real resource between individual transfer and collective investments depends on the population's need heterogeneity and society's values. There is no universal optimal share; flexibility and democratic adjustment are necessary.

*Status: Exploratory. Confidence: Low.*

### D.9 Summary Connection Table

| Matrix ID | Hypothesis | AUBI simulation's connection | Mechanism fit | Confidence | Preliminary status |
|---|---|---|---|---|---|
| H2b (new) | Need heterogeneity justifies adaptive components | Directly tested, incl. collective fund | High | Low–Medium | Exploratory / conditionally supported |
| H3 | Capacity affects outcomes | Measurement error/admin costs as proxy; φ_work/η_work as efficiency | Partial | Low–Medium | Supports qualification |
| H7 | Functional scale varies | Allocation mix depends on need structure | Partial | Low–Medium | Exploratory |
| H9 | Autonomy + equalization | Universal base + adaptive layer + collective fund | Partial | Low–Medium | Supports principle |
| H12 | Adaptation bottleneck | Explicit adaptation loop; γ and σ limit | High | Low–Medium | Exploratory |
| H13 | Plural observation | Risk with singular signal illustrated; collective fund as complement | Low–Partial | Low | Unresolved |
| H15 | Adaptive authority distribution | Dynamic parameter adjustment, incl. allocation share b | High | Low–Medium | Exploratory |
| H21 (new) | Collective fund as complement | Tested in 4.7–4.9 | High | Low | Exploratory |
| H22 (new) | Social capital in objective function | Tested in 4.8 | High | Low | Exploratory |
| H23 (new) | Voluntariness and work participation | Tested in 4.6–4.9 | High | Low | Exploratory |
| H24 (new) | Real resource allocation (MMT) | Tested in 4.7–4.9 | High | Low | Exploratory |

---

## Appendix E – MMT and Work in Liberation: Theoretical Reference

This appendix provides a brief introduction to the two frameworks that inspired the later simulations: Modern Monetary Theory (MMT) and Work in Liberation. The purpose is to make the report self-contained for readers unfamiliar with these perspectives.

### E.1 Modern Monetary Theory (MMT)

**Core idea:**
MMT questions the traditional notion that the state must finance its expenditures through taxes or loans before it can spend. In a system with sovereign currency, the state can always issue money. The real constraint is not the availability of money, but the availability of real resources: labor, raw materials, energy, technology, knowledge, and ecological capacity.

**Consequences for basic income and AUBI:**

- An unconditional basic income is not financially impossible. The state can create the money. The question is whether the economy has real capacity to meet the increased demand.
- Inflation arises if aggregate demand exceeds the economy's production capacity. Therefore, resource allocation – not budget ceilings – is the central governance question.
- Taxes have a role, but not primarily to "finance" expenditures, but to dampen inflation, redistribute resources, and create demand for the currency.

**In the simulations:**
We have replaced the monetary budget constraint with a fixed real resource per individual (\(R = 1.0\)). This resource can be distributed between individual basic income and collective fund. This reflects MMT's core message: it is not money that is limited, but how society chooses to use its real capacity.

### E.2 Work in Liberation

**Core idea:**
Work in Liberation is a framework that emphasizes that work must be voluntary and that non-participation is a legitimate lifestyle. It proceeds from the principle that material security must be decoupled from work for work to be truly voluntary.

**Key concepts:**

- **Voluntariness and the right not to participate:** No one should be forced to work or to make their contributions visible. Low formal activity must not be interpreted as laziness or failure.
- **Social capital:** Relationships, trust, and community are central values. Work can contribute to social capital, but only if it is voluntary and does not lead to overload.
- **Collective fund:** Part of society's resources should be used to finance work that produces collective goods – care, education, ecological restoration – rather than relying solely on individual demand.
- **Basic income as precondition:** A sufficiently high unconditional foundation is necessary for work to be an offer, not a survival strategy.

**In the simulations:**
Individuals can choose to work voluntarily. Work provides both individual income and collective benefit (reduces needs and builds social capital). Social capital is a central outcome measure. Participation is modeled as a free choice, not a requirement.

### E.3 Comparison of Perspectives

| Aspect | Traditional view | MMT | Work in Liberation |
|--------|------------------|-----|-------------------|
| Financing | State must cover expenditures with taxes/loans | State can always create money; real resources limit | Financing is subordinate to the question of how work is organized |
| Work | Should be encouraged through incentives and requirements | Full employment can be achieved through public demand | Work should be voluntary and meaningful |
| Welfare | Often measured as GDP or income | Focus on real resources and capacity utilization | Multidimensional: material security, social capital, meaning |
| Non-participation | Can be seen as problem | Not central | Legitimate life choice that must be protected |

### E.4 Integration in the AUBI Model

In the later simulations, MMT and Work in Liberation are united in a common architecture:

- **Real resource R** (MMT) is distributed between individual basic income and collective fund.
- **Collective fund** finances voluntary work (Work in Liberation).
- **Social capital** is an outcome measure (Work in Liberation).
- **Voluntariness** is a design principle (Work in Liberation).
- **Allocation share b** is the central governance variable.

The results show that the optimal allocation depends on both need heterogeneity (how unevenly needs are distributed) and society's values (how much social capital weighs compared to material deprivation). This aligns with both MMT's emphasis on real resource allocation and Work in Liberation's emphasis on relational welfare and voluntariness.

### E.5 Relevance for Swedish Subsidiarity

For Swedish Subsidiarity, these perspectives contribute two important reminders:

1. **The subsidiarity principle is not only about territorial level, but also about what should be individual versus collective.** The AUBI model with basic income and collective fund is a form of vertical subsidiarity: the individual receives direct support for their own needs, while common goods are financed collectively.

2. **Voluntariness and social capital are central to legitimacy.** A system that forces work or ignores relational welfare risks undermining both trust and efficiency. Work in Liberation reminds us that liberation from survival compulsion is a goal in itself, not just a means for economic efficiency.

---
