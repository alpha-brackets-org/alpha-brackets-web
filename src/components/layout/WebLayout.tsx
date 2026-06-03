import React from "react";
import "../../app/globals.css";
import Lines from "@/components/layout/Lines";
import ProgressScroll from "@/components/layout/ProgressScroll";
import Cursor from "@/components/layout/Cursor";
import LoadingScreen from "@/components/layout/Loader";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageCTA from "@/components/shared/PageCTA";
import AnalyticsTracker from "@/components/layout/AnalyticsTracker";
import { getBlogs, getCaseStudies } from "@/lib/cms-client";

export default async function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blogs, caseStudies] = await Promise.all([
    getBlogs(),
    getCaseStudies(),
  ]);

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div className="navbar-container">
        <Navbar articles={blogs} caseStudies={caseStudies} />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="bg-background overflow-clip">{children}</main>
          <PageCTA />
          <Footer />
        </div>
      </div>
      <AnalyticsTracker />
    </>
  );
}
