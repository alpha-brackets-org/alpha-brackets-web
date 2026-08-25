# Alpha Brackets — Project & Site Changes

Status: Phase 1 (pre-client) launch. No clients yet, no CMS content yet — this document tracks site pages, routes, and code changes made to match the business strategy. For niche/positioning, services, pricing, and lead-gen strategy, see [business-strategy.md](./business-strategy.md).

---

## 1. Pages — Launch Phase 1

### Live
- `/` — home: hero, featured services (filtered to the 5 Featured/Supporting services), a process section (Discovery, Design, Build, Test and Launch, Scale), a simplified discovery funnel showing the packages and what each includes (no price shown, see below), and blog insights (self-hides with no content). See "Homepage sections disabled" below for what was pulled and why.
- `/services` + `/services/[id]` — full catalog (10 services, featured/supporting/catalog-only split per business-strategy.md Section 2)
- `/contact` — lead-gen entry point
- `/case-studies` + `/case-studies/[slug]` — currently empty/disabled pending static content (see Open Work below)
- `/about` — trust/credibility substitute while there are no testimonials
- `/faqs` — pre-qualifies pricing/process questions before contact
- `/privacy`, `/terms`, `/cookies` — legal, low effort, unchanged

### Disabled (return 404 via `notFound()`, code kept for later re-enable)
- `/blogs`, `/blogs/[slug]` — no content pipeline yet; revisit once there's a cadence
- `/team`, `/team-details` — no proof/case studies yet to back up a team story
- `/careers` — no clients yet; reads as premature/aspirational

---

## 2. Technical Changes Made

**Navigation & routing**
- `src/data/navigation.ts` — "Blogs" commented out of `RESOURCE_LINKS`; Team/Careers already commented out of `COMPANY_LINKS`
- `src/components/layout/Navbar.tsx` — removed blog-teaser "Popular Insights" search panel, updated search placeholder copy

**Routes disabled (404 via `notFound()`)**
- `src/app/blogs/page.tsx`, `src/app/blogs/[slug]/page.tsx`
- `src/app/team/page.tsx`, `src/app/team-details/page.tsx`, `src/app/careers/page.tsx` (already done pre-existing)
- `src/app/case-studies/[slug]/page.tsx` (renamed from `[id]` — see below; no static data source yet)

**CMS fetches removed from render paths (was causing every page to 500 — `WebLayout.tsx`'s global `getCaseStudies()` call was throwing `AUTHENTICATION REQUIRED` against the live CMS)**
- `src/components/layout/WebLayout.tsx` — no longer fetches case studies globally
- `src/app/page.tsx` (home) — no longer fetches blogs/case-studies/testimonials
- `src/app/faqs/page.tsx` — no longer fetches FAQs
- `src/app/services/[id]/page.tsx` — no longer fetches case studies for "Featured Case Studies" section
- `src/app/case-studies/page.tsx` — no longer fetches; renders empty grid (placeholder)

**Case-studies route now uses `slug`, not `id` (matches the CMS's own `CaseStudy.slug` field in `src/types/cms.ts`)**
- Renamed `src/app/case-studies/[id]/page.tsx` → `src/app/case-studies/[slug]/page.tsx`
- `src/lib/cms-client.ts` — renamed `getCaseStudyById` → `getCaseStudyBySlug`, now filters strictly on `cs.slug` (dropped the old `|| cs._id === id` fallback, since the CMS-provided `/case-studies` list endpoint has no slug query param — client-side filter against the list response is the only CMS-supported lookup path; there's no separate by-slug endpoint to call instead)
- All existing internal links (`Navbar.tsx`, `FeaturedCaseStudies.tsx`, `Grid.tsx`, `Detail.tsx`, home `CaseStudies.tsx`) already built hrefs from `.slug` — only the route folder and the lookup helper needed renaming

**Replaced `never[]` placeholder typings with proper CMS-provided types** (was a type-safety shortcut, not a real type) — `src/app/page.tsx` (`Blog[]`, `CaseStudy[]`, `Testimonial[]`), `src/app/faqs/page.tsx` (`Faq[]`), `src/app/case-studies/page.tsx` (`CaseStudy[]`), all imported from `@/types/cms`

**Nav trimmed to Featured + Supporting services (business-strategy.md Section 2)**
- Added `FEATURED_SERVICE_LINKS` allowlist in `src/data/navigation.ts` (the 5 services: SaaS Platform Development, AI & Intelligent Integrations, Web Application Development, UI/UX Design, Business Automation)
- `src/components/layout/Navbar.tsx` mega-menu now filters `services` against that allowlist before rendering — the other 5 services (Mobile, DevOps, SEO, Ads, Growth/Analytics) are no longer shown in the nav dropdown, but stay live at `/services` for the full catalog

**Homepage sections disabled — were rendering broken or fabricated content with zero real client data**
- `src/app/page.tsx` — commented out `<CaseStudies>` (renders an empty scroll-pinned "Products that moved the needle" section with no case-studies data — visibly broken, not just quiet), `<Testimonials>` (empty Swiper carousel with visible but non-functional prev/next nav), and `<Clients>` entirely
- `<Clients>` (`src/components/shared/Clients.tsx`) is the more serious one: it claims **"More than 200+ companies trusted our engineering worldwide"** and renders a logo marquee from `src/data/clients.ts` (`CLIENT_BRANDS`) — those are generic template placeholder assets (`c1-c5.svg`, `b1-b6.png`), not real client logos. This was an active false claim, not just an empty section, and has been fully removed from the homepage rather than just hidden behind empty data
- `src/components/sections/home/Header.tsx` — removed the **"92% Client Retention Rate"** stat from the hero metrics bar for the same reason (unverifiable with zero clients); the other two metrics (4–6 wk MVP delivery, 10× architecture headroom) are defensible claims about capability, not client outcomes, so they stayed
- `ContentPillars` (blog insights) needed no fix — it already self-guards with `if (!articles.length) return null`, so it safely renders nothing until blogs are re-enabled
- All three disabled components/imports are commented out, not deleted — trivial to re-enable once real case studies, testimonials, and client logos exist

**Services 9 & 10 reframed as software-build services, not marketing/growth services (business-strategy.md Section 2)**
- `src/data/services.ts` — renamed and rewrote records `ab009`/`ab010`: `ai-driven-digital-marketing` → `marketing-campaign-tooling` ("Marketing & Campaign Tooling" — custom dashboards/reporting/content-workflow tools for marketing teams and agencies), and `growth-and-analytics` → `analytics-reporting-platforms` ("Custom Analytics & Reporting Platforms" — bespoke BI/analytics dashboard builds). Both stay catalog-only (not in `FEATURED_SERVICE_LINKS`, so still excluded from the homepage grid and navbar mega-menu), same visibility as before — only the positioning/content changed, not where they're surfaced.
- Old slugs had no other references in the codebase (grepped before renaming), so no redirects or other lookups needed updating.
- `/services` page content also restructured into data files + components: "How We Work" steps moved to `src/data/process.ts` (rendered by `src/components/sections/services/ProcessStrip.tsx`), the "Featured Work" project list moved to `src/data/case-studies.ts` (rendered by `FeaturedWork.tsx`), and the services grid extracted into `ServicesGrid.tsx` — `src/app/services/page.tsx` is now a thin composition of these plus the hero.

**Verified working (200, no CMS dependency):** `/`, `/faqs`, `/services`, `/services/[id]`, `/case-studies`, `/case-studies/[slug]` (404s correctly on any slug), `/contact`
**Verified disabled (404):** `/blogs`, `/blogs/[slug]`, `/team`, `/team-details`, `/careers`

**Known issue, self-resolved:** mid-session, `src/types/cms.ts` briefly appeared to lose its type exports (a `tsc` run showed every CMS type as missing). Re-checked later in the same session and the file was intact with all exports present. This was likely a stale build-cache read (`tsconfig.tsbuildinfo`) rather than an actual file regeneration. No code change was needed to fix it, but if it recurs, check `tsconfig.tsbuildinfo` staleness before assuming the CMS schema sync script touched the file.

**Homepage services grid was showing all 10 services, not the Featured 5**
- `src/components/shared/Services.tsx` calls `serviceRepo.getRootServices()`, which returns all 10 active services. The nav mega-menu had already been filtered to the 5 Featured/Supporting services (see above), but this homepage grid was never updated to match, so it still showed Mobile, DevOps, SEO, Ads, and Growth/Analytics front and center.
- Fixed by filtering the result through the same `FEATURED_SERVICE_LINKS` allowlist from `src/data/navigation.ts`, so the homepage and the nav now agree.

**Hero and discovery funnel rewritten to match the actual positioning and offer model**
- `src/components/sections/home/Header.tsx`: the old badge and headline ("For Scaling Operators & Domain-Expert Founders", "From Architecture to Launch in Compressed Cycles") never mentioned AI, SaaS, or MVP work at all, despite that being the entire positioning in business-strategy.md. Rewritten to a plain "AI Native MVPs For SaaS Founders" badge and a simple headline about shipping an MVP in weeks.
- `src/components/sections/home/DiscoveryFunnel.tsx`: fully rewritten. The old version had two separate persona tracks (a free, open ended "Scalability Audit" for one persona, and a "mandatory" paid discovery phase for the other, with the fee credited back). One persona's copy also said funding was "ideally" expected, which directly contradicted business-strategy.md's ICP ("funding status is not a qualifier, budget is"). Replaced with one simple funnel matching business-strategy.md Section 5: free discovery call, fixed price proposal within 48 hours, weekly demo build, optional scale retainer. Shows what each package includes, no price (see "Pricing removed from the site" below).
- `src/data/discovery.ts`: the `EXPECT_ITEMS` list already existed with good content but was never used anywhere. It is now used in the rewritten funnel. Removed `AUDIT_PILLARS` and `DISCOVERY_DELIVERABLES`, which were only used by the old funnel copy and are no longer referenced anywhere.
- Added `src/components/sections/home/Process.tsx`, a new homepage section using the existing shared `ProcessTimeline` component with a plain five step process (Discovery, Design, Build, Test and Launch, Scale). This did not exist anywhere on the site before, even though business-strategy.md Section 6 already called for it.
- Added `PhoneCall` and `Repeat` to the icon list in `src/declarations/icons.tsx` for the new funnel steps.

**New guide files added at the repo root**
- `DESIGN.md`: writing style rules (simple language, no jargon, no dashes used as punctuation, no fabricated stats) plus the current visual design conventions.
- `AGENTS.md`: general guide for anyone (human or AI) working on this repo. Covers tech stack, structure, and known gotchas from this project (CMS auth failures in local dev, stale `tsconfig.tsbuildinfo`, never inventing data, keeping disabled routes commented out rather than deleted).
- `CLAUDE.md`: points to `AGENTS.md` and restates the writing rules so they are always applied, plus a reminder to keep `business-strategy.md` and `project-notes.md` up to date when strategy or code changes.

**Added the site tagline and fixed more jargon and fabricated claims found across the site**
- `src/data/site-config.ts`: added `tagline: "Future-Ready Tech"` so it is defined in one place, not hardcoded wherever it is used.
- `src/app/layout.tsx`: the page title, description, keywords, and social sharing text were all still using the old jargon positioning (phrases like "strategic technology partner," "zero-waste engineering," "compressed deployment cycles") and the old headline with an em dash. The keyword list also did not match anything from `docs/seo-keywords.md`. Rewritten in plain language, using real keywords from that research, and now includes the tagline.
- `src/components/layout/Footer.tsx`: the brand description had the same jargon problem, rewritten in plain language with the tagline shown as a short label above it. Also found and fixed a fabricated claim in the newsletter box ("Join 500+ operators"), the same kind of issue as the "200+ companies" claim removed earlier. There are no real subscribers yet, so the copy no longer states a number.
- `DESIGN.md`: added a real Theme section (actual colors, fonts, and radius values pulled from `src/app/globals.css`, not invented) and a Tagline section explaining that "Future-Ready Tech" is a short label to use consistently, not something to work into every sentence.

**Fixed a layout bug in the homepage pricing cards**
- `src/components/sections/home/DiscoveryFunnel.tsx`: the MVP Sprint and AI Native MVP cards sit side by side in a grid. Because one card's description was one line and the other's wrapped to two lines, CSS Grid stretched both cards to equal height, leaving a large empty gap at the bottom of the shorter card. Replaced the single paragraph in each card with a short feature list (what's included), and used `mt-auto` so the list sits at the bottom of the card on purpose. Both cards now fill their height with real content instead of dead space, and it is clearer what each package includes.

**Pricing removed from the site entirely (reverses the earlier "show starting at $X" decision)**
- A visible starting price turned out to be a real risk: it is easy to screenshot and compare against a cheaper competitor's number with no context on what is included, inviting price shopping instead of qualifying leads. business-strategy.md Section 4's pricing display rule has been updated to reflect this reversal.
- `src/components/sections/home/Header.tsx`: removed the "$2,500 MVP Starting Price" hero metric. Back to two metrics (delivery time, architecture headroom).
- `src/components/sections/home/DiscoveryFunnel.tsx`: removed the price from both package cards. They now show the timeline and feature list only. The closing line under the cards no longer states a number, it says price is quoted on the free call.
- `src/app/layout.tsx`: the public meta description also stated "starting at $2,500", visible in Google search results. Removed.
- Ran a full search across `src/` for any other exposed price or "Starting at" text. None found.
- Price is now only discussed verbally on the discovery call. The full cost calculation behind each price (hours, overhead, margin) is documented separately in [pricing-and-cost-calculation.md](./pricing-and-cost-calculation.md), an internal document not meant for the site or for clients.

---

## 3. Open Work (not yet done)

1. ~~Homepage hero/CTA copy rewrite~~. **Done** (see above).
2. **`/case-studies` re-enable** — page is now disabled via `notFound()`. Re-enable once: (a) PDF write-up exists for at least one project, (b) email delivery (Resend or similar) is wired up, (c) email capture form on detail page is built. Do not re-enable with the current broken card → 404 detail page flow.
3. ~~Pricing on the site~~. **Reversed on purpose.** See above and [pricing-and-cost-calculation.md](./pricing-and-cost-calculation.md).
4. **Real testimonials and client logos** needed before re-enabling `<Testimonials>` and `<Clients>`.
5. **About page, contact page** — full pass for leftover jargon and any unverified claims. Not yet done.

For strategic open items see [business-strategy.md](./business-strategy.md)'s "Open strategic work" section.

---

## 4. Positioning Overhaul (completed)

Full content and positioning rewrite to shift from vendor framing to product partner framing. Changes:

**Homepage — `src/components/sections/home/Header.tsx`**
- Headline rewritten: "Launch Your SaaS MVP in Weeks, Not Months" → "From Idea to a Product People Actually Pay For."
- Sub-headline rewritten: now mentions post-launch support ("help you think through what comes after launch")
- `10x Architecture Built For` metric renamed to `10x Load-Ready Architecture` — the meaning (built to handle 10x load without a rewrite) is now explicit

**Homepage — `src/components/sections/home/ThinkingSection.tsx` (new)**
- New section: "How We Think" — three opinion cards proving expertise without requiring testimonials or case studies
- Cards: (1) Architecture first, code second, (2) AI planned in not bolted on, (3) Shipping is the start not the finish
- Placed after hero, before Services grid
- Scroll-triggered GSAP animation, matches design system

**Homepage — `src/components/sections/home/DiscoveryFunnel.tsx`**
- Package card descriptions rewritten from feature lists to outcome-framed language
- MVP Sprint: "A working product your first users can sign up to and actually use"
- AI Native MVP: honest about approach selection (API, RAG, or custom) — removed "not a wrapper around ChatGPT" which was a technology claim, not a quality claim
- Added closing paragraph: "We also help you think through what happens after launch... You get a team, not just code."

**Process data — `src/data/process.ts`**
- Step 2 renamed from "Architecture & Design" to "Brand & Design"
- Description now covers both client types: those who arrive with a brand and those who need one built

**`/case-studies` — `src/app/case-studies/page.tsx`**
- Disabled via `notFound()`. All code commented out for later re-enable. See re-enable criteria in Open Work above.

**`/services` — `src/app/services/page.tsx`**
- Hero rewritten: "What We Build / Everything your MVP needs under one roof" → "Your build partner — from idea to revenue / We don't just build your product. We help you ship one people will pay for."
- "See Our Work" CTA (linked to now-disabled /case-studies) replaced with "Talk to us" → /contact
- `FeaturedWork` section removed (linked to disabled case study detail pages). Component and data kept, just not rendered.
- Metadata description updated to match new positioning

**Stats cleanup — `src/data/services.ts`**
- Removed: `100% Satisfaction`, `60% Work Reduced`, `50% Faster LCP`, `40% Cost Reduced`, `0 Tech Debt`, `70% Time Saved` — all unverifiable with zero clients
- Kept: `4–6 Weeks to MVP` (honest, controlled by us), `24/7 AI Availability` (AI uptime is real), `5+ Models Supported` (defensible)

---

## 5. Content Refinement — Round 2 (completed)

A second round of updates to clean up unverified statistics, navigation links, and service-level copy alignment with the partner positioning.

**Homepage — `src/components/sections/home/Header.tsx`**
- Sub-headline updated to: *"We design, build, and launch your SaaS product in 4 to 6 weeks. Real progress, not promises. And we stay until your first paying users."* Removes the Cost ("Fixed price") and Tech Jargon ("AI built in") leads.

**Tagline & Configuration — `src/data/site-config.ts`**
- ~~Updated `SITE_CONFIG.tagline` from `"Future-Ready Tech"` to `"From idea to product"`.~~ **Reverted.** The tagline is `"Future-Ready Tech"` again, matching the Tagline section of [DESIGN.md](../DESIGN.md), which never changed. See "Contact Methods & Static Site Pass" below.

**Navigation & Footer Cleanup**
- `src/data/navigation.ts`: Commented out the `"Case Studies"` link from `RESOURCE_LINKS` so it no longer appears in the navbar dropdown, mobile menu, or footer resources column while the page is disabled.
- `src/components/layout/Navbar.tsx`: Removed the `"Featured Case Study"` sidebar container from the services mega-menu. The services grid now renders as the sole, full-width content (w-[600px]).
- `src/components/layout/Footer.tsx`: Updated brand description to: *"We design, build, and launch SaaS products for founders who want a product people pay for, not just a prototype."*

**Offers Placement — `/services` Page**
- `src/app/services/page.tsx`: Imported and rendered the `DiscoveryFunnel` component right after the hero and before the `ServicesGrid` so that visitors landing on `/services` see the core MVP Sprint and AI Native MVP packages.

**Individual Service Pages Template**
- `src/app/services/[id]/page.tsx`: Removed the empty `FeaturedCaseStudies` component render and imports since no client case study data is live.
- `src/components/sections/services/ServiceIntro.tsx`: Updated default fallback headers and description to match the partner voice (e.g. "What we build, and how.").
- `src/components/sections/services/ServiceHeader.tsx`: Changed section label from "Service Expertise" to "What We Do", and simplified discovery sidebar box copy to: *"Book a free 30 minute call. We will talk through your idea and tell you honestly what it takes to build it."*

**Services & Stats Cleanup — `src/data/services.ts` & `src/data/stats.ts`**
- `src/data/stats.ts`: Cleaned up the static stats file by removing unverified fields (`100% Client Satisfaction`, `100+ Projects`, `14+ Verticals`, `10+ Years`, `60% Work Reduced`). Retained average MVP timelines, AI uptime, and load scalability.
- `src/data/services.ts`: Cleaned up cost savings/automation stats and rewritten descriptions to match partner positioning:
  - Removed "60% manual time reduction" from Business Automation why-choose-us.
  - Removed "30-40% cloud bill savings" from DevOps why-choose-us.
  - Simplified Web Application Development description and Mobile App Development description to remove vendor jargon ("high-velocity", "bridge industry knowledge", etc.).

---

## 6. Service Pages Pass (completed)

A full pass over `/services` and the service detail pages, which had never been brought in line with the homepage work above.

**Tech stack section removed from every service page**
- `src/components/sections/services/ServiceIntro.tsx` rendered one global logo strip (`src/data/tech-stack.ts`) headed "Powered by Industry Standards" on all ten pages: Next.js, TypeScript, Node.js, OpenAI, AWS, PostgreSQL, Docker, Tailwind. It was identical everywhere, so the UI/UX Design page advertised Docker and the SEO page advertised PostgreSQL. The Business Automation page listed none of the tools its own copy names. The `desc` field on each entry was written but never rendered, and several icons were mismatched (Next.js showed a phone icon, Tailwind a paint palette).
- Removed because the stack is chosen per project, so a fixed list claims something that is not true. Replaced with one plain line saying we pick the tools to fit the project and will say what and why on the first call.
- `src/data/tech-stack.ts` and `src/types/tech-stack.ts` are kept but no longer referenced by live code. `src/components/sections/home/TechStack.tsx` was already unrendered.

**Every service now has its own solutions list**
- Seven of ten services had no `solutions` field, so `ServiceIntro` fell back to `DEFAULT_SOLUTIONS`, a generic agency list. The result was the UI/UX Design page listing DevOps and SEO under "Solutions We Provide", and the SEO page listing mobile development.
- `src/data/services.ts` now defines a real `solutions` list per service. `DEFAULT_SOLUTIONS` stays exported as a safety net but should no longer be reachable, and carries a comment saying not to fill a new service with it.

**Full copy rewrite of `src/data/services.ts`** against DESIGN.md
- Removed roughly 60 em and en dashes used as punctuation. `"4–6"` became `"4 to 6"`.
- Removed unverifiable claims: "WCAG 2.1 AA compliance by default", "every design decision is backed by user research data", "crash-free", "we measure the exact time your team saves", "Transparent Monthly Reports", "critical for field and healthcare use cases" (implied healthcare experience), and "no painful rewrites at 10× scale". The accessibility bullet was rewritten to what we actually do (check contrast, keyboard use, and labels, and say when a full audit is needed) rather than deleted.
- Removed the two fabricated `stats` on AI & Intelligent Integrations: "5+ Models Supported" had no basis, and "24/7 AI Availability" was a claim about a model vendor's uptime, not ours.
- Stripped jargon: "Enterprise-Grade Security", "Robust API Foundations", "Startup-Lean Delivery", "production-grade AI pipelines", "Future-Ready Architecture", "Dev-Ready Handoff", "IaC-first", "MarTech", "heuristic evaluations", "Information Architecture".
- De-duplicated boilerplate that repeated across records ("We don't disappear after launch", "not a generic template", "before a single line of code").

**Duplicate closing CTA removed from service detail pages**
- `PageCTA` is rendered globally by `WebLayout` and auto-selects its `services` variant for any `/services` path, so `ServiceCTA` on the detail page was a second copy of the same message. Both were headed "Ready to build what's next?", back to back.
- `ServiceCTA` is no longer rendered. The file is kept, with a comment saying why, and its "Serving clients globally" trust line was removed so the false claim is not waiting to be re-enabled. It now says the first call is free.
- All five `PageCTA` variants were rewritten in plain language. They still carried the old jargon positioning that was stripped from the homepage months ago ("compress your time-to-market", "zero-waste engineering", "revenue leakage, operational friction, and scalability bottlenecks"). The `general` variant renders on the homepage, so that one was live.

**Per-service stats instead of the same three numbers everywhere**
- `src/components/shared/WhyChooseUs.tsx` ignored per-service stats and always injected the global `STATS` list, sliced to four when only three existed, so the two-column grid was permanently lopsided and every service page showed identical figures. It now takes an optional `stats` prop (added to `WhyChooseUsProps` in `src/types/ui.ts`), leads with the page's own numbers, and tops up from `STATS` skipping any label already covered.
- `ServiceIntro`'s stat grid now switches to one column when there is a single stat, so a lone card fills the row instead of sitting half width (DESIGN.md's rule about cards not filling their space by accident).

> ⚠️ **This entry was wrong and has been superseded.** The "top up from `STATS`" behaviour described above did not fix the identical-figures problem, it *caused* it, and the `ServiceIntro` stat grid was itself a duplicate of the one in `WhyChooseUs`. See "Service page stats made service-specific" below.

**Heading splits made deliberate rather than guessed**
- `ServiceHeader` italicised everything after the first word, so "Marketing & Campaign Tooling" began its italic run on a bare "&". It now splits after "&" where one is present, giving "Marketing &" plain and "Campaign Tooling" emphasised.
- `WhyChooseUs` blindly italicised the last two words. All ten `why_choose_us` titles are now written to end with "Alpha Brackets", which makes the last two words the intended split, and the component guards short titles. Both the data file and the component carry a comment saying so.

**`src/app/services/[id]` renamed to `[slug]`**
- The value in that segment was always a slug, passed to `getServiceByPragmaLinkCached` and matched against `s.pragma_link`. URLs did not change and every link builder already used `pragma_link`. This also brings services in line with the `/case-studies/[slug]` rename above.
- Added `generateStaticParams` returning the ten `pragma_link` values. **It does not currently prerender anything**: the root layout calls `getPortfolioId()`, which reads request headers to resolve the tenant, and that opts every route on the site into dynamic rendering. That is deliberate for multi-tenancy, so the function stays as the source of valid params, with a comment explaining the situation. If the tenant lookup ever moves out of the layout, the ten pages become static with no further change.
- Removed the dead `caseStudies = []` and `relatedProjects` computation and the unused `CaseStudy` import. The filter was broken regardless: it compared `cs.services` free text like `"SaaS Dev"` against a slug like `"saas-platform-development"` and could never match. Noted in `src/data/case-studies.ts` so it is not re-enabled as-is.
- Also stopped passing `service.description` into `ServiceIntro`, since the hero directly above already renders the same sentence.

**`/services` page**
- Two hero buttons both pointed at `/contact` ("Start a Project" and "Talk to us"). Now one.
- Hero eyebrow, body, and both metadata descriptions rewritten without em dashes. Dropped a `shadow-lg` that does nothing, since shadows are disabled globally.

**Stats and process data**
- `src/data/stats.ts`: removed "24/7 Product AI Uptime", a number on something we have not measured and which described a model vendor's uptime rather than ours. "4–6 Weeks to MVP" became "4 to 6". "10x Load Scalability" became "10x Load Without A Rewrite" so the claim states what it means, matching the homepage metric.
- `src/data/process.ts`: dashes removed, step 02 shortened so it no longer runs much taller than the other cards in the fixed five-column `ProcessStrip` grid, and step 03 reworded so it no longer duplicates copy in `services.ts`. `ProcessStrip` has a comment noting the grid is fixed at five columns.

**Dead prop plumbing unhooked**
- `WebLayout` fed `FEATURED_WORK` into `Navbar` as `caseStudies`, and `Navbar` computed a `featuredCaseStudy` that was never used, left over from the featured-case-study card removed in Round 2. `Navbar`'s `articles` prop was likewise orphaned when the search panel's blog teaser was removed, and was failing lint. `Navbar` now takes no props, with a comment saying what the props were for and when to re-add them.

**Copy cleanups in shared components rendered by these pages**
- `src/components/shared/Services.tsx` (homepage grid): heading "Strategic Capabilities / End-to-end technical execution." replaced with "What We Do / Everything your product needs, from one team." Stale comments fixed, including one still naming the old "Ads, Growth" services that were renamed in Section 2.
- Stale "alternates primary / secondary" comments removed from `Services.tsx` and `ServicesGrid.tsx`, which both use a single accent constant.

**Verified:** `tsc --noEmit` clean, `next build` succeeds, all ten `/services/[slug]` pages return 200 with their own solutions and no tech strip, an unknown slug 404s, `/services` shows one hero CTA and one closing CTA, and `/`, `/about`, `/contact`, `/faqs` still return 200 while `/blogs`, `/team`, `/careers`, `/case-studies` still 404.

**Background image overlay was never implemented, so pattern backgrounds washed out the text**
- The `ProcessTimeline` section on `/services/mobile-app-development` showed `lines.png` as loud white waves running straight through the heading and cards. Same problem on every service page's process section and on `ServiceHeader`.
- Root cause: **`bg-img` and `data-overlay-dark` had no CSS anywhere in the project.** Both components set `className="bg-img"` and `data-overlay-dark="9"`, and `src/common/loadBackgroudImages.ts` writes an inline `background-image` from `data-background`, but the matching rules were lost when `globals.css` was rewritten. So the image tiled at its natural size at full brightness with no darkening at all. The props were never the problem.
- Added to `@layer components` in `src/app/globals.css`: `.bg-img` (cover, centered, no-repeat) and `[data-overlay-dark]` with a `::before` overlay filled with `hsl(var(--background))`, opacity stepped from 0.2 at `1` to 0.94 at `9`. Both sections already wrapped their content in `relative z-10`, so nothing else needed changing.
- `ProcessTimeline` and `ServiceHeader` now only set `data-overlay-dark` when a `bgImage` is actually present. Both passed it unconditionally, which would have darkened the plain `bg-muted/30` fallback once the CSS existed.
- Verified in headless Chrome over CDP: the process section's `::before` computes to `opacity: 0.94` over `rgb(15,15,15)`, `background-size: cover`, and a screenshot confirms the pattern now reads as faint texture with the heading and all five cards fully legible.

**Footer logo LCP warning**
- `src/components/layout/Footer.tsx` rendered the same `/assets/imgs/logo.svg` as the navbar but without `priority`, so Next matched the LCP image by src and warned that it was lazily loaded. Added `loading="eager"`, which costs no extra request since the navbar already fetches that file with `priority`.

**Still outstanding after this pass**
- Live links to the disabled `/case-studies` remain outside services scope. `src/components/sections/about/Intro.tsx:57` is the worst, a real 404 from a live page.
- `src/app/about/page.tsx` and `src/app/faqs/page.tsx` metadata titles still carry em dashes and the old jargon positioning ("Strategic Technology Partner", "Domain Expertise & Strategic Execution"). These show in search results.
- `src/components/sections/about/Intro.tsx` still says "Zero-Waste Engineering", the phrase DESIGN.md names as an example of what not to write.
- `src/data/discovery.ts`'s `EXPECT_ITEMS` and `src/components/sections/home/DiscoveryFunnel.tsx` still contain em dashes.
- Five services share a hero background image with another service (`bg1` to `bg5`, each used twice). Cosmetic, left alone.
- Pre-existing lint errors in `src/lib/cms-client.ts` (five `no-explicit-any`). Untouched, out of scope.
- Dead components left in place per the convention above: `sections/services/Header.tsx` and `SubServices.tsx` (both unimported; `SubServices` also does `dangerouslySetInnerHTML` with `card.icon`, which is a `React.ElementType` under the current schema, not an HTML string), and `sections/services/FeaturedWork.tsx`.

---

## 7. About, Contact, and FAQ Pass (completed)

### The regression worth remembering

**The "200+ companies" claim was removed from the homepage and stayed live on `/about` for the entire time since.** `/about` rendered the same `src/components/shared/Clients.tsx`, so killing the import in `src/app/page.tsx` only fixed one of the two pages that used it. Alongside the claim, that section rendered 11 template placeholder logos as client logos and an avatar stack that repeated one stock portrait three times to imply four customers.

**Lesson for future cleanups: when a component is disabled because its content is false, grep for every consumer rather than just the page you are looking at.** A false claim in a shared component is live everywhere that component renders.

### `/contact`: the lead form was silently dropping leads

This was the most serious bug found in either pass. `src/components/sections/contact/Contact.tsx` submitted, and on failure it threw, caught its own error, `console.error`d it, and called `form.reset()`. No error toast. The visitor watched their message disappear with no confirmation and had every reason to think it sent. Locally this was the only possible path, because `getPortfolioId()` returns null for `localhost` so `submitLead` throws "Portfolio ID missing" every time. Any CMS outage in production behaved identically.

Fixed:
- Failure now shows an owned error toast that says it did not send, tells the user their message is still there, and offers the email address as a fallback. The raw server message ("Portfolio ID missing") is logged, never shown.
- `form.reset()` moved to the success branch only. Losing the user's typed message was the worst part of the bug.
- Success now has its own copy instead of printing `res.message` straight from the CMS response.
- **Verified in a real browser** by driving the form over the Chrome DevTools Protocol: the error toast appears, the typed message survives, no false success toast. The success branch is code-reviewed only, since a real CMS success cannot be forced locally.

### `/contact`: everything else

- **Accessibility.** No field had a label, only placeholders, which vanish on input and fail WCAG 3.3.2. `FormLabel` was already exported from `src/components/ui/form.tsx` and never imported. All four fields now have real labels, plus `type` and `autoComplete`. `FormMessage` now sets `role="alert"` so validation errors are announced, and the toast viewport has `role="status"` / `aria-live="polite"`.
- **Booking link.** Added `bookingUrl` to `src/data/site-config.ts` for Cal.com, rendered as a "Book a call" card that opens in a new tab. Deliberately a link out, not an embedded script, so there is no third-party JS on the page. **The card hides itself entirely while `bookingUrl` is empty**, so nothing broken ships before the account exists. Fill in the URL to switch it on, no code change needed.
- **Socials.** All four icons were hardcoded `href="#"`, so every one was dead. The list also included Facebook, which has no entry in `SOCIAL_LINKS`, and omitted GitHub. Now driven by `SOCIAL_LINKS` from `src/data/navigation.ts`, filtered to entries that actually have a link.
- **No phone and no address on the page**, by decision. `SITE_CONFIG.phone` is also malformed for a Pakistani mobile (`"+92 320 (289) 37 86"`); left in the config because the footer reads it, but it needs a decision.
- Response time is now **48 hours**, not the previous 24. Worth saying plainly: that promise was unkeepable before the bug above was fixed, because nobody knew a lead had arrived.
- Name splitting no longer invents a surname. A single-word name used to be stored in the CRM with the last name "Form".
- `phone` had no validation at all. Now a deliberately loose pattern that catches letters and too-short numbers without rejecting real international formats.
- Copy rewritten. Out: "Ready to build something extraordinary? Our team of architects and engineers is standing by to turn your vision into a technical reality", "Let's build the future together", "Follow our journey". The nav description for /contact was "Strategic collaboration opportunities".
- Metadata was a plain object with no `Metadata` type and no OpenGraph, describing "digital transformation needs", which is not what we sell.
- `src/components/sections/contact/Map.tsx` is dead and hardcodes a Multan map pin that disagrees with the suite address in site-config. Left in place, not wired up.

### `/faqs`: was an empty shell, now has content

The CMS fetch had been removed, leaving `const faqs: Faq[] = []`. The page rendered a search box over nothing, an empty state reading "Try adjusting your search query" to a user who never typed one, and a "Still have questions?" banner whose "Get in Touch" button was a bare `<button>` with no `onClick` and no `href`. `PageCTA` is hidden on `/faqs`, so that dead button was the page's only conversion path, and three navigation surfaces pointed here.

- **New `src/data/faqs.ts`** with 12 questions in four groups: Cost and scope, Timeline and process, Working with us, After launch. Covers what a build costs, why there is no price on the site, whether funding is needed, scope changes, timelines, whether designs are needed first, who you talk to, what stack we use, whether AI is required, who owns the code, and what happens after launch.
- Deliberately **not** typed as the CMS `Faq`, which requires `portfolio` and `order`. A local `FaqGroup` shape is used instead, and `groupCmsFaqs()` in the same file preserves the CMS mapping so switching back to live content is a one-line change in the page.
- **No prices anywhere**, per business-strategy.md Section 4. The cost answers explain what drives scope and route to the free call, which is the point of the page.
- `FAQContent.tsx`: dead button is now a `Link` to `/contact`; search input only renders at 8+ questions; the `max-h-[500px]` cap that silently clipped long answers is gone, replaced with `hidden` so collapsed answers also leave the tab order; `aria-expanded` / `aria-controls` / `role="region"` added; heading order fixed (there was no `h2` and the banner used `h4`); empty-state copy now only makes sense with an active query, which is the only way to reach it.
- Header h1 was "Common FAQ", singular and redundant. Metadata title had an em dash and the description had four abstractions in one sentence including "scaling operators", which contradicts the ICP.

### `/about`: rewritten around how we work

Per the decision to lead on process and beliefs, which is the one honest angle with zero clients.

- `<Clients />` and `<DiscoveryFunnel />` both removed. The funnel is the homepage and /services packages section, so the about page ended in pricing copy in a completely different voice, and its button was a second CTA stacked on the `PageCTA` that `WebLayout` already renders on this path. Imports commented out, not deleted.
- `TechnicalPillars.tsx` used GMS, Hexadesk and Healthline screenshots as visual proof of each capability, with a `<div>` styled as a CTA circle making the cards look clickable. Replaced with icon cards and capability copy. Their descriptions were also `opacity-0` until hover, so they were unreadable on any touch device.
- The unsourced "40% Faster Time-to-Market" badge became the one timeline figure we control, matching `src/data/stats.ts`. The same unsourced 40% appeared again as "compress launch cycles by up to 40%" in `Values.tsx`.
- "Zero-Waste Engineering" appeared three times on the page (metadata, `Intro`, `Values`), the exact phrase DESIGN.md names as an example of what not to write.
- `Values.tsx` rewritten to four things about our own behaviour that we can be held to, rather than claims about clients we do not have. The old set claimed "our engineers integrate as a strategic extension of your product and leadership team", implying a team size and a client base.
- `Intro.tsx:57` linked to `/case-studies`, a live 404 from a live page. Button removed rather than repointed. Its raw `'` and `"` in JSX text were also lint failures waiting to happen.
- Metadata was the worst on the site: an em dash in the title, "Strategic Technology Partner", and a description reading "compress your time-to-market with future-ready architecture and zero-waste engineering". All three pages now have proper `keywords` and `openGraph` built from `SITE_CONFIG.url`, instead of inheriting the homepage OG card.

**Verified:** `tsc --noEmit` clean, `next build` succeeds, lint back to the five pre-existing `no-explicit-any` in `cms-client.ts`. `/`, `/about`, `/contact`, `/faqs`, `/services` return 200 and `/blogs`, `/team`, `/careers`, `/case-studies` still 404. All three pages screenshotted and looked at. Repo-wide sweep confirms no remaining `200+`, `Zero-Waste`, unsourced `40%`, `time-to-market`, `standing by`, `24 hours`, or `gms/hexadesk/healthline.png` outside explanatory comments and the now-unrendered `Clients.tsx`.

### SEO service removed, and a stale OG share card found

**SEO & Performance Optimisation (`ab007`) was deleted** from `services.ts`, not disabled. The deciding reason was credibility rather than focus: the site was selling technical SEO audits from a domain with no Search Console property and no structured data, which a technical buyer verifies in seconds. It was also the last marketing-adjacent service, and SEO terms are unrankable at this domain authority regardless. Full copy is preserved in `company-overview.md` section 4.8; a tombstone comment sits where the service was. Removing it orphaned the `TrendingUp` icon import, which lint caught.

**A bug fix survives the removal and is worth more than it.** While the service was briefly disabled via `active: false`, it exposed that `getServiceByPragmaLink` never filtered on `active`, so a disabled service dropped out of `generateStaticParams`, the sitemap, the nav and the footer **while its page kept rendering on a direct hit**: an orphan, live for anyone with the URL or any search engine that had indexed it. Guards are now in both the page and `generateMetadata`, verified against a running server (disabled route 404s, live routes 200). **Keep those guards.** They protect every future disable, and the SEO service was only the thing that revealed the gap.

**The OG share image was still selling the old positioning.** `src/app/opengraph-image.tsx` writes its own headline rather than reading metadata, so it read "We build SaaS products founders can charge for" over "Design, build, and launch in 4 to 6 weeks" all the way through the metadata rewrite that fixed the `openGraph` title and description. That is the card that renders when the link is shared, including in cold outbound, so a rescue prospect was being told the site was for SaaS founders before they clicked. Now "Software built, finished, or fixed." over "Fixed price, working software weekly, and you own all of it." **This file is the easiest place for stale positioning to hide; check it whenever the hero changes.**

### Still outstanding

- **`FAQPage` JSON-LD.** The repo has zero structured data of any kind: no `sitemap.ts`, no `robots.ts`, no JSON-LD anywhere. FAQ rich results are one of the few remaining eligible types, so this is a real and cheap SEO win. Deliberately deferred out of this pass.
- **`SITE_CONFIG.phone` is malformed** (`"+92 320 (289) 37 86"`). It still renders in the footer. Correct grouping is `+92 320 289 3786`. Needs a decision on whether the number is monitored at all.
- **Contact details are duplicated in three formats**: `site-config.ts`, `src/data/marquee.ts`, and a hardcoded `careers@alphabrackets.com` in `src/app/careers/page.tsx`.
- **`/careers` still says "zero-waste engineers"** and has a raw unescaped apostrophe. The route is disabled so it is not user-facing, but it will need the same copy pass before re-enabling.
- `src/lib/cms-client.ts:85` `getFAQs` is now entirely unreferenced. `src/types/ui.ts` `FAQSProps` is a leftover shaped for `WhyChooseUs`.
- The route folders for `/blogs`, `/team`, `/careers`, `/case-studies`, `/team-details` still exist and are directly reachable by URL, returning 404 via `notFound()` as intended.

---

## 8. Contact Methods & Static Site Pass (completed)

Decision: **Cal.com is the primary way in, the email is the fallback, and the CMS is deferred.** Everything unverified or unmonitored came off the site rather than sitting there half-real.

### The contact form was removed on purpose

It posted leads to the shared multi-tenant CMS (`POST /portfolios/{id}/leads`), and the CMS is not being set up for now. A form with no destination is the silent-failure bug from Section 7 deliberately reintroduced: the visitor types a message, it goes nowhere, and they leave believing they made contact. Better no form than a decorative one.

Worth recording for whoever restores it: **nothing in this repo ever notified anyone when a lead arrived.** No Resend, no nodemailer, no SMTP. Leads were written to the CMS and that was it. So a future form needs a real destination *first* (a form service that emails the submission, or our own send), not just the JSX back.

`src/components/sections/contact/Contact.tsx` was rebuilt rather than trimmed, because the form occupied 8 of a 12-column grid and removing it left the page lopsided. It is now a booking-led page: a prominent "Book a call" panel, the email as a clear secondary, and the "what happens next" copy. `contactSchema` in `src/lib/models/Contact.ts` and the `ui/form`, `ui/input`, `ui/textarea` primitives are all still in the repo, unused.

### The site is now fully static

`WebLayout.tsx` called `getPortfolioId()`, which reads request headers to resolve the tenant. **That one call was opting every route on the site into on-demand rendering.** With it and `<AnalyticsTracker />` commented out:

- Every page is now `○ (Static)`, prerendered at build time, where the whole site was previously `ƒ (Dynamic)`.
- `/services/[slug]` is now `● (SSG)` with all ten paths prerendered. This is what finally made the `generateStaticParams` added in Section 6 actually take effect. That entry noted it had no effect and explained why; **it works now.**

**Do not add anything to `WebLayout` that reads `headers()`, `cookies()`, or fetches per request**, or the whole site goes dynamic again. If visitor tracking is wanted, use something client-side (Vercel Analytics, Plausible) rather than a server-side tenant lookup.

`NEXT_PUBLIC_CMS_URL` is now unused at runtime. `AnalyticsTracker.tsx`, `NewsletterForm.tsx`, `cms-client.ts` and `actions.ts` are all left in place. **`actions.ts` and `cms-client.ts` deliberately were not gutted**, because `src/components/sections/case-studies/Detail.tsx` and `NewsletterForm.tsx` import from them and commenting out those exports would break compilation of files this pass had no reason to touch.

### Contact methods, and the pattern that matters

**Everything is gated on having a real URL.** `SITE_CONFIG.bookingUrl` and every `SOCIAL_LINKS` entry default to an empty string, and each consumer filters them out, so a platform stays invisible until a real link is pasted in. Nothing half-finished can ship. This was verified by temporarily setting a Cal.com URL and a LinkedIn URL, confirming the booking panel and the footer's "Follow" column both appeared correctly, then reverting.

- **Kept:** the email. It is a real address on our own domain, unlike the socials, and the privacy policy needs a contact route.
- **Socials: four real profiles, owner-supplied.** LinkedIn, X, Bluesky, Instagram. The previous four URLs were guesses, the same `alphabrackets` handle invented across four default platforms, none of which existed. Note the X handle is `alpha_brackets`, not `alphabrackets`. GitHub is commented out, worth adding once there is real public code to point at. Facebook and TikTok are not there: wrong audience for a B2B SaaS buyer, and both need constant content to avoid looking abandoned.

  **Bluesky was added on the reasoning that it fits this business better than Instagram does.** It is much smaller, but its population is unusually dev-heavy, which suits an engineering team selling to technical founders. Instagram is the weakest fit of the four and is kept mainly for reach in the Pakistan and Gulf markets, so if four content streams ever prove too many to maintain, **drop Instagram before Bluesky**. That ordering is recorded in the `SOCIAL_LINKS` comment so it survives the next edit.

  Two new brand icons were hand-written in `src/declarations/icons.tsx`: `XLogo` and `Bluesky`. `XLogo` is named that way because lucide's `X` (the close/cross icon) is already exported and used as the mobile menu close button. The legacy `Twitter` bird is kept only because `src/components/sections/blog/Blog.tsx` still imports it and `/blogs` is disabled; do not use it for the company's own links, since the account is on `x.com` and a bird now reads as out of date. Both new glyphs were rendered at 96px and visually checked, not assumed correct.
- **Newsletter disabled** in the footer. No mailing list or publishing cadence exists, so it collected addresses nothing would be sent to. It also printed raw server error strings straight to the visitor, which must be fixed before it returns.
- **Phone, phoneRaw, address and location commented out** of site-config. All four already had almost no consumers. The phone value is also malformed for a Pakistani mobile (`"+92 320 (289) 37 86"`, correct grouping `+92 320 289 3786`), noted inline so nobody restores it as-is.
- **`MARQUEE_CONTACTS` emptied.** It published the unmonitored phone number as huge scrolling text on `/team` and `/team-details`. Both return 404 today so nothing visible changed, but the marquee's bottom row will be a blank strip if those pages return, so it needs non-contact text at that point.
- **`src/app/privacy/page.tsx`** lost its `Address:` line, the only public appearance of the street address. `Email:` stays, as does the plain-text email in `cookies/page.tsx`.
- **Tagline reverted to "Future-Ready Tech"**, matching DESIGN.md. The Round 2 entry above has been struck.

Two layout fixes came out of actually looking at the page rather than trusting the diff: the footer grid now switches between 5 and 6 columns depending on whether there are socials to show (an unconditional empty column left visible dead space, and an empty column `div` would have wrapped onto a new row), and the contact hero's bottom padding was reduced because the shorter page turned the old spacing into a visible hole.

### Console and 404 cleanup

Four reported errors, three root causes.

**All three GSAP warnings were one bug.** `src/components/sections/home/Header.tsx` opened its hero timeline with a tween on `.hero-badge`, but that element was removed in the positioning rewrite, so the selector matched nothing. That produced `GSAP target .hero-badge not found`, and then two more `GSAP target  not found` warnings with a blank target when GSAP tried to initialise the empty tween (traced via CDP stack traces to `gsap.set` inside `_initTween`, not three separate call sites). Removing the one dead tween and moving its 0.3s delay onto `.hero-headline` cleared all three. Verified by capturing the console on `/`, `/about`, `/contact`, `/faqs`, `/services`, a service page and `/privacy`: **zero warnings or errors on any of them.**

**`/assets/imgs/favicon.ico` 404'd on every page.** `layout.tsx` declared it in `metadata.icons` but the file had been deleted from `public/`. The old file is still recoverable from git (a 41KB template asset), but rather than restore it, the icon is now `src/app/icon.svg` using the Next.js file convention, so Next serves it and injects the `<link rel="icon">` itself. The `icons` block was removed from `layout.tsx` because it would override the convention.

The icon is the hexagon mark lifted verbatim from `public/assets/imgs/logo.svg`. That file is a 244x30 wordmark and illegible at 16px, but the mark alone occupies exactly `0 0 30 30` within it, so it crops square with no distortion.

**`/robots.txt` 404'd because nothing generated it.** Added `src/app/robots.ts`, and `src/app/sitemap.ts` alongside it, since a robots.txt that references a sitemap which does not exist would be a new bug rather than a fix. Both prerender as static.

The sitemap lists the 18 live URLs and **deliberately excludes `/blogs`, `/team`, `/team-details`, `/careers` and `/case-studies`**, which all return 404, so listing them would point crawlers at dead pages. Service URLs come from the same `serviceRepo.getRootServices()` call that `generateStaticParams` uses, so the two cannot drift apart. Disabled routes are also not listed as `Disallow` in robots.txt: they already 404, which says the same thing more definitively, and naming paths there advertises that they exist.

### Browser tab titles said "Alpha Brackets" twice

Every page except the homepage rendered its brand twice, e.g. `About Us | Alpha Brackets | Alpha Brackets`, and `Custom Analytics & Reporting Platforms | Alpha Brackets | Alpha Brackets`.

The root layout sets `title.template: "%s | Alpha Brackets"`, which Next appends to every child page's title automatically. Each page was **also** writing "| Alpha Brackets" into its own title, so it landed twice. The homepage was unaffected because it uses `title.default`, which the template does not apply to.

Fixed by removing the brand from all 14 page-level titles, letting the template do its job. `title: service.title` on the service pages instead of a template literal that appended it.

**`openGraph.title` and `twitter.title` deliberately keep the brand written out**, because Next does not run those through the title template. Removing it there would have left social cards titled just "Services". This asymmetry is the easy thing to get wrong, so `layout.tsx` now carries a comment stating the rule: never write "| Alpha Brackets" in a page title, always write it in an OG title.

### Service page stats made service-specific

**Correcting an earlier mistake in these notes.** The Section 6 entry "Per-service stats instead of the same three numbers everywhere" claimed that leading with per-service stats and topping up from the global `STATS` list fixed the identical-figures problem. **The top-up caused it.** Only 2 of 10 services defined a stat, and both defined only the timeline, so the other eight received the shared pair wholesale and the two that had one got topped up to match. All ten pages ended up identical. `ServiceIntro`'s `DEFAULT_SERVICE_STATS` fallback did the same thing, so the timeline also appeared **twice on every service page**.

The claims were wrong on content too: "Weeks to MVP" on the SEO & Performance page, which is not an MVP build, and "10x Load Without A Rewrite" on UI/UX Design and Analytics Platforms, which have no load story.

**One source of truth.** The two claims existed in four places with four different wordings: `home/Header.tsx` (`"4-6 wk / Average MVP Delivery"`, also breaking DESIGN.md's dash rule), `data/stats.ts`, `data/services.ts`, and the `about/Intro.tsx` badge. `src/data/stats.ts` now exports `MVP_TIMELINE` and `LOAD_HEADROOM`, and all four read from it. `STATS` is still exported as the pair for the homepage and /about.

**Stats are per service, with no default.** `DEFAULT_SERVICE_STATS` is deleted and the `WhyChooseUs` top-up removed. A service gets a number only when there is one that is both true and about that service:

| Service | Stat | Basis |
|---|---|---|
| SaaS Platform Development | `MVP_TIMELINE` + `LOAD_HEADROOM` | Timeline we set; the load claim is genuinely about this service's architecture |
| Web Application Development | `MVP_TIMELINE` | Timeline we set |
| AI & Intelligent Integrations | `4 to 6` Weeks To A Live AI Feature | Its own timeline, the AI-retrofit offer in business-strategy.md Section 1, a different job from an MVP build |
| Mobile App Development | `2` Platforms, One Codebase | Factual property of the build, already the lead argument in its own copy |
| DevOps & Cloud Infrastructure | `3` Clouds We Deploy To | Factual, matches its own "AWS, GCP, or Azure" copy |
| The other five | none | See below |

UI/UX Design, Business Automation, SEO & Performance, Marketing & Campaign Tooling and Custom Analytics all render **no stats**, and each carries an inline comment saying why so nobody refills the slot with a borrowed claim. Business Automation is the clearest case: its only number was the "60% manual time reduction" already deleted as unverifiable.

**The rule for adding one**, recorded in `services.ts`: a commitment we set (a timeline) or a factual property of the work (one codebase, two platforms) is fine. A client outcome is not, until there are real clients to measure.

**Stats render once per page, in `WhyChooseUs`.** `ServiceIntro` lost its stat grid entirely and no longer takes a `stats` prop; the page stops passing it. A number reads as a reason to choose us, so it belongs beside the differentiators.

**`WhyChooseUs` layout follows whether stats exist.** Two columns with them, one wider column without, because otherwise the left side is a heading and a decorative line beside a tall accordion. Half the services have no stat, so both states are common. Verified in the browser at desktop width in both states, plus a DOM-level count of the stat pills on all ten pages: SaaS 2, Web/AI/Mobile/DevOps 1 each, the other five 0, and no figure repeated within a page.

### Asset audit and restructure: 35MB down to 1.2MB

The import graph was resolved from the live routes only (rather than a flat grep, which over-reports) and every file in `public/` classified:

| Category | Files | Size |
|---|---|---|
| Live, reachable from a real page | 14 | 1.2MB |
| Referenced only by disabled or commented code | 23 | 675KB |
| **Orphaned, referenced nowhere at all** | **172** | **32.7MB** |

**190 files deleted, `public/` went from 35MB to 1.2MB.** The entire live site runs on 5 background JPGs, 8 pattern PNGs and one logo. Worst single orphans: `header/p1.jpg` at 7.4MB, `background/b2.jpg` at 4.9MB, and the three `portfolio/*.png` product screenshots at 1.7MB combined (removed from `/about` in the earlier pass).

A trap found while measuring: **`src/lib/imageOptions.ts` was an unused template image-picker listing ~25 asset paths**, which made those files look referenced in any naive grep. Deleted.

**New structure**, replacing the `assets/imgs/...` nesting:

```
public/
  brand/logo.svg                 brand identity, kept separate on purpose
  images/backgrounds/bg1-5.jpg   the 5 that are actually used
  images/patterns/               8 live PNGs + 5 usable SVGs
```

`src/app/icon.svg` stays where it is, since it uses the Next file convention for the favicon.

The pattern SVGs were previously unused and are now named for what they look like (`flow-lines.svg`, `hero-lines.svg`, `soft-lines.svg`, `grid-dots.svg`, `abstract-shape.svg`) so they can be reached for deliberately. `patt.svg` and `pattern.svg` were **byte-identical duplicates**; one was kept.

**Worth knowing for later:** the live pattern PNGs are heavy for what they do. `lines.png` is 195KB, `pattern.png` 213KB and `pattern2.png` 144KB, all rendered at about 3% opacity, while the SVG equivalents sitting beside them are 2-8KB. Swapping them is roughly 500KB of easy savings whenever someone wants to check the visual difference. Deliberately not done here to avoid an unreviewed visual change.

Two data files now point at deleted images and carry warnings saying so rather than being silently broken:
- `src/data/clients.ts` — **both arrays emptied.** These were the 11 template placeholder logos behind the "200+ companies" claim. The image files are gone, so the old paths must not be restored from git history.
- `src/data/team.ts` — paths flagged as dead, plus a note that some names read as template placeholders rather than real people, which is the same class of problem as the fake client logos.

The remaining `/assets/` references in `src/` are all inside files unreachable from any live route (`sections/blog/`, `sections/team/`, `sections/solutions/`, `home/Clients`, `shared/ProcessSegments` and similar). Nothing breaks at runtime, but **re-enabling any of those pages means supplying real images first.**

### Social share image added

`layout.tsx` declared `openGraph` metadata with **no `images`**, so every link shared to LinkedIn, X, Bluesky or Slack rendered with no preview card.

Added `src/app/opengraph-image.tsx`, generated at build time with `next/og` rather than shipped as a binary, so there is no PNG to keep in sync when the tagline changes. It reuses the hexagon mark from `icon.svg` and the `--primary` orange from `globals.css`. Next serves it at `/opengraph-image` and injects `og:image` and `twitter:image` itself. Verified as a real 1200x630 PNG and visually checked.

### Folder structure audit

`src/` holds 139 TypeScript files. **Only 70 are reachable from the live routes**, so roughly half the codebase is unreferenced template code. Whole folders are dead: `components/sections/solutions/` (4 files, nothing imports it), `components/sections/blog/` (4), `components/sections/team/` (6), plus assorted files in `sections/home/` (`Intro`, `Marq`, `Marq2`, `Feat`, `Blog`, `TechStack`, `Clients`) and `shared/` (`ProcessSegments`, `FeaturedCaseStudies`, `Clients`, `ServiceCTA`, `WhyChooseUs2`).

The layout itself (`app` / `components{layout,sections,shared,ui}` / `data` / `lib` / `types` / `declarations`) is sound, so nothing was restructured. **The issue is dead weight, not shape.** Left in place because some of it backs the intentionally-disabled routes, but it is the obvious next cleanup, and worth doing before anyone tries to navigate this codebase for the first time.

### `src/data/navigation.ts` split into one file per export

That file held nine exports covering five unrelated concerns, and had an `import` statement sitting in the middle of it (line 109) rather than at the top. Split into:

| File | Export |
|---|---|
| `src/data/featured-services.ts` | `FEATURED_SERVICE_LINKS` |
| `src/data/navigation/company-links.ts` | `COMPANY_LINKS` |
| `src/data/navigation/resource-links.ts` | `RESOURCE_LINKS` |
| `src/data/navigation/mobile-links.ts` | `MOBILE_LINKS` |
| `src/data/navigation/social-links.ts` | `SOCIAL_LINKS` |
| `src/data/navigation/contact-links.ts` | `CONTACT_DATA` |
| `src/data/navigation/footer-links.ts` | `FOOTER_LINKS` |

Nine exports became seven, because **three of them were the same value**:
- `CONTACT_LIST` had **no consumers left**. Its last user was the contact page's email card, which was rewritten to read `SITE_CONFIG.email` directly.
- `CONTACT_INFO` was a bare alias of `CONTACT_DATA`, carrying the comment "Keep this for backward compatibility with Footer if needed, or I'll update Footer to use CONTACT_DATA". Footer was the only consumer, so that TODO is now done and the alias is gone.

`FEATURED_SERVICE_LINKS` went to `src/data/` rather than `src/data/navigation/` on purpose: it is a filter over service data, and one of its two consumers (the homepage services grid) is not a navigation surface.

**No barrel `index.ts` was added.** A barrel would restore the single omnibus import path and defeat the split, so all four consumers (`Navbar`, `Footer`, `Contact`, `shared/Services`) now import from the specific file they need.

`MOBILE_LINKS` and `FOOTER_LINKS` still derive from `COMPANY_LINKS` and `RESOURCE_LINKS` rather than restating them, so enabling a route updates the navbar, the mobile menu and the footer together. That relationship is the reason these are separate files importing each other rather than duplicated lists.

Verified beyond the type check: this data feeds the navbar and footer on every page, so a bad import would break the whole site. All routes still 200, the console is clean on `/` and `/contact`, and the nav dropdowns, footer columns, legal links, email and four social icons all still render.

### Middleware removed

`src/proxy.ts` (the Next 16 name for middleware) set an `x-pathname` header that **nothing in the codebase read**. It ran on almost every request to do nothing.

That matters more than it sounds on a now-static site: middleware executes on every matched request, so it keeps a per-request function in the path of pages that could otherwise be served straight from a CDN. Deleting it means the static output really is static end to end. `ƒ Proxy (Middleware)` is gone from the build output, and `proxy.ts` no longer appears in the dev server's request timings.

Safe to remove because the only other mention of "proxy" in `src/` was an unrelated CMS type description, and `next.config.js` already has an empty `redirects()` block, so redirects have a proper home if they are ever needed. Recover from git history if middleware is wanted later, and note: **do not reintroduce it to feed a server-side `headers()` read**, since that would put the whole site back to on-demand rendering.

### Navbar search disabled

`src/components/layout/Navbar.tsx` had a search icon opening a full-screen overlay. **None of it worked.** The input had no `value` or `onChange`, so typing did nothing. The tag buttons had no `onClick`, so clicking did nothing. The placeholder advertised "Search expertise or case studies" and the tags were blog topics, while both `/case-studies` and `/blogs` return `notFound()`. It was decorative UI implying a feature that does not exist.

Worse, it registered a **global `keydown` listener that called `preventDefault()` on Cmd/Ctrl+K**, taking that shortcut away from the browser on every page of the site, in order to open a search box that could not search.

Commented out: the `Search` icon and `gsap` imports, `DEFAULT_BLOG_TAGS`, the `isSearchOpen` state and `searchInputRef`, the keyboard-shortcut and focus effects, the trigger button, the overlay render, and the whole `SearchOverlay` component. Verified the desktop header and the mobile menu both still render and open correctly afterwards.

**Before restoring it: there is nothing to search.** Ten static service pages and a FAQ do not need search, and if that changes the content has to be indexed somewhere first.

### Stock photo removed from `/about`

`src/components/sections/about/Intro.tsx` filled half its width with `/assets/imgs/intro/i1.jpg`, a generic stock photo of two people at a laptop, captioned "Engineering Excellence". Nobody in it works here, so it made the page look templated while telling the reader nothing.

The section was rebuilt as an editorial split rather than having another placeholder dropped in: heading and the one real number (4 to 6 weeks to an MVP) on the left, the actual story on the right. `/about` now has no imagery at all, which is the honest state. **Put an image back only when there is a real one**, a photo of the team or of work actually shipped. `i1.jpg` had no other consumer and is still in `public/`.

## 9. Services Restructure: Categories and the Rescue Page (completed)

### The problem

The ten services were one flat list mixing three different kinds of thing, with nothing to tell them apart: **what gets built** (SaaS Platform, Web App, Mobile App, Analytics, Marketing Tooling), **disciplines** (UI/UX, DevOps, SEO), and **a delivery model** (Business Automation). `ServicesGrid` mapped them straight through into a single 1/2-column grid.

### `Service.category`, and why it is required

New `ServiceCategory` union in `src/types/service.ts` and a **required** `category` field on `Service`. Required is the deliberate choice: `stats`, `solutions` and the rest are optional because absence is meaningful there, but a service with no category would silently vanish from `/services` with no error anywhere. Making it required turned that into ten compile errors that had to be answered one at a time.

`SERVICE_CATEGORIES` in `src/data/services.ts` holds the render order and headings, so `ServicesGrid` iterates data instead of hardcoding strings, and skips any group with no services in it.

**There is also a compile-time exhaustiveness check** below that array (`UnlistedCategory`). Adding a member to the `ServiceCategory` union without listing it in `SERVICE_CATEGORIES` would hide every service in that category, which is the one failure mode of grouping that is invisible in code review. The array uses `as const satisfies` rather than a type annotation specifically so the check can see the literal keys. **Do not replace that with a plain type annotation**, it silently disables the guard.

### Where the headings come from

Every heading is borrowed, not invented, after an earlier attempt used made-up ones ("Software We Build", "How We Build It") that named nothing a buyer would recognise or search for:

| heading | source |
|---|---|
| Product Engineering | Standard agency vocabulary, used by Cubix and most comparables |
| Rescue and Modernisation | New. Also finally gives DevOps and SEO a coherent home, since both are work on something that already exists |
| AI and Automation | Now-standard pairing. A small dedicated group elevates the differentiator rather than burying it |
| Business Applications | Devsinc's own CRM/ERP grouping, and Microsoft's term for the Dynamics 365 family |

**"Solutions" was rejected as a heading.** Cubix uses that word for its own branded products rather than for software types, so it is ambiguous in this market.

Two things worth keeping straight:

- **Categories are presentation only.** Promotion to the homepage and nav is still `FEATURED_SERVICE_LINKS` in `src/data/featured-services.ts`. Grouping AI under a category does not demote it.
- **Category headings do not rank. Pages do.** Search intent belongs in the page title and slug. An earlier draft had this backwards and tried to pick headings for keyword volume.

### `parent_service` was considered and rejected

The repo layer is already built for a hierarchy: `getSubServicesByParentId` and its cached wrapper exist with no callers, and `parent_service` is on the type. It was still the wrong tool, because four separate gaps would have had to be filled: `generateStaticParams` and `sitemap.ts` both use `getRootServices()` so children would be missing from both, no breadcrumb component exists despite `bread_crumbs` being on the type, and `SubServices.tsx` is dead **and** broken (it `dangerouslySetInnerHTML`s `card.icon`, which is a `React.ElementType`). A `category` field needed none of that. Every service stayed a root.

### Footer no longer dumps the whole catalog

`Footer.tsx` rendered **every** root service via `getRootServices()`, ignoring the allowlist. Already a ten-item column and it grew with the catalog. It now renders the featured five from `FEATURED_SERVICE_LINKS`, matching the nav and homepage, plus an "All services" link. The footer is for orientation; `/services` is the page that holds the inventory.

### Code Rescue and Rebuild (`ab011`)

One new service, chosen on **competitive** grounds rather than thematic ones.

**⚠️ That competitive reasoning was WRONG and has been corrected.** The original justification was that "rescue and rebuild is a category that barely exists in agency marketing", so low competition plus rising demand made it the one winnable term. **One search disproved it.** ISHIR runs a project-rescue page and explicitly markets "Vibe Code Cleanup Services"; Oktopeak does software rescue for regulated industries and publishes $15,000 to $40,000 over 6 to 10 weeks; Bamboo Agile, ASD Team, Durable Programming, Bemeir and Aalpha all have dedicated pages; VibePup is positioned on AI-generated code cleanup; and ranked "Top 10" listicles exist for the exact terms. **Listicles are the tell: when aggregator content ranks for a term, a zero-authority domain will not outrank it.**

**The page is still worth having**, because the demand is real and it is a strong outbound landing page. What is dead is the claim that it is uncontested, and therefore the SEO argument for prioritising it over CRM and ERP. Do not reuse that reasoning.

**The lesson is the important part:** the never-invent-data rule was being applied to claims about ourselves but not to claims about the market. `AGENTS.md` now requires searching before asserting a competitive claim.

Three rules are written into the data file above the entry and matter more here than on any other page:

1. **Never blame the previous developer, agency, or an AI tool.** The reader may have written it themselves, and it reads as unprofessional either way.
2. **Never imply we have done a rescue before.** There are no clients. The page describes what we would do on arrival, which is a process statement and has the same standing as the other process sections.
3. **The audit is priced separately, and that is not a sales tactic.** It is what makes fixed price safe here. Quoting a rebuild on a codebase nobody has read is how agencies lose money on this work. It also produces the small delivered engagements that are the prerequisite for claiming a specialism later.

It carries no `stats`, so `WhyChooseUs` renders in its single-column layout. Verified absent from the built HTML rather than assumed.

### Custom CRM shipped; ERP, POS and booking did not

**CRM (`ab012`) is live**, added ahead of the other three and **not on search-volume grounds**. Two reasons, both recorded in the comment above it in `services.ts`:

1. "Business Applications" is borrowed vocabulary that at Devsinc and Microsoft specifically means CRM and ERP. With neither present, the heading promised something the catalog did not contain.
2. Its value does not depend on ranking. It is a page to send someone in outbound or after a referral, which is why the keyword gate still applies to POS and booking, where ranking is the only argument, but not to this one.

It is also the safest capability claim of the four, since a CRM is a web app with pipeline logic.

**ERP and Internal Business Tools (`ab013`) also shipped**, at the client's direction, ahead of the keyword validation. Worth recording the distinction: CRM stood on its own without ranking, but **ERP's main justification was search intent**, so if the keyword pass shows those terms are unrankable at current authority, this is the first page to reconsider.

**The first version of this page was wrong, and the correction is the useful part.** It opened with "we start with the one process costing you the most time, not a full system replacement", which **mistook a delivery method for a scope limit**. ERP buyers ask for breadth: finance, stock, HR, purchasing, operations. A page that opens by narrowing scope reads as an inability to do the job, and it answers an objection nobody raised. Finance and HR were not even in the `solutions` list.

Rewritten so the page claims the breadth and keeps phasing as the *method*: the whole operation is mapped and designed as one system up front, then built in sequenced phases, because switching a company over in one day is how ERP projects fail. "Planned Whole, Delivered In Phases" now reads as a benefit rather than a limitation.

The calibrated guards that replaced the over-correction, all four in the comment above the entry:

1. **Claim the breadth, not the product category.** We build custom software across the operations a business runs. We are not an off-the-shelf ERP vendor or a migration shop, so nothing may imply we replace or migrate anyone off **SAP, NetSuite or Odoo**.
2. **Do not shorten the title to "ERP Development".** "and Internal Business Tools" is what signals custom-built rather than a product implementation.
3. No implied track record, same as every other page.
4. **Payroll processing is deliberately not offered**, because it is regulated. HR here means records, leave and approvals.

All verified absent or present as intended in the built HTML.

**POS and booking are still deferred**, blocked on the open item in `seo-keywords.md` §3. Draft copy for both is in **`docs/service-page-drafts.md`**. Note POS needs `ShoppingCart` added to `src/declarations/icons.tsx`; nothing suitable is currently exported.

⚠️ **An earlier version of this section said that copy lived "in the plan file's git history". That was wrong.** The planning file sits outside the repo in `~/.claude/plans/` and is not version controlled, and it had already been overwritten. `docs/service-page-drafts.md` was created because it is now the only copy. **Do not treat anything in `~/.claude/plans/` as durable storage.**

### Verified

30 static pages (was 29), all 11 service pages prerendered, `code-rescue-and-rebuild` present in the sitemap exactly once. Card numbering confirmed continuous `01` to `11` across the four groups rather than restarting per group, which would have put "01" on four separate cards. Document order confirmed from the built markup: four headings, correct membership, every service exactly once. `tsc` clean, lint unchanged at the five pre-existing `no-explicit-any` in `cms-client.ts`.

**Not visually confirmed.** The heading style (`sub-title mb-0` inside a flex row) and the spacing between groups were checked in markup only, not in a browser. Worth an eyeball at desktop and mobile width before this is considered done.

## 10. Homepage Restructure for Lead Generation (completed)

### Why: the homepage excluded two of three audiences

The hero read *"From Idea to a Product People Actually Pay For"* over *"We design, build, and launch your SaaS product in 4 to 6 weeks."* That speaks only to someone with nothing built. After the positioning revision the catalog serves three audiences, and **two of them were being turned away in the first thing they read**: people with an existing product that needs finishing or fixing, and businesses buying a CRM or ERP.

The same framing appeared in four other places, all fixed: the metrics bar, `ThinkingSection`'s three opinions, the `DiscoveryFunnel` intro, and the global closing CTA.

### The research finding that shaped the layout

10Pearls and Devsinc were mapped section by section, because they were the named comparables. **Roughly two thirds of both homepages exists purely to carry proof:**

- **10Pearls**, 16 sections: 24+ client logos (PayPal, Coca-Cola, Verizon), 5 case studies with metrics, 8 awards, "1,400+ team, 4 continents", 9 office cities.
- **Devsinc**, 14 sections: 6 media logos (Forbes, Business Insider), 40+ client logos, 9 certifications, 4 partner badges, "3,000+ Successful Projects, 250+ Active Clients, 15+ Years", 9 leadership headshots.

**Alpha Brackets has zero of every item on those lists.** That structure is a display case, not a layout. Copying it produces ten empty sections, which signals absence louder than a short page does. **This is why the homepage is seven blocks and not sixteen**, and why the list in "What must never be added" below exists.

The conversion research pointed the other way: specificity beats volume of proof. "Trusted by 8 of the Fortune 50" beat a full logo strip by **14 points of lift** across 2,000 tested pages. 57% of viewing time is on the first screenful. And the named structural gap for services agencies is that **the ideal client is not identified above the fold**.

### Final homepage order

`Hero` → `Trust row` → **`Paths` (new)** → `ThinkingSection` → `Services` → `Process` → `DiscoveryFunnel` → global `PageCTA`.

**1. Hero** (`sections/home/Header.tsx`). "Custom software, built in weeks and handed over working", over "For founders and businesses who need software **built, finished, or fixed**". That three-word phrase is load-bearing: three situations, no vagueness. CTA is now "Book a free 30 minute call", concrete rather than "Free Discovery Call", and it must keep matching `EXPECT_ITEMS` in `data/discovery.ts` and the real Cal.com event.

**2. Trust row**, same file, replacing the metrics bar. The bar showed the two shared `STATS`, which re-narrowed to MVP immediately under a headline that had just broadened. It now carries the homepage's only trust element: you own the code, fixed price up front, working software weekly, you talk to the engineer. **Every line is already true and stated elsewhere**, and the source is cited in a comment above each. Nothing was lost by moving the stats, since `MVP_TIMELINE` still renders on the SaaS and Web service pages via `WhyChooseUs`.

**3. `Paths`** (`sections/home/Paths.tsx`), the one new section and the one that makes a generalist homepage work instead of reading as vague. Three cards for the three situations, each routing to the right funnel page: an idea → SaaS Platform, stuck → Code Rescue, the business needs a system → CRM. **Resolved from the service repo rather than hardcoded titles**, so a renamed service cannot leave a stale label, and a slug that stops resolving drops its card instead of rendering a broken one.

**4. `ThinkingSection`** kept, it is process-as-proof which is what substitutes for case studies. Opinion 01 was rewritten from "Architecture first, code second" (which opened "Before writing the first feature") to "Structure before features", covering reading an existing system as well as designing a new one. **02 untouched, it is the §1 differentiator.**

**5. Services**: `code-rescue-and-rebuild` replaced `business-automation` in `FEATURED_SERVICE_LINKS`, keeping five. Rescue is the offer outbound leads with so it needs nav and homepage placement; business automation is a post-launch upsell in strategy §2. Nothing left the catalog.

**7. `DiscoveryFunnel`**: **Code Review** added as a third and deliberately first package. Lowest commitment way in, and where the structural guarantee reaches the homepage.

**Global `PageCTA`** `general` variant retitled from "Got an idea worth building?" to "Building something, or stuck with something?" As the closing CTA it is the last thing a visitor reads, so the old wording undid the hero's work.

### Five em dashes removed

`ThinkingSection` had two and `DiscoveryFunnel` three. `DESIGN.md` bans them as sentence punctuation; they predated the rule being written down. **The homepage now renders zero**, verified against the built HTML.

### `ServiceOffer`: the audit is now something you can buy

New optional `offer` field on `Service` plus `sections/services/ServiceOffer.tsx`, rendered only when present, matching how `ProcessTimeline` and `WhyChooseUs` guard themselves. Optional because absence is meaningful, unlike `category`.

The rescue page described the written assessment inside its process steps but **never presented it as purchasable**. That is the difference between explaining a method and making an offer.

`guarantee` is the load-bearing field and gets its own visually distinct block rather than being a bullet: *"The written assessment is yours to keep, whether you carry on with us or take it to another team."* Per the research, a guarantee that removes the buyer's downside does more for trust than any proof we could display. Burying it in a list would waste it.

It renders **above** the process timeline, because someone already convinced should not have to scroll past five steps to find what they can buy. **No price in any field**, per strategy §4.

### What must never be added to the homepage

**No** client logo strip · **no** awards or certifications row · **no** partner badges · **no** testimonials · **no** industries grid · **no** "projects delivered" or "clients served" counters · **no** office locations · **no** team headshot wall.

Every one is empty or fabricated at this stage, and the section counts above are the reason. `Clients.tsx` and `CaseStudies.tsx` stay disabled.

### Verified

32 routes, `tsc` clean, lint unchanged at the five pre-existing `no-explicit-any` in `cms-client.ts`. Checked against built HTML: document order correct, trust row present, three path cards present, `business-automation` absent from the homepage while the other five featured render, zero em dashes, title 44 characters (under the ~60 Google truncates at), tagline present once in the body (the footer) and absent from the hero.

One check worth recording as a **false positive**: grepping the rescue page for `$` followed by a digit returned 18 hits. All 18 were React Flight payload markers (`\"$\",\"$1\"`), not prices. **Scope price greps to the rendered body**, which returns zero.

**Not visually confirmed**, same gap as sections 9: no browser available in the session. The trust row was restyled from a big-number layout to icon-plus-text, `DiscoveryFunnel` went from a 2-column to a 3-column package grid, and `Paths` is new. All three want an eyeball at desktop and mobile width.

### Still outstanding

- **`SITE_CONFIG.bookingUrl` is empty** and is the one thing waiting on an external account. Until it is set, `/contact` offers the email only. Note the site is static now, so **changing it needs a rebuild and redeploy**, not just an env change.

  Email and booking setup facts that are not visible anywhere in the repo, recorded because they matter later:
  - **The public address is `info@alphabrackets.com`**, set once in `SITE_CONFIG.email`. Everything reads it from there, so the footer, `/contact`, the privacy policy and the cookie policy all follow a single edit. It replaced `hello@alphabrackets.com`, which is no longer used anywhere on the site. The only hardcoded exception is `careers@alphabrackets.com`, noted below.
  - **The mailbox is on Hostinger, and the public address is an alias on it, not a mailbox with its own calendar.** Mail does arrive, so the 48 hour reply promise on `/contact` is keepable, but there is no calendar behind the address.
  - Cal.com therefore cannot connect a calendar to it directly (its integrations are Google, Outlook/365, Zoho and CalDAV; Hostinger mail is none of those). The plan is to use `info@alphabrackets.com` as the Cal.com **account email** and connect a separate Google or Outlook calendar for availability. Cal.com allows those to differ.
  - **Whatever address the Cal.com account uses must match `SITE_CONFIG.email`.** The point of using the domain address is that the booking identity matches what the site advertises; if the two drift apart, the reason for it disappears.
  - **Verify before trusting it:** when Cal.com writes the event it may add the attendee to the event on the connected calendar, which can surface that calendar's address as the organiser. Book a test slot from an unrelated address and check both the confirmation email and the calendar entry. If a personal address leaks, the fix is Google Workspace on the domain so the public address has a real mailbox and calendar.
  - The booking event must be **30 minutes and free**, because the site already says both in several places (`src/data/discovery.ts` `EXPECT_ITEMS`, `/contact`, the FAQ, and `ServiceHeader`). Display name is "Alpha Brackets". Claim the `alphabrackets` Cal.com username so the public URL stays clean.
- ~~**No structured data, sitemap or robots.txt** anywhere in the repo.~~ **`robots.txt` and `sitemap.xml` are done**, see the console and 404 cleanup section above. Still no JSON-LD of any kind, including the `FAQPage` schema noted in Section 7, which remains the obvious next SEO win.
- **No analytics at all** until a client-side tool is added.
- ~~`src/app/careers/page.tsx:146` still hardcodes `careers@alphabrackets.com`, a second address not read from site-config~~ **Done.** Moved to `SITE_CONFIG.careersEmail`, commented out alongside the paragraph in `careers/page.tsx` that used it. **Every email address in `src/` now lives in `site-config.ts` and nowhere else**, so a change to the public address cannot leave a stale copy behind. Uncomment the config field and the page block together when `/careers` is re-enabled.
- `src/app/careers/page.tsx` still says "zero-waste engineers", the phrase DESIGN.md names as an example of what not to write, and has a raw unescaped apostrophe. The route is disabled so neither is user-facing, but both need fixing before it returns.


---

## 11. SEO and Performance Pass (completed)

Driven by a full code-level SEO audit. The strategy and keyword reasoning behind it
is in [seo-strategy.md](./seo-strategy.md); this section records what changed in the
code. Three classes of problem, in the order they mattered.

### The loading screen was blocking first paint on every page

`src/components/layout/Loader.tsx` rendered an opaque full-viewport SVG at
`z-[9999]` and removed itself only at the end of a GSAP timeline that ran roughly
2.4 seconds, inside a `useEffect`. So Largest Contentful Paint on **every route**
waited for the JS bundle to download, parse and hydrate, and then for the animation
to finish, even though the hero markup is server rendered and ready immediately.
With JavaScript blocked or failed, the overlay never lifted at all and the page
stayed covered.

**Deleted, not disabled.** The file is gone and the mount is removed from
`WebLayout.tsx`, which also drops one of the two global GSAP imports. There is a
note in `WebLayout.tsx` explaining why: **do not reintroduce a pre-hydration
overlay.** If an intro animation is ever wanted it has to be CSS driven and must
never gate the paint of the hero.

Font loading was trimmed in the same pass. `Plus_Jakarta_Sans` had an explicit
`weight` array, which forced six static instances of what is actually a variable
font, and `Zain` loaded six weights to serve one CSS rule (`.logo`). Preloaded font
files went from **12 to 2**.

### Service page heroes were loaded by JavaScript

All 12 `/services/[slug]` pages set `data-background` and called
`loadBackgroudImages()` in a `useEffect`, which wrote `style.backgroundImage` after
mount. The consequences: the image was invisible to the browser's preload scanner,
could not be given `priority`, got no responsive `srcset`, and skipped `next/image`
entirely, so `bg2.jpg` shipped as **388KB of raw JPEG** to phones. It also did not
start downloading until React hydrated.

Converted to a real `<Image fill priority sizes="100vw">` in `ServiceHeader.tsx`,
with the `data-overlay-dark` darkening replaced by an explicit overlay element (the
opacity values are mirrored in an `OVERLAY_OPACITY` map, since the CSS mechanism is
still used elsewhere). The same conversion was applied to `ProcessTimeline` (no
`priority`, it is below the fold), and to the inline-style backgrounds in
`faqs/Header.tsx` and `services/Header.tsx`.

The homepage hero already had `priority`, but its `sizes` declared `50vw` above
768px and `33vw` above 1200px on an element that is `absolute inset-0` inside a
`min-h-screen` section, so it is always full width. Next was serving a candidate
about a third of the width needed and the hero rendered upscaled on every desktop.
Now `sizes="100vw"`.

`next.config.js` also had no `images` block at all, so nothing was ever served as
WebP or AVIF. Added.

### Things the site was saying that were not true

This is the category that mattered most, given that the whole pitch is telling
clients the truth in writing.

- **`/cookies` was wrong in six places.** It described Essential, Analytics and
  Preference cookies, and claimed third-party cookies were used to "deliver
  advertisements on and through the Service". The site sets **no cookies at all**,
  and it directly contradicted `/privacy`, which correctly said the opposite.
  Rewritten to what is actually true.
- **`/privacy` claimed data was "stored on our secure servers behind firewalls".**
  There are no servers in this flow, no database and no form handler. Replaced with
  where things actually go: a mailbox, and Cal.com. A deletion-on-request line was
  added, since retention was never mentioned.
- **`/terms` governing law said "the courts in that State or location"**, unresolved
  template residue naming no court, with Pakistan described as a state. Fixed to the
  courts of Pakistan. **Naming a specific venue is a lawyer's decision, not a copy
  edit**, so that is left open deliberately.
- **All three legal pages stamped `Last Updated` with `new Date()`**, so every deploy
  silently re-dated them and they always looked freshly reviewed. Hardcoded to
  constants that are bumped by hand.
- **`/case-studies/[slug]` was rendering three live pages for work that never
  shipped.** `notFound()` only fired when a slug was *missing* from `FEATURED_WORK`,
  so `/case-studies/gms`, `/hexadesk` and `/healthline` all returned full indexable
  case studies with real metadata, while being deliberately excluded from the
  sitemap and linked from nowhere. Now 404s unconditionally.
  `src/data/case-studies.ts` is kept for when real, permissioned client write-ups
  exist.

### The CMS and lead plumbing is gone

`actions.ts`, `lib/cms-client.ts`, `lib/api/client.ts`, `AnalyticsTracker.tsx`,
`NewsletterForm.tsx`, `lib/models/Contact.ts`, `contact/Map.tsx` and
`case-studies/Detail.tsx` (the only consumer of `submitLeadAction`) are all deleted.
`SubServices.tsx` went with them: it was unreferenced, used
`dangerouslySetInnerHTML` on CMS HTML, and pointed at an image path that no longer
exists.

The reason for deleting rather than leaving it commented out: a `"use server"`
export is one client import away from being a live public endpoint POSTing names,
emails and phone numbers to a third-party multi-tenant CMS that `/privacy` promises
receives nothing. Deleting it makes the privacy policy true by construction instead
of by discipline.

`MONGODB_URI`, `NEXT_PUBLIC_CMS_URL` and `NEXT_PUBLIC_PORTFOLIO_DOMAIN` were removed
from the env files.

**Correction.** An earlier version of this note claimed a live `apiKey` had been
committed to a tracked `.env.production` and was still in git history awaiting
rotation. **That was wrong, and it was repeated several times before anyone checked
it.** Every commit in the repository was searched afterwards. The findings:

- The only `.env*` file ever committed is `.env.production`, and it has only ever
  held three `NEXT_PUBLIC_*` values. Those are inlined into the client bundle by
  Next at build time, so they are public by definition and are not secrets.
- `env.example` holds `MONGODB_URI=mongodb://localhost:27017/alpha-brackets`, a
  localhost placeholder with no credentials in it.
- The deleted `lib/auth.js` read `process.env.CMS_SECRET` and never hardcoded it.
- The deleted `cms-client.ts` and `api/client.ts` contained no string literals that
  look like credentials.

There is no secret in the history. Nothing needs rotating. The lesson is the one
this file keeps relearning: state the check that was run, not the conclusion that
felt likely.

`.env.production` **is tracked and is not in `.gitignore`**, which is safe only
because of what is currently in it. It is still a loaded gun: the next person to put
a real secret in that file commits it. Put server-side secrets in the deployment
platform's environment settings, never in a tracked file.

### Technical SEO that was simply missing

- **Zero canonical tags existed on any route.** Every page now emits exactly one
  self-referencing canonical, 20 in total.
- **No structured data of any kind.** Added Organization (root layout, with real
  `sameAs` profiles and no invented address or phone), FAQPage on `/faqs` generated
  from `FAQ_GROUPS` so the markup cannot drift from the visible text, and
  Service + BreadcrumbList on all 12 service pages, paired with a new visible
  `Breadcrumbs` component so the schema and the page agree.
- **The homepage had no metadata of its own**, silently inheriting a layout default
  whose title led with the brand. It now has its own title, leading with the offer.
- **`NEXT_PUBLIC_SITE_URL` was set in two env files and read nowhere**, while
  `SITE_CONFIG.url` and `metadataBase` each hardcoded the production domain.
  Preview builds therefore emitted production URLs. `SITE_CONFIG.url` now reads the
  env var and everything else resolves through it.
- **Sitemap had no `lastModified`**, which is the one field Google actually uses,
  while setting `priority` and `changeFrequency`, which it ignores. Added as a
  hand-bumped constant, deliberately not `new Date()`.
- **Heading levels skipped.** Service card titles were `h4`, and "Solutions We
  Provide" and every process step title were `h6`, so the outline ran `h2` to `h6`.
  Promoted to `h3`. Styling is token driven so nothing moved visually.
- **Five meta descriptions were too long** for a search result, up to 247
  characters, and the differentiator was usually in the half that got cut. Rather
  than shorten the hero copy, `Service` gained an optional `meta_description`
  field: `description` keeps its job as the hero paragraph, `meta_description`
  handles the SERP. See the comment on the field in `src/types/service.ts`.
- **Security headers** added to `next.config.js`. Not ranking factors, listed
  because shipping a marketing site with none of them undercuts what we sell.

### Small things worth knowing

- `service.cta` was defined on all 12 services and **read by no component**, so
  every page showed a generic "Discuss Your Project" instead of the wording written
  for it. It now drives the hero button, so the rescue page reads "Get Your Code
  Reviewed" and the CRM page "Build Your CRM".
- The homepage hero image `alt` was `"background"`. It is decorative, behind a
  `bg-black/75` overlay, so it is now `alt=""`. Worth recording that **only three
  images render on the entire live site** (two logos and that hero). The other 44
  `<Image>` usages are in components no live route imports, so the site-wide alt
  audit is a one line job, not a 47 line one.
- **The "32 prerendered routes" figure was wrong.** The build produces 31 entries,
  and that number only reaches the 30s by counting `robots.txt`, `sitemap.xml`,
  `opengraph-image`, `icon.svg` and `/_not-found`. **20 is the honest count of
  indexable pages**, and that is what the sitemap contains.

### Still open after this pass

- **Search Console DNS verification, sitemap submission and Bing import.** Nothing
  else in the SEO plan produces data until this is done, and index data only starts
  accumulating once the clock starts. **The runbook now exists at
  [search-console-setup.md](./search-console-setup.md)**, so this is dashboard work
  waiting on someone with DNS access, not an open question. It also records why GA
  is not part of it. Tick this off once the Sitemaps report reads Success.
- **Keyword validation.** Still the blocking gap. See the corrected time estimate in
  [seo-keywords.md](./seo-keywords.md) Section 2c.
- ~~**`apiKey` rotation.**~~ **Not a real item.** The history was searched and there is
  no leaked key. See the correction in Section 11.
- ~~**The global `filter: none !important` rule**~~ **Done, see Section 12.** One
  correction to what this bullet originally said: it claimed the rule nulled
  `backdrop-blur` as well. It did not. `backdrop-blur` compiles to
  `backdrop-filter`, which is a different property and was never affected.
- **`Cursor.tsx` and `ProgressScroll.tsx`** attach an unthrottled `mousemove` and a
  per-scroll-event `setIsVisible`, plus one listener per `a`/`button` element. INP
  risk on link-dense pages.
- **Hero headline animations** use `gsap.fromTo(..., { opacity: 0 })` in a
  `useLayoutEffect`. The text does paint from the server-rendered HTML first, so
  this is not an LCP blocker like the loader was, but it does mean the headline
  flashes visible, then hides, then fades back in once GSAP takes over.
- **Content is the actual gap.** All of the above makes the site sound and fast. It
  does not give it anything to rank for. See [seo-strategy.md](./seo-strategy.md)
  Section 7.

---

## 12. Shadows Removed For Real (completed)

The site was never meant to have shadows, and visually it did not. But the way that
was enforced was a global reset at the end of `globals.css`:

```css
/* Remove all shadows globally */
*, *::before, *::after {
  box-shadow: none !important;
  filter: none !important;
}
```

Three things were wrong with it, and none of them were visible.

### `filter: none` was removing no shadows at all

There is not a single `drop-shadow-*` utility in this codebase, and no
`text-shadow` and no raw `box-shadow` outside that rule. `filter` is not a
box-shadow property. So the second line removed **zero** shadows.

What it actually did was null **31 decorative blur glow divs**, the
`w-[800px] h-[800px]` rounded shapes with a heavy blur that sit behind several
sections. The browser still laid them out and composited them on every page. It
just painted nothing. The site was paying for large blurred shapes that were
invisible by design.

### The reset hid 63 dead classes instead of removing them

Every `shadow-*` class in the repo still shipped in the HTML and still generated
CSS. The reset only overrode it at the end of the cascade. Anyone reading a
component saw `shadow-2xl shadow-primary/30` and reasonably assumed it rendered.

### A universal selector with `!important` cannot be reasoned about

It could not be scoped or opted out of, and it silently defeated anything
filter-based added later, which is how the glows ended up invisible without anyone
noticing.

### What was done

- **All 63 `shadow-*` tokens deleted from source**, across 30 files. That includes
  the plain scale, the colour modifiers (`shadow-primary/20` and friends, which set
  `--tw-shadow-color` and are meaningless with no shadow to colour), every variant
  form, and **two arbitrary values** that no config-level fix could have caught:
  `ProgressScroll.tsx` and `ServiceHeader.tsx` both had `shadow-[0_0_20px...]`.
  Arbitrary values bypass the theme scale entirely.
- **All 31 blur glow elements deleted.** The whole element, not just the class: a
  `w-[800px] h-[800px]` div with no blur is worse than no div. Every one was a
  self-closing decorative `<div />` with no children, so nothing structural moved.
- **The global reset deleted**, with a comment in its place explaining why nothing
  replaces it.
- Dead components were done alongside the live ones. Leaving them would have meant
  the classes reappearing the moment a disabled route was re-enabled, which defeats
  the point of stripping rather than suppressing.

### Two things deliberately kept

- **`backdrop-blur-*`, all 21 of them.** This compiles to `backdrop-filter`, not
  `filter`, so the old reset never touched it and it is real, visible design: the
  navbar, the scroll to top button, the toast, and the service page sidebar card.
  Three lines needed care because a shadow and a `backdrop-blur` shared one
  `className`: `ProgressScroll.tsx`, `ui/toast.tsx` and `ServiceHeader.tsx`.
- **Focus rings.** `ring-*` and `focus-visible:ring-*` are implemented with
  `box-shadow` under the hood, so they show up in a search for shadows, but they are
  keyboard accessibility indicators rather than decoration. They stay. They are the
  only `box-shadow` left in the compiled stylesheet, alongside Tailwind's own
  `:-moz-ui-invalid` preflight reset.

### The surprise: documentation was generating CSS

After every shadow class was gone from the components, the production stylesheet
**still contained `.shadow-lg` and `.shadow-2xl`**.

Tailwind v4 auto-detects its sources and scans markdown as well as code. Two lines
of prose in this very file, describing shadow classes that had been removed, were
enough to regenerate them. Documenting the change was recreating the thing being
documented.

Fixed with two directives at the top of `globals.css`:

```css
@source not "../../docs";
@source not "../../*.md";
```

Worth knowing generally: **any class name written in any markdown file in this repo
becomes real CSS unless it is excluded.** That is why those two lines are there, and
why `DESIGN.md` can now state the no-shadow rule using concrete class names without
undoing it.

### Verified

Clean rebuild, then against the compiled stylesheet and the prerendered HTML:

- `0` shadow utility classes in the compiled CSS.
- `0` `filter: blur()` declarations and `0` blur utility classes.
- `0` `--tw-shadow` value assignments other than the empty `0 0 #0000` default.
- `0` shadow class tokens in the built HTML of `/`, `/about`, `/contact`, `/faqs`,
  `/services`, `/services/code-rescue-and-rebuild` and a 404 route.
- `12` `backdrop-filter` declarations and `12` focus-ring references still present,
  which is the intended outcome.

Because the old reset was already suppressing all of this, the rendered result
should be **visually identical** to before. If anything looks different, the likely
cause is a `backdrop-blur` removed by mistake, so check the navbar, the scroll to
top button and the service page sidebar card first.

### One consequence to be aware of

The `grayscale` utilities in the disabled `Clients` and blog components were also
being suppressed by the old blanket `filter: none`. They are out of scope here and
were left alone, but they **will start applying** if those components are ever
re-enabled.

---

## 13. Lighthouse Remediation (completed)

Driven by two Lighthouse 13.4.0 runs. **Before quoting any number from those
reports, read the next paragraph.**

### The reports were not measuring this site

Both runs hit `http://localhost:3000` on a **dev server with browser extensions
active**. Lighthouse flagged this itself in two warnings at the top of each report.
The distortion is large:

- **Dev build.** A console error for the `ws://localhost:8081` HMR socket, a
  `next-devtools` chunk at 213 KiB, "Missing source maps" errors, and "Minify
  JavaScript, est savings 282 KiB". Production ships none of that.
- **Extensions dominated the main thread.** Grammarly alone: 1,286 KiB
  transferred and **1,273 ms of main-thread time** on mobile, against a total TBT
  of 1,550 ms. Plus Loom, React DevTools, Sound Booster and a jQuery injector.

So **mobile Performance 64 is not our score**, and Best Practices 96 was partly the
dev HMR console error. Anyone re-measuring must use `npm run build && npm start`
in an **incognito window with extensions disabled**. Until that has been done, do
not quote a performance figure anywhere, internally or in marketing.

What the reports did legitimately confirm, all of it from the previous pass:
**SEO 100**, **CLS 0** on both form factors, desktop **LCP 0.9 s / FCP 0.4 s**, the
LCP element is now the hero `h1` rather than a blocked overlay, "LCP request
discovery" passes, "Font display" passes, and HSTS is being served.

### Accessibility: 89, and the causes were small

- **Two buttons had no accessible name at all.** The scroll-to-top button
  (`ProgressScroll.tsx`) and the mobile menu toggle (`Navbar.tsx`) contain only
  SVGs, so screen readers announced each as "button". Both now have `aria-label`,
  their icons are `aria-hidden`, and the toggle has `aria-expanded` plus
  `aria-controls` pointing at a new `id` on the menu. **This was also the sole
  cause of the Agentic Browsing 1/2 failure**, which flagged the same element.
- **Both were also focusable while invisible.** Each was hidden with `opacity-0
  pointer-events-none`, which stops the mouse but leaves the control in the tab
  order. Both wrappers now use `inert` while hidden, which removes them from focus
  and from the accessibility tree.
- **Contrast, measured rather than eyeballed:**
  - White on the primary orange is **3.02:1**, failing the 4.5:1 minimum. This came
    from `--primary-foreground: 0 0% 100%` and affected every default `Button` plus
    the `PageCTA` link. It is now `0 0% 8%`, measuring **6.09:1**.
    **The brand orange is unchanged.** Darkening `--primary` enough for white to
    pass needs roughly 45% lightness, a visibly different colour, and would drag
    `text-primary` on the dark background from ~6.3:1 toward the 4.5 line.
    40 hardcoded `text-white` occurrences sitting on a solid `bg-primary` were
    switched to `text-primary-foreground`; a literal would have overridden the fix.
  - Low-opacity muted text. Measured against `--background`: `/40` = 2.04:1,
    `/50` = 2.53:1, `/60` = 3.13:1, `/70` = 3.85:1, **`/80` = 4.68:1 (passes)**,
    full = 6.73:1. Everything at `/70` and below was raised to full opacity.
    `/80` was left alone because it passes.
- **Heading order.** The footer's four `h4`s sat in a component with no `h2` or
  `h3`, and page content ends at an `h2`, so `h2 → h4` skipped a level. Now `h3`.
  The `h4`s in the disabled blog components were left alone: they sit under an
  `h3` and are correctly ordered. Live pages now run a clean `h1 → h2 → h3`.

### Performance: one real item

The hero `h1` is the LCP element and carried **~350 ms of "element render
delay"**. It was animated with `gsap.fromTo(..., { opacity: 0 })` plus a `0.3s`
delay. An element at opacity 0 has not been painted, so LCP could not resolve until
the fade ran. It now animates **transform only**, so the text paints immediately
and LCP stops waiting on JavaScript. The delay went with it, since without a fade
it would only park visible text 60 px out of position.

**Correction worth recording:** Section 11 of this document claimed this tween was
"not an LCP blocker like the loader was" because the text paints from server HTML
first. The measurement contradicted that. Do not reason about LCP from markup
alone.

`ProgressScroll` also read `scrollHeight`, a layout read, on every scroll event
while calling `setState` unconditionally. The listener is now `passive`,
rAF-gated, caches the layout read (refreshed on resize), and only sets state when
the visibility boolean actually flips. The progress ring lost its `transition-all`:
`stroke-dashoffset` is not compositable, and the offset is already written inside
`requestAnimationFrame`, so the transition was both redundant and main-thread work.

### The browserslist change saved nothing, and that is recorded on purpose

Lighthouse reported "Legacy JavaScript, est savings 8 KiB" for
`Array.prototype.at/flat/flatMap`, `Object.fromEntries/hasOwn` and
`String.prototype.trimStart/trimEnd`, and there was no `browserslist` config. One
was added, matching Tailwind v4's own floor (Chrome 111, Safari 16.4, Firefox 128),
which the project already depends on for `@property`, `color-mix` and cascade
layers.

**Then it was measured, and it made no difference.** Production builds with and
without the key are byte-identical: **1064 KB of chunks either way, and no
polyfills chunk is emitted in either case.** The finding pointed at a dev-only
chunk, exactly like the minification and source-map findings. The config is kept
because it pins the target explicitly and documents the floor, not because it
bought anything. The comment in `package.json` says so.

### Security headers, and the CSP decision

Added `Content-Security-Policy` and `Cross-Origin-Opener-Policy: same-origin`.

**The CSP is deliberately not nonce-based, and it will not turn the Lighthouse row
green.** The reasoning, because it will otherwise be relitigated:

The built homepage carries roughly **35 inline `<script>` tags** with no `src`,
holding Next's RSC flight payload. A nonce must be unique per response, so using
one forces every route to render per request. This repo has already been burned by
that exact mechanism, documented in `WebLayout.tsx`: reading request headers
"opted EVERY route on the site into on-demand rendering" and broke
`generateStaticParams` on `/services/[slug]`. Hashing is out too, since the inline
payloads embed per-page data and per-build chunk hashes.

The trade would be: give up static prerendering of all 31 routes, on a site with
**no forms, no user input rendered anywhere, no third-party scripts and no
query-param-driven rendering**, whose only `dangerouslySetInnerHTML` calls are
JSON-LD built from local static data. That is a bad trade for one audit row.

So `script-src` keeps `'unsafe-inline'`, and the policy closes everything else:
`object-src 'none'` and `base-uri 'self'` (the two Google's CSP Evaluator weights
alongside script-src; `base-uri` blocks `<base>` tag hijacking), `form-action
'self'`, `frame-ancestors 'self'`, `frame-src 'none'`, and `default-src 'self'`,
which still blocks **externally hosted** script injection, the usual delivery
mechanism. `'unsafe-eval'` and `ws:` are added in development only, or the HMR
runtime and hot reload break. `upgrade-insecure-requests` is production-only.

`require-trusted-types-for` is omitted on purpose: it breaks React's
`dangerouslySetInnerHTML` and therefore all three JSON-LD blocks.

HSTS deliberately has **no `preload` directive**. Preloading is slow and painful to
reverse, so it should be a conscious decision. Lighthouse will keep noting it.

### Verified

Clean production build, then against the running server and the built output:

- All six headers present and correct; the dev-only CSP directives (`'unsafe-eval'`,
  `ws:`) correctly absent from the production policy.
- All five key routes still return 200 and are still statically prerendered.
- **No external subresources anywhere.** The only external strings in the built HTML
  are canonicals, the SVG `xmlns`, the JSON-LD `@context`, and outbound social
  links, none of which CSP restricts. So `default-src 'self'` blocks nothing.
- `aria-label`, `aria-expanded`, `aria-controls` and both `inert` attributes present
  in the built HTML.
- Zero `text-white` on a solid `bg-primary`, zero `h4` in the footer, zero muted
  opacities at `/70` or below, heading ladder `h1 → h2 → h3` with no skips.
- `tsc --noEmit` clean.

### Still open

- **Re-run Lighthouse properly**, per the first section: production build,
  incognito, extensions disabled. Record the real numbers here. Accessibility
  should move from 89 into the high 90s and Agentic Browsing to 2/2 on the button
  fix alone. The CSP row will stay flagged, by choice.
- **The CSP hydration smoke test needs a browser and was not performed here.** Load
  `/`, a service page, `/faqs` and `/contact` with DevTools open, confirm zero CSP
  violations in the console, and click the mobile menu, the FAQ accordion and the
  scroll-to-top button. Header presence was verified; interactive hydration under
  the policy was not.
- **`prefers-reduced-motion` is not honoured anywhere.** The GSAP timelines run
  regardless. Not a Lighthouse audit, but a real accessibility gap now that the
  animation code has been touched twice.
- Contrast items Lighthouse listed that were **not** addressed: the `main` and `p`
  entries in its failing-elements list are ambiguous without a live DOM inspection.
  Re-check them after the clean re-run rather than guessing.

---

## 14. Production Performance, Measured Properly (completed)

### The headline: the "slow mobile" problem was the dev server, twice

Two rounds of Lighthouse reports were captured against `next dev`. Production numbers,
from `npm run perf`:

| | Perf | A11y | Best Practices | SEO |
|---|---|---|---|---|
| **Mobile (dev)** | 78 | 100 | 100 | 100 |
| **Mobile (production)** | **92** | **100** | **100** | **100** |
| **Desktop (dev)** | 98 | 100 | 100 | 100 |
| **Desktop (production)** | **100** | **100** | **100** | **100** |

Metrics, mobile: FCP 1.5s → **1.0s**, LCP 4.6s → **3.3s**, TBT 240ms → **40ms**, CLS 0.
Desktop: FCP **0.3s**, LCP **0.7s**, TBT **0ms**, CLS 0.

A dev build ships a ~213 KB devtools chunk, the HMR client, and unminified JavaScript,
none of which a visitor receives. Under Lighthouse's Lantern simulation those inflate
the projection by seconds. **Never quote a performance number that did not come from
`npm run perf`.**

### `npm run perf` exists so this cannot happen a third time

`scripts/perf.mjs` builds, serves the production output on its own port (3210, so it
cannot attach to a dev server someone left running), polls until the server answers,
runs Lighthouse for mobile and desktop, prints the scores and Core Web Vitals, and
always kills the server tree afterwards. Reports land in `reports/` (gitignored).

It also **checks its own output for dev-build tells** (a `next-devtools` or `hmr-client`
request, or any unminified-JavaScript finding) and prints a warning if it sees one, so a
bad measurement announces itself instead of being acted on.

### A plan premise that measurement disproved

Investigation said `Cursor.tsx` was "the sole reason GSAP core is layout-level", so
gating it behind a pointer check should strip 68.5 KB from every route.

**It did not.** After the change, First Load JS went *up* 2.3 KB on every route. The real
cause was elsewhere: `src/components/sections/page-404/Error.tsx` imported GSAP for one
decorative float tween, and in the App Router `not-found.tsx` is part of **every route's
tree**. That single animation was putting 68.5 KB of GSAP core into the shared first-load
chunk of every page on the site, `/terms` and `/privacy` included.

Replacing it with an eight-line CSS keyframe (`.animate-float-y` in globals.css, which
also honours `prefers-reduced-motion`) is what actually moved the number:

| Routes | Before | After | Delta |
|---|---|---|---|
| `/terms`, `/privacy`, `/cookies`, `/_not-found`, and the disabled routes | 695.5 KB | **629.1 KB** | **−66.4 KB** |
| `/`, `/about`, `/faqs`, `/contact`, `/services`, `/services/[slug]` | 759.8 KB (home) | 762.0 KB | +2.2 KB |

The content routes did not improve because their own hero components genuinely use GSAP,
so the library stays in their graph. The +2.2 KB is the `CursorMount` wrapper.

**The Cursor gate was kept anyway, for a different reason than the one it was proposed
for.** It buys no bytes on pages that load GSAP regardless, but on a phone it stops a
component that is `hidden lg:block` from hydrating, initialising two GSAP quickSetters,
running a full-document `querySelectorAll`, and attaching a `mouseenter` **and**
`mouseleave` listener to every `a, button, .cursor-pointer` — 200+ listeners for an
element nobody can see. That is main-thread work during hydration, and TBT is the metric
it shows up in. See the note in `CursorMount.tsx`; the dynamic `import()` is load-bearing,
a static one would put GSAP straight back.

### A second correction: the polyfill chunk

An earlier note in `package.json` claimed "no polyfills chunk is emitted either way".
Wrong: one **is** emitted, about 110 KB. The check that missed it grepped filenames for
"poly" and the chunk is hash-named. It does not matter, for a better reason than the one
originally given: the built HTML loads it as `<script noModule>`, so no browser that
supports ES modules ever downloads it. The `browserslist` conclusion is unchanged, and
the note has been corrected.

### What is actually left on mobile, with evidence

Mobile LCP is **3.3 s**, above Google's 2.5 s "good" threshold, and it is the only thing
holding Performance at 92. The breakdown says where it goes:

```
TTFB           466 ms
Load Delay       0 ms
Load Time        0 ms
Render Delay  2838 ms   <-- 86% of LCP
```

The LCP element is `h1.hero-headline`, plain server-rendered text. Nothing is downloading
(Load Time 0). Ruled out by measurement: fonts are not the cause (both woff2 files
complete between 41 ms and 104 ms), and render-blocking CSS is only 15.8 KB / 166 ms.
The one remaining opportunity Lighthouse lists is unused JavaScript, 300 ms / 28.5 KB.

Main-thread work is Script Evaluation 680 ms, Style & Layout 634 ms, Other 567 ms.

**Prime suspect, not yet proven:** `home/Header.tsx` sets up its GSAP timeline in a
`useLayoutEffect`, which runs synchronously **before the browser paints**, and cannot run
until 114 KB of GSAP has downloaded and evaluated. It then applies `y: 60` to the LCP
element and animates it back over one second. Twelve components use this same
`useLayoutEffect` + GSAP hero pattern (`about/Header`, `faqs/Header`, `services/Header`,
`ServiceHeader`, `contact/*`, and the disabled routes).

The fix would be the pattern already used for the 404: CSS keyframes instead of GSAP for
hero reveals, which removes the pre-paint block and takes GSAP off the content routes'
critical path too. **Deliberately not done here** — it changes hero animation on every
page, so it is a design decision, and the previous pass already had to correct one
over-confident claim about this exact tween. Prove it first with a single-page experiment
and a `npm run perf` before and after.

### Still open

- **Mobile LCP 3.3 s**, per above. Needs a decision on hero animations.
- **`prefers-reduced-motion`** is now honoured by the new `.animate-float-y` only. The
  twelve GSAP hero timelines still ignore it. Same code, same decision, so bundle it with
  the LCP work.
- The desktop custom cursor needs a human click-test: load the homepage on a real desktop
  browser and confirm the dot follows the pointer and expands over links and buttons. The
  build and types pass, but that behaviour was not verified interactively.

---

## 15. Service Data Cleanup (completed)

`src/data/services.ts` had accumulated fields that nothing read. Each one below was
confirmed dead by grepping every reader in `src/`, not by inspection.

### Removed because nothing read them

| Field | Evidence |
|---|---|
| `explore_link` | `""` on all 12 services. Declared in the type, referenced nowhere else. |
| `bread_crumbs` | `[]` on all 12. Superseded by the crumbs derived in `services/[slug]/page.tsx`. |
| `parent_service` | `null` on all 12. See below. |
| `videoLink` | Declared on `Service` and `ServiceHeaderProps`. Never set, never read. |
| `card.read_more` | Declared only. |
| `createdAt` / `updatedAt` | Declared only. Leftovers from the CMS-backed shape. |
| `ServiceFormData` | A whole interface, imported by nothing. Leftover from the deleted CMS form layer. |
| `Breadcrumb` | Only existed to type `bread_crumbs`. |

That is 36 lines out of services.ts and ~45 out of `types/service.ts`.

### `DEFAULT_SOLUTIONS` is gone, and `solutions` is now required

It was a six-item generic list used by `ServiceIntro` as `solutions ?? DEFAULT_SOLUTIONS`.
It was **unreachable** — all 12 services define their own `solutions` — and its own
comment said so. It was also a liability if it ever had been reached: it advertised
DevOps and SEO on pages about neither, and it still listed SEO after that service was
removed from the site.

Deleting a fallback silently is how the next service ends up with no solutions list at
all, so `solutions` changed from `solutions?: string[]` to required on the `Service`
type. A service that forgets its list now fails to compile instead of quietly rendering
someone else's offering.

### The service list is flat, so the hierarchy is gone

`parent_service` was `null` on every service, and its only real reader was
`getSubServicesByParentId`, whose only caller was `getSubServicesByParentIdCached`,
which **nothing called**. `SubServices.tsx` had already been deleted. So the entire
parent/child concept was one filter clause and two unreachable functions. All removed;
`getRootServices()` is now just the `active` filter.

### The featured five: kept as an ordered list, and the ordering bug it existed to prevent

The proposal was to replace `FEATURED_SERVICE_LINKS` with a `featured: true` flag on
each service. **Not done, deliberately.** A boolean can only express membership, and the
order here is strategy rather than presentation: `code-rescue-and-rebuild` is the offer
outbound leads are approached with, so it belongs fourth. In services.ts it sits tenth
of twelve in catalog order, so a flag would take its order from that file and demote
rescue to last.

Checking that turned up a live bug. The three consumers each resolved the slugs
themselves and **did not agree**:

- `Footer.tsx` mapped over the list → intended order.
- `Navbar.tsx` and `shared/Services.tsx` filtered the catalog → catalog order.

So Code Rescue was rendering **last** in the nav mega-menu and on the homepage grid,
which are exactly the two placements the list exists to give it.

The fix is to resolve once, in `featured-services.ts`, and export the resolved
`FEATURED_SERVICES: Service[]`. There is no longer any ordering for a consumer to get
wrong, because there is nothing left for a consumer to do. Verified in the built HTML:
rescue is now fourth on the homepage.

The resolver **throws** on a slug that matches no service. The failure mode it replaces
was silent — renaming a `pragma_link` just made the card vanish from the nav. The site
is fully prerendered, so this runs at build time and turns that into a failed build.

### Kept, with reasons

- **`_id`** — thin, but it is the React key in `Footer.tsx`.
- **`stats`, `offer`, `meta_description`** — optional on purpose; absence is meaningful
  and already documented at each declaration.
- **`SERVICE_CATEGORIES` and the `UnlistedCategory` guard** — load-bearing compile-time
  check that every category has a heading.

### Verification

`npx tsc --noEmit` clean, `npx eslint src/` clean, `next build` prerenders all 12
service pages, and the featured order was read back out of the built homepage HTML
rather than assumed.

---

## 16. Env Files Removed, and the Localhost Canonical Bug They Were Hiding (completed)

The repo now ships **no env file at all**, and needs none.

### Why: a local production build was baking `http://localhost:3000` into every canonical

`.env.local` contained one line, `NEXT_PUBLIC_SITE_URL=http://localhost:3000`. Next
loads `.env.local` in every environment except `test`, **including during
`next build`**, and it takes precedence over `.env.production`. So `.env.production`
never won on a developer machine.

Verified in the build output before the fix, not inferred:

```
<link rel="canonical" href="http://localhost:3000"/>
http://localhost:3000/services      <- sitemap.xml
```

Every canonical tag and every sitemap URL. A canonical pointing at an unreachable
host tells Google the real page is a duplicate of nothing, which would have quietly
undone the canonical work in Section 11.

Whether this ever reached the live site depends on where the build runs. A platform
building from git never sees `.env.local`, because it is gitignored, so it would have
resolved correctly. Any build produced locally and uploaded would have shipped the
localhost URLs.

### What changed

- **`.env.local` deleted.** It existed only to hold the harmful override.
- **`.env.production` deleted** (was tracked). It held three `NEXT_PUBLIC_*` values,
  two of which pointed at the removed CMS and were already unused.
- **`env.example` deleted** (was tracked). It documented `MONGODB_URI`,
  `NEXT_PUBLIC_CMS_URL` and `NEXT_PUBLIC_PORTFOLIO_DOMAIN`, none of which the app
  reads any more.
- **`.gitignore` widened** from `/.env.local` to `.env` and `.env.*`, so no env file
  can be committed by accident later.

`process.env.NEXT_PUBLIC_SITE_URL ?? "https://alphabrackets.com"` in site-config.ts is
**kept**. It is the only environment variable the whole application reads. With no
file present the default wins, which is the correct production value, and a deploy
platform can still override it for preview builds. Do not add a local env file just
to repoint it: dev resolving to the production domain is harmless, because nothing
indexes localhost.

### Verified after the change

Canonicals, `sitemap.xml` and `robots.txt` all emit `https://alphabrackets.com`, read
back out of the build output rather than assumed.
