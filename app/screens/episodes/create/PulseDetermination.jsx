import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import MeasurePulse from '../../../components/svg/MeasurePulse';
import { updateEpisode } from '../../../core/db/modules/episodes/api';

const PulseDetermination = ({ route }) => {
  const { episodeId } = route.params;
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  const column = 'is_medical_approved';
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateEpisode(episodeId, column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(['episodes']);
    },
  });

  const handlePulseDermination = async (hasMeasuredPulse) => {
    await mutation.mutateAsync(hasMeasuredPulse);

    navigation.navigate('EpisodesCreate', {
      hasMeasuredPulse,
      episodeId,
    });
  };

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="mt-6 mb-4">
        <Title size="large">Heeft u een meting kunnen maken van uw hartslag? </Title>
        <Paragraph className="max-w-[90%]">
          U kunt dit bereiken met behulp van een smartwatch, hartslagmeter of door uw pols te meten.
        </Paragraph>
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
