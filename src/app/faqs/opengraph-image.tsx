import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

export const alt = `FAQs - ${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function FaqsOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="FAQs"
        headline="Straight answers before you book a call."
        subhead="How much a build costs, how long it takes, who owns the code, and what happens after launch."
        cta="Read FAQs →"
      />
    ),
    size
  );
}
