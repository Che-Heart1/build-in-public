# Week 06 — Why I deleted my loading spinner

## The problem

The menu was being fetched from the CMS in the browser on every page load. There was a visible delay, a layout shift, and the content wasn't showing up in search engines because it wasn't in the HTML when the page first arrived.

I could have added a skeleton loader or cached the response. That would have hidden the symptom.

Instead I asked why the browser was doing this work at all. The menu only changes when the owner updates it in the CMS. There's no reason to fetch it fresh on every visit.

## What's in this folder

- `build.js` — a Node script that fetches mock data at build time and injects it into an HTML placeholder

This is the core idea: run the fetch once at deploy, write the result into the HTML. The browser receives a complete page with no runtime fetch needed.

Real CMS queries and project IDs are not included — the mock data is enough to show how the pattern works.

## What I learned

The spinner wasn't a UX problem. It was a sign that the architecture was doing work in the wrong place.

Moving the fetch to build time fixed the performance, the layout shift, and the SEO issue in one decision.
