import ServiceHeader from "@/components/sections/services/ServiceHeader";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import { notFound } from "next/navigation";
import ServiceIntro from "@/components/sections/services/ServiceIntro";
import ServiceOffer from "@/components/sections/services/ServiceOffer";
import { getServiceByPragmaLinkCached } from "@/lib/cached/services";
import * as serviceRepo from "@/lib/repos/service-repo";
import { SITE_CONFIG } from "@/data/site-config";
import { buildPageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Services come from static local data, so these are the only valid slugs.
//
// `getRootServices()` filters on `active !== false`, so a service disabled in
// services.ts drops out of here, out of the sitemap, out of the footer and out of
// the nav in one change. See the `notFound()` guard in ServicePage below for why
// that is necessary but not sufficient.
//
// (An earlier version of this comment said these pages were not prerendered,
// because the root layout used to read request headers for multi-tenancy. That
// header read was removed and the whole site is static now, so every service page
// here really is built at compile time.)
export async function generateStaticParams() {
  const services = await serviceRepo.getRootServices();
  return services.map((service) => ({ slug: service.pragma_link }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceByPragmaLinkCached(slug);

  // Same `active` guard as the page itself. Without it a disabled service would
  // still emit real title and description tags for a URL that 404s.
  if (!service || service.active === false) {
    return { title: "Service Not Found" };
  }

  // `meta_description` where the hero paragraph is too long to survive a search
  // result, otherwise the hero paragraph itself. See the comment on the field in
  // src/types/service.ts for why these are two fields.
  const metaDescription = service.meta_description ?? service.description;

  // The openGraph block, canonical and share titles all come from the shared
  // builder in src/lib/seo.ts. The URL in there resolves through SITE_CONFIG.url,
  // which reads NEXT_PUBLIC_SITE_URL. It used to be a hardcoded production domain
  // here, so preview builds advertised production URLs.
  return buildPageMetadata({
    path: `/services/${service.pragma_link}`,
    title: service.title,
    description: metaDescription,
    keywords: service.keywords,
    // This route has its own card, generated per service by the sibling
    // opengraph-image.tsx. Without this it would advertise the homepage card.
    ogImagePath: `/services/${service.pragma_link}/opengraph-image`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceByPragmaLinkCached(slug);

  // The `active === false` half of this matters and was a real gap.
  //
  // `getRootServices()` filters inactive services out of generateStaticParams, the
  // sitemap, the footer and the nav, but `getServiceByPragmaLink` does NOT filter on
  // `active`. So before this guard, disabling a service removed it from every list
  // while its page kept rendering on a direct hit: an orphan page, still live for
  // anyone with the URL and for any search engine that had already indexed it.
  //
  // Any future disable relies on this, not just the SEO service that exposed it.
  if (!service || service.active === false) {
    notFound();
  }

  const canonical = `${SITE_CONFIG.url}/services/${service.pragma_link}`;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title },
  ];

  // Service + BreadcrumbList. The site had no structured data at all before this.
  //
  // `provider` points at the Organization emitted in the root layout by @id rather
  // than restating the company details on 12 pages.
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.title,
        description: service.description,
        serviceType: service.title,
        url: canonical,
        provider: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          ...(crumb.href
            ? { item: new URL(crumb.href, SITE_CONFIG.url).toString() }
            : {}),
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Built from local static service data, no user or CMS input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. Hero */}
      <ServiceHeader
        title={service.title}
        description={service.description}
        bgImage={service.bg_image}
        overlayDark="9"
        // `cta` was defined on all 12 services and read by nothing, so every page
        // showed the same generic hero button.
        cta={service.cta}
      />

      {/* Visible trail matching the BreadcrumbList above. Also the only link on
          this page that goes anywhere other than /contact. */}
      <Breadcrumbs items={crumbs} />

      {/* 2. Intro: what you get and the solutions list. No description passed on
          purpose, the hero above already shows it. Stats are not passed either,
          they render once per page in WhyChooseUs below. */}
      <ServiceIntro
        title={service.card?.intro}
        solutions={service.solutions}
      />

      {/* 3. The buyable first step, when the service has one. Sits above the
          process because it is the conversion element: someone who is already
          convinced should not have to scroll past a five step timeline to find out
          what they can actually buy. */}
      {service.offer && <ServiceOffer offer={service.offer} />}

      {/* 4. Process, step by step */}
      {service.process && (
        <ProcessTimeline
          bTitle={service.process.title_first}
          sTitle={service.process.title_second}
          desc={service.process.desc}
          items={service.process.steps}
          bgImage={service.process.bg_image}
          overlayDark="9"
        />
      )}

      {/* 5. Why Alpha Brackets */}
      {service.why_choose_us && (
        <WhyChooseUs
          title={service.why_choose_us.title}
          diffrentials={service.why_choose_us.items}
          stats={service.stats}
        />
      )}

      {/* The closing CTA is rendered globally by WebLayout via PageCTA, which
          picks its `services` variant for this path. Do not add a second one. */}
    </>
  );
}
