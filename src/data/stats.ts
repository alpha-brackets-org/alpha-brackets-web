import { Stat } from "@/types/stat";

/**
 * The two capability claims, defined once.
 *
 * They previously existed in four places with four different wordings (the
 * homepage hero said "4-6 wk / Average MVP Delivery", this file said "4 to 6 /
 * Weeks to MVP", the about badge said something else again). Import from here
 * rather than restating them, so the same claim cannot read differently in two
 * places on the same site.
 *
 * Both are honest because **we control them**: the timeline is a commitment we
 * set, and the load figure is a claim about how we build, not a measured client
 * outcome. Client-outcome numbers stay off the site until there are real clients
 * (see the "never invent data" rule in AGENTS.md). Anything ending up here needs
 * to survive that test.
 */
export const MVP_TIMELINE: Stat = {
  value: "4 to 6",
  label: "Weeks To A Working MVP",
};

export const LOAD_HEADROOM: Stat = {
  value: "10x",
  label: "Load Without A Rewrite",
};

/**
 * The pair, for places that pitch the whole offer: the homepage and /about.
 *
 * Deliberately **not** a default for service pages. Falling back to this list is
 * what previously put both claims on all ten service pages regardless of whether
 * they made sense there. Service pages set their own stats in services.ts, and
 * show none when there is no honest number for that service.
 */
export const STATS: Stat[] = [MVP_TIMELINE, LOAD_HEADROOM];
