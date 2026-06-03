"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function LoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !pathRef.current || !textRef.current) return;

    const tl = gsap.timeline();
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    // Text Animation
    tl.to(textRef.current.querySelectorAll("span"), {
      delay: 0.2,
      y: -20,
      opacity: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // SVG Background Animation
    tl.to(pathRef.current, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.in",
    }).to(pathRef.current, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.out",
    });

    // Move the whole loader up
    tl.to(loaderRef.current, {
      y: -1500,
      duration: 0.8,
      ease: "power2.inOut",
    });

    tl.set(loaderRef.current, {
      display: "none",
      zIndex: -1,
    });
  }, []);

  const logoText = "ALPHABRACKETS";

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent pointer-events-none"
    >
      <svg
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full fill-background"
      >
        <path ref={pathRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div ref={textRef} className="relative z-10 text-center">
        <div className="flex gap-1 text-2xl lg:text-4xl font-bold tracking-[0.5em] text-white overflow-hidden uppercase">
          {logoText.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
