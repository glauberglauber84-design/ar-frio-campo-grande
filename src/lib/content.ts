import type { FaqItem, Local, PageContent } from '../types';
import { siteConfig } from '../config/siteConfig';

type Partials = Partial<PageContent>;

// Nao quebra se a pasta estiver vazia ou inexistente.
const modules = import.meta.glob<Partials>('/src/data/pages/*.json', {
  eager: true,
  import: 'default',
});

const bySlug = new Map<string, Partials>();
for (const [path, data] of Object.entries(modules)) {
  const slug = path.split('/').pop()?.replace(/\.json$/, '');
  if (slug) bySlug.set(slug, data);
}

/** Conteúdo da Maria para o slug, ou null se ainda não existir. */
export function getContent(slug: string): Partials | null {
  return bySlug.get(slug) ?? null;
}

function fallbackFaq(l: Local): FaqItem[] {
  const c = l.cidadeLabel;
  return [
    {
      pergunta: `Em quais bairros de ${c} vocês atendem?`,
      resposta: `Atendemos em toda ${c}, incluindo ${l.bairros.slice(0, 5).join(', ')} e outros bairros. Chame no WhatsApp e confirmamos a sua região.`,
    },
    {
      pergunta: 'Como faço para pedir um orçamento?',
      resposta: `Envie uma mensagem pelo WhatsApp ${siteConfig.phoneDisplay} com o serviço desejado e o seu bairro. Respondemos com orientação e valores.`,
    },
    {
      pergunta: 'Qual é o horário de atendimento?',
      resposta: `Atendemos ${siteConfig.openingHours}. Fora desse horário, deixe sua mensagem e retornamos assim que possível.`,
    },
  ];
}

/** Conteúdo final: fallback genérico sobreposto, campo a campo, pelo JSON da Maria. */
export function resolveContent(l: Local): PageContent {
  const s = l.servicoLabel;
  const c = l.cidadeLabel;
  const bairros = l.bairros;
  const base: PageContent = {
    title: `${s} em ${c} | ${siteConfig.name}`,
    description: `${s} em ${c}-${l.estado}. Atendimento em ${bairros.slice(0, 3).join(', ')} e região. Peça seu orçamento pelo WhatsApp.`,
    h1: `${s} em ${c}`,
    hero_subtitle: `Atendimento técnico para residências e empresas em ${c}, com orçamento rápido pelo WhatsApp.`,
    sobre_texto: [
      `A ${siteConfig.name} realiza ${s.toLowerCase()} em ${c}, atendendo bairros como ${bairros.slice(0, 4).join(', ')}.`,
      'Cada atendimento é feito por técnico qualificado, com orientação clara sobre o serviço e o melhor momento de realizá-lo.',
    ],
    faq: fallbackFaq(l),
  };
  const m = getContent(`${l.servico}-${l.cidade}`);
  if (!m) return base;
  return {
    title: m.title ?? base.title,
    description: m.description ?? base.description,
    h1: m.h1 ?? base.h1,
    hero_subtitle: m.hero_subtitle ?? base.hero_subtitle,
    sobre_texto: m.sobre_texto && m.sobre_texto.length > 0 ? m.sobre_texto : base.sobre_texto,
    faq: m.faq && m.faq.length > 0 ? m.faq : base.faq,
  };
}
