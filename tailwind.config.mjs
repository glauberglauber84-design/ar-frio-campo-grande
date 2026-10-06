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
      // Escala modular (base 16px, razao 1.25; lg e meio-passo). Hierarquia: H1 > H2 > corpo > legenda.
      fontSize: {
        xs: ['0.8rem', { lineHeight: '1.25rem' }],
        sm: ['0.875rem', { lineHeight: '1.375rem' }],
        base: ['1rem', { lineHeight: '1.625rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5625rem', { lineHeight: '2rem' }],
        '3xl': ['1.953rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.441rem', { lineHeight: '2.75rem' }],
        '5xl': ['3.052rem', { lineHeight: '3.25rem' }],
      },
      // Espacamento em base 4/8px (escala padrao do Tailwind, 1 unidade = 4px); touch = 44px.
      spacing: { touch: '2.75rem' },
    },
  },
};
