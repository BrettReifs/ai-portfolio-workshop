# Skills

Reusable [Agent Skills](https://agentskills.io) for the AI Portfolio Workshop. Each skill is a self-contained directory with a `SKILL.md` and optional bundled resources.

## Available skills

| Skill | What it does |
|-------|--------------|
| [portfolio-architect](./portfolio-architect/) | Turns raw info into a structured site outline with sections, CTA, and success metrics |
| [content-voice](./content-voice/) | Rewrites copy in a defined voice and strips AI slop |
| [visual-design](./visual-design/) | Generates design tokens, color palettes, type systems |
| [frontend-design](./frontend-design/) | Translates tokens into shippable HTML/CSS with a11y and performance built in |
| [deploy-helper](./deploy-helper/) | Deploys to GitHub Pages / Vercel / Netlify / Cloudflare with pre-flight checks |

## How skills work

Each skill follows the [Agent Skills open standard](https://agentskills.io):
1. **YAML frontmatter** (`name` + `description`) is pre-loaded into the agent's system prompt
2. **SKILL.md body** is loaded when the agent decides the skill is relevant
3. **Bundled resources** (`reference.md`, `pre-flight-checklist.md`, etc.) are loaded only when the SKILL.md references them

This pattern (progressive disclosure) keeps context lean and skills portable.

## Using skills

### GitHub Copilot CLI / Claude Code
Skills in `.github/skills/` are auto-discovered when you run an agent in this repo.

### Claude.ai (paid plans)
Upload a skill folder via Settings → Skills → Upload skill.

### Claude API
See the [Skills API quickstart](https://docs.claude.com/en/api/skills-guide#creating-a-skill).

### Just copy them
Each skill folder is self-contained. Copy any folder into your own `.github/skills/` (or `~/.copilot/skills/` for user-level) and it works.

## Authoring conventions for this repo

- One skill = one directory containing `SKILL.md`
- `description` is **retrieval-optimized**: verb-led, third-person, lists trigger conditions
- `SKILL.md` body is **≤ 80 lines**; deeper content goes to bundled `reference.md`
- Bundled resources live **inside** the skill folder — never reach out to repo root
- Body sections (consistent across skills): *When to use → Inputs → Process → Outputs → Bundled resources → Acceptance criteria*
