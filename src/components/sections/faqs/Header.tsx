"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

function Header() {
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
      className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/imgs/background/bg4.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 header-content text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter leading-none">
          Common{" "}
          <span className="font-extralight text-muted-foreground italic">
            FAQ
          </span>
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
