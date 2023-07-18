import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Icon } from '../../../components/common/Icon/Icon';
import Popover from '../../../components/common/Popover/Popover';
import { Paragraph, Title } from '../../../components/common/Typography';
import MeasurePulse from '../../../components/svg/MeasurePulse';
import { deleteEpisodeById, updateEpisode } from '../../../core/db/modules/episodes/api';

const PulseDetermination = ({ route }) => {
  const { episodeId } = route.params;
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

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
          <Title size="medium">Hartmoment stopzetten?</Title>
          <Paragraph styles="mb-8">
            Als u hier stopt, zullen de tot nu toe ingevulde gegevens verloren gaan.
          </Paragraph>
          <View className="flex-1 flex flex-row items-center justify-center">
            <View className="flex-1 mr-4">
              <SecondaryButton label="Stoppen" onPress={handleDelete} />
            </View>
            <View className="flex-1">
              <PrimaryButton label="Annuleren" onPress={() => setIsVisible(false)} />
            </View>
          </View>
        </View>
      </Popover>

      <View className="flex flex-row mt-8 mb-4">
        <View className="">
          <Title size="large">Heeft u een meting kunnen maken van uw hartslag? </Title>
          <Paragraph styles="max-w-[90%]">
            U kunt dit bereiken met behulp van een smartwatch, hartslagmeter of door uw pols te
            meten.
          </Paragraph>
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
          <SecondaryButton label="Nee, nog niet" onPress={() => handlePulseDermination(false)} />
        </View>
        <View className="flex-1">
          <PrimaryButton label="Ja, al gedaan" onPress={() => handlePulseDermination(true)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PulseDetermination;
