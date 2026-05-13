---
theme: seriph
title: AI Portfolio Workshop
info: |
  Define, design, develop, and deploy your personal portfolio in 1 hour.
  Repo: https://github.com/BrettReifs/ai-portfolio-workshop
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
---

# AI Portfolio Workshop

Define. Design. Develop. Deploy. **In one hour.**

<div class="pt-12">
  <span class="px-2 py-1 rounded bg-white bg-opacity-10">
    github.com/BrettReifs/ai-portfolio-workshop
  </span>
</div>

---

# Who this is for

- **You're new to AI tools** and want a portfolio shipped today
- **You already use AI** and want sharper prompts, better skills, deeper tricks
- You have 1 hour and a laptop

We'll build something real. You'll leave with a deployed site.

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

# The 5 platforms we'll touch

- **Lovable** — full-stack, generate-and-iterate
- **GitHub Copilot CLI** — terminal-native scaffolding
- **Claude** — Artifacts + Projects for design and copy
- **ChatGPT Canvas** — collaborative editing
- **Google Gemini** — multimodal grounding + Canvas

> One master prompt. Five platforms. Pick the one you'll actually use.

---
layout: section
---

# Phase 1: Define

10 minutes

---

# Define: the only 3 questions that matter

1. **Who are you to this audience?** (role + value prop in one line)
2. **What do you want them to do after visiting?** (apply, contact, hire, follow)
3. **What words capture your voice?** (3-5 keywords, not adjectives like "passionate")

If you can't answer these, no amount of design will save the site.

---

# Define: voice over vibes

Bad: *"I'm a passionate, innovative engineer leveraging cutting-edge AI."*

Better: *"I ship AI agents that actually run in production. I write about what breaks."*

**Banned vocabulary**: delve, showcase, robust, seamless, cutting-edge, innovative, dive into.

If your portfolio reads like every other portfolio, you've lost.

---

# Define: prompt to draft your identity

Paste into Claude or Gemini:

```
Help me draft 3 versions of a portfolio identity statement.
Role: {ROLE}. Audience: {AUDIENCE}.
3 things I've shipped: {3_PROJECTS}.
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

---

# Design: tokens beat decisions

Don't pick colors slide-by-slide. Pick a system once.

| Layer | What you choose | Example |
|-------|-----------------|---------|
| **Color** | bg, surface, text, accent | warm neutrals + one blue |
| **Type** | display + body + mono | system stack + JetBrains Mono |
| **Spacing** | one scale, used everywhere | 0.25 → 0.5 → 1 → 2 → 4 rem |
| **Radius** | 1-2 values total | 4px controls, 8px cards |

See `design.md` in the repo for ready-to-use defaults.

---

# Design: pick ONE aesthetic

| Aesthetic | Best for |
|-----------|----------|
| Editorial-minimal | Writers, researchers, designers |
| Neo-brutalist | Indie devs, makers, distinct voice |
| Glass + gradient | Designers, frontend engineers |
| Terminal-monospace | Backend, infra, security folks |

**Mixing aesthetics produces slop.** Pick one. Commit.

---

# Design: reference, don't copy

Find 1-3 sites you love. Don't list 10. Don't say "Apple-style."

Tell the AI what specifically you want to borrow:
- *"Match the spacing rhythm of site A"*
- *"Match the color restraint of site B"*
- *"Match the typography hierarchy of site C"*

Specific references produce specific outputs.

---

# Design: the multimodal trick (Gemini)

Drag in 2-3 reference screenshots. Ask Gemini to:

1. Extract the color palette from image 1
2. Identify the spacing scale from image 2
3. Describe the type hierarchy in image 3
4. **Synthesize** a token set that combines them

Gemini is best-in-class at multimodal grounding. Use it here.

---
layout: section
---

# Phase 3: Develop

15 minutes

---

# Develop: the master prompt

Open `portfolio-prompt.md`. One file, copy/paste ready.

Fill these placeholders (5 minutes):

- `{NAME}`, `{ROLE}`, `{VALUE_PROP}`
- `{AUDIENCE}`, `{DESIRED_ACTION}`, `{VOICE_KEYWORDS}`
- `{PROJECTS}` (3-6 raw bullets, AI tightens them)
- `{AESTHETIC}`, `{REFERENCES}`
- `{FRAMEWORK}`, `{DEPLOY_TARGET}`

---

# Develop: pick your platform

| You want… | Use |
|-----------|-----|
| Zero-config full-stack site | **Lovable** |
| Terminal control + git from minute 1 | **Copilot CLI** |
| Single HTML file, design-tight | **Claude Artifacts** |
| Iterative copy refinement | **ChatGPT Canvas** |
| Multimodal references → design | **Gemini Canvas** |

You can hand off mid-flight. Generate in Lovable, refine copy in Canvas, polish in Claude.

---

# Develop: live demo (Lovable path)

1. Paste master prompt into Lovable
2. Lovable scaffolds Next.js + preview
3. Iterate by chatting: *"Make the hero tighter, drop the gradient, increase line height."*
4. Click "Connect to GitHub" → done

Total time: **5-8 minutes** for a working site.

---

# Develop: live demo (Copilot CLI path)

```bash
mkdir my-portfolio && cd my-portfolio
copilot
> Create a single-file HTML portfolio implementing the spec in
  the attached portfolio-prompt.md. Use plain HTML/CSS/JS,
  no build step, system fonts, dark mode toggle.
```

Then iterate: *"Tighten the hero. Add a focus state. Drop the box shadow."*

Best for people who want git history from minute 1.

---

# Develop: kill the slop pass

After generation, run this prompt against your output:

```
Rewrite all body copy in this voice: {VOICE_KEYWORDS}.
Remove these phrases entirely: delve, showcase, robust,
seamless, cutting-edge, innovative, dive into, deep dive,
it's worth noting, in today's fast-paced world.
Replace adjectives with verbs and outcomes.
Read each sentence aloud test: if it sounds like AI, rewrite.
```

This single pass is worth more than 10 design tweaks.

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

Or in the UI: **Settings → Pages → Source: GitHub Actions**.

Live URL: `https://{your-username}.github.io/my-portfolio/`

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

1. ✅ Lighthouse ≥ 90 across all 4 metrics
2. ✅ `<title>` and `<meta description>` set
3. ✅ Open Graph image (1200×630) for social previews
4. ✅ Tested on mobile (resize the browser)
5. ✅ One person other than you read it without confusion

---
layout: section
---

# Wrap

5 minutes

---

# What you have now

- A live portfolio URL
- A reusable master prompt that works across 5 platforms
- 4 skills in `/skills` you can drop into Copilot or Claude
- 2 reference examples to fork
- A design system you can extend

Star the repo. Fork it. Extend it. Send me what you ship.

---

# Take-home: the 4 skills

In `/skills`:

- **portfolio-architect** — turns raw info into site structure
- **content-voice** — applies your voice, kills slop
- **visual-design** — emits design tokens + layout decisions
- **deploy-helper** — walks through GH Pages or Vercel deploy

Each is a markdown file. Drop into Claude Projects or reference from Copilot CLI.

---

# Beginner next steps

1. Add a 2nd page (writing or talks)
2. Add a custom domain
3. Add an Open Graph image generated with Gemini or Midjourney

---

# Advanced next steps

1. Wire a CMS-free blog (Astro content collections, or `posts.json` + fetch)
2. Add view-source-friendly progressive enhancement
3. Build a Copilot CLI extension that scaffolds new project entries
4. Add Plausible/Umami analytics (privacy-respecting)

---
layout: center
class: text-center
---

# Questions?

**Repo**: github.com/BrettReifs/ai-portfolio-workshop

Fork it. Ship something. Send me the URL.
