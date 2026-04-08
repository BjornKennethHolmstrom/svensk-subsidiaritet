# Energy banks

[← Back to the main article](..)

**Summary**: Municipal or cooperative energy banks where households and companies can lend surplus capacity to the electricity grid during peak loads. An energy bank is a digital platform and aggregator that gathers small flexibility resources—home batteries, parked electric cars, heated water tanks, controlled heating (heat pumps, electric boilers), and sometimes smaller reserve power plants. When the electricity grid is overloaded (e.g., a cold winter evening in SE3), the grid owner pays the energy bank to reduce its capacity (load management) or feed in stored electricity. The revenue is distributed to the participating households. The goal: to reduce the need for expensive grid investments (new lines, transformers) and replace them with distributed flexibility—at a fraction of the cost.

## The mechanism

Today, Svenska kraftnät and local grid owners expand the electricity grid to handle power peaks that occur only a few dozen hours per year (e.g., cold winter evenings when everyone is cooking, heating houses, and charging the car at the same time). A new 130 kV line can cost billions, but is fully utilized only 1–2% of the time. At the same time, hundreds of thousands of batteries, electric cars, and heat pumps sit unutilized—they could help shave the peaks.

**The measure**: An **energy bank** is a local aggregator that:

  - Recruits households and companies that have flexible resources (see table below). The participant signs up via an app and receives a small bonus (e.g., SEK 500/year).
  - Aggregates (gathers) thousands of small resources into a virtual power reserve—large enough for the grid owner to be able to buy the service.
  - When the grid owner signals that there is a power shortage (price or direct command), the energy bank sends control signals to the participants' equipment: the battery is discharged, the electric car pauses charging, the water heater is turned off for 30 minutes, the heat pump lowers the output.
  - The participant receives compensation based on how much power (kW) was freed up and for how long (hours). The compensation is often higher than the cost of the electricity not used—a net profit for the household.
  - The energy bank can also store electricity when the price is low (nighttime, windy days) and sell it back when the price is high (peak shaving via batteries).

**Examples of flexible resources in a standard household**:

| Resource | Typical power | Possible action | Impact on comfort | Compensation per hour (estimate) |
|----------|---------------|-----------------|-------------------|----------------------------------|
| EV charging | 3–11 kW | Pause charging 1–2 h | None (the car is parked anyway) | SEK 10–30/h |
| Water heater | 2–6 kW | Turn off 30–60 min | None (the water stays hot for a long time) | SEK 5–20/h |
| Heat pump (air/water) | 1–5 kW | Lower output 30% | Maybe 1 degree colder for an hour | SEK 5–25/h |
| Home battery (5–15 kWh) | 3–5 kW | Discharge during peak hour | None | SEK 20–50/h |
| Electric boiler (direct-acting) | 3–10 kW | Turn off 15–30 min | The temperature drops marginally | SEK 10–40/h |
| Smart washer/dryer | 1–3 kW | Delay start | None (the program runs later) | SEK 2–10/h |

**The societal benefit**: By activating the energy bank during the 50–100 highest power peaks per year, the grid owner can avoid or postpone billion-kronor investments in grid reinforcement. Every kilowatt of peak load shaved saves SEK 5,000–15,000 in grid costs. The energy bank's cost is a fraction of that—typically SEK 500–1,000 per installed kW.

## Pilot design – 3 local energy banks

**Pilot phase 1 (years 1‑4)**: Three energy banks in different types of geographies—an urban area, a medium-sized town, and a rural area. Each bank gathers at least 500 flexible resources.

**Pilot 1: Stockholm (Hammarby Sjöstad / Nacka)**

  - Type: Urban area, high proportion of electric cars, batteries, and heat pumps.
  - Goal: 1,000 households, total flexible capacity 2–3 MW.
  - Grid owner: Vattenfall Eldistribution.
  - Technology: Platform from a local energy cooperative + startup.

**Pilot 2: Västerås (central town + surrounding towns)**

  - Type: Medium-sized town, mix of detached houses, tenant-owner apartments, and smaller industries.
  - Goal: 800 households + 20 companies, flexible capacity 2 MW.
  - Grid owner: Mälarenergi Elnät.
  - Technology: Municipal platform (Mälarenergi develops its own).

**Pilot 3: Skellefteå (sparsely populated area, rural area)**

  - Type: Sparsely populated area, many electric boilers, water heaters, and some electric cars.
  - Goal: 500 households, flexible capacity 1.5 MW.
  - Grid owner: Skellefteå Kraft Elnät.
  - Technology: Cooperative platform (community association + research support).

**Organizational model**:

  - The energy bank is run as an economic association (cooperative) or as part of the local energy office/municipal housing company.
  - The participants sign an agreement that allows the energy bank to control their equipment (via API or manual opt-in). The agreement specifies the minimum compensation and the maximum number of control events per year (e.g., max 100 hours, so that comfort is not significantly affected).
  - The grid owner buys the flexibility service from the energy bank via an agreement. The price is set through bidding or negotiation. Typically, the grid owner pays a fixed capacity fee (SEK per available kW per month) plus variable compensation (SEK per kWh freed up).
  - The energy bank distributes the compensation to the participants (minus a small fee for operations, 10–20%).

**Technical specifications**:

| Function | Solution |
|----------|----------|
| Communication with equipment | Local APIs (e.g., OCPP for charging boxes, Modbus for heat pumps) or via smart meters (controllable load) |
| Platform | Cloud-based, open source (enables more energy banks) |
| Signal from grid owner | Direct command via API (encrypted) or via price information (spot price) |
| Participant app | Simple app (iOS/Android) where the user sees their consumption, earned compensation, and can set comfort limits |
| Security | The equipment may only be controlled within agreed limits—no risk of unauthorized access |

**Evaluation**:

  - Total installed flexible capacity (kW) per energy bank
  - Proportion of peak load that can be shaved (compared to a scenario without an energy bank)
  - The grid owner's reduced investment needs (SEK million/year)
  - Participants' satisfaction and the proportion who continue after the pilot
  - Cost per flexible kW—compared to traditional grid reinforcement (the goal is at least 50% lower)

## Budget and financing

| Item | Amount (per pilot bank) | Total 3 banks |
|------|-------------------------|---------------|
| Platform development (open source, shared) | SEK 1.5 million (one-time) | SEK 1.5 million (shared) |
| Platform operation (3 years) | SEK 200,000 | SEK 600,000 |
| Marketing & recruitment (500–1,000 households) | SEK 300,000 | SEK 900,000 |
| Compensation to participants (for the pilot period) | SEK 500,000 | SEK 1.5 million |
| Administrative resource (0.5 FTE × 3 years) | SEK 900,000 | SEK 2.7 million |
| Evaluation (research) | SEK 500,000 | SEK 1.5 million |
| **Total** | **SEK 3.9 million per bank (3 years)** | **\~SEK 9 million** (shared costs reduce the total) |

**Financing**: Funds can be applied for from the Swedish Energy Agency's programs for "Smart grids" and "Flexibility in the electricity system" (budget approx. SEK 200 million/year). EU funds (Horizon Europe, LIFE) can also be used. Once the pilot is evaluated, the business model can carry itself: the grid owner pays the energy bank for flexibility, and the energy bank pays the participants. The investment in the platform and start-up costs are one-time expenses.

## Regulatory changes required

1.  **The Electricity Act (1997:857)** – today, the grid owner is obliged to connect all customers but has no obligation to buy flexibility services. A new section should be introduced: *"The grid owner shall, in areas with limited grid capacity, strive to purchase flexibility services from aggregators (such as energy banks) before grid reinforcement is carried out, if it is socio-economically efficient."* (Similar rules already exist in the UK and California.)
2.  **Ordinance on grid fees** – the grid fee is differentiated so that customers who provide flexibility receive a lower fixed fee or a bonus (incentive). The Swedish Energy Markets Inspectorate is tasked with designing the model.
3.  **Secrecy and GDPR** – the energy bank needs access to the participants' measurement data (kWh per hour). Requires consent according to GDPR. A template for consent is developed.
4.  **Standard agreements** – The Swedish Energy Markets Inspectorate and the industry organization Swedenergy (Energiföretagen Sverige) develop a standard template for agreements between the grid owner and the energy bank, as well as between the energy bank and the participant. This lowers the threshold for new actors.

## Expected resistance and answers

### "The grid owners want to build grids – that is their core business. They will not buy flexibility."

**Answer**: The grid owner's mission is to deliver reliable electricity at the lowest possible cost for the customers. If flexibility is cheaper than grid reinforcement (which it often is), the grid owner is obliged under the Electricity Act to consider it. The pilot includes grid owners who are positive. To drive the transition, regulation is required (see above)—when the incentives are right, the grid owners will adapt.

### "This is too complicated for ordinary households – who has the energy to configure their gadgets?"

**Answer**: The energy bank handles everything automatically after the user has signed up. No daily adjustments are required. The user just sets a comfort limit (e.g., "the car must be charged to 80% by 08:00" or "the temperature must not fall below 18 degrees"). The rest happens in the background. The app shows the earned compensation—which often motivates participation.

### "Batteries and electric cars are expensive – this will only be for the rich."

**Answer**: Even households without a battery or electric car can participate via a water heater, heat pump, or washing machine. These resources are available in most homes. And the more who participate, the lower the costs for the grid—which benefits all customers (even those without flexible resources) through lower grid fees.

### "Controlling equipment in the home is privacy-sensitive."

**Answer**: The participant decides for themselves when and how much the equipment may be controlled (e.g., max 2 hours per day, not between 17:00–19:00 if cooking). All data is encrypted. The agreement specifies that the energy bank may never turn off equipment that affects safety (e.g., frost protection). The privacy risk is low compared to the benefit that a lower electricity bill and reduced climate impact provide.

### "Are there any Swedish examples?"

**Answer**: Yes, several small pilots. **E.ON** has tested load management of electric cars in the "Smart Charging" project. **Vattenfall** has tested virtual batteries ("V2G") in a few individual homes. **Göteborg Energi** has flexibility services for district heating. But no one has built an open, cooperative energy bank on a large scale. The pilot would be the first in Sweden—and could become a model for Europe.

## Swedish examples to build upon

  - **Load management of electric cars (E.ON, Vattenfall)** – already today, charging boxes can be controlled via an app. The technology exists.
  - **Solar cell pools (cooperatives)** – use an aggregator to sell surplus electricity. The same model can be used for flexibility.
  - **Grid benefit and flex market (Svenska kraftnät)** – they already have a market for large-scale flexibility (reserve power). The energy bank is a local, small-scale variant.
  - **Denmark's "Energy Collective"** – a Danish energy cooperative that aggregates flexibility from homes. Sweden can visit and learn.

## What you can do tomorrow

**If you have an electric car, battery, or heat pump**: Investigate whether your grid owner or your energy company offers control for compensation. Ask their customer service. The more people who ask for it, the faster it happens.

**If you are a grid owner or energy office**: Start a small pilot—gather 100 customers who are willing to control their charging or water heater. Offer a bonus of SEK 500/year. Measure the effect. Show that it works. Then build a platform.

**If you are a politician (municipality or parliament)**: Submit a proposal to introduce a "flexibility obligation" for grid owners—that they must purchase flexibility services before building new grid capacity. Use the text above as a basis.

-----

[← Back to the main article](..)
