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
    - `wcatCategories` – categories + cases for the WCAT Precedent Armory
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
  - Must be **data-driven** from `wcatCategories`.
  - Each category and case should be rendered by mapping over the data (no duplicated JSX across files).

When adding new UI, favor:

- Simple, accessible semantics (proper headings, lists).
- Clear calls to action (e.g. “Start your timeline”, “Log a call”, “Generate FOI request”).

---

## 5. WCAT Precedent Armory specifics

The **WCAT Armory** is a core feature. Treat it carefully.

Canonical data:

- Use the export in the data file (e.g. `wcatCategories` from `src/data/content.js`) as the **single source of truth** for WCAT content.

Each WCAT case should be represented roughly like:

```js
{
  citation: 'WCAT-YYYY-XXXXX',
  shortLabel: 'One-line label for what this case is about',
  summary: 'Plain-language 2–4 sentence summary of the facts and decision.',
  panelCare: [
    'Bullet points about what the WCAT panel focused on.',
  ],
  useItWhen: 'When a worker should consider citing this case in their own appeal.',
  tags: ['psych', 'chronic-pain', 'premature-rtw'] // if tags exist
}
The Armory page should:

Import wcatCategories once.

Map over all categories and all cases to render them.

Not:

Use .slice() or filtering that hides entries unless explicitly needed.

Render any outdated, static, hard-coded WCAT JSX from old versions.

If you’re fixing a bug where “only the old WCAT content shows,” prioritize:

Confirm the Armory route imports the correct data file.

Ensure there’s exactly one export of wcatCategories.

Remove or fully replace any old hand-coded WCAT layout in favor of the data-driven one.

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
