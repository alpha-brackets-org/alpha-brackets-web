"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp, ScrollProgress } from "@/declarations/icons";
import { cn } from "@/lib/utils";

const ProgressScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  /**
   * Scroll handling is deliberately fussy here, for three reasons.
   *
   * 1. The listener is `passive` and rAF-gated. It previously ran unthrottled on
   *    every scroll event.
   * 2. `scrollHeight` is a layout read. Doing it per scroll event forces the
   *    browser to recompute layout mid-scroll, which is the most likely source of
   *    the forced-reflow time Lighthouse reported. It is now cached and only
   *    refreshed on resize.
   * 3. `setIsVisible` is only called when the boolean actually flips, rather than
   *    on every event, so React is not asked to re-render during a scroll.
   */
  useEffect(() => {
    const progressPath = pathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();

    let scrollRange = 0;
    let frame = 0;
    let visible = false;

    const measure = () => {
      scrollRange =
        document.documentElement.scrollHeight - window.innerHeight;
    };

    const render = () => {
      frame = 0;
      const scroll = window.scrollY;

      // Guard the divide: a viewport taller than the document gives a range of 0.
      const travelled = scrollRange > 0 ? (scroll * pathLength) / scrollRange : 0;
      progressPath.style.strokeDashoffset = (pathLength - travelled).toString();

      const nextVisible = scroll > 150;
      if (nextVisible !== visible) {
        visible = nextVisible;
        setIsVisible(nextVisible);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(render);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // `inert` while hidden, not just `pointer-events-none`. Opacity 0 stops the
    // mouse but leaves the button in the tab order, so a keyboard user could focus
    // an invisible control. `inert` removes it from focus and from the
    // accessibility tree until it is actually on screen.
    <div
      inert={!isVisible}
      className={cn(
        "fixed bottom-8 right-8 z-[100] transition-all duration-500 transform",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      {/* The button's only children are two SVGs, so without aria-label it has no
          accessible name at all and a screen reader announces it as "button".
          Lighthouse flagged this under both Accessibility and Agentic Browsing. */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 group"
      >
        <ScrollProgress
          ref={pathRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full -rotate-90 p-0.5"
        />
        <ChevronUp
          aria-hidden="true"
          className="w-6 h-6 text-white/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
        />
      </button>
    </div>
  );
};

export default ProgressScroll;
