# Tirta Agung Teknik

Next.js 15 site, exported as static HTML. The primary domain is
`https://tirtaagungteknik.com`; shared business details live in `lib/site.ts`.

## Local development and checks

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check:seo
npm start
```

The preview listens on `127.0.0.1:3000` (`PORT` overrides the port). It serves
the generated `out/` directory, including clean service URLs and real 404s.
Build the site before starting the preview. `next start` is not used because
this project uses `output: 'export'`.

`predev` and `prebuild` generate 640, 960, and 1280 pixel WebP variants from
the source images referenced by `ResponsiveImage`. Generated variants are
ignored by Git. Keep the source images in `public/images/`; do not use
`ResponsiveImage` with a new image until its source is added to
`scripts/optimize-images.mjs`.

## Production hosting

```sh
docker compose up -d --build zpomp
```

The build stage runs `npm ci` and exports the site. The runtime uses Nginx
on container port 80, matching Compose's `3000:80` mapping. The existing
external Docker network `shared_net` must exist.

The checked-in `nginx.conf` serves exported `.html` pages at clean URLs,
returns real 404s, and permanently redirects these aliases to the primary
domain while preserving the path and query string:

- `www.tirtaagungteknik.com`
- `zunaidipompa.zvy.my.id`
- `www.zunaidipompa.zvy.my.id`

The reverse proxy must forward the original `Host` header and route those
domains to this container. DNS and valid TLS certificates for the aliases
must remain in place for HTTPS redirects to work. Redirect HTTP to HTTPS at
the TLS reverse proxy; this container receives HTTP from that proxy.
If hosting `out/` on another service, configure equivalent redirects and
clean URL handling there; Next.js redirects do not execute in a static export.

## SEO configuration

The Depok landing page is temporarily disabled: its source is preserved as
`src/app/service-pompa/depok/page.disabled.tsx`, and its homepage links and
sitemap entry are commented out. To restore it, rename the source to
`page.tsx` and restore those links, the sitemap entry, and the SEO test route.

- Each indexable page declares its own canonical URL. New pages must also be
  added to `src/app/sitemap.ts` and included in `check:seo`.
- `src/app/robots.ts` exports the public crawl rules and sitemap location.
- Shared Plumber/WebSite structured data and page-specific Service data use
  the same business identifier and primary domain.
- Street address, opening hours, prices, review ratings, and a Google Maps
  profile are intentionally not invented. Add verified business details when available.

After deployment, verify `/robots.txt`, `/sitemap.xml`, the homepage canonical,
and a legacy-domain redirect. Submit the sitemap in the primary domain's
Google Search Console property, inspect the homepage URL, and request indexing.
Search Console access and deployment are separate from the local code change;
canonical tags and a sitemap cannot guarantee ranking or indexing.
