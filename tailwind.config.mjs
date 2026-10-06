/** Tokens de design. Carregado por src/styles/global.css via @config (Tailwind v4). */
export default {
  content: ['./src/**/*.{astro,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#0277bd', // so como FUNDO (texto branco, 4.8:1)
        'brand-dark': '#01579b',
        'accent-strong': '#01579b', // texto de marca sobre fundo claro (7.4:1)
        ice: '#e8f4fb',
        ink: '#0f172a',
        muted: '#475569',
        line: '#cbd5e1',
        surface: '#f5f9fc',
        wa: '#0b6b3a',
        'wa-dark': '#08522c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      spacing: { touch: '2.75rem' },
    },
  },
};
