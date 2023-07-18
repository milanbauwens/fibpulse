export const getEpisodesCountByWeek = (data) => {
  const mappedData = data.reduce((acc, episode) => {
    const date = new Date(episode.created_at);
    const day = date.getDay();

    acc[day] = acc[day] ? acc[day] + 1 : 1;

    // set value to 0 if there are no episodes on that day
    for (let i = 0; i < 7; i++) {
      if (!acc[i]) {
        acc[i] = 0;
      }
    }

    return acc;
  }, {});

  return Object.values(mappedData);
};
