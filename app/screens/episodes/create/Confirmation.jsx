import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import EpisodeConfirmation from '../../../components/svg/EpisodeConfirmation';

const Confirmation = ({ route }) => {
  const { episodeId } = route.params;
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View>
        <EpisodeConfirmation />
      </View>

      <View>
        <Title textCenter size="large">
          Hartmoment vastgelegd!
        </Title>
        <Paragraph className="text-center max-w-[90%]">
          Het moment is toegevoegd aan uw dagboek. Als u iets bent vergeten kan u deze steeds
          aanpassen.
        </Paragraph>
      </View>

      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton label="Naar overzicht" onPress={() => navigation.navigate('Main')} />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label="Bekijk moment"
            onPress={() =>
              navigation.navigate('EpisodesDetail', {
                episodeId,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
