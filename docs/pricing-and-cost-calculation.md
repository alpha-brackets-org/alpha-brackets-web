# Alpha Brackets — Pricing and Cost Calculation

**Internal document. Do not publish this on the site or share the numbers below with a client.** Pricing is quoted verbally on the discovery call, not shown on the site. See [project-notes.md](./project-notes.md) for why.

This document explains what each package includes and how we arrive at each price. Use it to answer "why does this cost what it costs" on a call, and to size a real quote for a specific client instead of always quoting the floor number.

---

## 1. The packages (what a client is actually buying)

| Package            | Timeline         | What is included                                                                                                                                  |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **MVP Sprint**     | 4 to 6 weeks     | One core user journey, login and user accounts, a basic dashboard. No AI feature.                                                                 |
| **AI Native MVP**  | 6 to 10 weeks    | Everything in the MVP Sprint, plus one real AI feature (chatbot, RAG search, or automation), billing, and support for multiple customer accounts. |
| **Scale Retainer** | Monthly, ongoing | Feature sprints, monitoring, and continued AI work after launch.                                                                                  |

These match the offer model in [business-strategy.md](./business-strategy.md) Section 3.

---

## 2. How we calculate a price

We do not price by guessing a number that sounds right. We price using this formula:

**Price = (Estimated hours × blended cost per hour) + overhead + margin**

### The blended cost per hour

This is an internal planning assumption, not a published market rate. Research into public Pakistan developer rates in [business-strategy.md](./business-strategy.md) found the claims online were mostly unverified or self-interested (a single outsourcing agency's own blog, for example). So instead of relying on someone else's number, we use our own internal assumption:

**Blended cost: $18 per hour** of senior engineering time, delivered from Pakistan.

This is a planning number for costing projects, not something we tell a client. Revisit this number once we have real payroll and contractor cost data from actual delivery.

### Estimated hours per package

These are our own estimates of real engineering time (design, build, test, and revisions), not a guess pulled from a competitor's blog.

- **MVP Sprint:** about 125 hours over 4 to 6 weeks. One core user journey, login, and a dashboard is a contained, well understood scope.
- **AI Native MVP:** about 275 hours over 6 to 10 weeks. This is everything in the MVP Sprint plus the extra work an AI feature actually takes: connecting to an LLM, testing prompts, handling errors when the AI gets something wrong, and adding billing and multi tenant support.
- **Scale Retainer:** billed by a monthly hour commitment the client chooses, typically 40 to 80 hours a month.

### Overhead and margin

On top of raw engineering hours, every project also carries:

- **Project management and QA time**, not just coding time.
- **Business overhead**: sales time, admin, tools, and the time spent on a proposal that does not close.
- **A margin**, so the business is actually profitable and not just covering cost.

We add roughly 15 to 20 percent on top of the raw hours × rate figure to cover this.

---

## 3. The actual math behind each price

### MVP Sprint

- 125 hours × $18/hour = **$2,250** in raw engineering cost
- Plus overhead and a small margin brings this to roughly **$2,500 to $2,700**
- **We price this at $2,500.** This is close to raw cost, not a comfortable margin. This is intentional. It is a launch phase price meant to win our first real projects and case studies, not a long term rate. See the note on revisiting pricing below.

### AI Native MVP

- 275 hours × $18/hour = **$4,950** in raw engineering cost
- Add roughly 10 to 15 percent for AI specific costs (API usage during development and testing, extra time spent getting the AI feature to behave correctly)
- That brings raw cost to roughly **$5,500 to $5,700**
- Add overhead and margin on top of that, and the real cost to deliver is closer to **$6,300 to $6,800**
- **We price this at $7,000.** This carries a thin real margin, for the same launch phase reason as the MVP Sprint.

### Scale Retainer

- A 40 hour a month commitment: 40 × $18 = $720 in raw cost. Priced at **$2,500 a month**, which covers overhead, project management, and a healthier margin since this is predictable recurring work.
- An 80 hour a month commitment: 80 × $18 = $1,440 in raw cost. Priced at **$6,000 a month**, covering a fuller service (feature sprints, monitoring, and ongoing AI work) with a stronger margin than the fixed price packages.
- The retainer is the one tier where margin is healthy on purpose. Fixed price projects are priced to win the work. The retainer is priced to actually make money once we are already working with a client.

---

## 4. Why the MVP Sprint and AI Native MVP prices are so close to cost

This is a deliberate choice, not an accident. [business-strategy.md](./business-strategy.md) Section 4 explains the reasoning: a brand new agency with no public case studies asking for a healthy margin up front is asking for trust it has not earned yet. These two prices are set close to real delivery cost on purpose, to win the first two or three real projects and get proof we can point to.

**Revisit this once the first two or three projects are done.** At that point, raise both prices back toward a healthier margin (business-strategy.md's original anchors were $3,500 for the MVP Sprint and $10,000 for the AI Native MVP). Do not leave pricing at these thin margin numbers indefinitely.

---

## 5. How to actually quote a real client on the discovery call

This document gives you the floor price and the reasoning behind it, not a rule that every client pays exactly $2,500 or $7,000.

1. **Listen to their actual scope on the call.** If what they want is smaller than the standard package (for example, no login system needed), you can price below the floor, but check with the team first since these floor prices are already thin.
2. **If their scope is bigger than the standard package** (more than one core user journey, a more complex AI feature, more integrations), the price goes up. Re-run the same math: estimate the extra hours, multiply by $18, add the same 15 to 20 percent, and quote that on top of the base package price.
3. **Never share the $18 an hour number or the hour estimates with a client.** Quote a single fixed price. The reasoning in this document is for our own use, to keep quotes consistent and defensible, not something to show a client.
4. **If a client pushes back on price**, the fixed price and weekly demo model is the answer, not a lower number. Reference [business-strategy.md](./business-strategy.md)'s arbitrage math: even our full launch phase prices are a small fraction of what a US based engineer costs for the same number of weeks.
