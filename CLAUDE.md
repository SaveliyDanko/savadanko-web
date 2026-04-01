# Sava Danko — Portfolio Website

## Stack
React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React

## Architecture
Feature-sliced light. See `Architecture.md` for full details.

- `src/app/` — root component, providers
- `src/pages/` — thin page orchestrators
- `src/sections/` — Hero, About, TechStack, Projects, Experience, Contact
- `src/components/ui/` — Button, Card, Badge, SectionHeading, OrbitingSkills
- `src/components/layout/` — Header, Footer, Section wrapper
- `src/components/common/` — ProjectCard, TimelineItem
- `src/data/` — content separated from UI
- `src/hooks/`, `src/utils/`, `src/types/`, `src/constants/`

## Conventions
- Path alias: `@/` → `src/`. Barrel `index.ts` in each folder.
- Theme: `src/styles/globals.css` (`@theme` block). Ultra-dark palette (#09090b), purple primary (#8b5cf6).
- Content edits go in `src/data/`, not JSX.
- Language: English (Russian localization planned).

## Design reference
`references/` — target design screenshots + `design-notes.md`. Based on aniketj.dev style.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build
