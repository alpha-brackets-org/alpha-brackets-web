import { Mail } from "@/declarations/icons";
import { SITE_CONFIG } from "@/data/site-config";

/**
 * Contact channels rendered as label + icon + link, currently just email.
 *
 * The address itself is never written here. It comes from SITE_CONFIG.email so
 * there is exactly one place to change it, which is what let the public address
 * switch from hello@ to info@ with no code changes.
 *
 * This replaces three exports that were all the same value: CONTACT_DATA, a
 * derived CONTACT_LIST that no longer had any consumer, and CONTACT_INFO, an alias
 * of CONTACT_DATA carrying a stale "or I'll update Footer to use CONTACT_DATA"
 * note. Footer now imports this directly.
 *
 * Phone and address are deliberately absent, see the commented-out fields in
 * site-config.ts for why. Add a key here only for a channel someone is watching.
 */
export const CONTACT_DATA = {
  email: {
    label: "Email Us",
    value: SITE_CONFIG.email,
    icon: Mail,
    href: `mailto:${SITE_CONFIG.email}`,
  },
};
