import { Service } from "@/types";
import {
  MonitorSmartphone,
  Smartphone,
  Brain,
  Palette,
  Cloud,
  Server,
  TrendingUp,
  Bot,
  Megaphone,
  BarChart,
} from "@/declarations/icons";

export const DEFAULT_SOLUTIONS = [
  "Full-Stack Web & Mobile Development",
  "AI & Intelligent Integrations",
  "SaaS Platform Architecture",
  "DevOps & Cloud Infrastructure",
  "SEO & Performance Optimisation",
  "Business Process Automation",
];

export const DEFAULT_SERVICE_STATS = [
  { value: "100%", label: "Satisfaction" },
  { value: "4–6", label: "Weeks to MVP" },
  { value: "60%", label: "Work Reduced" },
  { value: "3+", label: "SaaS Live" },
];

const services: Service[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. WEB APPLICATION DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab001",
    pragma_link: "web-app-development",
    bg_image: "/assets/imgs/background/bg1.jpg",
    title: "Web Application Development",
    description:
      "High-velocity web applications engineered for scale. We build production-ready platforms that eliminate technical debt and compress launch cycles.",
    keywords: [
      "web application development",
      "custom web apps",
      "Next.js",
      "React",
      "SaaS frontend",
      "TypeScript",
      "PWA",
    ],
    solutions: [
      "Custom SaaS Frontends",
      "High-Performance Dashboards",
      "Progressive Web Apps (PWA)",
      "API-First Architecture",
      "Enterprise Web Portals",
      "E-commerce Platforms",
    ],
    stats: [
      { value: "100%", label: "Satisfaction" },
      { value: "4–6", label: "Weeks to MVP" },
      { value: "50%", label: "Faster LCP" },
      { value: "0", label: "Tech Debt" },
    ],
    explore_link: "",
    card: {
      intro: "Production-ready platforms designed for velocity and scale.",
      icon: MonitorSmartphone,
    },
    cta: {
      caption: "Start Building Your Web App",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/pattern.png",
      title_first: "Our Web Dev",
      title_second: "Process",
      desc: "From discovery to deployment — a structured, transparent process that keeps you in control.",
      steps: [
        {
          title: "Discovery & Scoping",
          desc: "Define requirements, user personas, and feature priorities before a single line of code is written.",
        },
        {
          title: "UI/UX Design",
          desc: "Wireframes to high-fidelity Figma prototypes — approved by you before development begins.",
        },
        {
          title: "Agile Development",
          desc: "Iterative sprints with weekly demos using React, Next.js, and TypeScript.",
        },
        {
          title: "Backend Integration",
          desc: "REST APIs, authentication, database connections, and third-party service integrations.",
        },
        {
          title: "Testing & Launch",
          desc: "QA, performance audits, and smooth deployment to Vercel, AWS, or your preferred cloud.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build With Alpha Brackets",
      items: [
        {
          title: "Startup Speed",
          desc: "MVP delivered in 4–6 weeks — no bloated processes, no waiting months to see progress.",
        },
        {
          title: "Future-Ready Architecture",
          desc: "Component-based, TypeScript-first codebases that scale without expensive rewrites.",
        },
        {
          title: "Modern Stack Only",
          desc: "Next.js, React, Tailwind CSS — no legacy tech debt passed on to you.",
        },
        {
          title: "Full Transparency",
          desc: "Weekly demos, shared repos, and clear communication at every stage.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 2. MOBILE APP DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab002",
    pragma_link: "mobile-app-development",
    bg_image: "/assets/imgs/background/bg2.jpg",
    title: "Mobile App Development",
    description:
      "High-performance iOS & Android applications. We deliver intuitive mobile experiences that bridge industry knowledge and technical excellence.",
    keywords: [
      "mobile app development",
      "iOS",
      "Android",
      "React Native",
      "Flutter",
      "cross-platform",
      "Expo",
    ],
    explore_link: "",
    card: {
      intro: "Cross-platform mobile apps that feel native",
      icon: Smartphone,
    },
    cta: {
      caption: "Build Your Mobile App",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/lines.png",
      title_first: "Mobile App",
      title_second: "Process",
      desc: "A focused, platform-aware process for shipping performant mobile apps on iOS and Android.",
      steps: [
        {
          title: "Platform Strategy",
          desc: "Native vs. React Native vs. Flutter — we analyse your needs and recommend the right approach.",
        },
        {
          title: "UX/UI Design",
          desc: "Mobile-first wireframes and designs that follow HIG (iOS) and Material (Android) guidelines.",
        },
        {
          title: "Cross-Platform Development",
          desc: "Shared React Native or Flutter codebase — single investment, two platforms.",
        },
        {
          title: "Device & Platform QA",
          desc: "Real-device testing across iOS and Android versions, screen sizes, and OS variants.",
        },
        {
          title: "App Store Deployment",
          desc: "End-to-end App Store (iOS) and Google Play (Android) submission and go-live support.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Mobile With Alpha Brackets",
      items: [
        {
          title: "One Codebase, Two Platforms",
          desc: "React Native or Flutter means faster delivery, lower cost, and simpler future updates.",
        },
        {
          title: "Offline-First Capable",
          desc: "We build apps that work without internet — critical for field and healthcare use cases.",
        },
        {
          title: "Production-Ready From Day One",
          desc: "Performance-optimized, crash-free, and built for real-world usage from launch.",
        },
        {
          title: "Store Submission Handled",
          desc: "We manage the full App Store and Play Store submission process end-to-end.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 3. AI & INTELLIGENT INTEGRATIONS
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab003",
    pragma_link: "ai-and-intelligent-integrations",
    bg_image: "/assets/imgs/background/bg3.jpg",
    title: "AI & Intelligent Integrations",
    description:
      "Chatbots, automation pipelines, document processing, and AI-powered features — built into your product, not bolted on.",
    keywords: [
      "AI integration",
      "chatbot development",
      "LLM",
      "OpenAI",
      "automation pipeline",
      "document processing",
      "RAG",
      "NLP",
    ],
    solutions: [
      "Custom LLM Chatbots",
      "RAG (Retrieval-Augmented Generation)",
      "Automated Data Processing",
      "AI-Powered Content Generation",
      "Intelligent Search Engines",
      "Workflow Automation Tools",
    ],
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "24/7", label: "Availability" },
      { value: "40%", label: "Cost Reduced" },
      { value: "5+", label: "Models Used" },
    ],
    explore_link: "",
    card: {
      intro: "AI built in from the start — not an afterthought",
      icon: Brain,
    },
    cta: {
      caption: "Integrate AI Into Your Product",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/dots.png",
      title_first: "AI Integration",
      title_second: "Process",
      desc: "A practical, production-safe approach to embedding AI into your product or operations.",
      steps: [
        {
          title: "Use Case Definition",
          desc: "Identify exactly which processes AI will accelerate, automate, or enhance — and what ROI to expect.",
        },
        {
          title: "Data & API Audit",
          desc: "Review existing data quality, availability, and the APIs we need to connect.",
        },
        {
          title: "Model Selection & PoC",
          desc: "Choose the right LLM or ML approach, then build a working proof-of-concept quickly.",
        },
        {
          title: "Pipeline Development",
          desc: "Build production-grade AI pipelines with proper error handling, logging, and monitoring.",
        },
        {
          title: "Integration & Handover",
          desc: "Embed AI into your existing product seamlessly, with full team documentation and training.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Choose Alpha Brackets for AI",
      items: [
        {
          title: "Practical, Not Experimental",
          desc: "We build AI that works in production — not demos that fail under real-world conditions.",
        },
        {
          title: "Model-Agnostic",
          desc: "OpenAI, Claude, Gemini, or open-source — we choose the best model for each specific task.",
        },
        {
          title: "AI-Ready by Default",
          desc: "Every product we ship is architected to integrate intelligent features as you scale.",
        },
        {
          title: "Cost-Efficient AI",
          desc: "We design pipelines that balance capability with API cost — no runaway bills.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 4. UI/UX DESIGN
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab004",
    pragma_link: "ui-ux-design",
    bg_image: "/assets/imgs/background/bg4.jpg",
    title: "UI/UX Design",
    description:
      "User-first interfaces that drive engagement, adoption, and retention — built on research, not assumptions.",
    keywords: [
      "UI/UX design",
      "user experience",
      "Figma",
      "design system",
      "wireframes",
      "prototyping",
      "usability testing",
    ],
    explore_link: "",
    card: {
      intro: "Design that converts — backed by research",
      icon: Palette,
    },
    cta: {
      caption: "Design Your Product",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/pattern2.png",
      title_first: "Design",
      title_second: "Process",
      desc: "A human-centered design process that turns user needs into beautiful, functional interfaces.",
      steps: [
        {
          title: "Research & Discovery",
          desc: "User interviews, competitor audits, heuristic evaluations — understanding before designing.",
        },
        {
          title: "Information Architecture",
          desc: "User flows, sitemaps, and wireframes that define structure before aesthetics.",
        },
        {
          title: "Visual Design",
          desc: "High-fidelity Figma mockups, design system tokens, and brand-aligned components.",
        },
        {
          title: "Prototype & Validate",
          desc: "Interactive prototypes tested with real users — iterate before a single line of code.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Design With Alpha Brackets",
      items: [
        {
          title: "User-First, Not Pixel-First",
          desc: "Every design decision is backed by user research data, not personal preference.",
        },
        {
          title: "Dev-Ready Handoff",
          desc: "Figma files with specs, assets, and tokens — developers can build immediately.",
        },
        {
          title: "Accessibility Built In",
          desc: "WCAG 2.1 AA compliance by default — inclusive design for all users.",
        },
        {
          title: "We Stay Through Implementation",
          desc: "We don't disappear after handoff — we support developers during the build.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 5. SAAS PLATFORM DEVELOPMENT
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab005",
    pragma_link: "saas-platform-development",
    bg_image: "/assets/imgs/background/bg5.jpg",
    title: "SaaS Platform Development",
    description:
      "End-to-end SaaS products with multi-tenancy, billing, and scalable architecture — from idea to paying customers.",
    keywords: [
      "SaaS development",
      "multi-tenancy",
      "Stripe billing",
      "subscription platform",
      "API-first",
      "white-label",
    ],
    explore_link: "",
    card: {
      intro: "From idea to paying SaaS product — end to end",
      icon: Cloud,
    },
    cta: {
      caption: "Build Your SaaS Product",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/graph.png",
      title_first: "SaaS",
      title_second: "Build Process",
      desc: "A structured process for launching SaaS products that scale — from architecture to first paying customer.",
      steps: [
        {
          title: "Product Discovery",
          desc: "Define your ICP, core features, pricing model, and go-to-market strategy before building.",
        },
        {
          title: "Architecture Design",
          desc: "Multi-tenant DB schema, auth strategy, billing setup, and API design — all before code.",
        },
        {
          title: "Core Platform Build",
          desc: "Auth, billing (Stripe), tenant management, and admin dashboard — the essential foundation.",
        },
        {
          title: "Feature Sprints",
          desc: "Iterative feature delivery with weekly demos — you see progress every week, not at the end.",
        },
        {
          title: "Launch & Growth",
          desc: "DevOps setup, monitoring, performance tuning, and a post-launch feature roadmap.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build SaaS With Alpha Brackets",
      items: [
        {
          title: "We've Shipped Real SaaS",
          desc: "GMS and Hexadesk are live SaaS products we built from 0 to production — not just side projects.",
        },
        {
          title: "Startup-Lean Delivery",
          desc: "Ship MVP fast, validate with real users, then iterate — no over-engineering upfront.",
        },
        {
          title: "Scale-Proof Architecture",
          desc: "Built with row-level security, proper tenancy, and Stripe — no painful rewrites at 10× scale.",
        },
        {
          title: "Post-Launch Partner",
          desc: "We don't disappear after launch — embedded support sprints keep your product growing.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 6. DEVOPS & CLOUD INFRASTRUCTURE
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab006",
    pragma_link: "devops-and-cloud",
    bg_image: "/assets/imgs/background/bg1.jpg",
    title: "DevOps & Cloud Infrastructure",
    description:
      "CI/CD pipelines, cloud deployments, and infrastructure that scales with you — zero firefighting required.",
    keywords: [
      "DevOps",
      "CI/CD",
      "cloud infrastructure",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
    explore_link: "",
    card: {
      intro: "Infrastructure that scales — no firefighting",
      icon: Server,
    },
    cta: {
      caption: "Set Up Your Infrastructure",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/bg-pattern.png",
      title_first: "DevOps",
      title_second: "Process",
      desc: "A systematic approach to building infrastructure that is reliable, secure, and ready to scale.",
      steps: [
        {
          title: "Infrastructure Audit",
          desc: "Review your current setup, identify bottlenecks, risks, and cost-saving opportunities.",
        },
        {
          title: "Architecture Design",
          desc: "Cloud-native, IaC-first approach — every resource version-controlled and repeatable.",
        },
        {
          title: "CI/CD Pipeline Setup",
          desc: "GitHub Actions or GitLab CI — automated builds, tests, and deployments on every push.",
        },
        {
          title: "Container & Orchestration",
          desc: "Docker + Kubernetes for consistent environments and zero-downtime deployments.",
        },
        {
          title: "Monitoring & Optimization",
          desc: "Dashboards, alerts, and monthly cost reviews — full visibility from day one.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Choose Alpha Brackets for DevOps",
      items: [
        {
          title: "CI/CD on Every Project",
          desc: "Every product we ship includes a CI/CD pipeline — it's not optional, it's our standard.",
        },
        {
          title: "Cloud-Agnostic",
          desc: "AWS, GCP, or Azure — we work with your preferred provider, no vendor lock-in.",
        },
        {
          title: "Cost Optimization",
          desc: "We audit and right-size infrastructure regularly — typical savings of 30–40% on cloud bills.",
        },
        {
          title: "Security Hardened",
          desc: "IAM policies, secret management, and network security configured from the start.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 7. SEO & PERFORMANCE OPTIMISATION
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab007",
    pragma_link: "seo-and-performance",
    bg_image: "/assets/imgs/background/bg2.jpg",
    title: "SEO & Performance Optimisation",
    description:
      "Technical SEO, Core Web Vitals, and speed optimisation for real organic growth — not vanity metrics.",
    keywords: [
      "technical SEO",
      "Core Web Vitals",
      "page speed",
      "performance optimization",
      "LCP",
      "CLS",
      "organic growth",
    ],
    explore_link: "",
    card: {
      intro: "Rank higher. Load faster. Convert more.",
      icon: TrendingUp,
    },
    cta: {
      caption: "Optimise Your Site",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/lines.png",
      title_first: "SEO & Performance",
      title_second: "Process",
      desc: "A data-driven, systematic approach to improving search visibility and site performance.",
      steps: [
        {
          title: "Audit",
          desc: "Technical SEO crawl, Core Web Vitals baseline, and competitor gap analysis.",
        },
        {
          title: "Strategy",
          desc: "Keyword architecture, content plan, and a prioritised fix list ranked by impact.",
        },
        {
          title: "Implementation",
          desc: "On-page fixes, schema markup, image optimization, caching, and code splitting.",
        },
        {
          title: "Tracking & Iteration",
          desc: "Search Console monitoring, A/B testing, and monthly performance reports.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Choose Alpha Brackets for SEO",
      items: [
        {
          title: "SEO Built Into Every Site",
          desc: "We don't retrofit SEO — it's part of the architecture from the first line of code.",
        },
        {
          title: "Real Organic Growth",
          desc: "White-hat strategies that build sustainable rankings — no shortcuts that get you penalised.",
        },
        {
          title: "Performance Tied to Conversions",
          desc: "We connect speed improvements to conversion data — not just Lighthouse scores.",
        },
        {
          title: "Transparent Monthly Reports",
          desc: "Clear reporting on rankings, traffic, and Core Web Vitals every month.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 8. BUSINESS AUTOMATION
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab008",
    pragma_link: "business-automation",
    bg_image: "/assets/imgs/background/bg3.jpg",
    title: "Business Automation",
    description:
      "Workflow automation with no-code/low-code tools to eliminate manual overhead and scale your operations without scaling headcount.",
    keywords: [
      "business automation",
      "workflow automation",
      "no-code",
      "n8n",
      "Zapier",
      "Make.com",
      "process automation",
    ],
    explore_link: "",
    card: {
      intro: "Eliminate the manual. Scale the meaningful.",
      icon: Bot,
    },
    cta: {
      caption: "Automate Your Business",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/dots2.png",
      title_first: "Automation",
      title_second: "Process",
      desc: "A practical, ROI-focused approach to identifying and eliminating your most costly manual workflows.",
      steps: [
        {
          title: "Process Discovery",
          desc: "Map your current manual workflows and rank them by time cost and error risk.",
        },
        {
          title: "Tool Selection",
          desc: "n8n, Make.com, Zapier, or custom code — we choose based on complexity and your team's needs.",
        },
        {
          title: "Build & Test",
          desc: "Build automation flows with full edge-case testing before touching production.",
        },
        {
          title: "Deploy & Monitor",
          desc: "Live deployment with error alerting, logging, and full documentation for your team.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Automate With Alpha Brackets",
      items: [
        {
          title: "Measurable ROI",
          desc: "Average 60% reduction in manual processing time — tracked and reported.",
        },
        {
          title: "No-Code Where Possible",
          desc: "Faster delivery and easier maintenance using no-code tools where they make sense.",
        },
        {
          title: "Fully Documented",
          desc: "Every automation is documented so your team can understand, maintain, and extend it.",
        },
        {
          title: "Error-Proof by Design",
          desc: "Built-in retry logic, alerting, and error handling — automations that don't silently fail.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 9. AI-DRIVEN DIGITAL MARKETING
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab009",
    pragma_link: "ai-driven-digital-marketing",
    bg_image: "/assets/imgs/background/bg4.jpg",
    title: "AI-Driven Digital Marketing",
    description:
      "Meta Ads, Google Ads, and social campaigns powered by AI targeting and analytics — every rupee and dollar working harder.",
    keywords: [
      "digital marketing",
      "Meta Ads",
      "Google Ads",
      "AI targeting",
      "PPC",
      "retargeting",
      "campaign management",
    ],
    explore_link: "",
    card: {
      intro: "Every rupee and dollar working harder with AI",
      icon: Megaphone,
    },
    cta: {
      caption: "Grow With AI Marketing",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/noise.png",
      title_first: "Marketing",
      title_second: "Process",
      desc: "A full-funnel, AI-powered marketing process — from first impression to paying customer.",
      steps: [
        {
          title: "Strategy & Setup",
          desc: "ICP definition, channel selection, campaign structure, pixel and conversion tracking setup.",
        },
        {
          title: "Creative & Launch",
          desc: "Ad creative, copy, audience targeting, and initial budget allocation.",
        },
        {
          title: "AI Optimisation",
          desc: "Automated bid strategies, audience expansion, creative rotation, and A/B testing.",
        },
        {
          title: "Scale & Report",
          desc: "Weekly performance reviews, budget reallocation, and transparent monthly reports.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Market With Alpha Brackets",
      items: [
        {
          title: "Tech + Creativity",
          desc: "We combine engineering precision with marketing creativity — campaigns that are both smart and compelling.",
        },
        {
          title: "AI-Reduced CPL",
          desc: "AI-driven optimisation typically reduces cost per lead by 30–50% within 60 days.",
        },
        {
          title: "Full-Funnel Approach",
          desc: "From awareness to closed deal — we manage the entire customer acquisition journey.",
        },
        {
          title: "Real Numbers, Always",
          desc: "Weekly reports with actual spend, CPL, ROAS, and revenue — no vanity metric padding.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 10. GROWTH & ANALYTICS
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab010",
    pragma_link: "growth-and-analytics",
    bg_image: "/assets/imgs/background/bg5.jpg",
    title: "Growth & Analytics",
    description:
      "Data-driven growth strategies, funnel optimisation, and conversion tracking — decisions backed by real data, not gut feel.",
    keywords: [
      "growth analytics",
      "funnel optimisation",
      "conversion tracking",
      "A/B testing",
      "GA4",
      "Mixpanel",
      "data-driven growth",
    ],
    explore_link: "",
    card: {
      intro: "Data-driven growth — not gut feel",
      icon: BarChart,
    },
    cta: {
      caption: "Start Growing Smarter",
      link: "/contact",
    },
    process: {
      bg_image: "/assets/imgs/patterns/graph.png",
      title_first: "Growth",
      title_second: "Process",
      desc: "A systematic, analytics-led approach to identifying and capturing your best growth opportunities.",
      steps: [
        {
          title: "Analytics Audit",
          desc: "Review existing tracking, identify gaps and missing events, and set baseline KPIs.",
        },
        {
          title: "Stack Setup",
          desc: "GA4, Mixpanel, or PostHog — full event tracking, heatmaps, and session recordings.",
        },
        {
          title: "Analysis & Insights",
          desc: "Funnel drop-off analysis, cohort retention, and A/B test design based on real data.",
        },
        {
          title: "Iteration",
          desc: "Monthly insight reports, optimisation sprints, and experiments tied to revenue goals.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Grow With Alpha Brackets",
      items: [
        {
          title: "Revenue Metrics Only",
          desc: "We track metrics tied to revenue — not pageviews and bounce rates that don't pay bills.",
        },
        {
          title: "Full Attribution",
          desc: "Marketing, product, and sales data unified — know exactly what's driving growth.",
        },
        {
          title: "Statistically Rigorous A/B Testing",
          desc: "Experiments designed with proper sample sizes and significance thresholds — no false positives.",
        },
        {
          title: "Actionable Monthly Reports",
          desc: "Clear insights and next experiments delivered every month — not raw data dumps.",
        },
      ],
    },
    parent_service: null,
    bread_crumbs: [],
    active: true,
  },
];

export default services;
