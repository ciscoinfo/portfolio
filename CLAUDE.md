# Portfolio v2 — François Hugot

Rebuild of the personal portfolio (developer showcase for job applications). Replaces the old site (`../mypage`, HTML/SCSS/jQuery), which stays intact and is **never modified** from this project — this is an isolated base, rebuilt from scratch.

## Stack

- **Astro** (static output, TypeScript in `strict` mode)
- Modern native CSS (custom properties for design tokens, no preprocessor or CSS framework unless the need arises — see "Design system" below once finalized)
- No jQuery, no unnecessary JS dependency. Vanilla JS only for interactivity (carousel, modal, mobile menu, scroll animations).
- Target deployment: GitHub Pages via GitHub Actions (replaces the old site's manual `build.sh`/`deploy.sh` scripts).

## Working process (follow for this project)

This project follows a staged process with validation at each major transition — don't skip a stage or hardcode unvalidated decisions:

1. **Scoping** — stack, content constraints (private projects, professional experience).
2. **Art direction / mockup** — several visual proposals presented and validated before any final implementation.
3. **Content** — text and media validated before integration.
4. **Implementation** — building components from the validated mockup and content.
5. **QA** — responsive, accessibility, performance.
6. **Deployment** — going live + step-by-step command walkthrough.

## Code quality rules

- **Small, single-responsibility Astro components** (`src/components/`), no duplicated logic across pages.
- **Content data separated from markup**: projects, skills, etc. in typed data files (`src/data/*.ts`), never hardcoded in HTML like the old `modal.js` was.
- **Strict TypeScript** wherever relevant (component props, data structures).
- **Accessibility is non-negotiable**: descriptive `alt` text on every informative image, `aria-label` on icon-only controls (burger menu, carousel arrows), AA-compliant contrast, working keyboard navigation (modal, mobile menu).
- **Mobile-first**, tested on mobile/tablet/desktop before considering a section done.
- **Optimized images** via `astro:assets` (no uncompressed raw images like the old site had).
- **No build artifacts or stray files committed** (nothing like the old `automation.zip` or the duplicated `public/` folder in git — `dist/` stays in `.gitignore`).
- Atomic commits, clear messages (`feat:`, `fix:`, `chore:`...).

## Commands

```bash
npm run dev       # start the local dev server (http://localhost:4321)
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

The Astro CLI can also run the dev server in the background: `astro dev --background`, managed with `astro dev stop` / `astro dev status` / `astro dev logs`.

## Design system

_To be filled in once art direction is finalized (palette, typography, spacing scale, animation style)._
