import Header from "@/components/sections/home/Header";
import Clients from "@/components/shared/Clients";
import CaseStudies from "@/components/sections/home/CaseStudies";
import Services from "@/components/shared/Services";
import DiscoveryFunnel from "@/components/sections/home/DiscoveryFunnel";
import Testimonials from "@/components/sections/solutions/Testimonials";
import ContentPillars from "@/components/sections/home/ContentPillars";
import { getBlogs, getCaseStudies, getTestimonials } from "@/lib/cms-client";

export default async function Home() {
  const [blogs, caseStudies, testimonialsData] = await Promise.all([
    getBlogs(),
    getCaseStudies(),
    getTestimonials(),
  ]);


  return (
    <>
      <Header />
      <Services />
      <CaseStudies caseStudies={caseStudies} />
      <DiscoveryFunnel />
      <Clients />
      <Testimonials testimonials={testimonialsData} />
      <ContentPillars articles={blogs} />
    </>
  );
}
