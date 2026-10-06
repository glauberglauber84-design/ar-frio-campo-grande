import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` e PLACEHOLDER: trocar no deploy (tambem em src/config/siteConfig.ts).
export default defineConfig({
  site: 'https://arfriocampogrande.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
