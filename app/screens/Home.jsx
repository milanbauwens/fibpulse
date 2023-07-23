import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import EpisodeChart from '../components/EpisodeChart/EpisodeChart';
import Insights from '../components/Insights/Insights';
import SectionCard from '../components/SectionCard/SectionCard';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Paragraph, Title } from '../components/common/Typography';
import { getLatestEpisode } from '../core/db/modules/episodes/api';
import { useTranslations } from '../core/i18n/LocaleProvider';
import { getDaysSinceLastEpisode } from '../core/utils/episode/getDaysSinceLastEpisode';

const Home = () => {
  const { user } = useAuthContext();
  const { t } = useTranslations();
  const navigation = useNavigation();

  const [daysSince, setDaysSince] = useState(0); // TODO: Replace with actual days since last admission

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

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">{t('home.greeting', { name: user.firstname })}</Title>
        {daysSince === 0 ? (
          <Paragraph>{t('home.daysSince.null')}</Paragraph>
        ) : (
          <Paragraph>{t('home.daysSince.default', { count: daysSince })}</Paragraph>
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
      <Insights />
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
    </ScrollView>
  );
};

export default Home;
