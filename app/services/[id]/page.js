import ServiceHeader from "@/components/common/ServiceHeader";
import SubServices from "@/components/common/SubServices";
import ClientStoriesBook from "@/components/common/ClientStoriesBook";
import ProcessTimeline from "@/components/common/ProcessTimeline";
import WhyCooseUs from "@/components/common/WhyChooseUs";
import { notFound } from "next/navigation";
import ServiceIntro from "@/components/common/ServiceIntro";
import { getServiceByPragmaLinkCached } from "@/lib/cached/services";

export async function generateMetadata({ params }) {
  const service = await getServiceByPragmaLinkCached(params.id);

  if (!service) {
    return {
      title: "Service Not Found | Alphabrackets",
    };
  }

  return {
    title: `${service.title} | Alphabrackets`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const service = await getServiceByPragmaLinkCached(params.id);

  if (!service) {
    console.log("Service not found");
    notFound();
  }
  const subServices = [];
  return (
    <>
      <ServiceHeader
        title={service.title}
        description={service.description}
        videoLink={service.videoLink}
        bgImage={service.bg_image}
        overlayDark="9"
      />
      {subServices.length > 0 && <SubServices subServices={subServices} />}
      <ServiceIntro />
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
      <ClientStoriesBook />
      {service.why_choose_us && (
        <WhyCooseUs
          title={service.why_choose_us.title}
          diffrentials={service.why_choose_us.items}
        />
      )}
    </>
  );
}
