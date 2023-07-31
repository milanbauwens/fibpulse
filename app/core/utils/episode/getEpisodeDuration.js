const getEpisodeDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // To calculate the difference between two dates
  const diffTime = Math.abs(end - start);

  // Calculate the number of days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Calculate the remaining milliseconds after removing the days
  const remainingTime = diffTime % (1000 * 60 * 60 * 24);

  // Calculate the number of hours
  const diffHours = Math.floor(remainingTime / (1000 * 60 * 60));

  // Calculate the remaining milliseconds after removing the hours
  const remainingTimeAfterHours = remainingTime % (1000 * 60 * 60);

  // Calculate the number of minutes
  const diffMinutes = Math.floor(remainingTimeAfterHours / (1000 * 60));

  const duration = {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
  };

  return duration;
};

export const getEpisodeDurationSentence = (startDate, endDate, locale) => {
  const { days, hours, minutes } = getEpisodeDuration(startDate, endDate);

  const parts = [];

  if (days === 1) {
    parts.push(`1 ${locale === 'nl-BE' ? 'dag' : 'day'}`);
  } else if (days > 1) {
    parts.push(`${days} ${locale === 'nl-BE' ? 'dagen' : 'days'}`);
  }

  if (hours === 1) {
    parts.push(`1 ${locale === 'nl-BE' ? 'uur' : 'hour'}`);
  } else if (hours > 1) {
    parts.push(`${hours} ${locale === 'nl-BE' ? 'uur' : 'hours'}`);
  }

  if (minutes === 1) {
    parts.push(`1 ${locale === 'nl-BE' ? 'minuut' : 'minute'}`);
  } else if (minutes > 1) {
    parts.push(`${minutes} ${locale === 'nl-BE' ? 'minuten' : 'minutes'}`);
  }

  return parts.join(', ');
};
