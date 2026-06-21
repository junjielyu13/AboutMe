# junjie.dev — personal site

A dark "dev-terminal" personal website for **Junjie Li** — Software Engineer (Barcelona).
Built from scratch with Next.js 13 (App Router), TypeScript and Tailwind. The whole site is
framed as a terminal: each section is the output of a command (`$ whoami`, `$ ls experience/`,
`$ cat skills.json`).

## Features

- **4 languages** — English, Español, Català, 中文. Auto-detects the browser language and
  remembers your choice (`localStorage`). Switch with the `EN / ES / CA / 中文` toggle.
- **Animated terminal hero** with a boot sequence (respects `prefers-reduced-motion`).
- **Sections** — about, experience timeline, projects, tech stack, contact.
- **CV download** — served from `public/Junjie_Li_CV.pdf`.
- Fully responsive, accessible focus states, SEO/OpenGraph metadata.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build / deploy

```bash
npm run build && npm start
```

Deploys to Vercel as-is (push the repo and import it). Google Fonts (JetBrains Mono + Inter)
are fetched at build time, so a network connection is required when building.

## Where things live

| Path | What |
|------|------|
| `src/lib/content.ts` | All content + the 4-language dictionary. **Edit your info here.** |
| `src/lib/i18n.tsx`   | Language context / switcher logic. |
| `src/components/`    | `Nav`, `Hero`, `Sections`, `ui` (primitives), `Site` (assembly). |
| `src/app/`           | Layout (fonts, metadata) + `globals.css` (theme tokens). |
| `public/Junjie_Li_CV.pdf` | Downloadable CV. |

To update the CV, replace `public/Junjie_Li_CV.pdf`. To tweak the palette, edit the CSS
custom properties (`--ground`, `--accent`, …) at the top of `src/app/globals.css`.
