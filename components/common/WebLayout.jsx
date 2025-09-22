import "../../app/globals.scss";

import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";
import { getServiceLinksCached } from "@/lib/cached/services";
export default async function WebLayout({ children }) {
  const services = await getServiceLinksCached();
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar services={services} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">{children}</main>
          <Footer services={services} />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="afterInteractive"
      />

      <Script strategy="afterInteractive" src="/assets/js/plugins.js"></Script>

      <Script
        strategy="afterInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>

      <Script
        strategy="afterInteractive"
        src="/assets/js/charming.min.js"
      ></Script>

      <Script
        strategy="afterInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script strategy="afterInteractive" src="/assets/js/gsap.min.js"></Script>

      <Script strategy="afterInteractive" src="/assets/js/splitting.min.js" />

      <Script
        strategy="afterInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      />

      <Script
        strategy="afterInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </>
  );
}
