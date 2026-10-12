# Deploy — aion2cheat.org

## GitHub

Repository: **https://github.com/notfaadi/aion2cheats**

```bash
git remote add github https://github.com/notfaadi/aion2cheats.git   # once
git push -u github main
```

## Cloudflare Pages (recommended)

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Select **notfaadi/aion2cheats**.
3. Build settings:

   | Setting | Value |
   |---------|--------|
   | Framework preset | None (or Astro if offered) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | `22` (or set `NODE_VERSION=22` env var) |

4. **Environment variables** (optional): `INDEXNOW_KEY`, `PUBLIC_GA_MEASUREMENT_ID`, etc.
5. Deploy. First build may take several minutes (image optimization).

### Custom domain

1. Pages project → **Custom domains** → **Set up a custom domain**.
2. Add **aion2cheat.org** and **www.aion2cheat.org** (optional).
3. If the domain is already on Cloudflare, DNS records are added automatically (proxied orange cloud).
4. Prefer **aion2cheat.org** (non-www) as canonical. `public/_redirects` sends **www** → apex with **301**.
5. Wait for SSL **Active**, then verify:
   - https://aion2cheat.org/
   - https://aion2cheat.org/robots.txt
   - https://aion2cheat.org/sitemap-index.xml

Checkout redirects use `public/_redirects` and Astro `redirects` in `astro.config.mjs` (Zadeyo affiliate on `/go/aion-2/`).

### CLI deploy (without Git hook)

```bash
npm run build
npx wrangler pages deploy dist --project-name=aion2cheat
```

Requires `wrangler login` once.

## Local development

```bash
npm install
npm run dev
```

Production preview:

```bash
npm run build
npm run preview
```

## Site URL

- Canonical domain: **https://aion2cheat.org**
- Configured in `astro.config.mjs` (`site`) and `src/config/site.ts`
