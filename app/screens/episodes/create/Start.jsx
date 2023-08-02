import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import CreateEpisodeIllustration from '../../../components/svg/CreateEpisodeIllustration';
import { createEpisode } from '../../../core/db/modules/episodes/api';
import { useTranslations } from '../../../core/i18n/LocaleProvider';

const Start = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();

  const handleStart = async () => {
    try {
      const episode = await createEpisode();

      if (episode) {
        navigation.navigate('EpisodesCreateInfo', {
          episodeId: episode.at(0).id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <CreateEpisodeIllustration className="mb-6 " />

      <View className="w-3/4 mx-auto">
        <Title size="large" textCenter>
          {t('episodes.create.start.title')}
        </Title>
      </View>
      <Paragraph styles="text-center">{t('episodes.create.start.description')}</Paragraph>

      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton
            label={t('episodes.create.start.cta.secondary')}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label={t('episodes.create.start.cta.primary')}
            onPress={async () => await handleStart()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
