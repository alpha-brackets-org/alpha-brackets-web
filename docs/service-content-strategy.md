# Single Services Content Strategy & Progress Tracker

> **Status: complete. This tracker is finished, and the table below is out of date.**
>
> All 10 service pages were rewritten in one pass, not one at a time. Every
> service now has its own `solutions` list, the copy went through a full pass
> against DESIGN.md, and the global tech-stack logo strip was removed from the
> service pages entirely. Nothing in the "Pending" column below is still
> pending. See the "Service Pages Pass" section in
> [project-notes.md](./project-notes.md) for what actually shipped.
>
> Kept for the record of *why* the positioning decisions were made. Do not use
> the progress table as a to-do list.

This document tracks exactly what has been decided, the current open questions, the implementation plan, and the remaining copy updates for all individual service pages.

---

## 1. Decisions Logged (What is Decided)

*   **Positioning Shift:** Transition all copy from "service provider/vendor" (using passive, delivery-based jargon like "end-to-end", "high-velocity", "scale-proof") to "growth-focused product partner" (active, value-driven outcomes like "revenue-ready", "scale without rewrites").
*   **Discovery Funnel:** The pricing packages (MVP Sprint / AI Native MVP) are kept on the Homepage and `/services` page, and explicitly **omitted** from individual service pages to keep the focus on a single, clear "Book Call" call-to-action.
*   **Visual Trust Accents:** Removed empty `FeaturedCaseStudies` from individual services since there is no live case study data.
*   **Sidebar Box Copy:** Simplified the complementary sidebar call-to-action to: *"Book a free 30 minute call. We will talk through your idea and tell you honestly what it takes to build it."*

---

## 2. Progress Tracker & Status

| Service | Status | Core Changes |
|---|---|---|
| **SaaS Platform Development** | **Completed** | Simplified description & switched technical solutions to broader categories (e.g. *Scalable Cloud Architecture*, *Revenue & Billing Systems*). |
| **AI & Intelligent Integrations** | **Completed** | Audited; verified that the description ("API, RAG, or custom model based on your needs, not hype") fits partner positioning. |
| **Web Application Development** | **Completed** | Description updated in Round 2. Solutions list updated to founder-friendly terms. |
| **UI/UX Design** | **Pending** | Focus on user conversion/retention outcomes rather than just aesthetic deliverables. |
| **Business Automation** | **Pending** | "60% manual time reduction" unverified stat removed. Copy needs partner framing. |
| **Mobile App Development** | **Pending** | Description updated in Round 2. Solutions and Why Choose Us need refinement. |
| **DevOps & Cloud Infrastructure** | **Pending** | "30-40% savings" unverified stat removed. Needs copy shift to active partner voice. |
| **SEO & Performance Optimisation** | **Pending** | Needs audit to ensure outcomes focus on organic traffic and user retention rather than just page speeds. |
| **Marketing & Campaign Tooling** | **Pending** | Needs audit to align with partner-led growth strategies. |
| **Custom Analytics Platforms** | **Pending** | Needs audit to align with business metrics and product-led growth decisions. |

---

## 3. Next Steps & Questions

### Web Application Development (Current Target)
*   **Description (Updated):** *"We design and build production-ready web applications from scratch, focusing on clean architecture and scalable code bases so you can grow without rewrites."*
*   **Current Solutions:** `Custom SaaS Frontends`, `Interactive Dashboards`, `Mobile-Friendly Web Apps`, `Third-Party Integrations`, `Client & Partner Portals`, `Modern E-commerce`

### Remaining Service Page Audits
 We will go step-by-step through the remaining 7 service pages (UI/UX, Business Automation, Mobile, DevOps, SEO, Marketing, Analytics) using the same process to clarify the copywriting guidelines for each.

---

## 4. Implementation Steps (How we execute)
1. Confirm the copy and solutions list changes for the active service page.
2. Edit `src/data/services.ts` directly with the updated text.
3. Update this document and the task list (`task.md`) to mark the service as completed.
4. Verify local layout rendering and typescript validity.
