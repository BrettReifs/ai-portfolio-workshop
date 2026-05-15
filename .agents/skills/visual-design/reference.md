# visual-design — Reference

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

## Multimodal extraction prompt (Gemini)

```
I'm sharing 2 reference screenshots. From image 1, extract the dominant
palette (5-6 hex values) and note the spacing rhythm. From image 2,
extract the type hierarchy and line-height ratios. Synthesize a token
set using my preferences: {LIGHT/DARK}, {AESTHETIC}.
Output the tokens as CSS custom properties and verify WCAG AA contrast.
```
