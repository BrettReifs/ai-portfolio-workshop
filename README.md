# AI Portfolio Workshop

> Define, design, develop, and deploy your personal portfolio site in **one hour** using generative AI.

**Live slides**: https://brettreifs.github.io/ai-portfolio-workshop/

## What you'll leave with
- A deployed personal portfolio (GitHub Pages or Vercel)
- A reusable master prompt that works across 5 AI platforms
- 4 reusable AI skills you can drop into Copilot or Claude
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
1. Open `portfolio-prompt.md`
2. Fill in the placeholders (`{NAME}`, `{ROLE}`, etc.)
3. Paste into your AI tool of choice
4. Iterate, then deploy with the steps in the slides

## Repo layout
```
.
├── slides.md              # Slidev presentation (the public landing page)
├── portfolio-prompt.md    # Master copy/paste prompt
├── design.md              # Design tokens, layouts, anti-slop rules
├── AGENTS.md              # Repo conventions for AI agents
├── skills/                # Reusable Copilot/Claude skill files
└── examples/              # Reference portfolios
```

## Audience
Designed for a 60% beginner / 40% advanced split. Beginners get copy/paste guardrails; advanced attendees get extensibility patterns and platform-specific tips.

## License
MIT — fork it, remix it, ship your portfolio.
