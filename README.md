# François Hugot — Portfolio

Personal portfolio site — Platform DevSecOps Engineer. Built with [Astro](https://astro.build), deployed as a static site.

🔗 Live site: [ciscoinfo.github.io/portfolio](https://ciscoinfo.github.io/portfolio/)

## Stack

- [Astro](https://astro.build) — static site generation, TypeScript (`strict` mode)
- Native CSS (custom properties for design tokens), vanilla JS for interactivity
- No framework dependencies beyond Astro itself

## Development

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
```

Other commands:

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── components/   # small, single-responsibility Astro components
├── data/         # typed content data (projects, skills, etc.)
└── pages/        # routes
```

## Deployment

Static build deployed to GitHub Pages via GitHub Actions on push to `main`.
