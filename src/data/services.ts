import { Service, ServiceCategory } from "@/types";
import { MVP_TIMELINE, LOAD_HEADROOM } from "@/data/stats";
import {
  MonitorSmartphone,
  Smartphone,
  Brain,
  Palette,
  Cloud,
  Server,
  Bot,
  Megaphone,
  BarChart,
  ShieldCheck,
  Users,
  Building2,
} from "@/declarations/icons";

/**
 * Solutions are per service and there is **no default**, on purpose.
 *
 * There used to be a DEFAULT_SOLUTIONS list here, used by ServiceIntro as
 * `solutions ?? DEFAULT_SOLUTIONS`. It was unreachable, because all twelve
 * services define their own, and it was dangerous if it ever had been reached:
 * it advertised DevOps and SEO on pages about neither, and it still listed SEO
 * after that service was removed from the site.
 *
 * `solutions` is now required on the Service type, so a service that forgets its
 * list fails to compile instead of silently rendering someone else's.
 */

/**
 * Stats are per service and there is **no default**, on purpose.
 *
 * There used to be a DEFAULT_SERVICE_STATS fallback here, and WhyChooseUs topped
 * per-service stats up from the global STATS list. Between them, all ten service
 * pages ended up showing the same two numbers, and the timeline appeared twice on
 * every page. Worse, the claims were wrong for most services: "Weeks to MVP" on
 * the SEO page, which is not an MVP build, and "10x Load Without A Rewrite" on
 * UI/UX Design, which has no load story at all.
 *
 * So: a service gets a stat only when there is one that is both **true** and
 * **about that service**. Five of the ten have one, five do not, and those five
 * render no stats rather than borrowing someone else's. WhyChooseUs narrows its
 * layout when a service passes none.
 *
 * The test for adding one: is it a commitment we set (a timeline), or a factual
 * property of the work (one codebase, two platforms)? Those are fine. A client
 * outcome is not, until there are real clients to measure. This is why
 * "60% manual time reduction" and "30-40% cloud bill savings" were deleted.
 */

/**
 * The groups /services renders, in render order.
 *
 * ServicesGrid iterates this array rather than hardcoding headings, and skips any
 * group with no services in it, so adding a category before its first service is
 * safe. See the ServiceCategory docblock in src/types/service.ts for where each
 * heading comes from and why "Solutions" is not one of them.
 *
 * This decides the heading wording and the order the groups render in. It does not
 * decide which services are promoted to the homepage and nav, which is the ranked
 * list in src/data/featured-services.ts.
 *
 * **The group order is derived from that ranking, not chosen separately.** Each group
 * sits where its highest-ranked featured service sits, so the page opens on the same
 * priority the rest of the site leads with:
 *
 *   AI and Automation        AI and Intelligent Integrations   rank 1
 *   Rescue and Modernisation Code Rescue and Rebuild           rank 2
 *   Product Engineering      SaaS Platform Development         rank 3
 *   Business Applications    Custom CRM Development            rank 4
 *
 * Product Engineering used to be first purely because it was written first, which put
 * the two most defensible offers below the fold. If the featured ranking changes,
 * re-derive this order from it rather than picking a new one by hand.
 */
export const SERVICE_CATEGORIES = [
  { key: "ai-automation", heading: "AI and Automation" },
  { key: "rescue-modernisation", heading: "Rescue and Modernisation" },
  { key: "product-engineering", heading: "Product Engineering" },
  { key: "business-applications", heading: "Business Applications" },
] as const satisfies readonly { key: ServiceCategory; heading: string }[];

/**
 * Compile-time guarantee that every ServiceCategory is listed above.
 *
 * Without this, adding a member to the ServiceCategory union and forgetting to
 * list it here would make every service in that category disappear from /services
 * with no error anywhere, which is the one failure mode of grouping that is
 * invisible in review. `satisfies` above keeps the literal key types, which is
 * what makes this check able to see them.
 */
type UnlistedCategory = Exclude<
  ServiceCategory,
  (typeof SERVICE_CATEGORIES)[number]["key"]
>;
const _everyCategoryIsListed: UnlistedCategory extends never ? true : never =
  true;
void _everyCategoryIsListed;

// Numbering below is historical and now has gaps: 8 (SEO & Performance) was removed.
// The numbers are not an ordering guarantee, and nothing reads them. What actually
// controls behaviour is `category` (which group a service renders under on /services)
// and FEATURED_SERVICE_LINKS in src/data/featured-services.ts (which five reach the
// homepage and nav). Do not renumber to close the gap, it only creates churn.
//
// Copy rules for this file live in DESIGN.md. Short version: plain words, no em or
// en dashes as punctuation, and never a number we have not measured.
//
// `why_choose_us.title` must end with the words "Alpha Brackets". WhyChooseUs.tsx
// styles the last two words as the lighter emphasis, so that is the split point.
const services: Service[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. SAAS PLATFORM DEVELOPMENT (Featured)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab005",
    pragma_link: "saas-platform-development",
    category: "product-engineering",
    bg_image: "/images/backgrounds/bg5.jpg",
    title: "SaaS Platform Development",
    description:
      "We turn your SaaS idea into a product people can sign up to and pay for. We handle the hard parts of the setup so you are not rebuilding it a year from now.",
    meta_description:
      "We turn your SaaS idea into a product people can sign up to and pay for, and handle the setup so you are not rebuilding it in a year.",
    keywords: [
      "SaaS development",
      "multi-tenancy",
      "Stripe billing",
      "subscription platform",
      "API-first",
      "white-label",
    ],
    solutions: [
      "Multi-tenant SaaS builds",
      "Subscriptions and billing",
      "User and admin dashboards",
      "Login, roles, and permissions",
      "APIs your other tools can talk to",
      "Product usage tracking",
    ],
    // Both shared claims genuinely belong to this service: it is an MVP build, and
    // the load headroom is a statement about how the platform is architected.
    stats: [MVP_TIMELINE, LOAD_HEADROOM],
    card: {
      intro: "SaaS platforms built to take payments and grow.",
      icon: Cloud,
    },
    cta: {
      caption: "Build Your SaaS Product",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/graph.png",
      title_first: "SaaS",
      title_second: "Build Process",
      desc: "How we get a SaaS product from an idea to its first paying customer.",
      steps: [
        {
          title: "Product Discovery",
          desc: "We agree on who it is for, the features that matter, and how it will charge, before we build anything.",
        },
        {
          title: "Architecture Design",
          desc: "Database, login, billing, and API design get settled first, so the build has nothing to guess at.",
        },
        {
          title: "Core Platform Build",
          desc: "Login, Stripe billing, account management, and the admin dashboard. The parts everything else sits on.",
        },
        {
          title: "Feature Sprints",
          desc: "Features go out in short cycles with a demo every week, so you see progress as it happens.",
        },
        {
          title: "Launch and Growth",
          desc: "Deployment, monitoring, a speed pass, and a plan for what to build after launch.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build SaaS With Alpha Brackets",
      items: [
        {
          title: "Built For Real SaaS Problems",
          desc: "Separate customer accounts, billing, and access control are handled from day one, not patched in after launch.",
        },
        {
          title: "Small Scope First",
          desc: "We ship a working version early, put it in front of real users, then build on what they actually do with it.",
        },
        {
          title: "Room To Grow",
          desc: "The structure is set up so more customers and more data do not mean starting the product over.",
        },
        {
          title: "We Stay After Launch",
          desc: "Launch day is not the handoff. We keep working on the product with you once it is live.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 2. AI & INTELLIGENT INTEGRATIONS (Featured)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab003",
    pragma_link: "ai-and-intelligent-integrations",
    category: "ai-automation",
    bg_image: "/images/backgrounds/bg3.jpg",
    title: "AI & Intelligent Integrations",
    description:
      "Chatbots, document processing, search, and automation, built into your product as a real feature rather than added on at the end.",
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
      "Chatbots trained on your own content",
      "Answering questions from your documents",
      "Pulling data out of files and forms",
      "Drafting and summarising content",
      "Search that understands the question",
      "Automating steps a person does by hand",
    ],
    // Its own timeline, not the MVP one. This is the AI-retrofit offer from
    // business-strategy.md Section 1, adding a production AI feature to a product
    // that already exists, which is a different job from building an MVP.
    stats: [{ value: "4 to 6", label: "Weeks To A Live AI Feature" }],
    card: {
      intro: "AI planned into the product, not bolted on",
      icon: Brain,
    },
    cta: {
      caption: "Integrate AI Into Your Product",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/dots.png",
      title_first: "AI Integration",
      title_second: "Process",
      desc: "How we add AI to a product without shipping something that breaks the first time a real user tries it.",
      steps: [
        {
          title: "Pick The Right Use Case",
          desc: "We work out where AI genuinely helps in your product, and where it would just be a gimmick.",
        },
        {
          title: "Look At Your Data",
          desc: "We check what data you have, how clean it is, and which systems we need to connect to.",
        },
        {
          title: "Choose An Approach And Prove It",
          desc: "We decide how to build it, then put a rough working version in front of you fast.",
        },
        {
          title: "Build It Properly",
          desc: "The real version gets error handling, logging, and monitoring, so you know when something goes wrong.",
        },
        {
          title: "Ship And Hand Over",
          desc: "It goes into your product, documented, with your team walked through how it works.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build AI Features With Alpha Brackets",
      items: [
        {
          title: "Useful, Not A Demo",
          desc: "We build AI features meant to run in front of paying users, not ones that only work in a controlled demo.",
        },
        {
          title: "No Single Vendor",
          desc: "OpenAI, Claude, Gemini, or an open model. We pick per job and tell you why.",
        },
        {
          title: "Planned In From The Start",
          desc: "Products we build leave room for AI features, so adding one later is not a rebuild.",
        },
        {
          title: "We Watch The Bill",
          desc: "We design around what each call costs, so usage going up does not quietly become a problem.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 3. WEB APPLICATION DEVELOPMENT (Featured)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab001",
    pragma_link: "web-app-development",
    category: "product-engineering",
    bg_image: "/images/backgrounds/bg1.jpg",
    title: "Web Application Development",
    description:
      "We design and build web apps from scratch, with a codebase your next developer can pick up and keep building on.",
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
      "Custom web apps",
      "Dashboards and internal tools",
      "Apps that work properly on a phone",
      "Connecting the services you already use",
      "Client and partner portals",
      "Online stores",
    ],
    // Timeline only. The load claim belongs to the SaaS platform service, where the
    // architecture is the point; a web app build does not automatically make it.
    stats: [MVP_TIMELINE],
    card: {
      intro: "Web apps built to grow with your business.",
      icon: MonitorSmartphone,
    },
    cta: {
      caption: "Start Building Your Web App",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/pattern.png",
      title_first: "Our Web Dev",
      title_second: "Process",
      desc: "From the first call to a live site, with nothing happening that you did not agree to.",
      steps: [
        {
          title: "Discovery And Scoping",
          desc: "We settle what it does, who uses it, and what comes first, before a single line of code is written.",
        },
        {
          title: "Design",
          desc: "Rough layouts through to finished screens in Figma, signed off by you before the build starts.",
        },
        {
          title: "Build",
          desc: "Short cycles with a demo every week, built in React, Next.js, and TypeScript.",
        },
        {
          title: "Wire Up The Backend",
          desc: "APIs, logins, the database, and any outside services the app needs to talk to.",
        },
        {
          title: "Test And Launch",
          desc: "Testing, a speed check, and deployment to Vercel, AWS, or wherever you want it to live.",
        },
      ],
    },
    why_choose_us: {
      // These four were the most interchangeable set on the site: "you see it early",
      // "code you can live with", "current tools", "nothing hidden". Any agency could
      // claim all four, which makes them worth nothing on a page meant to convert.
      // Two are now specific to how a web app is actually built.
      title: "Why Build With Alpha Brackets",
      items: [
        {
          title: "It Works On A Phone Because It Was Built To",
          desc: "Most web apps are designed at desktop width and squeezed down afterwards. We build the narrow layout at the same time, because that is where a good share of your users will open it first.",
        },
        {
          title: "Fast Without A Later Rescue Project",
          desc: "Server rendering, image handling and bundle size get decided during the build. Retrofitting speed into a finished app is a separate project, and a more expensive one.",
        },
        {
          title: "Code You Can Live With",
          desc: "TypeScript throughout and small, reusable pieces, so changing something later is cheap. If you hand it to another developer, they can read it.",
        },
        {
          title: "Nothing Hidden",
          desc: "Weekly demos, access to the repo from the first commit, and a straight answer when something slips.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 4. UI/UX DESIGN (Supporting)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab004",
    pragma_link: "ui-ux-design",
    category: "product-engineering",
    bg_image: "/images/backgrounds/bg4.jpg",
    title: "UI/UX Design",
    description:
      "Interfaces designed around what your users are actually trying to do, so they can get through your product without being taught how.",
    keywords: [
      "UI/UX design",
      "user experience",
      "Figma",
      "design system",
      "wireframes",
      "prototyping",
      "usability testing",
    ],
    solutions: [
      "Full product design in Figma",
      "User flows and screen layouts",
      "Clickable prototypes",
      "A design system your developers can reuse",
      "Redesigning a product that already exists",
      "Testing designs with real users",
    ],
    // No stat. A design engagement has no number we set or can measure.
    // Turnaround depends entirely on scope and how fast feedback comes back.
    card: {
      intro: "Design people can actually get through",
      icon: Palette,
    },
    cta: {
      caption: "Design Your Product",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/pattern2.png",
      title_first: "Design",
      title_second: "Process",
      desc: "How we get from what your users need to screens a developer can build.",
      steps: [
        {
          title: "Research",
          desc: "We talk to your users where we can, look at what competitors do, and go through your current product for the parts that trip people up.",
        },
        {
          title: "Structure",
          desc: "User flows, page maps, and rough layouts. We settle where everything lives before worrying about how it looks.",
        },
        {
          title: "Visual Design",
          desc: "Finished screens in Figma, built on a set of reusable styles and components that match your brand.",
        },
        {
          title: "Prototype And Check",
          desc: "A clickable version people can try, so we fix the confusing parts while they are still cheap to fix.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Design With Alpha Brackets",
      items: [
        {
          title: "Design With A Reason",
          desc: "We can tell you why every screen works the way it does. None of it comes down to personal taste.",
        },
        {
          title: "Ready To Build",
          desc: "Figma files come with spacing, states, assets, and reusable styles, so a developer can start without guessing.",
        },
        {
          title: "Accessibility Considered",
          desc: "We check colour contrast, keyboard use, and screen reader labels as we design, and tell you where a full audit would be needed.",
        },
        {
          title: "We Stay Through The Build",
          desc: "We are still around while it is being built, answering the questions the design did not cover.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 5. BUSINESS AUTOMATION (Supporting)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab008",
    pragma_link: "business-automation",
    category: "ai-automation",
    bg_image: "/images/backgrounds/bg3.jpg",
    title: "Business Automation",
    description:
      "We take the repetitive work your team does by hand and make it run on its own, so growing does not mean hiring for the same job again.",
    keywords: [
      "business automation",
      "workflow automation",
      "no-code",
      "n8n",
      "Zapier",
      "Make.com",
      "process automation",
    ],
    solutions: [
      "Automating a manual process end to end",
      "Connecting tools that do not talk to each other",
      "Automatic reports and alerts",
      "Moving data between systems",
      "Onboarding and follow-up sequences",
      "Custom scripts where off-the-shelf tools stop",
    ],
    // No stat. Its only number was "60% manual time reduction", deleted
    // as unverifiable. Real time saved is a client outcome we cannot claim yet.
    card: {
      intro: "Stop doing the same task by hand.",
      icon: Bot,
    },
    cta: {
      caption: "Automate Your Business",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/dots2.png",
      title_first: "Automation",
      title_second: "Process",
      desc: "How we find the manual work worth automating, and leave the rest alone.",
      steps: [
        {
          title: "Map What Happens Now",
          desc: "We write down how the work gets done today and rank each step by how long it takes and how often it goes wrong.",
        },
        {
          title: "Pick The Tools",
          desc: "n8n, Make.com, Zapier, or custom code. It depends on how complex the job is and what your team can maintain.",
        },
        {
          title: "Build And Test",
          desc: "We build it and try to break it on the odd cases before it goes anywhere near your live data.",
        },
        {
          title: "Go Live And Watch It",
          desc: "It goes live with alerts when something fails, plus notes your team can follow.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Automate With Alpha Brackets",
      items: [
        {
          title: "We Start With The Worst Job",
          desc: "We look at what actually eats your team's week and start there, rather than automating whatever is easiest.",
        },
        {
          title: "Simple Tools Where They Fit",
          desc: "If a no-code tool does the job, we use it. It is quicker to build and easier for you to change later.",
        },
        {
          title: "Written Down",
          desc: "Every automation comes with notes, so your team can understand and adjust it without calling us.",
        },
        {
          title: "It Tells You When It Breaks",
          desc: "Retries and alerts are built in, so a failed job does not sit there unnoticed for a week.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 6. MOBILE APP DEVELOPMENT (Catalog only, SEO/long-tail)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab002",
    pragma_link: "mobile-app-development",
    category: "product-engineering",
    bg_image: "/images/backgrounds/bg2.jpg",
    title: "Mobile App Development",
    description:
      "iOS and Android apps built from one codebase, so you are paying to build and maintain the app once instead of twice.",
    keywords: [
      "mobile app development",
      "iOS",
      "Android",
      "React Native",
      "Flutter",
      "cross-platform",
      "Expo",
    ],
    solutions: [
      "iOS and Android from one codebase",
      "Apps that keep working with no signal",
      "Push notifications",
      "In-app payments and subscriptions",
      "Connecting the app to your existing systems",
      "Getting it through App Store and Play review",
    ],
    // A factual property of the build rather than a promise, and it is already the
    // lead argument in this service's why_choose_us.
    stats: [{ value: "2", label: "Platforms, One Codebase" }],
    card: {
      intro: "One app, both app stores",
      icon: Smartphone,
    },
    cta: {
      caption: "Build Your Mobile App",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/lines.png",
      title_first: "Mobile App",
      title_second: "Process",
      desc: "How we ship an app to both stores without building it twice.",
      steps: [
        {
          title: "Decide How To Build It",
          desc: "Native, React Native, or Flutter. We look at what your app has to do and recommend one.",
        },
        {
          title: "Design",
          desc: "Screens designed for a phone first, following what iOS and Android users already expect.",
        },
        {
          title: "Build",
          desc: "One shared codebase in React Native or Flutter, covering both platforms.",
        },
        {
          title: "Test On Real Devices",
          desc: "We test on actual phones across iOS and Android versions and screen sizes, not just a simulator.",
        },
        {
          title: "Submit And Launch",
          desc: "We handle the App Store and Play Store submissions and stay on it until the app is live.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Mobile With Alpha Brackets",
      items: [
        {
          title: "One Codebase, Two Platforms",
          desc: "React Native or Flutter means one build, one bill, and one place to make every future change.",
        },
        {
          title: "Works Without Signal",
          desc: "We can build the app to keep working offline and sync up later, which matters if your users are out in the field.",
        },
        {
          title: "Tested Before It Ships",
          desc: "We test on real devices and fix what we find, so the first review is not someone reporting a crash.",
        },
        {
          title: "We Handle The Stores",
          desc: "Submission, review notes, and rejections are ours to deal with, not yours.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 7. DEVOPS & CLOUD INFRASTRUCTURE (Catalog only, SEO/long-tail)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab006",
    pragma_link: "devops-and-cloud",
    category: "rescue-modernisation",
    bg_image: "/images/backgrounds/bg1.jpg",
    title: "DevOps & Cloud Infrastructure",
    description:
      "Deployment, hosting, and monitoring set up so shipping a change is routine and you find out about problems before your users do.",
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
    solutions: [
      "Automatic testing and deployment",
      "Cloud hosting setup",
      "Containers and repeatable environments",
      "Monitoring and alerts",
      "Backups and recovery",
      "Reviewing what your cloud bill is for",
    ],
    // Factual, and it matches this service's own "AWS, GCP, or Azure" copy.
    stats: [{ value: "3", label: "Clouds We Deploy To" }],
    card: {
      intro: "Deploys that are boring, on purpose",
      icon: Server,
    },
    cta: {
      caption: "Set Up Your Infrastructure",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/bg-pattern.png",
      title_first: "DevOps",
      title_second: "Process",
      desc: "How we get infrastructure to a state where you stop thinking about it.",
      steps: [
        {
          title: "Look At What You Have",
          desc: "We go through your current setup for the parts that are slow, risky, or costing more than they need to.",
        },
        {
          title: "Plan It",
          desc: "Everything gets defined in files kept under version control, so the setup can be rebuilt the same way every time.",
        },
        {
          title: "Automate Deployment",
          desc: "GitHub Actions or GitLab CI, so every push gets built, tested, and deployed without anyone doing it by hand.",
        },
        {
          title: "Containers",
          desc: "Docker, with Kubernetes where the size of the project warrants it, so deploys do not need downtime.",
        },
        {
          title: "Monitoring And Cost Review",
          desc: "Dashboards, alerts, and a regular look at the bill, so you can see what is running and what it costs.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Run Your Infrastructure With Alpha Brackets",
      items: [
        {
          title: "Automated Deploys As Standard",
          desc: "Every product we ship gets a deployment pipeline. It is not a line item you have to ask for.",
        },
        {
          title: "Your Cloud, Your Choice",
          desc: "AWS, GCP, or Azure. We work with what you are on and do not tie you to one provider.",
        },
        {
          title: "We Check The Bill",
          desc: "We go through your infrastructure for things running that nobody uses, and tell you what can be switched off.",
        },
        {
          title: "Locked Down From The Start",
          desc: "Access permissions, secrets, and network rules get set up properly at the beginning, not after an incident.",
        },
      ],
    },
    active: true,
  },

  // REMOVED: 8. SEO & Performance Optimisation (was `ab007`, `seo-and-performance`).
  // Deleted, not disabled. It was selling technical SEO audits from a domain with no
  // Search Console property and no structured data, which a technical buyer checks in
  // about thirty seconds. It was also the last marketing-adjacent service, and SEO
  // terms are unrankable at this domain authority anyway. Page speed and Core Web
  // Vitals work is still claimed inside the build services and Code Rescue.
  // Full copy is preserved in docs/company-overview.md section 4.8 if it is ever
  // wanted back. Numbering below keeps its original sequence, so 8 is simply absent.

  // ─────────────────────────────────────────────────────────────
  // 9. MARKETING & CAMPAIGN TOOLING (Catalog only, software for marketing teams/agencies)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab009",
    pragma_link: "marketing-campaign-tooling",
    category: "business-applications",
    bg_image: "/images/backgrounds/bg4.jpg",
    title: "Marketing & Campaign Tooling",
    description:
      "Software for marketing teams and agencies. Campaign dashboards, reporting that builds itself, and content workflow tools, to replace the spreadsheets someone updates by hand every Monday.",
    meta_description:
      "Campaign dashboards, reporting that builds itself, and content workflow tools. Built to replace the spreadsheet someone updates by hand.",
    keywords: [
      "marketing software",
      "campaign management tool",
      "agency software",
      "marketing dashboard",
      "reporting automation",
      "marketing technology",
      "custom marketing tools",
    ],
    solutions: [
      "Campaign dashboards",
      "Client reports that build themselves",
      "Content planning and approval tools",
      "Pulling ad platform data into one place",
      "Connecting your CRM to the rest of your tools",
      "Internal tools for agency teams",
    ],
    // No stat. Nothing true and specific to this service yet.
    card: {
      intro: "Tools for marketing teams, not marketing services",
      icon: Megaphone,
    },
    cta: {
      caption: "Build Your Marketing Tool",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/noise.png",
      title_first: "Marketing Tooling",
      title_second: "Process",
      desc: "How we build an internal marketing tool your team will still be using in six months.",
      steps: [
        {
          title: "Watch How You Work Now",
          desc: "We go through your campaign, reporting, and content process to find what is worth automating and what is not.",
        },
        {
          title: "Design The Tool",
          desc: "We lay out the dashboard or report your team needs, shaped around how they already do the job.",
        },
        {
          title: "Build And Connect",
          desc: "Ad platforms, your CRM, and your spreadsheets get pulled into one tool built on your own systems.",
        },
        {
          title: "Roll It Out",
          desc: "We hand it to your team with notes, so it does not get quietly abandoned a fortnight later.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Marketing Tools With Alpha Brackets",
      items: [
        {
          title: "Shaped Around Your Team",
          desc: "The tool follows how your team already works. You are not changing your process to suit the software.",
        },
        {
          title: "Fewer Spreadsheets",
          desc: "Reporting and campaign tracking that update themselves, instead of someone rebuilding them every week.",
        },
        {
          title: "Talks To Your Other Tools",
          desc: "Meta, Google Ads, your CRM, and your analytics, all reporting into one place.",
        },
        {
          title: "Built By Developers",
          desc: "We write the software. We do not run your ads or resell someone else's dev team.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 10. CUSTOM ANALYTICS & REPORTING PLATFORMS (Catalog only, software for data-heavy teams)
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab010",
    pragma_link: "analytics-reporting-platforms",
    category: "business-applications",
    bg_image: "/images/backgrounds/bg5.jpg",
    title: "Custom Analytics & Reporting Platforms",
    description:
      "Dashboards and reporting tools built for your data, for teams stuck exporting spreadsheets or waiting on a reporting tool that does not quite fit.",
    keywords: [
      "custom analytics dashboard",
      "reporting platform",
      "business intelligence tool",
      "data dashboard development",
      "custom BI tool",
      "internal analytics tool",
    ],
    solutions: [
      "Internal analytics dashboards",
      "Reports for your customers or clients",
      "Bringing several data sources together",
      "Scheduled reports by email",
      "Live operational dashboards",
      "Replacing a reporting spreadsheet",
    ],
    // No stat. Nothing true and specific to this service yet.
    card: {
      intro: "Dashboards built around your data",
      icon: BarChart,
    },
    cta: {
      caption: "Build Your Analytics Platform",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/graph.png",
      title_first: "Analytics Platform",
      title_second: "Process",
      desc: "How we build a dashboard people open, instead of one that gets bookmarked and forgotten.",
      steps: [
        {
          title: "Look At Your Data",
          desc: "We go through what data you have, what is missing, and which decisions the dashboard is meant to help with.",
        },
        {
          title: "Design The Views",
          desc: "We lay out the specific reports and screens your team needs, and leave out the ones nobody asked for.",
        },
        {
          title: "Build And Connect",
          desc: "We build the platform and hook it up to the systems your data already lives in.",
        },
        {
          title: "Launch And Adjust",
          desc: "It goes live, then we change it based on what your team actually opens and ignores.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Analytics Tools With Alpha Brackets",
      items: [
        {
          title: "Fits Your Data",
          desc: "We build around the data you have. You are not reshaping it to fit what a reporting tool expects.",
        },
        {
          title: "One Place To Look",
          desc: "Scattered spreadsheets get replaced by one dashboard, with numbers your team can agree on.",
        },
        {
          title: "You Own It",
          desc: "No licence per person and no vendor to renew with. The platform is yours.",
        },
        {
          title: "Built By Developers",
          desc: "You get engineers building the tool, not a reporting product with consulting attached.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 11. CODE RESCUE AND REBUILD (Catalog only, and the priority funnel page)
  //
  // Added because the demand here is growing while demand for a simple first
  // build is being absorbed by AI tooling. That part holds up: GitClear's analysis
  // of 211M changed lines shows technical debt rising 30-41% after teams adopt AI
  // coding tools, and Stack Overflow's 2025 survey has 84% AI usage against 29%
  // trust.
  //
  // WRONG, and corrected: this was originally prioritised over CRM/ERP on the claim
  // that rescue was "a category that barely exists in agency marketing". One search
  // disproved it. ISHIR markets "Vibe Code Cleanup Services", Oktopeak does
  // regulated-industry rescue at a published $15k-$40k, and Bamboo Agile, ASD Team,
  // Durable Programming, Bemeir and Aalpha all run dedicated rescue pages. Ranked
  // "Top 10" listicles exist for the exact terms, which means aggregators own those
  // SERPs and a zero-authority domain will not outrank them.
  //
  // The page still earns its place, but as an OUTBOUND and referral landing page
  // where ranking is irrelevant, not as an SEO play. Do not reuse the low-competition
  // reasoning. See docs/seo-keywords.md section 2b.
  //
  // Two rules for this copy specifically:
  //  1. Never blame the previous developer, agency, or an AI tool. The reader may
  //     have written it themselves, and it reads as unprofessional either way.
  //  2. Never imply we have done a rescue before. There are no clients. The page
  //     describes what we would do on arrival, which is a process statement, the
  //     same standing the other process sections have.
  //
  // The audit being separately priced is not a sales tactic, it is what makes
  // fixed-price safe here. Quoting a rebuild on a codebase nobody has read is how
  // agencies lose money on this work.
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab011",
    pragma_link: "code-rescue-and-rebuild",
    category: "rescue-modernisation",
    bg_image: "/images/backgrounds/bg1.jpg",
    title: "Code Rescue and Rebuild",
    description:
      "Someone built it, and now it breaks in ways nobody can explain. We read the code first, tell you plainly what is there, then price the work to finish it or rebuild the parts that cannot be saved.",
    meta_description:
      "We read the code first, then price the work. An honest written assessment of what is worth saving, before any commitment to finish or rebuild it.",
    keywords: [
      "code rescue service",
      "rebuild AI generated code",
      "fix vibe coded app",
      "take over unfinished software project",
      "software audit service",
      "inherited codebase developer",
    ],
    solutions: [
      "Code and architecture audit",
      "Security and data review",
      "Finishing an unfinished build",
      "Rebuilding what cannot be saved",
      "Getting it deployable again",
      "Documentation and handover",
    ],
    // The audit priced on its own is what makes this service safe to sell fixed
    // price. See the ServiceOffer docblock in src/types/service.ts.
    offer: {
      name: "Code Review",
      // The 66% figure is from the Stack Overflow developer survey (49,000
      // respondents, 177 countries), where it is the single most-cited complaint
      // about AI-generated code. It is included because it is the rescue pitch in the
      // buyer's own words, and because this category turned out to be far more
      // contested than first assumed, so "we read the code first" is not a wedge on
      // its own.
      //
      // **It must stay visibly attributed.** An unattributed statistic reads as our
      // own measurement, which would make it a fabricated claim. It is also
      // deliberately prose and not a `stats` pill: the stat rule governs claims about
      // our own work, and this is somebody else's research.
      summary:
        "The first step is always the same, and it is small. We read what exists and write down what we find. No code changes, no commitment to a rebuild, and no quote until we have actually looked. In Stack Overflow's 2025 developer survey, 66% of developers said their biggest problem with AI-generated code was output that is almost right, but not quite. That is the hardest kind to find, and the most expensive to leave in.",
      includes: [
        "A read through the codebase, the infrastructure and any documentation",
        "What works, what is risky, and what is missing, in writing",
        "The parts worth keeping, named specifically",
        "A security and data check",
        "What it would take to finish or rebuild it",
      ],
      guarantee:
        "The written assessment is yours to keep, whether you carry on with us or take it to another team.",
      // The timebox matters. "Fixed price" with no duration invites "how long am I
      // waiting?" at the exact moment someone is deciding to commit.
      next: "Most reviews take under a week. If you want us to do the work after it, that gets quoted as a fixed price once the review is done. Never before.",
    },
    // No stat. Nothing true and specific to this service yet, and a number here
    // would have to be a claim about rescues we have not done.
    card: {
      intro: "For software that was started and never properly finished.",
      icon: ShieldCheck,
    },
    cta: {
      caption: "Get Your Code Reviewed",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/dots2.png",
      title_first: "Code",
      title_second: "Rescue Process",
      desc: "How we go from a codebase nobody wants to touch to something you can safely build on.",
      steps: [
        {
          title: "Read The Code",
          desc: "We go through the codebase, the infrastructure, and whatever documentation exists. Nothing gets changed yet. This step is only about working out what is really there.",
        },
        {
          title: "Honest Written Assessment",
          desc: "You get it in writing: what works, what is risky, what is missing, and where the real problems are. The report is yours whether you carry on with us or not.",
        },
        {
          title: "Agree What Is Worth Saving",
          desc: "Usually some of it is fine. We agree together what gets kept, what gets rewritten, and what gets dropped, and only then price the work.",
        },
        {
          title: "Stabilise And Finish",
          desc: "The things that are breaking get fixed first, then we finish what was never completed, with a working version at the end of every week.",
        },
        {
          title: "Handover You Can Maintain",
          desc: "A deployment you can repeat, documentation someone new can follow, and a codebase your next developer will not need rescuing from.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Bring A Rescue To Alpha Brackets",
      items: [
        {
          title: "You Get The Truth In Writing",
          desc: "The assessment covers what is actually there, including the parts that are fine. If the honest answer is that it only needs finishing rather than rebuilding, we will tell you that.",
        },
        {
          title: "We Price After Reading The Code",
          desc: "Nobody can quote a rebuild they have not looked at. The review is a fixed price, and the work after it is quoted once we know what we are dealing with.",
        },
        {
          title: "No Blame For What Exists",
          desc: "A previous agency, a contractor, an AI tool, or your own first attempt. It makes no difference to us. The only question we care about is what it takes to get it working.",
        },
        {
          title: "You Own It At The End",
          desc: "The repository, the accounts, the infrastructure, and documentation that means the person after us is not starting from nothing.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 12. CUSTOM CRM DEVELOPMENT (Catalog only, serves strategy §1 segment 4)
  //
  // Added ahead of ERP, POS and booking pages, and the reason is not search
  // volume. "Business Applications" is borrowed vocabulary that at Devsinc and
  // Microsoft specifically means CRM and ERP, so a reader hitting that heading
  // expects a CRM page to exist. Without one the heading promised something the
  // catalog did not contain.
  //
  // It also does not depend on organic search to be worth having: it is a landing
  // page to send someone in outbound or after a referral. That is why the keyword
  // validation gate in docs/seo-keywords.md still applies to POS and booking,
  // where ranking is the only argument, but not to this one.
  //
  // Capability-wise this is the safest of the four: a CRM is a web app with
  // pipeline logic. ERP is the one that needs care, which is why it is still
  // waiting. Draft copy for the other three is in docs/service-page-drafts.md.
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab012",
    pragma_link: "crm-development",
    category: "business-applications",
    bg_image: "/images/backgrounds/bg4.jpg",
    title: "Custom CRM Development",
    description:
      "We build a CRM around how your team already sells, instead of making you bend your process to fit someone else's software. Your fields, your stages, your rules.",
    meta_description:
      "A CRM built around how your team already sells, not the other way round. Your fields, your stages, your rules.",
    keywords: [
      "custom CRM development",
      "CRM software development company",
      "bespoke CRM",
      "sales pipeline software",
      "CRM integration",
      "internal sales tool",
    ],
    solutions: [
      "Contact and company records",
      "Deal and pipeline tracking",
      "Quotes and proposals",
      "Email and calendar sync",
      "Reporting for managers",
      "Roles and permissions for teams",
    ],
    // No stat. Nothing true and specific to this service yet.
    card: {
      intro: "CRM systems built around how your team already sells.",
      icon: Users,
    },
    cta: {
      caption: "Build Your CRM",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/dots.png",
      title_first: "CRM",
      title_second: "Build Process",
      desc: "How we get from the way your team sells today to a CRM they will actually keep updated.",
      steps: [
        {
          title: "Map Your Sales Process",
          desc: "We follow a deal from first contact to closed, and write down the stages you actually use rather than the ones a product template assumes.",
        },
        {
          title: "Data Model And Migration",
          desc: "We work out how your records fit together, then plan how what you have now, spreadsheets included, gets moved across without losing history.",
        },
        {
          title: "Core CRM Build",
          desc: "Contacts, companies, deals, and the pipeline view your team lives in. Built first, so there is something real to react to early.",
        },
        {
          title: "Integrations",
          desc: "Email, calendar, and whatever else your process depends on, so nobody is copying the same detail into two systems.",
        },
        {
          title: "Rollout And Training",
          desc: "We move your team over, sit with them while they use it, and fix the friction that only shows up once real deals are going through it.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Your CRM With Alpha Brackets",
      items: [
        {
          title: "Built Around Your Process",
          desc: "The stages, fields and rules match how your team already sells. Nobody has to change how they work to suit the software.",
        },
        {
          title: "Only The Fields You Use",
          desc: "Off the shelf CRMs bury the useful screens under features you will never touch. Yours has what your team needs and nothing else.",
        },
        {
          title: "Your Data Stays Yours",
          desc: "No per seat licence, no export limits, and no vendor to renew with. The database and the records in it belong to you.",
        },
        {
          title: "Room To Add More Later",
          desc: "It is built so quoting, support or reporting can be added on top later, rather than needing a second system alongside it.",
        },
      ],
    },
    active: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 13. ERP AND INTERNAL BUSINESS TOOLS (Catalog only, strategy §1 segment 4)
  //
  // ⚠️ The most careful copy on the site, and it was wrong on the first attempt.
  //
  // The first version led with "we start with the one process costing you the most
  // time, not a full system replacement". That mistook a **delivery method for a
  // scope limit**. ERP buyers ask for breadth (finance, stock, HR, purchasing,
  // operations), so a page that opens by narrowing the scope reads as an inability
  // to do the job, and it answers an objection nobody raised. Finance and HR were
  // missing from `solutions` entirely.
  //
  // Phasing is still correct, because big-bang ERP rollouts are the classic way
  // these projects fail. It belongs where it is now: the **whole** system is
  // mapped and planned up front, then delivered in sequenced phases. That is a
  // benefit, not a limitation, and it must read as one.
  //
  // The guard that replaced it, calibrated rather than modest:
  //  1. **Claim the breadth, not the product category.** We build custom software
  //     covering the operations a business runs on. We are not an off-the-shelf
  //     ERP vendor and not a migration shop, so never imply we replace or migrate
  //     anyone off SAP, NetSuite or Odoo.
  //  2. **Do not shorten the title to "ERP Development".** "and Internal Business
  //     Tools" is what signals custom-built rather than a product implementation.
  //  3. No implied track record. There are no clients. Every line describes what
  //     we would do, the same standing the other process sections have.
  //  4. Payroll processing is regulated and is deliberately not offered. HR here
  //     means records, leave and approvals.
  //
  // Shipped at the client's direction ahead of the keyword validation in
  // docs/seo-keywords.md §3, which is still worth doing. Unlike CRM, this page's
  // main justification *was* search intent, so if the terms turn out to be
  // unrankable this is the page to reconsider first.
  // ─────────────────────────────────────────────────────────────
  {
    _id: "ab013",
    pragma_link: "erp-and-internal-tools",
    category: "business-applications",
    bg_image: "/images/backgrounds/bg3.jpg",
    title: "ERP and Internal Business Tools",
    description:
      "We build ERP software around how your business actually runs, across finance, stock, purchasing, people and jobs. We map the whole operation first, then build it in phases, so you get working software early instead of waiting on one big switch on.",
    meta_description:
      "ERP built around how your business already runs. We map the whole operation first, then build in phases, so you get working software early.",
    keywords: [
      "custom ERP development",
      "ERP software development company",
      "internal business tools",
      "inventory and purchasing software",
      "business process software",
      "custom operations software",
    ],
    solutions: [
      "Finance, invoicing and reporting",
      "Stock and inventory control",
      "Purchasing and supplier management",
      "HR records, leave and approvals",
      "Job, project and production tracking",
      "Roles, permissions and audit trails",
    ],
    // No stat. Nothing true and specific to this service yet.
    card: {
      intro: "ERP built around your operations, delivered in phases.",
      icon: Building2,
    },
    cta: {
      caption: "Discuss Your Internal Tools",
      link: "/contact",
    },
    process: {
      bg_image: "/images/patterns/lines.png",
      title_first: "Internal Tools",
      title_second: "Build Process",
      desc: "How we build a system across your whole operation without stopping the work that depends on it.",
      steps: [
        {
          title: "Map The Whole Operation",
          desc: "We go through every part the system has to cover, finance to stock to people, sitting with the staff doing the work. That includes the spreadsheets and the steps nobody ever wrote down.",
        },
        {
          title: "Design It As One System",
          desc: "We settle how the whole thing fits together first, so stock, purchasing, finance and jobs share one set of records instead of becoming separate tools that disagree.",
        },
        {
          title: "Agree The Build Order",
          desc: "The full scope is planned, then sequenced. Whatever is costing you the most time gets built first, so the system starts earning its keep before it is finished.",
        },
        {
          title: "Build, Pilot, Repeat",
          desc: "Each phase goes live alongside how you work today and gets adjusted from real use, then the next one starts. No single day where everything changes at once.",
        },
        {
          title: "Connect And Hand Over",
          desc: "We join it to the tools you are keeping, your accounting software included, so nothing is entered twice, then hand over documentation your own team can work from.",
        },
      ],
    },
    why_choose_us: {
      title: "Why Build Your ERP With Alpha Brackets",
      items: [
        {
          title: "Covers The Operations You Actually Run",
          desc: "Finance, stock, purchasing, HR records, jobs, reporting. The scope is set by what your business does, not by which modules a product happens to sell.",
        },
        {
          title: "Planned Whole, Delivered In Phases",
          desc: "The full system is designed up front so the parts fit together, then built in stages. Switching an entire company over on one day is how ERP projects fail.",
        },
        {
          title: "Fits The Process You Have",
          desc: "Your approvals, your stages, your terminology. The software follows how the business already runs instead of forcing a rewrite of it.",
        },
        {
          title: "You Own It Outright",
          desc: "No licence per user and no renewal to negotiate. The system, the data, and the code are yours.",
        },
      ],
    },
    active: true,
  },
];

export default services;
