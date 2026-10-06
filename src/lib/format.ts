import { siteConfig } from '../config/siteConfig';

/** Rua Exemplo, 456 — Jardim dos Estados, Campo Grande — MS, CEP 79000-000 */
export function formatAddress(): string {
  const a = siteConfig.address;
  return `${a.street} — ${a.district}, ${a.city} — ${a.state}, CEP ${a.postalCode}`;
}

export function formatPhone(): string {
  return siteConfig.phoneDisplay;
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}
