# Personal Portfolio — Plan & Design Outline

A single-page, dark-themed portfolio with smooth scroll between sections, fully responsive, and built on the existing TanStack Start + Tailwind v4 stack.

## Sections (single-page, anchor scroll)

1. **Hero** — Name, one-line role ("Computer Engineering Student • Full Stack Developer • Java Enthusiast"), primary CTA "View work" + secondary "Download resume". Subtle animated gradient orb / grain texture in background.
2. **About Me** — 2–3 short paragraphs, portrait image on the left (or above on mobile), 3 quick stats (years of experience, projects shipped, location).📍 Pune, India
  🎓 B.E Computer Engineering (2027)
3. **Projects** — 3 featured project cards with cover image, title, 1-sentence description, tech chips, and links (Live demo / GitHub).
4. **Tech Stack** — Grouped by Frontend, Backend, Tools. Icon + label tiles with hover lift.
5. **Contact / Footer** — Email, social links (GitHub, LinkedIn, X), copyright.

Sticky top nav with smooth-scroll links and a persistent "Resume" button.

## Design Direction

**Mood:** modern, confident, editorial. Inspired by Linear / Vercel / Rauno — restrained palette, sharp typography, generous spacing, one accent color used sparingly.

**Color scheme (dark)**

- Background: near-black with a hint of blue `oklch(0.16 0.02 260)`
- Elevated surface (cards): `oklch(0.20 0.02 260)`
- Border: subtle `oklch(1 0 0 / 8%)`
- Foreground: soft white `oklch(0.96 0.005 260)`
- Muted text: `oklch(0.68 0.02 260)`
- Accent: electric lime `oklch(0.85 0.18 130)` (used only for CTAs, link hover, active dot)
- Optional subtle radial gradient behind hero from accent → transparent

**Typography**

- Display / headings: **Instrument Serif** (high-contrast serif, large hero) or **Space Grotesk** for a more techy feel
- Body: **Inter** (already common) or **DM Sans**
- Mono accents for tech-stack labels: **JetBrains Mono**
- Sizes: hero 64–96px desktop / 40–48px mobile, section titles 36–48px, body 16–18px, generous line-height (1.5–1.7)

**Layout & spacing**

- Max content width ~1200px, gutter 24–32px
- Section vertical padding 96–144px desktop, 64px mobile
- 12-col grid where useful; project cards in a 3-col → 1-col responsive grid
- Tech stack as 4-col → 2-col tile grid

**Interactive elements**

- Sticky nav with backdrop blur and a thin border-bottom on scroll
- Smooth scroll between anchors
- Project cards: subtle lift + accent border on hover, image zoom on hover
- Tech tiles: glow/scale on hover
- Hero: animated gradient blob or grain overlay (CSS only, no heavy lib)
- Section reveal animations via framer-motion (fade + 12px slide up)
- Focus rings using accent color for accessibility

## Resume Download

- Place a `resume.pdf` in `public/` and link from nav + hero + footer using `<a href="/resume.pdf" download>`.
- A placeholder PDF will be added; user replaces it with their real file.

## Responsive Behavior

- Mobile-first; nav collapses to a hamburger sheet under `md`
- Hero stacks vertically, image (if any) above text
- Project grid: 3 → 2 (tablet) → 1 (mobile)
- Tech tiles: 4 → 3 → 2 columns

## Technical Plan

Stack already in place: TanStack Start, React 19, Tailwind v4, shadcn/ui, framer-motion (add).

**Files to create**

- `src/routes/index.tsx` — replace placeholder with the portfolio page composing the sections below
- `src/components/portfolio/Nav.tsx`
- `src/components/portfolio/Hero.tsx`
- `src/components/portfolio/About.tsx`
- `src/components/portfolio/Projects.tsx`
- `src/components/portfolio/TechStack.tsx`
- `src/components/portfolio/Footer.tsx`
- `src/data/portfolio.ts` — centralized content (name, bio, 3 projects, tech list, social links)
- `src/assets/` — generated hero portrait + 3 project cover images (via image generation)
- `public/resume.pdf` — placeholder resume file

**Files to update**

- `src/styles.css` — add dark portfolio tokens (background, accent, surface), add Instrument Serif + Inter + JetBrains Mono via `<link>` in `__root.tsx`, register `--font-display`, `--font-sans`, `--font-mono` in `@theme`
- `src/routes/__root.tsx` — add Google Fonts `<link>` tags, set `<html class="dark">` so dark tokens apply, update default meta title/description for SEO
- `package.json` — add `framer-motion`

**SEO**

- Title: "&nbsp; — &nbsp;" (<60 chars)
- Meta description (<160 chars), og:title, og:description, og:type=website
- Single H1 in hero, semantic `<section>` per area, alt text on every image

**Out of scope (can be added later)**

- Contact form with backend submission (currently just a mailto link)
- Blog / case-study detail pages
- Light-mode toggle

## Open Questions (will use sensible defaults if not answered)

- Your name, role, and one-line bio?
- The 3 projects (title, 1-line description, tech, links)?
- Social links (GitHub, LinkedIn, X, email)?
- Do you want the serif (Instrument Serif) or techy (Space Grotesk) display font?

If you don't answer, I'll ship with tasteful placeholders you can edit in `src/data/portfolio.ts` and a placeholder `resume.pdf`.

Approve and I'll build it.