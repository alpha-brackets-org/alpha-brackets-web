import Header from "@/components/sections/about/Header";
import Intro from "@/components/sections/about/Intro";
import Values from "@/components/sections/about/Values";
import TechnicalPillars from "@/components/sections/about/TechnicalPillars";
import { buildPageMetadata } from "@/lib/seo";
// Clients disabled. It claimed "More than 200+ companies trusted our
// engineering worldwide" and rendered template placeholder logos as client
// logos. Removed from the homepage earlier for the same reason, and it survived
// here. Do not re-enable until there are real clients and real permission.
// import Clients from "@/components/shared/Clients";
//
// DiscoveryFunnel removed too. It is the homepage and /services packages
// section, so the about page ended in pricing copy in a different voice, and
// its button was a second CTA stacked on the PageCTA that WebLayout already
// renders on this path.
// import DiscoveryFunnel from "@/components/sections/home/DiscoveryFunnel";

// NOTE: this description and the keywords below still say we build SaaS products
// for founders, which is the superseded MVP-only positioning that the root layout
// metadata was already corrected away from. The site now says software built,
// finished, or fixed. Left as-is on purpose: it is user-facing search copy and
// needs an owner decision, not a silent rewrite during a metadata refactor.
const description =
  "A small engineering team that builds SaaS products for founders. How we work, what we believe, and what we will tell you straight.";

export const metadata = buildPageMetadata({
  path: "/about",
  title: "About Us",
  description,
  keywords: [
    "about Alpha Brackets",
    "SaaS development team",
    "MVP development agency",
    "software engineering partner",
  ],
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <Intro />
      <Values />
      <TechnicalPillars />
    </>
  );
}
