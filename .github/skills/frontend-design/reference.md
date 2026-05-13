# frontend-design — Reference

HTML scaffolds, CSS architecture decision tree, accessibility implementation, and performance patterns. Loaded only when deep frontend context is needed.

## CSS architecture decision tree

```
Build step?
├── No  → CSS custom properties in a single <style> block
└── Yes
    ├── Component scoping wanted?
    │   ├── No  → Plain CSS or Tailwind utilities
    │   └── Yes → CSS Modules (preferred) or vanilla-extract
    └── Utility-first preferred?
        ├── Yes → Tailwind (use tokens via `theme.extend`)
        └── No  → Custom props + plain CSS
```

**Rule of thumb for workshops**: plain HTML/CSS with custom properties is the fastest path to a working portfolio. Pick a framework only if you'll add a blog or many pages.

## HTML scaffolds

### Hero
```html
<header>
  <h1>{NAME}</h1>
  <p class="lede">{ROLE} — {VALUE_PROP}.</p>
  <p>
    <a class="cta primary" href="mailto:{EMAIL}">Get in touch</a>
    <a class="cta ghost" href="#work">See work</a>
  </p>
</header>
```

### Projects grid
```html
<section id="work" aria-labelledby="work-h">
  <h2 id="work-h">Selected work</h2>
  <ul class="grid">
    <li class="card">
      <h3>{PROJECT_NAME}</h3>
      <p>{OUTCOME_OR_METRIC}.</p>
      <ul class="tags"><li>{TECH}</li></ul>
    </li>
  </ul>
</section>
```

### About
```html
<section id="about" aria-labelledby="about-h">
  <h2 id="about-h">About</h2>
  <p>{WHAT_I_DO}.</p>
  <p>{HOW_I_GOT_HERE_OR_WHAT_I_CARE_ABOUT}.</p>
</section>
```

### Contact
```html
<section id="contact" aria-labelledby="contact-h">
  <h2 id="contact-h">Contact</h2>
  <p>Best way: <a href="mailto:{EMAIL}">{EMAIL}</a></p>
  <p>Also on
    <a href="{GITHUB}">GitHub</a> and
    <a href="{LINKEDIN}">LinkedIn</a>.
  </p>
</section>
```

## Focus state recipes

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}
a:focus-visible, button:focus-visible, .cta:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

Never use `outline: none` without an equivalent replacement (border, ring, etc.).

## Reduced-motion patterns

```css
@media (prefers-reduced-motion: no-preference) {
  .card { transition: transform .2s ease, border-color .2s ease; }
  .card:hover { transform: translateY(-2px); }
}
/* Above is opt-in: if user prefers reduced motion, no transition is set at all. */
```

Alternative (opt-out style):
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance budget

| Metric | Target | How to measure |
|--------|--------|----------------|
| Initial HTML+CSS | <50KB | Network tab, gzipped |
| Total page weight | <300KB | Network tab, all assets |
| LCP | <2.0s on 4G | Lighthouse, throttled |
| CLS | <0.1 | Lighthouse |
| INP | <200ms | Real user metrics (Plausible/Vercel) |

## Font loading strategy
- System fonts by default — zero network cost.
- If using a webfont: preload with `<link rel="preload" as="font" crossorigin>` and `font-display: swap`.
- Subset webfonts to Latin only unless you ship multilingual content.

## Image strategy
- Hero/project images: `<img loading="eager" fetchpriority="high">` for the LCP image, `loading="lazy"` for below-the-fold.
- Use modern formats (AVIF → WebP → fallback).
- Always set `width` and `height` attributes to prevent CLS.

## Tokens via Tailwind (if used)

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: { bg: 'var(--bg)', surface: 'var(--surface)', /* etc */ },
      spacing: { 'xs': '0.25rem', 'sm': '0.5rem', /* etc */ },
    }
  }
}
```

Define tokens in `:root` and reference via Tailwind utilities. Keeps tokens portable across frameworks.
