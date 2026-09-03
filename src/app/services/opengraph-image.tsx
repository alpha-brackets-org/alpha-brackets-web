import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

export const alt = `Services - ${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function ServicesOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Services"
        headline="Software built, finished, or fixed."
        subhead="From your first idea to a working SaaS product people pay for. One team, a fixed price, and AI planned in from the start."
      />
    ),
    size
  );
}
