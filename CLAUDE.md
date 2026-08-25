# Claude Code Instructions

See [AGENTS.md](./AGENTS.md) for the full project guide (tech stack, structure, known gotchas). This file only adds Claude-specific rules on top of that.

## Content writing rules (always apply)

Before writing any copy that a site visitor will read (headings, buttons, descriptions, anything user-facing), follow [DESIGN.md](./DESIGN.md):

- Keep the language simple. No jargon, no buzzwords.
- Do not use em dashes or en dashes as sentence punctuation.
- Do not write copy that sounds like it came from a template or a chatbot.
- Never write a stat, client count, or claim that is not true. If there is no data yet, say nothing rather than making something up.

This applies to every page, every component, and every commit message or PR description written for this project.

## Business context

Do not make strategy, pricing, or niche decisions without reading [docs/business-strategy.md](./docs/business-strategy.md) first. If a task touches pricing, services, or positioning, update that doc (or [docs/project-notes.md](./docs/project-notes.md) for code changes) to match, rather than leaving the docs stale.
