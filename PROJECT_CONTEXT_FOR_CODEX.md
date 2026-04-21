# Project Context For Codex

## Short Description

This is a premium B2B manufacturer website for a timber factory. The user wants it to feel like a serious, expensive, trustworthy industrial company website.

## What Matters Most

- premium dark green and black visual direction
- manufacturer credibility over trendy design
- strong B2B conversion path
- readable, calm, high-trust UI
- real production storytelling
- forms and contact paths must feel practical and commercial

## Current State

- homepage has a premium video hero
- homepage has a sticky video storytelling section
- video sequence combines:
  - conifer forest
  - woodworking / timber production
- the site already has lead-gen pages and core manufacturer sections

## Technical Stack

- Next.js 15 app router
- React 19
- TypeScript
- Tailwind CSS
- Zod for form validation

## Important Files

- `src/app/page.tsx`
- `src/components/home/sticky-story-section.tsx`
- `src/app/globals.css`
- `src/components/ui/button.tsx`
- `src/components/ui/surface.tsx`
- `src/components/layout/site-header.tsx`
- `public/videos/hero-forest-woodworking-loop.mp4`

## Brand Direction

Words to optimize for:
- premium
- industrial
- B2B
- calm
- credible
- manufacturer
- dark forest
- charcoal
- precise

Words to avoid:
- startup
- playful
- flashy
- glossy SaaS
- generic template
- trendy gimmick

## UX Direction

- always prioritize readability
- strong vertical rhythm and generous spacing
- strong CTA hierarchy
- supporting proof before asking for conversion
- desktop sections can be cinematic, but mobile must stay simple and robust

## Sjinn / Video Rules

Use the local Codex skill:
- `sjinn-prompting`

Workflow rule:
- draft = cheaper or unlimited-first workflow
- final = Seedance 2.0 only when the user explicitly says to move to final

Current generated assets:
- `public/videos/hero-forest-woodworking-loop.mp4`
- `public/sjinn-conifer-forest-keyframe.png`

## Operational Notes

- do not commit `.env`
- do not expose real API keys in `.env.example`
- preserve local video assets already approved by the user
- if a new Codex session starts on another computer, this file should be read first

## What To Do Next If Asked

If the user asks to continue:
- first inspect homepage and premium dark theme consistency
- then inspect remaining pages for light-theme leftovers
- then continue with GitHub sync or deployment
