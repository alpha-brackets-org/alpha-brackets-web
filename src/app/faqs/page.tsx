import Header from "@/components/sections/faqs/Header";
import FAQContent from "@/components/sections/faqs/FAQContent";
import { getFAQs } from "@/lib/cms-client";

export const metadata = {
  title: "FAQs | Alpha Brackets — Domain Expertise & Strategic Execution",
  description:
    "Find answers to common questions about our technical methodology, service expertise, and how we help scaling operators compress their launch cycles.",
};

export default async function FAQPage() {
  const faqs = await getFAQs();

  return (
    <>
      <Header />
      <FAQContent faqs={faqs} />
    </>
  );
}
