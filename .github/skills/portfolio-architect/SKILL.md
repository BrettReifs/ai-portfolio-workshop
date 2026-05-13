---
name: portfolio-architect
description: Turn raw user info into a structured portfolio site outline with sections, primary CTA, and success metrics. Use when designing portfolio structure, choosing what sections to include, deciding single-page vs multi-page, grouping projects into cards, or defining the primary call-to-action.
---

# portfolio-architect

Convert raw inputs (role, audience, projects) into a section-by-section site outline with a defined primary CTA.

## When to use
- User has rough materials (bio, projects, links) and asks "what should my portfolio look like?"
- User is unsure whether to go single-page or multi-page
- User has too many projects and needs help selecting

## Inputs
- Role and one-line value prop
- Primary audience and desired action (the ONE thing visitors should do)
- 3-6 raw project bullets (don't require polish — this skill tightens them)
- Optional: writing samples, talks, open source repos

## Process
1. Identify the **single primary CTA** from the desired action. Everything supports it.
2. Group projects into 3-6 cards. Reject duplicates and weak entries.
3. Decide page count: single-page if ≤6 projects and no blog; multi-page otherwise.
4. Output a section list. Each entry: name, purpose, content brief, success metric.
5. Place the primary CTA in BOTH hero and contact for consistency.

## Output format
```
SECTIONS:
1. Hero — purpose: 3-second identity. Brief: name, role, value prop, CTA. Metric: bounce <40%.
2. Selected work — purpose: prove the claim. Brief: 4 cards. Metric: project click-through ≥30%.
3. About — purpose: human context. Brief: 2 paragraphs. Metric: scroll-depth past this section.
4. Contact — purpose: convert. Brief: email + 2 supporting links. Metric: contact action.
```

## Acceptance criteria
- Every section has a defined purpose AND a success metric
- ≤ 6 sections for a single-page portfolio
- Primary CTA appears in hero AND contact
- No "Resume" section unless the audience is specifically recruiters
