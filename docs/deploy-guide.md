# Deployment Guide

This repository is prepared for production deployment on both a custom domain and GitHub Pages.

## What is already configured

- Vite `base` support via `VITE_BASE_PATH`
- `BrowserRouter` SPA routes with `basename`
- `public/404.html` redirect fallback for static hosting without rewrites
- `public/_redirects` for Netlify-style rewrites
- `vercel.json` rewrites for Vercel
- `public/robots.txt`
- `public/site.webmanifest`
- `public/favicon.svg`
- route-aware document title and meta tags via `src/app/SiteMeta.tsx`
- configurable production site URL via `.env.production`
- GitHub Actions workflow for GitHub Pages deployment

## Before publishing

1. Copy `.env.production.example` to `.env.production`.
2. Replace `https://your-domain.com` with your real domain.
3. Set `VITE_BASE_PATH=/` for a custom domain or your own server.
4. Keep `VITE_BASE_PATH=/savadanko-web/` for the default GitHub Pages URL.

Example:

```bash
cp .env.production.example .env.production
```

## Build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploy options

### GitHub Pages

The repository now includes `.github/workflows/deploy-pages.yml`.

1. Open repository settings on GitHub.
2. Go to `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` and wait for the workflow to publish `dist/`.

The workflow already builds with `VITE_BASE_PATH=/savadanko-web/` and `VITE_SITE_URL=https://saveliydanko.github.io/savadanko-web`.
If you later connect a custom domain, update those values.

### Vercel

The repository already contains `vercel.json` rewrites for SPA routes.

### Netlify

The repository already contains `public/_redirects`.

### Nginx / your own VPS

Configure all non-file requests to return `index.html`.

Example idea:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Custom domain checklist

1. Point your domain DNS to your hosting provider.
2. Enable HTTPS.
3. Upload the contents of `dist/`.
4. Verify direct opening of routes like `/about` and `/blog/article-1`.
5. Check favicon, manifest, and metadata in the browser.

## SEO notes

`src/app/SiteMeta.tsx` updates:

- `title`
- `description`
- canonical URL
- Open Graph tags
- Twitter tags
- robots meta

For best results, set the real production domain in `.env.production` before building.
