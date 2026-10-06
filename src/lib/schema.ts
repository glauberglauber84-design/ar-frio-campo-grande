import { siteConfig } from '../config/siteConfig';
import { absoluteUrl, formatAddress } from './format';
import type { BreadcrumbItem, FaqItem, JsonLd, Local } from '../types';

const businessId = `${siteConfig.url}/#business`;

export function websiteLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    inLanguage: 'pt-BR',
  };
}

export function localBusinessLd(): JsonLd {
  const a = siteConfig.address;
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': businessId,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    image: absoluteUrl('/og-default.jpg'),
    telephone: siteConfig.phoneE164,
    description: `Instalação e manutenção de ar-condicionado em ${a.city}-${a.state}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.street} — ${a.district}`,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    areaServed: { '@type': 'City', name: a.city },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHours: siteConfig.openingHours,
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(formatAddress())}`,
  };
}

export function serviceLd(l: Local, description: string, path: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: l.servicoLabel,
    serviceType: l.servicoLabel,
    description,
    url: absoluteUrl(path),
    provider: { '@id': businessId },
    areaServed: [
      { '@type': 'City', name: l.cidadeLabel },
      ...l.bairros.map((b) => ({ '@type': 'Place', name: `${b}, ${l.cidadeLabel}` })),
    ],
  };
}

export function breadcrumbLd(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function faqLd(items: FaqItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: q.resposta },
    })),
  };
}
