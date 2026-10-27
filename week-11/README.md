# Week 11 — The cheapest architecture isn't the one with the lowest price tag

## The problem

The form handler was a paid third-party service. It worked, but it required an API key sitting in the frontend — visible to anyone who looked at the page source. And it was a monthly cost on top of hosting, on top of the CMS, on top of everything else.

I re-evaluated. The host already had a built-in form handler. No separate service. No API key in the browser. Spam handled by a honeypot field — a hidden input that bots fill automatically and humans never see.

One decision removed the cost, the exposed key, and the third-party dependency at the same time.

## What's in this folder

- `form.html` — a host-native form with no client-side API key and a honeypot for spam filtering

The security win is simple: nothing sensitive ships to the browser at all.

## What I learned

Cost is an architectural constraint, not something you think about after the fact.

The cheapest architecture isn't always the one with the lowest price on each component — it's the one that removes components entirely by using what the platform already provides. Security improved as a side effect.
