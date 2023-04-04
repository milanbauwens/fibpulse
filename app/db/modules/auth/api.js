import { supabase } from "../../initSupabase";
import { startAsync } from "expo-auth-session";
import { SUPABASE_URL } from "@env";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

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

export const signInWithProvider = async (provider) => {
  const authUrl = `${SUPABASE_URL}/auth/v1/authorize?provider=${provider}&prompt=consent&projectNameForProxy=@supabase/fibpulse`;

  const authResponse = await WebBrowser.openAuthSessionAsync(authUrl);

  if (authResponse.type === "success") {
    const urlParams = new URLSearchParams(authResponse.url.split("#")[1]);
    const access_token = urlParams.get("access_token");
    const refresh_token = urlParams.get("refresh_token");

    try {
      await supabase.auth.setSession({
        access_token,
        refresh_token,
      });
    } catch (error) {
      return error;
    }
  }
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
