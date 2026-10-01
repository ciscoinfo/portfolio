# Portfolio v2 — François Hugot

Refonte du portfolio personnel (vitrine développeur pour candidatures). Remplace l'ancien site (`../mypage`, HTML/SCSS/jQuery), qui reste intact et n'est **jamais modifié** depuis ce projet — c'est une base isolée, repartie de zéro.

## Stack

- **Astro** (sortie statique, TypeScript en mode `strict`)
- CSS natif moderne (custom properties pour les tokens de design, pas de préprocesseur ni de framework CSS tant que le besoin ne s'en fait pas sentir — voir "Design system" ci-dessous une fois validé)
- Pas de jQuery, pas de dépendance JS inutile. JS vanilla uniquement pour l'interactivité (carousel, modal, menu mobile, animations au scroll).
- Déploiement cible : GitHub Pages via GitHub Actions (à mettre en place en phase de déploiement — remplace les scripts manuels `build.sh`/`deploy.sh` de l'ancien site).

## Process de travail (à respecter pour ce projet)

Ce projet suit un process en étapes avec validation à chaque étape charnière — ne pas sauter d'étape ni implémenter en dur des décisions non validées :

1. **Cadrage** — stack, contraintes de contenu (projets privés, expérience pro).
2. **Direction artistique / mockup** — plusieurs propositions visuelles présentées et validées avant toute implémentation définitive.
3. **Contenu** — textes et médias validés avant intégration.
4. **Implémentation** — construction des composants sur la base du mockup et du contenu validés.
5. **QA** — responsive, accessibilité, performance.
6. **Déploiement** — mise en ligne + explication pas-à-pas des commandes.

## Règles de qualité de code

- **Composants Astro petits et responsables d'une seule chose** (`src/components/`), pas de logique dupliquée entre pages.
- **Données de contenu séparées du markup** : projets, compétences, etc. dans des fichiers de données typés (`src/data/*.ts`), jamais codées en dur dans le HTML comme c'était le cas dans l'ancien `modal.js`.
- **TypeScript strict** partout où c'est pertinent (props de composants, structures de données).
- **Accessibilité non négociable** : `alt` descriptifs sur toute image informative, `aria-label` sur les contrôles icône-seule (burger, flèches de carousel), contraste conforme AA, navigation clavier fonctionnelle (modal, menu mobile).
- **Mobile-first**, testé sur mobile/tablette/desktop avant de considérer une section terminée.
- **Images optimisées** via `astro:assets` (pas d'images brutes non compressées comme dans l'ancien site).
- **Pas de fichiers de build ou de fichiers superflus versionnés** (rien d'équivalent à l'ancien `automation.zip` ou au dossier `public/` dupliqué dans git — `dist/` reste dans `.gitignore`).
- Commits atomiques, messages clairs (`feat:`, `fix:`, `chore:`...).

## Commandes

```bash
npm run dev       # démarre le serveur de dev local (http://localhost:4321)
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build de production en local
```

Le CLI Astro peut aussi lancer le serveur en arrière-plan : `astro dev --background`, géré ensuite avec `astro dev stop` / `astro dev status` / `astro dev logs`.

## Design system

_À compléter une fois la direction artistique validée (palette, typographie, échelle d'espacement, style d'animation)._
