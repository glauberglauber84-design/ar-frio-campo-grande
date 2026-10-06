// Gera public/og-default.jpg (1200x630) de marca: azul #0277bd, nome e servico.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-default.jpg');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0277bd"/><stop offset="1" stop-color="#01579b"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g stroke="#ffffff" stroke-opacity="0.16" stroke-width="18" stroke-linecap="round">
    <path d="M1000 90v300M870 165l260 150M870 315l260-150"/></g>
  <g stroke="#ffffff" stroke-width="10" stroke-linecap="round" transform="translate(80 120)">
    <path d="M40 0v80M5 20l70 40M5 60l70-40"/></g>
  <text x="80" y="340" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="92" fill="#ffffff">Ar Frio</text>
  <text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="92" fill="#ffffff">Campo Grande</text>
  <rect x="80" y="475" width="120" height="8" rx="4" fill="#ffffff"/>
  <text x="80" y="540" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#ffffff">Instalação e manutenção de ar-condicionado</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
console.log('OG gerada em', out);
