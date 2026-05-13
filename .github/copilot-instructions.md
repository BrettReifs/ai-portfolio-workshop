# Copilot Instructions — AI Portfolio Workshop

Repo-level guidance for GitHub Copilot and other AI agents.

## Repo purpose
A 1-hour workshop teaching attendees to define, design, develop, and deploy a personal portfolio with generative AI. The repo doubles as the Slidev presentation, the take-home toolkit (prompts + skills), and reference examples.

## Primary references
- **`AGENTS.md`** — conventions, voice rules, commit hygiene, build commands
- **`.github/skills/`** — five [Agent Skills](https://agentskills.io) (portfolio-architect, content-voice, visual-design, frontend-design, deploy-helper)
- **`design.md`** — workshop chapter on design principles (full token reference lives inside the visual-design skill)
- **`portfolio-prompt.md`** — master copy/paste prompt that drives all five featured platforms

## Skill discovery
Skills live in `.github/skills/<name>/SKILL.md`. Each skill's YAML frontmatter (`name` + `description`) is the retrieval signal. Load `SKILL.md` body when relevant; load bundled `reference.md` / `*.md` files only when the SKILL.md references them.

## Hard rules
- **No emoji in body copy.** No em dashes.
- **No banned phrases** (see `.github/skills/content-voice/banned-phrases.md`).
- **Conventional commits** with `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>` trailer.
- **Never commit secrets.** `.env`, `*.key`, `.vercel/` are gitignored.
- **Slidev base path** must be `/ai-portfolio-workshop/` for GitHub Pages builds.

## Build / dev
```bash
npm install
npm run dev          # Slidev dev server
npm run build        # Static build for GitHub Pages (with base path)
npm run build:vercel # Static build for Vercel (no base path)
```

## Deploy
- **GitHub Pages** (primary): `.github/workflows/deploy-pages.yml` runs on push to `main`
- **Vercel** (mirror): `vercel.json` config, auto-deploys via GitHub integration
