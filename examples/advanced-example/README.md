# Advanced Example

Single-file portfolio with custom sections (writing, dark-only design, monospace branding) generated from `portfolio-prompt.md` and refined across 3 platforms.

## What's here
- `index.html` — the entire site

## Run locally
```bash
npx serve .
```

## What makes this "advanced"
1. **Dark-only aesthetic** — opinionated, no light mode toggle
2. **Custom monospace branding** — `$ sasha.vora` mark
3. **Writing section** with date stamps
4. **Tagged tech badges** per project
5. **Cost/outcome metrics** in every project description
6. **Reduced-motion respect** at the CSS level

## Generation flow
1. Lovable — initial scaffold (3 min)
2. Claude — tightened the copy and removed slop (4 min)
3. Gemini Canvas — refined the dark palette using a reference screenshot (3 min)

Total: ~10 min.

## Extension ideas
- Add a real RSS feed
- Wire in Astro for the blog
- Add Plausible analytics
