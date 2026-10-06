export const siteConfig = {
  name: 'Ar Frio Campo Grande',
  url: 'https://arfriocampogrande.com.br', // PLACEHOLDER, trocar no deploy
  phoneDisplay: '(67) 99999-9999', // PLACEHOLDER do cliente
  phoneE164: '+5567999999999',
  whatsappNumber: '5567999999999',
  address: {
    street: 'Rua Exemplo, 456',
    district: 'Jardim dos Estados',
    city: 'Campo Grande',
    state: 'MS',
    postalCode: '79000-000',
    country: 'BR',
  },
  responsavel: '[seu nome]', // PLACEHOLDER (pendencia do cliente)
  brandColor: '#0277bd',
  geo: { lat: -20.4697, lng: -54.6201 }, // aproximado; sinalizar
  openingHours: 'Seg-Sex 08:00-18:00, Sab 08:00-12:00', // confirmar com cliente
} as const;
