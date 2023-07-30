export const getDaysSinceLastEpisode = (episodeDate) => {
  const today = new Date().getDate();
  const episode = new Date(episodeDate).getDate();

  // To calculate the time difference of two dates
  const diffTime = Math.abs(today - episode);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
