# AGENTS.md — AI Portfolio Workshop

Context for AI agents (Copilot CLI, Claude, Cursor, etc.) working in this repo.

## Repo purpose
A 1-hour workshop teaching attendees to ship a personal portfolio with generative AI. The repo doubles as the slide deck (Slidev), the take-home toolkit (prompts + skills), and reference examples.

## Conventions

### Files
- **Root markdown is the public surface.** Keep `slides.md`, `portfolio-prompt.md`, `design.md`, and `README.md` clean, copy/paste ready, and free of slop.
- **`/skills`** — each file is a self-contained skill with trigger phrases, inputs, process, and acceptance criteria.
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
- **skills/** — match the structure of existing skills. Keep them under ~80 lines each.
- **examples/** — keep dependencies minimal; examples should run with `npx serve` or `python -m http.server`.

## Deploy
- GitHub Pages via `.github/workflows/deploy-pages.yml` (primary)
- Vercel via `vercel.json` (fallback)

## Skills index
<!-- pipe-compressed: name | triggers | path -->
content-voice | rewrite copy, kill slop, voice keywords, strip banned phrases, remove emoji | .github/skills/content-voice.md
deploy-helper | deploy portfolio, ship to GitHub Pages, Vercel, Netlify, pre-flight checks | .github/skills/deploy-helper.md
portfolio-architect | design structure, choose sections, outline site, group projects, define CTA | .github/skills/portfolio-architect.md
visual-design | design tokens, color palette, type system, spacing scale, WCAG contrast, dark mode | .github/skills/visual-design.md

## Safe defaults
- Never commit `.env`, API keys, or local dev secrets.
- If you scaffold new tooling, prefer zero-config or single-file solutions over heavy frameworks.
