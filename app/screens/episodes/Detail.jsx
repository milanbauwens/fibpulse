import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getEpisodeById } from '../../core/db/modules/episodes/api';

const Detail = ({ route, navigation }) => {
  const { episodeId } = route.params;

  // TODO
  // Set the title to the localized date of the episode
  useEffect(() => {
    navigation.setOptions({ title: episodeId });
  }, []);

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <Text>{episodeId}</Text>
    </SafeAreaView>
  );
};

export default Detail;
