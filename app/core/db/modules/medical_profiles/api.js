import { supabase } from '../../initSupabase';
import { getCurrentSession } from '../auth/api';

export const getMedicalProfile = async () => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  return await supabase
    .from('medical_profiles')
    .select(
      'date_of_birth, gender, episode_duration, episode_frequency, heart_disorder, risk_factors'
    )
    .eq('user_id', userID)
    .single()
    .throwOnError();
};

export const updateMedicalProfile = async (column, value) => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  return await supabase
    .from('medical_profiles')
    .update({
      [column]: value,
    })
    .eq('user_id', userID)
    .throwOnError();
};

export const checkIntakeCompletion = async (column, value) => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  return await supabase
    .from('medical_profiles')
    .select('passed_intake')
    .eq('user_id', userID)
    .single()
    .throwOnError();
};
