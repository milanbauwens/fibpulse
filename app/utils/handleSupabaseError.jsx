const handleSupabaseError = (status) => {
  switch (status) {
    case 400:
      return "Dit e-mailadres is al in gebruik.";
    case 401:
      return "Uw wachtwoord en/of e-mail zijn incorrect.";
      break;
    case 402:
      return "Uw account is nog niet geactiveerd.";
      break;
    case 403:
      return "Uw account is geblokkeerd.";
      break;
    default:
      return "Er is iets misgegaan.";
      break;
  }
};

export default handleSupabaseError;
