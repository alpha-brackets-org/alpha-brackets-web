import { ImageResponse } from "next/og";
import { getServiceByPragmaLinkCached } from "@/lib/cached/services";
import * as serviceRepo from "@/lib/repos/service-repo";
import { SITE_CONFIG } from "@/data/site-config";
import { OgCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og/card";

/**
 * Per-service share card. Without this file every service page inherited the
 * homepage card from src/app/opengraph-image.tsx, so all 10 active services
 * previewed identically when shared.
 *
 * Same static-params source as page.tsx, so the cards, the prerendered pages and
 * the sitemap cannot drift apart.
 */
export const alt = `${SITE_CONFIG.name}, ${SITE_CONFIG.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export async function generateStaticParams() {
  const services = await serviceRepo.getRootServices();
  return services.map((service) => ({ slug: service.pragma_link }));
}

export default async function ServiceOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceByPragmaLinkCached(slug);

  // Same `active === false` guard as the page and generateMetadata. A disabled
  // service 404s, so it must not get a branded card either. Falling back to the
  // generic headline rather than throwing, because an image route that throws
  // fails the build for a URL that is not supposed to exist anyway.
  const isLive = service && service.active !== false;
  const description =
    service?.meta_description ??
    service?.description ??
    "Fixed price, working software weekly, and you own all of it.";

  return new ImageResponse(
    (
      <OgCard
        badge="Service"
        headline={
          isLive ? service.title : "Software built, finished, or fixed."
        }
        subhead={description}
      />
    ),
    size
  );
}
