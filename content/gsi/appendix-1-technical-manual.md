# **GLOBAL SUBSIDIARITY INDEX (GSI) TECHNICAL MANUAL**  
*Version 3.1: Measurement Protocols & Verification Standards*

---

# **PREAMBLE: A MANUAL FOR THE CITIZEN AUDITOR**

*“We measure what we care about. For too long, we have measured cost efficiency but ignored decision distance. This manual exists to correct that error.”*

**The Purpose of This Document**
This is not a government report. It is a diagnostic tool for citizens. Its purpose is to make the invisible structures of power visible, measurable, and comparable. By quantifying "Decision Distance" and "Knowledge Exclusion," we convert vague frustrations into engineering data that cannot be dismissed.

**Who This Is For**

* **The Municipal Councillor** seeking arguments to reclaim budget authority.
* **The Journalist** investigating why a local crisis was mismanaged.
* **The Citizen** demanding that their lived experience counts as data.

**The "Mirror" Principle**
The GSI does not create new rules; it holds a mirror to existing ones. It assumes that a healthy governance system, like a healthy ecosystem, requires no complex external index to function. The existence of this manual is proof that our current system has lost its way. We measure the machinery of the state so that we may eventually dismantle its unnecessary parts.

---

## **PART 1: FOUNDATIONAL ONTOLOGY & PHILOSOPHY**

### **1.1 The GSI Measurement Philosophy: "Trust but Verify"**

**Core Principle:** Governance quality must be measured through **observed behaviors and verifiable outcomes**, not self-reported intentions or theoretical structures.

**Three Measurement Axes:**
1. **Structural Distance** (Objective administrative layers)
2. **Process Inclusion** (Documented participation patterns)
3. **Outcome Resilience** (Empirical performance during stress)

**Data Integrity Protocol:** Every claim requires:
- **Primary Source:** Official government data
- **Validator Source:** Independent verification
- **Triangulation Check:** Cross-reference with related metrics

### **1.2 Key Definitions & Units of Analysis**

**Decision:** A formal allocation of resources or change in rules affecting 100+ people or 1%+ of jurisdiction's population.

**Administrative Layer:** A distinct governance level with:
- Legal decision-making authority
- Separate budget
- Appointed/elected leadership
- Physical or digital headquarters

**Local Knowledge:** Information that:
1. Is only accessible through physical presence
2. Requires cultural/linguistic context to interpret
3. Is time-sensitive (decays with distance/delay)
4. Is held by non-credentialed stakeholders

**Resilience Event:** A shock requiring system adaptation within 30 days to prevent harm exceeding 0.1% of population.

---

## **PART 2: DIMENSION 1 – DECISION PROXIMITY PROTOCOLS**

### **2.1 Indicator 1.1: Administrative Distance**

**Measurement Protocol v3.1**

**Step 1: Select Standard Decision Portfolio**
Every jurisdiction assesses the same 7 decisions:
1. **Primary School Curriculum** (Education)
2. **Local Road Maintenance Schedule** (Transportation)
3. **Primary Healthcare Clinic Staffing** (Healthcare)
4. **Residential Zoning Variance** (Housing)
5. **Community Policing Patrol Pattern** (Safety)
6. **Local Park Programming Budget** (Culture)
7. **Elder Care Meal Service Provider** (Social Services)

**Step 2: Decision Chain Mapping**
For each decision:
1. Identify **Point of Impact** (who is affected)
2. Trace approval chain to **Final Signatory Authority**
3. Count distinct administrative layers (nodes)
4. Document communication channels between nodes

**Step 3: Calculation Formula**

```
Administrative Distance (AD) = Σ(L_i × W_i) / ΣW_i

Where:
L_i = Number of layers for decision i
W_i = Weight based on:
  - Population affected (0.4)
  - Budget magnitude (0.3)
  - Frequency of decision (0.3)
```

**Step 4: Scoring Conversion**

```
Score = 10 × (1 - (AD - 1) / 4)

Constraints:
- Minimum score: 0
- Maximum score: 10
- AD < 1 (hyper-local) = 10
- AD > 5 (supranational) = 0
```

**Verification Protocol:**
- **Shadow Request Test:** Citizen submits standardized request, tracks response chain
- **Document Audit:** Review meeting minutes, approval stamps, email chains
- **API Integration:** Where digital governance systems exist, extract approval workflows

**Example Calculation:**
Sweden's "Primary Healthcare Clinic Staffing":
- Point of Impact: Patient
- Chain: Patient → Nurse → Clinic Manager → Municipal Health Board → Regional Healthcare Director → Stockholm Approval
- Layers (L): 5
- Weight (W): High (affects 100% population, large budget, annual decision)
- Calculated AD: 4.8 → Score: 5.5/10

### **2.2 Indicator 1.2: Fiscal Sovereignty**

**Measurement Protocol v3.1**

**Step 1: Municipal Revenue Classification**

```
Total Municipal Revenue (TMR) = 
A. Local Taxes + 
B. Local Fees + 
C. Intergovernmental Transfers + 
D. Other Revenue

Categorical Breakdown of Transfers:
C1. Fully Earmarked (must spend on X)
C2. Partially Earmarked (spend on X or Y)
C3. Block Grants (spend on category Z)
C4. General Purpose (no restrictions)
```

**Step 2: Mandatory Expenditure Calculation**

```
Mandatory Expenditures (ME) = Sum of:
- Legally required service levels (e.g., education hours)
- Debt service obligations
- Contractual obligations (e.g., public-private partnerships)
- Court-ordered payments
```

**Step 3: Fiscal Sovereignty Score**

```
Fiscal Sovereignty (FS) = 
(A + B + D + C4 + 0.5×C3 + 0.25×C2 - ME) / TMR

Score = 10 × FS
```

**Verification Protocol:**
- **Budget Document Analysis:** Line-by-line review of municipal budgets
- **Grant Database Cross-check:** Compare announced vs. received transfers
- **Court Case Review:** Document legal challenges to spending restrictions
- **Municipal Survey:** Anonymous survey of financial officers on "real" flexibility

**Data Sources:**
1. Municipal Annual Financial Reports
2. Intergovernmental Transfer Databases
3. Legal Code Analysis (mandatory service laws)
4. Public Contract Registries

---

## **PART 3: DIMENSION 2 – KNOWLEDGE INCLUSION PROTOCOLS**

### **3.1 Indicator 2.1: Expert vs. Experiential Balance**

**Measurement Protocol: The Citation & Consultation Analysis**

**Step 1: Policy Document Corpus Selection**
- Last 24 months of major policy documents (minimum 10)
- Include: White Papers, Regulatory Impact Assessments, Legislative Proposals
- Exclude: Routine administrative updates, emergency decrees

**Step 2: Source Classification Algorithm**

```
For each citation/reference in document:
If source is:
- Academic journal → Expert
- Government agency report → Expert
- Professional association → Expert
- Industry white paper → Expert with conflict flag
- Public consultation summary → Experiential
- Citizen testimony transcript → Experiential
- Field study with local participants → Experiential
- Traditional knowledge documentation → Experiential
```

**Step 3: Balance Ratio Calculation**

```
Expert Ratio (ER) = Expert Citations / Total Citations
Experiential Ratio (XR) = Experiential Citations / Total Citations
Conflict Ratio (CR) = Expert with Conflict / Expert Citations

Optimal Range: 0.35 ≤ ER ≤ 0.65 AND 0.35 ≤ XR ≤ 0.65
```

**Step 4: Scoring Formula**

```
Base Score = 10 × (1 - |ER - 0.5| / 0.15)
Conflict Penalty = -2 × CR
Final Score = max(0, Base Score - Conflict Penalty)
```

**Verification Protocol:**
- **Automated Text Analysis:** NLP classification of citation types
- **Consultation Database Check:** Cross-reference claimed consultations with public records
- **Source Verification:** Random sample verification of cited sources
- **Stakeholder Interview:** Interview cited experiential sources about their involvement

### **3.2 Indicator 2.4: Feedback Loop Efficiency**

**Measurement Protocol: The Latency Measurement System**

**Step 1: Standardized Trigger Events**
Monitor 5 standardized problem signals:
1. **Health:** Disease outbreak exceeding baseline by 200%
2. **Infrastructure:** Service failure affecting 1,000+ people for 24+ hours
3. **Economic:** Unemployment increase of 25% in any municipality
4. **Social:** Trust survey drop of 10+ percentage points
5. **Environmental:** Pollution measurement exceeding safety limits by 50%

**Step 2: Response Tracking**
For each trigger:
1. **Detection Date (T0):** First official recognition
2. **Analysis Complete (T1):** Completion of root cause analysis
3. **Decision Made (T2):** Formal decision to act
4. **Implementation Start (T3):** Resources allocated/action begins
5. **Resolution (T4):** Problem returns to baseline

**Step 3: Latency Calculation**

```
Detection-Analysis Lag = T1 - T0 (days)
Decision Lag = T2 - T1 (days)
Implementation Lag = T3 - T2 (days)
Total System Lag = T3 - T0 (days)
```

**Step 4: Scoring Formula**

```
Score = 10 × exp(-0.01 × Total System Lag)

Where:
exp is exponential function
Score capped at 10
Logarithmic scaling: First 7 days critical, then diminishing returns
```

**Verification Protocol:**
- **Media Analysis:** Compare official timelines with news reporting
- **Whistleblower Verification:** Anonymous verification of internal dates
- **Citizen Complaint Tracking:** Match problem reports with resolution dates
- **Emergency Declarations Database:** Official declaration timestamps

---

## **PART 4: DIMENSION 3 – RESILIENCE ARCHITECTURE PROTOCOLS**

### **4.1 Indicator 3.1: Critical System Redundancy**

**Measurement Protocol: The Kill Switch Simulation**

**Step 1: Critical System Identification**
```
Priority 1 Systems (must test all):
- Electrical grid substations
- Water treatment plants
- Major hospital(s)
- Central communication hubs
- Primary transportation nodes

Priority 2 Systems (sample 3):
- Food distribution centers
- Emergency services dispatch
- Financial transaction systems
- Fuel supply depots
- Internet exchange points
```

**Step 2: Single Point of Failure (SPOF) Analysis**

For each system:
1. **Identify Primary Node:** Largest capacity provider/service hub
2. **Map Dependencies:** Systems/services requiring this node
3. **Calculate Failure Impact:**
   ```
   Impact Score = 
   (Population Affected × 0.4) +
   (Economic Value at Risk × 0.3) +
   (Alternative Service Gaps × 0.3)
   ```

**Step 3: Redundancy Assessment**

```
Redundancy Capacity = 
Sum(Capacity of Alternative Nodes) / Primary Node Capacity

Where Alternative Nodes must:
- Be geographically separate (>20km)
- Have independent power/communication
- Be under different administrative control
```

**Step 4: Continuity Testing**

Three methods (use highest available):
1. **Historical Analysis:** Review actual outage recovery data
2. **Tabletop Exercise:** Documented simulation with stakeholder participation
3. **Live Test:** Controlled failure with monitoring (rare, requires safety protocols)

**Step 5: Scoring Formula**

```
Base Continuity = 
min(100, Redundancy Capacity × 100)  // as percentage

Score = 
if Base Continuity ≥ 80%: 10
if Base Continuity ≥ 50%: 5 + (Base Continuity - 50)/6
if Base Continuity < 50%: Base Continuity/10
```

**Verification Protocol:**
- **Infrastructure Audit:** Physical inspection of backup systems
- **Emergency Drill Review:** Analysis of exercise documentation
- **Maintenance Log Check:** Verify backup system testing frequency
- **Supplier Diversity Analysis:** Check for single-source dependencies

---

## **PART 5: THE COMPLEXITY ADJUSTMENT FACTOR (CAF) ALGORITHM**

### **5.1 CAF v3.1: Multi-Dimensional Complexity Measurement**

**Formula:** `CAF = (G × E × D × T)^(1/4) ÷ C`

**Component Measurement Protocols:**

#### **G: Geographic Diversity (0-10)**
```
G = (CZ × 0.3) + (TT × 0.3) + (EI × 0.4)

Where:
CZ = Climate Zones (0-10 scale):
  1 zone = 1
  +1 per additional Köppen-Geiger zone up to 10

TT = Travel Time Index:
  Average(minutes from periphery to capital) / 60
  Cap at 10

EI = Ecological Integrity Variance:
  Standard deviation of ecosystem health scores across regions
  Normalized to 0-10 scale
```

#### **E: Ethnolinguistic Diversity (0-10)**
```
E = Greenberg's Diversity Index (GDI) × 10

GDI Calculation:
GDI = 1 - Σ(p_i²)
Where p_i = proportion of population speaking language i

Adjustments:
+2 if significant historical tensions documented
+1 if indigenous languages lack official recognition
-1 if >90% speak common lingua franca
```

#### **D: Development Disparity (0-10)**
```
D = (Gini × 0.4) + (RGV × 0.3) + (URD × 0.3)

Where:
Gini = Gini coefficient × 10

RGV = Regional GDP Variance:
  Standard deviation(regional GDP per capita) / National average
  × 10, capped at 10

URD = Urban-Rural Divide Index:
  (Urban services access rate - Rural services access rate) × 10
  Services: healthcare, education, internet, transport
```

#### **T: Threat Environment (0-10)**
```
T = (CV × 0.3) + (BC × 0.3) + (DF × 0.2) + (PC × 0.2)

Where:
CV = Climate Vulnerability Index (ND-GAIN) normalized 0-10
BC = Border Conflict Score (0-10 based on Uppsala Conflict Data)
DF = Disaster Frequency (events/year × 2, capped at 10)
PC = Pandemic Capability Gap (preparedness vs. risk, 0-10)
```

#### **C: Communication Capacity (0-10)**
```
C = (DI × 0.4) + (LR × 0.3) + (LC × 0.3)

Where:
DI = Digital Infrastructure Index (ITU IDI normalized 0-10)
LR = Literacy Rate × 10
LC = Linguistic Commonality:
  Proportion population speaking majority language × 10
```

### **5.2 CAF Application Rules**

**Target GSI Calculation:**
```
Target GSI = 5 + (CAF × 0.5)

Constraints:
Minimum Target: 4.0
Maximum Target: 9.0
```

**Performance Gap Analysis:**
```
GSI Gap = |Actual GSI - Target GSI|
Performance Score = 10 - (GSI Gap × 2)

Note: Over-centralization (Actual < Target) penalized more than under-centralization
```

**CAF Update Frequency:**
- Annual update for D, T, C components
- 5-year update for G, E (census dependent)
- Event-driven updates for T (major disasters, conflicts)

---

## **PART 6: DATA CONFIDENCE TIERS & VERIFICATION**

### **6.1 Four-Tier Confidence System**

**Tier 1: Diamond (90-100% confidence)**
```
Requirements:
- Automated API data feeds from government systems
- Independent audit by accredited third party
- Citizen validation panel (minimum 100 participants)
- Open data publication with version control
- Historical data consistency checks passed
```

**Tier 2: Gold (75-89% confidence)**
```
Requirements:
- Official published data with clear methodology
- One independent verification source (NGO, academic)
- No significant anomalies in data patterns
- Transparency about data limitations
```

**Tier 3: Silver (50-74% confidence)**
```
Requirements:
- Official data only
- Methodology partially documented
- Some gaps in coverage
- Potential gaming risks identified
```

**Tier 4: Bronze (0-49% confidence)**
```
Characteristics:
- Estimates based on proxy data
- Significant data gaps
- Methodology unclear
- High risk of manipulation
```

### **6.2 Verification Protocols by Indicator**

**Administrative Distance Verification:**
```
Method: Shadow Request + Document Chain Audit
Sample Size: 7 decisions × 3 regions = 21 requests
Confidence Threshold: 80% match required for Tier 1
```

**Fiscal Sovereignty Verification:**
```
Method: Budget Line Analysis + Transfer Database Cross-check
Audit: Random sample of 10% expenditure items
Validation: Municipal officer anonymous survey
```

**Knowledge Inclusion Verification:**
```
Method: Automated Text Analysis + Source Verification
Check: 20% random sample of cited sources
Validation: Interview 5% of cited experiential sources
```

**Resilience Verification:**
```
Method: Infrastructure Audit + Historical Outage Analysis
Test: Minimum one tabletop exercise observation
Validation: Maintenance log review for backup systems
```

### **6.3 Anomaly Detection System**

**Automated Checks:**
```
1. Temporal Consistency: Year-over-year changes >25% flagged
2. Cross-Indicator Validation: Related metrics should correlate
3. Peer Comparison: Significant deviation from CAF-adjusted peers
4. Internal Consistency: Sub-national variance patterns
```

**Investigation Triggers:**
- Score improvement >30% in one year without documented reform
- Significant discrepancy between official and shadow data
- Missing data for critical indicators
- Evidence of data manipulation patterns

**Consequences:**
- Tier downgrade for anomalies
- Public flagging on dashboard
- Mandatory audit requirement
- Exclusion from annual rankings if unresolved

---

## **PART 7: IMPLEMENTATION & REPORTING STANDARDS**

### **7.1 Data Collection Calendar**

```
Q1 (Jan-Mar):
- Collect previous year's outcome data
- Update D, T, C components
- Begin shadow data collection

Q2 (Apr-Jun):
- Complete primary data collection
- Conduct verification procedures
- Preliminary scoring

Q3 (Jul-Sep):
- Final verification and audits
- CAF calculation
- Gap analysis

Q4 (Oct-Dec):
- Final GSI calculation
- Report publication
- Dashboard update
- Planning for next cycle
```

### **7.2 Standardized Reporting Template**

**National GSI Report Structure:**
```
1. Executive Summary (2 pages)
2. Methodology & Data Sources (with confidence ratings)
3. Dimensional Scores & Analysis
4. CAF Calculation & Context
5. System-by-System Assessment
6. Strengths & Vulnerabilities
7. Improvement Recommendations
8. Technical Appendix
```

**Municipal Supplement:**
- Local decision distance mapping
- Community capacity assessment
- Priority intervention identification

### **7.3 Quality Assurance Framework**

**Pre-Publication Review:**
1. **Technical Review:** Methodology team (3 experts minimum)
2. **Stakeholder Review:** Sample of assessed entities
3. **Public Comment:** 30-day period for challenges
4. **Final Approval:** GSI Governance Board

**Post-Publication:**
- Error correction protocol
- Annual methodology review
- Continuous validation improvements

---

## **PART 8: GLOSSARY & TECHNICAL REFERENCES**

*(To be developed based on final indicator set)*

**Key Technical Terms:**
- Administrative Layer
- Decision Chain
- Fiscal Encumbrance
- Knowledge Inclusion Ratio
- Redundancy Capacity
- Complexity Adjustment Factor
- Data Confidence Tier

**Reference Standards:**
- ISO 37120 (Sustainable cities)
- UN SDG Indicators
- World Bank Governance Indicators
- ITU Digital Development Index
- ND-GAIN Climate Vulnerability

---

## **PART 9: THE SUNSET PROTOCOL (SUCCESS CRITERIA)**

### **9.1 The Obsolescence Objective**

The ultimate goal of the Global Subsidiarity Index is to become unnecessary. A perfectly distributed system requires no external index to tell it that it is healthy; the feedback loops are intrinsic, immediate, and organic.

We define the **"GSI Zero State"**—the point at which this project dissolves—based on the following criteria:

### **9.2 Criteria for Decommissioning**

The GSI project will initiate its own shutdown sequence when a jurisdiction meets these conditions for 5 consecutive years:

1. **The "Shadow Data" Convergence:** The discrepancy between *Official Government Data* and *Citizen Shadow Data* falls below 2% (indicating high transparency and trust).
2. **The Latency Collapse:** The *Feedback Loop Efficiency* (Indicator 2.4) drops below 30 days for 90% of trigger events (indicating the system is now real-time adaptive).
3. **The Institutionalization of Subsidiarity:** The *Complexity Adjustment Factor (CAF)* is legally codified into the national constitution or municipal charter, making the external calculation redundant.

**Statement of Intent:**
We are builders of scaffolding, not monuments. When the building stands on its own, the scaffolding must be removed.

---

**END OF TECHNICAL MANUAL PART 1**

*This manual will be supplemented with:*
- *Indicator-Specific Measurement Guides*
- *Data Collection Templates*
- *Verification Protocol Checklists*
- *Calculation Software Specifications*
- *Training Materials for Assessors*

**Next Development Phase:** Create the digital implementation specifications for automated data collection and the GSI Calculation Engine.
