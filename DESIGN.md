# Alpha Brackets — Design Guide

This is the guide for how the site should look, sound, and read. Follow it for any new copy, page, or component.

## Writing rules (always follow these)

- **Keep the language simple.** Write like you are talking to a smart friend, not a boardroom. Short sentences. Plain words.
- **No jargon.** Do not use terms like "leverage," "synergy," "best-in-class," "zero-waste engineering," or similar buzzwords. If a normal person would not say it out loud, do not write it. This does not apply to the tagline itself (see below), which is a short label, not a sentence.
- **No AI feel.** Do not write copy that sounds like it came from a template or a chatbot. No em dashes used as a stylistic tic, no "not just X, but Y" constructions, no forced rule-of-three lists, no overused words like "seamless," "robust," "cutting-edge," or "unlock."
- **No dashes in content.** Do not use em dashes (—) or en dashes (–) as sentence punctuation. Use a period, a comma, or just start a new sentence. Hyphens in real compound words or number ranges (like "4 to 6 weeks" written as "4-6 weeks" when needed) are fine, but prefer spelling it out ("4 to 6 weeks") when it reads better.
- **Be honest about what is real.** Do not write stats, client counts, or testimonials that are not true. If we have zero clients, do not say "200+ companies trust us." If we have not measured something, do not put a number on it.
- **Say what we actually do, plainly.** "We build your MVP with a real AI feature, for a fixed price, in a few weeks" beats "We architect future-ready, AI-native product ecosystems."

## Tagline

The site tagline is **Future-Ready Tech**. It lives in `src/data/site-config.ts` as `SITE_CONFIG.tagline`. Use it as a short label, not folded into a sentence:

- Good: a small uppercase label above a heading, next to the logo, or in the footer.
- Not good: "We build future-ready tech that leverages AI to deliver best-in-class solutions." That is exactly the jargon this guide says to avoid.

Keep it in one consistent place per page, do not repeat it in every section.

**It is not a headline and not a value proposition.** This was asked again during the homepage rewrite and the answer was no, so recording it here rather than relitigating: on its own the tagline says nothing about what we do, who for, or what outcome, which is exactly what a hero has to say. Conversion research on agency sites names phrases of this shape ("technology solutions", "digital experiences") as the thing that makes a homepage generic.

Where it belongs today, and this is the complete list: the footer under the logo, the OG share image, and `openGraph.title` / `twitter.title` in `src/app/layout.tsx`. Those are brand-recognition slots where a tagline's job is tone, not conversion. **It is deliberately absent from the homepage hero**, and `layout.tsx`'s `title.default` leads with what we actually do instead.

## Theme (current site)

This is the single source of truth for color, type, and spacing. The real values live in `src/app/globals.css` (CSS variables) and `tailwind.config.ts` (Tailwind token mapping). Reuse them, do not invent new colors, fonts, or radii for a new component. If you need a value that is not listed here, check those two files before guessing, then add it to this table.

### Color tokens

All colors are defined as CSS variables in `src/app/globals.css` under `:root`, in `H S% L%` format (used as `hsl(var(--token))`), and mapped to Tailwind classes in `tailwind.config.ts`. Use the Tailwind class, never a hardcoded hex or hsl value in a component.

| Token | Value | Tailwind class | Use for |
|---|---|---|---|
| `--background` | `hsl(0 0% 6%)` — near black | `bg-background` | Page background. This is a dark theme site, do not add a light mode. |
| `--foreground` | `hsl(0 0% 100%)` — white | `text-foreground` | Default body and heading text on the background. |
| `--card` | `hsl(0 0% 6%)` | `bg-card` / `text-card-foreground` | Card surfaces. Same as background, cards are distinguished by border, not fill. |
| `--primary` | `#fd5b38` (warm orange, ~`hsl(12 98% 61%)`) | `bg-primary`, `text-primary`, `border-primary` | The one accent color: buttons, links, active/hover states, the `sub-title` label, icons that need emphasis. Do not add a second accent color without updating this file. |
| `--primary-foreground` | `hsl(0 0% 100%)` — white | `text-primary-foreground` | Text/icon color placed on top of a primary-colored background (e.g. button label). |
| `--secondary` | `#caff33` (lime green, ~`hsl(75 100% 60%)`) | `bg-secondary`, `text-secondary` | Rare use only — a small highlight or contrast detail. Check existing pages before reaching for it. Never use as a second primary/CTA color. |
| `--muted` | `hsl(0 0% 12%)` — dark gray | `bg-muted` (often `bg-muted/50`) | Muted/sub background fill, e.g. `sub-bg` class for alternating section backgrounds. |
| `--muted-foreground` | `hsl(0 0% 60%)` — mid gray | `text-muted-foreground` | Supporting/secondary text: descriptions, captions, helper copy. Never the main heading color. |
| `--border` | `hsl(0 0% 12%)` — dark gray | `border-border` (applied globally via `* { @apply border-border }`) | All borders and dividers. Always subtle. Never a hard black or pure white line. |
| `--accent` | `hsl(0 0% 100%)` — white | `bg-accent`/`text-accent` | Reserved for shadcn-style component internals (e.g. hover states in dropdown/select primitives). Not a general design accent, do not confuse with `--primary`. |
| `--destructive` | `hsl(0 62.8% 30.6%)` — dark red | `bg-destructive`, `text-destructive` | Error states and destructive actions only (form validation errors, delete confirmations). |
| `--ring` | same as `--primary` | `ring-ring` | Focus rings on interactive elements. |
| `--input` | `hsl(0 0% 12%)` | `border-input` | Form input borders. |

Do not use `--accent` as a design accent color in page content — `--primary` is the accent color for buttons, links, and highlights.

### Typography

- **Body font:** Plus Jakarta Sans, applied globally on `body` via `font-family: var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif`. Use for all paragraph text, buttons, labels, and most headings by default — do not set a different font on a component unless it is the logo.
- **Logo/display font:** Zain, via the `.logo` class (`font-family: var(--font-zain), "Zain", sans-serif`). Use only for the site logo and the occasional stylized heading word for emphasis. Do not apply broadly — it is a rare accent, not a heading default.
- **Heading scale:** `h1`–`h6` are pre-styled in `globals.css` (`@layer base`), all `font-semibold`/`font-extrabold` with `tracking-tight` and a responsive `lg:` size bump. Use semantic heading tags (`<h1>`, `<h2>`, ...) rather than manually recreating heading styles with raw Tailwind text-size classes.
  - `h1`: `text-4xl lg:text-6xl font-extrabold` — page hero headings only.
  - `h2`: `text-3xl lg:text-5xl font-semibold` — section headings.
  - `h3`–`h6`: descending sizes for subsections and card titles.
- **Body text:** `p` gets `leading-7` by default. `small` gets `text-sm font-medium leading-none`.
- **Emphasis convention:** in a section heading, the last word or phrase is often styled lighter and italic (`font-normal italic` or similar) for visual contrast against the bold rest of the heading. Follow this pattern for new section headings rather than inventing a new emphasis style.

### Spacing and layout

- **Container:** use the `.container` utility (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) or Tailwind's built-in `container` (centered, `2rem` padding, capped at `1400px` at `2xl`). Do not hardcode a different max-width for a new page section.
- **Section vertical spacing:** generous — `py-24` or more, or the `.section-padding` class (`py-20 lg:py-32`). Sections should not feel cramped.
- **Corner radius:** base radius token is `0.5rem` (`--radius`), mapped to `rounded-lg` (`var(--radius)`), `rounded-md` (`-2px`), `rounded-sm` (`-4px`). In practice:
  - Cards: `rounded-2xl` to `rounded-3xl`.
  - Buttons: `rounded-full` (fully pill-shaped).
  - Do not use sharp (`rounded-none`) corners anywhere on this site.
- **Shadows: this design has none.** Depth comes from border color and subtle background shifts, never from a drop shadow. Do not add `shadow-*` or `drop-shadow-*` classes. There is no longer a global override catching them, so unlike before, a shadow class you add now **will** render and will look out of place.
  - This used to be enforced by a `box-shadow: none !important` reset on every element in `globals.css`. That reset is gone and every shadow class was removed from the components instead, so the markup matches what renders. See Section 12 of [docs/project-notes.md](./docs/project-notes.md).
  - Focus rings (`ring-*`, `focus-visible:ring-*`) are the one exception and they stay. They happen to be implemented with `box-shadow` under the hood, but they are keyboard accessibility indicators, not decoration. Do not remove them.
  - `backdrop-blur-*` is fine and is used deliberately on the navbar, the scroll to top button, the toast and the service page sidebar card. It is `backdrop-filter`, unrelated to shadows.
  - Large blurred "glow" divs (`blur-[120px]` and similar) were also removed. They were invisible, because the old reset nulled `filter` too, so the browser was compositing big blurred shapes that painted nothing. Do not reintroduce them.

## Visual design conventions

- **Buttons:** fully rounded (`rounded-full`), primary color background (`bg-primary text-primary-foreground`) for the main action, outline style (`border-border`, transparent background) for the secondary action.
- **Cards:** rounded corners (`rounded-2xl` to `rounded-3xl`), a subtle `border-border`, and a soft hover state (border color shifts toward `primary`, or a slight lift/scale). No shadows at all, see the Shadows rule under Spacing and layout above.
- **Sections:** generous vertical spacing (`py-24` or more, see Spacing above), a small uppercase label above each heading (`sub-title` class: `text-sm uppercase tracking-widest font-semibold text-primary`), then a large heading with the last word or phrase in a lighter, italic weight for contrast (see Emphasis convention above).
- **No tech logo strips.** Do not add a row of framework or vendor logos to a page. We choose the stack per project, so a fixed list is a claim we cannot stand behind, and the same list on every service page ends up advertising Docker on a design page. Say we pick the tools to fit the project instead. This was on all ten service pages and was removed on purpose.
- **Numbers and stats:** only show a stat if it is true and provable. Prefer showing pricing and timelines (which are real and controlled by us) over unprovable claims like retention rate or client count.
- **Cards in a grid:** if cards sit side by side and their text can be different lengths (like pricing cards), do not let the grid stretch them to match height with a paragraph left dangling in empty space. Use a short bullet list or `mt-auto` on a bottom element so the card fills its own height on purpose, not by accident.

## Where the actual business content lives

- Niche, pricing, and strategy: [docs/business-strategy.md](./docs/business-strategy.md)
- Site pages and code changes: [docs/project-notes.md](./docs/project-notes.md)
- SEO keyword research: [docs/seo-keywords.md](./docs/seo-keywords.md)

This file is about how things should be written and look. Those files are about what the business actually offers.
