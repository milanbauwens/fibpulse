import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';

const Info = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="mt-6 mb-8">
        <Title size="large">Enkele zaken voordat u een opname maakt</Title>
      </View>

      <View className="w-[90%]">
        <View className="flex flex-row items-baseline mb-8">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              1
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>Uw veiligheid waarborgen </Paragraph>
            <Paragraph>
              Neem even de tijd om tot rust te komen en onderbreek wat u aan het doen was.
            </Paragraph>
          </View>
        </View>

        <View className="flex flex-row items-baseline mb-8">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              2
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>Schakel hulp in </Paragraph>
            <Paragraph>
              Het is aangeraden om iemand uit uw omgeving te contacteren wanneer u een aanval heeft.
            </Paragraph>
          </View>
        </View>

        <View className="flex flex-row items-baseline">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              3
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>Uw veiligheid waarborgen </Paragraph>
            <Paragraph>
              Als de aanval uit de hand loopt, bel dan de <Paragraph isStrong>112</Paragraph> of ga
              naar de dichtstbijzijnde spoeddienst.
            </Paragraph>
          </View>
        </View>
      </View>

      <View style={{ bottom: bottom + 32 }} className="px-5 absolute left-0 right-0 m-auto">
        <PrimaryButton
          label="Oké, begrepen"
          onPress={() => navigation.navigate('EpisodesCreate')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Info;
