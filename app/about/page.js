import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Blog from "@/components/home/Blog";
import Clients from "@/components/common/Clients";
import Team from "@/components/home-modern-studio/Team";
import Testimonials from "@/components/home-modern-studio/Testimonials";
import Header from "@/components/page-about/Header";
import Intro from "@/components/page-about/Intro";
import Numbers from "@/components/page-about/Numbers";
import Services from "@/components/page-about/Services";

export const metadata = {
  title: "About Alpha Brackets",
};

export default function AboutPage() {
  return (
    <>
      <Intro />
      <Numbers />
      <Services />
      <Team />
      <Testimonials />
      <Clients />
      <Blog />
    </>
  );
}
