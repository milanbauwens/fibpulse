import { AuthError } from "@supabase/supabase-js";

export const handleAuthError = (error) => {
  if (error instanceof AuthError) {
    switch (error.message) {
      // Login erros
      case "User not found":
        return "Deze gebruiker bestaat niet.";
        break;
      case "Password reset required":
        return "Uw wachtwoord dient opnieuw ingesteld te worden.";
        break;
      case "Invalid login credentials":
        return "Uw wachtwoord of e-mail is niet correct.";
        break;
      // Registration errors
      case "Email is already taken":
        return "E-mail is al in gebruik.";
        break;
      // Account verification errors
      case "Invalid verification link":
        return "De verificatie link die u gebruikte werkt niet. ";
        break;
      case "Verification link expired":
        return "De verificatie link die u gebruikte is vervallen.";
        break;
      // Password reset errors
      case "Error resetting password":
        return "Er is iets misgelopen bij het resetten van uw wachtwoord.";
        break;
      case "Invalid password":
        return "Het ingevoerde wachtwoord is ongeldig.";
        break;
      default:
        return error.message;
        break;
    }
  } else {
    console.error(error);
  }
};
