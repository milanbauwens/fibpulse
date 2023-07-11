module.exports = [
  {
    question: 'Meet uw hartslag ',
    description:
      'Plaats twee vingers van uw linkerhand op uw rechterpols en tel gedurende 1 minuut het aantal slagen van uw hart.',
    type: 'measurement',
  },
  {
    question: 'Welke hartslag heeft u kunnen waarnemen? ',
    column: 'pulse',
    label: 'Slagen per minuut',
    type: 'picker',
  },
  {
    question: 'Wanneer begon uw onregelmatige hartslag? ',
    type: 'datetime',
    column: 'start_date',
  },
  {
    question: 'Wanneer was uw hartslag opnieuw regelmatig? ',
    column: 'end_date',
    type: 'datetime',
  },
  {
    question: 'Welke hartritmestoornis werd bij u reeds vastgesteld?',
    column: 'heart_disorder',
    type: 'select',
    options: ['Voorkamerfibrilatie ', 'Een andere ritmestoornis '],
  },
  {
    question: 'Hoe vaak heeft u last van uw ritmestoornis?',
    type: 'select',
    column: 'episode_frequency',
    options: ['Minder dan 1 keer per jaar', 'Jaarlijks', 'Maandelijks', 'Wekelijks', 'Dagelijks'],
  },
  {
    question: 'Hoe lang duren deze momenten gemiddeld?',
    type: 'select',
    column: 'episode_duration',
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
    type: 'multiselect',
    column: 'risk_factors',
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
