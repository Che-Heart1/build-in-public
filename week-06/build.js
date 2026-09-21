// build.js (illustrative) — runs once at deploy, never in the browser
// Fetches data at build time and injects it into HTML.
// Result: browser receives a complete page — no spinner, no layout shift, no SEO problem.

import { readFile, writeFile } from "node:fs/promises";

// In a real build this comes from your CMS.
// Here: mock data so the lesson is clear without exposing anything real.
const items = [
  { name: "Sample Dish",  price: 25, category: "Mains" },
  { name: "Another Dish", price: 18, category: "Starters" },
];

// Build the HTML string from the data
const listHtml = items
  .map((i) => `<li class="menu-item" data-category="${i.category}">
    <span class="name">${i.name}</span>
    <span class="price">${i.price}</span>
  </li>`)
  .join("\n");

// Read the source template — never modify it
const template = await readFile("src/index.html", "utf8");

// Replace the placeholder with the generated HTML
const output = template.replace("<!--MENU-->", `<ul>${listHtml}</ul>`);

// Write to dist — never back to src
await writeFile("dist/index.html", output);

// The browser now receives complete HTML on first load.
// No fetch. No spinner. Fully indexable.
