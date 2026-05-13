---
name: portfolio-architect
description: 'Turn raw user info into a structured portfolio site outline with sections, CTAs, and success metrics. Use when: designing portfolio structure, choosing sections, outlining a site, deciding single-page vs multi-page, grouping projects into cards, defining primary CTA.'
---

# Skill: portfolio-architect

Turns raw user info into a structured site outline.

## Trigger phrases
- "design my portfolio structure"
- "what sections should my portfolio have"
- "outline my portfolio site"

## Inputs
- Role, audience, desired action
- 3-6 raw project bullets
- Optional: writing samples, talks, open source

## Process
1. Identify the **single primary CTA** based on desired action
2. Group projects into 3-6 cards; reject duplicates and weak entries
3. Decide page count: single-page if ≤6 projects + no blog; multi-page otherwise
4. Output a section list with: name, purpose, content brief, success metric

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
- No more than 6 sections for a single-page portfolio
- Primary CTA appears in hero AND contact (consistency)
- No "Resume" section unless audience is recruiters specifically
