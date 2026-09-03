import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

export const alt = `About Us - ${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function AboutOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="About Us"
        headline="A small engineering team that builds software straight."
        subhead="How we work, what we believe, and what we will tell you straight. Fixed price agreed up front, working software every week."
        cta="Learn More →"
      />
    ),
    size
  );
}
