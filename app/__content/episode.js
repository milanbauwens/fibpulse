module.exports = [
  {
    question: 'measure',
    description: 'description',
    type: 'measurement',
  },
  {
    question: 'pulse',
    column: 'pulse',
    label: 'label',
    type: 'number',
  },
  {
    question: 'start',
    type: 'datetime',
    column: 'start_date',
  },
  {
    question: 'end',
    column: 'end_date',
    type: 'datetime',
  },
  {
    question: 'activity',
    type: 'spot-select',
    column: 'activity',
    options: ['sleeping', 'sitting', 'standing', 'walking', 'sports', 'other'],
  },
  {
    question: 'symptoms',
    description: 'descriptions',
    translationKey: 'episodes.intake.symptoms.options.',
    type: 'multiselect',
    column: 'symptoms',
    options: [
      'none',
      'chestPain',
      'lightHeaded',
      'breathing',
      'faint',
      'dizzy',
      'fatigued',
      'confused',
      'other',
    ],
  },
  {
    question: 'notes',
    description: 'description',
    type: 'textarea',
    column: 'notes',
  },
];
