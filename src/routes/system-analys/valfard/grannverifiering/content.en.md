# Neighbor verification

[← Back to the main article](..)

**Summary**: For simple benefit applications (temporary housing support, funeral costs, crisis grants), it is sufficient for the applicant to provide two neighbors who verify the need. Processing time: 48 hours instead of 6 weeks. The risks of fraud are low because neighbors have strong incentives to be honest (social pressure, risk of exclusion from the community). The system is built on trust and local knowledge—and frees up administrators for complex cases where professional assessment is truly needed.

## The mechanism

Today, almost all benefit applications (social assistance, housing allowance, income support, various crisis grants) require extensive processing: means testing, asset checks, bank statements, rent slips, sometimes home visits. For simple, low-risk situations—a single mother whose refrigerator has broken down and needs SEK 3,000 for a new one—this is grotesque overkill. Six weeks of processing for an urgent need.

**The measure**: Introduce **neighbor verification** as an alternative to traditional processing for grants under SEK 10,000 where:

  - The need is obvious and time-critical (urgent food, broken household appliance, funeral)
  - The applicant has no previous convictions for benefit fraud
  - The applicant can provide two neighbors (or other people in the same residential area/village) who can confirm the need

**The process**:

1.  The applicant fills out a simple digital application (2 minutes): name, personal identity number, what the money is needed for, two neighbors' names and phone numbers.
2.  The system sends an automatic SMS link to the neighbors: "Do you know [Name]? Is it correct that they need [amount] for [purpose]? Answer YES/NO."
3.  If both neighbors answer YES within 24 hours—the money is paid out directly via Swish within another 24 hours.
4.  If any neighbor answers NO, or does not answer, the case proceeds to standard processing (6 weeks).
5.  Spot checks: 5% of all neighbor-verified cases are reviewed retrospectively by an administrator. In case of suspected fraud—repayment demand and suspension from fast verification for 2 years.

**Why neighbors are reliable**:

  - Social pressure: Lying to help someone cheat risks ostracism from the community.
  - Reciprocity: Most people do not want to sabotage their neighbors, but neither do they want to participate in organized fraud.
  - Low profits: The amounts are small (max SEK 10,000). Risking one's social reputation for a small sum is not rational for most.
  - Neighbors have contextual knowledge that no administrator can match: They see if someone's washing machine is really broken or if it "happens" to break every month.

## Pilot design – ten municipalities first

**Pilot phase 1 (years 1-3)**: Ten municipalities with varying geography and population composition test neighbor verification for selected benefit types.

**Which benefits are included in the pilot**:

| Benefit type | Max amount | Typical case |
|------------|----------|----------------|
| Urgent food account (social services) | SEK 2,000 | Individual or family without food for the day |
| Repair of household appliance | SEK 5,000 | Broken refrigerator, stove, washing machine |
| Funeral costs (remission) | SEK 10,000 | Relative lacks funds |
| Temporary housing support | SEK 8,000 | Rent debt threatening eviction (max once per 12 months) |
| Crisis grant (domestic violence, fire, flood) | SEK 10,000 | Urgent move, compensation for destroyed clothes/furniture |

**Organizational model**:

  - The municipality's social services or income support office is responsible for implementing the system.
  - A digital platform (simple web app or SMS-based) is connected to the municipality's existing case management.
  - One administrator (0.2 FTE per municipality) is responsible for spot checks and handling deviations (NO answers, missing answers).
  - Payment is made via Swish or Plusgiro.

**Exclusion criteria** (may not use neighbor verification):

  - The applicant has previously been convicted of benefit fraud (within 5 years)
  - The applicant has used neighbor verification more than 3 times during the past year (risk of repetition)
  - The neighbor is a family member or cohabitant (conflict of interest)

**Evaluation**:

  - Processing time (median, 90th percentile)
  - Proportion of applications going through neighbor verification (target: 30% of all simple benefits)
  - Proportion of NO answers (expected low – `<`5%)
  - Proportion of fraud discovered in spot checks (expected very low – `<`1%)
  - Applicant satisfaction (survey)
  - Staff experience of workload (freed-up time for complex cases)

## Budget and financing

| Item | Annual cost (10 pilot municipalities) |
|------|----------------------------------|
| Digital platform (development + operation) | SEK 500,000 (one-time) + SEK 100,000/year |
| Administrator resource (0.2 FTE × 10 × SEK 500,000) | SEK 1,000,000 |
| Spot checks (5% of cases, 20 min per case) | SEK 100,000 (estimate) |
| Staff training (1 day × 10 municipalities) | SEK 50,000 (one-time) |
| Evaluation | SEK 200,000 |
| **Total first year** | **SEK 1.85 million** |
| **Annual operation after scale-up** | **SEK 1.1 million** (excl. one-time costs) |

**Financing**: Within existing social service budgets. Because neighbor verification frees up administrator time (6 weeks → 48 hours), the costs per case decrease dramatically. Even with spot checks, neighbor verification is likely cheaper than traditional processing.

## Regulatory changes required

1.  **Amendment to the Social Services Ordinance (2001:937)** – add a section: *"For grants of a maximum of SEK 10,000, the municipality may apply a simplified processing where the need is verified by two residents in the vicinity who are not family members. Decisions must be made within 48 hours."*
2.  **GDPR adaptation** – The neighbors' personal data (name, phone number) is processed to verify needs. This requires legal support (Article 6.1 e – public interest). This already exists to some extent but is clarified in the ordinance.
3.  **Exemption from the Secrecy Act** – Normally, social services may not disclose information about individuals to neighbors. Here, the applicant themselves provides the neighbors—no information is disclosed by the authority. No secrecy problem.

## Expected resistance and answers

### "Neighbors can lie – this opens up for massive fraud."

**Answer**: The risk exists, but it is small. Neighbors who systematically lie risk exclusion from the community, social stigma, and ultimately a police report for fraud. The amounts are small (max SEK 10,000). The incentives for fraud are low. And spot checks catch most attempts. Experiences from other countries (e.g., microloans with neighbor verification) show very low rates of fraud.

### "Neighbors might feel forced to say yes – social pressure."

**Answer**: The applicant must provide the neighbors themselves. If the relationship is such that the neighbor cannot say no, then it is an unsuitable neighbor to use. The system encourages the applicant to choose people who can be honest. The neighbor can always answer NO anonymously (the SMS only asks YES/NO, no name is visible to the applicant). And NO answers do not lead to any sanction against the applicant—only to standard processing.

### "This is a class issue – poor people do not have neighbors with resources to verify."

**Answer**: Neighbor verification is not about financial resources but about proximity and trust. An unemployed neighbor can just as easily confirm that the refrigerator is broken as a rich one. On the contrary: in socio-economically weak areas, neighborhood cooperation is often stronger because people are more dependent on each other. The pilot is specifically meant to test this.

### "The administrators lose control and status."

**Answer**: On the contrary—they are freed from trivial, low-risk cases and can focus on complex cases where their expertise is truly needed (addiction, honor-based violence, psychiatry). Many administrators experience today's quantitative targets as stressful. Neighbor verification reduces the workload.

### "Are there any international examples?"

**Answer**: Yes. Microloan organizations like Grameen Bank use neighbor verification ("solidarity lending") with very low default rates. In social work, "community verification" exists in several countries, e.g., for disaster relief. Sweden simply hasn't tested it. The pilot can make Sweden a pioneer.

## Swedish examples to build upon

  - **Swish payments from authorities** – several municipalities already use Swish for quick payouts (e.g., urgent food bags). The technology exists.
  - **Neighborhood Watch (Grannsamverkan)** (the police) – shows that trust-based neighbor monitoring works in Swedish residential areas.
  - **The Swedish Social Insurance Agency's digital services** – simple application for certain benefits (e.g., dental care allowance). Neighbor verification is the next step.
  - **Norwegian "naboverifisering"** – Norway is testing similar models in social services, especially for young adults. Sweden can emulate this.

## What you can do tomorrow

**If you are a social worker or unit manager**: Propose an internal pilot: Choose a benefit type (e.g., urgent food account) and test with 10 cases where the applicant brings a neighbor who certifies the need. Measure the time. Evaluate after one month.

**If you are a municipal politician**: Submit a proposal to introduce neighbor verification for grants under SEK 10,000 in your municipality. Use the text above as a basis. Ask for a report after six months.

**If you are a systems developer**: Build a simple prototype: an SMS interface where the applicant enters the neighbors' numbers, the neighbors receive a request and answer YES/NO, and upon two YESes, a Swish payment is sent automatically. The source code can be open for all municipalities.

-----

[← Back to the main article](..)
