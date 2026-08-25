import { notFound } from "next/navigation";

/**
 * Disabled for launch phase, like the `/case-studies` index above it.
 *
 * This route used to 404 only when the slug was *missing* from `FEATURED_WORK`,
 * which meant `/case-studies/gms`, `/case-studies/hexadesk` and
 * `/case-studies/healthline` all rendered full, indexable case study pages with
 * real metadata. Two problems with that:
 *
 * 1. Those projects are not live and were never shipped, so the pages presented
 *    work we cannot stand behind. That breaks the "never claim what is not real"
 *    rule in DESIGN.md, and it is checkable by any prospect.
 * 2. They were orphans for SEO: no internal links pointed at them and they were
 *    deliberately excluded from `sitemap.ts`, so the site was quietly exposing
 *    three pages nobody intended to publish.
 *
 * `notFound()` now runs before any lookup, so every slug 404s. The data file
 * `src/data/case-studies.ts` and the `Detail` component are kept for when real,
 * permissioned client write-ups exist. Re-enable both this route and the index
 * together, and only then.
 *
 * No metadata export on purpose. The `generateMetadata` that used to return
 * `{ title: "Not Found" }` was dead code: Next discards metadata for a route that
 * calls notFound() and renders the 404 title from src/app/not-found.tsx instead.
 */
export default async function CaseStudyPage() {
  notFound();
}
