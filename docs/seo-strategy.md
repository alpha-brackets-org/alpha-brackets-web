# Alpha Brackets — SEO Strategy

Status: active. Written after a full code-level SEO audit of the site (August 2026). This document explains **what we are doing about SEO and why**, so the reasoning survives and nobody re-derives a premise we have already tested and rejected.

Related docs: [seo-keywords.md](./seo-keywords.md) is the keyword list and its research caveats. [business-strategy.md](./business-strategy.md) is niche, services, and pricing. [project-notes.md](./project-notes.md) logs code changes as they land. This document sits above all three and is the one to read first.

**Read Section 3 before writing any new page or article.** It is the part that changes decisions.

---

## 1. Where this domain actually stands

No comfortable framing available, so here it is plainly:

- **Zero backlinks.** No referring domains.
- **Zero case studies.** GMS, Hexadesk and Healthline are not live and must not be presented as shipped proof points.
- **Zero client logos, zero testimonials.**
- **No Search Console.** Not verified, so we have no index coverage data and no query data.
- **No analytics.** Deliberate. Consequence: we have no field performance data either, only lab numbers.
- **No verified keyword volume.** Still the open gap. See Section 7.
- **20 indexable pages.** Homepage, `/services`, 12 service pages, `/about`, `/contact`, `/faqs`, and three legal pages.

Because there are no authority signals, **SEO here rests entirely on on-page factors, technical factors, and content.** That is a real constraint, not a temporary one. It means we can compete on relevance and specificity and nothing else, and it means the honest near-term ceiling is low.

The audit also found the site was working against itself in ways nobody had noticed. Those are covered in Section 5.

---

## 2. What we are betting on, and what we got wrong

### Rescue stays our positioning. It is not an SEO shortcut.

The rescue and inherited-codebase angle was chosen partly because it is genuinely differentiated and true to what we do, and partly on the belief that it "barely exists in agency marketing" and was therefore the one winnable category for a zero-authority domain.

**That second reason is false.** [seo-keywords.md](./seo-keywords.md) already retracted it. This document records the evidence so it does not come back:

**Established agencies with dedicated rescue landing pages:** Pragmatic Coders (a project-rescue page *and* a separate vibe-coding-rescue page), ISHIR, DOOR3, Celadonsoft, SOLTECH, ASD Team, Telliant, HeadBlocks, Radixweb, Redwerk, GetDevDone.

**Exact-match domains built purely for these queries:** `fixmyvibe.io`, `fixmyvibecoded.app`, Afterbuild Labs.

**A listicle layer already farming the category:** "10 Best Vibe Coding Cleanup Service Companies", "Top 5 Companies for Fixing AI-Generated Code" (KITRUM), "Top AI Code Cleanup Companies: Agency Buyer Guide" (GetDevDone).

That last one is the most important signal. When affiliate-style roundups rank for a category, the category has enough commercial demand to have attracted a PR and affiliate layer. That is the opposite of an uncontested niche.

### What this changes, and what it does not

**Unchanged:** rescue remains the positioning, the messaging, and the outbound wedge. It is honest, it is differentiated, and it describes real work. The `/services/code-rescue-and-rebuild` page is the strongest page on the site.

**Changed:** we stop treating rescue **category head terms** as ranking targets. "Code rescue service", "fix vibe coded app" and "rebuild AI generated code" are not winnable at our authority and will not be for a year or more. We target the **problem-state long-tail underneath** them instead, which is where people who have the problem but do not yet know the category name actually search.

---

## 3. Keyword tiers

Three tiers. **Every new page or article must sit in a named tier before it is written.** If a term is not in a tier, validate it first (Section 7).

Competition reads below come from manual inspection of live search results. Volume figures are still unvalidated, which is exactly why the tiers are expressed as difficulty rather than traffic.

### Tier 1 — Target these first. Winnable in roughly 3 to 6 months.

| Term | Why it is winnable |
|---|---|
| `inherited codebase developer` | Softest results page found. Fragmented between DEV.to posts, framework-specific blogs and solo consultants. No strong commercial page owns it. |
| `is my AI generated code production ready` | Currently answered by generic AI-industry blogs, not by anyone who has done the work. A practitioner answer is differentiated content rather than another think piece. Best content gap we found. |
| `developer to take over existing project` | Informational results page. Beatable with a better guide. |
| `what to do with an unfinished software project` | Same shape. |
| `how much does a code audit cost` / `how long does a code audit take` | High intent, low competition, and we can answer both from real pricing. |
| `how to hand over a codebase to a new developer` | Nobody serves this well from the receiving side. |
| Tool-specific: `fix Lovable app`, `Bolt.new app not production ready`, and equivalents for Replit, Cursor, v0 | Narrower and fresher than the category terms. **Competitors name these tools by name and we currently name none of them.** |

### Tier 2 — Realistic, but 6 to 12 months out.

| Term | Read |
|---|---|
| `software audit service` / `fixed price code audit` | Contested by ScienceSoft and DevCom, **but a solo consultant currently ranks here with a productized one-week audit page.** That is proof the results page is not locked. Our fixed-price code review offer is almost exactly the shape that ranks. This is the most valuable Tier 2 term. |
| `take over unfinished software project` | Mostly guide and blog content ranking rather than service pages, so it is approachable as a guide. Softest of the six original rescue terms. |

### Tier 3 — On-page relevance only. Never a ranking target.

Use this language on pages for clarity and relevance. **Do not build content strategy around it, do not measure success by it, and do not write a new page aimed at it.**

- `code rescue service`, `fix vibe coded app`, `rebuild AI generated code` — the rescue category head terms. Held by funded agencies and exact-match domains.
- `custom CRM development`, `custom ERP development` — decades old, listicle-saturated, ScienceSoft and Chetu class competition.
- `MVP development company`, `SaaS platform development company`, `AI development company`, `custom software development company` — the original head-term call in [seo-keywords.md](./seo-keywords.md) Section 1 was correct and stands.

### Still off limits

**No vertical-locked terms** (healthtech, legaltech, fintech). No vertical has been chosen, so the content investment cannot be justified and it contradicts the generic-positioning decision.

---

## 4. Page-to-intent map

Not every page is an SEO asset, and pretending otherwise wastes effort. This is the honest split.

| Page | Role | Content investment |
|---|---|---|
| `/services/code-rescue-and-rebuild` | **Primary SEO asset.** Retargeting from the category head term to takeover and inherited-codebase language. | Yes. Deepen it. |
| A new code audit page (planned) | **Primary SEO asset** for Tier 2 `software audit service`. Splits out of the rescue page's offer block. | Yes. |
| `/` homepage | Brand and conversion. Head terms for relevance only. | Metadata and clarity, not keyword content. |
| `/faqs` | Genuine asset. Deepest page on the site and the best structured-data candidate. | Light. Schema matters more than words here. |
| `/services/saas-platform-development` | Outbound landing page. Head term, not winnable. | Minimal. |
| **`/services/crm-development`** | **Outbound landing page only.** Was shipped for outbound, not SEO. | **None. Do not invest here.** |
| **`/services/erp-and-internal-tools`** | **Outbound landing page only.** Shipped ahead of keyword validation. | **None. Do not invest here.** |
| The other 7 service pages | Catalog and relevance. Reachable from `/services`, which links all 12. | None beyond keeping them accurate. |
| `/about`, `/contact` | Conversion. Both currently thin and being expanded, for buyers rather than for search. | Conversion copy, not keyword copy. |
| Legal pages | Compliance. | Accuracy only. |

**The rule this table exists to enforce:** if someone proposes a page targeting `custom CRM development`, the answer is no. That term is Tier 3 and the page already exists for outbound. The same applies to ERP.

### Known cannibalization to avoid

The rescue page currently carries an `h2` literally titled "Code Review", so one URL is chasing two different intents (rescue *and* audit) and will do neither well. The fix is the split in Section 4's table: the audit offer gets its own URL and its own target, and the rescue page keeps the takeover angle. **Do not add audit or code-review language back onto the rescue page after the split.**

---

## 5. What we are fixing, and why, in order

The audit found three classes of problem. Ordering below is deliberate, not arbitrary.

### The uncomfortable one first: we sell performance and our own site broke it

- **A loading screen was blocking first paint on every single page.** `Loader.tsx` rendered an opaque full-viewport overlay at `z-[9999]`, removed only at the end of a roughly 2.4 second animation that could not even start until the JavaScript had downloaded and hydrated. Largest Contentful Paint on every route was hostage to that. With JavaScript disabled or failed, the overlay never lifted at all. **Deleted.**
- **All 12 service pages loaded their hero image with JavaScript.** A `data-background` attribute plus a `useEffect` calling `loadBackgroudImages()`, which set `style.backgroundImage` after mount. The result: the most important image on our highest-intent pages was invisible to the browser's preload scanner, skipped `next/image` entirely (no WebP, no resizing, no srcset), and shipped up to 388KB of raw JPEG to phones. **Converted to `next/image`.**

This mattered more than any ranking consideration. A prospect evaluating an agency that sells "handed over working" will check the site, and technical buyers do check. The gap between the pitch and the artifact was the single largest credibility problem found.

Also fixed in this pass: a global `filter: none !important` rule that was paying the paint cost of dozens of large blurred decorative elements while rendering none of them, unthrottled mousemove and scroll handlers, 12 static font weights where 6 of them existed to render a logo, and a hero `sizes` attribute that told the browser to fetch a third of the width actually needed.

### Second: we were publishing things that were not true

For a business whose entire differentiator is telling clients the truth in writing, this was the worst category of defect on the list.

- **`/cookies` described Essential, Analytics and Preference cookies, plus third-party cookies used to "deliver advertisements."** The site sets **zero** cookies. No `document.cookie` anywhere. It also directly contradicted `/privacy`, which correctly said the opposite. Two live legal pages disagreeing with each other. **Rewritten to what is true.**
- **Three case-study URLs rendered live** for projects that never shipped, because `notFound()` only fired when a slug was *missing* from the data file. **Now 404s unconditionally.**
- **`/privacy` claimed data was "stored on our secure servers behind firewalls."** There are no such servers in this flow. **Removed.**
- **All three legal pages stamped `Last Updated` with the build date,** so they re-dated themselves on every deploy and always looked freshly reviewed. **Hardcoded.**
- **Unmeasured claims on live pages,** notably "10x Load Without A Rewrite", which is an architectural assertion rather than a measurement. [DESIGN.md](../DESIGN.md) forbids this. **Audited.**

### Third: technical SEO hygiene

- **No canonical tags anywhere on the site.** Added on all 20 routes.
- **No structured data at all.** No Organization, no FAQPage, no Service, no BreadcrumbList. All added.
- **Homepage had no page-level metadata,** silently inheriting the layout default, whose title led with a brand nobody searches for.
- **No Search Console verification,** so no index data and no query data. Highest-leverage single hour available, because index data only accumulates once the clock starts.
- Plus: heading levels skipping from `h2` to `h6`, three meta descriptions long enough to truncate, a domain hardcoded in two places while `NEXT_PUBLIC_SITE_URL` went unread, and orphaned server actions that were one import away from shipping personal data to a CMS the privacy policy promised did not exist.

### What was already good, and should not be "improved"

Worth recording so nobody wastes a day on it:

- **Sitemap and internal links cannot drift.** The sitemap, nav mega-menu, homepage grid and footer all derive from the same `getRootServices()` call.
- **All 12 service pages are reachable by internal link.** None is orphaned or sitemap-only.
- **The three homepage Paths cards fail safe.** They resolve slugs against the service repo and drop the card rather than rendering a dead link.
- **Disabled routes were correctly excluded from the sitemap.** Only the case-study child route leaked.
- **Zero third-party scripts.** No tag manager, no chat widget, no analytics. This is a genuine performance asset.
- **Mobile responsiveness is careful and deliberate**, with real breakpoint ladders rather than a single desktop layout.
- **Titles are clean and non-duplicated,** all under 60 characters including the brand suffix.

---

## 6. Rules that must not be broken

1. **No invented numbers.** Per [DESIGN.md](../DESIGN.md). If it is not measured or delivered, it does not go on the site. This includes performance claims: we now have lab numbers, not field data, and they must be described as such.
2. **No fabricated case studies.** GMS, Hexadesk and Healthline are not live. The `/case-studies` routes stay 404 until real, permissioned client write-ups exist.
3. **Legal pages must match what the code does.** If analytics, a form, or a cookie is ever added, the relevant legal page changes **in the same commit**. Not afterwards.
4. **No vertical-locked keyword targets** until a vertical is actually chosen.
5. **No purchased links, no guest-post networks, no paid directories, no PBNs.** At zero authority a spam link profile is the one thing that can make this domain permanently worse. There is no shortcut worth this risk.
6. **Tier 3 terms are never ranking targets.** Section 3. Relevance only.
7. **Validate before writing.** No new keyword-targeted page without a manual check of the live results page for that term.

---

## 7. Honest expectations

So that a flat month two is not misread as failure.

**Days 0 to 30.** Zero organic traffic. Success is entirely mechanical: Search Console verified, sitemap submitted, technical and truthfulness fixes shipped, first pages entering the index. Any traffic in month one is a bot or somebody we told.

**Days 30 to 60.** First impressions in Search Console, likely single to low double digits per day, mostly irrelevant long-tail. Possibly ranking for our own brand name, though even that is contested by unrelated entities (Adobe's Brackets editor, allbrackets.com, ECO Cladding).

**Days 60 to 90.** *If Tier 1 content ships:* plausibly 20 to 80 organic sessions a month, and page two or three positions for the softest Tier 1 terms. One or two organic inquiries across the whole quarter would be a good result. A first-page long-tail ranking is a stretch goal, not a plan.

*If Tier 1 content does not ship:* close to zero. We would have 20 indexable pages, none of which targets a winnable query. **Technical work alone does not rank a domain.** It removes the reasons not to rank us; it does not give us anything to rank for.

**Not achievable in 90 days, and not in 180:** any ranking for the Tier 3 head terms. Those results pages are held by agencies with years of content and links, exact-match domains, and an affiliate layer.

### Two corrections to earlier internal optimism

1. **Keyword validation is not a 30 minute task.** [seo-keywords.md](./seo-keywords.md) Section 2c estimates roughly 30 minutes. Pulling Keyword Planner figures and then manually inspecting the top 10 results for around 15 terms is a half day. Underestimating it is probably why it is still open.
2. **SEO is a lagging channel here, not a leading one.** Per the channel ranking in [business-strategy.md](./business-strategy.md), referral converts far better than cold outbound but does not exist yet. The honest sequence is outbound, then clients, then case studies, then the linkable assets and brand searches that make SEO work at all. Anything that plans SEO as this quarter's acquisition channel is planning wrong.

### The one authority move worth making now

Everything in Section 5 is on-site work, and on-site work has a ceiling at zero authority. The highest-return off-site move available with no budget is **founder-led publishing on platforms that already have authority.** DEV.to and Medium already rank for inherited-codebase and AI-generated-code queries. A founder writing up what they actually found auditing AI-generated codebases can rank there **this quarter**, in a way this domain cannot rank this year. Getting listed in the existing category roundups is also far faster than trying to outrank them.

Directory profiles (LinkedIn, Clutch free tier, GoodFirms, Crunchbase) are worth an afternoon for entity consistency and as `sameAs` targets for the Organization schema. They are mostly `nofollow`. Their value is helping Google resolve "Alpha Brackets" as a business, not link equity. Google Business Profile only if there is a real, verifiable address. Never fabricate a location.
