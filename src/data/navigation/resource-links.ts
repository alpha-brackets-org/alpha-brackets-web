import { NavLink } from "@/types/navigation";

/**
 * "Resources" dropdown in the navbar, and the Resources column in the footer.
 *
 * Blogs and Case Studies are commented out because both routes call notFound():
 * there is no content pipeline for the former and no publishable client work for
 * the latter. That leaves exactly one live entry, so the Resources dropdown
 * currently holds a single item. Same rule as the company links, only uncomment an
 * entry when its page renders.
 */
export const RESOURCE_LINKS: NavLink[] = [
  //   {
  //     name: "Blogs",
  //     href: "/blogs",
  //     desc: "Deep dives into tech and strategy",
  //   },
  // {
  //   name: "Case Studies",
  //   href: "/case-studies",
  //   desc: "Real-world impact and results",
  // },
  {
    name: "FAQs",
    href: "/faqs",
    desc: "Price, timelines, and how we work",
  },
];
