---
name: handoff
description: Compact the current conversation into a handoff document so a fresh agent can pick up the work cold. Use when the user says "handoff", "wrap this session", asks to pause, hits ~70% context, or wants to switch tools (CLI → VS Code or vice versa).
tools: [read, write, bash]
argument-hint: "What will the next session focus on?"
---

# Handoff

Write a handoff document that lets a fresh agent continue the work without re-reading the conversation.

## Where to save

Use the active session-state folder when available:

```
~/.copilot/session-state/<session-id>/files/handoff-<UTC-timestamp>.md
```

If no session folder is reachable, fall back to the repo root as `HANDOVER.md` (git-tracked, multi-tool friendly) or, last resort, `%TEMP%\handoff-<timestamp>.md`. **Read the file path before writing** — never overwrite an existing handoff without renaming it.

If the user passed an argument, treat it as the focus of the next session and tailor the doc accordingly.

## Document structure

Keep the whole thing under ~1500 tokens. Use these headings exactly:

```markdown
# Handoff — <one-line topic>

## Goal
The single objective the next session should drive toward.

## Current State
What's true right now: files modified, branch, tests passing/failing, environment specifics. Include exact paths.

## What Was Accomplished
Significant changes with file paths. Bullets, not prose.

## Failed Approaches (Don't Repeat These)
What was tried and **why it didn't work** — include exact error strings when available. This is the highest-value section; do not skip it.

## Next Step
The single most important next action. Be concrete.

## Constraints & Gotchas
Non-obvious things the next agent must know: env vars, tool quirks, data assumptions.

## References (do NOT duplicate)
- PRD / issue links
- ADR paths
- Relevant skill names to invoke next session
```

## Rules

- **Reference, don't duplicate.** PRDs, plans, ADRs, issues, commits, diffs — link to them by path or URL.
- **Failed Approaches is mandatory.** Community consensus across `claude-handoff`, gstack, JD Hodges, AnastasiyaW: this is the section that pays back the most.
- **Suggest skills for next session.** Name the 1-3 skills the next agent should consider (e.g. "Start with `/diagnose` if the test still fails").
- **No marketing language. No filler.** A handoff is a state pointer, not a summary essay.

## When to invoke proactively

Suggest this skill yourself when you detect any of:
- Context indicator approaches ~70% (in CLI: check via `/context`)
- Two consecutive correction cycles on the same issue (Anthropic guidance: this is when fresh-session beats persistence)
- User signals fatigue or end-of-day
- Imminent tool switch (CLI ↔ VS Code ↔ cloud agent)

---

> Adapted from [`mattpocock/skills`](https://github.com/mattpocock/skills/tree/f304057d/skills/productivity/handoff) (SHA `f304057d`, SKILL `28bfb3ab`). "Failed Approaches" section added per community consensus (willseltzer/claude-handoff, AnastasiyaW).
