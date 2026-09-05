# Build in Public — NorthStar

> **13 weeks of building a repeatable headless website pipeline for
> hospitality businesses.**

This repository is the technical companion to my **13-week Build in
Public series on LinkedIn**.

I built the system to make premium restaurant and hotel websites
repeatable: one pipeline, different clients, without rebuilding the same
foundation from scratch every time.

Each week documents one engineering decision, problem, or lesson from
that build.

*New week added every Tuesday.*

------------------------------------------------------------------------

## 👋 Follow the build on LinkedIn

The repository shows the technical side. **LinkedIn shows the story
behind it.**

Follow the full 13-week series here:

**[→ Follow the Build in Public series on
LinkedIn](https://www.linkedin.com/in/iyinoluwa-nhyira-fashola-836188341)**

*New week added every Tuesday.*

------------------------------------------------------------------------

## 🧭 Explore the 13 weeks

*New week added every Tuesday.*

Jump into any week below:

| Week   | What it covers                                                                               |
|--------|----------------------------------------------------------------------------------------------|
| **01** | [What makes these sites different](./week-01/)                                               |
| **02** | [The goal was never one website. It was a pipeline.](./week-02/)                             |
| **03** | [The fix for my ugly emails wasn't a paid plan](./week-03/)                                  |
| **04** | [AI gave me code that returned 400. Here's how I found the lie.](./week-04/)                 |
| **05** | [A null error taught me how browsers actually load a page](./week-05/)                       |
| **06** | [Why I deleted my loading spinner](./week-06/)                                               |
| **07** | [The build script that almost ate my own source code](./week-07/)                            |
| **08** | [I build for two countries. Hardcoding the currency symbol would've been a bug.](./week-08/) |
| **09** | [I stopped writing docs for humans and started writing rules for my AI](./week-09/)          |
| **10** | [Letting an AI write everything at once is how you lose control](./week-10/)                 |
| **11** | [The cheapest architecture isn't the one with the lowest price tag](./week-11/)              |
| **12** | [One CSS property broke my navigation three different ways](./week-12/)                      |
| **13** | [I stopped building websites and started building a system that builds websites](./week-13/) |

------------------------------------------------------------------------

## 🔍 What's inside

Each weekly folder contains a **public, abstracted version** of the
engineering lesson behind that week's post.

The goal is not to publish the entire client system. The goal is to make
the engineering decisions understandable and reviewable.

You can use the weekly folders to:

- trace how the system evolved
- inspect the public artifacts
- understand the engineering decisions behind them
- connect each artifact back to the corresponding LinkedIn post

------------------------------------------------------------------------

## 🔐 What stays private

This repository intentionally does **not** contain:

- real API keys or credentials
- private client data
- proprietary client source code
- private production endpoints
- client-owned UI or other assets awaiting approval

The public artifacts demonstrate the **engineering principle**, not the
private implementation.

> **The lesson is public. The client's implementation stays protected.**

------------------------------------------------------------------------

## 🏗️ The bigger picture

The series starts with a simple question:

**How do you build a premium website for one hospitality business
without having to rebuild the entire system for the next one?**

The answer became a repeatable pipeline:

``` text
Client
  ↓
Configuration
  ↓
Content / CMS
  ↓
Build Pipeline
  ↓
Reusable Frontend
  ↓
Deployable Site
```

The interesting part wasn't any single technology.

It was designing the boundaries so the same system could keep working
when the **brand, content, locale, or client changed**.

------------------------------------------------------------------------

## 📈 From website builder to system builder

The 13 weeks follow that progression:

**Customer problem → Architecture → Debugging → Automation → Constraints
→ Productization**

By the end, the website is no longer the main artifact.

**The system that produces the website is.**

------------------------------------------------------------------------

## 🧩 Repository structure

``` text
build-in-public/
├── week-01/
├── week-02/
├── week-03/
├── ...
├── week-13/
└── README.md
```

Each week stands on its own, but the folders are designed to be read as
one progression.

------------------------------------------------------------------------

## 🔗 Keep exploring

- **[Read the full series on LinkedIn
  →](https://www.linkedin.com/in/iyinoluwa-nhyira-fashola-836188341)**
- **[Start with Week 01 →](./week-01/)**
- **[Jump to Week 13 →](./week-13/)** 

------------------------------------------------------------------------

### Built in public. Protected where it needs to be.

The work is real. The client implementation stays private until it is
approved for public release.

**Thanks for looking through the build.**
