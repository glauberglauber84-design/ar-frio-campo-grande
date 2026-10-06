import { siteConfig } from '../config/siteConfig';

export function waLink(msg?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
}
