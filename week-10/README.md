# Week 10 — Letting an AI write everything at once is how you lose control

## The problem

Early on I let the agent run without boundaries. Described what I wanted, said go, came back to a wall of generated code. It mostly worked. But I hadn't reviewed anything at each stage and hadn't committed anything atomic. If something broke, there was one massive changeset to unpick.

So I hardwired a protocol. Four milestones: scaffold, backend, forms, data layer. The agent builds one, stops, and waits for a git commit before touching the next. Every boundary gets a review before we cross it.

## What's in this folder

The artifact this week is the commit history itself, not a code file.

Four atomic commits, one per milestone, with the agent stopping at each boundary:

```
feat: scaffold static shell and theme tokens
feat: wire reservation form payload
feat: add build-time data injection
feat: add data layer and empty-state handling
```

## What I learned

AI coding tools are fast. That's the risk as much as the benefit.

The protocol keeps me in the architect role and lets the agent handle the implementation. The state lives in the committed code and the rulebook — not in the agent's context window. Clear the context, continue from the last commit, nothing is lost.
