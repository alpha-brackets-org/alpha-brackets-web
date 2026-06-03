import CaseStudiesHeader from "@/components/sections/case-studies/Header";
import CaseStudiesGrid from "@/components/sections/case-studies/Grid";
import { getCaseStudies } from "@/lib/cms-client";

export const metadata = {
  title: "Case Studies — Real Business Outcomes",
  description:
    "Explore how Alpha Brackets helps scaling operators and domain experts turn vision into technical reality through future-ready architecture and compressed launch cycles.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <CaseStudiesHeader />
      <CaseStudiesGrid caseStudies={caseStudies} />
    </>
  );
}
