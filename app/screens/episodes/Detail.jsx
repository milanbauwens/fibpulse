import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import MeasureCard from '../../components/MeasureCard/MeasureCard';
import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Card from '../../components/common/Card/Card';
import { Icon } from '../../components/common/Icon/Icon';
import Label from '../../components/common/Label/Label';
import Popover from '../../components/common/Popover/Popover';
import Paragraph from '../../components/common/Typography/Paragraph';
import Title from '../../components/common/Typography/Title';
import { deleteEpisodeById, getEpisodeById } from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';

const Detail = ({ route, navigation }) => {
  const { episodeId } = route.params;

  const { t, locale } = useTranslations();

  const [isVisible, setIsVisible] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  const { created_at, start_date, end_date, pulse, activity, symptoms, notes } =
    !isLoading && episode.data;

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

  useEffect(() => {
    if (!isLoading) {
      navigation.setOptions({
        title: formatDate(start_date),
        headerTitle: formatDate(start_date),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            activeOpacity={0.8}
            className="mb-8 mt-2"
          >
            <Icon name="dots-horizontal" size={28} color={colors.turquoise[700]} />
          </TouchableOpacity>
        ),
      });
    }
  }, [created_at, isLoading, navigation]);

  const queryClient = useQueryClient();

  const deletion = useMutation((id) => deleteEpisodeById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['episodes']);
      setDeleteConfirmation(false);
      setIsVisible(false);
      navigation.navigate('Main', { screen: 'Episodes' });
    },
  });

  const handleDelete = async () => {
    await deletion.mutateAsync(episodeId);
  };

  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        {deleteConfirmation ? (
          <View className="bg-white border border-deepMarine-100 shadow-card-md absolute rounded-lg p-4 w-11/12">
            <Title size="medium">{t('episodes.detail.delete.confirmation.title')}</Title>
            <Paragraph styles="mb-8">
              {t('episodes.detail.delete.confirmation.description')}{' '}
            </Paragraph>
            <View className="flex-1 flex flex-row items-center justify-center">
              <View className="flex-1 mr-4">
                <PrimaryButton
                  label={t('episodes.detail.delete.confirmation.cta.primary')}
                  onPress={() => setDeleteConfirmation(false)}
                />
              </View>
              <View className="flex-1">
                <TertiairyButton
                  action={t('episodes.detail.delete.confirmation.cta.secondary')}
                  type="error"
                  onPress={handleDelete}
                />
              </View>
            </View>
          </View>
        ) : (
          <View className="bg-white border border-deepMarine-100 shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6 pb-14">
            <View className="flex flex-row justify-end items-center mb-2 ">
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                activeOpacity={0.8}
                className="w-8 h-8 flex items-center justify-center rounded-full"
              >
                <Icon name="close" size={24} color={colors.deepMarine[700]} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="px-3 w-full mb-8 flex flex-row items-center ">
              <Icon name="edit" size={28} color={colors.deepMarine[700]} />
              <Paragraph styles="ml-5 text-lg">{t('episodes.detail.edit')}</Paragraph>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDeleteConfirmation(true);
              }}
              className="w-full px-3 flex flex-row items-center "
            >
              <Icon name="trash" size={28} color={colors.deepMarine[700]} />
              <Paragraph textColor="text-red-600" styles="ml-5 text-lg">
                {t('episodes.detail.delete.title')}
              </Paragraph>
            </TouchableOpacity>
          </View>
        )}
      </Popover>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 64 }}
        style={{ paddingTop: 16 }}
        className="w-full h-screen bg-white px-5"
      >
        <View className="mb-6">
          <Title size="large">{formatDate(start_date)}</Title>
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
                <Paragraph styles="mb-1">{formatDate(start_date, 'short')}</Paragraph>
                <Title size="large">{formatDate(start_date, 'time')}</Title>
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
                <Paragraph styles="mb-1">{formatDate(end_date, 'short')}</Paragraph>
                <Title size="large">{formatDate(end_date, 'time')}</Title>
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
    </>
  );
};

export default Detail;
