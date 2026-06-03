import ServiceHeader from "@/components/sections/services/ServiceHeader";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import FeaturedCaseStudies from "@/components/shared/FeaturedCaseStudies";
import ServiceCTA from "@/components/shared/ServiceCTA";
import { notFound } from "next/navigation";
import ServiceIntro from "@/components/sections/services/ServiceIntro";
import { getServiceByPragmaLinkCached } from "@/lib/cached/services";
import { getCaseStudies } from "@/lib/cms-client";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = await getServiceByPragmaLinkCached(id);

  if (!service) {
    return { title: "Service Not Found | Alpha Brackets" };
  }

  return {
    title: `${service.title} | Alpha Brackets`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: `${service.title} | Alpha Brackets`,
      description: service.description,
      url: `https://alphabrackets.com/services/${service.pragma_link}`,
      siteName: "Alpha Brackets",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  const [service, caseStudies] = await Promise.all([
    getServiceByPragmaLinkCached(id),
    getCaseStudies(),
  ]);

  if (!service) {
    notFound();
  }

  const relatedProjects = caseStudies.filter((cs) =>
    cs.services?.includes(service.pragma_link)
  );

  return (
    <>
      {/* 1. Hero */}
      <ServiceHeader
        title={service.title}
        description={service.description}
        videoLink={service.videoLink}
        bgImage={service.bg_image}
        overlayDark="9"
      />

      {/* 2. Intro — what we do + solutions list + stats */}
      <ServiceIntro
        title={service.card?.intro}
        description={service.description}
        solutions={service.solutions}
        stats={service.stats}
      />

      {/* 3. Process — step-by-step workflow with stagger animation */}
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

      {/* 4. Featured Case Studies — service-relevant case studies */}
      <FeaturedCaseStudies
        caseStudies={caseStudies}
        highlight={relatedProjects.map(
          (cs) => cs.projectTitle || cs.slug || ""
        )}
        heading="Built by Alpha Brackets"
      />

      {/* 5. Why Alpha Brackets — differentiators accordion */}
      {service.why_choose_us && (
        <WhyChooseUs
          title={service.why_choose_us.title}
          diffrentials={service.why_choose_us.items}
        />
      )}

      {/* 6. CTA — proposal request + contact options */}
      <ServiceCTA serviceTitle={service.title} />
    </>
  );
}
