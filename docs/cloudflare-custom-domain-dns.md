# Fix: “Hostname already has externally managed DNS records” (100117)

You deploy the Worker **`aion2cheats`** from Git. Attaching **aion2cheat.org** fails until old **A / AAAA / CNAME** records for that hostname are removed from the zone. Workers create their own records when you add a **Custom domain** in the dashboard.

Zone: **aion2cheat.org**  
Zone ID (from `infra/cloudflare-www-redirect.json`): `cb57d63727d4a5ed76c2a3c0ec876c6a`  
Account ID (from build logs): `002527a31814aabc946cce93095ec7a5`

## 1. Detach the hostname from other products (if any)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages**.
2. Open **every** project except **aion2cheats** (especially old **Pages** named `aion2cheat`).
3. **Custom domains** / **Domains** → remove **aion2cheat.org** and **www.aion2cheat.org** if listed.  
   Removing a Pages custom domain **does not** delete DNS; you still do step 2.

## 2. Delete conflicting DNS records

1. **Websites** → **aion2cheat.org** → **DNS** → **Records**.
2. For each row where **Name** is `aion2cheat.org` (apex / `@`) or `www` and **Type** is **A**, **AAAA**, or **CNAME** that points at Pages, old Workers, or another host — **Delete**.

   Typical leftovers:

   | Type  | Name              | Often was                    |
   |-------|-------------------|------------------------------|
   | CNAME | `aion2cheat.org`  | `*.pages.dev` or old target  |
   | CNAME | `www`             | `aion2cheat.org` or Pages    |
   | A     | `aion2cheat.org`  | manual / old origin          |

3. **Keep** (do not delete unless you know you don’t need them):
   - **MX**, **TXT** (Google, SPF, site verification, `asuid`, etc.)
   - **Redirect rules** for www → apex (`infra/cloudflare-www-redirect.json`)

4. Optional: **DNS** → **Records** → confirm there is **no** A/AAAA/CNAME for apex **`aion2cheat.org`** before attaching.

## 3. Attach the domain (you do this manually)

1. **Workers & Pages** → **aion2cheats** → **Settings** → **Domains & Routes**.
2. **Add** → **Custom Domain** → `aion2cheat.org`.
3. Cloudflare creates worker-owned DNS and provisions SSL (often under a minute).
4. Optionally repeat for **www.aion2cheat.org**, or use only apex + existing **Redirect Rule** for www.

## 4. Verify

- https://aion2cheat.org/
- https://aion2cheat.org/sitemap-index.xml  
- Worker deploy should finish without `Invalid _redirects` or `100117`.

## API (optional)

Create an API token with **Zone → DNS → Edit** for `aion2cheat.org`.

List records for the apex:

```bash
curl -s -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/zones/cb57d63727d4a5ed76c2a3c0ec876c6a/dns_records?name=aion2cheat.org"
```

Delete by id (replace `RECORD_ID`):

```bash
curl -s -X DELETE -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  "https://api.cloudflare.com/client/v4/zones/cb57d63727d4a5ed76c2a3c0ec876c6a/dns_records/RECORD_ID"
```

Do **not** put `routes` / `custom_domain = true` for the apex in `wrangler.toml` until DNS is clean; attaching in the dashboard avoids redeploy fighting old records.