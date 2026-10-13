# Week 09 — I stopped writing docs for humans and started writing rules for my AI

## The idea

At some point I had a PRD — a human-readable document explaining the product. It was fine. But every new session with the AI agent started with me re-explaining the architecture, re-stating what had already been decided, and correcting the same assumptions.

So I replaced it with a machine-readable rulebook. A single file the agent loads at the start of every session. It locks the stack, the decisions that can't change, and the integration contract — the exact points where the UI meets the data layer.

The same file holds the compliance layer: privacy policies templated per jurisdiction, present from the first scaffold rather than bolted on at the end.

## What's in this folder

- `RULES.md` — a hollow skeleton showing the structure of a machine-readable rulebook (operating rules, locked architecture, integration contract, compliance, build config)
- `privacy.html` — a shell privacy policy with per-client placeholders

The actual rulebook stays private. This shows the shape, not the contents.

## What I learned

The rulebook doesn't make the AI smarter. It makes it consistent.

And consistency across clients, across sessions, is the whole point of a pipeline. Without it, every session starts from scratch.
