import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

/**
 * The site-wide social share card, generated at build time rather than shipped as
 * a binary. Before it existed the site declared `openGraph` metadata with no
 * `images`, so every link shared to LinkedIn, X, Bluesky or Slack rendered with no
 * preview at all.
 *
 * Next serves it at /opengraph-image and injects the og:image and twitter:image
 * tags itself, for this page and as the inherited default for every route without
 * its own opengraph-image file. /services/[slug] now has one.
 *
 * The layout lives in src/lib/og/card.tsx. Read the comment there before changing
 * the copy below: this headline is the one place stale positioning hides.
 */
// Comma, not an em dash. This is real user-facing text: screen readers read it, and
// it is what shows if the image fails to load. DESIGN.md bans em dashes as sentence
// punctuation and this was the last one live on the site.
export const alt = `${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Software Studio"
        headline="Software built, finished, or fixed."
        subhead="Fixed price, working software weekly, and you own all of it."
        cta="Book a Call →"
      />
    ),
    size
  );
}
