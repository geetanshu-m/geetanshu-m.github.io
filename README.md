# geetanshu-m.github.io

Personal portfolio of **Geetanshu Mathur** — Software Engineer (Distributed Systems · FinTech).
A static, dark "terminal" themed site built with Nuxt 2 + Tailwind, with content managed
through a secure browser-based CMS.

🔗 **Live:** https://geetanshu-m.github.io

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Nuxt 2 (Vue 2), static target |
| Styling | Tailwind CSS — custom `ink`/`accent` dark theme, Inter + JetBrains Mono |
| Content | Structured JSON in `data/` (+ `@nuxt/content` for markdown) |
| CMS | [Sveltia CMS](https://github.com/sveltia/sveltia-cms) at `/admin` (GitHub OAuth) |
| Hosting | GitHub Pages via GitHub Actions |

## Project structure

```
components/        UI components (HeroTerminal, TimeLine, Expertise, ProjectCard, …)
pages/             index, projects, blog
data/              ← all editable content (JSON)
  settings.json      identity, social links, résumé URL, nav menu
  authorIntro.json   about / bio
  experience.json    work timeline
  projects.json      projects
  mediumArticles.json  writing (Medium links)
assets/css/        global styles + theme base
static/
  admin/           Sveltia CMS (index.html + config.yml)
  favicon.svg      terminal-prompt favicon
.github/workflows/ deploy.yml — build & publish to Pages
docs/SVELTIA_SETUP.md  CMS one-time setup guide
```

## Local development

Requires **Node 18**. (Scripts set `--openssl-legacy-provider` for Webpack 4 / OpenSSL 3.)

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run generate   # static build → dist/
npm run build      # production build
npm run start      # serve a built app
```

## Editing content

**Option A — CMS (recommended).** Visit `/admin`, log in with GitHub, edit
Settings / About / Experience / Projects / Writing, and publish. Each save is a commit;
the GitHub Action rebuilds and deploys automatically. One-time setup (OAuth app + auth
relay + Pages config) is documented in [`docs/SVELTIA_SETUP.md`](docs/SVELTIA_SETUP.md).

**Option B — local CMS (no GitHub login).** Uncomment `local_backend: true` in
`static/admin/config.yml`, then:

```bash
npx decap-server   # local content proxy on port 8081
npm run dev        # in another terminal, open /admin/
```

Re-comment `local_backend` before deploying.

**Option C — edit the files.** The `data/*.json` files are plain and safe to edit by hand.

## Deployment

On every push to `master`, `.github/workflows/deploy.yml` runs `npm run generate` and
publishes `dist/` to GitHub Pages. Set **Settings → Pages → Source → GitHub Actions** once.
