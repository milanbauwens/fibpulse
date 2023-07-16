import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../../components/auth/AuthProvider';
import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import CreateEpisodeIllustration from '../../../components/svg/CreateEpisodeIllustration';
import { supabase } from '../../../core/db/initSupabase';

const Start = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { user } = useAuthContext();

  const handleStart = async () => {
    const { error, data } = await supabase
      .from('episodes')
      .insert({
        user_id: user.id,
      })
      .select('id');
    if (error) {
      console.log(error);
    }

    navigation.navigate('EpisodesCreateInfo', {
      episodeId: data.at(0).id,
    });
  };

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <CreateEpisodeIllustration className="mb-6 " />

      <View className="w-3/4 mx-auto">
        <Title size="large" textCenter>
          Leg een nieuw hartmoment vast
        </Title>
      </View>
      <Paragraph styles="text-center">
        De volgende vragen bundelen alle ervaringen die u had tijdens uw onregelmatige hartslag.
      </Paragraph>

      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton label="Annuleren" onPress={() => navigation.goBack()} />
        </View>
        <View className="flex-1">
          <PrimaryButton label="Ga van start" onPress={handleStart} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
