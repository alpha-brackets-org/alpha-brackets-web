"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp, ScrollProgress } from "@/declarations/icons";
import { cn } from "@/lib/utils";

const ProgressScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const progressPath = pathRef.current;
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();

      setIsVisible(scroll > 150);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[100] transition-all duration-500 transform",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-background/20 backdrop-blur-xl border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <ScrollProgress
          ref={pathRef}
          className="absolute inset-0 w-full h-full -rotate-90 p-0.5"
        />
        <ChevronUp className="w-6 h-6 text-white/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
      </button>
    </div>
  );
};

export default ProgressScroll;
