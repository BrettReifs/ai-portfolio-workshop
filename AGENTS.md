# AGENTS.md — AI Portfolio Workshop

Context for AI agents (Copilot CLI, Claude, Cursor, etc.) working in this repo.

## Repo purpose
A 1-hour workshop teaching attendees to ship a personal portfolio with generative AI. The repo doubles as the slide deck (Slidev), the take-home toolkit (prompts + skills), and reference examples.

## Conventions

### Files
- **Root markdown is the public surface.** Keep `slides.md`, `portfolio-prompt.md`, `design.md`, and `README.md` clean, copy/paste ready, and free of slop.
- **`.github/skills/`** — five [Agent Skills](https://agentskills.io). Each skill is a directory containing `SKILL.md` plus optional bundled `reference.md` / supporting files. Bundled resources live INSIDE the skill folder.
- **`.github/copilot-instructions.md`** — short discovery file pointing here and to skills.
- **`/examples`** — self-contained sample portfolios. Don't import across examples.
- Slidev base path is `/ai-portfolio-workshop/` for GitHub Pages.

### Voice + content rules
- No emoji in finished content.
- No em dashes — use commas, periods, or parentheses.
- Banned phrases: *delve, showcase, robust, seamless, cutting-edge, innovative, game-changer, dive into, deep dive, it's worth noting, in today's fast-paced world*.
- No sycophantic openers.
- Lists are tools, not finished prose.

### Commits
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`.
- Always include trailer: `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`
- Verify `git diff --staged` is free of secrets before pushing.

### Build / lint commands
```bash
npm run dev      # Slidev dev server
npm run build    # Static build to dist/
npm run export   # Export slides to PDF (optional)
```

No linter is configured — keep markdown tidy by hand.

## When working on…
- **slides.md** — preserve frontmatter, keep slides scannable (1 idea per slide), respect the 1hr time budget.
- **portfolio-prompt.md** — placeholders use `{CURLY_CASE}`. Test edits against all 5 platforms before merging.
- **`.github/skills/<name>/SKILL.md`** — keep body ≤80 lines, move deeper content to bundled `reference.md`. Description must be retrieval-optimized (verb-led, lists trigger conditions). Reference resources via `./reference.md` (relative) — never reach outside the skill folder.
- **examples/** — keep dependencies minimal; examples should run with `npx serve` or `python -m http.server`.

## Skill conventions
- One skill = one directory containing `SKILL.md`
- Frontmatter: `name` (kebab-case, matches folder) + `description` (retrieval-optimized)
- Body sections (consistent): When to use → Inputs → Process → Outputs → Bundled resources → Acceptance criteria
- Progressive disclosure: SKILL.md is the entry point; deeper context goes to `./reference.md` or similar bundled files
- See `.github/skills/README.md` for the index and full conventions

## Deploy
- GitHub Pages via `.github/workflows/deploy-pages.yml` (primary)
- Vercel via `vercel.json` (mirror, auto-deploys via GitHub integration)

## Skills index
<!-- pipe-compressed: name | triggers | path -->
portfolio-architect | design structure, choose sections, outline site, group projects, define CTA | .github/skills/portfolio-architect/SKILL.md
content-voice       | rewrite copy, kill slop, voice keywords, strip banned phrases, remove emoji | .github/skills/content-voice/SKILL.md
visual-design       | design tokens, color palette, type system, spacing scale, WCAG contrast, dark mode | .github/skills/visual-design/SKILL.md
frontend-design     | semantic HTML scaffolds, CSS architecture, focus and motion patterns, performance budget | .github/skills/frontend-design/SKILL.md
deploy-helper       | deploy portfolio, ship to GitHub Pages, Vercel, Netlify, pre-flight checks | .github/skills/deploy-helper/SKILL.md

## Safe defaults
- Never commit `.env`, API keys, or local dev secrets.
- If you scaffold new tooling, prefer zero-config or single-file solutions over heavy frameworks.
