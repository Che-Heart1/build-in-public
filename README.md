# Build in Public — Laudasol

> **13 weeks of building a repeatable headless website pipeline for
> hospitality businesses.**

This repository is the technical companion to my **13-week Build in
Public series on LinkedIn**.

I built the system to make premium restaurant and hotel websites
repeatable: one pipeline, different clients, without rebuilding the same
foundation from scratch every time.

Each week documents one engineering decision, problem, or lesson from
that build.

**Series complete: all 13 weeks are live.** See the result at [laudasol.com](https://laudasol.com).

------------------------------------------------------------------------

## 👋 Follow the build on LinkedIn

The repository shows the technical side. **LinkedIn shows the story
behind it.**

Read the full 13-week series, post by post:

**[→ Start the Build in Public series on LinkedIn](https://lnkd.in/p/dWkpe5cQ)**

*Note: two unrelated posts (NASA Space Apps and breast cancer awareness) appear in the feed around Week 12. They aren't part of the series.*

*The build series is complete. The story continues in the [Laudasol sales series on LinkedIn](https://lnkd.in/p/dC4WM7ad).*

------------------------------------------------------------------------

## 🧭 Explore the 13 weeks

All 13 weeks are live. Start at Week 01 or jump to any week below.

| Week   | What it covers                                                                               | LinkedIn |
|--------|----------------------------------------------------------------------------------------------|-------------|
| **01** | [What makes these sites different](./week-01/)                                               | [Read the post →](https://lnkd.in/p/dWkpe5cQ) |
| **02** | [The goal was never one website. It was a pipeline](./week-02/)                             | [Read the post →](https://lnkd.in/p/dBVm8ZS4) |
| **03** | [The fix for my ugly emails wasn't a paid plan](./week-03/)                                  | [Read the post →](https://lnkd.in/p/dbiX-AWQ) |
| **04** | [AI gave me code that returned 400. Here's how I found the lie](./week-04/)               | [Read the post →](https://lnkd.in/p/dY5gqTb8) |
| **05** | [A null error taught me how browsers actually load a page](./week-05/)                     | [Read the post →](https://lnkd.in/p/daeDPMGv) |
| **06** | [Why I deleted my loading spinner](./week-06/)                                                | [Read the post →](https://lnkd.in/p/dGTYvGC8) |
| **07** | [The build script that almost ate my own source code](./week-07/)                             | [Read the post →](https://lnkd.in/p/dVRTQQ9p) |
| **08** | [I build for two countries. Hardcoding the currency symbol would've been a bug](./week-08/)   | [Read the post →](https://lnkd.in/p/drq4Du_M) |
| **09** | [I stopped writing docs for humans and started writing rules for my AI](./week-09/)          | [Read the post →](https://lnkd.in/p/ddzQYepC) |
| **10** | [Letting an AI write everything at once is how you lose control](./week-10/)                  | [Read the post →](https://lnkd.in/p/djp6MUhE) |
| **11** | [The cheapest architecture isn't the one with the lowest price tag](./week-11/)            | [Read the post →](https://lnkd.in/p/d28PmXCq) |
| **12** | [One CSS property broke my navigation three different ways](./week-12/)                        | [Read the post →](https://lnkd.in/p/dZC72AK6) |
| **13** | [I stopped building websites and started building a system that builds websites](./week-13/) | [Read the post →](https://lnkd.in/p/dwm2kUuD) |

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
├── ...            (weeks 04–12)
├── week-13/
└── README.md
```

Each week stands on its own, but the folders are designed to be read as
one progression.

------------------------------------------------------------------------

## 🔗 Keep exploring

- **[Start the series on LinkedIn →](https://lnkd.in/p/dWkpe5cQ)**
- **[Read the final post →](https://lnkd.in/p/dwm2kUuD)**
- **[Start with Week 01 →](./week-01/)**
- **[Jump to the final week →](./week-13/)**

------------------------------------------------------------------------

### Built in public. Protected where it needs to be.

The work is real. The client implementation stays private until it is
approved for public release.

**Thanks for looking through the build.**
