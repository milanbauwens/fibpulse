import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import MeasureCard from '../../components/MeasureCard/MeasureCard';
import Card from '../../components/common/Card/Card';
import { Icon } from '../../components/common/Icon/Icon';
import Label from '../../components/common/Label/Label';
import Paragraph from '../../components/common/Typography/Paragraph';
import Title from '../../components/common/Typography/Title';
import { getEpisodeById } from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';

const Detail = ({ route, navigation }) => {
  const { episodeId } = route.params;

  const { t, locale } = useTranslations();

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  const { created_at, pulse, activity, symptoms, notes } = !isLoading && episode.data;

  const formatDate = (date, format = 'full' | 'short' | 'time') => {
    const dateObject = new Date(date);

    switch (format) {
      case 'full':
        return dateObject.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        });
      case 'short':
        return dateObject.toLocaleDateString(locale, {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        });
      case 'time':
        return dateObject.toLocaleTimeString(locale, {
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h24',
        });
      default:
        return dateObject.toLocaleDateString(locale, {
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
  }, [created_at, isLoading, navigation]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-6">
        <Title size="large">{formatDate(created_at)}</Title>
      </View>

      <View>
        <View className="w-full flex flex-row mb-6">
          <View className="flex-1 mr-2 bg-deepMarine-100 rounded-lg p-3">
            <View className="mb-6 flex flex-row items-center">
              <Icon name="calendar-heart-outline" size={20} />
              <Paragraph isStrong styles="ml-2">
                {t('episodes.detail.start')}
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
                {t('episodes.detail.end')}
              </Paragraph>
            </View>
            <View>
              <Paragraph styles="mb-1">{formatDate(created_at, 'short')}</Paragraph>
              <Title size="large">{formatDate(created_at, 'time')}</Title>
            </View>
          </View>
        </View>

        <Card className="w-full shadow-card-md bg-white border border-deepMarine-100 p-4 flex flex-row items-center mb-6">
          <View className="mr-3">
            <View
              style={{ backgroundColor: colors.turquoise[200] }}
              className="w-10 h-10 flex items-center justify-center rounded-full"
            >
              <Icon name="calendar-outline" size={24} />
            </View>
          </View>
          <Paragraph styles="flex-shrink">
            U had hiervoor al <Paragraph isStrong>56 dagen</Paragraph> geen hartmoment meer gehad.
          </Paragraph>
        </Card>
      </View>

      <View className="mb-6">
        <Label title={t('episodes.detail.measurement')} />
        <MeasureCard
          title={t('episodes.detail.pulse.title')}
          icon="activity-heart-outline"
          description={t('episodes.detail.pulse.description')}
        >
          {activity ? (
            <>
              <Paragraph>{t('episodes.detail.pulse.unit')}</Paragraph>
              <Title size="large">{pulse}</Title>
            </>
          ) : (
            <Paragraph>{t('episodes.detail.pulse.empty')}</Paragraph>
          )}
        </MeasureCard>
      </View>

      <View>
        <Label title={t('episodes.detail.status')} />
        <MeasureCard
          title={t('episodes.detail.activity.title')}
          icon="zap-outline"
          description={t('episodes.detail.activity.description')}
        >
          {activity ? (
            <>
              <Paragraph>{t('episodes.detail.activity.unit')}</Paragraph>
              <Title size="large">{t(`episodes.intake.activity.options.${activity}`)}</Title>
            </>
          ) : (
            <Paragraph>{t('episodes.detail.activity.empty')}</Paragraph>
          )}
        </MeasureCard>

        <View className="mt-2 mb-6">
          <MeasureCard
            title={t('episodes.detail.symptoms.title')}
            icon="file-heart-outline"
            description={t('episodes.detail.symptoms.description')}
          >
            <View className="flex flex-row flex-wrap">
              {symptoms && symptoms.length > 0 ? (
                <>
                  {symptoms.map((symptom, index) => (
                    <View
                      key={index}
                      className=" mr-2 my-1 bg-turquoise-200 rounded-full flex flex-row items-start px-4 py-2"
                    >
                      <Text
                        style={{ fontFamily: 'Mulish-bold' }}
                        className="text-sm text-deepMarine-600"
                      >
                        {t(`episodes.intake.symptoms.options.${symptom}`)}
                      </Text>
                    </View>
                  ))}
                </>
              ) : (
                <Paragraph>{t('episodes.detail.symptoms.empty')}</Paragraph>
              )}
            </View>
          </MeasureCard>
        </View>

        {notes && (
          <View>
            <Label title={t('episodes.detail.notes.title')} />

            <MeasureCard description={t('episodes.detail.notes.description')}>
              <Paragraph>{notes}</Paragraph>
            </MeasureCard>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Detail;
