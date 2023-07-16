import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Icon } from '../../components/common/Icon/Icon';
import Paragraph from '../../components/common/Typography/Paragraph';
import Title from '../../components/common/Typography/Title';
import { getEpisodeById } from '../../core/db/modules/episodes/api';

const Detail = ({ route, navigation }) => {
  const { episodeId } = route.params;

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  const { created_at } = !isLoading && episode.data;

  const formatDate = (date, format = 'full' | 'short' | 'time') => {
    const dateObject = new Date(date);

    switch (format) {
      case 'full':
        return dateObject.toLocaleDateString('nl', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
      case 'short':
        return dateObject.toLocaleDateString('nl', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
      case 'time':
        return dateObject.toLocaleDateString('nl', { timeStyle: 'short' });
      default:
        return dateObject.toLocaleDateString('nl', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
    }
  };

  // TODO
  // Set the title to the localized date of the episode
  useEffect(() => {
    if (!isLoading) {
      navigation.setOptions({
        title: formatDate(created_at),
        headerTitle: formatDate(created_at),
      });
    }
  }, []);

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="mb-6">
        <Title size="large">{formatDate(created_at)}</Title>
      </View>
      <View className="w-full flex flex-row">
        <View className="flex-1 mr-2 bg-deepMarine-100 rounded-lg p-3">
          <View className="mb-6 flex flex-row items-center">
            <Icon name="calendar-heart-outline" size={20} />
            <Paragraph isStrong styles="ml-2">
              Begin
            </Paragraph>
          </View>
          <View>
            <Paragraph styles="mb-1">{formatDate(created_at, 'short')}</Paragraph>
            <Title size="large">{formatDate(created_at, 'time')}</Title>
          </View>
        </View>
        <View className="flex-1 ml-2 bg-deepMarine-100 rounded-lg p-3">
          <View className="mb-6 flex flex-row items-center">
            <Icon name="calendar-check-outline" size={20} />
            <Paragraph isStrong styles="ml-2">
              Einde
            </Paragraph>
          </View>
          <View>
            <Paragraph styles="mb-1">{formatDate(created_at, 'short')}</Paragraph>
            <Title size="large">{formatDate(created_at, 'time')}</Title>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
