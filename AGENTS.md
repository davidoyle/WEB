# AGENTS.md – Worker’s Toolkit Web

This repository is the **Worker’s Toolkit** site: a Next.js web app to help injured workers in **British Columbia** navigate WorkSafeBC. Most of the text is written by a human and is **legally sensitive**. Treat it as the source of truth.

You are an AI agent (Codex, Copilot, etc.) helping with **code**, structure, and wiring – not inventing new law or free-styling content.

---

## 1. Tech stack & how to run

- Framework: **Next.js** (React)
- Styling: **Tailwind CSS**
- Language: JavaScript (no TypeScript yet)
- Package manager: `npm`

Commands (from repo root):

- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`

Assume a standard Next.js `src` layout unless you see otherwise.

---

## 2. Project structure (mental model)

Approximate layout (may not be exact, but follow existing patterns):

- `src/pages/`
  - Route components (e.g. Home, WCAT Armory, Evidence & Documentation, etc.)
- `src/components/`
  - Shared UI building blocks (e.g. `BeforeYouDoAnything`, cards, layout pieces)
- `src/data/content.js`
  - Central content/config objects:
    - `screwedSituations` – “Where are you getting screwed?” cards for the home page
    - WCAT data is managed in `src/wcat/` via `wcatCases`
    - Other structured content used across pages

**Rule:** When adding or changing content that appears in multiple places (cards, lists, “armory” entries), prefer updating / extending the **data file** and then mapping over it in components.

Do **not** re-introduce giant, copy-pasted JSX walls when a data-driven map exists or could exist.

---

## 3. Domain & content rules

This app exists to support workers in BC with **WorkSafeBC** claims, appeals, and documentation.

When you see long text blocks:

- Treat them as **user-authored legal/advocacy content**.
- You may:
  - Fix obvious typos if asked.
  - Re-flow into components (split into smaller sections, headings) while preserving wording.
- You must **not**:
  - Change legal meaning or promises.
  - Invent or alter statutes, policies, case citations, or timelines.
  - Generalize BC-specific content to other jurisdictions unless explicitly instructed.

Keep things like **disclaimers** and “this is not legal advice” language intact and visible where they already exist.

---

## 4. UX & tone guidelines

Tone:

- Plain-language, direct, non-corporate.
- No “inspirational” fluff or cutesy copy.
- Respectfully angry is fine; fake upbeat marketing tone is not.

UX patterns:

- `BeforeYouDoAnything` is a key safety/orientation component.  
  - Keep it at the top of major flows: home, WCAT, evidence center, etc., unless clearly inappropriate on a specific page.
- Home page:
  - “Where are you getting screwed?” is the main entry point.
  - Cards should map from `screwedSituations` data, not be hard-coded one-offs.
- WCAT Precedent Armory:
  - Must be **data-driven** from `wcatCases` in `src/wcat/`.
  - Categories and cases should be rendered by mapping over data (no duplicated JSX across files).

When adding new UI, favor:

- Simple, accessible semantics (proper headings, lists).
- Clear calls to action (e.g. “Start your timeline”, “Log a call”, “Generate FOI request”).

---

## 5. WCAT Precedent Armory

WCAT case data lives in `src/wcat/` — **NOT** in `src/data/content.js`.

The canonical data source is `src/wcat/index.js`, which exports `wcatCases` (an array).
Individual case files live in `src/wcat/cases/*.js`.
The expansion file is `src/wcat/cases/wcat-armory-expansion-2026.js`.

`WCATToolkit.jsx` imports `{ wcatCases }` from `../wcat` and groups cases by `category` using the `groupCategories()` function defined in that component.

Do **NOT** add WCAT cases to `src/data/content.js`.
Do **NOT** import `wcatCategories` — that export does not exist.

When adding new WCAT cases:
1. Create `src/wcat/cases/wcat-[id].js` following the existing case file structure
2. Import and add to the array in `src/wcat/index.js`
3. Ensure the case object has all fields required by `src/wcat/schema.js`

6. Change style & safety
When making changes:

Prefer minimal, targeted diffs:

Fix the bug, wire the data, don’t refactor the whole app unless asked.

Don’t rename or move route files unless explicitly instructed.

Keep existing CSS/Tailwind class patterns where possible so the design stays consistent.

If unsure about intent, preserve behavior and layout and leave explanatory comments rather than guessing.

You may add small comments like:

js
Copy code
// NOTE: Data-driven WCAT Armory; do not reintroduce hard-coded case content here.
to protect important patterns.

7. Non-goals
You are not:

Writing new legal strategies from scratch.

Replacing the worker’s voice with generic “content”.

Turning this into a generic boilerplate Next.js starter.

You are:

Wiring up the site so that the existing strategy, content, and tools actually render correctly and are easy for workers to use.
