import { Service } from "./service";

export interface FAQSProps {
  title?: string;
  diffrentials?: { title: string; desc: string }[];
}

export interface ProcessTimelineProps {
  bTitle: string;
  sTitle: string;
  desc: string;
  items: { title: string; desc: string }[];
  bgImage?: string;
  overlayDark?: string;
}

export interface ServiceHeaderProps {
  title: string;
  description: string;
  bgImage?: string;
  overlayDark?: string;
  /**
   * Service-specific hero CTA, from `cta` in services.ts.
   *
   * Every service already defined one ("Get Your Code Reviewed", "Build Your
   * SaaS Product", "Build Your CRM") and no component read it, so all 12 pages
   * showed the same generic "Discuss Your Project" instead of the wording written
   * for them. Falls back to the generic label when absent.
   */
  cta?: { caption: string; link: string };
}

export interface SubServicesProps {
  subServices: Partial<Service>[];
  noBottomPadding?: boolean;
  [key: string]: unknown;
}

export interface WhyChooseUsProps {
  title?: string;
  diffrentials?: { title: string; desc: string }[];
  /**
   * Numbers for this specific page. **No fallback**: omit it and no stats render,
   * and the section drops to a single column. Do not add a default, that is what
   * previously put the same two figures on all ten service pages.
   */
  stats?: { value: string; label: string }[];
  [key: string]: unknown;
}

export interface WhyChooseUs2Props {
  title: string;
  subTitle: string;
  diffrentials: { title: string; desc: string; img?: string }[];
  link: { href: string; text: string };
  [key: string]: unknown;
}

export interface InViewOptions {
  selector: string;
  callback: (target: Element) => void;
  isElements?: boolean;
  whenOutOfView?: (target: Element) => void;
}
