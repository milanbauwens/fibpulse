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

export const getEpisodesByWeek = async (start, end) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  const startDate = new Date(0, 0, start, -1, 1, 0, 0, 0, 0); // Start of the period
  const endDate = new Date(0, 0, end, 0, 23, 59, 59, 999); // End of the period

  return await supabase
    .from('episodes')
    .select('*')
    .match({ user_id })
    .gte('created_at', startDate.toISOString()) // Filter episodes created on or after the start of the month
    .lte('created_at', endDate.toISOString()) // Filter episodes created on or before the end of the month
    .throwOnError();
};

export const getEpisodesByDateRange = async (type = 'week' || 'year', year, start, end) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  const yearStart = new Date(year, 0, 1, 0, 0, 0, 0); // Start of the year
  const yearEnd = new Date(year, 11, 31, 23, 59, 59, 999); // End of the year

  const startDate = new Date(start);
  const endDate = new Date(end);

  const weekStart = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 1,
    1,
    0,
    0,
    0,
    0
  );

  // Start of the week
  const weekEnd = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    23,
    59,
    59,
    999
  ); // End of the week

  console.log(weekEnd.toLocaleDateString('nl', { month: 'long', day: 'numeric', year: 'numeric' }));

  return await supabase
    .from('episodes')
    .select('*')
    .match({ user_id })
    .gte('created_at', type === 'year' ? yearStart.toISOString() : weekStart.toISOString()) // Filter episodes created on or after the start of the month
    .lte('created_at', type === 'year' ? yearEnd.toISOString() : weekEnd.toISOString()) // Filter episodes created on or before the end of the month
    .throwOnError();
};

export const deleteEpisodeById = async (id) => {
  const session = await getCurrentSession();
  const user_id = session.user?.id;

  return await supabase.from('episodes').delete().match({ id, user_id }).throwOnError();
};
