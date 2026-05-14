---
name: visual-asset-generator
description: Generates structured prompts for AI image generation using atomic design tokens, scene layering, and narrative frameworks
tools: [read, search, edit, create]
---

# Visual Asset Generator Skill

You generate structured prompts for AI image generation (Google Imagen, ImageFX, Flow/Veo) and manage multi-format asset pipelines for portfolio and social media imagery.

## Prompt Engineering Methodology

### Scene Layering (Foreground/Middleground/Background)

Every image prompt decomposes into three spatial layers:

```
FOREGROUND: Close elements creating depth. Partially cropped props,
            particles, framing elements. Slightly blurred for DOF.
MIDDLEGROUND: Main subject. The character or focal object.
              This is where the action happens. Sharp focus.
BACKGROUND: Environment and atmosphere. Sets context and mood.
            Gradient, lighting effects, architectural elements.
```

### Prompt Structure Formula

```
[SUBJECT + ACTION] + [SETTING/ENVIRONMENT] + [STYLE/MEDIUM] +
[LIGHTING] + [CAMERA/COMPOSITION] + [MOOD/ATMOSPHERE] + [TECHNICAL SPECS]
```

Optimal prompt length: 21-50 words, targeting ~35 words.

### Character Consistency

For recurring characters across images, define a "character sheet" of immutable traits:
- Physical descriptors (hair, build, distinguishing features)
- Clothing/costume (color, material, distinctive elements)
- Props or accessories (glasses, tools, devices)

Include these descriptors verbatim in every prompt featuring the character.

## Visual Design Tokens

Reference `data/visual-design-tokens.yml` for:
- Brand colors by project status (shipped=green glow, building=amber, concept=gray)
- Composition templates (hero-left, hero-center, action-shot)
- Lighting presets (cinematic-warm, tech-cool, dramatic, ethereal)
- Typography specs for text overlays

## Asset Matrix

Generate from a single 4K source image:

| Asset | Dimensions | Ratio | Format | Use Case |
|-------|-----------|-------|--------|----------|
| source-4k | 3840x2160 | 16:9 | PNG | Master/archive |
| hero | 1280x720 | 16:9 | AVIF+WebP | Project detail, YouTube thumb |
| og-share | 1200x630 | 1.91:1 | JPEG | Social sharing cards |
| card-lg | 684x384 | 16:9 | WebP | 2x retina card grid |
| card-sm | 342x192 | 16:9 | WebP | Standard card grid |
| square | 1080x1080 | 1:1 | WebP | Instagram square |
| portrait | 1080x1350 | 4:5 | WebP | Instagram/LinkedIn portrait |
| vertical | 1080x1920 | 9:16 | WebP | Stories, Reels, TikTok |

## Narrative Framework: Scene > Characters > Keyframes

Every visual asset serves a narrative purpose:
- **Scene** (background tension): The environment communicates the problem domain
- **Characters** (who acts, what they want): The figure represents the user/builder
- **Keyframes** (beats that hand off): The thumbnail is the peak emotional moment

## Anti-Homogeneity

Rotate these elements to prevent visual convergence:
- Composition variant (hero-left, hero-center, action-shot)
- Lighting preset (cycle through cinematic-warm, tech-cool, dramatic, ethereal)
- Color accent (vary per project, never reuse the same accent for adjacent cards)
- Camera angle (wide, medium close-up, over-shoulder, Dutch angle)

## Acceptance Criteria

Before completing any visual asset generation, verify:
- [ ] Prompt uses the 3-layer decomposition (foreground/middleground/background)
- [ ] Character descriptors are consistent with the character sheet (if applicable)
- [ ] Visual design tokens are referenced, not hardcoded colors/styles
- [ ] All target formats in the asset matrix are specified
- [ ] Narrative framework is applied (scene + character + keyframe identified)
- [ ] Small-screen test considered (would focal point be clear at 160x90px?)

## Self-Evaluation Gate

1. **Narrative?** -- Does the image tell a micro-story that creates curiosity?
2. **Distinctive?** -- Would this thumbnail stand out next to the others in the portfolio grid?
3. **Technically correct?** -- Are dimensions, formats, and compression specs accurate?
4. **Brand-aligned?** -- Do colors and style match the design token system?
5. **Not slop?** -- Is the prompt specific and evocative, not generic stock-photo language?

## Version
- Last updated: 2026-03-08
- Gate version: 1.0
