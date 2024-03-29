import { supabase } from '../../initSupabase';
import { UpdateUser, getCurrentSession } from '../auth/api';

export const getMedicalProfile = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('medical_profiles')
    .select(
      'year_of_birth, gender, episode_duration, episode_frequency, heart_disorder, risk_factors, passed_intake'
    )
    .match({ user_id })
    .single()
    .throwOnError();
};

export const createMedicalProfile = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;
  const email = session.user?.email;

  const { data, error } = await supabase.from('medical_profiles').upsert({
    user_id,
  });

  if (error) {
    return Promise.reject(error);
  } else {
    await UpdateUser(email, { hasMedicalProfile: true });
  }

  return Promise.resolve(data);
};

export const updateMedicalProfile = async (column, value) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  if (column === undefined || value === undefined) {
    return;
  }

  return await supabase
    .from('medical_profiles')
    .update({
      [column]: value,
    })
    .match({ user_id })
    .throwOnError();
};

export const getIntakeCompletion = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('medical_profiles')
    .select('passed_intake')
    .match({ user_id })
    .single()
    .throwOnError();
};
