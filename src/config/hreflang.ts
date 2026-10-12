import { SITE_ORIGIN } from './seo';
import { normalizeSeoPath } from './pageSeo';

/** Locale prefixes for hreflang (English uses no prefix at site root). */
export const HREFLANG_LOCALES = [
  { hreflang: 'en', prefix: '' },
  { hreflang: 'de', prefix: '/de' },
  { hreflang: 'fr', prefix: '/fr' },
  { hreflang: 'es', prefix: '/es' },
  { hreflang: 'pt-BR', prefix: '/pt-br' },
  { hreflang: 'ru', prefix: '/ru' },
  { hreflang: 'ko', prefix: '/ko' },
  { hreflang: 'zh', prefix: '/zh' },
] as const;

function localeUrl(prefix: string, path: string): string {
  if (!prefix) return `${SITE_ORIGIN}${path}`;
  const joined = prefix + (path === '/' ? '/' : path);
  return `${SITE_ORIGIN}${joined}`;
}

export function hreflangAlternates(pathname: string): { hreflang: string; href: string }[] {
  const path = normalizeSeoPath(pathname);
  const links = HREFLANG_LOCALES.map(({ hreflang, prefix }) => ({
    hreflang,
    href: localeUrl(prefix, path),
  }));
  links.push({ hreflang: 'x-default', href: localeUrl('', path) });
  return links;
}
