import React from "react";
import "../../app/globals.css";
// import Lines from "@/components/layout/Lines";
import ProgressScroll from "@/components/layout/ProgressScroll";
import CursorMount from "@/components/layout/CursorMount";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageCTA from "@/components/shared/PageCTA";
// The CMS analytics tracker that used to be commented out here has been deleted
// outright, along with the whole cms-client / server-actions layer it depended on.
// It was dead code that stayed one uncommented import away from two problems:
// getPortfolioId() read request headers, which opted EVERY route into on-demand
// rendering, and the lead actions POSTed names, emails and phone numbers to a
// third-party CMS that /privacy correctly promises does not receive anything.
//
// Two rules survive it. Do not add anything to this layout that reads headers(),
// cookies() or fetches per request, or the whole site goes dynamic again and
// generateStaticParams on /services/[slug] stops working. And if visitor tracking
// is ever wanted, use something client side (Vercel Analytics, Plausible) and
// update /privacy and /cookies in the same commit.

export default async function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The <LoadingScreen /> that used to sit here was deleted, not disabled.
  //
  // It rendered an opaque full-viewport SVG at z-[9999] and only removed itself at
  // the end of a GSAP timeline (roughly 2.4s) running inside a useEffect. That made
  // Largest Contentful Paint on EVERY route wait for the JS bundle to download,
  // parse and hydrate, and then for the animation to finish, even though the hero
  // markup itself is server rendered and ready immediately. If JS failed or was
  // blocked, the overlay never lifted and the page stayed covered.
  //
  // Do not reintroduce a pre-hydration overlay. If an intro animation is wanted,
  // it has to be CSS driven and must never gate the paint of the hero.
  return (
    <>
      {/* Gated behind a pointer check so phones never download GSAP. See the
          note in CursorMount.tsx: this one decorative component was putting
          68.5 KB of GSAP core into every route's first load. */}
      <CursorMount />
      <ProgressScroll />
      {/* <Lines /> */}
      <div className="navbar-container">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="bg-background overflow-clip">{children}</main>
          <PageCTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
