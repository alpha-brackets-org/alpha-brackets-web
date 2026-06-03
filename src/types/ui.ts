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
  videoLink?: string;
  bgImage?: string;
  overlayDark?: string;
}

export interface SubServicesProps {
  subServices: Partial<Service>[];
  noBottomPadding?: boolean;
  [key: string]: unknown;
}

export interface WhyChooseUsProps {
  title?: string;
  diffrentials?: { title: string; desc: string }[];
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
