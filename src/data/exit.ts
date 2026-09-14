export const exit = {
  name: 'AUTO ŠKOLA EXIT',
  shortName: 'EXIT',
  phone: '062 896 409',
  phoneHref: 'tel:+38762896409',
  slogan: 'OBUKA ZA SVE KATEGORIJE',
  address: 'Lokacija — podatak za potvrdu',
  mapsLabel: 'Google Maps — lokacija za potvrdu',
  mapsHref: '#contact',
  categories: [
    { number: '01', label: 'A', detail: 'Kategorija — potrebno potvrditi' },
    { number: '02', label: 'B', detail: 'Kategorija — potrebno potvrditi' },
    { number: '03', label: 'C', detail: 'Kategorija — potrebno potvrditi' },
    { number: '04', label: 'D', detail: 'Kategorija — potrebno potvrditi' }
  ],
  nav: [
    ['Početna', '#top'], ['O nama', '#about'], ['Kategorije', '#categories'],
    ['Obuka', '#training'], ['Vozila', '#vehicles'], ['Kontakt', '#contact']
  ] as const,
  faqs: [
    ['Kako izgleda upis u autoškolu?', 'Informaciju je potrebno potvrditi sa autoškolom.'],
    ['Kako izgleda proces obuke?', 'Proces obuke obuhvata upis, teoriju, praktičnu obuku i ispit. Detalje je potrebno potvrditi sa autoškolom.'],
    ['Koje kategorije su dostupne?', 'Informaciju je potrebno potvrditi sa autoškolom.'],
    ['Kako mogu kontaktirati autoškolu?', 'Telefonom na 062 896 409.'],
    ['Koliko traje obuka?', 'Informaciju je potrebno potvrditi sa autoškolom.']
  ]
};