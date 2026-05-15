---
name: zoom-out
description: Tell the agent to zoom out and give broader context or a higher-level perspective. Use when unfamiliar with a section of code or need to understand how it fits into the bigger picture.
tools: [read, search]
disable-model-invocation: true
---

I don't know this area of code well. Go up a layer of abstraction. Give me a map of all the relevant modules and callers, using the project's domain glossary (`CONTEXT.md`) vocabulary.

Output format:
1. **One-paragraph overview** of what this slice of the codebase is for.
2. **Module map** — a Mermaid `graph TD` diagram of the modules involved and their relationships.
3. **Caller list** — for each module, the top 3-5 entry points (files/functions) that depend on it.
4. **Open questions** — anything the codebase reads ambiguously that the user should clarify.

---

> Verbatim (with output format added) from [`mattpocock/skills`](https://github.com/mattpocock/skills/tree/f304057d/skills/engineering/zoom-out) (SHA `f304057d`, SKILL `1e7a5dc7`). `disable-model-invocation: true` means this skill is only invoked when the user explicitly types `/zoom-out`.
