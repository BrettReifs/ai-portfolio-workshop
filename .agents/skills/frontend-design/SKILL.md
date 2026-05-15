---
name: frontend-design
description: Translate design tokens into shippable HTML and CSS for a portfolio. Use when writing semantic markup, choosing CSS architecture (custom properties vs Tailwind vs CSS-in-JS), building hero/projects-grid/about/contact sections, adding focus states and reduced-motion support, or hitting performance budgets.
---

# frontend-design

Turn a token system (from `define-design`) into shippable HTML/CSS. This skill owns the **how** — markup structure, CSS architecture, accessibility implementation, performance.

## When to use
- Tokens are decided and the user needs actual HTML/CSS
- User asks for hero/grid/about/contact scaffolds
- User needs focus states, motion patterns, or performance fixes
- User wants to pick a CSS architecture (custom props, Tailwind, CSS-in-JS)

## Inputs
- Design tokens (output of `define-design`)
- Section list (output of `portfolio-architect`)
- Framework choice (plain HTML/CSS, Astro, Next.js, SvelteKit)
- Performance target (default: ≤300KB total, <2s LCP on 4G)

## Process
1. **Pick CSS architecture** (see decision tree in `./reference.md`):
   - Plain HTML/no build → CSS custom properties
   - Framework + utility-first → Tailwind
   - Framework + component scoping → CSS Modules or CSS-in-JS
2. **Write semantic HTML** — one `<h1>`, landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), descriptive `aria-label`s where needed.
3. **Layer in tokens** — apply tokens via custom properties or utility classes. Never hard-code values.
4. **Add focus states** — visible, high-contrast, never `outline: none` without a replacement.
5. **Respect motion preferences** — wrap animations in `@media (prefers-reduced-motion: no-preference)`.
6. **Verify performance** — bundle size, LCP element, font loading strategy.

For scaffolds, decision tree, focus recipes, motion patterns, and the performance budget table, see `./reference.md`.

## Output format
- Working HTML file (or framework component set)
- A short CSS architecture note (which approach and why)
- A performance budget check (current vs target)
- Accessibility check (keyboard, contrast, semantic landmarks)

## Bundled resources
- `./reference.md` — HTML scaffolds for hero/grid/about/contact, CSS architecture decision tree, focus-state recipes, reduced-motion patterns, performance budget table

## Acceptance criteria
- Valid semantic HTML (single `<h1>`, landmarks present)
- All interactive elements keyboard-reachable with visible focus states
- `prefers-reduced-motion` respected
- Performance budget met (or gap is named and justified)
- No hard-coded color/spacing values (everything via tokens)
- Lighthouse ≥90 on Performance, Accessibility, Best Practices, SEO
