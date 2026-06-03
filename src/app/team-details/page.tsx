import Marq2 from "@/components/shared/Marq2";
import Header from "@/components/sections/team/TeamMemberHeader";
import Intro from "@/components/sections/team/TeamMemberIntro";
import Services from "@/components/sections/team/TeamMemberServices";
import { notFound } from "next/navigation";

export default function Home() {
  notFound();
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <Marq2 />
    </>
  );
}
