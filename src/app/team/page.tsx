import Header from "@/components/sections/team/TeamPageHeader";
import Intro from "@/components/sections/team/TeamAbout";
import Stats from "@/components/shared/Stats";
import Team from "@/components/sections/team/TeamGrid";
import Marq2 from "@/components/shared/Marq2";
import { notFound } from "next/navigation";

// Route intentionally disabled: it 404s.
// No `metadata` export on purpose. Next discards metadata for a route that calls
// notFound(), so a real title here only makes the route look live to the next
// person reading it.

export default function Home() {
  notFound();
  return (
    <>
      <Header />
      <Intro />
      <Stats />
      <Team />
      <Marq2 />
    </>
  );
}
