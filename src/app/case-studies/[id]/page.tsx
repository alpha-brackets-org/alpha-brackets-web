import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/sections/case-studies/Detail";
import { getCaseStudyById, getCaseStudies } from "@/lib/cms-client";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = await getCaseStudyById(id);
  if (!caseStudy) return { title: "Not Found | Alpha Brackets" };

  return {
    title: `${caseStudy.projectTitle} | Alpha Brackets`,
    description: caseStudy.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [caseStudy, allCaseStudies] = await Promise.all([
    getCaseStudyById(id),
    getCaseStudies(),
  ]);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <CaseStudyDetail caseStudy={caseStudy} allCaseStudies={allCaseStudies} />
    </>
  );
}
