import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import CreateEpisodeIllustration from '../../../components/svg/CreateEpisodeIllustration';

const Start = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="flex flex-col items-center">
        <CreateEpisodeIllustration className="mb-6 " />
        <View className="w-3/4">
          <Title size="large" textCenter>
            Leg een nieuw hartmoment vast
          </Title>
        </View>
        <Paragraph className="text-center">
          De volgende vragen bundelen alle ervaringen die u had tijdens uw onregelmatige hartslag.
        </Paragraph>
      </View>
      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton label="Annuleren" onPress={() => navigation.goBack()} />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label="Ga van start"
            onPress={() => navigation.navigate('EpisodesCreateInfo')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
