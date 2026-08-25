"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    // QuickSetters for performance
    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    const moveCursor = (e: MouseEvent) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.8)",
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        border: "none",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactables = document.querySelectorAll(
      "a, button, .cursor-pointer"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden lg:block"
    />
  );
}

export default Cursor;
