import { AuthError } from '@supabase/supabase-js';

export const handleAuthError = (error) => {
  if (error instanceof AuthError) {
    switch (error.message) {
      // Login erros
      case 'User not found':
        return 'Deze gebruiker bestaat niet.';
      case 'Password reset required':
        return 'Uw wachtwoord dient opnieuw ingesteld te worden.';
      case 'Invalid login credentials':
        return 'Uw wachtwoord of e-mail is niet correct.';
      // Registration errors
      case 'Email is already taken':
        return 'E-mail is al in gebruik.';
      // Account verification errors
      case 'Invalid verification link':
        return 'De verificatie link die u gebruikte werkt niet. ';
      case 'Verification link expired':
        return 'De verificatie link die u gebruikte is vervallen.';
      // Password reset errors
      case 'Error resetting password':
        return 'Er is iets misgelopen bij het resetten van uw wachtwoord.';
      case 'Invalid password':
        return 'Het ingevoerde wachtwoord is ongeldig.';
      default:
        return error.message;
    }
  } else {
    console.error(error);
  }
};
