import { supabase } from "../../initSupabase";
import { startAsync } from "expo-auth-session";
import { SUPABASE_URL } from "@env";
import * as Linking from "expo-linking";

export const getCurrentSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    return null;
  }
  return session;
};

export const SignInWithProvider = async (provider = "google") => {
  const redirectUrl = Linking.createURL("/auth/callback");

  const authResponse = await startAsync({
    projectNameForProxy: "@supabase/fibpulse",
    authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}`,
    returnUrl: redirectUrl,
  });

  if (authResponse.type === "success") {
    supabase.auth.setSession({
      access_token: authResponse.params.access_token,
      refresh_token: authResponse.params.refresh_token,
    });
  }
};

export const SignOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return error;
  }
};
