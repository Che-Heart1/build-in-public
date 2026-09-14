# Week 05 — A null error taught me how browsers actually load a page

## The problem

Scripts were running. The logic was right. But getElementById kept coming back null.

The browser parses HTML top to bottom. A script sitting in the head runs before the parser has reached the body — so any element you try to query doesn't exist yet at that moment. Not missing from the HTML. Just not parsed yet.

## What's in this folder

- `index.html` — shows the broken pattern (script in the head querying an element that hasn't been parsed) and both fixes side by side

Two ways to fix it: place the script just before the closing body tag, or use the defer attribute. Defer is cleaner — the script stays in the head where it belongs and you never have to think about placement again.

## What I learned

Browser execution order follows rules. Once you understand the rules, this whole class of bug stops happening.

I use defer by default on every external script now. It costs nothing and removes the problem permanently.
