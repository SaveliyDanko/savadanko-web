# Savadanko Brand Concept

Reusable design system extracted from [savadanko-web](https://github.com/SaveliyDanko/savadanko-web). Drop it into any new project to keep visual consistency across everything you build.

## What's inside

| File | Purpose |
|---|---|
| `brand-guide.html` | Interactive styleguide. **Open this first** — it's the brand demonstrating itself. |
| `BRAND.md` | Principles, tone of voice, do/don't rules, reuse checklist. |
| `tokens.json` | All design tokens in a structured format (Style Dictionary-friendly). |
| `tokens.css` | Drop-in CSS variables, ready for any project. Includes light/dark theme. |

## Quick start in a new project

### Option A — vanilla CSS / any framework

```html
<link rel="stylesheet" href="./tokens.css" />
```

```css
.button {
  background: var(--brand-primary);
  color: var(--text-heading);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-primary-btn);
}
```

Toggle theme by setting `data-theme="light"` on `<html>`.

### Option B — Tailwind CSS v4 (recommended)

Open `tokens.css`, copy the `@theme` block at the bottom, paste into your `globals.css`. Then use utility classes the same way `savadanko-web` does:

```jsx
<button className="bg-primary text-white rounded-lg px-5 py-2.5 shadow-lg shadow-primary/25">
  View Projects
</button>
```

### Option C — Style Dictionary / Figma tokens / other tooling

Feed `tokens.json` into your tool of choice. The structure follows W3C-style design token conventions.

## The fast checklist

When starting a new project under this brand:

- [ ] Container = `max-w-6xl mx-auto px-6` (1152px max, 24px sides)
- [ ] Section padding = `py-20 sm:py-28`
- [ ] Inter + JetBrains Mono loaded
- [ ] One primary CTA per screen, brand gradient pill
- [ ] Eyebrow → H2 → subtitle pattern for every section
- [ ] Sticky glass header with scroll progress bar
- [ ] Both themes work, default to dark
- [ ] Brand gradient used at most twice per page
- [ ] Hover scale max `1.04`, motion duration max `300ms`

The full version of this checklist lives in `BRAND.md`.

## Versioning

`v1.0.0` — initial extraction from `savadanko-web` (commit `main`).

When you update the source site's design system in `src/styles/globals.css`, regenerate the brand concept by re-running the same process — or just sync `tokens.css` manually.
