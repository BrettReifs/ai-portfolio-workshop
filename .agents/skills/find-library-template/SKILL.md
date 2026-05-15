---
name: find-library-template
description: Finds and fetches the right templates, component-library snippets, or inspiration references for rapid UI/UX prototyping from the 2025–2026 landscape (shadcn/ui, MagicUI, Aceternity, Tailwind Plus, Once UI, Untitled UI, Framer, Webflow, Mobbin, Awwwards, and more), then locks the user's design decisions into DESIGN.md. Use when the user asks to build a landing page, pricing section, dashboard, portfolio, mobile app screen, or marketing site, wants design inspiration before coding, says "make this look like <site>", or needs to record UI library preferences for a project.
tools: [read, search, edit, create, web_fetch, bash]
argument-hint: "<what you're building> [--stack react|next|vue|rn] [--vibe ai|b2b|portfolio|admin|docs|minimal]"
---

# find-library-template

Retrieve → React → Record. This skill is a router over the 2025–2026 UI/UX landscape: it picks the right library or template for the brief, fetches representative code or screenshots into a sandbox, lets the user react, then locks the choices into `DESIGN.md` as the project's durable design source of truth.

**This skill does NOT install into production.** It writes only to `prototypes/<slug>/` and `DESIGN.md`. It never touches `/components/`, `package.json`, or dependencies. Promotion from prototype to production is a separate downstream step.

---

## When to use this skill

Trigger phrases:
- "build me a landing page / pricing section / dashboard / portfolio / docs site / mobile screen"
- "I need a hero with <effect>" / "give me a bento grid" / "marquee of logos"
- "make this look like Linear / Plain / Vercel / Cal.com / Mintlify"
- "find a Framer / Webflow template for..."
- "what component library should I use for..."
- "show me design inspiration for..."
- "lock in our design choices"

When NOT to use:
- User wants design **methodology** (use `artisan-ux`)
- User wants AI-generated images (use `visual-asset-generator`)
- User wants a throwaway local UI sketch (use `prototype`)
- User wants to install shadcn components into the production codebase (delegate to the project-level `shadcn-ui` skill, if present)

---

## Workflow

### Phase 1 — Classify (≤30s)

Ask only what is missing. Capture answers in memory:
1. **What:** landing page · pricing · dashboard · portfolio · docs · mobile screen · specific component
2. **Vibe:** AI-startup · B2B SaaS · portfolio · admin · docs · minimal/editorial · maximalist/creative
3. **Stack:** React · Next.js · Vue · Svelte · React Native · Astro · HTML
4. **References (optional but powerful):** sites or apps the user already admires

Route via this decision tree (sourced from the 2025–2026 design landscape research):

```
Need inspiration only?
├─ Award-tier creative web   → Awwwards · Godly · Phantom · Basement Studio
├─ Minimal / typographic     → Minimal Gallery · siteinspire · httpster
├─ SaaS landing pages        → SaaS Landing Page · Lapa Ninja · Land-book
├─ Mobile UX flows           → Mobbin · Page Flows · ScreensDesign · CollectUI
├─ Component patterns        → Refero · Mobbin · CollectUI
└─ One-page sites            → OnePageLove

Need to ship something?
├─ No-code visual            → Framer Templates · Webflow Templates · Figma Community
├─ Premium code (paid)       → Tailwind Plus · Cruip · Once UI · Untitled UI PRO
├─ Free OSS primitives       → shadcn/ui · Origin UI · HeroUI · Mantine · Chakra v3
├─ AI-startup aesthetic      → MagicUI · Aceternity UI (free tiers)
├─ Boutique / portfolio      → Once UI Magic Portfolio · Untitled UI · Framer creators
├─ Enterprise                → MUI X · IBM Carbon · GitHub Primer · Adobe Spectrum · Vercel Geist
└─ Mobile / cross-platform   → Tamagui · gluestack · React Native Reusables · Instamobile
```

### Phase 2 — Starter-stack prescription

Use this matrix as the default answer. Override only with a stated reason.

| Building | Inspiration | Components | Template candidate |
|---|---|---|---|
| AI-startup landing page | MagicUI demos · Awwwards SaaS Honors | MagicUI + shadcn/ui | Aceternity Pro · MagicUI Pro |
| B2B SaaS marketing site | SaaS Landing Page · Linear | shadcn/ui + Tailwind Plus blocks | Tailwind Plus (Salient / Radiant) · Cruip Open PRO |
| Internal admin / dashboard | Mobbin web flows · Linear | shadcn/ui + Mantine | Tailwind Plus Studio · AdminLTE Apex · Cruip Mosaic |
| Portfolio / agency | Godly · Awwwards Portfolio Honors | Once UI + Framer Motion | Once UI Magic Portfolio · Untitled UI · Framer template |
| Mobile app | Mobbin · ScreensDesign · CollectUI | Tamagui · gluestack · RN Reusables | Instamobile |
| Docs site | Mintlify · Vercel docs | shadcn/ui | Tailwind Plus Protocol · Once UI Magic Docs |
| Editorial / minimal | Minimal Gallery · siteinspire | shadcn (Sera style) + Origin UI | Cruip Stellar · HTML5 UP |

### Phase 3 — Fetch into sandbox

Sandbox location, picked in this order:
1. Git repo root → `prototypes/<slug>/`
2. Else session-state → `~/.copilot/session-state/<session>/files/prototypes/<slug>/`

Where `<slug>` is a short kebab-case label for what's being prototyped (`landing-hero`, `pricing-table`, `dashboard-sidebar`).

Per-library fetch rules:

| Library family | License | Action |
|---|---|---|
| **shadcn/ui** | MIT | `web_fetch` `https://ui.shadcn.com/r/styles/default/<name>.json` for component source. Also fetch the docs page for usage. |
| **shadcn blocks** | MIT | `web_fetch` `https://ui.shadcn.com/blocks` listing, then individual block JSON from the registry. |
| **Origin UI** | MIT (Cruip team) | `web_fetch` `https://originui.com/r/<name>.json` (shadcn-compatible registry). |
| **MagicUI (free tier)** | MIT | `web_fetch` `https://magicui.design/docs/components/<name>` and extract the TSX code block. 150+ components: BorderBeam, AnimatedBeam, BentoGrid, MeteorShower, Marquee, Globe, Particles, Sparkles, NumberTicker, Kinetic Text, MagicCard. |
| **Aceternity UI (free tier)** | MIT | `web_fetch` `https://ui.aceternity.com/components/<name>` and extract TSX. |
| **HeroUI** | Apache 2.0 | `web_fetch` `https://heroui.com/docs/components/<name>`. |
| **Mantine / Chakra / MUI** | MIT | `web_fetch` the component docs page; save the example. |
| **Tamagui / gluestack / RN Reusables** | MIT | `web_fetch` docs page; save example. |
| **Vercel templates** | mostly MIT | Output `vercel.com/templates/...` URL + one-click deploy link; clone command if user opts in. |
| **HTML5 UP / Start Bootstrap / AdminLTE (free)** | Free / MIT | Output download URL; fetch only if user confirms. |
| **Tailwind Plus** | PAID | DO NOT fetch source. Output the public preview URL (`tailwindcss.com/plus/ui-blocks/...`) and a description. Ask user for owned-asset path if they have the license. |
| **Cruip All-Access** | PAID | Same as Tailwind Plus. Public preview URL only. |
| **Once UI Indie/Pro** | PAID | Same. Public preview only. The free core is at `github.com/once-ui-system/core` — that can be fetched. |
| **Untitled UI PRO** | PAID | Same. The free Figma kit can be linked but not downloaded by the agent. |
| **MagicUI Pro / Aceternity All-Access** | PAID | Same — free tier only for source fetch. |
| **MUI X Pro/Premium** | PAID | Public docs page only; no Pro component source. |
| **Framer / Webflow paid templates** | PAID | Output marketplace URL + Remix/duplicate instructions. No scraping. |
| **ThemeForest / CodeCanyon / Instamobile** | PAID | Output product page URL only. |
| **Inspiration galleries** (Awwwards, Dribbble, Behance, Mobbin, Page Flows, Refero, Godly, Land-book, SaaS Landing Page, Lapa Ninja, CollectUI, OnePageLove, ScreensDesign, Minimal Gallery, siteinspire, httpster) | n/a | Output pre-filtered search URLs and 3–5 specific entries that match the brief. Never scrape protected content. |
| **Live product references** (Linear, Plain, Cal.com, Mintlify, shadcn demo) | n/a | Output URL + 1-line aesthetic descriptor. |

Sandbox file layout:

```
prototypes/<slug>/
├── README.md             # what this prototype shows, source URL, license
├── source.tsx            # the fetched component (or .html / .vue)
├── reference-shots.md    # links to inspiration entries with notes
└── notes.md              # the user's reactions (filled in Phase 4)
```

### Phase 4 — React (the conversation)

Present each fetched prototype with three questions:
1. Keep, modify, or reject?
2. What's the closest reference site/app from the gallery picks?
3. Any token call-outs (font, radius, accent, density)?

Record reactions in `notes.md` inside the prototype folder.

### Phase 5 — Lock into `DESIGN.md`

Write `DESIGN.md` at the project root (or `~/.copilot/session-state/<session>/files/DESIGN.md` if no repo). If the file exists, **append** a new dated section — never overwrite prior decisions.

Template:

```markdown
# Design Decisions — <project name>

> Last updated: <ISO date> · captured via find-library-template skill

## Aesthetic anchors
- Reference sites: [linear.app, plain.com]
- Reference apps (Mobbin links): [Linear, Cron, Raycast]
- Vibe keywords: [dense, dark, precise, muted-accent]

## Chosen libraries
- Primitives: shadcn/ui (Default style)
- Effects: MagicUI (BorderBeam, Marquee — sparingly)
- Charts: shadcn/charts (Recharts)
- Icons: Lucide

## Rejected libraries (with reason)
- Aceternity UI — too maximalist for this brand
- MUI — visual weight conflicts with target aesthetic

## Tokens (locked)
- Font: Geist Sans / Geist Mono
- Radius: 8px (shadcn default)
- Accent: indigo-500 on dark, indigo-600 on light
- Spacing scale: Tailwind default

## Sandbox prototypes
- prototypes/landing-hero/ — MagicUI BorderBeam + shadcn Button
- prototypes/pricing-table/ — Tailwind Plus block (purchase pending)

## Composition rules for this project
- Hero / marketing sections may use MagicUI animations
- Forms / data / dashboards stay strictly shadcn/ui
- No Aceternity components anywhere
```

The skill stops here. `DESIGN.md` is the single source of truth that all subsequent UI work in the repo must reference. A separate `promote-prototype` skill (future) handles the actual install into `/components/`.

---

## Composition rules (defaults the skill applies)

- **MagicUI + shadcn/ui** is the canonical pair: MagicUI for hero/marketing effects, shadcn for forms, data, and app surfaces. Documented in DESIGN.md when used.
- **Tailwind Plus blocks + shadcn/ui** is the canonical pair for marketing-then-app sites.
- Never mix Aceternity (maximalist) and Linear-style minimalism in the same project without an explicit user override.
- Sandbox prototypes live in `prototypes/` and are gitignored unless the user opts in. They are not for production.
- Charts: prefer shadcn `/charts` (Recharts under the hood) unless user already has Mantine/Chakra/MUI.
- Icons: Lucide is default for shadcn; switch only with cause.

---

## Status notes (kept current with the research)

- **shadcn/ui** ([ui.shadcn.com](https://ui.shadcn.com)) — 114k ⭐. `/create` theme builder (2026). New styles: Sera, Luma, Mira, Nova. Charts via Recharts at `/charts`. Registry supports monorepo workspace imports. Base UI alongside Radix. `.cursor-plugin` / `.claude/` / skills directory shipped.
- **Screenlane** redirects to **Page Flows**. **UI Sources** rebranded to **ScreensDesign**.
- **Dribbble Marketplace** launched 2024 (revenue-share).
- **Awwwards Honors** categories added (Typography, No-code, E-commerce, Product, Portfolio, Business).
- **Mobbin** Figma plugin available; 570k+ screens, 130k+ flows.
- **No standalone v0 / Lovable / Bolt gallery** has emerged. If the user wants AI-built-site inspiration, fall back to designer Twitter accounts: `@JordanHughes_` (Untitled UI), `@emilkowalski_` (UI craft), `@shadcn`, `@lorant_one` (Once UI).
- **Neuform** (`neuform.co`, `neuform.gumroad.com`) is real but has no public catalog — sales happen via Twitter-linked Gumroad direct URLs. If asked, point the user to X/Twitter for current drops.

---

## Library quick-reference (full set from the 2025–2026 landscape)

**Inspiration galleries:** Awwwards · Godly · Minimal Gallery · siteinspire · httpster · Dribbble · Behance · Land-book · SaaS Landing Page · Lapa Ninja · OnePageLove · Mobbin · Refero · Page Flows · ScreensDesign · CollectUI

**No-code marketplaces:** Framer Templates · Webflow Templates · Figma Community

**Premium code studios (paid):** Tailwind Plus · Cruip · Once UI · Untitled UI PRO · MagicUI Pro · Aceternity All-Access · Vercel Templates (mostly free)

**Mass-market themes:** ThemeForest · Creative Tim · WrapPixel · AdminLTE · HTML5 UP · Start Bootstrap · CodeCanyon

**Headless primitives:** Radix UI · Headless UI · Ariakit · Base UI · React Aria

**Opinionated visual systems:** shadcn/ui · Tailwind Plus blocks · MagicUI · Aceternity UI · HeroUI · Origin UI · Park UI

**Batteries-included:** Mantine · Chakra UI v3 · Material UI (MUI)

**Enterprise systems:** Material 3 · GitHub Primer · IBM Carbon · Atlassian Design System · Adobe Spectrum · Salesforce Lightning · Vercel Geist

**Mobile / cross-platform:** Tamagui · gluestack · React Native Reusables · Instamobile · FlutterFlow Templates

**Boutique studios to watch (no template shops — agency aesthetic references):** Phantom · Basement Studio · Studio Freight · Active Theory · Locomotive · Resn · Hello Monday · Ueno/neweno · Achromatic

---

## Acceptance criteria

- [ ] Classification questions asked only if not already supplied in user prompt
- [ ] At least one sandbox prototype created at `prototypes/<slug>/` or session-state equivalent
- [ ] No write outside the sandbox and `DESIGN.md`
- [ ] No source code fetched from paid libraries
- [ ] `DESIGN.md` written or appended with all five sections (anchors, chosen, rejected, tokens, composition rules)
- [ ] Each chosen / rejected library has an explicit reason recorded
- [ ] Sandbox `README.md` includes source URL and license for every fetched artifact

## Self-evaluation gate

Before declaring done, re-check:
1. Did I default to whatever I "remember" instead of consulting the decision tree? (If yes, redo.)
2. Did I fetch paid library source? (If yes, delete it and replace with purchase URL.)
3. Did I scrape an inspiration gallery? (If yes, replace with a search URL.)
4. Does `DESIGN.md` capture *why* each choice was made, not just *what*? (If no, add reasons.)
5. Are the sandbox prototypes runnable in isolation, or did I leave dangling imports? (If dangling, note it in the prototype's README.)
