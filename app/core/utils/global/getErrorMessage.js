import { AuthError } from '@supabase/supabase-js';

export const getErrorMessage = (error, locale) => {
  // Check if locale starts with the desired language code (e.g., 'nl')
  const isDutch = locale.includes('nl');

  if (error instanceof AuthError) {
    switch (error.message) {
      // Login errors
      case 'A user with this email address has already been registered':
        return isDutch ? 'Dit email adres is al in gebruik.' : error.message;
      case 'User already registered':
        return isDutch ? 'Dit e-mailadres is al in gebruik.' : error.message;
      case 'User not found':
        return isDutch ? 'Deze gebruiker bestaat niet.' : error.message;
      case 'Password reset required':
        return isDutch ? 'Uw wachtwoord dient opnieuw ingesteld te worden.' : error.message;
      case 'Invalid login credentials':
        return isDutch ? 'Uw wachtwoord of e-mail is niet correct.' : error.message;
      // Registration errors
      case 'Email is already taken':
        return isDutch ? 'Dit e-mailadres is al in gebruik.' : error.message;
      // Account verification errors
      case 'Invalid verification link':
        return isDutch ? 'De verificatie link die u gebruikte werkt niet. ' : error.message;
      case 'Verification link expired':
        return isDutch ? 'De verificatie link die u gebruikte is vervallen.' : error.message;
      case 'Email not confirmed':
        return isDutch ? 'Verifieer uw email.' : error.message;
      // Password reset errors
      case 'Error resetting password':
        return isDutch
          ? 'Er is iets misgelopen bij het resetten van uw wachtwoord.'
          : error.message;
      case 'Invalid password':
        return isDutch ? 'Het ingevoerde wachtwoord is ongeldig.' : error.message;
      case 'Password mismatch':
        return isDutch ? 'Het ingevoerde wachtwoord is fout.' : error.message;
      case 'Error sending confirmation mail':
        return isDutch ? 'We konden geen verificatie mail sturen.' : error.message;
      default:
        return isDutch ? 'Er is iets misgelopen.' : 'Something went wrong.';
    }
  } else {
    // return isDutch ? 'Er is iets misgelopen.' : 'Something went wrong.';
    return error.message;
  }
};
