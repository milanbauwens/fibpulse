export const getEpisodesCountByWeek = (data) => {
  const mappedData = data.reduce((acc, episode) => {
    const date = new Date(episode.start_date);
    const day = date.getDay() - 1;

    acc[day] = acc[day] ? acc[day] + 1 : 1;

    // set value to 0 if there are no episodes on that day
    for (let i = 0; i < 6; i++) {
      if (!acc[i]) {
        acc[i] = 0;
      }
    }

    return acc;
  }, {});

  return Object.values(mappedData);
};
