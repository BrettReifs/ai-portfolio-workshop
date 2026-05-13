# design.md — Visual + Content Design Guide

The design language for portfolios produced in this workshop. Use these tokens as defaults; override only with intent.

## Design principles
1. **Clarity over cleverness.** A visitor should know who you are within 3 seconds.
2. **One narrative per page.** Hero, proof, contact. Resist feature creep.
3. **Performance is a feature.** Aim for <100KB initial payload, <2s LCP on 4G.
4. **Accessibility is a floor, not a ceiling.** WCAG AA contrast, semantic HTML, visible focus states, reduced-motion respect.

## Atomic tokens (defaults)

### Color (light mode)
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAFAF9` | Page background |
| `--surface` | `#FFFFFF` | Cards, sections |
| `--text` | `#0A0A0A` | Primary text |
| `--text-muted` | `#525252` | Secondary text |
| `--accent` | `#2563EB` | Links, CTAs |
| `--border` | `#E5E5E5` | Dividers |

### Color (dark mode)
| Token | Value |
|-------|-------|
| `--bg` | `#0A0A0A` |
| `--surface` | `#171717` |
| `--text` | `#FAFAF9` |
| `--text-muted` | `#A3A3A3` |
| `--accent` | `#60A5FA` |
| `--border` | `#262626` |

### Typography
- **Display**: system-ui, -apple-system, "Segoe UI", sans-serif (or `Inter` if loading webfont)
- **Body**: same stack
- **Mono**: ui-monospace, "Cascadia Code", "JetBrains Mono", monospace
- Scale (rem): `0.875, 1, 1.125, 1.25, 1.5, 2, 3` (modular ratio ~1.25)
- Line height: `1.5` body, `1.15` display

### Spacing scale (rem)
`0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6, 8`

### Radius
`4px` controls, `8px` cards, `9999px` pills

### Shadows (use sparingly)
- `sm`: `0 1px 2px rgba(0,0,0,0.05)`
- `md`: `0 4px 12px rgba(0,0,0,0.08)`

## Layout patterns

### Hero
Name + role + 1-line value prop + 2 CTAs (primary: contact, secondary: work). No background video.

### Projects grid
2 or 3 columns desktop, 1 column mobile. Each card: thumbnail (or color block), title, 1-line outcome, tags. Click → case study or external link.

### About
2 paragraphs max. First: what you do. Second: how you got here or what you care about.

### Contact
One primary channel (email) + 2 supporting (GitHub, LinkedIn). No long contact forms for a portfolio.

## Content rules (anti-slop)
- No emoji in body copy.
- No em dashes — use commas, periods, or parentheses.
- Banned phrases: *delve, showcase, robust, seamless, cutting-edge, innovative, game-changer, dive into, it's worth noting*.
- Verbs over adjectives. "Shipped 3 ML pipelines" beats "passionate about machine learning."
- No "I am a..." opener. Start with what you do or what you've shipped.

## Accessibility floor
- All interactive elements reachable by keyboard.
- Visible focus states (don't `outline: none` without a replacement).
- Contrast ratio ≥ 4.5:1 for body text, 3:1 for large text.
- `prefers-reduced-motion`: disable non-essential animation.
- Alt text on every meaningful image; empty `alt=""` on decorative.
- Single `<h1>` per page.

## Performance budget
| Metric | Target |
|--------|--------|
| Initial HTML+CSS | <50KB |
| Total page weight | <300KB (no hero video) |
| LCP | <2.0s on 4G |
| CLS | <0.1 |

## Deployment-ready checklist
- [ ] `<title>` and `<meta name="description">` set
- [ ] Open Graph image (1200×630) for social sharing
- [ ] Favicon (32×32 + 180×180 apple-touch)
- [ ] `robots.txt` and `sitemap.xml` if multi-page
- [ ] Lighthouse score ≥ 90 on Performance, Accessibility, Best Practices, SEO
