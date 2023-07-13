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
    question: 'Wat was u net voor het hartmoment aan het doen? ',
    type: 'spot-select',
    column: 'activity',
    options: ['Slapen', 'Zitten', 'Staan', 'Wandelen', 'Sporten', 'Andere'],
  },
  {
    question: 'Duid de symptomen aan die aanwezig waren',
    description: 'U kan meerdere symptomen selecteren.',
    type: 'multiselect',
    column: 'symptoms',
    options: [
      'Geen opmerkelijke symptomen',
      'Pijn op de borst',
      'Licht in het hoofd',
      'Kortademigheid',
      'Flauwvallen',
      'Duizelig',
      'Vermoeidheid',
      'Verward',
      'Andere symptomen',
    ],
  },
  {
    question: 'Voeg een opmerking toe aan dit hartmoment',
    description: 'Deze vraag is optioneel',
    type: 'textarea',
    column: 'notes',
  },
];
