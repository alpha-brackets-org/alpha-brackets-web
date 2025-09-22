import Header from "@/components/home/Header";
import Clients from "@/components/home/Clients";
import Portfolio from "@/components/home-personal/Portfolio";
import Services from "@/components/common/Services";
import Testimonials from "@/components/solutions-engineering/Testimonials";
import Blog from "@/components/home-digital-agency/Blog";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Blog />
    </>
  );
}
