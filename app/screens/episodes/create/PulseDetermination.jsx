import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Icon } from '../../../components/common/Icon/Icon';
import Popover from '../../../components/common/Popover/Popover';
import { Paragraph, Title } from '../../../components/common/Typography';
import MeasurePulse from '../../../components/svg/MeasurePulse';
import { deleteEpisodeById, updateEpisode } from '../../../core/db/modules/episodes/api';
import { useTranslations } from '../../../core/i18n/LocaleProvider';

const PulseDetermination = ({ route }) => {
  const { episodeId } = route.params;

  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { t } = useTranslations();

  const [isVisible, setIsVisible] = useState(false);

  const column = 'is_medical_approved';
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateEpisode(episodeId, column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(['episodes']);
    },
  });
  const deletion = useMutation((id) => deleteEpisodeById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['episodes']);
      setIsVisible(false);
      navigation.navigate('Main');
    },
  });

  const handlePulseDermination = async (hasMeasuredPulse) => {
    await mutation.mutateAsync(hasMeasuredPulse);

    navigation.navigate('EpisodesCreate', {
      hasMeasuredPulse,
      episodeId,
    });
  };

  const handleDelete = async () => {
    await deletion.mutateAsync(episodeId);
  };

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <Popover animationType="slide" isVisible={isVisible}>
        <View className="bg-white border border-deepMarine-100 shadow-card-md absolute rounded-lg p-4 w-11/12">
          <Title size="medium">{t('episodes.create.cancel.title')}</Title>
          <Paragraph styles="mb-8">{t('episodes.create.cancel.description')} </Paragraph>
          <View className="flex-1 flex flex-row items-center justify-center">
            <View className="flex-1 mr-4">
              <SecondaryButton
                label={t('episodes.create.cancel.cta.secondary')}
                onPress={handleDelete}
              />
            </View>
            <View className="flex-1">
              <PrimaryButton
                label={t('episodes.create.cancel.cta.primary')}
                onPress={() => setIsVisible(false)}
              />
            </View>
          </View>
        </View>
      </Popover>

      <View className="flex flex-row mt-8 mb-4">
        <View className="">
          <Title size="large">{t('episodes.create.pulse.title')}</Title>
          <Paragraph styles="max-w-[90%]">{t('episodes.create.pulse.description')} </Paragraph>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={() => setIsVisible(true)}>
          <Icon name="close" size={32} />
        </TouchableOpacity>
      </View>

      <MeasurePulse />

      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton
            label={t('episodes.create.pulse.cta.secondary')}
            onPress={() => handlePulseDermination(false)}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label={t('episodes.create.pulse.cta.primary')}
            onPress={() => handlePulseDermination(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PulseDetermination;
