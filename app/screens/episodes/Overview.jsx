import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import EpisodePaginator from '../../components/EpisodePaginator/EpisodePaginator';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import FeedbackMessage from '../../components/common/FeedbackMessage/FeedbackMessage';
import { Icon } from '../../components/common/Icon/Icon';
import { EpisodeSkeleton } from '../../components/common/Skeleton';
import EpisodesEmptyState from '../../components/svg/EpisodesEmptyState';
import { getEpisodesByDate } from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { formatDate } from '../../core/utils/global/formatData';
import colors from '../../theme/colors';

const Overview = ({ navigation }) => {
  const { t, locale } = useTranslations();

  const scrollY = new Animated.Value(0);

  const [date, setDate] = useState(new Date());
  const [errorVisible, setErrorVisible] = useState(!!error);

  const {
    data: episodes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['episodes', date.toISOString()],
    queryFn: ({ queryKey }) => getEpisodesByDate(queryKey[1]),
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          activeOpacity={0.8}
          className=" w-8 h-8 rounded-full flex items-center justify-center bg-turquoise-200"
        >
          <Icon name="plus" size={24} color={colors.deepMarine[500]} />
        </TouchableOpacity>
      ),
    });
  }, [scrollY]);

  return (
    <>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
          listener: (event) => {
            navigation.setOptions({
              scrollY: event.nativeEvent.contentOffset.y,
            });
          },
        })}
        contentContainerStyle={{ paddingBottom: 48 }}
        style={{ paddingTop: 16 }}
        className="w-full h-screen bg-white px-5"
      >
        <EpisodePaginator onChange={(date) => setDate(date)} />

        {!isLoading ? (
          <View>
            {episodes && episodes.data.length > 0 ? (
              episodes.data.map(({ id, pulse, activity, start_date, end_date }) => {
                const startDate = new Date(start_date);
                const endDate = new Date(end_date);

                return (
                  <EpisodeCard
                    key={id}
                    id={id}
                    startHour={formatDate(startDate, 'time', locale)}
                    endHour={formatDate(endDate, 'time', locale)}
                    date={startDate.toLocaleDateString(locale, {
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
                title={t('episodes.emptyState.title')}
                description={t('episodes.emptyState.description')}
                icon={
                  <View className="bg-deepMarine-600 w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon name="plus" size={18} color="white" />
                  </View>
                }
                cta={t('episodes.emptyState.cta')}
                onPress={() => navigation.navigate('EpisodesCreateStart')}
              />
            )}
          </View>
        ) : (
          <EpisodeSkeleton count={4} />
        )}
      </Animated.ScrollView>
      <FeedbackMessage
        isVisible
        icon="alert-triangle"
        type="error"
        content={t('error.generic')}
        onHide={() => setErrorVisible(false)}
      />
    </>
  );
};

export default Overview;
