module.exports = [
  {
    type: 'select',
    column: 'gender',
    question: 'gender',
    options: ['man', 'woman', 'other'],
  },
  {
    column: 'year_of_birth',
    label: 'label',
    question: 'birthYear',
    type: 'picker',
  },
  {
    column: 'heart_disorder',
    type: 'select',
    question: 'heartDisease',
    options: ['afib', 'other'],
  },
  {
    type: 'select',
    column: 'episode_frequency',
    question: 'frequency',
    options: ['less', 'yearly', 'monthly', 'weekly', 'daily'],
  },
  {
    question: 'duration',
    type: 'select',
    column: 'episode_duration',
    options: ['less', 'minutes', 'hours', 'day', 'days'],
  },
  {
    question: 'riskfactors',
    description: 'description',
    type: 'multiselect',
    column: 'risk_factors',
    translationKey: 'medicalProfile.riskfactors.options.',
    options: [
      'stress',
      'apnea',
      'smoking',
      'diabetes',
      'overweight',
      'alcohol',
      'menopause',
      'chronical',
      'vascularDiseases',
      'bloodpressure',
      'cholesterol',
      'family',
      'sports',
    ],
  },
];
