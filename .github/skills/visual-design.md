---
name: visual-design
description: 'Generate design tokens, color palettes, type systems, and layout patterns for a portfolio. Use when: creating a visual language, picking colors and fonts, defining spacing scales, checking WCAG contrast, setting up dark mode, choosing aesthetic direction.'
---

# Skill: visual-design

Emits design tokens and layout decisions for a portfolio.

## Trigger phrases
- "design tokens for my portfolio"
- "give me a color and type system"
- "what's my visual language"

## Inputs
- 1-3 reference site URLs OR 1-3 reference screenshots (multimodal)
- Aesthetic direction (one of: editorial-minimal, neo-brutalist, glass+gradient, terminal-monospace, custom)
- Dark mode preference (yes / no / auto)

## Process
1. Extract palette: bg, surface, text, text-muted, accent, border (light + dark if applicable)
2. Define type system: display stack, body stack, mono stack, modular scale
3. Define spacing scale (one scale, ~7 values)
4. Define radius (1-2 values) and shadow (sm + md, optional)
5. Define layout patterns for hero, projects grid, about, contact
6. Verify WCAG AA contrast for text/bg pairs

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

TYPE: {body stack}, scale: {values}
SPACING: {values}
RADIUS: {value}
LAYOUTS: {brief description per section}
A11Y CHECKS: {contrast ratios}
```

## Acceptance criteria
- All text/bg pairs meet WCAG AA (≥4.5:1 body, ≥3:1 large text)
- Single type scale (no ad-hoc font sizes)
- Single spacing scale (no ad-hoc margins)
- Reference influence is named explicitly ("borrowed spacing rhythm from X")
