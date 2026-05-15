# AGENTS.md — AI Portfolio Workshop

Context for AI agents (Copilot CLI, Claude, Cursor, etc.) working in this repo.

## Repo purpose
A 1-hour workshop teaching attendees to ship a personal portfolio with generative AI. The repo doubles as the slide deck (Slidev), the take-home toolkit (prompts + skills), and reference examples.

## Conventions

### Files
- **Root markdown is the public surface.** Keep `slides.md`, `DEFINE.prompt.md`, `DESIGN.md`, and `README.md` clean, copy/paste ready, and free of slop.
- **`.agents/skills/`** — [Agent Skills](https://agentskills.io). Each skill is a directory containing `SKILL.md` plus optional bundled `reference.md` / supporting files. Bundled resources live INSIDE the skill folder.
- **`.github/copilot-instructions.md`** — short discovery file pointing here and to skills.
- **`/examples`** — self-contained sample portfolios. Don't import across examples.
- Slidev base path is `/ai-portfolio-workshop/` for GitHub Pages.

### Voice + content rules
- No emoji in finished content.
- No em dashes — use commas, periods, or parentheses.
- Banned phrases: see [`.agents/skills/content-voice/banned-phrases.md`](./.agents/skills/content-voice/banned-phrases.md) for the full dictionary. Strip on sight; do not replace.
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
npx @google/design.md lint DESIGN.md  # Validate design token file
```

No linter is configured — keep markdown tidy by hand.

## When working on…
- **slides.md** — preserve frontmatter, keep slides scannable (1 idea per slide), respect the 1hr time budget.
- **DEFINE.prompt.md** — placeholders use `{CURLY_CASE}`. Test edits against all 5 platforms before merging.
- **`.agents/skills/<name>/SKILL.md`** — keep body ≤80 lines, move deeper content to bundled `reference.md`. Description must be retrieval-optimized (verb-led, lists trigger conditions). Reference resources via `./reference.md` (relative) — never reach outside the skill folder.
- **examples/** — keep dependencies minimal; examples should run with `npx serve` or `python -m http.server`. Each example contains a `DESIGN.md` alongside its `index.html` — the skill `define-design` references these across folder boundaries; this is an intentional exception to the bundled-resources rule because examples serve double duty as workshop deliverables.

## Skill conventions
- One skill = one directory containing `SKILL.md`
- Frontmatter: `name` (kebab-case, matches folder) + `description` (retrieval-optimized)
- Body sections (consistent): When to use → Inputs → Process → Outputs → Bundled resources → Acceptance criteria
- Progressive disclosure: SKILL.md is the entry point; deeper context goes to `./reference.md` or similar bundled files
- See `.agents/skills/README.md` for the index and full conventions

## Deploy
- GitHub Pages via `.github/workflows/deploy-pages.yml` (primary)
- Vercel via `vercel.json` (mirror, auto-deploys via GitHub integration)

## Skills index
<!-- pipe-compressed: name | triggers | path -->

### Portfolio skills
portfolio-architect | design structure, choose sections, outline site, group projects, define CTA | .agents/skills/portfolio-architect/SKILL.md
content-voice       | rewrite copy, kill slop, voice keywords, strip banned phrases, remove emoji | .agents/skills/content-voice/SKILL.md
define-design      | design tokens, color palette, type system, DESIGN.md, extract from reference, WCAG contrast, dark mode | .agents/skills/define-design/SKILL.md
frontend-design     | semantic HTML scaffolds, CSS architecture, focus and motion patterns, performance budget | .agents/skills/frontend-design/SKILL.md
deploy-helper       | deploy portfolio, ship to GitHub Pages, Vercel, Netlify, pre-flight checks | .agents/skills/deploy-helper/SKILL.md

### Engineering skills
code-reviewer           | review code, find bugs, security issues, best practices | .agents/skills/code-reviewer/SKILL.md
test-writer             | generate tests, unit tests, integration tests, edge cases | .agents/skills/test-writer/SKILL.md
tdd                     | red-green-refactor, test-first, vertical slices, behavioral tests | .agents/skills/tdd/SKILL.md
diagnose                | debug, reproduce bug, hard bugs, performance regression, instrument | .agents/skills/diagnose/SKILL.md
commit-hygiene          | conventional commits, Co-authored-by, branch naming, no secrets in diff | .agents/skills/commit-hygiene/SKILL.md
improve-codebase-architecture | refactor, deepen modules, find friction, testability, AI-navigable | .agents/skills/improve-codebase-architecture/SKILL.md
prototype               | throwaway prototype, sanity-check, mock up UI, explore design options | .agents/skills/prototype/SKILL.md
researcher              | explore codebase, understand architecture, find patterns, answer questions | .agents/skills/researcher/SKILL.md

### Design and content skills
artisan-ux              | three-pass design, additive reformative reductive, Kano-aware, UI/UX refinement | .agents/skills/artisan-ux/SKILL.md
visual-asset-generator  | AI image prompts, scene layering, narrative framework, design tokens | .agents/skills/visual-asset-generator/SKILL.md
find-library-template   | find templates, UI inspiration, component library, design.md, rapid prototyping | .agents/skills/find-library-template/SKILL.md
multi-objective-review  | quality scorecard, usability, performance, engagement, accessibility, adaptability | .agents/skills/multi-objective-review/SKILL.md

### Planning and workflow skills
grill-me                | stress-test plan, interview, decision tree, shared understanding | .agents/skills/grill-me/SKILL.md
grill-with-docs         | stress-test plan against docs, domain language, terminology, ADRs | .agents/skills/grill-with-docs/SKILL.md
to-issues               | break plan into issues, implementation tickets, tracer-bullet slices | .agents/skills/to-issues/SKILL.md
to-prd                  | synthesize PRD, capture spec, tracking issue | .agents/skills/to-prd/SKILL.md
triage                  | triage issues, bug or enhancement, needs-info, ready-for-agent | .agents/skills/triage/SKILL.md
write-a-skill           | create skill, author SKILL.md, retrieval-optimized description, bundled resources | .agents/skills/write-a-skill/SKILL.md

### Session management skills
context-save            | save checkpoint, pause session, git state, remaining work | .agents/skills/context-save/SKILL.md
context-restore         | resume checkpoint, pick up where left off, re-ground on git state | .agents/skills/context-restore/SKILL.md
handoff                 | wrap session, handoff document, switch tools, context flush | .agents/skills/handoff/SKILL.md
summarize-then-continue | compact session, VS Code workaround, paste-ready summary | .agents/skills/summarize-then-continue/SKILL.md
context-hygiene         | repo health, stale files, uncommitted changes, orphaned artifacts | .agents/skills/context-hygiene/SKILL.md
zoom-out                | broader context, higher-level view, map codebase, unfamiliar area | .agents/skills/zoom-out/SKILL.md

### Installed skills (third-party)
slidev                  | Slidev presentations, slide deck, Markdown slides, code highlighting, animations, Vue components | .agents/skills/slidev/SKILL.md

### Utility skills
caveman                 | brief mode, less tokens, ultra-compressed, drop filler | .agents/skills/caveman/SKILL.md
autonomous-iteration    | autonomous experiment loop, single file, measurable metric, keep or discard | .agents/skills/autonomous-iteration/SKILL.md

## Safe defaults
- Never commit `.env`, API keys, or local dev secrets.
- If you scaffold new tooling, prefer zero-config or single-file solutions over heavy frameworks.
