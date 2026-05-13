# portfolio-prompt.md — Master Portfolio Prompt

Single copy/paste prompt. Fill the placeholders, paste into your AI tool of choice, iterate.

---

**Need a style anchor first?** Skim [`examples/beginner-example/`](./examples/beginner-example/) and [`examples/advanced-example/`](./examples/advanced-example/) — they were generated from this same prompt and refined to ship-quality.

## The Prompt

```
You are an expert portfolio designer and full-stack developer. Build me a personal portfolio site.

# Identity
- Name: {NAME}
- Role / title: {ROLE}
- One-line value prop: {VALUE_PROP}
- Location (optional): {LOCATION}
- Pronouns (optional): {PRONOUNS}

# Audience
- Primary audience: {AUDIENCE}            (e.g., hiring managers at AI startups, conference organizers, prospective clients)
- What I want them to do: {DESIRED_ACTION} (e.g., contact me about senior roles, book me to speak, hire me for consulting)
- Voice keywords (3-5): {VOICE_KEYWORDS}   (e.g., direct, curious, technical-but-warm)

# Sections to include
1. Hero (name, role, value prop, primary CTA, secondary CTA)
2. Selected work (3-6 projects, each with: title, 1-line outcome, tech tags, link)
3. About (2 paragraphs: what I do, how I got here)
4. Contact (email + 2 supporting links)
{OPTIONAL_SECTIONS}                       (e.g., writing, talks, open source, testimonials)

# Projects
{PROJECTS}                                (paste 3-6 entries: name, what it does, outcome/metric, tech, link)

# Links
- Email: {EMAIL}
- GitHub: {GITHUB}
- LinkedIn: {LINKEDIN}
- Other: {OTHER_LINKS}

# Visual direction
- Aesthetic: {AESTHETIC}                  (e.g., editorial-minimal, neo-brutalist, glass+gradient, terminal-monospace)
- Reference sites I like: {REFERENCES}    (paste 1-3 URLs)
- Color preference: {COLOR_PREFERENCE}    (e.g., warm neutrals + one accent, monochrome, dark-only)
- Typography preference: {TYPE_PREFERENCE} (e.g., system fonts only, Inter + JetBrains Mono)
- Dark mode: {DARK_MODE}                  (yes / no / auto)

# Tech constraints
- Framework: {FRAMEWORK}                  (e.g., plain HTML/CSS/JS, Next.js, Astro, SvelteKit)
- No build step preferred: {NO_BUILD}     (true / false)
- Initial payload target: <100KB
- Must be accessible: WCAG AA, keyboard navigable, semantic HTML, visible focus states
- No emoji in body copy. No em dashes. Verbs over adjectives.

# Deployment target
- Platform: {DEPLOY_TARGET}               (GitHub Pages, Vercel, Netlify, Cloudflare Pages)
- Domain: {DOMAIN}                        (or leave blank for default subdomain)

# Output expectations
- Produce a single working site (multi-file is fine if framework requires it)
- Include: meta tags, Open Graph image placeholder, favicon link, robots-friendly markup
- Lighthouse score target: ≥90 across Performance / Accessibility / Best Practices / SEO
- After delivering, list 3 specific improvements I could make next
```

---

## How to fill it in (5 min)

1. **Identity**: 1 line each.
2. **Audience**: be specific. "Hiring managers at AI startups in NYC" beats "tech recruiters."
3. **Projects**: paste 3-6 raw bullets; the AI will tighten them.
4. **Aesthetic**: pick ONE direction. Mixing aesthetics produces slop.
5. **References**: 1-3 sites you genuinely like. Don't list more than 3.

## Platform-specific tweaks

### Lovable
- Paste the prompt as-is into the new project field. Lovable will scaffold a Next.js or React app and let you iterate visually. Best for: full-stack output without writing code.

### GitHub Copilot CLI
- Run `copilot` in an empty folder, then paste the prompt with this prefix: `Create files in the current directory implementing the following spec:`. Tip: add `Use plain HTML/CSS/JS, no build step` to the Tech constraints for fastest iteration.

### Claude (Artifacts / Projects)
- For a single-page site: paste into a Project, ask Claude to produce one HTML artifact.
- For iteration: create a Project, attach `design.md` from this repo as project knowledge, then run the prompt.

### ChatGPT Canvas
- Open a Canvas session, paste the prompt. Canvas excels at iterative refinement of long files. Best for: editing copy and tightening voice after the initial generation.

### Google Gemini (incl. Gemini Canvas)
- Gemini benefits from explicit multimodal cues. Add to Visual direction: "I will share 2 reference screenshots — match the spacing rhythm of the first and the color palette of the second." Then upload images.
- Use Gemini Canvas for live HTML preview as you iterate.

## After you generate

1. Check the Lighthouse score. If <90 anywhere, ask the tool: "Get me to ≥90 on [metric]."
2. Read the copy out loud. If it sounds like AI, ask: "Rewrite in {VOICE_KEYWORDS}, no banned phrases (delve, showcase, robust, seamless, cutting-edge, dive into)."
3. Ship it (see slides for deploy steps).

## Deeper context (optional)

If your agent supports [Agent Skills](https://agentskills.io), point it at `.github/skills/` for richer context:
- **portfolio-architect** — structure and section decisions
- **visual-design** — token system and aesthetic direction
- **frontend-design** — HTML/CSS implementation patterns
- **content-voice** — voice application + banned-phrases dictionary
- **deploy-helper** — deploy walkthrough + pre-flight checklist

These follow progressive disclosure: only the relevant skill loads into context when needed.
