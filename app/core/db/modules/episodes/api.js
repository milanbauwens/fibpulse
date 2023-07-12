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
