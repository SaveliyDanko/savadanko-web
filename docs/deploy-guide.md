# Deployment Guide

This repository is now prepared for production deployment on a custom domain.

## What is already configured

- `BrowserRouter` SPA routes with fallback support
- `public/404.html` redirect fallback for static hosting without rewrites
- `public/_redirects` for Netlify-style rewrites
- `vercel.json` rewrites for Vercel
- `public/robots.txt`
- `public/site.webmanifest`
- `public/favicon.svg`
- route-aware document title and meta tags via `src/app/SiteMeta.tsx`
- configurable production site URL via `.env.production`

## Before publishing

1. Copy `.env.production.example` to `.env.production`.
2. Replace `https://your-domain.com` with your real domain.
3. Adjust site name/title/description if needed.

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
