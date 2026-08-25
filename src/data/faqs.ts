import { Faq } from "@/types/cms";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  category: string;
  questions: FaqItem[];
}

/**
 * Static FAQ content for /faqs.
 *
 * Deliberately not typed as the CMS `Faq` from src/types/cms.ts. That type
 * requires `portfolio` and `order`, which are meaningless for local content.
 * If real FAQ content is ever entered in the CMS, pass it through
 * `groupCmsFaqs` below and hand the result to the same component.
 *
 * Two hard rules when editing this file:
 *  1. No prices. Not a figure, not a range, not "starting at". See the pricing
 *     display rule in docs/business-strategy.md Section 4. Price is quoted on
 *     the call, which is the whole point of the cost answers below.
 *  2. Nothing we cannot back. These answers describe how we work, which we
 *     control, and avoid claims about clients we do not have yet.
 *
 * Keep the wording consistent with src/data/discovery.ts (EXPECT_ITEMS) and
 * the discovery funnel, so the site describes one process in one voice.
 */
export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Cost and scope",
    questions: [
      {
        q: "How much does a build cost?",
        a: "It depends on what you need, so we quote a fixed price for your specific scope rather than working from a rate card. What moves the number is how many user journeys the product has, whether it needs to handle payments, whether there is an AI feature, and how much of the design already exists. You get that price in writing before any work starts.",
      },
      {
        q: "Why is there no price on your website?",
        a: "Because a number on its own tells you nothing. Two builds at the same price can include wildly different amounts of work, and a figure with no scope attached just invites you to compare us against something that is not comparable. We would rather hear what you are building first, then give you a real price for it. That takes one 30 minute call.",
      },
      {
        q: "Do I need to have raised funding to work with you?",
        a: "No. Plenty of the founders we want to work with are bootstrapped or paying out of revenue. What matters is that you have a budget for the build, not where the budget came from.",
      },
      {
        q: "What happens if the scope changes halfway through?",
        a: "It usually does, and that is fine. When something new comes up we tell you what it does to the price and the timeline before we build it. You decide whether it goes in now, waits until after launch, or gets dropped. Nothing gets added to your invoice quietly.",
      },
    ],
  },
  {
    category: "Timeline and process",
    questions: [
      {
        q: "How long does it take?",
        a: "Most builds land between 4 and 10 weeks. One core user journey with accounts, login and a working dashboard sits at the short end. Payments, serving several customers on one system, or a production AI feature push it longer. You get a real timeline with the proposal, not a guess on the first call.",
      },
      {
        q: "What do those weeks actually look like?",
        a: "You see working software at the end of every week, starting from the first one. No months of silence followed by a big reveal. If something is going slower than we said, you hear it that week rather than at the end.",
      },
      {
        q: "Do I need designs or a brand before we start?",
        a: "No. If you already have a brand we build to it. If you do not, we design one first, then the screens, and you sign those off before development starts. Turning up with nothing but an idea is a completely normal starting point.",
      },
    ],
  },
  {
    category: "Working with us",
    questions: [
      {
        q: "Who will I actually be talking to?",
        a: "The engineer building your product. There is no account manager in the middle relaying messages, and the first call is not a sales call.",
      },
      {
        q: "What technology do you build on?",
        a: "We pick the tools to fit the project rather than forcing every build through the same stack. In practice that is usually TypeScript with Next.js and React, and we choose the database, hosting and AI approach based on what your product actually has to do. On the first call we will tell you what we would build yours with and why.",
      },
      {
        q: "Does every project need an AI feature?",
        a: "No, and we will say so if yours does not need one. AI is worth adding when it does something real for your users. Bolting it on so the product has a buzzword in it is a good way to spend money for nothing. A plain MVP with no AI in it is a legitimate thing to build.",
      },
    ],
  },
  {
    category: "After launch",
    questions: [
      {
        q: "Who owns the code?",
        a: "You do. The repository, the accounts, the infrastructure, all of it is yours and in your name from the start. You are not renting your own product from us, and you can take it to another team whenever you want.",
      },
      {
        q: "What happens after launch? Do you disappear?",
        a: "Only if you want us to. Launch is when you start learning what your users actually do, and that usually means changes. We can carry on with feature work, monitoring and improvements on a monthly basis, or hand everything over cleanly and be done. Either is fine, and you decide after launch rather than committing up front.",
      },
    ],
  },
];

/**
 * Maps CMS FAQ records into the shape the FAQ page renders. Unused while the
 * page runs on the static content above, kept so switching to live CMS content
 * is a one line change in src/app/faqs/page.tsx.
 */
export function groupCmsFaqs(faqs: Faq[]): FaqGroup[] {
  const published = faqs.filter(
    (faq) => !faq.status || faq.status === "published"
  );

  const groups = new Map<string, { q: string; a: string; order: number }[]>();

  published.forEach((faq) => {
    const category = faq.group || "General";
    const existing = groups.get(category) ?? [];
    existing.push({ q: faq.question, a: faq.answer, order: faq.order ?? 0 });
    groups.set(category, existing);
  });

  return Array.from(groups, ([category, questions]) => ({
    category,
    questions: [...questions]
      .sort((a, b) => a.order - b.order)
      .map(({ q, a }) => ({ q, a })),
  }));
}
