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
- Language: EN + RU. Translations in `src/i18n/en.ts` and `src/i18n/ru.ts`.

## Pages and routes
| Route | Component |
|-------|-----------|
| `/` | HomePage |
| `/about` | AboutPage |
| `/work` | WorkPage |
| `/blog` | BlogPage |
| `/blog/:slug` | BlogArticlePage |
| `/contact` | ContactPage |
| `/privacy` | PrivacyPage |
| `/admin/*` | Admin SPA (separate Vite app in `admin/frontend/`) |

## Admin panel (`admin/`)
CMS for managing projects and blog without editing code.
- `admin/backend/` — Express API, JWT auth (HttpOnly cookie), CRUD + `/api/publish`
- `admin/frontend/` — React SPA served at `/admin/`, base path `/admin/`
- Publish button regenerates `src/data/projects.ts`, `src/data/blog.ts`, runs `npm run build`
- Local: `cd admin/backend && npm run dev` + `cd admin/frontend && npm run dev`

## Design reference
`references/` — target design screenshots + `design-notes.md`. Based on aniketj.dev style.

## Commands
- `npm run dev` — dev server (main site)
- `npm run build` — production build (main site)
- `cd admin/backend && npm run dev` — admin API on port 3001
- `cd admin/frontend && npm run dev` — admin UI on port 5174

## Deploy
Ansible playbook: `ansible-playbook -i ansible/inventory/hosts.ini ansible/deploy.yml`
See `docs/deploy-guide.md` for full instructions.
