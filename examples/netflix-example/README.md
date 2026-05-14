# Netflix-style showcase example

A personal portfolio using the "cinematic showcase" layout pattern: a full-viewport featured hero that fades into horizontally scrollable category rows, inspired by streaming service UIs.

## Key patterns

- **Full-bleed hero** (92vh) with gradient backdrop, particle effects, animated terminal, and CTA buttons
- **Category rows** with horizontal scroll, visible scroll buttons, and keyboard arrow navigation
- **CSS-only card thumbnails** using project-specific visual motifs (terminal output, node graphs, data bars, shield icons)
- **Maturity badges** on each card (Prod, Active, Research, Proto) for at-a-glance project status
- **Narrative row order**: Agent Frameworks (core) > Developer Tools (infrastructure) > Content and Knowledge (applied outcomes)

## Accessibility

- Semantic HTML with `role="list"` / `role="listitem"` on card tracks
- Keyboard-accessible cards (`tabindex="0"`, ArrowLeft/Right within rows)
- Visible focus states on all interactive elements
- `prefers-reduced-motion` kills all animations
- WCAG AA contrast on all text

## Run locally

```bash
npx serve .
# or
python -m http.server
```

Open `index.html` directly in a browser, or use the commands above.

## Source

Self-contained HTML/CSS/JS. One Google Fonts import (Space Grotesk, JetBrains Mono). No frameworks, no build step. Under 45KB total.
