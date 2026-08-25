# Service page drafts — written, not shipped

Status: **drafts only. Nothing remaining in this file is live, and none of it should ship without the check below.** Two pages that started here have since shipped and been removed; see the note under "The gate these are waiting on".

## Why this file exists

Draft copy for three service pages was written during the services restructure and then deliberately not shipped. It is recorded here because it was otherwise about to be lost: the planning file it was written in lives outside the repo and is not version controlled, so an earlier note claiming it was recoverable "from the plan file's git history" was **wrong**. This file is the only copy.

## The gate these are waiting on

`seo-keywords.md` §2c and §3. These three pages exist to capture commercial search intent, and that is their *only* argument, which makes them exactly the "keyword-targeted work" that document says must not be finalised before running the terms through a real tool.

**Before shipping any of them:** run its keywords through Google Keyword Planner, apply the KD-under-30 ceiling from `seo-keywords.md` §1, and manually check who currently ranks. Ship only the ones that pass. Possibly none at current domain authority, and that is an acceptable outcome rather than a shortfall.

**Two of the original four have since shipped** and their drafts have been removed from this file:

- `crm-development` (`ab012`), ahead of the gate and not on search-volume grounds. See the comment above it in `src/data/services.ts`.
- `erp-and-internal-tools` (`ab013`), shipped at the client's direction. **Unlike CRM, its main justification was search intent**, so if the keyword pass shows those terms are unrankable, that is the page to reconsider first. Its four honesty guards are in the comment above it in `services.ts`.

  **A lesson from that page worth applying to the two drafts below.** Its first version narrowed the scope ("not a full system replacement") in an attempt to stay honest, and instead undersold real capability and answered an objection nobody had raised. **Honesty means not claiming a track record or a product category we do not have. It does not mean shrinking the scope of work we can genuinely do.** When a phased or staged delivery is the right approach, present it as the method and a benefit, never as a limit on what is possible.

## Shared fields

Both remaining: `parent_service: null`, `active: true`, `category: "business-applications"`, `bread_crumbs: []`, `explore_link: ""`, `cta.link: "/contact"`, and **no `stats`** (nothing true and specific to either yet, per the rule at `src/data/services.ts:28-47`). Next free `_id` is `ab014`.

Assets: reuse existing files only. Verified present: `bg1-5.jpg` in `public/images/backgrounds/`, and `graph.png`, `lines.png`, `dots.png`, `dots2.png`, `noise.png`, `pattern.png`, `pattern2.png`, `bg-pattern.png` in `public/images/patterns/`. An earlier draft specified `wave.png`, which does not exist.

---

## 1. `booking-and-scheduling-platforms` — Booking and Scheduling Platforms

Icon `Calendar` (exported, unused by any live service). Highest priority of the three.

- **description:** "Booking software for businesses where slots, staff and resources have real rules. For when a simple calendar link cannot describe your availability."
- **card.intro:** "Booking systems for availability that is not simple."
- **keywords:** custom booking system development · appointment scheduling software development · reservation system development · online booking platform
- **solutions:** Online booking and rescheduling · Staff and resource availability · Deposits and payments · Reminders by email and SMS · Cancellation and no show rules · Calendar sync for your team
- **process** ("Booking" / "Build Process", desc: "How we turn your real availability rules into something customers can book against."): Map Your Availability Rules · Booking Flow Design · Core Booking Engine · Payments And Reminders · Launch And Monitor
- **why_choose_us** "Why Build A Booking Platform With Alpha Brackets": Handles Your Real Availability Rules · Takes Payment Up Front · Fewer No Shows · Your Customers, Your Data
- **cta.caption:** "Build Your Booking Platform"

---

## 2. `pos-and-inventory-systems` — POS and Inventory Systems

Icon: **needs `ShoppingCart` added** to the import and export lists in `src/declarations/icons.tsx`. Nothing suitable is currently exported. `Tag` is the no-new-import fallback.

- **description:** "Till and stock software for businesses whose products, pricing or workflow do not fit an off the shelf system. Built to keep taking sales when the connection drops."
- **card.intro:** "Till and stock software that fits how you actually sell."
- **keywords:** custom POS system development · point of sale software development · inventory management system development · stock control software
- **solutions:** Till and checkout screens · Stock levels across locations · Barcode and label printing · Cash and card reconciliation · Supplier and reorder tracking · Sales reporting by product and staff
- **process** ("POS" / "Build Process", desc: "How we get from a counter walkthrough to a till your staff can use on day one."): Counter Walkthrough · Product And Pricing Model · Till Build · Payments And Hardware · Launch In One Location First
- **why_choose_us** "Why Build A POS System With Alpha Brackets": Fits Your Products And Pricing · Keeps Selling When The Wifi Drops · One Place For Stock · Starts In One Location
- **cta.caption:** "Build Your POS System"

**Check before shipping:** "keeps selling when the wifi drops" is a statement about how we would build it, not a measured result, which keeps it inside the never-invent-data rule. But it is a real commitment, so confirm it is one worth making.

---

---

## Rules any of these must still satisfy on the way in

- `why_choose_us.title` must end with the words "Alpha Brackets". `WhyChooseUs.tsx` styles the last two words as the lighter emphasis, so that is the split point.
- No prices, ranges or "starting at" (`business-strategy.md` §4).
- No em or en dashes as sentence punctuation (`DESIGN.md`).
- No implied track record. There are no clients, so every page describes what we would do, not what we have done.
- `category` is required on `Service`, so a missing one is a compile error rather than a service silently vanishing from `/services`.
