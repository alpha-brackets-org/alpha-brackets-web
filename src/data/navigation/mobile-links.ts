import { NavLink } from "@/types/navigation";
import { COMPANY_LINKS } from "./company-links";
import { RESOURCE_LINKS } from "./resource-links";

/**
 * Flat link list for the mobile menu.
 *
 * Derived from the desktop dropdowns on purpose, so re-enabling a route in
 * company-links.ts or resource-links.ts shows up on mobile automatically and the
 * two menus cannot drift apart. `desc` is dropped because the mobile menu renders
 * names only.
 */
export const MOBILE_LINKS: NavLink[] = [
  { name: "Services", href: "/services" },
  ...COMPANY_LINKS.map(({ name, href }) => ({ name, href })),
  ...RESOURCE_LINKS.map(({ name, href }) => ({ name, href })),
];
