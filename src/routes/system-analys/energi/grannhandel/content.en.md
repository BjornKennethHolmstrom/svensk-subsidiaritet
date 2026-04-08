# Peer-to-peer electricity trading

[← Back to the main article](..)

**Summary**: Enables direct trading of solar electricity between neighbors (peer-to-peer) via a digital platform. A household with solar panels on the roof sells surplus electricity directly to the neighbor instead of to the grid owner for a low compensation. The platform matches buyers and sellers, handles payments, and reports to the grid owner. The technology already exists (blockchain, smart meters), but Swedish legislation (the Electricity Act) requires all electricity trading to go through a registered electricity trading company. The goal: to create fairer compensation for small-scale producers, increase incentives for solar cells, and let neighbors share both electricity and costs. Pilot in a city district or village with 500 households.

## The mechanism

Today, a household with solar cells sells its surplus electricity to the grid owner (the local electricity grid company) at a low price—often 20–40 öre/kWh, far below the price the household itself pays for purchased electricity (100–300 öre/kWh). The grid owner then resells the same electricity to neighbors at market price. The difference is the grid owner's profit. The household with solar cells thus receives very poor payment while the grid owner profits from the solar cell's production.

**The measure**: Introduce **peer-to-peer trading** (P2P) where:

  - A household (seller) with solar cells lists its surplus electricity on a digital platform.
  - Another household (buyer) in the same local grid area (same low-voltage station) buys electricity directly from the seller via the platform.
  - The platform matches bids and prices (e.g., the seller sets a price of 80 öre/kWh, the buyer accepts). The price lies between the grid owner's purchase price (low) and the regular electricity price (high)—both win.
  - The electricity flows physically as usual via the grid, but the financial transaction goes directly between the neighbors. The platform reports to the grid owner so that the grid fee (which covers transport losses) can be billed separately.
  - The technology is based on **smart electricity meters** (installed in all Swedish homes since 2020) and a digital platform (mobile app or web) with BankID login. Blockchain can be used to secure transactions, but is not necessary.

**Example**:

*Anna has solar panels on her roof. On a sunny day, she produces 15 kWh, but uses only 5 kWh herself. 10 kWh normally go out onto the grid and she gets 25 öre/kWh from the grid owner = SEK 2.50. Her neighbor Bertil pays 150 öre/kWh for his electricity at the same time (including taxes and fees).*

*With peer-to-peer trading: Anna sells her 10 kWh directly to Bertil via the platform for 80 öre/kWh (agreed price). Anna gets SEK 8 (instead of SEK 2.50). Bertil pays SEK 8 for the electricity, plus a small grid fee to the grid owner (20 öre/kWh, total SEK 2)—a total of SEK 10, which is far less than the SEK 15 he would otherwise pay for the same amount of electricity (150 öre × 10 kWh). Both win. The grid owner still gets their grid fee and does not lose revenue.*

**Why this is not possible today**:

  - The Electricity Act requires that all electricity trading occurs via a registered electricity trading company that has balance responsibility (responsibility for matching production and consumption in real-time).
  - Private individuals are not allowed to sell electricity directly to each other without such a middleman.
  - Electricity grid companies have no incentive to enable peer-to-peer trading—they profit from the middleman difference.

**The core of the measure**: Amend the Electricity Act so that small-scale peer-to-peer trading (below a certain capacity limit, e.g., 100 kW per facility) is exempted from the requirement of an electricity trading company. The platform (cooperative or municipal) takes the role of "technical coordinator" but not as balance responsible—that responsibility remains with the grid owner.

## Pilot design – 500 households in two areas

**Pilot phase 1 (years 1‑3)**: Two pilot areas with a total of 500 households test peer-to-peer trading under an exemption from the Electricity Act.

**Pilot 1: Hammarby Sjöstad, Stockholm** (urban area, mixed buildings)

  - 300 households, of which 100 with solar panels (roof or balcony).
  - The platform is developed by a local energy cooperative in collaboration with KTH.
  - Grid owner: Vattenfall Eldistribution (which consents to the pilot).
  - Goal: test the technology in an urban area with high solar cell pressure.

**Pilot 2: Simris, Österlen** (rural area, high solar cell density)

  - 200 households, of which 80 with solar panels (many farms).
  - The platform is developed by a community association in collaboration with Eon.
  - Goal: test in an area with large overproduction during the day and low grid capacity.

**Organizational model**:

  - **Platform development**: A foundation or cooperative (with the pilot areas as members) builds the app. Budget SEK 2–3 million (partially financed by the Swedish Energy Agency).
  - **Technical solution**: The app connects to each household's smart electricity meter (API from the grid owner). Households enter buy/sell bids. The platform matches and sends payments via Swish or direct debit.
  - **The grid owner's role**: The grid owner continues to measure and bill the grid fee (variable part) for all electricity passing through the grid. Peer-to-peer trading does not affect the grid owner's technical responsibility.
  - **Legal exemption**: The government grants an exemption from the Electricity Act for the pilot. An electricity trading company is not required, but a "technical coordinator" (the platform owner) must report to the grid owner and the Swedish Energy Markets Inspectorate.

**Technical specifications**:

| Component | Solution |
|-----------|---------|
| Identification | BankID (seller and buyer) |
| Measurement data | API from the grid owner's measurement system (hourly values) |
| Matching | Auction algorithm (seller sets price, buyer accepts) or dynamic price (spot price + margin) |
| Payment | Swish (direct) or monthly invoice via the platform |
| Security | Encrypted communication, blockchain as optional (not a requirement) |
| Grid fee | The grid owner bills separately (variable fee per kWh, unchanged) |

**Evaluation**:

  - Number of active users after 6, 12, 24 months (target: \>70% of households in the pilot)
  - Average price of peer-to-peer traded electricity compared to the grid owner's purchase price and market price
  - Sellers' extra revenue per year (compared to selling to the grid owner)
  - Buyers' savings per year (compared to regular electricity price)
  - Technical problems (downtime, measurement errors, payment disruptions)
  - The grid owner's experience (does it affect grid stability? extra administration?)

## Budget and financing

| Item | Amount (2 pilots) |
|------|-------------------|
| Platform development (app, backend, API integration) | SEK 2,500,000 (one-time) |
| Platform operation (server, support, 2 years) | SEK 500,000 |
| Marketing and information to households | SEK 300,000 |
| Legal advice (exemption, agreements) | SEK 200,000 |
| Evaluation (independent researchers) | SEK 500,000 |
| **Total** | **SEK 4,000,000** |

**Financing**: Funds are applied for from the Swedish Energy Agency's program for "Smart grids and flexibility" (budget approx. SEK 200 million/year). SEK 4 million is a minor pilot. Once the technology is proven, the platform can be scaled up to other areas without additional state financing (the cost per household will be low, approx. SEK 500 per connection).

## Regulatory changes required

1.  **Amendment to the Electricity Act (1997:857)** – add a section: *"A household or small business may transfer electricity from a solar cell facility with an installed capacity below 100 kW directly to another end customer within the same grid area without being registered as an electricity trading company. The transfer shall take place via a digital platform that reports to the grid owner and the Swedish Energy Markets Inspectorate."*
2.  **Ordinance on technical coordinators** – the Swedish Energy Markets Inspectorate is tasked with approving platforms for peer-to-peer trading. Requirements for security, transparency, and consumer protection.
3.  **The Tax Ordinance** – peer-to-peer trading between private individuals is not subject to VAT (private individuals have no VAT registration). The electricity sold is already taxed via energy tax when fed into the grid? Clarification: peer-to-peer trading is a resale of already taxable electricity—no additional tax.
4.  **General Data Protection Regulation (GDPR)** – households' electricity usage is sensitive personal data. The platform must have consent from the users and comply with GDPR. Simple templates for terms of use are produced.

## Expected resistance and answers

### "The grid owners lose revenue – they will block the pilot."

**Answer**: The grid owners still charge a grid fee for all electricity that passes through. Peer-to-peer trading does not reduce the physical amount of electricity in the grid (the electricity flows anyway). Some grid owners can even profit from peer-to-peer trading, as it reduces bottlenecks (when production and consumption occur locally, the overlying grid is not burdened). The pilots require the grid owner to consent and share measurement data—otherwise, the government can force them via the Electricity Act.

### "Electricity trading companies lose customers – they lobby against it."

**Answer**: The electricity trading companies' business model is based on buying electricity cheaply (from producers) and selling expensively (to customers). Peer-to-peer trading competes with that margin. But electricity trading companies can adapt—for example, by offering peer-to-peer trading platforms themselves (as a service) or by focusing on larger customers. The pilot is small and poses no threat in the short term. In the long term, the electricity trading industry must change—it is inevitable with smart grids.

### "The technology is not mature – blockchain is too slow and expensive."

**Answer**: Blockchain is optional, not necessary. Smart meters, cloud services, and encrypted APIs are sufficient. The platform can be a simple web server with a database. The cost per transaction will be a few öre—negligible. The technology is already proven in similar pilots in Germany, the Netherlands, and Australia.

### "This is just for electricity nerds – ordinary people won't use it."

**Answer**: The platform is designed to be simple: the user enters an accepted price (e.g., "I want to buy for max 100 öre/kWh"). Everything else happens automatically. Many will appreciate the opportunity to get paid more for their solar electricity or to buy cheaper electricity from their neighbor. The pilot is intended to test user-friendliness precisely.

### "Are there international examples?"

**Answer**: Yes. **Germany** (Pebbles project, SonnenCommunity)—thousands of households trade solar electricity peer-to-peer. **The Netherlands** (Vandebron, Powerpeers)—platforms with peer-to-peer trading. **Australia** (Power Ledger)—blockchain-based peer-to-peer trading in several city districts. **USA** (Brooklyn Microgrid)—local solar energy trading. Sweden is lagging behind—the pilot can provide Swedish experience.

## Swedish examples to build upon

  - **Own electricity usage with solar cells** – already today you can use your own solar electricity directly. The next step is to share with the neighbor.
  - **Housing cooperatives' shared solar electricity** – many housing cooperatives (BRF) install solar panels on the roof and distribute the electricity among members (internally). This is a form of peer-to-peer trading within the same property. The scale model exists.
  - **Local energy communities (EU Directive 2019/944)** – the EU's clean energy for all Europeans directive encourages member states to enable energy communities. Sweden has not fully implemented this. Peer-to-peer trading is a way to live up to the directive.
  - **Elogen (Eon)** – a Swedish electricity trading company that offers hourly pricing, but not peer-to-peer trading. They could be a pilot partner.

## What you can do tomorrow

**If you have solar cells**: Talk to your neighbors who also have solar cells. Ask the grid owner if they have plans to enable peer-to-peer trading. Write a joint letter to the Swedish Energy Markets Inspectorate.

**If you are a grid owner**: Get together with a few customers in a pilot project. You already have the measurement data and technical systems. Building a simple platform is not difficult. Be the first in Sweden—it is good PR.

**If you are a politician (parliament or region)**: Submit a motion to introduce a legislative amendment for peer-to-peer trading (see the regulatory change proposal above). Use the EU Directive 2019/944 as an argument—Sweden has to implement it anyway.

-----

[← Back to the main article](..)
