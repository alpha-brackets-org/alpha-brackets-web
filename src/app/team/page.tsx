import Header from "@/components/sections/team/TeamPageHeader";
import Intro from "@/components/sections/team/TeamAbout";
import Stats from "@/components/shared/Stats";
import Team from "@/components/sections/team/TeamGrid";
import Marq2 from "@/components/shared/Marq2";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Alpha Brackets - Team",
};

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
