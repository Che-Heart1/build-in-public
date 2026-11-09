# Week 13 — I stopped building websites and started building a system that builds websites

## The idea

The last thing I built wasn't a feature. It was a boundary.

An integration contract: a document that defines the exact seams between the UI and the data layer. The injection placeholders the build script replaces. The form attributes the handler depends on. The filter mechanism that has to stay aligned with the CMS categories. Every load-bearing point where the two layers touch.

With that contract in place, the UI became disposable. You can redesign the entire frontend and the pipeline keeps working — because the seams are preserved. Without it, every visual change is a risk to the plumbing.

## What's in this folder

- `contract.md` — a hollow skeleton showing the structure of an integration contract (not the real one)
- `sanity.config.js` — a generic CMS config showing the repoint-by-ID pattern

The actual contract and template stay private. This shows the principle, not the working asset.

## What I learned

This is the shift from freelancer to product thinking.

A freelancer ships a site. A product builder ships a system where the site is an output, the contract is the constant, and the next client is a configuration — not a rebuild.

I started this to fix one problem for one restaurant. What ended up getting built was a repeatable delivery system. That's what this series was about.
