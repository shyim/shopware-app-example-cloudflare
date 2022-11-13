# Shopware App Cloudflare Template

Cloudflare Docs: https://developers.cloudflare.com/workers/

## Getting started

1. Fork this template

2. Create a Cloudflare Account

3. Create a Cloudflare Key Value namespace for authentification information `npx wrangler kv:namespace create <name>`

4. Update `wrangler.toml` with the `id` of the new created `kv_namespaces` and adjust other variables like `APP_NAME`

5. Deploy once using `npm run deploy`

6. Adjust the `APP_URL`, `APP_NAME`, `APP_SECRET` variable in `wrangler.toml` and deploy again.

7. Update of `MyApp/manifest.xml` also the URL and name and secret


