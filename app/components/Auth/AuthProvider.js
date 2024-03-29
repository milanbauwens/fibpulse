import { createContext, useContext } from 'react';

import UseSupabaseAuth from '../../core/db/useSupabeAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { isInitialized, isLoggedIn, user, auth } = UseSupabaseAuth();

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, user }}>
      {isInitialized ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
