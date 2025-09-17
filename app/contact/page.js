import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import Header from "@/components/contact/Header";
import Contact from "@/components/contact/Contact";
import Map from "@/components/contact/Map";

export const metadata = {
  title: "Contact | Alpha Brackets",
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
