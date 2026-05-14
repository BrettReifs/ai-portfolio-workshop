---
name: Sasha Vora Portfolio
description: Terminal-monospace portfolio for an AI systems engineer. Dark-only, system font stack plus mono, emerald accent, metric-driven project copy.
colors:
  primary: "#10B981"
  on-primary: "#0A0A0A"
  surface: "#111111"
  on-surface: "#F5F5F4"
  on-surface-variant: "#A3A3A3"
  neutral: "#0A0A0A"
  outline: "#262626"
  error: "#EF4444"
typography:
  headline-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  body-lg:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif
    fontSize: 0.95rem
    fontWeight: 400
    lineHeight: 1.55
  label-mono:
    fontFamily: ui-monospace, "Cascadia Code", "JetBrains Mono", monospace
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1em
  tag:
    fontFamily: ui-monospace, "Cascadia Code", "JetBrains Mono", monospace
    fontSize: 0.7rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  sm: 4px
  md: 6px
  lg: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 20px
  xl: 40px
  section: 5rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 0.625rem 1.125rem
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 0.625rem 1.125rem
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 1.5rem
  card-project-hover:
    backgroundColor: "{colors.surface}"
  list-item-post:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    padding: 1rem 0
---

## Overview

Terminal-monospace aesthetic for a backend and infra engineer. Dark-only by design, not preference. The monospace `$ sasha.vora` brand mark and `// section-label` convention signal CLI fluency without decorative scaffolding. The emerald accent reads as a terminal cursor or system health indicator.

## Colors

Dark-only palette. No light mode.

- **Primary (#10B981):** Emerald used for the brand mark, section labels, links, focus outlines, and card hover borders. Chosen for its association with terminal success states.
- **Neutral (#0A0A0A):** Near-black page background.
- **Surface (#111111):** Slightly elevated dark for card backgrounds.
- **On-surface (#F5F5F4):** Warm white for primary text. Avoids pure #FFF to reduce eye strain on dark backgrounds.
- **On-surface-variant (#A3A3A3):** Muted gray for descriptions, timestamps, and secondary text.
- **Outline (#262626):** Subtle dark borders for cards and dividers.

## Typography

Dual-stack: system sans-serif for prose, system monospace for branding and metadata. Zero web font loading.

- **Headlines:** `clamp(2rem, 5vw, 3rem)` with -0.02em letter-spacing for a dense, authoritative feel.
- **Body:** 0.95rem at line-height 1.55 within the 880px column.
- **Labels:** Monospace, 0.75rem, uppercase, 0.1em letter-spacing. Used for section markers (`// selected work`) and the nav brand mark.
- **Tags:** Monospace 0.7rem in bordered pill containers for technology labels.

## Layout

Single-column, max-width 880px. Two-column project card grid via `auto-fit, minmax(260px, 1fr)`. 5rem vertical section spacing. Header uses flexbox space-between for the brand mark and nav links.

## Elevation & Depth

Minimal. Cards sit on `#111` surface against `#0A0A0A` background, a single tonal step. Card border transitions from `#262626` to primary emerald on hover (0.15s). No shadows. State change comes from border-color only.

## Shapes

6px on buttons, 8px on cards, 4px on tags. No pills, no full-round elements. Geometric precision matches the monospace brand.

## Components

### Brand mark

Monospace `$ sasha.vora` in primary emerald. Dollar-sign prefix signals a command prompt. Left-aligned in header, acts as the home anchor.

### Project cards

1px border, 1.5rem padding. Hover raises border to primary emerald. Descriptions muted-color, capped at 2 lines. Bottom row: flex-wrapped monospace tech tags.

### Post list

Timestamp-right list. Each row: title left, monospace date right. Top-border dividers. Hover shifts title to primary emerald.

## Do's and Don'ts

- Do keep project descriptions to one sentence with a measurable outcome
- Do use the monospace label convention (`// section-name`) consistently
- Don't add a light mode; the dark-only constraint is a brand decision
- Don't use the primary emerald for body text; reserve it for interactive elements and labels
