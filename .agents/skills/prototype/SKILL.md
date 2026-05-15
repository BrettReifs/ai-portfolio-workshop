---
name: prototype
description: Build a throwaway prototype to flesh out a design before committing. Routes between a runnable terminal app for state/logic questions, or several radically different UI variations toggleable from one route. Use when user wants to prototype, sanity-check a data model or state machine, mock up a UI, explore design options, or says "prototype this", "let me play with it", "try a few designs".
tools: [read, search, edit, create, bash]
---

# Prototype

A prototype is **throwaway code that answers a question**. The question decides the shape.

## Pick a branch

Identify which question is being answered:

- **"Does this logic / state model feel right?"** → **Logic branch.** Build a tiny interactive terminal app that pushes the state machine through cases that are hard to reason about on paper.
- **"What should this look like?"** → **UI branch.** Generate several radically different UI variations on a single route, switchable via a URL search param and a floating bottom bar.

The two branches produce very different artifacts — getting this wrong wastes the whole prototype. If the question is genuinely ambiguous and the user isn't reachable, default to whichever branch better matches the surrounding code (backend module → logic; page or component → UI) and state the assumption at the top of the prototype.

## Rules (both branches)

1. **Throwaway from day one, and clearly marked as such.** Locate the prototype code close to where it will actually be used so context is obvious — but name it so a casual reader can see it's a prototype, not production. For throwaway UI routes, obey whatever routing convention the project already uses.
2. **One command to run.** Whatever the project's existing task runner supports — `pnpm <name>`, `python <path>`, `bun <path>`, `npm run <name>`, etc.
3. **No persistence by default.** State lives in memory. If the question explicitly involves a database, hit a scratch DB or a local file with a clear "PROTOTYPE — wipe me" name.
4. **Skip the polish.** No tests, no error handling beyond what makes the prototype _runnable_, no abstractions. The point is to learn something fast and then delete it.
5. **Surface the state.** After every action (logic) or on every variant switch (UI), print or render the full relevant state so the user can see what changed.
6. **Delete or absorb when done.** Either delete the prototype or fold the validated decision into real code — don't leave it rotting.

## Logic branch

Build a CLI that:
- Initializes the state machine / data model
- Accepts simple keystroke commands (a/b/c, or numbered options) to apply transitions
- After each transition, prints the **full state** and the **list of valid next actions**
- Logs the sequence of transitions so a session can be replayed

Keep it under ~150 lines. Pure functions for transitions; main loop wires input → transition → render.

## UI branch

Generate ≥3 radically different variations of the UI on a single route. Switch via `?variant=1`, `?variant=2`, `?variant=3`. A floating bottom bar lets the user toggle quickly.

Variations should differ on a meaningful axis (layout, hierarchy, density, interaction pattern) — not just colour swaps. State the axis at the top of the route so the user can give feedback against it.

## When done

The **answer** is the only thing worth keeping. Capture it somewhere durable:
- Commit message
- ADR
- Issue comment
- Or a `NOTES.md` next to the prototype

Record both the question and the verdict. If the user is around, this is a quick conversation. If not, leave a placeholder for them to fill in before deletion.

---

> Adapted from [`mattpocock/skills`](https://github.com/mattpocock/skills/tree/f304057d/skills/engineering/prototype) (SHA `f304057d`, SKILL `64f3e611`). LOGIC.md and UI.md sub-files inlined for portability.
