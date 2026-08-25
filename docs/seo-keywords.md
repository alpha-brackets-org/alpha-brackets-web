# Alpha Brackets — SEO Keyword Strategy

Status: research complete, with an important limitation flagged upfront (read this first). Positioning is generic — "AI-native MVP builder for SaaS founders," no vertical lock (see [business-strategy.md](./business-strategy.md)).

## ⚠️ What this document is — and isn't

A dedicated research pass tried to pull real, tool-verified search volume and keyword-difficulty (KD) numbers for our target terms from Google Trends, Ahrefs, SEMrush, and Keyword Planner-style sources. **It could not.** Web-search-based research can find blogs *talking about* SEO methodology, but can't query Ahrefs/SEMrush/Google Keyword Planner directly — those require a paid tool subscription or a live Google Ads account, neither of which this research process has access to. Several blog-cited volume/cost numbers that did turn up were explicitly fact-checked and **refuted** (e.g., claimed MVP cost ranges of $70K–$150K US/Canada, $20K–$45K India/South Asia, $8K–$18K "Simple MVP" — all failed verification and should not be reused anywhere, including in sales conversations).

**What follows is:**
1. A verified, real SEO **methodology** (how to prioritize keywords with zero domain authority — this part is solid, sourced from Ahrefs'/Semrush's own documentation plus corroborated blogs)
2. A **practical keyword list** built from that methodology and Alpha Brackets' actual services/positioning — but the volume/difficulty figures next to them are **not verified real data**, they're structural placeholders showing where each term sits (head vs. long-tail, informational vs. commercial)

**Before finalizing a content calendar or paying for any keyword-targeted work, run this list through an actual tool** — Google Keyword Planner (free with a Google Ads account, no spend required to view estimates) or Ubersuggest's free tier are the lowest-cost ways to get real numbers. That step hasn't happened yet and this document is not a substitute for it.

---

## 1. Verified methodology (safe to act on)

- **For a brand-new, zero-domain-authority site, generic head terms are effectively unrankable.** "MVP development company," "AI development company," "custom software development company" — all have real competition from established agencies with years of backlinks. Don't expect to rank for these directly; use them for messaging/on-page relevance, not as ranking targets. [factors.ai, basecampstudios.com, digitalskillearnhub.com, mediasearchgroup.com, rankdots.com — 5 independently corroborated sources]
- **Target Keyword Difficulty (KD) under ~30** as a practical new-site ceiling — but treat KD as a rough heuristic, not gospel. Ahrefs' own documentation confirms KD is purely a referring-domain-count model (KD 40 ≈ 56 referring domains needed to rank; KD 90 ≈ 756) and explicitly does **not** account for on-page content quality or relevance. Always manually check the actual search results page (who's ranking, how authoritative, how deep their content is) before committing to a term. [ahrefs.com/keyword-difficulty — primary source]
- **A lower-volume, high-intent keyword beats a higher-volume, low-intent one.** The B2B SEO consensus example: 200 searches/month with strong commercial intent outperforms 5,000–12,000 searches/month with weak/informational intent, because generic informational traffic doesn't convert and SERP features (featured snippets, etc.) siphon clicks away from even the "real" volume. One framework scores keywords as `Intent(1-10) × ICP-Fit(1-10) × (1-KD/100)` to rank candidates by realistic revenue impact rather than vanity volume — a useful lens to apply once real volume/KD numbers are pulled for the list below. [theseocontentguy.com, getspike.ai, backlinko.com/ahrefs-vs-semrush]
- **Long-tail (3+ word) queries make up the large majority of all search queries by count** (Backlinko's widely-cited study: 91.8% of queries, though only ~3.3% of total search volume — each individual long-tail term is low-volume, that's expected, not a red flag). This is the standard justification for a long-tail-first strategy on a new domain. [Backlinko 2020 study, cited via factors.ai — note: the underlying study is from 2020, may not perfectly reflect 2026 query patterns]

---

## 2. Practical keyword list (funnel-staged — volume/KD figures NOT yet verified, see warning above)

### Primary / homepage (commercial intent, aspirational — likely too competitive to rank for directly on a new domain, use for on-page relevance not as a ranking target)
- "MVP development company for startups"
- "SaaS MVP development agency"
- "AI-native MVP development"
- "startup MVP development services"

### Secondary / service pages (commercial intent, narrower — better realistic ranking shot, still check real KD before committing)
- "SaaS platform development company"
- "AI integration for SaaS startups" / "AI integration services for startups"
- "custom software development company for startups"
- "RAG chatbot development for SaaS"
- "LLM integration services for startups"
- "fixed price MVP development"
- "offshore MVP development agency"

### Long-tail / blog content (informational intent — best realistic near-term ranking opportunity per the verified methodology above; pursue these first)
- "how much does an MVP cost"
- "MVP development cost for startups"
- "hire MVP developer"
- "fixed price MVP development $5,000" (or similar price-anchored variants matching actual launch-phase pricing — business-strategy.md Section 4)
- "MVP development for bootstrapped SaaS founders"
- "how to add AI features to existing SaaS product" (maps to the AI-retrofit client segment, business-strategy.md Section 1)

**Avoid:** vertical-locked terms ("healthtech MVP development," "legaltech AI agency") — contradicts the generic-positioning decision, and there's no vertical chosen yet to justify the content investment.

---

---

## 2b. Rescue and inherited-work terms (added with the positioning revision)

New service page live at `/services/code-rescue-and-rebuild`.

**⚠️ The reason it was prioritised has been retracted.** The original argument was that rescue "barely exists in agency marketing" and so was the one winnable category for a zero-authority domain. **That was never checked and it is false.** ISHIR markets "Vibe Code Cleanup Services", Oktopeak does regulated-industry rescue at a published $15,000 to $40,000, and Bamboo Agile, ASD Team, Durable Programming, Bemeir and Aalpha all run dedicated rescue pages. Ranked "Top 10 vibe coding cleanup" listicles exist for the exact terms.

**Listicles are the tell.** When aggregator content owns a SERP, a new domain does not outrank it. Treat these terms as **contested head terms**, subject to the same under-30 difficulty ceiling and manual SERP check as everything else in Section 1, not as an easy win.

**Confirmed again in the August 2026 audit, with more competitors than the retraction above lists.** A fresh manual SERP pass on all six terms found, in addition to the agencies already named: **Pragmatic Coders** (a project-rescue page *and* a separate vibe-coding-rescue page), **DOOR3**, **Celadonsoft**, **SOLTECH**, **Telliant**, **HeadBlocks**, **Radixweb**, **Redwerk** and **GetDevDone** (which runs both service pages and its own competitor buyer-guide listicle). Two findings worth adding:

- **Exact-match domains now exist for these terms**: `fixmyvibe.io`, `fixmyvibecoded.app`, plus Afterbuild Labs. An EMD on its own head term cannot be out-relevanced from zero authority.
- **Competitors name the tools and we do not.** Pragmatic Coders, Redwerk and GetDevDone all name Lovable, Bolt.new, Replit and Cursor explicitly. Nothing on our site names any of them. That is the gap worth taking, and it is narrower and fresher than the category terms.

**Tiering now lives in [seo-strategy.md](./seo-strategy.md) Section 3**, which splits these into "target first", "6 to 12 months" and "relevance only, never a ranking target". Read that before writing any new page.

**Practical consequence:** the rescue page earns its place as an outbound and referral landing page, where ranking is irrelevant. Any organic expectation for it should be set from the long-tail list below, not the head terms.

Terms this page targets, **all unverified for volume, same caveat as everything above**:

- "code rescue service"
- "rebuild AI generated code"
- "fix vibe coded app"
- "take over unfinished software project"
- "software audit service"
- "inherited codebase developer"

Long-tail variants worth checking first, per the verified long-tail-first methodology in Section 1: "what to do with an unfinished software project", "developer to take over existing project", "is my AI generated code production ready", "how to audit an inherited codebase".

**Deferred pages, blocked on Section 3 below:** `custom CRM development`, `custom ERP development`, `custom POS system development`, `custom booking system development`. These are commercial head terms with established competition, so per Section 1 they are probably unrankable at current authority. **Validate before writing the pages, not after.**

---

## 2c. ⚠️ Why automated keyword research does not work here (do not attempt a third time)

Two research passes have now failed to get tool-verified numbers. Recording the mechanics so nobody spends the time again:

- **Google Trends cannot be queried programmatically.** It has no public API, it deflects datacenter traffic (returns `429 Too Many Requests`, which is bot deflection rather than a real quota), and it is a JavaScript application whose served HTML contains no data at all. The numbers load afterwards from internal endpoints that need a session token minted by the page itself. This is not a retry-and-hope problem.
- **Trends would not answer the question even if it worked.** It reports *relative* interest on a 0-100 index, not searches per month. Deciding whether a page is worth writing needs absolute volume and difficulty, which Trends structurally does not provide. It is a tool for direction and seasonality, not sizing.
- **Ahrefs, Semrush and Keyword Planner all require a paid subscription or a live Google Ads account**, as recorded in the warning at the top of this document.

**The paths that actually work, all manual or account-gated:**

| Source | Cost | What it gives |
|---|---|---|
| **Google Keyword Planner** | Free with a Google Ads account, no ad spend needed | Volume ranges and competition. This is the one to use. |
| Google Trends **in a browser** | Free | Direction and seasonality, with CSV export. Only automation is blocked, manual use is fine. |
| Ahrefs Free Keyword Generator, Ubersuggest free tier | Free, limited | Rough volume and KD |
| **Google Search Console** | Free, needs the DNS verification already outstanding | Real impressions and clicks, better than any estimate, but only for pages that already exist |

**Practical consequence: Section 3 is a human task and cannot be delegated to tooling.** That is why it is still open.

**Correction to the estimate.** This was previously written as "a roughly 30 minute human task". It is not. Pulling Keyword Planner ranges is quick, but the part that actually decides anything is manually inspecting the top 10 results for each term and recording who ranks, how strong they are, what page type wins and how deep their content is. Across roughly 15 terms that is **half a day**. Budgeting 30 minutes for it is probably why it has been deferred twice: it never fits in the gap it was scoped for.

## 3. Recommended next step (not yet done)

1. Run every term above through Google Keyword Planner (free, no ad spend required to view volume ranges) or Ubersuggest's free tier to get real monthly search volume and competition data.
2. Cross-check the long-tail/blog-content terms first — per the verified methodology, those are the realistic near-term wins for a zero-authority domain.
3. Once real numbers exist, re-rank using the `Intent × ICP-Fit × (1-KD/100)` framework above rather than defaulting to whichever term has the highest raw volume.
4. Only then finalize which 3–5 terms the first blog posts (once `/blogs` is re-enabled — see [project-notes.md](./project-notes.md)) should target.
