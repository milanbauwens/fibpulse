import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getEpisodeById } from '../../core/db/modules/episodes/api';

const Detail = ({ route, navigation }) => {
  const { episodeId } = route.params;

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  // TODO
  // Set the title to the localized date of the episode
  useEffect(() => {
    if (!isLoading) {
      const date = new Date(episode.data.created_at);
      navigation.setOptions({
        title: date.toLocaleDateString('nl', { day: 'numeric', month: 'long', year: 'numeric' }),
        headerTitle: date.toLocaleDateString('nl', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      });
    }
  }, []);

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <Text>{episodeId}</Text>
    </SafeAreaView>
  );
};

export default Detail;
