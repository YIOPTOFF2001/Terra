# Terra 🌱

![Terra Project Overview](./Images/terra.png)

# Table of contents 

- [Objective](#objective)
- [Data Source](#data-source)
- [Stages](#stages)
- [Design](#design)
  - [Mockup](#mockup)
  - [Tools](#tools)
- [Development](#development)
  - [Pseudocode](#pseudocode)
  - [Data Exploration](#data-exploration)
  - [Data Cleaning](#data-cleaning)
  - [Transform the Data](#transform-the-data)
  - [Create the SQL View](#create-the-sql-view)
- [Testing](#testing)
  - [Data Quality Tests](#data-quality-tests)
- [Visualization](#visualization)
  - [Results](#results)
  - [DAX Measures](#dax-measures)
- [Analysis](#analysis)
  - [Findings](#findings)
  - [Validation](#validation)
  - [Discovery](#discovery)
- [Recommendations](#recommendations)
  - [Potential ROI](#potential-roi)
  - [Potential Courses of Actions](#potential-courses-of-actions)
- [Conclusion](#conclusion)




# Objective 

- What is the key pain problem? 

Mozambique has smallholder farmers producing food, and vendors in Maputo who need it, but the two rarely connect efficiently.

- **Farmers** lack reliable access to urban markets. Distance, transport and payment risk make it hard to sell beyond their local area.
- **Vendors** struggle with inconsistent supply and quality, and many depend on produce imported from South Africa even when local farmers
  could supply it.
- **Trust** is the gap in between. Neither side can easily verify the other, and payment disputes are a risk for both.
- **Food insecurity** the country faces severe food insecurity because farmers grow at small scale and the food is not distributed evenly across provinces.
- **Inconsistent food prices** because food is imported across the borders, food prices tend to be unreliable because of currency fluctuation and political issues.


- What is the ideal solution? 

Terra is an aggregator, not a marketplace. We buy directly from verified smallholder farmers and resell to vendors in Maputo or households. Local ground agents
coordinate on the ground, farmers are paid before trucks move, and vendors pay upfront, which removes the trust problem for both sides. Farmers sell at a price they are comfortable in and then Terra list those produce to vendors or households.

In this way, food wastage will reduce as farmers will have a market to sell to and be confident enough to scale their produce.


## User stories

### Farmer
- As a smallholder farmer, I want to list my produce and available quantity so that buyers in Maputo can find me.
- As a farmer, I want to be paid before the truck leaves so that I don't carry the risk of non-payment.
- I want to find a reliable markert so that my produce doesn't spoil.
- I want to have a buyer who is going to buy at a fair price and someone who won't take advantage of me.

### Vendor
- As a vendor in Maputo, I want to order potatoes and onions from local, verified farmers so that I get steady supply without relying
  on imports.
- As a vendor, I want to see what's available and at what price so that I can plan my stock.
- I want to make sure that I always have stock because I have a lot of customers.
- The qulity of produce is very important to me.
- I want fast deliveries.


# Data source 

## Market Research

Terra's design is based on early market validation in Mozambique:

- Direct outreach to farmers and vendors via Facebook and TikTok
- Market intelligence from vendor networks in Zimpeto, Maputo
- Research into Mozambique's reliance on South African produce imports
- Case studies of similar models, including Twiga Foods (Kenya)


# Stages

- Market validation
- Design
- Developement
- Testing
- Pilot Launch
- Terra AI 
 


# Market validation

## 1. Market Validation (in progress)

Terra is being validated with real farmers and vendors before any
launch. This section explains the problem, the evidence behind it,
what has been done so far, and what must happen before launch.

### 1.1 Why Mozambique needs this

**Agriculture matters, but farmers are cut off from markets.**
Agriculture contributes about 24% of GDP and 20% of exports, and the
sector is dominated by small family farms with little connection to
the market and limited technology (Ministry of Agriculture official,
reported by Jornal Notícias). Only about 3% of the roughly 3.9 million
farms use fertiliser. Smallholders form the majority of the sector,
yet cultivated land per household has declined and access to inputs
remains limited and uneven across regions (UNU-WIDER, Agricultural
Development in Mozambique 2002–2020).

**Mozambique imports vegetables it could grow.**
South Africa exported about US$58.6M of edible vegetables to
Mozambique in 2025 (UN COMTRADE via Trading Economics).

| Product | 2025 value | 2024 value |
|---|---|---|
| Potatoes (fresh) | $25.59M | $20.24M |
| Onions, shallots, garlic, leeks | $20.63M | $19.19M |
| Tomatoes | $2.08M | $1.96M |
| Total vegetables and tubers | $58.57M | $46.82M |

Potatoes and onions together are about 79% of the 2025 total and 84%
of the 2024 total. These are the two launch products for Terra.
Note: the 2025 figures are South African export records and the 2024
figures are Mozambican import records. Both are formal customs data
only, so informal cross-border trade is not counted.

**The government wants to replace these imports.**
Mozambique's Agriculture Minister, Roberto Albino, has identified
Gaza province as capable of producing large volumes of potatoes,
tomatoes, cabbage and onions currently sourced from South Africa, and
called on producers, seed companies and stakeholders to work toward
replacing them (FreshPlaza). This supports Gaza as Terra's first
supply region.

**Food insecurity remains high.**
About 3.5 million people in Mozambique face acute food insecurity
(OCHA, reported by Lusa, 1 Sept 2026). Drivers include irregular
rainfall, repeated cyclones, conflict in the north and high food
prices (IPC, January 2026). Most severe needs are concentrated in
Cabo Delgado and Nampula.

**Scope.** Terra does not target humanitarian food aid. It addresses
market access for smallholders and import dependence for urban
vendors in Maputo. Lower local prices and more reliable local supply
are an indirect benefit.

### 1.2 The gap Terra fills

- Farmers have produce but no reliable route, buyer verification or
  payment certainty for reaching Maputo.
- Vendors need steady supply and rely on imports for potatoes and
  onions even though local production is possible.
- No trusted intermediary connects the two. Terra buys from verified
  farmers and resells to vendors, with ground agents coordinating.

### 1.3 Comparable models

- **Twiga Foods (Kenya):** aggregates produce from smallholders and
  supplies urban vendors. Terra follows the same aggregator logic.
- **Dangote's trajectory:** studied for how a business can scale by
  controlling supply and distribution in an African market.

### 1.4 Fieldwork completed

- Outreach to farmers and vendors via Facebook and TikTok
- Portuguese-language outreach messages for local contacts
- Joined a WhatsApp broadcast group run by a Zimpeto-based importer
  who sources from South Africa, for pricing and supply intelligence
- Mapped supply regions: Gaza (preferred first route, about 200 km
  from Maputo via the EN1), Boane (about 30 km from Maputo), Niassa
  and Manica
- Selected launch products (potatoes and onions) based on market
  demand, transport durability and confirmed supply

### 1.5 Operating model validated so far

- Terra buys directly from verified farmers and resells to vendors in
  Maputo. It is an aggregator, not a peer-to-peer marketplace.
- Farmers are paid before trucks move. Vendors pay upfront.
- Local ground agents coordinate farmer contact and pickups.

### 1.6 Exit criteria (no launch until met)

- [ ] At least 5 farmers confirmed (current: _/5)
- [ ] At least 5 vendors confirmed (current: _/5)
- [ ] Price per kg confirmed with farmers: _ MZN
- [ ] Price per kg vendors currently pay: _ MZN
- [ ] Transport cost per trip from Gaza to Maputo: _ MZN

### 1.7 Key findings so far

_Add real findings from conversations here, for example what farmers
said about current buyers or what vendors said about import prices._

### 1.8 Risks and open questions

- Weather and climate shocks (floods, drought, cyclones) can disrupt
  supply from Gaza.
- Transport reliability and cost on the EN1.
- Whether vendors will switch from established importers on price and
  quality.
- Seasonality of potato and onion supply.

### 1.9 Sources

1. Trading Economics / UN COMTRADE, South Africa exports of edible
   vegetables to Mozambique (2025):
   https://tradingeconomics.com/south-africa/exports/mozambique/edible-vegetables-certain-roots-tubers
2. Trading Economics / UN COMTRADE, Mozambique imports from South
   Africa (2024):
   https://tradingeconomics.com/mozambique/imports/south-africa/edible-vegetables-certain-roots-tubers
3. FreshPlaza, "Mozambique aims to reduce South African vegetable
   imports": https://www.freshplaza.com/africa/article/9857418/mozambique-aims-to-reduce-south-african-vegetable-imports/
4. UNU-WIDER, Agricultural Development in Mozambique 2002–2020:
   https://igmozambique.wider.unu.edu/opinion/factsheet
5. Forum Macao / Jornal Notícias, Ministry of Agriculture statistics:
   https://forumchinaplp.org.mo/en/economic_trade/view/344
6. IPC Mozambique Acute Food Insecurity Snapshot, Oct 2025 – Mar 2026:
   https://www.foodsecurityportal.org/sites/default/files/2026-01/IPC_Mozambique_Acute_Food_Insecurity_Oct2025_Mar2026_Snapshot.pdf
7. Lusa, 1 Sept 2026, OCHA figures on food insecurity:
   https://aman-alliance.org/Home/ContentDetail/106306

