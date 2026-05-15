# Pre-flight Checklist

Run before announcing your portfolio URL. Every item must be green.

## SEO + metadata
- [ ] `<title>` set, under 60 characters, includes name and role
- [ ] `<meta name="description">` set, 120-160 characters
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` present
- [ ] `<html lang="...">` set correctly
- [ ] Canonical URL set if you have multiple deploy targets

## Social sharing (Open Graph + Twitter)
- [ ] `og:title`, `og:description`, `og:url`, `og:type` set
- [ ] `og:image` set, 1200×630, under 1MB
- [ ] `twitter:card="summary_large_image"`
- [ ] Test with [opengraph.xyz](https://www.opengraph.xyz/) or LinkedIn Post Inspector

## Favicon
- [ ] 32×32 PNG favicon
- [ ] 180×180 `apple-touch-icon` for iOS
- [ ] (Optional) SVG favicon for sharp scaling

## Performance (Lighthouse on Mobile, throttled)
- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 90
- [ ] LCP < 2.0s on simulated 4G
- [ ] CLS < 0.1
- [ ] Total page weight < 300KB (no hero video)

## Accessibility
- [ ] Tab through the page — focus is always visible
- [ ] All interactive elements reachable by keyboard
- [ ] Contrast ratio ≥ 4.5:1 for body text
- [ ] Single `<h1>` per page
- [ ] Alt text on every meaningful image; empty `alt=""` on decorative
- [ ] `prefers-reduced-motion` respected
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows) — at minimum the hero

## Mobile
- [ ] Resize browser to 375px width — layout holds
- [ ] Tap targets ≥ 44×44px
- [ ] No horizontal scroll
- [ ] Touch interactions work (no hover-only affordances)

## Functional
- [ ] No console errors or warnings
- [ ] All external links use `rel="noopener"` (and `target="_blank"` where appropriate)
- [ ] Email links use `mailto:`
- [ ] Forms (if any) submit and validate
- [ ] 404 page works

## Content
- [ ] One person other than you read it without confusion
- [ ] No banned phrases (see content-voice/banned-phrases.md)
- [ ] No emoji in body copy
- [ ] No em dashes
- [ ] Spell check passed

## Redeploy
- [ ] You know the command to redeploy (push to main, or `vercel --prod`)
- [ ] You know how to roll back (revert commit, or `vercel rollback` on the dashboard)

## Optional but recommended
- [ ] `robots.txt` allows indexing
- [ ] `sitemap.xml` for multi-page sites
- [ ] Privacy-respecting analytics (Plausible, Umami, Vercel Analytics)
- [ ] Custom domain configured
