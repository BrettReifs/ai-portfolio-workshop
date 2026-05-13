---
theme: seriph
title: AI Portfolio Workshop
info: |
  Define, design, develop, and deploy a personal portfolio in 1 hour.
  Repo: https://github.com/BrettReifs/ai-portfolio-workshop
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: fade-out
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
  weights: '300,400,600,700'
  italic: true
---

# AI Portfolio Workshop

Define. Design. Develop. Deploy. **In one hour.**

<div class="pt-12">
  <span class="px-3 py-1.5 rounded font-mono text-sm" style="background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.7)">
    github.com/BrettReifs/ai-portfolio-workshop
  </span>
</div>

<!--
Welcome. Before we start, open the repo link and star it.
You will leave with a live portfolio URL.
-->

---

# Who this is for

<v-clicks>

- **You are new to AI tools** and want a portfolio shipped today
- **You already use AI** and want sharper prompts, better skills, and deeper tricks
- You have 1 hour and a laptop

</v-clicks>

<p v-after class="mt-8 text-gray-600 text-base">We will build something real. You will leave with a deployed site.</p>

---

# Today's path

| Time | Phase | Outcome |
|------|-------|---------|
| 5 min | Welcome | Set the stage |
| 10 min | **Define** | Identity, audience, voice |
| 15 min | **Design** | Tokens, layout, references |
| 15 min | **Develop** | Generate site, refine, ship copy |
| 10 min | **Deploy** | Live URL, custom domain optional |
| 5 min | Wrap | Take-home toolkit + Q&A |

---
hideInToc: true
---

# The 5 platforms we will touch

<v-clicks>

- **Lovable:** full-stack, generate-and-iterate
- **GitHub Copilot CLI:** terminal-native scaffolding
- **Claude:** Artifacts and Projects for design and copy
- **ChatGPT Canvas:** collaborative editing
- **Google Gemini:** multimodal grounding and Canvas

</v-clicks>

<p v-after class="mt-6 text-sm text-gray-600">One master prompt. Five platforms. Pick the one you will actually use.</p>

---
layout: section
---

# Phase 1: Define

10 minutes

---

# Define: the only 3 questions that matter

<v-clicks>

1. **Who are you to this audience?** Role and value prop in one line.
2. **What do you want them to do after visiting?** Apply, contact, hire, follow.
3. **What words capture your voice?** Three to five keywords, not adjectives like "passionate."

</v-clicks>

<p v-after class="mt-8 text-sm text-gray-600 italic">If you cannot answer these, no amount of design will save the site.</p>

---

# Define: voice over vibes

<div class="mb-2 font-mono text-xs uppercase tracking-widest" style="color: #525252">before</div>
<div class="mb-6 p-4 rounded-lg text-sm italic" style="background: #7f1d1d; border: 1px solid #991b1b; color: #fecaca">
  "I am a passionate, innovative engineer leveraging cutting-edge AI."
</div>

<div v-click class="mb-2 font-mono text-xs uppercase tracking-widest" style="color: #525252">after</div>
<div v-click class="mb-6 p-4 rounded-lg" style="background: #064e3b; border: 1px solid #047857; color: #a7f3d0">
  "I ship AI agents that actually run in production. I write about what breaks."
</div>

<div v-click class="text-sm" style="color: #374151">
  <strong style="color: #111827">Banned vocabulary</strong> (subset): delve, showcase, robust, seamless, cutting-edge, innovative, dive into. Full list: <code>content-voice/banned-phrases.md</code>
</div>

---

# Define: prompt to draft your identity

Paste into Claude or Gemini:

```
Help me draft 3 versions of a portfolio identity statement.
Role: {ROLE}. Audience: {AUDIENCE}.
3 things I have shipped: {3_PROJECTS}.
3 voice keywords: {VOICE_KEYWORDS}.

Output 3 versions, each: 1 line role+value prop, 2-paragraph about,
1-line CTA. No banned phrases (delve, showcase, robust, seamless,
cutting-edge, innovative). Verbs over adjectives.
```

---
layout: section
---

# Phase 2: Design

15 minutes

<style>
.slidev-layout {
  background: linear-gradient(135deg, #0a0a0a 0%, #0c1628 55%, #0a0a0a 100%);
}
</style>

---
layout: showcase
class: dark-slide
---

## Tokens beat decisions

Don't pick colors slide-by-slide. Pick a system once.

| Layer | Tokens | Example |
|-------|--------|---------|
| **Color** | `--bg` `--surface` `--accent` | warm neutrals, one blue |
| **Type** | display, body, mono stacks | system stack, JetBrains Mono |
| **Spacing** | one scale used everywhere | 0.25 to 8 rem |
| **Radius** | 1-2 values total | 4px controls, 8px cards |

<p class="mt-4 text-sm" style="color: #A3A3A3">Full defaults in <code>design.md</code> in the repo.</p>

::right::

<ColorPalette mode="dark" />

---
layout: two-cols
class: design-demo dark-slide
---

### Type scale

<TypeScale />

::right::

### Spacing scale

<SpacingScale />

<style>
.design-demo h3 {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #60A5FA;
  margin-bottom: 0.875rem;
  font-weight: 400;
}
</style>

---
class: dark-slide
---

# Design: pick ONE aesthetic

<div class="aesthetic-grid mt-4">
  <AestheticCard v-click name="Editorial-minimal" bestFor="Writers, researchers, designers" :palette="['#FAFAF9', '#0A0A0A', '#2563EB']" />
  <AestheticCard v-click name="Neo-brutalist" bestFor="Indie devs, makers, distinct voice" :palette="['#F5F5F4', '#000000', '#DC2626']" />
  <AestheticCard v-click name="Glass + gradient" bestFor="Designers, frontend engineers" :palette="['#312e81', '#FFFFFF', '#818cf8']" />
  <AestheticCard v-click name="Terminal-monospace" bestFor="Backend, infra, security" :palette="['#0A0A0A', '#10B981', '#10B981']" />
</div>

<p v-after class="mt-4 text-sm" style="color: #A3A3A3">Mixing aesthetics produces slop. Pick one. Commit.</p>

<style>
.aesthetic-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
}
</style>

---

# Design: reference, don't copy

Find 1-3 sites you love. Don't list 10. Don't say "Apple-style."

<v-clicks>

Tell the AI exactly what you want to borrow:

- "Match the spacing rhythm of site A"
- "Match the color restraint of site B"
- "Match the typography hierarchy of site C"

</v-clicks>

<p v-after class="mt-6 text-sm" style="color: #4b5563">Specific references produce specific outputs.</p>

---

# Design: the multimodal trick (Gemini)

Drag in 2-3 reference screenshots. Ask Gemini to:

<v-clicks>

1. Extract the color palette from image 1
2. Identify the spacing scale from image 2
3. Describe the type hierarchy in image 3
4. **Synthesize** a token set that combines all three

</v-clicks>

<p v-after class="mt-6 text-sm" style="color: #4b5563">Gemini is best-in-class at multimodal grounding. Use it for this step.</p>

---
layout: section
---

# Phase 3: Develop

15 minutes

---

# Develop: the master prompt

Open `portfolio-prompt.md`. One file, copy/paste ready.

Fill these placeholders (5 minutes):

<v-clicks>

- `{NAME}`, `{ROLE}`, `{VALUE_PROP}`
- `{AUDIENCE}`, `{DESIRED_ACTION}`, `{VOICE_KEYWORDS}`
- `{PROJECTS}` (3-6 raw bullets, AI tightens them)
- `{AESTHETIC}`, `{REFERENCES}`
- `{FRAMEWORK}`, `{DEPLOY_TARGET}`

</v-clicks>

---

# Develop: pick your platform

| You want... | Use |
|-------------|-----|
| Zero-config full-stack site | **Lovable** |
| Terminal control, git from minute 1 | **Copilot CLI** |
| Single HTML file, design-tight | **Claude Artifacts** |
| Iterative copy refinement | **ChatGPT Canvas** |
| Multimodal references to design tokens | **Gemini Canvas** |

<p class="mt-4 text-sm" style="color: #4b5563">You can hand off mid-flight. Generate in Lovable, refine copy in Canvas, polish in Claude.</p>

---

# Develop: live demo (Lovable path)

<v-clicks>

1. Paste master prompt into Lovable
2. Lovable scaffolds a Next.js project with live preview
3. Iterate by chatting: "Make the hero tighter, drop the gradient, increase line height."
4. Click "Connect to GitHub" and done

</v-clicks>

<p v-after class="mt-6 text-sm" style="color: #4b5563">Total time: <strong>5-8 minutes</strong> for a working site.</p>

---

# Develop: live demo (Copilot CLI path)

```bash
mkdir my-portfolio && cd my-portfolio
copilot
> Create a single-file HTML portfolio implementing the spec in
  the attached portfolio-prompt.md. Use plain HTML/CSS/JS,
  no build step, system fonts, dark mode via prefers-color-scheme.
```

<p class="mt-4 text-sm" style="color: #4b5563">Then iterate: "Tighten the hero. Add a focus state. Drop the box shadow."</p>

<p class="mt-2 text-sm" style="color: #4b5563">Best for people who want git history from minute 1.</p>

---

# Develop: kill the slop pass

After generation, run this against your output:

```
Rewrite all body copy in this voice: {VOICE_KEYWORDS}.
Remove these phrases entirely: delve, showcase, robust,
seamless, cutting-edge, innovative, dive into, deep dive,
it's worth noting, in today's fast-paced world.
Replace adjectives with verbs and outcomes.
Read-aloud test: if it sounds like AI, rewrite it.
```

<p class="mt-2 text-xs" style="color: #525252">Full list: <code>content-voice/banned-phrases.md</code></p>

<div class="mt-5 px-4 py-3 rounded-lg text-sm" style="background: #064e3b; border: 1px solid #047857; color: #a7f3d0">
  This single pass is worth more than 10 design tweaks.
</div>

---
layout: section
---

# Phase 4: Deploy

10 minutes

---

# Deploy: GitHub Pages (recommended)

```bash
gh repo create my-portfolio --public --source=. --push
gh repo edit --enable-pages --pages-branch main
```

Or in the UI: **Settings** then **Pages** then **Source: GitHub Actions**.

<p class="mt-6 text-sm" style="color: #4b5563">Live URL: <code>https://{your-username}.github.io/my-portfolio/</code></p>

---

# Deploy: Vercel (1-click)

```bash
npm i -g vercel
vercel
```

Follow prompts. Live in ~30 seconds. Free for personal use.

Custom domain: `vercel domains add yourdomain.com`

---

# Deploy: the 5-point pre-flight

Before you share the URL:

<v-clicks>

1. Lighthouse >= 90 across Performance, Accessibility, Best Practices, SEO
2. `<title>` and `<meta name="description">` set
3. Open Graph image (1200x630) for social previews
4. Tested on mobile (resize the browser at minimum)
5. One person other than you has read it without confusion

</v-clicks>

---
layout: section
---

# Wrap

5 minutes

---

# What you have now

<v-clicks>

- A live portfolio URL
- A reusable master prompt that works across 5 platforms
- Five skills in `/skills` you can drop into Copilot or Claude
- Two reference examples to fork and extend
- A design system you can take into every future project

</v-clicks>

<p v-after class="mt-6 text-sm" style="color: #4b5563">Star the repo. Fork it. Extend it. Send me what you ship.</p>

---

# Take-home: 5 Agent Skills

In `.github/skills/`:

<v-clicks>

- **portfolio-architect:** turns raw info into a site structure with success metrics
- **content-voice:** applies your voice keywords, kills slop phrases
- **visual-design:** emits design tokens and layout decisions from references
- **frontend-design:** translates tokens into shippable HTML/CSS with a11y and performance
- **deploy-helper:** walks through GitHub Pages or Vercel deployment

</v-clicks>

<p v-after class="mt-4 text-sm" style="color: #4b5563">Each skill is a markdown file. Drop into Claude Projects or reference from Copilot CLI.</p>

---

# Beginner next steps

<v-clicks>

1. Add a second page for writing or talks
2. Add a custom domain (Vercel makes this 2 minutes)
3. Generate an Open Graph image with Gemini or Midjourney and wire it up

</v-clicks>

---

# Advanced next steps

<v-clicks>

1. Wire a CMS-free blog (Astro content collections, or `posts.json` fetched at build time)
2. Add view-source-friendly progressive enhancement
3. Build a Copilot CLI extension that scaffolds new project entries from the command line
4. Add Plausible or Umami analytics (privacy-respecting, no cookie banner needed)

</v-clicks>

---
layout: center
class: text-center
---

# Questions?

<div class="mt-8 font-mono text-sm" style="color: #525252">github.com/BrettReifs/ai-portfolio-workshop</div>
