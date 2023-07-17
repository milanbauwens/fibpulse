import { supabase } from '../../initSupabase';
import { getCurrentSession } from '../auth/api';

export const updateEpisode = async (episodeId, column, value) => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  if (!episodeId || !column || value === undefined) {
    return;
  }

  return await supabase
    .from('episodes')
    .update({
      [column]: value,
    })
    .match({ id: episodeId, user_id: userID })
    .single()
    .throwOnError();
};

export const getEpisodesByUser = async () => {
  const session = await getCurrentSession();
  const userID = session.user?.id;

  return await supabase.from('episodes').select('*').eq('user_id', userID).throwOnError();
};

export const getEpisodeById = async (id) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase.from('episodes').select('*').match({ id, user_id }).single().throwOnError();
};

export const getEpisodesByDate = async (date) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const startDate = new Date(year, month - 1, 1, 0, 0, 0, 0); // Start of the month
  const endDate = new Date(year, month, 0, 23, 59, 59, 999); // End of the month

  return await supabase
    .from('episodes')
    .select('*')
    .match({ user_id })
    .gte('created_at', startDate.toISOString()) // Filter episodes created on or after the start of the month
    .lte('created_at', endDate.toISOString()) // Filter episodes created on or before the end of the month
    .throwOnError();
};

export const deleteEpisodeById = async (id) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase.from('episodes').delete().match({ id, user_id }).throwOnError();
};
