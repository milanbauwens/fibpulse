module.exports = [
  {
    question: 'Wat is uw geslacht?',
    type: 'select',
    options: ['Man', 'Vrouw', 'Zeg ik liever niet'],
  },
  {
    question: 'Wat is uw geboortedatum?',
    type: 'date',
  },
  {
    question: 'Werd bij u reeds een hartritmestoornis vastgesteld?',
    type: 'select',
    options: [
      'Nee, ik heb geen ritmestoornis',
      'Ja, namelijk voorkamerfibrilatie ',
      'Ja, een andere ritmestoornis ',
    ],
  },
  {
    question: 'Hoe vaak heeft u een episode van uw ritmestoornis?',
    type: 'select',
    options: ['Minder dan 1 keer per jaar', 'Jaarlijks', 'Maandelijks', 'Wekelijks', 'Dagelijks'],
  },
  {
    question: 'Hoe lang duren deze episodes gemiddeld?',
    type: 'select',
    options: [
      'Minder dan 1 minuut',
      'Enkele minuten',
      'Enkele uren',
      'Een hele dag',
      'Enkele dagen',
    ],
  },
  {
    question: 'Welke risicofactoren zijn bij u van toepassing?',
    subtitle: 'Kies de risicofactoren die bij u van toepassing zijn',
    type: 'multiselect',
    options: [
      'Stress',
      'Slaapapneu',
      'Roken',
      'Diabetes',
      'Overgewicht',
      'Alcohol',
      'Chronische ziekte',
      'Vaatziektes',
      'Hoge bloeddruk',
      'Hoge cholesterol',
      'Familiegeschiedenis',
      'Duursport',
    ],
  },
];
