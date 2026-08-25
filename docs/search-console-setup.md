# Google Search Console setup

A runbook for one person with a browser and access to the domain's DNS. Around 20
to 30 minutes, plus waiting for DNS to propagate.

This is the blocking item in `docs/project-notes.md` §11. Nothing else in the SEO
plan produces any data until it is done: the site has no on-site analytics by
design (see `docs/company-overview.md` §2.5), so Search Console plus Cal.com's own
booking record are the only two places search performance shows up at all.

---

## 1. Add the property

Go to <https://search.google.com/search-console> and sign in with the account that
should own this long term. Prefer a shared or company account over a personal one,
because moving ownership later means re-verifying.

Choose **Domain** (the left option), not URL prefix. Enter:

```
alphabrackets.com
```

No `https://`, no `www`, no trailing slash. A Domain property reports apex, `www`,
`http` and `https` together as one site. A URL-prefix property treats each of those
as a separate property, which would split the data on a site whose canonicals
already resolve everything to one apex form.

## 2. Verify with a DNS TXT record

Google will show a TXT record value like `google-site-verification=abc123...`.

In the domain registrar's DNS panel, add:

| Field | Value |
| --- | --- |
| Type | `TXT` |
| Name / Host | `@` (some panels want blank, or the bare domain) |
| Value | the full `google-site-verification=...` string Google showed |
| TTL | leave the default |

Save, then click **Verify** in Search Console. If it fails, wait and click Verify
again. Do not add a second record: propagation can take anywhere from a few minutes
to a few hours, and duplicate records are a common self-inflicted mess.

**Do not use the HTML tag method.** It is offered and it works, but DNS is the
right choice here for three reasons: it needs no `verification` entry in
`src/app/layout.tsx`, so nothing has to be maintained in the repo and nobody can
delete it in a future metadata pass; it covers the whole domain including any
future subdomain; and it survives a change of hosting platform. If a later pass
adds a verification meta tag on top of this, remove it.

## 3. Submit the sitemap

Search Console left nav → **Sitemaps**. Enter:

```
sitemap.xml
```

Google prefills the domain, so the full URL becomes
`https://alphabrackets.com/sitemap.xml`. Submit. It should read **Success** with 20
discovered URLs. "Couldn't fetch" immediately after submitting is normal; check
again the next day before treating it as a problem.

Worth knowing about how that file works, because it means there is almost nothing
to maintain here:

- It is generated at build time by `src/app/sitemap.ts`, which reads service pages
  from `serviceRepo.getRootServices()`, the same source as `generateStaticParams`
  in `src/app/services/[slug]/page.tsx`. Setting `active: false` on a service in
  `src/data/services.ts` removes it from the sitemap, the nav, the footer and its
  own page on the next deploy. No dashboard action needed.
- The disabled routes (`/blogs`, `/team`, `/careers`, `/case-studies`,
  `/team-details`) are deliberately absent, because they 404.
- `lastModified` is a hand-set constant in `src/app/sitemap.ts`, not `new Date()`.
  That is deliberate: stamping the build time would tell crawlers every page
  changed on every deploy, which is false and trains them to ignore the field.
  **Bump it when page content actually changes in a way worth recrawling.**

## 4. Request indexing on the pages that matter

Use the search bar at the top of Search Console (the URL Inspection tool) on each
of these, then click **Request indexing**:

1. `https://alphabrackets.com/`
2. `https://alphabrackets.com/services`
3. `https://alphabrackets.com/about`
4. `https://alphabrackets.com/contact`
5. One service page, e.g. `https://alphabrackets.com/services/<slug>`

There is a daily quota on indexing requests, so do not spend it walking all 20
pages. The sitemap covers discovery for the rest; this is just to skip the queue on
the pages a first visitor actually lands on.

## 5. Import into Bing Webmaster Tools

Go to <https://www.bing.com/webmasters>, choose **Import from Google Search
Console**, and authorise. It copies the property and the sitemap in one step.

Worth the two minutes: it covers Bing and DuckDuckGo, and Bing's index is what
several AI search tools read from.

## 6. What to check, and when

Resist reading the dashboard daily. There is nothing to see for weeks, and the
temptation is to react to noise.

| When | Where to look | The only question it answers |
| --- | --- | --- |
| ~3 days | Sitemaps | Did the sitemap fetch cleanly, 20 URLs discovered |
| ~2 weeks | Pages (Indexing) | Are the pages **indexed** at all. Not ranking, indexed |
| 4 to 8 weeks | Performance → Queries | What terms is the site actually being shown for |
| Anytime | Pages → "Why pages aren't indexed" | Real technical problems, if any |

Two things to be clear-eyed about before opening it in week two:

**Impressions will most likely be near zero for months.** This is a new domain with
no backlinks. `docs/company-overview.md` §2.6 already concluded that the generic
head terms in `docs/seo-keywords.md` are effectively unrankable at zero authority,
and `docs/business-strategy.md` ranks content and SEO fourth of four channels. A
flat Performance graph is the expected result, not a bug in the setup, and it is
itself the signal: it says keep spending effort on the first three channels.

**"Indexed" is the success condition for this task, not "ranking."** If the 20
pages are indexed with no errors, the technical SEO work is confirmed done and the
remaining gap is content, which no dashboard setting fixes.

## What this does not include, on purpose

No Google Analytics, no Tag Manager, no tracking script of any kind. Reasons, from
`docs/company-overview.md` §2.5 and worth restating because it will come up again:

- `src/app/privacy/page.tsx` and `src/app/cookies/page.tsx` both state that the
  site sets no cookies and runs no analytics. GA4 sets cookies. Adding it means a
  consent banner, consent-mode wiring, and rewritten legal copy, or the site is
  making a false privacy claim.
- GA answers "what did my visitors do." The open question at this stage is "is
  anyone finding the site," which is what this document sets up.
- Revisit when Search Console shows real impressions, and prefer a cookieless tool
  (Vercel Analytics, Plausible, Umami) over restoring the old CMS tracker, which
  read request headers and is what forced the entire site off static rendering.
