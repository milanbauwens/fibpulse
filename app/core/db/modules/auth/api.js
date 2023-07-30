
import { supabase, supabaseAdmin } from '../../initSupabase';

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

export const deleteUser = async (user) => {
  try {
    const { error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (error) {
      console.log(error);
      return error;
    } else {
      await supabase.auth.signOut();
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
