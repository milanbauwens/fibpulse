module.exports = [
  {
    question: 'Wat is uw geslacht?',
    type: 'select',
    column: 'gender',
    options: ['Man', 'Vrouw', 'Zeg ik liever niet'],
  },
  {
    question: 'Wat is uw leeftijd?',
    column: 'age',
    label: 'Leeftijd',
    type: 'picker',
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
