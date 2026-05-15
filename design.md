# DESIGN.md — Workshop chapter

The design language for portfolios produced in this workshop. This file is the **workshop curriculum** — read it as part of the lesson. The full token reference and implementation patterns live inside the skills:

- **Token system** (palette, type, spacing) → [`.agents/skills/define-design/reference.md`](./.agents/skills/define-design/reference.md)
- **HTML/CSS implementation** (scaffolds, focus states, performance) → [`.agents/skills/frontend-design/reference.md`](./.agents/skills/frontend-design/reference.md)
- **Anti-slop content rules** (banned phrases) → [`.agents/skills/content-voice/banned-phrases.md`](./.agents/skills/content-voice/banned-phrases.md)

## Design principles

1. **Clarity over cleverness.** A visitor should know who you are within 3 seconds.
2. **One narrative per page.** Hero, proof, contact. Resist feature creep.
3. **Performance is a feature.** Aim for <100KB initial payload, <2s LCP on 4G.
4. **Accessibility is a floor, not a ceiling.** WCAG AA contrast, semantic HTML, visible focus states, reduced-motion respect.

## System at a glance

- **Palette**: warm or cool neutrals + ONE accent. Light + dark variants both meet WCAG AA.
- **Type**: system font stack by default. One modular scale, ratio ~1.25.
- **Spacing**: one scale, used everywhere — `0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8` rem.
- **Radius**: 1-2 values total (4px controls, 8px cards).
- **Shadows**: sparingly. `sm` for cards, `md` for elevated CTAs.

## Layout patterns (one paragraph each)

**Hero.** Name, role, one-line value prop, two CTAs (primary: contact, secondary: work). No background video.

**Projects grid.** 2-3 columns desktop, 1 column mobile. Each card: thumbnail or color block, title, one-line outcome, tags. Click goes to a case study or external link.

**Showcase (cinematic).** Full-viewport hero (90vh+) with gradient backdrop highlighting one flagship project, then horizontally scrollable category rows below. Each row groups projects by capability with a heading and one-line description. Row order tells a narrative: core expertise first, supporting infrastructure second, applied outcomes third. Cards include CSS-only visual motifs (terminal panels, node graphs, data bars) unique to each project, plus a maturity badge (Prod, Active, Research, Proto). Scroll buttons and keyboard arrow nav required for accessibility. This pattern works best when you have 8+ projects to organize into 3-4 meaningful categories. See `examples/netflix-example/` for the reference implementation.

**About.** Two paragraphs maximum. First: what you do. Second: how you got here or what you care about.

**Contact.** One primary channel (email) plus two supporting links (GitHub, LinkedIn). No long contact forms on a portfolio.

## Content rules

- No emoji in body copy.
- No em dashes. Use commas, periods, or parentheses.
- Verbs over adjectives. *"Shipped 3 ML pipelines"* beats *"passionate about machine learning"*.
- No *"I am a..."* openers. Start with what you do or what you've shipped.
- Full banned-phrases list: [`content-voice/banned-phrases.md`](./.agents/skills/content-voice/banned-phrases.md).

## Accessibility floor

- All interactive elements keyboard-reachable
- Visible focus states (never `outline: none` without a replacement)
- Contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI
- `prefers-reduced-motion` respected
- Alt text on every meaningful image; empty `alt=""` on decorative
- Single `<h1>` per page

## Performance budget

| Metric | Target |
|--------|--------|
| Initial HTML+CSS | <50KB |
| Total page weight | <300KB (no hero video) |
| LCP | <2.0s on 4G |
| CLS | <0.1 |

For the full pre-launch checklist, see [`deploy-helper/pre-flight-checklist.md`](./.agents/skills/deploy-helper/pre-flight-checklist.md).
