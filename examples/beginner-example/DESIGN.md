---
name: Jordan Pace Portfolio
description: Editorial-minimal portfolio for a product designer. System font stack, warm neutrals, single blue accent, light and dark mode.
colors:
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#0A0A0A"
  on-surface-variant: "#525252"
  neutral: "#FAFAF9"
  outline: "#E5E5E5"
  error: "#DC2626"
typography:
  headline-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.15
  headline-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.5
  body-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label-sm:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 4px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 3rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 0.5rem 1rem
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 0.5rem 1rem
  list-item:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    padding: 1rem 0
---

## Overview

Editorial-minimal portfolio built as a single HTML file. The design prioritizes reading clarity over visual complexity. A warm neutral page background, a single blue accent, and a system font stack keep the page weight under 50KB with no font loading. Light and dark modes via `prefers-color-scheme`.

## Colors

Warm neutral palette with one functional accent.

- **Primary (#2563EB):** Blue accent for links, CTAs, and focus indicators. Shifts to #60A5FA in dark mode to maintain WCAG AA contrast.
- **Neutral (#FAFAF9):** Warm off-white page background. Inverts to #0A0A0A in dark mode.
- **Surface (#FFFFFF):** Pure white for cards and elevated areas. Inverts to #171717 in dark mode.
- **On-surface-variant (#525252):** Muted text for supporting copy and metadata. Shifts to #A3A3A3 in dark mode.
- **Outline (#E5E5E5):** Borders and list dividers. Shifts to #262626 in dark mode.

## Typography

System font stack eliminates web font loading entirely and removes layout shift from font swap.

- **Headlines:** 2rem at line-height 1.15 for the name. 1.25rem for section headers.
- **Body:** 1rem at line-height 1.5 for comfortable reading within the 680px column.
- **Lede:** 1.125rem in the on-surface-variant color establishes hierarchy without adding weight.
- **Tags:** 0.75rem muted inline spans for technology labels.

## Layout

Single-column layout, max-width 680px, centered. Three sections: hero, work list, contact. Section spacing is 3rem. No grid, no sidebar. Linear reading order matches the information hierarchy.

## Elevation & Depth

Flat. No shadows. Hierarchy comes from typography scale and 1px `outline`-colored borders between project list items. The absence of depth reinforces the editorial tone.

## Shapes

4px radius on buttons only. All other elements use sharp corners. Restraint keeps the interface typographic rather than app-like.

## Components

### Buttons

Two variants: primary (filled blue) and ghost (outlined). Both 4px radius. Focus-visible adds a 2px solid primary outline with 2px offset.

### Project list

Bullet-free list. Items separated by 1px top borders. Each item: bold project name, outcome sentence, inline technology tags.

## Do's and Don'ts

- Do let typography carry the hierarchy; avoid decorative elements
- Do keep project descriptions to one sentence with a measurable outcome
- Don't add a sidebar, sticky nav, or background image
- Don't override the system font stack; zero-weight loading is a feature
