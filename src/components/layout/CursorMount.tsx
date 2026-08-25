"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/**
 * Gate for the custom cursor. This exists to keep GSAP off phones.
 *
 * Cursor.tsx is `hidden lg:block`, so on a phone it was invisible, but `hidden`
 * still creates a DOM node. The component therefore hydrated anyway, and because
 * its ref resolved, its effect ran in full: it initialised two GSAP quickSetters,
 * registered an unthrottled `mousemove` listener, and attached BOTH a `mouseenter`
 * and a `mouseleave` listener to every `a, button, .cursor-pointer` on the page,
 * which is 200+ listeners on the homepage. All for an element nobody could see.
 *
 * Worse, its plain `import { gsap } from "gsap"` was the reason GSAP core sat in
 * the layout-level chunk, so **every route on the site shipped 68.5 KB of GSAP
 * because of this one 68-line decorative component.**
 *
 * Two things make the fix work, and both are load-bearing:
 *
 * 1. `next/dynamic` with a real dynamic `import()`. A static import would put
 *    GSAP straight back into the shared chunk and achieve nothing. `ssr: false`
 *    because a cursor has no meaning in server-rendered HTML.
 * 2. The media query is checked in an effect, so the import is only ever
 *    requested on a device that has a pointer to replace.
 *
 * `(hover: hover) and (pointer: fine)` rather than width or `pointer: fine`
 * alone: a stylus reports `pointer: fine` but has no hover state, and a narrow
 * desktop window is still a mouse. Cursor keeps its `hidden lg:block` class as a
 * second line of defence, since that check is width-based and this one is not.
 *
 * This is the first next/dynamic in the codebase. WebLayout is an async server
 * component and cannot call `dynamic(..., { ssr: false })` itself, which is why
 * this wrapper is a separate client module.
 */
const Cursor = dynamic(() => import("./Cursor"), { ssr: false });

const POINTER_QUERY = "(hover: hover) and (pointer: fine)";

export default function CursorMount() {
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(POINTER_QUERY);
    setHasPointer(query.matches);

    // Covers plugging in a mouse on a tablet, or dragging the window to a
    // display with different input characteristics.
    const onChange = (event: MediaQueryListEvent) => setHasPointer(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (!hasPointer) return null;

  return <Cursor />;
}
