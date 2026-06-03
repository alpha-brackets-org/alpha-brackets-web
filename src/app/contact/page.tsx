import Header from "@/components/sections/contact/Header";
import Contact from "@/components/sections/contact/Contact";
import Map from "@/components/sections/contact/Map";

export const metadata = {
  title: "Contact Us | Alpha Brackets",
  description:
    "Get in touch with Alpha Brackets for your software development, AI, and digital transformation needs.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
      <Map />
    </>
  );
}
