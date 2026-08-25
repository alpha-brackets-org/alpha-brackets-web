import {
  Linkedin,
  XLogo,
  Bluesky,
  Instagram,
  // Github, // re-add with the commented-out GitHub entry in SOCIAL_LINKS below
} from "@/declarations/icons";

/**
 * Social profiles. These are real, owner-supplied URLs, not guesses. An earlier
 * version had the same "alphabrackets" handle invented across four default
 * platforms, none of which existed.
 *
 * Any entry with an empty `href` is filtered out at render time by both consumers
 * (Footer and the contact page), so a platform stays invisible until a real URL
 * is pasted in. Keep that behaviour: the one rule here is **only link a profile
 * that has content and is maintained**, because a live link to an empty page
 * costs more credibility than no link at all.
 *
 * Order is deliberate, strongest fit first:
 *  - LinkedIn: where the ICP and referral partners are. business-strategy.md
 *    Section 5 makes LinkedIn outbound lead channel 2.
 *  - X: where bootstrapped and indie founders gather. Note the handle is
 *    `alpha_brackets`, not `alphabrackets`.
 *  - Bluesky: smaller, but unusually dev-heavy, so it suits an engineering team
 *    better than a general consumer platform does.
 *  - Instagram: weakest fit for a B2B SaaS buyer, kept for reach in the Pakistan
 *    and Gulf markets. If four content streams ever prove too many to keep alive,
 *    drop this one before Bluesky.
 *
 * Facebook and TikTok are absent on purpose: wrong audience, and both need
 * constant content to avoid looking abandoned. GitHub is commented out rather
 * than dropped, worth adding once there is real public code behind it, since that
 * is genuine competence proof for a dev shop.
 *
 * Use `XLogo`, never the legacy `Twitter` bird, since the account is on x.com.
 */
export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/alphabrackets/",
    icon: Linkedin,
  },
  { name: "X", href: "https://x.com/alpha_brackets", icon: XLogo },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/alphabrackets.bsky.social",
    icon: Bluesky,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alphabrackets/",
    icon: Instagram,
  },
  // { name: "GitHub", href: "", icon: Github },
];
