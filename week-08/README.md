# Week 08 — I build for two countries. Hardcoding the currency symbol would've been a bug.

## The problem

The pipeline serves clients in Ghana and the UK. Different currencies, different symbols, different formatting rules.

If I'd hardcoded the pound sign into the template, every Ghana client would need a manual find-and-replace before launch. Every single time. That's not a pipeline — that's a checklist waiting to be forgotten.

## What's in this folder

- `currency.js` — shows Intl.NumberFormat formatting the same price across multiple locales and currency codes

The locale and currency code come from per-client config. The template never changes. Same function, different market, correct output every time.

## What I learned

A hardcoded currency symbol is fine when you have one client in one market. It becomes a bug the moment you cross a border.

This is what designing for the tenth client actually looks like in practice — small decisions made early that would be painful to fix later.
