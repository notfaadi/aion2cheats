import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { CHECKOUT_URLS } from './src/config/checkout-redirects.mjs';

const externalCheckoutRedirect = (url) => ({ status: 302, destination: url });

export default defineConfig({
  site: 'https://aion2cheat.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/aion-2-cheats/',
    '/cheats/lite/': '/products/aion-2-cheats/',
    '/cheats/pro/': '/products/aion-2-cheats/',
    '/cheats/elite/': '/products/aion-2-cheats/elite/',
    '/cheats/compare/': '/blog/aion-2-lite-vs-pro/',
    '/contact/': '/support/',
    '/blog/dota-2-cheat-codes-guide/': '/blog/aion-2-game-overview/',
    '/blog/dota-2-console-cheats-tips/': '/blog/aion-2-game-overview/',
    '/blog/how-to-use-dota-2-cheat-codes/': '/blog/aion-2-game-overview/',
    '/blog/dota-2-console-commands-cheats/': '/blog/aion-2-game-overview/',
    '/blog/dota-2-lite-vs-pro/': '/blog/aion-2-lite-vs-pro/',
    '/blog/dota-2-elite-tier-guide/': '/blog/aion-2-elite-tier-guide/',
    '/blog/dota-2-scripts-ranked-mmr/': '/blog/aion-2-combat-assist-pvp/',
    '/blog/dota-2-map-hack-setup/': '/blog/aion-2-esp-setup-guide/',
    '/blog/dota-2-zoom-hack-guide/': '/blog/aion-2-flight-speed-tools/',
    '/blog/dota-2-skin-changer-guide/': '/blog/aion-2-cosmetic-unlock-guide/',
    '/blog/vac-patch-day-checklist/': '/blog/aion-2-patch-day-checklist/',
    '/blog/dota-2-hwid-spoofer-after-ban/': '/blog/aion-2-hwid-spoofer-guide/',
    '/blog/dota-2-auto-combo-hero-scripts/': '/blog/aion-2-combat-assist-pvp/',
    '/blog/valve-anti-cheat-unable-to-verify/': '/blog/aion-2-patch-day-checklist/',
    '/blog/dota-2-external-cheat-guide/': '/blog/aion-2-external-loader-guide/',
    '/blog/dota-2-stream-proof-setup/': '/blog/aion-2-stream-proof-setup/',
    '/go/dota-2/': '/go/aion-2/',
    '/go/aion-2/': externalCheckoutRedirect(CHECKOUT_URLS.aion2),
    '/go/skin-changer/': externalCheckoutRedirect(CHECKOUT_URLS.skinChanger),
    '/go/hwid-spoofer/': externalCheckoutRedirect(CHECKOUT_URLS.hwidSpoofer),
    '/go/ugc/': externalCheckoutRedirect(CHECKOUT_URLS.ugc),
    '/pricing/': '/buy/',
    '/auto-farm/': '/bot/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'terser',
      assetsInlineLimit: 4096,
      target: 'es2022',
      modulePreload: { polyfill: false },
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  build: {
    // External cached CSS beats inlining the full Tailwind bundle into every HTML page.
    inlineStylesheets: 'auto',
    format: 'directory',
  },
});
