import { NavLink } from "@/types/navigation";

/**
 * "Company" dropdown in the navbar, and the Company column in the footer.
 *
 * Team and Careers are commented out rather than deleted: those routes still exist
 * but call notFound(), because there is no proof or case study work to back a team
 * story yet and hiring reads as premature with no clients. Uncomment an entry only
 * when its page actually renders, or the nav will link to a 404.
 */
export const COMPANY_LINKS: NavLink[] = [
  { name: "About Us", href: "/about", desc: "Mission, vision and our values" },
  //   {
  //     name: "Expert Team",
  //     href: "/team",
  //     desc: "The architects behind your success",
  //   },
  //   { name: "Careers", href: "/careers", desc: "Join our mission-driven team" },
  {
    name: "Contact Us",
    href: "/contact",
    desc: "Tell us what you want to build",
  },
];
