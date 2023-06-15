import { useEffect, useMemo, useState } from 'react';

import { AuthEvent, supabase } from './initSupabase.js';
import { getCurrentSession } from './modules/auth/api.js';

const UseSupabaseAuth = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [auth, setAuth] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getCurrentSession();
      setAuth(session);
      setIsInitialized(true);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case AuthEvent.SIGNED_IN:
        case AuthEvent.USER_UPDATED:
        case AuthEvent.TOKEN_REFRESHED:
          setAuth(session);
          break;

        case AuthEvent.SIGNED_OUT:
        case AuthEvent.USER_DELETED:
          setAuth(null);
          break;
      }
    });
  }, []);

  const user = useMemo(() => (auth ? { ...auth.user, ...auth.user.user_metadata } : null), [auth]);

  const isLoggedIn = isInitialized && !!auth;

  return {
    isInitialized,
    isLoggedIn,
    auth,
    user,
  };
};

export default UseSupabaseAuth;
