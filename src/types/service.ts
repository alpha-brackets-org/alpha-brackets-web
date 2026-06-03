import { Stat } from "./stat";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceProcess {
  bg_image: string;
  title_first: string;
  title_second: string;
  desc: string;
  steps: ServiceStep[];
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
}

export interface WhyChooseUs {
  title: string;
  items: WhyChooseUsItem[];
}

export interface Breadcrumb {
  name: string;
  link: string;
}

export interface ServiceCard {
  intro: string;
  icon: React.ElementType;
  read_more?: string;
}

export interface ServiceCta {
  caption: string;
  link: string;
}

export interface Service {
  _id: string;
  pragma_link: string;
  bg_image: string;
  title: string;
  description: string;
  keywords: string[];
  explore_link: string;
  card: ServiceCard;
  cta: ServiceCta;
  process: ServiceProcess;
  why_choose_us: WhyChooseUs;
  parent_service: string | null;
  bread_crumbs: Breadcrumb[];
  active: boolean;
  videoLink?: string;
  solutions?: string[];
  stats?: Stat[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ServiceIntroProps {
  title?: string;
  description?: string;
  solutions?: string[];
  stats?: Stat[];
}

export interface ServiceFormData {
  pragma_link: string;
  bg_image: string;
  title: string;
  description: string;
  keywords: string[];
  explore_link: string;
  card: {
    intro: string;
    icon: React.ElementType;
    read_more: string;
  };
  cta: {
    caption: string;
    link: string;
  };
  process: {
    bg_image: string;
    title_first: string;
    title_second: string;
    desc: string;
    steps: { title: string; desc: string }[];
  };
  why_choose_us: {
    title: string;
    items: { title: string; desc: string }[];
  };
  parent_service: string | null;
  bread_crumbs: { name: string; link: string }[];
  active: boolean;
  [key: string]: unknown;
}
