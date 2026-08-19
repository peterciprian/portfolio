# Portfolio Next

Static Next.js + TypeScript portfolio scaffold intended to replace the legacy Angular implementation while keeping GitHub Pages deployment.

## Structure

- `src/app` contains App Router pages and the shared root layout.
- `src/components` contains reusable presentational components.
- `src/content` contains typed portfolio content that can be updated without touching page markup.
- `src/lib` contains small framework helpers.
- `scripts/build-github-pages.ps1` builds a static export and publishes it into the repository-level `docs` folder.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GitHub Pages build

The existing repository publishes from the root `docs` folder. To generate that output from this app, run:

```bash
npm run build:github
```

The script sets the `/portfolio` base path, runs `next build`, clears `../docs`, copies the static `out` export, and adds `.nojekyll`.

For local production checks without the GitHub Pages base path, run `npm run build`.
