import { buildPageMetadata } from "@/lib/seo";
import Header from "@/components/sections/home/Header";
// import Clients from "@/components/shared/Clients"; // disabled: placeholder logos + fabricated "200+ companies" claim, no real clients yet
import Paths from "@/components/sections/home/Paths";
import ThinkingSection from "@/components/sections/home/ThinkingSection";
import Services from "@/components/shared/Services";
import Process from "@/components/sections/home/Process";
import DiscoveryFunnel from "@/components/sections/home/DiscoveryFunnel";
// import CaseStudies from "@/components/sections/home/CaseStudies"; // disabled: renders empty pinned-scroll section with no case-studies data yet
// import Testimonials from "@/components/sections/solutions/Testimonials"; // disabled: renders empty carousel with no testimonials data yet
// TODO: Implement ContentPillars when we have content

/**
 * The homepage previously exported no metadata at all, silently inheriting the
 * layout defaults. Two problems with that: the most valuable page on the site
 * could not be tuned independently of the site-wide fallback, and the inherited
 * title led with the brand name. Leading with a brand nobody searches for wastes
 * the highest-weight text on the site.
 *
 * `absoluteTitle` is required here. A plain `title` would be run through the
 * layout's "%s | Alpha Brackets" template and render the brand twice.
 *
 * The share card is set explicitly too, and this is the only page that needs to
 * say it. Everywhere else the builder derives it from the page title, but the
 * homepage had no openGraph block of its own, so it fell through to the layout's
 * site-wide "Alpha Brackets | Future-Ready Tech". The page that ranks for what we
 * do was shared under a tagline that says nothing about what we do. The layout
 * default is left alone: as the fallback for a page that forgets, the brand plus
 * tagline is the right thing.
 */
export const metadata = buildPageMetadata({
  path: "/",
  title: "Home",
  absoluteTitle: "Custom Software Built, Finished, or Fixed | Alpha Brackets",
  ogTitle: "Custom Software Built, Finished, or Fixed",
  description:
    "We build custom software and finish or fix what other teams started. Fixed price agreed up front, working software every week, and you own all of it.",
});

export default function Home() {
  // CMS fetches (blogs, case studies, testimonials) disabled for launch phase — no live content yet
  return (
    <>
      <Header />
      {/* Paths sits directly after the hero on purpose. The hero says we build,
          finish or fix software; this is where a visitor works out which of those
          is them and goes to the right page. */}
      <Paths />
      <ThinkingSection />
      <Services />
      <Process />
      <DiscoveryFunnel />
      {/* <ContentPillars articles={blogs} /> */}
    </>
  );
}
