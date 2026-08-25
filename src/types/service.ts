import { Stat } from "./stat";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceProcess {
  bg_image: string;
  title_first: string;
  title_second: string;
  desc: string;
  steps: ServiceStep[];
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
}

export interface WhyChooseUs {
  title: string;
  items: WhyChooseUsItem[];
}

/**
 * Which group a service renders under on /services.
 *
 * Headings are deliberately borrowed rather than invented: "Product Engineering"
 * is standard agency vocabulary, "Business Applications" is how Devsinc groups
 * its CRM/ERP work and is Microsoft's own term for the Dynamics 365 family, and
 * "AI and Automation" is a now-standard pairing. An earlier attempt used made-up
 * headings ("Software We Build", "How We Build It") which named nothing a buyer
 * would recognise or search for.
 *
 * "Solutions" is not used as a heading. Cubix uses that word for its own branded
 * products rather than for software types, so it is ambiguous in this market.
 *
 * This groups /services only. Promotion to the homepage and nav is a separate
 * concern, controlled by FEATURED_SERVICE_LINKS in src/data/featured-services.ts.
 */
export type ServiceCategory =
  | "product-engineering"
  | "rescue-modernisation"
  | "ai-automation"
  | "business-applications";

export interface ServiceCard {
  intro: string;
  icon: React.ElementType;
}

export interface ServiceCta {
  caption: string;
  link: string;
}

/**
 * A concrete, buyable first step for a service. Optional, and absence is meaningful:
 * most services do not have one and should render nothing.
 *
 * This exists for the rescue service, where the shape of the offer is what makes the
 * work safe to sell. Quoting a fixed price on a codebase nobody has read is how
 * agencies lose money, so the review is priced on its own and the rebuild is quoted
 * only afterwards.
 *
 * `guarantee` is the load-bearing field. It states what the client keeps even if they
 * walk away. With no case studies, a guarantee that removes the buyer's downside does
 * more to build trust than any proof we could display, so it is a required part of
 * the shape rather than an optional flourish.
 *
 * **No prices in any of these fields**, per docs/business-strategy.md Section 4.
 * "Fixed price, agreed before we start" is the claim; the figure is quoted on the call.
 */
export interface ServiceOffer {
  name: string;
  summary: string;
  includes: string[];
  guarantee: string;
  next: string;
}

export interface Service {
  _id: string;
  pragma_link: string;
  bg_image: string;
  title: string;
  /**
   * The hero paragraph on the service page. Written to hook a reader, so it can
   * run long. Do not shorten these for SEO reasons, use `meta_description`.
   */
  description: string;
  /**
   * The `<meta name="description">` for the page, when `description` is too long
   * to survive a search result.
   *
   * These two fields exist separately because they have different jobs and
   * different length limits. `description` was doing both, which meant the five
   * longest ones (up to 247 characters) were truncated in search results, and the
   * actual differentiator was often in the half that got cut. Shortening
   * `description` instead would have thrown away the best copy on the site.
   *
   * Keep this at 155 characters or under, and put the thing that makes us
   * different in the first clause. Falls back to `description` when absent, which
   * is correct for any service already under the limit.
   */
  meta_description?: string;
  keywords: string[];
  // Required on purpose, unlike `stats` and `solutions` below where absence is
  // meaningful. Every service belongs to exactly one group, and an optional field
  // would let a service silently vanish from the grid instead of failing to compile.
  category: ServiceCategory;
  card: ServiceCard;
  cta: ServiceCta;
  process: ServiceProcess;
  why_choose_us: WhyChooseUs;
  active: boolean;
  /**
   * Required, and deliberately so. This used to be optional with a
   * `DEFAULT_SOLUTIONS` fallback in ServiceIntro, which meant a service that
   * forgot its list silently rendered a generic one advertising DevOps and SEO
   * on pages about neither. Every service must state its own.
   */
  solutions: string[];
  offer?: ServiceOffer;
  stats?: Stat[];
}

export interface ServiceIntroProps {
  title?: string;
  description?: string;
  solutions?: string[];
  // No `stats`. Numbers render once per service page, in WhyChooseUs. Having them
  // here too meant the same figure appeared twice on every service page.
}
