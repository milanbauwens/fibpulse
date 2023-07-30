export const getEpisodesCountByWeek = (data) => {
  // Initialize an array to hold the episode counts for each day of the week
  const episodeCounts = [0, 0, 0, 0, 0, 0, 0];

  // Loop through the episodes and update the episode counts for each day of the week
  data.forEach((episode) => {
    const date = new Date(episode.start_date);
    const dayOfWeek = date.getDay(); // Returns a value between 0 (Sunday) and 6 (Saturday)
    const index = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Adjust the index to start from 0 (Monday)

    episodeCounts[index] = episodeCounts[index] ? episodeCounts[index] + 1 : 1;
  });

  return episodeCounts;
};
