export const formatDate = (date, format = 'full' | 'short' | 'time', locale) => {
  const dateObject = new Date(date);

  switch (format) {
    case 'full':
      return dateObject.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    case 'short':
      return dateObject.toLocaleDateString(locale, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    case 'time':
      return dateObject.toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h24',
      });
    default:
      return dateObject.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
  }
};
