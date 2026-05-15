# define-design — Reference

Full token tables, aesthetic direction guide, and contrast-check methodology. Loaded by the agent only when deep design system context is needed.

## Default tokens

### Color — light mode
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAFAF9` | Page background |
| `--surface` | `#FFFFFF` | Cards, sections |
| `--text` | `#0A0A0A` | Primary text |
| `--text-muted` | `#525252` | Secondary text |
| `--accent` | `#2563EB` | Links, CTAs |
| `--border` | `#E5E5E5` | Dividers |

### Color — dark mode
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#0A0A0A` | Page background |
| `--surface` | `#171717` | Cards, sections |
| `--text` | `#FAFAF9` | Primary text |
| `--text-muted` | `#A3A3A3` | Secondary text |
| `--accent` | `#60A5FA` | Links, CTAs |
| `--border` | `#262626` | Dividers |

### Typography
- **Display**: `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif` (or `Inter` if loading a webfont)
- **Body**: same stack as display
- **Mono**: `ui-monospace, "Cascadia Code", "JetBrains Mono", monospace`
- **Scale (rem)**: `0.875, 1, 1.125, 1.25, 1.5, 2, 3` (modular ratio ~1.25)
- **Line height**: `1.5` body, `1.15` display, `1.7` long-form prose

### Spacing scale (rem)
`0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8`

### Radius
- `4px` controls (buttons, inputs)
- `8px` cards, sections
- `9999px` pills (tags, status chips)

### Shadows (use sparingly)
- `sm`: `0 1px 2px rgba(0,0,0,0.05)`
- `md`: `0 4px 12px rgba(0,0,0,0.08)`

## Aesthetic direction guide

| Aesthetic | Palette | Type | Best for |
|-----------|---------|------|----------|
| Editorial-minimal | Warm neutrals + 1 accent | Serif display + sans body | Writers, researchers, designers |
| Neo-brutalist | High-contrast B&W + 1 saturated accent | Sans, heavy weights | Indie devs, makers |
| Glass + gradient | Translucent surfaces, gradient accent | Modern sans | Frontend engineers, designers |
| Terminal-monospace | Dark-only, green/cyan accent | Mono throughout | Backend, infra, security |
| Cinematic-showcase | Dark, multi-accent status colors, gradient hero | Display sans + mono | Engineers with 8+ projects |

## Contrast check methodology

Use the WCAG relative-luminance formula. Test every text/bg pair you ship.

Quick reference:
- Body text (≤18px or ≤14px bold): **≥4.5:1**
- Large text (≥24px or ≥18.66px bold): **≥3:1**
- UI components and graphical objects: **≥3:1**

Tools:
- WebAIM Contrast Checker (webaim.org/resources/contrastchecker)
- `npx pa11y https://your-site.com`
- Chrome DevTools → Accessibility panel → contrast lens

## Multimodal extraction prompt

```
I'm sharing reference material (screenshots, site URLs, or HTML/CSS).
Extract: dominant palette (hex values), type stacks, spacing rhythm,
radius values, and recurring component patterns.
Synthesize a DESIGN.md token system for aesthetic: {AESTHETIC}, mode: {LIGHT/DARK}.
Output valid YAML frontmatter (name, colors, typography, rounded, spacing, components)
followed by markdown sections: Overview, Colors, Typography, Layout,
Elevation & Depth, Shapes, Components, Do's and Don'ts.
Verify WCAG AA contrast on all component textColor/backgroundColor pairs.
Name each reference influence explicitly.
```

## DESIGN.md format spec

Two layers: YAML frontmatter (machine-readable tokens) between `---` fences, then markdown `##` sections (human-readable rationale).

### Token schema

```yaml
version: alpha          # optional
name: <string>
description: <string>   # optional
colors:
  <token-name>: "#hex"  # sRGB only
typography:
  <level-name>:
    fontFamily: <stack>
    fontSize: <px|em|rem>
    fontWeight: <number>
    lineHeight: <number|dimension>
    letterSpacing: <em|px>  # optional
rounded:
  <scale>: <px|rem>
spacing:
  <scale>: <px|rem|number>
components:
  <name>:
    backgroundColor: "<value>" | "{colors.token}"
    textColor: "{colors.token}"
    typography: "{typography.level}"
    rounded: "{rounded.scale}"
    padding: <dimension>
    height: <dimension>  # optional
    width: <dimension>   # optional
  <name>-hover:
    backgroundColor: "<value>"
```

### Recommended token names

- Colors: `primary`, `on-primary`, `secondary`, `tertiary`, `neutral`, `surface`, `on-surface`, `on-surface-variant`, `outline`, `error`
- Typography: `headline-xl`, `headline-lg`, `headline-md`, `body-lg`, `body-md`, `body-sm`, `label-lg`, `label-md`, `label-sm`
- Rounded: `sm`, `md`, `lg`, `xl`, `full`
- Spacing: `xs`, `sm`, `md`, `lg`, `xl`

### Section order (canonical)

1. Overview (or "Brand & Style")
2. Colors
3. Typography
4. Layout (or "Layout & Spacing")
5. Elevation & Depth
6. Shapes
7. Components
8. Do's and Don'ts

### CLI

```bash
npx @google/design.md lint DESIGN.md          # validate structure + WCAG
npx @google/design.md diff DESIGN.md v2.md    # detect regressions
npx @google/design.md export --format css-tailwind DESIGN.md
```

### Example templates

- `examples/beginner-example/DESIGN.md` — editorial-minimal (system font, light+dark)
- `examples/advanced-example/DESIGN.md` — terminal-monospace (dark-only, mono branding)
- `examples/netflix-example/DESIGN.md` — cinematic-showcase (gradient hero, badge system)
