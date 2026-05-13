---
name: content-voice
description: 'Rewrite portfolio copy in a consistent voice and strip AI slop. Use when: rewriting hero text, about sections, project descriptions, killing banned phrases, removing emoji, making content sound human, applying voice keywords, fixing generic AI output.'
---

# Skill: content-voice

Applies a defined voice to portfolio copy and removes AI slop.

## Trigger phrases
- "rewrite this in my voice"
- "kill the slop"
- "make this sound less like AI"

## Inputs
- Existing copy (hero, about, project descriptions)
- 3-5 voice keywords (e.g., direct, curious, technical-but-warm)
- Optional: 2-3 sample sentences in the desired voice

## Process
1. Strip banned phrases entirely (no replacement): delve, showcase, robust, seamless, cutting-edge, innovative, game-changer, dive into, deep dive, it's worth noting, in today's fast-paced world, stands as a testament, plays a vital role
2. Replace adjective-heavy claims with verbs + outcomes ("passionate engineer" → "shipped 3 ML pipelines")
3. Cut em dashes; use commas, periods, parentheses
4. Remove emoji from body copy
5. Apply voice keywords as constraints: each paragraph must reflect at least one
6. Read-aloud test: flag any sentence that sounds like generic AI output

## Output format
- Rewritten copy, section by section
- A short "changes" note explaining the biggest 2-3 edits
- A list of any sentences you couldn't improve and why

## Acceptance criteria
- Zero banned phrases remain
- Zero em dashes
- Zero emoji in body copy
- Every paragraph has at least one concrete verb or number
- Voice keywords detectable across the copy
