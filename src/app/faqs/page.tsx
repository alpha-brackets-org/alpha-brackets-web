import Header from "@/components/sections/faqs/Header";
import FAQContent from "@/components/sections/faqs/FAQContent";
import { FAQ_GROUPS } from "@/data/faqs";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "How much a build costs, how long it takes, who owns the code, and what happens after launch. Straight answers before you book a call.";

export const metadata = buildPageMetadata({
  path: "/faqs",
  title: "FAQs",
  description,
  keywords: [
    "MVP development cost",
    "how long does MVP development take",
    "fixed price MVP development",
    "SaaS development questions",
  ],
});

/**
 * FAQPage JSON-LD, built from the same FAQ_GROUPS the page renders.
 *
 * This is the cheapest structured-data win available: /faqs is the highest word
 * count page on the site and had no schema at all. Because it is generated from
 * the rendered data rather than written separately, every question and answer in
 * the markup is guaranteed to also be visible on the page, which is what Google
 * requires. Do not hand-write entries here.
 */
function buildFaqSchema() {
  const questions = FAQ_GROUPS.flatMap((group) => group.questions);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export default function FAQPage() {
  // Static local content, see src/data/faqs.ts. The CMS has no FAQ content and
  // its fetch was removed during the launch-phase cleanup. To switch back to
  // live CMS data, fetch it and pass it through `groupCmsFaqs` from that file.
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema()) }}
      />
      <Header />
      <FAQContent groups={FAQ_GROUPS} />
    </>
  );
}
