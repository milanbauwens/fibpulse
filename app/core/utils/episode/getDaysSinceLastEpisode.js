export const getDaysSinceLastEpisode = (episodeDate) => {
  const today = new Date();
  const episode = new Date(episodeDate);
  const diffTime = Math.abs(today - episode);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};
