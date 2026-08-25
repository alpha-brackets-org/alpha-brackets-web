import { notFound } from "next/navigation";

// Disabled for launch phase — re-enable once:
// 1. PDF case study write-ups exist for at least one project (GMS, Hexadesk, or Healthline)
// 2. Email delivery is working (Resend or similar) to send the PDF link
// 3. The email capture form on the detail page is built and tested
//
// import CaseStudiesHeader from "@/components/sections/case-studies/Header";
// import CaseStudiesGrid from "@/components/sections/case-studies/Grid";
// import { FEATURED_WORK } from "@/data/case-studies";
//
// export const metadata = {
//   title: "Case Studies — Real Business Outcomes",
//   description:
//     "Explore how Alpha Brackets helps founders turn product ideas into working SaaS products.",
// };
//
// export default function CaseStudiesPage() {
//   const caseStudies = FEATURED_WORK;
//   return (
//     <>
//       <CaseStudiesHeader />
//       <CaseStudiesGrid caseStudies={caseStudies} />
//     </>
//   );
// }

export default function CaseStudiesPage() {
  notFound();
}
