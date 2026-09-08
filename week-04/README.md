# Week 04 — AI gave me code that returned 400. Here's how I found the lie.

## The problem

After fixing the form payload, I wired up the integration and tested it live. The browser threw a 400 Bad Request. The code looked fine. Nothing obvious.

What had happened: the AI generated integration code that mixed two versions of the same API. A legacy endpoint in one place, a current auth field from a newer version in another. It compiled, it ran, and it failed silently until it hit the server.

## What's in this folder

- `api.js` — shows defensive API integration: explicit status checking, try/catch, and handling the difference between a network failure and a contract failure

The fix meant going back to the actual API documentation and comparing every field name against what the generated code had produced. The network tab, not just the code.

## What I learned

That's the part AI can't do for you — verify its own output against a live contract.

Working code teaches you the happy path. Broken code teaches you how the system actually works. I'd rather debug a 400 and understand the integration than have it work without knowing why.
