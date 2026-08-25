import Header from "@/components/sections/contact/Header";
import Contact from "@/components/sections/contact/Contact";
import { buildPageMetadata } from "@/lib/seo";

const description =
  "Tell us what you want to build. We reply within 48 hours, and the first call is free.";

export const metadata = buildPageMetadata({
  path: "/contact",
  title: "Contact Us",
  description,
  keywords: [
    "contact Alpha Brackets",
    "hire MVP developer",
    "SaaS development enquiry",
    "book a discovery call",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <Contact />
    </>
  );
}
