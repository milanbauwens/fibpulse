import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { SUPABASE_KEY, SUPABASE_URL, SUPABASE_SERVICE_KEY } from "@env";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export const AuthEvent = {
  SIGNED_IN: "SIGNED_IN",
  USER_UPDATED: "USER_UPDATED",
  TOKEN_REFRESHED: "TOKEN_REFRESHED",
  SIGNED_OUT: "SIGNED_OUT",
  USER_DELETED: "USER_DELETED",
};
