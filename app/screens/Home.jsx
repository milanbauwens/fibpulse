import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import EpisodeChart from '../components/EpisodeChart/EpisodeChart';
import Insights from '../components/Insights/Insights';
import SectionCard from '../components/SectionCard/SectionCard';
import { Icon } from '../components/common/Icon/Icon';
import { Paragraph } from '../components/common/Typography';
import { getLatestEpisode } from '../core/db/modules/episodes/api';
import { useTranslations } from '../core/i18n/LocaleProvider';
import { getDaysSinceLastEpisode } from '../core/utils/episode/getDaysSinceLastEpisode';
import colors from '../theme/colors';

const Home = ({ navigation }) => {
  const { t } = useTranslations();

  const [daysSince, setDaysSince] = useState(0); // TODO: Replace with actual days since last admission
  const [scrollY, setScrollY] = useState(0);

  // Get latest episode
  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes'],
    queryFn: getLatestEpisode,
  });

  useEffect(() => {
    if (!isLoading && episodes.data) {
      setDaysSince(getDaysSinceLastEpisode(episodes.data.created_at));
    }
  }, [episodes, isLoading]);

  useEffect(() => {
    navigation.setOptions({
      scrollY,
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

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY < 60) {
      setScrollY(offsetY);
    }
  };

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
      style={{ paddingTop: 0 }}
      scrollEventThrottle={16}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        {daysSince === 0 ? (
          <Paragraph>
            {`${t('home.daysSince.null.first')} `}
            <Paragraph isStrong>{t('home.daysSince.null.count')}</Paragraph>
            {` ${t('home.daysSince.null.last')}`}
          </Paragraph>
        ) : (
          <Paragraph>
            {`${t('home.daysSince.default.first')} `}
            <Paragraph isStrong>{`${daysSince} ${
              daysSince === 1 ? t('home.daysSince.day') : t('home.daysSince.days')
            }`}</Paragraph>
            {` ${t('home.daysSince.default.last')}`}
          </Paragraph>
        )}
      </View>
      <View className="mb-6">
        <CTACard
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          title={t('home.cta.title')}
          description={t('home.cta.subtitle')}
        />
      </View>

      <SectionCard
        label={t('home.episodes.tag')}
        title={t('home.episodes.title')}
        description={t('home.episodes.description')}
        cta={t('home.episodes.cta')}
        icon="calendar-heart-outline"
        onPress={() => navigation.navigate('Episodes')}
      >
        <EpisodeChart />
      </SectionCard>

      <SectionCard
        label={t('home.insights.tag')}
        title={t('home.insights.title')}
        description={t('home.insights.description')}
      >
        <Insights />
      </SectionCard>

      <SectionCard
        withImage
        source={require('../../assets/images/woman-running.jpg')}
        label={t('home.discover.tag')}
        title={t('home.discover.title')}
        description={t('home.discover.description')}
        cta={t('home.discover.cta')}
        icon="calendar-heart-outline"
        onPress={() => navigation.navigate('Discover')}
      />
    </Animated.ScrollView>
  );
};

export default Home;
