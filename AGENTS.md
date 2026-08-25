# Alpha Brackets — Agent Guide

This file is for any AI agent or developer working on this codebase. Read this first.

## What this project is

Alpha Brackets is a software development agency site built with Next.js. The business is currently in launch phase with no real clients yet. Full business context (niche, pricing, services, positioning) is in [docs/business-strategy.md](./docs/business-strategy.md), not in this file. Read that before writing any marketing copy or making business decisions.

## Writing style rules

Before writing any user-facing copy (page content, buttons, headings, any text a visitor will read), read [DESIGN.md](./DESIGN.md) first. Short version: keep it simple, no jargon, no dashes as punctuation, no fabricated stats, no AI-sounding phrasing.

## Tech stack

- Next.js (App Router), TypeScript, Tailwind CSS
- GSAP for animations
- A separate CMS backend (see `src/lib/cms-client.ts` and `src/types/cms.ts`) that some pages fetch from

## Project structure

- `src/app/` — pages and routes. Also `icon.svg` (favicon), `opengraph-image.tsx` (social card, generated at build), `robots.ts` and `sitemap.ts`, all using Next file conventions.
- `src/components/sections/` — page-specific sections (e.g. `home/Header.tsx`)
- `src/components/shared/` — reused across multiple pages
- `src/data/` — static content (services, FAQs, discovery funnel copy). **One export per file.** Navigation data is split across `src/data/navigation/*.ts`, one file per list, with no barrel `index.ts` on purpose.
- `src/lib/cms-client.ts` — functions that fetch from the CMS backend
- `src/types/cms.ts` — auto-generated types from the CMS API schema. Do not hand-edit this file.
- `docs/` — business strategy, project notes, and SEO research (see below)

### `public/` assets

```
public/brand/                 brand identity, keep separate from decoration
public/images/backgrounds/    section background photos
public/images/patterns/       decorative overlays (PNG and SVG)
```

The old `public/assets/imgs/...` tree is gone. It held 35MB, of which 190 files were unused template leftovers. **Before adding an image, check it is actually going to render** — the previous tree accumulated ~33MB that nothing referenced. Roughly half the files under `src/` are likewise unreferenced template code, so do not assume a file is live just because it exists.

## Known gotchas from past work on this repo

- **CMS fetches can fail locally.** The CMS backend sometimes returns `AUTHENTICATION REQUIRED` in local dev. Several pages had their CMS fetches removed or replaced with empty typed arrays (`Blog[]`, `CaseStudy[]`, etc. from `@/types/cms`) so the site renders even with no live CMS content. Do not add a new CMS fetch to a shared layout or page without checking it fails gracefully.
- **`tsconfig.tsbuildinfo` can go stale.** If `tsc` seems to miss real type errors, delete `tsconfig.tsbuildinfo` and rerun. Do not assume a clean `tsc` run means the code is untouched just because the cache says so.
- **`.next` goes stale after moving files under `public/`.** Turbopack's dev cache keeps the old paths, so the dev server 404s on assets that moved while the source is already correct. This looks exactly like a broken reference and will send you hunting through components for nothing. **Delete `.next` and restart the dev server before believing an asset 404.** To tell the two apart: grep `.next/server` (production output, rebuilt from current source) against `.next/dev` (the dev cache). If only `.next/dev` has the old path, it is the cache, not your code.
- **Never invent data.** Fabricated stats (fake client counts, fake retention rates, placeholder logos presented as real clients) have been found and removed from this site before. If there is no real data yet, hide the section or say nothing, do not make something up.
- **The never-invent-data rule also covers claims about the market and the competition, not just claims about us.** This was learned the expensive way. `docs/company-overview.md` twice asserted that code rescue was "a category that barely exists in agency marketing", and a whole prioritisation decision rested on it. One search found seven agencies with dedicated rescue pages, one publishing prices, plus ranked listicles for the exact term. The docs were refusing to cite unverified external figures while asserting an unverified competitive claim about their own position. **Before writing a market or competitive claim into any doc, search for it. A claim about the world needs a source even when it flatters us, and especially then.**
- **Disabled routes and sections stay in the code, commented out, not deleted.** Pages like `/blogs`, `/team`, `/careers` are disabled with `notFound()` because there is no content yet, not because they are gone forever. Same pattern for homepage sections like Testimonials and Clients. Keep this pattern when disabling something new.
- **Windows and Git Bash path quirks.** A bare `/` argument to `curl` can get mangled by MSYS path conversion. Use `MSYS_NO_PATHCONV=1` if a curl command against localhost produces a weird Windows path error.

## Where the docs live

- [docs/company-overview.md](./docs/company-overview.md) — **start here for a full picture.** A dated snapshot consolidating business, positioning, funnel, website structure and technical state into one readable document, plus a decision log of what was tried and reversed. It deliberately duplicates the docs below, so **when they disagree, they win and the overview is stale.** Contains one internal-only section (pricing).
- [docs/business-strategy.md](./docs/business-strategy.md) — niche, positioning, market research, services, pricing, lead generation
- [docs/project-notes.md](./docs/project-notes.md) — pages, routes, and code changes made to match the strategy
- [docs/seo-keywords.md](./docs/seo-keywords.md) — SEO keyword research, with an honest note about what could and could not be verified
- [DESIGN.md](./DESIGN.md) — writing style and visual design rules

Keep these updated when you make a real strategic or structural change. Do not duplicate content between them, link to the other doc instead.
