export const getEpisodesCountByYear = (data) => {
  const mappedData = data.reduce((acc, episode) => {
    const date = new Date(episode.start_date);
    const month = date.getMonth();

    acc[month] = acc[month] ? acc[month] + 1 : 1;

    // set value to 0 if there are no episodes on that month
    for (let i = 0; i < 12; i++) {
      if (!acc[i]) {
        acc[i] = 0;
      }
    }

    return acc;
  }, {});

  return Object.values(mappedData);
};
