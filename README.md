# AI Portfolio Workshop

> Define, design, develop, and deploy your personal portfolio site in **one hour** using generative AI.

## Start here

| If you're… | Open this |
|------------|-----------|
| **An attendee** following along live | [Live slides ↗](https://brettreifs.github.io/ai-portfolio-workshop/) |
| **Building your portfolio now** | [`DEFINE.prompt.md`](./DEFINE.prompt.md) — paste into Lovable, Copilot, Claude, ChatGPT, or Gemini |
| **Looking for inspiration** | [`examples/`](./examples/) — two reference portfolios (beginner + advanced) |
| **An AI agent** working in this repo | [`AGENTS.md`](./AGENTS.md) + [`.agents/skills/`](./.agents/skills/) |

## What you'll leave with
- A deployed personal portfolio (GitHub Pages or Vercel)
- A reusable master prompt that works across 5 AI platforms
- 5 reusable [Agent Skills](https://agentskills.io) you can drop into Copilot, Claude, or any compliant agent
- Two reference portfolios (beginner + advanced) to fork

## Featured platforms
- [Lovable](https://lovable.dev) — full-stack site generation
- [GitHub Copilot CLI](https://github.com/github/copilot-cli) — terminal-driven scaffolding
- [Claude](https://claude.ai) — Artifacts and Projects for design + content
- [ChatGPT Canvas](https://chat.openai.com) — collaborative editing
- [Google Gemini](https://gemini.google.com) — multimodal exploration + Canvas

## Quick start (presenters)
```bash
npm install
npm run dev      # Slidev dev server at http://localhost:3030
npm run build    # Build static site to dist/
```

## Quick start (attendees)
1. Open `DEFINE.prompt.md`
2. Fill in the placeholders (`{NAME}`, `{ROLE}`, etc.)
3. Paste into your AI tool of choice
4. Iterate, then deploy with the steps in the slides

## Repo layout
```
.
├── slides.md                       # Slidev presentation (the deployed deck)
├── DEFINE.prompt.md                # Master copy/paste prompt
├── DESIGN.md                       # Workshop chapter on design principles
├── AGENTS.md                       # Repo conventions for AI agents
├── .github/
│   └── copilot-instructions.md     # Repo-level Copilot guidance
├── .agents/
│   └── skills/                     # Agent Skills (portfolio-architect,
│                                   #   content-voice, define-design,
│                                   #   frontend-design, deploy-helper, etc.)
└── examples/                       # Reference portfolios (beginner + advanced)
```

See [`.agents/skills/README.md`](./.agents/skills/README.md) for the skill index.

## How to use the skills

The `.agents/skills/` folder contains [Agent Skills](https://agentskills.io). Each is a directory with a `SKILL.md` plus optional bundled resources. They work in two ways:

- **Inside this repo** — GitHub Copilot, Claude Code, and any compliant agent will discover them automatically via the `SKILL.md` frontmatter when you work here.
- **Portable** — copy any skill folder into your own repo's `.agents/skills/`, or upload to Claude as a Skill. Bundled resources travel with the folder.

Pattern for adding your own: create `.agents/skills/<your-skill>/SKILL.md` with `name` and `description` frontmatter, keep the body ≤80 lines, and move depth into `./reference.md` alongside.

## Audience
Designed for a 60% beginner / 40% advanced split. Beginners get copy/paste guardrails; advanced attendees get extensibility patterns and platform-specific tips.

## License
MIT — fork it, remix it, ship your portfolio.
