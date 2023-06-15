import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import { Paragraph, Title } from '../../components/common/Typography';
import VerifiedEmail from '../../components/svg/VerifiedEmail';

const VerifyEmail = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  // const { user } = useAuthContext();

  // const checkVerifyEmail = () => {
  //   setIsLoading(true);
  //   try {
  //     if (user.passedIntake) {
  //       navigation.navigate("Dashboard");
  //     } else {
  //       navigation.navigate("IntakeExplainer");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <SafeAreaView className="px-4 h-screen bg-white">
      <View className="flex h-full flex-col items-center">
        <VerifiedEmail className="mb-12 mt-8" />
        <Title size="large" textCenter>
          Verifieer uw account
        </Title>
        <Paragraph className="text-center">
          Voordat u verder kunt gaan, moet u eerst uw e-mailadres verifiëren. Ga naar uw mailbox en
          volg de stappen. Kijk zeker ook uw spambox na.
        </Paragraph>

        <View className="absolute left-0 right-0 bottom-2 m-auto flex flex-col justify-center">
          <View className="mb-6">
            <PrimaryButton
              label="Email geverifieerd"
              onPress={() => navigation.navigate('IntakeExplainer')}
              isLoading={isLoading}
            />
          </View>
          <TertiairyButton label="Stuur verificatie e-mail opnieuw." />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
