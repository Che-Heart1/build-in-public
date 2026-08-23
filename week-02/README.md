# Week 02 — The goal was never one website. It was a pipeline.

## The idea

Before writing a single line of client code, I had to decide what I was actually building.

The easy path was to hand-code a site for each client. Different codebase each time, different decisions each time. That's not a business — that's freelancing with extra steps.

So I made one decision early: every new client is a configuration of one engine, not a rebuild. Same pipeline, same quality, different brand and content.

## What's in this folder

- `index.html` — a template shell with content placeholders where the build step injects data
- `theme.css` — CSS custom properties for theming. New client = swap the tokens. No markup changes.

This is the "one engine, many clients" structure at its simplest. The real pipeline is more involved but the principle is the same.

## What I learned

The stack choice — vanilla HTML/CSS/JS, CSS custom properties, a Node build step — wasn't about preference. It was about keeping the pipeline rebrandable without a framework getting in the way.

Most people building for clients think about the next site. The goal here was to think about the tenth.
