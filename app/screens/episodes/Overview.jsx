import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import EpisodePaginator from '../../components/EpisodePaginator/EpisodePaginator';
import { Icon } from '../../components/common/Icon/Icon';
import { Paragraph, Title } from '../../components/common/Typography';
import { getEpisodesByUser } from '../../core/db/modules/episodes/api';
import colors from '../../theme/colors';

const Overview = () => {
  const navigation = useNavigation();

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['medical_profile'],
    queryFn: getEpisodesByUser,
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8 flex flex-row justify-between items-center">
        <Title size="large">Hartmomenten</Title>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          className="bg-turquoise-200 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <Icon name="plus" size={24} color={colors.deepMarine[500]} />
        </TouchableOpacity>
      </View>

      <EpisodePaginator />

      {!isLoading && episodes.data.length > 0 ? (
        episodes.data.map(({ id, pulse, activity }) => (
          <EpisodeCard
            key={id}
            id={id}
            startHour="7:45"
            endHour="8:00"
            date="7 "
            activity={activity}
            pulse={pulse}
          />
        ))
      ) : (
        // TOOD: Add skeleton loader & empty states
        <Paragraph>No episodes found</Paragraph>
      )}

      <EpisodeCard
        id={1}
        startHour="7:45"
        endHour="8:00"
        date="7 Januari"
        activity="Sporten"
        pulse={187}
      />
    </ScrollView>
  );
};

export default Overview;
