# Portfolio v2 — François Hugot

Rebuild of the personal portfolio (developer showcase for job applications). Replaces the old site (`../mypage`, HTML/SCSS/jQuery), which stays intact and is **never modified** from this project — this is an isolated base, rebuilt from scratch.

Live site: https://ciscoinfo.github.io/portfolio/ (GitHub Pages, repo `ciscoinfo/portfolio`).

## Project status (last updated 2026-10-10)

**Stage 4 (implementation) is complete and the owner validated the look and content.** Remaining: stage 5 (QA) and stage 6 (deployment verification).

- Done: all sections built as Astro components from the validated "Prism" design: Nav, Hero, Track record, About, Skills, Projects (alternating rows + gallery modal), Contact/footer. Deployment workflow written (`.github/workflows/deploy.yml`).
- Not done yet:
  - QA pass: real-phone/mobile check (columns were verified, horizontal overflow at 375px was not), accessibility audit (contrast, keyboard, focus trap in the modal), performance.
  - SEO/sharing: page `<meta name="description">`, Open Graph tags/preview image.
  - Images are served as-is from `public/images/` (not through `astro:assets`); the two Pathfinding GIFs are ~0.6 MB each. Revisit during QA.
  - Confirm in GitHub that Pages is enabled with Source = "GitHub Actions" and that the first deploy succeeded.

## Stack

- **Astro** (static output, TypeScript in `strict` mode)
- Native CSS with custom properties (`src/styles/global.css`); no preprocessor or framework.
- No jQuery, no unnecessary JS dependency. Vanilla JS only (scroll reveal, project gallery modal).
- Deployment: GitHub Pages via GitHub Actions on every push to `main`.

## Site structure

`src/pages/index.astro` renders, in order: `Nav`, `Hero`, `TrackRecord`, `About`, `Skills`, `Projects`, `ProjectModal`, `Contact`.

| What to change | Where |
|---|---|
| Projects (title, summary, tags, cover, gallery images) | `src/data/projects.ts` |
| Skill rows | `src/data/skills.ts` |
| Track-record stats and highlights | `src/data/trackRecord.ts` |
| Bio text, certification badges, Medium link | `src/components/About.astro` |
| Hero text, LinkedIn/GitHub links | `src/components/Hero.astro`, `src/components/Contact.astro` |
| Images | `public/images/` (referenced from the data files as `/images/...`) |
| All styling and design tokens | `src/styles/global.css` |

The project gallery is one shared modal (`ProjectModal.astro`): every element with `data-project-index` opens it. Images may be PNG/JPG/animated GIF.

## Design system

- **Direction: "Prism", classic and minimal.** The owner explicitly rejected any gamified/illustrated concept: the site must stay coherent end to end (all minimalist, never a gamified island).
- Fonts: Space Grotesk (headings), IBM Plex Sans (body).
- Palette (tokens in `:root`): violet `#330867`, sapphire `#0B6A8E`, pacific `#31A7BB`, orange `#FF7A1F` / light `#FFB27A`, ink/dark `#1A1A22`, page `#FBFAF7`, tint `#EFF3F6`.
- **Section rhythm (do not break):** gradient hero → dark track record → light about → tint skills → light projects → dark footer. Adjacent sections must never share the same flat background. All sections are flat rectangles (no diagonals).
- Full-bleed sections with one `.wrap` container (max 1440px, side padding 96 → 48 → 20px).
- Projects: alternating rows (screenshot on one side, text on the other), no gray frame around screenshots, no overlays or badges on images, whole row clickable. Generous spacing was a deliberate choice; do not tighten it.
- Skills: numbered minimalist rows with a scroll-reveal animation; accent line colors per row.

## Content rules (public repo and public site)

- **No email address anywhere** (LinkedIn is the monitored channel; GitHub also linked).
- **Never name the employer, teams, internal tools/projects, colleagues, grade/salary or regrading context, or describe incidents, audits or security findings.** The site is linked to a LinkedIn profile, so specifics could identify the employer. Describe responsibilities generically.
- No employer-owned work as a project (a mixed work/personal tool was deliberately excluded).
- Bio facts: scientific background in physics and computer science, then ~13 years as a **primary school teacher** ("professeur des écoles", never a physics/CS subject teacher), then a career change to platform engineering. Title: "Platform DevSecOps Engineer".
- Project demos use fake data only (seeded demo data, synthetic emails). Never real financial data or real emails.
- Content must be validated by the owner before integration; propose, then implement.

## Working process (follow for this project)

Staged process with validation at each major transition:

1. **Scoping** — stack, content constraints. *(done)*
2. **Art direction / mockup** — proposals validated before implementation. *(done)*
3. **Content** — text and media validated before integration. *(done)*
4. **Implementation** — components from validated mockup and content. *(done)*
5. **QA** — responsive, accessibility, performance. *(next)*
6. **Deployment** — go live + step-by-step command walkthrough. *(next)*

The owner is not comfortable with the tooling and will not maintain the code himself: Claude maintains it, but the code must stay clean and human-readable. He wants exact git commands explained, and he runs `git push` himself. Mockups live in `mockups/` and personal notes/scripts in `local_dev/`; both are gitignored.

## Code quality rules

- Small, single-responsibility Astro components (`src/components/`), no duplicated logic.
- Content in typed data files (`src/data/*.ts`), never hardcoded in markup (the About text and badges are the current exception).
- Strict TypeScript; accessibility is non-negotiable (alt text, `aria-label` on icon-only controls, AA contrast, keyboard navigation).
- Mobile-first, tested on mobile/tablet/desktop before a section counts as done.
- No build artifacts or stray files committed (`dist/` is gitignored).
- Atomic commits with clear messages (`feat:`, `fix:`, `chore:`, `docs:`).

## Gotchas

- The site is served under a sub-path: `astro.config.mjs` sets `site: 'https://ciscoinfo.github.io'` and `base: '/portfolio/'`. Locally the site is at **http://localhost:4321/portfolio/** (the trailing slash is required; without it Astro answers 404).
- Never hardcode root-absolute asset URLs in markup. Use `import.meta.env.BASE_URL` (see `Hero.astro`, `Projects.astro`, `ProjectModal.astro`); data files keep `/images/...` and the components prepend the base.
- Skill rows reveal via `IntersectionObserver`; in the automated browser pane this can lag, which is a rendering artifact, not a bug.
- Windows/automated-browser quirks: screenshots sometimes time out or render blank after scrolling; retry or open a fresh tab.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321/portfolio/
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

Updating the live site: edit locally, check with `npm run dev`, then `git add`, `git commit`, `git push` to `main`. GitHub Actions rebuilds and redeploys automatically (follow it in the repo's "Actions" tab).
