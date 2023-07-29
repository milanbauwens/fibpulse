export const getMostCommonActivity = (data) => {
  // remap the activity data to an object with the activity as key and the amount as value
  const remap = data.reduce((acc, curr) => {
    const { activity } = curr;
    if (acc[activity]) {
      acc[activity] += 1;
    } else {
      acc[activity] = 1;
    }
    return acc;
  }, {});

  const activity = Object.keys(remap).reduce((a, b) => (remap[a] > remap[b] ? a : b));

  const count = Object.values(remap).reduce((a, b) => (a > b ? a : b));

  return { count, activity };
};
