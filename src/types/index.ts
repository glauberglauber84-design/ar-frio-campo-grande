export interface Local {
  servico: string;
  servicoLabel: string;
  cidade: string;
  cidadeLabel: string;
  estado: string;
  principal?: boolean;
  servicoPrincipal?: boolean;
  bairros: string[];
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface PageContent {
  title: string;
  description: string;
  h1: string;
  hero_subtitle: string;
  sobre_texto: string[];
  faq: FaqItem[];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export type JsonLd = Record<string, unknown>;
