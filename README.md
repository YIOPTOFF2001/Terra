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


## User story 

## User Stories

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

- Design
- Developement
- Testing
- Analysis 
 


# Design 

## Dashboard components required 
- What should the dashboard contain based on the requirements provided?

To understand what it should contain, we need to figure out what questions we need the dashboard to answer:

1. Who are the top 10 YouTubers with the most subscribers?
2. Which 3 channels have uploaded the most videos?
3. Which 3 channels have the most views?
4. Which 3 channels have the highest average views per video?
5. Which 3 channels have the highest views per subscriber ratio?
6. Which 3 channels have the highest subscriber engagement rate per video uploaded?

For now, these are some of the questions we need to answer, this may change as we progress down our analysis. 


## Dashboard mockup

- What should it look like? 

Some of the data visuals that may be appropriate in answering our questions include:

1. Table
2. Treemap
3. Scorecards
4. Horizontal bar chart

