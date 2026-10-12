import { CHECKOUT_URLS } from './checkout-redirects.mjs';

/** Zadeyo checkout / affiliate URLs used by Buy now buttons. */
export const CHECKOUT = CHECKOUT_URLS;

/** Primary Aion 2 affiliate checkout (Zadeyo). */
export const AION2_CHECKOUT_URL = CHECKOUT_URLS.aion2;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  aion2: 'aion-2',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** External checkout URL for Buy now / Purchase buttons. */
export function checkoutPath(product: CheckoutProduct = 'aion2'): string {
  return CHECKOUT_URLS[product];
}

/** Legacy /go/* path — middleware & static redirects only. */
export function checkoutGoPath(product: CheckoutProduct = 'aion2'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('aion2');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('aion2');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}?`) || href.startsWith(`${url}/`)) {
      return checkoutPath(product);
    }
  }

  // Legacy / encoded product paths → internal checkout
  if (href.includes('%2Fproducts%2Fcloud-dma') || href.includes('/products/cloud-dma')) {
    return checkoutPath('aion2');
  }
  if (href.includes('%2Fproducts%2Fskin-changer') || href.includes('/products/skin-changer')) {
    return checkoutPath('skinChanger');
  }
  if (href.includes('%2Fproducts%2Fhwid-spoofer') || href.includes('/products/hwid-spoofer')) {
    return checkoutPath('hwidSpoofer');
  }
  if (href.includes('%2Fproducts%2Fugc') || href.includes('/products/ugc')) {
    return checkoutPath('ugc');
  }
  if (
    href.includes('%2Fproducts%2Faion-2-cheats') ||
    href.includes('/products/aion-2-cheats') ||
    href.includes('%2Fproducts%2Faion2') ||
    href.includes('/products/aion2') ||
    href.includes('%2Fproducts%2Faion-2') ||
    href.includes('/products/aion-2')
  ) {
    return checkoutPath('aion2');
  }
  if (href.includes('zadeyo.com/go/FDI')) {
    return checkoutPath('aion2');
  }
  if (href.includes('zadeyo.com/products/aion2-cheats') || href.includes('zadeyo.com/products/aion-2-cheats')) {
    return checkoutPath('aion2');
  }

  return href;
}
