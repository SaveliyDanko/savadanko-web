# Savadanko Brand Concept

> **Refined dark portfolio aesthetic.** Disciplined typography, ultra-dark surfaces, a single confident violet, and a signature cyan→purple gradient reserved for brand moments.

---

## 1. Brand essence

| | |
|---|---|
| **Personality** | Senior, technical, calm. Proof-driven, not flashy. |
| **Visual mood** | Quiet luxury for engineers. Dark canvas, generous whitespace, one bold accent. |
| **Audience** | Hiring managers, peer engineers, technical recruiters. |
| **Anti-personality** | Loud, gimmicky, "AI-purple-on-white", crypto-startup vibes. |

The brand is **80% restraint, 20% signature**. The cyan→purple gradient and the violet primary are the only loud notes — everything else stays dark, monochrome, and structural.

---

## 2. Logo & mark

The mark is a stylised `</>` chevron pair, rendered in the **brand gradient** `#06B6D4 → #8B5CF6` on a near-black background. It pulses gently in the preloader (1.8s ease-in-out, opacity 0.6 → 1 with a `drop-shadow` glow).

**Rules**
- Always on dark surface (`--surface-base` or darker). On light backgrounds, switch to a solid `--brand-primary` fill — do not use the gradient on white.
- Minimum height: 32px.
- Clear space: at least the width of one chevron arm on every side.
- Never recolour, rotate, or distort.

---

## 3. Color philosophy

### The hierarchy

```
Surface (90%)  →  Text (8%)  →  Primary (1.5%)  →  Brand gradient (0.5%)
```

The brand only works when the violet is **rare**. If everything is purple, nothing is.

### Roles

| Token | Role |
|---|---|
| `--brand-primary` `#8b5cf6` | Single CTA per screen. Focus rings. One key accent per section. |
| `--brand-section-label` `#6f87ff` | Section eyebrows ("Projects", "About"), active nav, decorative glows. Cooler periwinkle. |
| `--brand-accent-cyan` `#06b6d4` | **Only** as the start of the signature gradient. Never a flat color in the UI. |
| `--brand-accent-green` `#34d399` | Reserved for status (success, online, available for hire). |
| `--surface-base` `#010105` | The whole page lives here. |

### When in doubt, go darker

The default surface is **#010105** — almost black with a faint blue undertone. Cards are barely lifted (`#0f0f13`). Borders are nearly invisible (`rgba(255,255,255,0.04)`). Depth comes from glow halos and inset highlights, not from grey gradations.

---

## 4. Typography

### Pairing

- **Inter** — UI, headings, body. Workhorse with neutral character.
- **JetBrains Mono** — code, version numbers, technical micro-labels.

### Scale (mobile → desktop)

| Use | Size | Weight | Tracking |
|---|---|---|---|
| Hero headline | `7xl → 9xl` (72 → 128px) | 700 | -0.025em |
| Section H2 | `3xl → 4xl` (30 → 36px) | 700 | -0.025em |
| Card title | `xl` (20px) | 600 | -0.025em |
| Body lead | `lg → xl` (18 → 22px) | 400 | normal |
| Body | `base` (16px) | 400 | normal |
| UI label | `sm` (14px) | 500 | normal |
| Micro-label | `xs` (12px) | 500 | normal |
| Eyebrow caps | `xs` (12px) | 600 | 0.04em uppercase |

### Rules
- Headings always `tracking-tight` (-0.025em) — confident, not breezy.
- Hero word-mark uses gradient text + shimmer animation (6s loop).
- Never set body text smaller than 14px.
- Line-height: 1.1 for hero, 1.25 for headings, 1.5–1.6 for body.

---

## 5. Spacing & rhythm

Built on an **8-point grid** (Tailwind's default scale).

| Context | Value |
|---|---|
| Tight inline gap | `gap-2` (8px) |
| Default inline gap | `gap-4` (16px) |
| Card padding | `p-6` to `p-8` (24–32px) |
| Section side padding | `px-6` (24px) — at every breakpoint |
| Section vertical padding | `py-20 sm:py-28` (80 → 112px) |
| Block separation inside section | `mb-12` (48px) |
| Container max width | `max-w-6xl` (1152px) — single value, never wider |

The container is **always** 1152px max with 24px side padding. Don't introduce a second container width — the consistency of edge alignment is part of the brand.

---

## 6. Radius

| Use | Token | Why |
|---|---|---|
| Inputs, default buttons | `rounded-lg` (8px) | Calm, technical |
| Cards, tile surfaces | `rounded-2xl` (16px) | Soft but architectural |
| Pills, badges, primary CTA | `rounded-full` | Friendly, brand moment |
| Mobile menu items | `rounded-2xl` | Matches card language |

**Never** mix `rounded-md` and `rounded-3xl` in the same screen — pick the family and stay there.

---

## 7. Shadows & glow

This brand replaces "boxy shadows" with **glow**. Three building blocks:

1. **Inset highlight** on cards — a 1px white-2% line at the top edge. Creates depth without a frame.
2. **Soft brand glow** on hover — `0 10px 24px rgba(99,102,241,0.14)`. Periwinkle, not violet — slightly cooler than the primary so it reads as ambient light, not as a button.
3. **Decorative halos** in hero sections — large blurred circles (400–500px) at 3–5% opacity, placed off-canvas. Never in foreground.

Primary buttons get a violet aura: `0 10px 25px -5px rgba(139,92,246,0.25)`, intensifying to `0 0 30px rgba(139,92,246,0.4)` on hover.

---

## 8. Motion

| Pattern | Duration | Easing |
|---|---|---|
| Color/border hover | 150–200ms | `ease-out` |
| Menu open | 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Theme toggle | 500ms | linear (CSS variables transition) |
| Hero reveal | 600ms with 150ms stagger | spring |
| Stat count-up | 1200ms | linear |
| Shimmer on gradient text | 6s loop | ease-in-out |
| Marquee | 28s loop | linear |
| Button press | spring (stiffness 400, damping 17) | — |

### Rules
- One **hero** reveal per page (Framer Motion staggered). After that, motion is reactive (hover, scroll), not autoplaying.
- Hover translates +0.04 scale max — **never** more than 1.05x.
- `prefers-reduced-motion` is respected (skip shimmer, count-up, marquee).

---

## 9. Component principles

### Buttons
- **Primary** — gradient pill, white text, violet aura. One per screen.
- **Secondary** — `surface-light` fill, default border, neutral text.
- **Ghost** — text + background-on-hover, no border.

Border-radius: `lg` for default, `full` for primary CTA in hero/contact.

### Cards
- Background: gradient from `--card-from` to `--card-to` (top→bottom, ~5% lighter at top).
- Border: `border-card` — almost invisible, defined more by the gradient than the line.
- Hover: nudge up `-translate-y-0.5`, scale `1.03`, switch to soft brand glow.

### Badges & pills
- Capsule shape (`rounded-full`).
- 12–14px text, weight 500.
- Two variants: solid violet-tint (`bg-primary/10`, `text-primary-light`) or technology-coloured (each tech has its own light-and-dark colour pair, see `TechnologyBadge.tsx`).

### Forms
- Input bg: `rgba(255,255,255,0.03)` — barely-there.
- Border: `rgba(255,255,255,0.08)` → `--border-focus` `#3453a8` on focus.
- Always `rounded-lg`, padding `px-4 py-3`.

### Section heading pattern
1. Eyebrow (`text-xs` uppercase, `--brand-section-label`)
2. H2 (`text-3xl sm:text-4xl`, bold, tight tracking)
3. Subtitle (`text-text-muted`, 1 line)

Centered for marketing sections, left-aligned for content sections.

---

## 10. Tone of voice

The site speaks like a senior engineer in a calibration interview: **precise, evidence-led, light**.

### Do
- "Built X to solve Y. Result: Z."
- Numbers when you have them. Stack names spelled correctly.
- Short sentences. Active voice.
- Bilingual when relevant (EN/RU) — the brand is multilingual by design.

### Don't
- "Passionate about leveraging cutting-edge technologies" 🚫
- Emoji in body copy 🚫 (a single `→` arrow is fine)
- "Coding ninja", "rockstar", "wizard" 🚫
- ALL-CAPS shouting except for `~10ch` micro-labels

### Voice samples

> ✅ "Backend engineer. I build distributed systems in Java and Kotlin and care about the parts that don't break at 3am."

> ❌ "🚀 Passionate full-stack ninja crafting amazing experiences with cutting-edge tech!"

---

## 11. Layout grammar

### The page is a stack
- Header (sticky, glass, 64px tall, scroll progress bar at the bottom)
- Hero (100vh, asymmetric grid: text left, decorative element right)
- Sections (each `py-20 sm:py-28`, single container width)
- Footer (gradient halo at top, contact CTA, then a thin info bar)

### Asymmetry, not chaos
Hero is **2-column** on desktop, single column on mobile. Cards align to the same 1152px container. Decorative elements (orbiting skills, glow halos) break the grid intentionally — never stuff text breaks it.

### Glass sticky header
`bg-surface/80 backdrop-blur-md` with a 1px gradient progress bar at the bottom. The progress bar is *the* signature — copy it across projects.

---

## 12. Theme switching

Both themes ship by default. Toggle by setting `data-theme="light"` on `<html>`.

- Dark = primary brand state. Hero feels cinematic here.
- Light = utility state. Feels like a respectful editorial reading mode.

Brand primary stays purple in both themes. Surface, text, and border tokens flip. The signature gradient becomes 50% opacity in light mode (`--glow-opacity: 0.5`) — it would be too loud at full strength on white.

---

## 13. Reuse checklist for new projects

When starting a new project under this brand:

- [ ] Drop in `tokens.css` (or copy `@theme` block for Tailwind v4)
- [ ] Use `Inter` + `JetBrains Mono` (load from Google Fonts or self-host)
- [ ] Container = `max-w-6xl mx-auto px-6`
- [ ] Section = `py-20 sm:py-28`
- [ ] One primary CTA per screen, brand gradient pill
- [ ] Eyebrow → H2 → subtitle pattern for every section
- [ ] Sticky glass header with scroll progress bar
- [ ] Page background `--surface-base`, never plain `#000`
- [ ] Hover scale max `1.04`, motion duration max `300ms`
- [ ] Brand gradient appears **at most twice** per page
- [ ] Both themes work, default to dark
- [ ] Tone: technical, calm, evidence-led

If a screen feels generic, the issue is almost always: too many violet elements, not enough silence around them.

---

*Brand concept v1.0.0 — derived from `savadanko-web` (commit `main`).*
*Source: https://github.com/SaveliyDanko/savadanko-web*
