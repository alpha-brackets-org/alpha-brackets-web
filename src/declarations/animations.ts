import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralised GSAP entry point. Plugins are registered once here and gsap is
 * re-exported for project-wide use.
 *
 * ScrollToPlugin was removed: it was registered and exported but never called
 * anywhere. The only scroll-to in the codebase is `window.scrollTo` in
 * ProgressScroll.tsx, which is the native API and needs no plugin. Do not
 * register a plugin here speculatively; everything registered lands in the
 * shared client bundle whether or not it is used.
 *
 * ScrollTrigger is genuinely used, but only in two live components
 * (home/ThinkingSection.tsx and home/DiscoveryFunnel.tsx), both for simple
 * "reveal on scroll into view" effects. `shared/ProcessTimeline.tsx` already
 * does the same thing with an IntersectionObserver and no library, so this
 * import is a candidate for removal too.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
export default gsap;
