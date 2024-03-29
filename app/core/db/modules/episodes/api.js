import { supabase } from '../../initSupabase';
import { getCurrentSession } from '../auth/api';

export const updateEpisode = async (episodeId, column, value) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  if (!episodeId || !column || value === undefined) {
    return;
  }

  return await supabase
    .from('episodes')
    .update({
      [column]: value,
    })
    .match({ id: episodeId, user_id })
    .single()
    .throwOnError();
};

export const getEpisodesByUser = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('episodes')
    .select('*')
    .order('start_date', { ascending: false })
    .match({ user_id })
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .throwOnError();
};

export const getHighestAmountOfActivities = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('episodes')
    .select('activity')
    .match({ user_id })
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .throwOnError();
};

export const getHighestAmountOfSymptoms = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('episodes')
    .select('symptoms')
    .match({ user_id })
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .throwOnError();
};

export const createEpisode = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  const { data, error } = await supabase
    .from('episodes')
    .insert({
      user_id,
    })
    .select('id');

  if (error) {
    return Promise.reject(error);
  }

  return data;
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
    .order('start_date', { ascending: false })
    .gte('start_date', startDate.toISOString()) // Filter episodes created on or after the start of the month
    .lte('start_date', endDate.toISOString()) // Filter episodes created on or before the end of the month
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .throwOnError();
};

export const getEpisodesByDateRange = async (type = 'week' || 'year', year, start, end) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  const yearStart = new Date(year, 0, 1, 0, 0, 0, 0); // Start of the year
  const yearEnd = new Date(year, 11, 31, 23, 59, 59, 999); // End of the year

  return await supabase
    .from('episodes')
    .select('*')
    .match({ user_id })
    .gte('start_date', type === 'year' ? yearStart.toISOString() : start.toISOString()) // Filter episodes created on or after the start of the month
    .lte('start_date', type === 'year' ? yearEnd.toISOString() : end.toISOString()) // Filter episodes created on or before the end of the month
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .throwOnError();
};

export const getLatestEpisode = async () => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase
    .from('episodes')
    .select('*')
    .match({ user_id })
    .order('start_date', { ascending: false })
    .not('start_date, end_date, pulse, symptoms, activity', 'is', null)
    .limit(1)
    .single();
};

export const deleteEpisodeById = async (id) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase.from('episodes').delete().match({ id, user_id }).throwOnError();
};
