# Alpha Brackets — Business Strategy (Niche, Services, Pricing, Sales)

Status: Phase 1 (pre-client) launch. No clients yet — this document is the source of truth for niche/positioning, service prioritization, offer model, pricing, lead generation, and sales process. For site pages, routes, and code changes made to match this strategy, see [project-notes.md](./project-notes.md).

---

## 1. Niche & Positioning

**Old positioning:** horizontal "we do everything" dev/AI/marketing agency (10 services, no focal point).

**Second positioning (superseded, but the research below is still valid):** *AI-integrated MVP-to-scale builds for SaaS founders.*

**Current positioning:** *a custom software development agency, generalist at the brand level, with specialised funnel pages.* See "Positioning revision" immediately below for why this changed and what survives from the research that follows.

### Positioning revision (supersedes the "New positioning" line above)

**What changed:** the brand no longer claims a narrow specialism. It presents as a custom software development agency, which is what the company operationally is, and specialisation lives on individual pages instead.

**Why, in three parts:**

**1. The MVP-for-SaaS-founders niche targets the buyer most able to replace us.** AI cuts routine coding time ~46% (McKinsey, Feb 2026) and junior developer demand is down ~40% where AI tooling is seriously deployed. A technically capable SaaS founder can now self-serve a first version, and increasingly treats the work as commodity priced. This was raised from direct observation before it was researched, and the research supported it.

**2. Claiming a specialism with zero proof points produces a confused website, not a position.** The agency-specialisation literature is direct about the sequence: *"premature specialization kills more software agencies than staying generalist too long ever has"*, and *"if you have one case study in your chosen niche, you're not ready... you need at least three to five real proof points to be credible."* The named failure mode is *"announcing the new positioning but not changing anything else. The website still lists ten services."* That was an exact description of this site. [hausadvisors.com]

   The resolution is not to delete services. **The contradiction only exists if the brand claims a specialism.** With a generalist brand, a broad catalog is coherent, and specialisation can live where it is both sharp and rankable: individual pages.

**3. The two buyers arrive through different channels and cannot share one page.** Early-stage founders are advised to "ask five trusted founders for referrals rather than Google", which corroborates the referral-first ranking in Section 5. So a referred founder lands on the homepage and needs to see a credible broad agency, while a searcher lands on one page and needs depth on their exact problem. Hub and spoke serves both; one narrow homepage serves neither.

**Where demand is growing instead:**

- **Rescue and rebuild work.** A large-scale analysis of 8.1M pull requests found technical debt rises **30-41%** after teams adopt AI coding tools, code duplication up 48%, refactoring activity down 60%. Developer trust in AI output *fell* to 29%, down 11 points, while usage rose to 84%. Rescue engineering is emerging as a named specialty. Also corroborated from the supply side: demand for senior engineering judgment (integration complexity, data quality, AI governance, production stability) is described as growing, not shrinking.
- **Non-technical SMBs.** They cannot self-serve at all, and their spend is shifting "aggressively toward Business Process Re-engineering" rather than simple implementation. [techaisle.com]

**⚠️ Source caution, same standard as the competitor-pricing claims above.** The widely-circulated "8,000 startups needed rescue engineering by mid-2026" and "$4 billion technical debt crisis" figures come from **vendor blogs selling rescue services**. They are self-interested and were not independently verified. **Do not reuse those numbers anywhere, including in sales conversations.** What is credible is the direction, because three independent angles agree: the pull-request-scale study, the trust-decline survey data, and the senior-demand observation. Sell the direction, never the numbers.

**⚠️ CORRECTED: rescue is NOT a low-competition category.** An earlier version of this section, and of `company-overview.md`, asserted that code rescue "barely exists in agency marketing", and the decision to prioritise the rescue page over CRM and ERP rested on it. **One search disproved it.** ISHIR runs a project-rescue page and explicitly markets "Vibe Code Cleanup Services". Oktopeak does software rescue for regulated industries and publishes $15,000–$40,000 over 6–10 weeks. Bamboo Agile, ASD Team, Durable Programming, Bemeir and Aalpha all have dedicated pages, VibePup is positioned on AI-generated code cleanup, and ranked "Top 10" listicles exist for the exact terms. **Listicles are the tell: when aggregator content ranks for a term, a zero-authority domain will not outrank it.**

Demand is still real and the service is still right. What died is the **SEO** argument, and with it the reason CRM and ERP were deferred relative to rescue. Those pages shipped anyway so nothing needs undoing, but **do not reuse that reasoning.** The wedge that is actually defensible: the competitors above gate discovery inside a paid engagement, so a **standalone fixed-price review with a report the client keeps** is a genuinely different product. **Sell the review, not the rebuild.**

**Why this error is worth recording.** This document refuses to cite unverified competitor pricing, then asserted an unverified competitive claim in its own favour. The never-invent-data rule was being applied to claims about the world but not to claims about our own position. `AGENTS.md` now carries the rule explicitly.

**What survives unchanged:** the research below, with two exceptions noted in it. The AU/US/UK funding demand data (independently re-verified) and the TypeScript/RAG trend validation still hold. **The segment ranking has changed**: inherited work and non-venture SMBs were promoted above funded seed founders, because Carta shows seed rounds down 28% in count and 37% in dollars, which is a structural headwind rather than the footnote the nuance paragraph below treats it as. See `company-overview.md` §1.3 for the current order. **The SaaS-founder pitch becomes one funnel page rather than the company identity.** Nothing here is deleted.

**Fifth client-acquisition segment, to add to the four listed below:**

5. **Inherited and unfinished work.** Someone arrives with a codebase another team built, or that they built themselves with AI tooling, and it no longer works predictably. Distinct from all four below and plausibly the easiest to close for a shop with no case studies: the budget is already proven, the need is already validated, and the urgency is real in a way a greenfield idea never is, because their alternative is starting over. Sell it via the fixed-price audit in Section 3. Two hard rules on messaging: **never criticise the previous developer or agency** (the buyer may be that person), and **never imply a rescue track record** until one exists.

---

**The original research follows unchanged from here.**

### Why this niche
Research findings (three deep-research passes: AU-only, then a follow-up covering US/UK/global + competitors + dev trends, then Pakistan/Gulf market potential):

**Demand — AU, US, UK all confirmed (primary sources):**
- AU: A$5.4B raised in 2025 (+31% YoY, 3rd-largest year on record), A$1.8B in Q1 2026 alone (+63% YoY). [Cut Through Venture]
- US: VC hit $412.7B in H1 2026 (PitchBook/NVCA), AI companies took $355.9B of that — 86%. North America 2025 total ~$280B (+46% YoY), AI ~60% (~$168B). [Crunchbase News, SiliconANGLE]
- UK: £17.5bn raised across 2,000+ deals in 2025, AI captured >£6bn (over a third). Separately, UK Private Capital/BVCA: £8bn total 2025 VC, 63% into deeptech/AI. [NatWest/PitchBook "Future of UK Innovation" report, UK Private Capital/BVCA]
- Capital is concentrating in **AI-enabled and vertical (industry-specific) software** across all three markets, not generic horizontal SaaS. In AU specifically: vertical business software took 80% of software capital vs. 20% for horizontal. [Cut Through Venture]

**Important nuance — don't oversell the "AI gold rush" framing:** across US, UK, and AU, AI's funding share is being driven overwhelmingly by **mega-rounds into a handful of frontier AI labs** (OpenAI $122B, Anthropic $30B, xAI $20B — four deals were 65% of all global VC in Q1 2026), not broad early-stage funding. Seed/angel funding actually **fell 15% quarter-over-quarter** in Q2 2026 even as headline totals hit records, and mega-rounds (£25m+/$100m+) are 70–87% of deployed capital in both UK and US. **Translation: the ICP's own funding pool (pre-seed/seed) is a shrinking slice of a growing headline number.** Use "AI is where investor attention is" in messaging, not "AI funding is exploding for seed-stage founders" — the latter isn't what the data shows.

- A directly comparable competitor (Xenotix Labs, India) already runs the offshore-speed-arbitrage playbook — fixed-price tiered MVPs, "weeks not months" messaging, targeting US/UK/UAE founders. This confirms the model works but is **not differentiated on its own** — speed + offshore pricing is table stakes now.
- **Competitor pricing beyond Xenotix could not be independently verified** despite a dedicated second research pass — see the Competitor Landscape subsection below. Reliable published rate cards mostly don't exist in this market; pricing is set in private sales conversations.

**Trending fields (Stack Overflow 2025 Developer Survey + GitHub Octoverse 2025 — both primary, confirmed):**
- TypeScript is now the #1 language on GitHub, overtaking Python — explicitly AI-driven (static typing is a safety net for AI-generated code). Validates Alpha Brackets' existing Next.js/TypeScript stack as a real, current advantage, not just a preference.
- 1.1M+ public GitHub repos now use LLM SDKs (+178% YoY) — RAG/LLM integration is measurably real demand, not hype.
- 84% of developers use/plan to use AI tools (up from 76%) — but AI *agent* adoption specifically lags: 52% of developers don't use agents at all, 38% have no plans to, and only 33% trust AI output accuracy. **Don't over-index messaging on "agentic AI"** — it's the buzzword everyone's chasing, but developer-side data says trust and adoption are still early.
- RAG, Ollama, and LangGraph are the specific technologies developers most want to explore next — validates RAG-based builds specifically (not generic "AI features") as the sharper positioning within AI & Intelligent Integrations.
- GPT models dominate developer LLM usage (81.4%) — reinforces staying model-agnostic in messaging rather than committing to one vendor (already Alpha Brackets' stance).

**Client-acquisition segments (don't fish only where funding headlines point):** the mega-round concentration above means "just raised funding" alone is too narrow a targeting signal. Four real client segments, prioritized by realistic near-term fit:
1. **Bootstrapped/self-funded founders** — untouched by VC cycles, don't show up in funding databases at all, budget-disciplined and a strong fit for the fixed-price offer. Likely the largest realistic near-term pool.
2. **Existing software companies retrofitting AI** — the trending-fields data above shows AI *agent* adoption still lags badly (52% of developers don't use agents), meaning a large backlog of companies with live products who haven't added AI features yet. Sell this as a standalone entry point (a production AI feature added to a live product in 4–6 weeks), not just a post-MVP upsell.
3. **Funded seed/pre-seed vertical SaaS founders** — the original research segment, still real but smaller than headline funding numbers suggest.
4. **Non-VC SMBs/traditional businesses** — clinics, law firms, agencies wanting custom internal tools or AI-enabled customer-facing features. Least "sexy" but most insulated from AI-hype cycles; treat as steady long-tail via referral, not a dedicated channel.

Messaging should differ per segment — don't force the "AI-native" framing onto a bootstrapped founder whose product doesn't need it; a plain fixed-price MVP sprint is still a legitimate offer for segment 1.

**Conclusion:** "startup dev shop" is a commodity pitch. "AI-native MVP builder for SaaS founders," specifically leaning on RAG/LLM-integration work and a TypeScript-first stack, rides where funding *and* real developer/tooling trends are going — and is harder for generic MVP shops to copy. But don't sell it as "founders are drowning in AI money right now" — sell it as "investors reward AI-native product decisions," which is what the data actually supports.

### Competitor landscape
Names surfaced across categories, but pricing claims mostly failed independent verification:
- **Offshore/South Asia:** Xenotix Labs (India) — the one **verified** direct comparable; fixed-price tiers $2,500–$30,000 depending on complexity, "weeks not months" messaging.
- **Eastern Europe:** Brainhub, Innowise, Pragmatic Coders, SumatoSoft — rates cited around $35–99/hr, but sourced from self-promotional company blogs (one literally ranks itself #1 in its own article) — **not independently verified**.
- **India (rate comparison only):** a single India-based outsourcing agency's own blog claims India $25–45/hr vs. Eastern Europe $55–90/hr vs. Western Europe $100–160/hr — directionally consistent with known offshoring economics, but self-interested and unverified as exact figures.
- **US/UK boutique & AI-native studios:** HouseofMVPs ($3,999–$14,999 fixed, "AI native MVP studio"), Toptal AI ($80–$250/hr marketplace), Crowdbotics ($40,000–$150,000, platform + engineers), LangChain-focused boutiques ($25,000–$100,000) — all sourced from a single blog each, **none independently verified**.
- **Simform** — the one competitor pricing claim that was actively fact-checked: **refuted**. Simform publishes no rates on its own site; the $60K–$180K+ figure traced to an unverifiable third-party blog. Don't reuse it, and treat any similarly-sourced "competitor X charges $Y" claim with the same skepticism.

**Practical implication:** don't try to price *against* a competitor rate card — one doesn't reliably exist in public sources. Price against the arbitrage math (Section 4) and validate against real client budget conversations instead.

### Pakistan & Gulf market (research complete — two passes, second pass closed the first pass's gap)

**Pakistan — confirmed:**
- Pakistan's tax structure structurally pushes serious dev-agency revenue toward exports, not domestic clients: PSEB-registered IT/ITeS export income gets a **0.25% Final Tax Regime**, extended through June 2029 (Finance Bill 2026), and that registration is explicitly built for firms serving international clients — not domestic-market firms. [urcapk.com] This confirms the assumption that most serious Pakistani agency revenue is export-oriented — it's a tax-code incentive, not just a market-size accident.
- **Three named Pakistani agencies verified with real Gulf presence, not just Devsinc:**
  - **Devsinc** — verifiable UAE/Saudi case studies (AESOP, Carat Craft, EDIT, TULA Studio) plus domestic clients (Zellbury, Interwood). [devsinc.com]
  - **Tkxel** — a registered Saudi subsidiary (Tkxel Arabia Co LLC, Riyadh, with its own CR/VAT numbers and bank relationship) plus a physical Dammam office; self-describes as a UAE-market IT provider on its own blog. Clutch-listed rate: $25–49/hr. [tkxel.com, clutch.co/profile/tkxel]
  - **Cubix** — a dedicated Dubai/UAE office with its own country-specific page and press coverage of a 2019 Middle East expansion, plus reported GCC client work. [cubix.co/ae, clutch.co/profile/cubix]
  - **Arbisoft** — real but thin Gulf presence: a small 2–5 person Riyadh satellite office only, no dedicated regional content or named Gulf clients found. Clutch-listed rate: $50–99/hr (notably higher than Tkxel). [clutch.co/profile/arbisoft]
- **The "$25–49/hr for most Pakistani firms" directory claim (superbcompanies.com) did not hold up broadly:** it matched Tkxel, but Arbisoft's actual rate ($50–99/hr) contradicts it and a Cubix rate-match claim was explicitly refuted on verification. **Don't quote a single Pakistan-wide rate figure** — rates vary meaningfully firm-to-firm even among agencies with real Gulf traction.

**Gulf/Middle East (UAE, Saudi, Qatar, Bahrain) — confirmed:**
- MENA AI startups raised a record $858M, 22% of total regional VC funding. [agbi.com]
- Saudi Arabia's SDAIA has driven $9.1B in AI investment across 664 companies — a government-level infrastructure commitment (not directly reachable by a small agency, but signals a receptive environment). [vision2030.ai]
- **UAE leads globally in generative AI adoption — 64% of its working-age population using genAI by end of 2025, vs. 26% in Saudi Arabia.** [agbi.com] This is the strongest actionable signal here: UAE-based companies are unusually primed to want AI features, more than most Western markets studied so far.

**Explicitly refuted — do not reuse these figures:** most specific Gulf VC dollar-amounts and growth-rate claims (Saudi/UAE combined $3.13B total, 145%/84% YoY growth splits, AI-funding-share percentages, MENA H1 2026 totals) failed verification — several sources directly contradicted each other on which country raised more. **Gulf VC reporting is publicly as unreliable as some UK data was in the prior pass.** Don't build a "Gulf startups are well-funded" pitch on any specific number — lead with the UAE AI-adoption stat instead, which held up.

**Strategic read:** Pakistan → Gulf is a proven channel (Devsinc, Tkxel, and Cubix aren't hypothetical), and UAE's AI-adoption culture is a genuine tailwind for an AI-native pitch specifically — timezone/cultural proximity plus that adoption stat is a more defensible angle than any funding-volume claim in this region. Treat this as a secondary/exploratory channel alongside AU/US/UK, not a pivot.

### ICP (Ideal Client Profile)
- Stage: pre-seed to seed ($250K–$2M raised) **or** bootstrapped/self-funded with a similar budget ceiling — funding status is not a qualifier, budget is
- Team: solo/small founding team, no in-house engineering
- Product: SaaS with an AI feature as a real differentiator (not AI bolted on) — **generic for now, no vertical lock (healthtech/legaltech/etc.) until 2–3 clients are closed and a vertical pattern emerges organically.** Revisit vertical specialization once there's a real client base to observe, not before.
- Budget: realistically $2.5K–$25K for a first build (see revised pricing, Section 4)

### Messaging angle vs. competitors
- Don't lead with speed/price alone (everyone offshore claims this).
- Lead with: **"We don't just build your MVP — we build the AI feature that makes it fundable."**
- ~~Proof point: GMS and Hexadesk (real shipped multi-tenant SaaS, not prototypes).~~ **Stale — GMS and Hexadesk were abandoned by the client and are not live; Healthline is also not live.** Don't cite any of the three as a live/shipped proof point until real client work exists (see `AGENTS.md`'s "never invent data" rule). Lead with capability/process instead until then.
- Keep weekly-demo transparency and 4–6 week speed as supporting trust signals, not the headline.
- Split messaging by client-acquisition segment (above) — don't use one pitch for all four.

### Research caveats (be aware when quoting these numbers externally)
- AU, US, UK demand data is strong/verified. Most granular competitor-pricing benchmarks (beyond Xenotix) failed adversarial verification and were discarded — pricing in Section 4 is directional, not an audited market rate card.
- Gulf VC funding figures are largely unreliable publicly (see Pakistan & Gulf subsection) — don't quote specific dollar amounts for that region.

---

## 2. Services — Keep / Demote / Remove

Full catalog stays live in the codebase (`src/data/services.ts`, all 10 services) for SEO long-tail, but promotion differs:

**Catalog structure on the site.** `/services` groups all 11 under four headings via the required `category` field on `Service`: Product Engineering, Rescue and Modernisation, AI and Automation, Business Applications. Those headings are borrowed vocabulary, not invented ones (Devsinc and Microsoft for "Business Applications", standard agency usage for the rest), and "Solutions" was rejected as a heading because Cubix uses it for its own branded products. **Categories are presentation only and do not change promotion**, which is still the Featured/Supporting/Catalog split below, encoded in `FEATURED_SERVICE_LINKS`. See `project-notes.md` §9.

**11th service added: Code Rescue and Rebuild** (catalog-only for nav purposes, but the priority funnel page). Serves segment 5 and sells the Section 3 assessment offer.

**12th and 13th services added, both serving segment 4** (SMBs and traditional businesses, who cannot self-serve and do search Google):

- **Custom CRM Development.** Shipped first because "Business Applications" is a heading that specifically denotes CRM and ERP, and because its value as an outbound and referral landing page does not depend on ranking.
- **ERP and Internal Business Tools.** Covers the breadth an ERP buyer actually asks for: finance, stock and inventory, purchasing, HR records, jobs and reporting. **Delivery is phased, but the scope is not narrow**, and the distinction matters in sales conversations as much as on the page. The first version of the page conflated the two and read as an inability to do the job.

  Two limits that are real and should be held to on calls: **we build custom software, we are not an off-the-shelf ERP vendor and not a migration shop**, so never position this as replacing or migrating anyone off SAP, NetSuite or Odoo. And **payroll processing is not offered**, because it is regulated; HR means records, leave and approvals. The title must not be shortened to "ERP Development", since "and Internal Business Tools" is what signals custom-built.

**POS and booking-system pages remain deferred**, blocked on the open item in `seo-keywords.md` §3: running the terms through a real keyword tool before committing to work whose only justification is search. Draft copy for both is in `docs/service-page-drafts.md`.

**Sequencing note worth keeping:** ERP shipped ahead of that validation. CRM stands on its own without ranking, but ERP's main justification *was* search intent, so it is the first page to revisit if the keyword pass comes back poorly.

### Featured (homepage, nav, footer) — ranked, and the order is load-bearing

This list was re-ranked and is now encoded in order in `src/data/featured-services.ts`,
which resolves it once so the nav, homepage grid and footer cannot disagree. Ranked on
three things: does the service have a matching offer in the homepage funnel, does it
serve the channel actually being worked, and can it close without proof points that do
not exist yet.

1. **AI & Intelligent Integrations** — the differentiator, and now the only service with
   both its own funnel card and its own published timeline (4–6 wks). **No longer
   "bundled into the MVP pitch, not sold separately"**: Section 3 makes it a standalone
   offer, so that earlier line is superseded. The retrofit buyer has a working product
   and a proven budget, which is an easier close than a greenfield idea
2. **Code Rescue and Rebuild** — Section 5's rescue-led cold outbound is the channel
   actually being worked, and Section 3 calls the assessment the cheapest route out of
   the proof-point problem. Second rather than first only because outbound rescue leads
   are sent to the service page directly, while the homepage takes referral and brand traffic
3. **SaaS Platform Development** — the core build offer, what MVP Build sells; note GMS, Hexadesk, and Healthline are not live/shipped products (client abandoned GMS/Hexadesk; Healthline confirmed not live) — do not cite them as proof points until real client work exists
4. **Custom CRM Development** — segment 4, the SMBs who cannot self-serve. Its value as an outbound and referral landing page does not depend on ranking, which is what a homepage slot is for. It was already promoted in the homepage Paths section while being absent from the nav and services grid, so the page contradicted itself
5. **Web Application Development** — the delivery layer; keep visible for search intent, frame as part of the MVP offer. Last because it is the least distinguishable from every other agency offering it

### Supporting (mentioned as part of the bundle, not standalone nav items)

- **UI/UX Design** — expected inside any MVP build. **It was in the featured five until this pass, which contradicted this very classification.** Removed from the nav, homepage grid and footer; still live at `/services` under Product Engineering. It is also the most commoditised entry in the catalog and it is not what any of the four homepage offers sell
- **Business Automation** (n8n/Zapier/Make) — post-launch upsell

### Catalog only (SEO/long-tail; removed from nav/homepage)
6. Mobile App Development
7. DevOps & Cloud Infrastructure
8. SEO & Performance Optimisation
9. **Marketing & Campaign Tooling** (formerly "AI-Driven Digital Marketing") — reframed as custom software for marketing teams and agencies (campaign dashboards, reporting automation, content workflow tools), not Alpha Brackets running ads or managing campaigns itself
10. **Custom Analytics & Reporting Platforms** (formerly "Growth & Analytics") — reframed as bespoke BI/analytics dashboard builds, not Alpha Brackets managing growth or running experiments itself

**Why 9 & 10 were reframed, not cut:** the original framing ("we run your ads," "we manage your growth") positioned Alpha Brackets as a marketing/growth agency, directly contradicting the "AI-native MVP builder" identity. Rather than dropping the catalog entries, they've been rewritten around building software *for* marketing-adjacent businesses — the same SaaS/web-app development work the company already does, aimed at a different buyer. This ties directly to client-acquisition segment 4 in Section 1 ("agencies wanting custom internal tools"), so it's an on-brand vertical use case rather than a generalist detour. Both stay catalog-only (not on homepage/nav) since the core MVP/AI offer is still the lead pitch.

Nav has been trimmed to reflect this split — see [project-notes.md](./project-notes.md) for the implementation.

---

## 3. Offer Model (productized packages)

| Package | Scope | Timeline |
|---|---|---|
| **MVP Build** *(publicly one offer, see below)* | One core user journey, auth, dashboard. Payments, multi-tenancy and one production AI feature (chatbot/RAG/automation) added to scope where the product needs them | 4–10 wks |
| **Scale Retainer** | Post-launch: feature sprints, DevOps/monitoring, growth analytics, ongoing AI iteration | Monthly, ongoing |
| **Scoping Sprint** | For an idea not yet built: work out what it actually takes and write it down, producing a spec and a fixed quote for the build. The client keeps the spec either way | Short, fixed price |
| **Code Review and Rescue Assessment** | Read an existing codebase and infrastructure, produce a written assessment: what works, what is risky, what is missing. No code changes. Rebuild or completion quoted separately afterwards | Short, fixed price |

**The rescue assessment is the entry offer, and its structure is load-bearing.** Rescue work is unscoped by nature, which collides directly with the fixed-price model in Section 4: quoting a rebuild on a codebase nobody has read is how agencies lose money on this work. Pricing the assessment separately is what makes fixed price safe, because the rebuild is only quoted once the code has been seen.

It is also the cheapest way out of the proof-point problem in Section 1. Assessments are small and fast, so they generate delivered engagements far quicker than MVP builds, and those are the three to five proof points the specialisation literature says are the prerequisite for credibly claiming a specialism later. The buyer keeps the written assessment whether or not they continue, which is what makes it an easy first yes.

Maps to client-acquisition segment 5. Live on the site at `/services/code-rescue-and-rebuild`.

Add-ons sellable into any tier: SEO/performance pass, paid-ads/growth funnel setup, business-process automation — available on request, not headline services (see Section 2).

### The two build tiers were merged on the site, and kept internally

**The homepage now shows one build offer, not two.** MVP Sprint and AI-Native MVP were
separate cards, and the page never explained the difference: the only visible signals
were that one said AI and cost more. "Multiple customers on one product" was also
listed under the AI tier, where it has nothing to do with AI and implied the cheaper
tier could not serve a second customer.

Two precisely scoped tiers with different week counts also claim more precision than
this company can back today, because there is no delivery record yet. So the public
offer is one **MVP Build**, 4 to 10 weeks, scoped and quoted on the call.

**The two price bands below are unchanged and still govern quoting.** Merging is a
site-copy decision, not a pricing one. A build with payments, multi-tenancy and a
production AI feature quotes into the upper band; a single-journey first version
quotes into the lower one. Public simplicity, internal structure.

**AI is framed as a judgement, not a default.** The card says an AI feature is built
"when your product needs one. We will say so if it does not." That follows the warning
in Section 1 against forcing the AI-native framing onto a founder whose product does
not need it. With no case studies, declining to oversell is worth more than joining
every competitor in shouting about AI. Do not rewrite this into hype.

**Segment note, now addressed by a standalone offer.** This used to read that the
AI-Native tier should not be the only front door, and that AI-feature-add work for the
"existing software companies retrofitting AI" segment needed its own entry point
rather than only being reachable via the Scale Retainer upsell. **It now has one.**

| Package | Scope | Timeline |
|---|---|---|
| **AI Integration** | One production AI feature added to a product that already works. No rebuild of the existing system | 4–6 wks |

Sold from `/services/ai-and-intelligent-integrations`, which was already in the
featured five and already published the 4 to 6 week figure. The homepage card reuses
that number rather than inventing one, so **the two must be changed together.**

### The homepage offers split by situation, not by price tier

The four cards map to the four ways someone arrives, which is a question a visitor can
answer about themselves. A price tier is not.

| Card | The visitor's situation |
|---|---|
| Code Review | Has software, it is misbehaving |
| Scoping Sprint | Has an idea, nothing built |
| MVP Build | Needs the product built, AI included where it belongs |
| AI Integration | Has a working product, the AI part is what is new |

This is the same axis the Paths section uses. **Paths still lists only three
situations and does not mention the AI route**, so those two sections do not yet
agree. Open item.

---

## 4. Pricing

Anchored on the one verified real-world comparable (Xenotix Labs) plus known offshore-cost economics — **directional starting points, validate against real client conversations before finalizing a rate card.**

**Revised for launch phase (introductory pricing to win the first provable case studies — not the long-term rate card):**

| Package | Original anchor | **Launch-phase starting price** | Note |
|---|---|---|---|
| MVP Build, lower band | $3,500–$8,000 | **From $8,000** | Raised from $2,500. That figure did not cover delivery cost, see the unit economics in `company-overview.md` §1.4 |
| MVP Build, upper band (payments, multi-tenancy, AI feature) | $10,000–$25,000 | **From $15,000** | Raised from $7,000, into the published market band |
| Scale Retainer | $2,500–$6,000/month | *(unchanged — not shown publicly)* | Not independently verified — inference from general offshore dev-as-a-service norms only |

**Why lower the entry point:** a brand-new shop with no public case studies asking $10K+ upfront is asking for trust it hasn't earned. Price at/near market entry to close the first 2–3 clients and get real delivered work to point to, then raise both tiers back toward the original anchors ($3,500 / $10,000) once that proof exists. **Revisit this pricing after the first 2–3 projects close** — don't leave it at launch-phase pricing indefinitely.

**Arbitrage math (verifiable, safe to use in sales conversations):** US developer costs benchmark at $110K–$180K+/year (BLS-corroborated). Even at the $15,000 AI-MVP entry price, that's still a small fraction of what a few weeks of one US senior engineer would cost fully loaded — a legitimate, defensible pitch to AU/US founders regardless of which pricing phase you're in.

### Website pricing display rule (revised, supersedes the earlier "Starting at $X" rule)
- **Do not show any price on the site.** No hero stat, no pricing cards, no "starting at" figure anywhere public, including page metadata shown in search results. This was tried during launch and reversed: a visible starting price is easy to screenshot and compare against a cheaper competitor with no context on what is included, so it invites price shopping instead of qualifying leads.
- **Price is quoted verbally on the free discovery call**, after hearing the client's actual scope. This still filters budget mismatches, just through a conversation instead of a public number.
- Packages, timelines, and what is included in each **are** still shown publicly (the single MVP Build card states what is in scope and what pushes a build longer) — only the dollar figure is held back.
- Full cost-calculation methodology (how each price is actually built up from hours, overhead, and margin) now lives in a separate internal document: [pricing-and-cost-calculation.md](./pricing-and-cost-calculation.md). That document is not for the site and not for clients, only for quoting consistently on calls.

### SEO Keywords

Moved to a dedicated document: [seo-keywords.md](./seo-keywords.md) — includes the full keyword list by funnel stage, the verified SEO methodology behind it, and an important caveat about what is/isn't real tool-verified data (short version: no actual Google Trends/Ahrefs/SEMrush volume numbers survived verification for our specific terms — read that doc before finalizing any content calendar).

---

## 5. Lead Generation Structure

Ranked by fit for this ICP, based on verified conversion data:
- Referral/partnership deals convert up to **19x higher**, with 74% shorter sales cycles and 73% lower CAC than cold outreach. [gigradar.io]
- Personalized LinkedIn outreach gets 15–30% response rates vs. generic; omnichannel (LinkedIn + email) lifts purchase intent 287%. [martal.ca]

1. **Referral/partnership** (top priority) — partner with pre-seed accelerators, angel syndicates, fractional CTOs/design shops who see founders before you do.
2. **Personalized LinkedIn outbound** — target founders with recent funding announcements, 60+ day open engineering-role postings, or — per the segment strategy in Section 1 — companies with a live product but no AI feature yet, and bootstrapped/revenue-generating founders visible via indie-hacker communities or ProductHunt launches.
3. **Niche communities** — 5–8 small, active founder/vertical-specific groups outperform large generic ones.
4. **Content/SEO** around AI-integration topics (see SEO keywords, Section 4) — slow to compound, cheap and durable.
5. **Paid ads** — lowest priority; no reliable CPL benchmark found for this ICP, don't lead spend here.

### The channel actually being worked first: rescue-led cold outbound

The ranking above is by *conversion quality*, not by what is available from a standing start. Referral converts best but depends on a network that does not exist yet, and content is fourth here and will not produce a client this quarter. **Outbound is the only channel where volume is controllable from zero**, which is why it goes first in practice.

The real argument is the feedback loop. **Reply rate answers "does rescue resonate" in about two weeks. SEO would take six months to answer the same question.** Test the positioning where the answer arrives fast, then let what works inform the slower channels.

**⚠️ Do not send cold email from `alphabrackets.com`.** Cold volume damages domain reputation, and that domain carries `info@alphabrackets.com`, currently the only working inbound channel on the site. Use a separate sending domain pointing at the same site. SPF, DKIM and DMARC on it before the first send, warm it up, and start at 20 to 30 per inbox per day without spiking. The research on this is blunt that the failures are technical rather than copywriting.

**Target signals, ranked by how loudly the prospect has already declared the problem. These are untested hypotheses, not verified channels:**

1. **Job ads seeking a developer to "take over", "maintain an existing", or "inherit" a codebase.** Strongest available: publicly stated, dated, names the exact problem, and implies budget.
2. **Founders posting publicly about being stuck** with a codebase or an AI-built app. Declared problem, but approach with help rather than a pitch.
3. **App store reviews on small apps complaining of crashes and bugs.** Specific and quotable.
4. **Launch directories 12 to 24 months old** where the product is still up but has not moved. Weaker, more inference.
5. **Sites failing performance and Core Web Vitals checks.** Feeds SEO & Performance rather than rescue.

**Start with 1 and 2 only.** If those produce no replies, either the message or the segment is wrong, and that is worth knowing before building lists at scale.

**Message shape:** a specific observation about them, what usually causes it stated as expertise rather than diagnosis, the fixed-price review with the report theirs to keep, and an ask for a conversation rather than a sale. If the opening sentence could be sent to anyone, the email has failed. **Never criticise whoever built the thing.** The reader may be that person.

**Read the results as:** replies at all means the segment is real, iterate the message. Opens without replies means the message is wrong, not the segment. Nothing means change signal or segment before writing more pages.

Attribution is booking question 5 ("how did you hear about us"), which is the only attribution that exists while analytics is off.

### Funnel / qualification process
Trigger-event outbound or referral intro → discovery call (qualify stage/budget, product state, AI-feature fit) → scoped fixed-price proposal (MVP Sprint or AI-Native MVP tier, messaging matched to the client's segment) → weekly-demo delivery → retainer conversion pitch at launch.

**Open gap:** no verified paid-ads CPL benchmark for this exact ICP — don't lead spend on paid channels until organic/referral channels are proven.

---

## 6. Work Process (site messaging)

- Show **one** unified process on the homepage: Discovery → Design → Build → Test/Launch → Scale — not 10 separate per-service breakdowns.
- ~~Detailed per-service process copy stays in the codebase (`services.ts`) but only surfaces on the 1–2 actively-promoted service pages (MVP Sprint / AI-Native MVP), not all 10.~~ **Not what the site does.** All 10 service pages render their own process timeline from `services.ts`. That is intentional: each of the 10 pages exists for search intent and needs unique content, and a page with no process section reads as thinner than the others. The single unified process still leads on the homepage and on `/services`. Decide whether to keep it this way or trim; do not treat the old sentence as the current state.
- Process substitutes for social proof pre-launch (no testimonials/case studies yet) — keep it confident but don't over-promise specifics (e.g. "weekly demos," "4–6 weeks") you're not ready to defend on the very first real client.

---

## Open strategic work (not yet done)

1. **Homepage hero/CTA copy rewrite** to lead with the generic "AI-native MVP builder for SaaS founders" positioning (no vertical lock) — not yet implemented on-site.
2. ~~**"Starting at $X" pricing tiers** (now $2,500 / $7,000 launch-phase prices) need to be added to the actual services/homepage per the display rule — not yet implemented on-site.~~ **Struck. This is contradicted by the website pricing display rule in Section 4**, which supersedes it: no price appears anywhere public, including page metadata. Do not act on this item. Price is quoted verbally on the discovery call, and the `/faqs` page now answers the cost question without a figure.
3. Verticals intentionally deferred — revisit once 2–3 clients are closed, not before.
4. Validate Scale Retainer pricing against real client conversations once the first deals close — still unverified beyond the directional inference in Section 4.
5. Revisit MVP Sprint / AI-Native MVP pricing back toward original anchors ($3,500 / $10,000) once the first 2–3 projects close and there's real proof to justify it.

For implementation status of on-site changes (nav, routes, pages, code), see [project-notes.md](./project-notes.md).
