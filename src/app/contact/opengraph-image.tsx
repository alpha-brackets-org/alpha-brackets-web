import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

export const alt = `Contact Us - ${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function ContactOpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        badge="Contact"
        headline="Tell us what you want to build."
        subhead="We reply within 48 hours, and the first call is free. Straight answers on scope, price, and timeline."
        cta="Book a Call →"
      />
    ),
    size
  );
}
