import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import EpisodePaginator from '../../components/EpisodePaginator/EpisodePaginator';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import { Icon } from '../../components/common/Icon/Icon';
import { EpisodeSkeleton } from '../../components/common/Skeleton';
import { Title } from '../../components/common/Typography';
import EpisodesEmptyState from '../../components/svg/EpisodesEmptyState';
import { getEpisodesByUser } from '../../core/db/modules/episodes/api';
import colors from '../../theme/colors';

const Overview = () => {
  const navigation = useNavigation();

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes'],
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

      {!isLoading ? (
        <View>
          {episodes.data.length > 0 ? (
            episodes.data.map(({ id, pulse, activity, created_at }) => {
              const date = new Date(created_at);

              return (
                <EpisodeCard
                  key={id}
                  id={id}
                  startHour="7:45"
                  endHour="8:00"
                  date={date.toLocaleDateString('nl', {
                    day: 'numeric',
                    month: 'long',
                  })}
                  activity={activity}
                  pulse={pulse}
                />
              );
            })
          ) : (
            <EmptyState
              illustration={<EpisodesEmptyState />}
              title="Een perfecte maand!"
              description="Leg steeds een moment vast, wanneer u een onregelmatige hartslag heeft."
              icon={
                <View className="bg-deepMarine-600 w-6 h-6 rounded-full flex items-center justify-center">
                  <Icon name="plus" size={18} color="white" />
                </View>
              }
              cta="Voeg hartmoment toe"
              onPress={() => navigation.navigate('EpisodesCreateStart')}
            />
          )}
        </View>
      ) : (
        <EpisodeSkeleton count={4} />
      )}
    </ScrollView>
  );
};

export default Overview;
