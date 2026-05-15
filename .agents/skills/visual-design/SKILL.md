---
name: visual-design
description: Generate design tokens, color palettes, type systems, spacing scales, and aesthetic direction for a portfolio. Use when picking colors and fonts, defining typography hierarchy, setting up dark mode, choosing aesthetic direction (editorial-minimal, neo-brutalist, glass+gradient, terminal-monospace), or verifying WCAG contrast.
---

# visual-design

Produce a design token system and aesthetic direction for a portfolio. This skill owns the **what** of visual language — palette, type, spacing, radius, shadow. Implementation (HTML/CSS structure) belongs to `frontend-design`.

## When to use
- User asks for design tokens, a color system, or a type scale
- User has reference sites and wants tokens extracted
- User needs to pick ONE aesthetic direction

## Inputs
- 1-3 reference site URLs OR 1-3 reference screenshots
- Aesthetic direction: editorial-minimal, neo-brutalist, glass+gradient, terminal-monospace, or custom
- Dark mode preference: yes / no / auto

## Process
1. **Pick the aesthetic** — exactly one. Mixing produces slop.
2. **Extract palette** — bg, surface, text, text-muted, accent, border (light + dark if applicable). Verify WCAG AA contrast.
3. **Define type system** — display stack, body stack, mono stack, modular scale.
4. **Define spacing scale** — single scale, ~7 values, used everywhere.
5. **Define radius** — 1-2 values total.
6. **Define shadow** — sm + md max. Use sparingly.
7. Name reference influence explicitly: *"borrowed spacing rhythm from {site}"*.

For ready-to-use defaults across all 5 tokens and the contrast check, see `./reference.md`.

## Output format
```
TOKENS:
:root {
  --bg: #...;
  --surface: #...;
  --text: #...;
  --text-muted: #...;
  --accent: #...;
  --border: #...;
}
TYPE: body stack, modular scale values
SPACING: scale values (rem)
RADIUS: control, card values
A11Y: contrast ratios for each text/bg pair
```

## Bundled resources
- `./reference.md` — full default token tables (light + dark), aesthetic direction guide, contrast-check methodology

## Acceptance criteria
- All text/bg pairs meet WCAG AA (≥4.5:1 body, ≥3:1 large text)
- Single type scale, single spacing scale (no ad-hoc values)
- Aesthetic is named and consistent
- Reference influence is explicit (which site, what was borrowed)
