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
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(user.id);

    if (error) {
      return Promise.reject(error);
    } else {
      await supabase.auth.signOut();
      return Promise.resolve(data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendResetPasswordEmail = async (email, redirectURL) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: redirectURL,
  });

  if (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(data);
};

// export const verifyUserPassword = async (password) => {
//   // Check if current password equals password in database
//   const { error } = await supabase.auth.api.updateUser(supabase.auth.user(), {
//     password,
//   });
// };

export const UpdateUserPassword = async (newPassword) => {
  const session = getCurrentSession();
  const email = session.user.email;

  const { data, error } = await supabase.auth.updateUser({
    email,
    password: newPassword,
  });

  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};

export const SignUp = async (email, password, rest) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...rest,
      },
    },
  });

  if (error) {
    return Promise.reject(error);
  }
  return Promise.resolve(data);
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(data);
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
