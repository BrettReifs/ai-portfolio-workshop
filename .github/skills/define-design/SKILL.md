---
name: define-design
description: Deconstruct reference sites, screenshots, or component libraries into design tokens and lock them into DESIGN.md. Use when picking an aesthetic direction, extracting a color palette or type system from a reference, updating an existing DESIGN.md, or verifying WCAG contrast ratios across a token set.
---

# define-design

Deconstruct reference sources and write the result into `DESIGN.md` as a spec-compliant token system. This skill owns the **what** of visual language: palette, type, spacing, radius, shadow, and component tokens. Implementation (HTML/CSS structure) belongs to `frontend-design`.

## When to use
- User has reference sites, screenshots, or a component library and wants tokens extracted
- User needs to pick ONE aesthetic direction and lock it in
- User wants to create or update `DESIGN.md` from observed design patterns
- User needs WCAG contrast verified across a token set

## Inputs
- 1-3 reference site URLs OR screenshots OR an existing HTML/CSS file
- Aesthetic direction: editorial-minimal, neo-brutalist, glass+gradient, terminal-monospace, cinematic-showcase, or custom
- Dark mode preference: yes / no / auto
- Existing `DESIGN.md` to update (optional)

## Process
1. **Pick the aesthetic** — exactly one. Mixing produces slop.
2. **Deconstruct sources** — extract colors, type stacks, spacing rhythm, radius, shadow, and component patterns. Name what was borrowed and from where.
3. **Build the token maps** — `colors`, `typography`, `rounded`, `spacing` in YAML. Use recommended names from `./reference.md`.
4. **Build component tokens** — reference prior tokens via `{colors.primary}` syntax. Add hover/active as separate entries.
5. **Write the rationale sections** — one paragraph per section explaining why those values exist.
6. **Verify WCAG contrast** — every `textColor`/`backgroundColor` component pair. Body ≥4.5:1, large text ≥3:1.

For token defaults, aesthetic guide, DESIGN.md format spec, and contrast methodology, see `./reference.md`.

## Output — DESIGN.md
Spec-compliant YAML frontmatter (`name`, `colors`, `typography`, `rounded`, `spacing`, `components`) followed by markdown sections in order: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts.

Template examples (each pairs a `DESIGN.md` with its `index.html` implementation):
- `../../../examples/beginner-example/DESIGN.md` — editorial-minimal
- `../../../examples/advanced-example/DESIGN.md` — terminal-monospace
- `../../../examples/netflix-example/DESIGN.md` — cinematic-showcase

Note: example paths cross the skill folder boundary intentionally — they serve double duty as workshop deliverables.

## Acceptance criteria
- Output is a valid DESIGN.md (YAML frontmatter + ordered markdown sections)
- All text/bg component pairs meet WCAG AA
- Single type scale, single spacing scale — no ad-hoc values
- Component tokens use `{path.to.token}` references, not hardcoded values
- Aesthetic is named; reference influence is explicit (which source, what was borrowed)
