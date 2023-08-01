import { supabase } from '../../initSupabase';
import { shuffleArray } from './helpers/shuffleArray';

export const getRandomTips = async (category) => {
  // Get all tips that match the category
  const { data, error } = await supabase.from('discover').select('*').match({ category });

  if (error) {
    return [];
  }

  if (!data || data.length === 0) {
    // Handle the case when no data is found for the given category
    return [];
  }

  // Randomly select 3 items from the data
  const randomTips = shuffleArray(data).slice(0, 3);

  return randomTips;
};
