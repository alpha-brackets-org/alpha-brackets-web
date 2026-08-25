import services from "@/data/services";
import { Service } from "@/types";

/**
 * The services promoted on the homepage grid, the navbar mega-menu and the
 * footer: the Featured + Supporting bundle from docs/business-strategy.md
 * Section 2.
 *
 * This is a promotion allowlist, not an availability list. All 12 services in
 * services.ts stay live at /services for SEO long-tail; this only controls which
 * ones get front-page, nav and footer placement. **Nothing is removed from the
 * catalog by leaving this list**, so business automation, for example, is still
 * live at /services under AI and Automation.
 *
 * ## Why this is an ordered list and not a `featured: true` flag on each service
 *
 * A boolean would colocate the decision with the service, which is tempting, but it
 * can only express *membership*. The order below is a ranking, and services.ts is in
 * catalog order, so a flag would take its order from that file and scramble this.
 *
 * ## The ranking, and why each position earns itself
 *
 * Ranked on three things: does the service have a matching offer in the homepage
 * funnel, does it serve the channel actually being worked, and can it close without
 * proof points that do not exist yet.
 *
 * 1. **AI and Intelligent Integrations.** The only service with both its own card in
 *    the funnel and its own published timeline (4 to 6 weeks). Section 2 of
 *    business-strategy.md calls it the differentiator. The retrofit buyer also has a
 *    working product and a proven budget, which is an easier close than a greenfield
 *    idea from someone who has never shipped.
 * 2. **Code Rescue and Rebuild.** Section 5 says rescue-led cold outbound is the
 *    channel actually being worked first, and Section 3 calls the assessment the
 *    cheapest route out of the proof-point problem. A real case for first place. It
 *    sits second only because outbound rescue leads are sent to the service page
 *    directly, while the homepage mostly receives referral and brand traffic.
 * 3. **SaaS Platform Development.** The core build offer, and what MVP Build sells.
 * 4. **Custom CRM Development.** Serves segment 4, the non-technical SMBs who cannot
 *    self-serve at all. Section 2 notes its value as an outbound and referral landing
 *    page **does not depend on ranking**, which is exactly what a homepage slot is
 *    for. It was also already promoted in the Paths section ("The business needs a
 *    system") while being absent from the nav and the services grid, so the homepage
 *    was contradicting itself.
 * 5. **Web Application Development.** The delivery layer. Kept for search intent per
 *    Section 2, and last because it is the least distinguishable from every other
 *    agency offering the same thing.
 *
 * **`ui-ux-design` was removed from this list.** Section 2 classifies it as
 * *Supporting: expected inside any MVP build*, explicitly not a standalone nav item,
 * so its presence here always contradicted the strategy. It is also the most
 * commoditised entry in the catalog and it is not what any of the four homepage
 * offers actually sell. **It stays live at /services** under Product Engineering.
 * Nothing was removed from the catalog.
 *
 * Keep the list at five: the nav mega-menu is laid out for five cards plus the
 * "View All Services" tile. The homepage grid is 3-wide at xl, so five leaves one
 * gap on the second row. Six would fill it, but there is no sixth service that
 * outranks the five above.
 *
 * ## Why the resolved array is exported and not just the slugs
 *
 * The three consumers used to each resolve the slugs themselves, and they did not
 * agree. The footer mapped over this list and got the intended order; the navbar
 * and the homepage grid filtered `services` instead, which discards this order and
 * falls back to catalog order. So rescue was rendering last in exactly the two
 * places the list exists to promote it.
 *
 * Resolving once here makes that class of drift impossible: there is no ordering
 * for a consumer to get wrong, because there is nothing left for a consumer to do.
 * Import `FEATURED_SERVICES`, do not re-derive it from `FEATURED_SERVICE_LINKS`.
 */
const FEATURED_SERVICE_LINKS: string[] = [
  "ai-and-intelligent-integrations",
  "code-rescue-and-rebuild",
  "saas-platform-development",
  "crm-development",
  "web-app-development",
];

/**
 * Resolved at module load, in the order above.
 *
 * The throw is deliberate. The failure mode this replaces was silent: renaming a
 * `pragma_link` in services.ts left a slug here matching nothing, and the card
 * just disappeared from the nav with no error anywhere. The site is fully
 * prerendered, so this runs at build time and turns that into a failed build.
 */
export const FEATURED_SERVICES: Service[] = FEATURED_SERVICE_LINKS.map(
  (link) => {
    const service = services.find((s) => s.pragma_link === link);
    if (!service) {
      throw new Error(
        `featured-services.ts lists "${link}", which is not a pragma_link in services.ts. ` +
          `Fix the slug or remove it from FEATURED_SERVICE_LINKS.`
      );
    }
    return service;
  }
).filter((service) => service.active !== false);

/**
 * Where a service sits in the ranking above. Unfeatured services all share one
 * sentinel rank that sorts them after every featured one.
 *
 * Exists so /services can order each category group by the same ranking the homepage
 * and nav use, instead of falling back to the order services.ts happens to be written
 * in. That order was arbitrary and it showed: `devops-and-cloud` rendered above
 * `code-rescue-and-rebuild` under "Rescue and Modernisation", and `crm-development`
 * came third in "Business Applications" behind two catalog-only services.
 *
 * **There is deliberately only one ranking on the site.** Re-order the list above and
 * the nav, the homepage grid, the footer and /services all follow together. Do not
 * add a second priority field to services.ts.
 *
 * The sentinel is `MAX_SAFE_INTEGER` and **not `Infinity`** on purpose. Subtracting
 * two comparator values is the normal way to sort on this, and `Infinity - Infinity`
 * is `NaN`, which makes the comparator return `NaN` for any two unfeatured services
 * and leaves their relative order unspecified. A finite sentinel subtracts to 0, so
 * they compare equal and a stable sort keeps them in catalog order.
 */
export function featuredRank(pragmaLink: string): number {
  const index = FEATURED_SERVICES.findIndex(
    (service) => service.pragma_link === pragmaLink
  );
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}
