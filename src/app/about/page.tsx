import Header from "@/components/sections/about/Header";
import Intro from "@/components/sections/about/Intro";
import Values from "@/components/sections/about/Values";
import TechnicalPillars from "@/components/sections/about/TechnicalPillars";
import Clients from "@/components/shared/Clients";
import DiscoveryFunnel from "@/components/sections/home/DiscoveryFunnel";

export const metadata = {
  title: "About Us | Alpha Brackets — Strategic Technology Partner",
  description:
    "Bridging business intelligence and accelerated technical execution. We compress your time-to-market with future-ready architecture and zero-waste engineering.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Intro />
      <Values />
      <TechnicalPillars />
      <Clients />
      <DiscoveryFunnel />
    </>
  );
}
