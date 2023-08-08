import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import EpisodeChart from '../components/EpisodeChart/EpisodeChart';
import Insights from '../components/Insights/Insights';
import SectionCard from '../components/SectionCard/SectionCard';
import { useAuthContext } from '../components/auth/AuthProvider';
import FeedbackMessage from '../components/common/FeedbackMessage/FeedbackMessage';
import { Icon } from '../components/common/Icon/Icon';
import { Paragraph, Title } from '../components/common/Typography';
import { LifestyleIllustration } from '../components/svg/onboarding';
import { getLatestEpisode } from '../core/db/modules/episodes/api';
import { useTranslations } from '../core/i18n/LocaleProvider';
import { getDaysSinceLastEpisode } from '../core/utils/episode/getDaysSinceLastEpisode';
import colors from '../theme/colors';

const Home = ({ navigation }) => {
  const { t } = useTranslations();
  const { user } = useAuthContext();

  const [daysSince, setDaysSince] = useState(0);
  const [errorVisible, setErrorVisible] = useState(!!error);

  // Get latest episode
  const {
    data: episodes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['episodes'],
    queryFn: getLatestEpisode,
  });

  useEffect(() => {
    if (!isLoading && episodes.data) {
      setDaysSince(getDaysSinceLastEpisode(episodes.data.start_date));
    }
  }, [episodes, isLoading]);

  // Handle scroll event
  const scrollY = new Animated.Value(0);

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
  }, []);

  return (
    <>
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
          listener: (event) => {
            navigation.setOptions({
              scrollY: event.nativeEvent.contentOffset.y,
            });
          },
        })}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        scrollEventThrottle={16}
        className="w-full h-screen bg-white px-5"
      >
        <View className="mb-4">
          <Title size="large">{t('home.greeting', { name: user.firstname })}</Title>
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
          withIllustration
          illustration={<LifestyleIllustration />}
          label={t('home.discover.tag')}
          title={t('home.discover.title')}
          description={t('home.discover.description')}
          cta={t('home.discover.cta')}
          icon="calendar-heart-outline"
          onPress={() => navigation.navigate('Discover')}
        />
      </Animated.ScrollView>
      <FeedbackMessage
        isVisible={errorVisible}
        icon="alert-triangle"
        type="error"
        content={t('error.generic')}
        onHide={() => setErrorVisible(false)}
      />
    </>
  );
};

export default Home;
