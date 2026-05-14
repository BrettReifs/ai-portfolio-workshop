---
name: Brett Reifers Portfolio
description: Cinematic-showcase portfolio with full-viewport hero, horizontally scrollable category rows, and CSS-only card thumbnails. Glass and gradient aesthetic over a dark foundation.
colors:
  primary: "#6366F1"
  on-primary: "#FFFFFF"
  surface: "#0F0F12"
  on-surface: "#ECECEF"
  on-surface-variant: "#6B6B78"
  neutral: "#08080A"
  surface-container: "#141418"
  outline: "#1C1C22"
  green: "#22C55E"
  blue: "#3B82F6"
  amber: "#F59E0B"
  purple: "#A78BFA"
  rose: "#F472B6"
  cyan: "#22D3EE"
  error: "#EF4444"
typography:
  headline-xl:
    fontFamily: Space Grotesk, system-ui, -apple-system, sans-serif
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -2px
  headline-lg:
    fontFamily: Space Grotesk, system-ui, -apple-system, sans-serif
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.5px
  headline-md:
    fontFamily: Space Grotesk, system-ui, -apple-system, sans-serif
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.3px
  body-md:
    fontFamily: Space Grotesk, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  label-md:
    fontFamily: Space Grotesk, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
  label-mono:
    fontFamily: JetBrains Mono, ui-monospace, monospace
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
  tag:
    fontFamily: JetBrains Mono, ui-monospace, monospace
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 4px
  md: 8px
  lg: 10px
  xl: 12px
  pill: 14px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 64px
  row-gap: 48px
  gutter: 14px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  button-ghost:
    backgroundColor: rgba(255, 255, 255, 0.06)
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 44px
  button-ghost-hover:
    backgroundColor: rgba(255, 255, 255, 0.1)
  card-project:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    width: 280px
  card-project-hover:
    backgroundColor: "{colors.surface-container}"
  scroll-button:
    backgroundColor: rgba(15, 15, 18, 0.9)
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    size: 40px
  badge-prod:
    backgroundColor: rgba(34, 197, 94, 0.12)
    textColor: "{colors.green}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-active:
    backgroundColor: rgba(59, 130, 246, 0.1)
    textColor: "{colors.blue}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-research:
    backgroundColor: rgba(167, 139, 250, 0.1)
    textColor: "{colors.purple}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  badge-proto:
    backgroundColor: rgba(245, 158, 11, 0.1)
    textColor: "{colors.amber}"
    typography: "{typography.tag}"
    rounded: "{rounded.sm}"
    padding: 2px 8px
  nav-floating:
    backgroundColor: rgba(15, 15, 18, 0.82)
    rounded: "{rounded.pill}"
    padding: 8px 10px 8px 20px
---

## Overview

Cinematic showcase portfolio inspired by streaming service UIs. Projects are treated as featured content: a 92vh hero with gradient backdrop fades into horizontally scrollable category rows. Row order is narrative: Agent Frameworks (core expertise) then Developer Tools (infrastructure) then Content and Knowledge (applied outcomes). Dark-only. Works best with 8+ projects across 3-4 capability categories.

## Colors

Dark-only palette. Indigo primary accent, six semantic status colors for project maturity badges.

- **Primary (#6366F1):** Indigo for CTAs, focus outlines, card hover borders, gradient highlights, and the nav brand mark. Applied at 12% opacity for background glows.
- **Neutral (#08080A):** Near-black page foundation. Gradient backdrop layers radial indigo, green, and purple over this base.
- **Surface (#0F0F12):** Slightly lifted dark for the nav, terminal panel, and about blocks.
- **Surface-container (#141418):** Card backgrounds, one tonal step above surface.
- **On-surface (#ECECEF):** Warm near-white for headlines and primary text.
- **On-surface-variant (#6B6B78):** Muted gray for descriptions and secondary text.
- **Outline (#1C1C22):** Subtle borders on cards, nav, and footer.
- **Status colors:** Green (#22C55E) Prod, Blue (#3B82F6) Active, Purple (#A78BFA) Research, Amber (#F59E0B) Proto. Each paired with a 10-12% opacity background variant for badges.

## Typography

Space Grotesk for display and UI, JetBrains Mono for code and metadata. One Google Fonts import.

- **Headlines:** Space Grotesk Extra Bold. Hero h1 uses `clamp(36px, 5.5vw, 64px)` with -2px letter-spacing. A gradient text treatment (primary to purple to rose) highlights the key phrase.
- **Body:** Space Grotesk Regular at 16px, line-height 1.65. Card descriptions clamped to 2 lines.
- **Labels:** Space Grotesk Semi-Bold at 14px for nav links, row titles, and CTAs.
- **Mono:** JetBrains Mono at 14px for the nav brand mark, section eyebrows, and the terminal panel. Tags use 10px mono in bordered pills.

## Layout

Full-bleed cinematic layout. Hero and about constrained to 1320px, gallery rows to 1440px. Hero: two-column grid (text left, terminal panel right). Gallery: horizontally scrollable flex tracks of 280px cards with 14px gaps, 48px between rows. About: two-column grid (text block, stats block). Mobile breakpoints at 1024px and 640px collapse to single column and hide the terminal.

## Elevation & Depth

Layered depth through gradients, backdrop blur, and tonal surfaces.

- **Hero backdrop:** Three stacked radial gradients at 8-18% opacity create atmospheric glow. A 300px bottom vignette fades content into the base background.
- **Nav:** Fixed pill, `backdrop-filter: blur(20px) saturate(1.6)`, rgba(15,15,18,0.82) fill.
- **Terminal panel:** Deep shadow `0 32px 80px rgba(0,0,0,0.6)` creates a floating effect.
- **Cards:** No resting shadow. On hover: scale 1.04x, translateY -6px, shadow `0 24px 60px rgba(0,0,0,0.5)`, indigo border at 30% opacity.
- **Grid texture:** Fixed pseudo-element, 64px grid of 1.2% opacity white lines across the full page.

## Shapes

Graduated rounding by component role.

- **Cards:** 12px radius, content-forward feel.
- **Buttons:** 10px radius.
- **Nav:** 14px pill to float above content.
- **Tags and badges:** 4px radius, technical appearance.
- **Scroll buttons:** Full-round circles.

## Components

### Floating nav

Fixed pill with backdrop blur. Monospace brand mark left, text links center, animated green status dot right. The dot pulses at 2.5s ease-in-out to signal availability.

### Hero

92vh min-height. Gradient backdrop with animated particle dots (drift upward). Two-column grid: eyebrow, gradient-text headline, description, and CTA row left; mock terminal with syntax-highlighted code right. Bottom vignette transitions into gallery rows.

### Category rows

Header (title + description) over a horizontally scrollable flex track. Scroll buttons appear on hover (positioned at row edges). Cards snap to track start. Keyboard ArrowLeft/Right navigation within each row.

### Project cards

280px fixed-width. 160px CSS-only thumbnail unique to each project (terminal output, node graphs, data bars, flow diagrams). Body: title, 2-line description, tech tags, maturity badge. Hover: scale up, deep shadow, indigo border glow.

### Maturity badges

Four variants (Prod, Active, Research, Proto) using status colors at full saturation for text and 10-12% opacity for background. 10px uppercase monospace, 0.5px letter-spacing.

## Do's and Don'ts

- Do maintain row order: core expertise first, infrastructure second, applied outcomes third
- Do use CSS-only thumbnail motifs; no placeholder images
- Don't add more than 4 category rows; the narrative loses force beyond that
- Don't use primary indigo for body text; reserve it for interactive elements and gradient accents
- Don't remove scroll buttons; they are required for keyboard accessibility
