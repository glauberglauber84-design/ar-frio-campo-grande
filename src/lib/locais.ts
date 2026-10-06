import locaisJson from '../data/locais.json';
import type { Local } from '../types';

// Rotulos que sobrepoem o locais.json (fato do cliente: sem laudo/PMOC com responsavel tecnico).
const labelOverrides: Record<string, string> = {
  'contrato-pmoc': 'Manutenção de Ar-Condicionado para Empresas',
};

const locais: Local[] = (locaisJson as Local[]).map((l) => ({
  ...l,
  servicoLabel: labelOverrides[l.servico] ?? l.servicoLabel,
}));

export function loadLocais(): Local[] {
  return locais;
}

export function slugOf(l: Pick<Local, 'servico' | 'cidade'>): string {
  return `${l.servico}-${l.cidade}`;
}

export function pathOf(l: Pick<Local, 'servico' | 'cidade'>): string {
  return `/${slugOf(l)}/`;
}
