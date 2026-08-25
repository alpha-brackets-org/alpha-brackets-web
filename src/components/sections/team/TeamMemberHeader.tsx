"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

function TeamMemberHeader() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".header-content",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgrounds/bg1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 header-content text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">
          Team{" "}
          <span className="font-extralight text-muted-foreground italic">
            Expert
          </span>
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberHeader;
