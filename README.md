# RoboManipal MUJ — Website

A premium, futuristic, immersive website for **RoboManipal MUJ**, the student-driven
robotics & research community at Manipal University Jaipur, managed by the
**ACM SIGBED Student Chapter**.

Design language: luxury dark theme, F1-team energy, cinematic storytelling — built
with horizontal-scroll narrative, a custom cursor, a loading sequence, page
transitions, scroll-reveal animations and animated counters.

---

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** (custom brand design system)
- **Framer Motion** (UI animation, transitions, magnetic buttons, filtering)
- **GSAP + ScrollTrigger** (pinned horizontal-scroll storytelling, parallax)
- **Lenis** (smooth scroll)
- **lucide-react** (icons)

All visuals are generated with SVG/CSS (no external image hosting required), so the
site is fully self-contained and works offline once built.

---

## Requirements

- **Node.js 18.17 or newer** (Node 20 LTS recommended)
- npm (ships with Node)

> Nothing was installed on the machine this was authored on. Run the install step
> below on the device where you actually want to develop/build.

---

## Run it (development)

```bash
cd robomanipal-muj
npm install
npm run dev
```

Open **http://localhost:3000**.

The first `npm install` and first build need internet (to fetch npm packages and the
Google Fonts that `next/font` self-hosts). After that it runs fully offline.

---

## Build a static site (host anywhere, no Node needed)

This project is configured with `output: "export"`, so a production build emits a
folder of plain static files:

```bash
npm run build
```

The static site is generated in **`out/`**. Serve that folder with any static web
server, e.g.:

```bash
npx serve out
```

You can host the contents of `out/` on a company server, the internal AIPPISTONS
Google domain, or a personal machine. (Because Next.js uses absolute asset paths,
open it via a static server rather than double-clicking `index.html`.)

> `npm start` (`next start`) is **not** used with static export — serve `out/` instead.

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, 8-panel horizontal-scroll story, featured robots/projects/research, achievements, stats, join CTA |
| `/about` | Who we are, mission, core values, growth timeline, community impact |
| `/vision` | Cinematic vision, future of robotics, research goals, roadmap, long-term objectives |
| `/team` | Members with category filtering + live search |
| `/work` | Tabbed: Robots · Projects · Research Papers (deep-links: `/work#robots`, `#projects`, `#research`) |
| `/work/robots/[slug]` | Dedicated robot detail page |
| `/work/projects/[slug]` | Dedicated project detail page |
| `/work/research/[slug]` | Dedicated research-paper detail page |
| `/achievements` | Counters, category-grouped tiles, chronological timeline |
| `/achievements/[slug]` | Dedicated achievement detail page + event gallery |
| `/contact` | Contact info + form (opens the visitor's email client, no backend needed) |

---

## Customizing content

All content lives in **`src/data/`** — edit these plain TypeScript files, no code
changes needed. Detail pages are generated automatically from this data.

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Site name, tagline, email, location, social links, headline stats |
| `src/data/robots.ts` | Robots (specs, metrics, stack, highlights) → robot detail pages |
| `src/data/projects.ts` | Projects (tech, features, outcome) → project detail pages |
| `src/data/research.ts` | Research papers (authors, abstract, keywords, PDF) |
| `src/data/team.ts` | Team members by category (name, role, bio, LinkedIn) |
| `src/data/achievements.ts` | Achievements (event, year, position, story, highlights) |

### Add real images / PDFs
- Put files in the **`public/`** folder. A file at `public/papers/vio.pdf` is served
  at `/papers/vio.pdf`.
- For research papers, change each `pdf: "#"` in `src/data/research.ts` to its real
  path, e.g. `pdf: "/papers/vio.pdf"`.
- Member photos and robot/event photos: the cards currently use generated SVG/initials
  visuals. To use real photos, drop them in `public/` and swap the visual blocks in the
  relevant card/detail components for `<img src="/..." />`.

### Brand colors
Defined once in `tailwind.config.ts` and `src/app/globals.css`:
`cotton #EDE9DD` · `cherry #821010` · `maroon #5B0300` · `noir #1F1717`.

---

## Project structure

```
src/
  app/                     # routes (App Router) + global styles
  components/
    home/                  # homepage sections (hero, horizontal story, etc.)
    layout/                # navbar, footer
    cards/                 # reusable robot/project/paper/member/achievement cards
    ui/                    # cursor, loader, transitions, reveal, counter, visuals
    providers/             # Lenis smooth-scroll provider
    detail/                # shared detail-page pieces
    team/ work/ contact/   # interactive view components
  data/                    # ← all editable content
  lib/                     # small utilities
```

---

## Notes
- Animations respect `prefers-reduced-motion`.
- The horizontal-scroll story is pinned on desktop (≥1024px) and gracefully becomes a
  vertical stack on tablet/mobile.
- The custom cursor only activates on precise-pointer (desktop) devices.
