/**
 * Products offered on payment links. Mirrors the QuickBooks Enterprises admin panel: QuickBooks
 * Enterprise editions (priced per users + contract period) and a list of one-off custom products.
 * Safe to import from both server and client code.
 */

export const EDITIONS = [
  { value: 'silver', name: 'Silver' },
  { value: 'gold', name: 'Gold' },
  { value: 'platinum', name: 'Platinum' },
  { value: 'diamond', name: 'Diamond' },
  { value: 'fsp', name: 'FSP' },
] as const;

export const CUSTOM_PRODUCTS = [
  { value: 'a', name: 'Strategic Mobile Consulting' },
  { value: 'b', name: 'Mobile Application Porting' },
  { value: 'c', name: 'Technology Outsourcing' },
  { value: 'd', name: 'UI/UX Design' },
  { value: 'e', name: 'Ecommerce App Development' },
  { value: 'f', name: 'Startup app development' },
  { value: 'g', name: 'Custom CRM Development' },
  { value: 'h', name: 'SaaS App Development' },
  { value: 'i', name: 'Offshore Development Center' },
  { value: 'j', name: 'Product Engineering Services' },
  { value: 'k', name: 'IT Staff Augmentation' },
  { value: 'l', name: 'Dedicated Development Team' },
  { value: 'm', name: 'QuickBooks Payroll' },
  { value: 'n', name: 'Outstanding Balance Payment' },
] as const;

export const YEAR_OPTIONS = [
  { value: 1, label: '1 Year' },
  { value: 2, label: '2 Years' },
  { value: 3, label: '3 Years' },
] as const;

export function isEdition(product: string): boolean {
  return EDITIONS.some((e) => e.value === product);
}

export function isKnownProduct(product: string): boolean {
  return isEdition(product) || CUSTOM_PRODUCTS.some((p) => p.value === product);
}

/** Short name used in the summary preview, e.g. "24.0 Silver" or "UI/UX Design". */
export function productLabel(product: string): string {
  const edition = EDITIONS.find((e) => e.value === product);
  if (edition) return `24.0 ${edition.name}`;
  return CUSTOM_PRODUCTS.find((p) => p.value === product)?.name ?? product;
}

/** The sentence stored on the link and shown to the customer + in the logs. */
export function describePlan(product: string, users?: number, years?: number): string {
  const edition = EDITIONS.find((e) => e.value === product);
  if (edition) {
    const u = users && users > 0 ? `${users} ${users === 1 ? 'user' : 'users'}` : '';
    const y = years && years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
    return `QuickBooks Enterprise 24.0 ${edition.name}${u || y ? ' — ' + [u, y].filter(Boolean).join(', ') : ''}`;
  }
  return CUSTOM_PRODUCTS.find((p) => p.value === product)?.name ?? product;
}
