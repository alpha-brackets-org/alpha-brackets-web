import "./globals.css";

import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Script from "next/script";

export const metadata = {
  title: "Alpha Brackets",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden">{children}</main>
            <Footer />
          </div>
        </div>

        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="beforeInteractive"
        />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/plugins.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/TweenMax.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/charming.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/countdown.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/gsap.min.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/splitting.min.js"
        />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/isotope.pkgd.min.js"
        />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
        ></Script>

        {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

        <Script src="/assets/js/scripts.js"></Script>
      </body>
    </html>
  );
}
