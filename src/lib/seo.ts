import type { Metadata } from "next";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * One builder for per-page metadata.
 *
 * Before this, /about, /contact, /faqs, /services and /services/[slug] each
 * hand-wrote the same object shape: a canonical, an openGraph block re-typing
 * `url`, `siteName` and `type`, and an OG title with the brand spelled out. Five
 * copies of one shape, and they had already drifted: two wrote the literal string
 * "Alpha Brackets" where the other three read SITE_CONFIG.name, and none of them
 * carried `locale`.
 *
 * Two things this exists to get right, both of which were live bugs at some point
 * and are documented at length in src/app/layout.tsx:
 *
 * 1. **`title` takes the bare page name, never the brand.** The root layout sets
 *    `template: "%s | Alpha Brackets"`, which appends it. Passing
 *    "About Us | Alpha Brackets" here renders the brand twice. Use
 *    `absoluteTitle` for the one page that needs to opt out of the template.
 *
 * 2. **Next replaces these objects, it does not deep-merge them.** A page that
 *    sets `openGraph` loses every field the layout's `openGraph` had rather than
 *    inheriting the rest, which is how `locale` went missing on all five pages.
 *    Same for `twitter`: because the layout emits a site-wide `twitter:title`, a
 *    page that set only `openGraph` still shared the homepage's Twitter card
 *    title. So both blocks are written out in full here, every time.
 *
 * `images` has to be written out for the same reason, and this one was a live bug.
 * The opengraph-image file convention only auto-injects into the segment that owns
 * the file, and a page that declares `openGraph` drops the inherited one along with
 * everything else. So /about, /contact, /faqs and /services each shipped with **no
 * og:image at all** while /privacy, /terms and /cookies had one, purely because the
 * legal pages were the only ones that never declared an `openGraph` block. Links to
 * the four pages a prospect is most likely to be sent rendered as bare text in
 * LinkedIn and Slack. Passing `ogImagePath` keeps the card explicit per route.
 */
interface PageMetadataInput {
  /**
   * Route path with a leading slash, e.g. "/about". The canonical and
   * `openGraph.url` are both derived from it, so they cannot disagree. Use "/"
   * for the homepage.
   */
  path: string;
  /** Bare page name. The layout template appends " | Alpha Brackets". */
  title: string;
  /** Used for the meta description, the OG description and the Twitter card. */
  description: string;
  keywords?: string[];
  /**
   * Overrides the full `<title>`, skipping the layout template. Only the
   * homepage needs this: it leads with what we do rather than the brand.
   */
  absoluteTitle?: string;
  /**
   * Overrides the share-card title. Defaults to "<title> | Alpha Brackets",
   * because the layout template does not apply to OG or Twitter titles.
   */
  ogTitle?: string;
  /** Shorter share-card description, where the meta description is too long. */
  ogDescription?: string;
  /**
   * Path to the route's own generated card, relative to the site root. Defaults to
   * the site-wide one from src/app/opengraph-image.tsx. Only /services/[slug] needs
   * to override it, because it has its own opengraph-image file.
   */
  ogImagePath?: string;
}

export function buildPageMetadata({
  path,
  title,
  description,
  keywords,
  absoluteTitle,
  ogTitle,
  ogDescription,
  ogImagePath = "/opengraph-image",
}: PageMetadataInput): Metadata {
  const shareTitle = ogTitle ?? `${title} | ${SITE_CONFIG.name}`;
  const shareDescription = ogDescription ?? description;
  // Relative, so metadataBase in src/app/layout.tsx resolves it to an absolute URL.
  // Crawlers reject a relative og:image, so this must not be hand-built here.
  const images = [
    {
      url: ogImagePath,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`,
    },
  ];

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url: `${SITE_CONFIG.url}${path === "/" ? "" : path}`,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images,
    },
  };
}
