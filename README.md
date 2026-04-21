# Timber Factory B2B Site

Premium B2B marketing site for a timber manufacturer built with Next.js 15, React 19, TypeScript and Tailwind CSS.

## What This Project Is

This site is not a generic catalog. It is positioned as a serious, premium, trustworthy manufacturer website for wholesale clients.

Core positioning:
- dark green and black premium industrial palette
- B2B-first messaging
- manufacturer trust signals instead of startup-style gimmicks
- strong production story: forest, drying, calibration, packaging, pickup, custom manufacturing
- modern homepage with background video and sticky storytelling section

## Current Visual Direction

- palette: forest green + charcoal black
- tone: premium industrial, restrained, calm, expensive
- avoid: trendy startup gradients, flashy motion, generic icon-card SaaS feeling
- aim for: serious manufacturer credibility, large typography, strong hierarchy, readable dense information

## Key Features Already Implemented

- homepage hero with background video
- sticky storytelling section with video and 4 production points:
  - drying and moisture control
  - precise dimensions and calibration
  - packaging and pickup
  - custom manufacturing by drawing
- dark premium UI system across buttons, surfaces and supporting sections
- catalog, contacts, production and lead-generation pages
- B2B forms for price request, quote request and callback request

## Video And Media Assets

Public assets:
- `public/videos/hero-forest-woodworking-loop.mp4`
- `public/sjinn-conifer-forest-keyframe.png`

Working artifacts:
- `.artifacts/sjinn-conifer-forest-draft-15s.mp4`
- `.artifacts/sjinn-realistic-woodworking-draft-15s.mp4`
- `.artifacts/sjinn-forest-woodworking-draft-15s.mp4`
- `.artifacts/sjinn-forest-draft-01.mp4`
- `.artifacts/sjinn-conifer-forest-keyframe.png`

## Sjinn Workflow

The project already uses a dedicated Codex skill for Sjinn prompting.

Important workflow:
- draft stage uses cheaper or unlimited-friendly tools first
- final stage uses Seedance 2.0 only when the user explicitly says to move to final
- preferred sequence:
  1. create image/keyframe
  2. create draft motion/video
  3. refine only after visual direction is approved

## Local Development

Install:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Typecheck:

```bash
npm run typecheck
```

## Environment

Use local env only. Do not commit secrets.

Expected variable:

```env
SJINN_API_KEY=your_sjinn_api_key_here
```

## Suggested Next Steps

- create and push a GitHub repository
- clean up file encoding issues in a few older Russian content blocks
- replace more placeholder media blocks with real factory visuals
- continue premium dark theme pass across every remaining page
- add a project-specific context file for future Codex sessions

## Important Note For Future Codex Sessions

Before making large visual changes:
- preserve premium B2B manufacturer tone
- keep the dark green / black palette
- prefer calm industrial storytelling
- avoid generic startup UI patterns
- avoid lightening the homepage back toward black-and-white or beige
