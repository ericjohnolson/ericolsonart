# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Astro dev server (localhost:4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npx astro check` — TypeScript type checking for .astro files

No test framework is configured.

## Architecture

This is a personal art portfolio site for Eric Olson built with **Astro 4** (static site generation, no SSR). Site deploys to `https://ericolson.xyz`.

### Content collections (`src/content/`)

Two Astro content collections defined in `src/content/config.ts`:

- **projects** — art projects with `title`, `date`, `year`, `categories`, `thumbnail`, `images[]`, `excerpt`, `order`. Image galleries are rendered by `ImageGallery.astro` from the `images` array.
- **posts** — blog posts with `title`, `date`, `categories`, `excerpt`.

Both use markdown files. Dates are coerced to strings (handles both YAML bare dates and string dates).

### Layouts

- **BaseLayout** — wraps every page. Takes `bodyClass` (theme class like `"home-wrap gradient"` or `"projects-theme base-theme"`), `navVariant` (`"home"` | `"inner"`), and `showFooter`. Includes scroll-based header hide/show JS inline.
- **ProjectLayout** — extends BaseLayout for individual project/post pages. Adds image gallery, prev/next navigation footer.

### Routing

- `/` — home splash page (navVariant="home", no footer)
- `/work/` — project listing sorted by date descending
- `/projects/[slug]/` — individual project pages with prev/next nav (sorted date ascending)
- `/blog/` — blog listing
- `/blog/[slug]/` — individual blog posts (reuses ProjectLayout with empty images)
- `/about/`, `/research/`, `/archive/` — static pages

### Styling

- Two CSS files: `src/styles/bootstrap-grid.css` (grid only) and `src/styles/site.css` (all custom styles), imported via Astro's CSS pipeline in BaseLayout.
- Duplicate copies exist in `public/styles/` (legacy) — the `src/styles/` versions are canonical.
- Body class themes: `home-wrap gradient`, `about-theme base-theme`, `projects-theme base-theme`, `research-theme base-theme`.
- Fonts: Libre Baskerville (body), Arbutus Slab, Montserrat, Source Sans Pro via Google Fonts.
- Font Awesome 4.4 via CDN for icons.

### Static assets (`public/`)

- `/favicon/` — favicon set
- `/images/` — project/post images referenced by markdown content
- `/crowdofothers/`, `/orbitingtogether/` — standalone legacy HTML microsites served as-is
