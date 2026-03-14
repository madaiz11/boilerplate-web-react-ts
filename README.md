# sales-catalog-app

React + Vite + TypeScript app with Tailwind CSS and Biome.

## Stack

- **Vite 6** – build & dev server
- **React 19** + **TypeScript**
- **Tailwind CSS v4** – via `@tailwindcss/vite`
- **Biome** – lint + format

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint     # biome check
npm run lint:fix # biome check --write
```

## Path alias

Use `@/` for `src/`, e.g. `import { X } from "@/components/X"`.
