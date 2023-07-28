export const getAmountPerSymptom = (data) => {
  // Flatten the symptoms data to get a single array of all symptoms
  const allSymptoms = data.flatMap((entry) => entry.symptoms);

  // Count the occurrences of each symptom using an object
  const symptomCounts = {};
  allSymptoms.forEach((symptom) => {
    symptomCounts[symptom] = (symptomCounts[symptom] || 0) + 1;
  });

  // Find the symptom with the highest count
  let highestSymptom = '';
  let highestCount = 0;

  Object.entries(symptomCounts).forEach(([symptom, count]) => {
    if (count > highestCount) {
      highestSymptom = symptom;
      highestCount = count;
    }
  });

  return highestSymptom;
};
