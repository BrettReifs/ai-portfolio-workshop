---
name: write-a-skill
description: Create new agent skills with proper structure, retrieval-optimized descriptions, hybrid frontmatter, and bundled resources. Use when user wants to create, write, author, or build a new skill (SKILL.md).
tools: [read, search, create, edit]
---

# Writing Skills

A skill is a `SKILL.md` file under `~/.copilot/skills/<name>/` (user-level, available everywhere) or `.github/skills/<name>/` (repo-level, overrides user-level inside one repo).

## Process

1. **Gather requirements** — ask the user:
   - What task / domain does the skill cover?
   - What specific triggers should fire it? (the user's exact words when they want it)
   - Does it need executable scripts or just instructions?
   - Any reference materials to bundle?
   - User-level or repo-level?

2. **Draft the skill** — create:
   - `SKILL.md` with concise instructions (≤100 lines preferred)
   - Additional reference files (`REFERENCE.md`, `EXAMPLES.md`) only if content exceeds 100 lines
   - Utility scripts only if deterministic operations are needed

3. **Review with user**:
   - Does this cover the use cases?
   - Anything missing or unclear?
   - Is the trigger sentence in the description specific enough?

## Folder layout

```
~/.copilot/skills/<skill-name>/
├── SKILL.md           # Main instructions (required)
├── REFERENCE.md       # Detailed docs (only if needed)
├── EXAMPLES.md        # Usage examples (only if needed)
└── scripts/           # Utility scripts (only if needed)
    └── helper.js
```

## Hybrid frontmatter schema (the Reif standard)

```yaml
---
name: <kebab-case>                    # required; must match folder name
description: <trigger sentence>       # required; "Use when…" with 2-3 outcome keywords
tools: [read, search, edit, create, bash]   # minimum needed
# Optional, only when the skill needs them:
argument-hint: "<what the argument means>"
allowed-tools: [<narrower allow-list>]
model: <model-id>                     # only if a specific model is preferred
disable-model-invocation: true        # only when the skill should fire only on explicit /<name>
---
```

## Description: the most important field

The `description` is **the only thing the orchestrator sees** when deciding which skill to load. It is surfaced in the system prompt alongside every other installed skill.

**Goal:** give the orchestrator just enough info to know (1) what capability this skill provides and (2) when/why to trigger it.

**Rules:**
- ≤200 chars preferred, hard cap 1024
- Third person
- First clause: what it does
- Second clause: `Use when <specific triggers>` — list 2-3 outcome keywords or trigger phrases the user is likely to say
- No marketing language ("powerful", "robust", "comprehensive")
- No banned filler: "delve", "seamless", "cutting-edge", etc.

**Good:**
```
Disciplined diagnosis loop for hard bugs. Reproduce → minimise → hypothesise → instrument → fix. Use when user says "diagnose this", "debug this", reports a bug, or describes a performance regression.
```

**Bad:**
```
Helps with debugging.
```
The bad example gives the orchestrator no way to distinguish this from any other code-related skill.

## When to add scripts

Add utility scripts when:
- Operation is deterministic (validation, formatting, file globbing)
- The same code would otherwise be regenerated repeatedly
- Errors need explicit handling

Scripts save tokens and improve reliability vs LLM-generated code.

## When to split files

Split into separate files when:
- `SKILL.md` exceeds ~100 lines
- Content has distinct sub-domains
- Advanced features are rarely needed (progressive disclosure)

## Overlap check (before creating)

Before creating a new skill, search `~/.copilot/skills/` for overlap. Existing user skills (as of authoring): `researcher`, `code-reviewer`, `test-writer`, `context-hygiene`, `commit-hygiene`, `artisan-ux`, `multi-objective-review`, `visual-asset-generator`, `autonomous-iteration`, and the Pocock-derived cluster (`handoff`, `caveman`, `grill-with-docs`, `grill-me`, `tdd`, `diagnose`, `triage`, `to-prd`, `to-issues`, `zoom-out`, `prototype`, `improve-codebase-architecture`, `context-save`, `context-restore`, `summarize-then-continue`).

If there's overlap, decide explicitly: extend the existing one, or differentiate the new one in the description (different workflow, different trigger).

## Review checklist

After drafting, verify:

- [ ] Description includes specific triggers (`Use when…` with 2-3 keywords)
- [ ] Description ≤200 chars (or justified longer)
- [ ] `name` matches folder name (kebab-case)
- [ ] `tools` is the minimum needed (no kitchen-sink `[*]`)
- [ ] SKILL.md ≤100 lines (or content split into REFERENCE.md)
- [ ] No time-sensitive information (versions, dates)
- [ ] Consistent terminology
- [ ] Concrete examples included where the prompt benefits from them
- [ ] No banned slop phrases
- [ ] No overlap with existing skills (or overlap is intentional and differentiated)

---

> Adapted from [`mattpocock/skills`](https://github.com/mattpocock/skills/tree/f304057d/skills/productivity/write-a-skill) (SHA `f304057d`, SKILL `7339c8a3`). Extended with the hybrid frontmatter schema, overlap-check step, and banned-slop rules from the user's global instructions.
