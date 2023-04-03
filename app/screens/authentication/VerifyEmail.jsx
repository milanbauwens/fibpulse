import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifiedEmail from "../../components/svg/VerifiedEmail";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useAuthContext } from "../../components/Auth/AuthProvider";
import TertiairyButton from "../../components/Buttons/TertiairyButton";

const VerifyEmail = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();

  const checkVerifyEmail = () => {
    setIsLoading(true);
    try {
      if (user.passedIntake) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("IntakeExplainer");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="px-4 h-screen bg-white">
      <View className="flex h-full flex-col items-center">
        <VerifiedEmail className="mb-12 mt-8" />
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-center text-deepMarine-900 mb-2 "
        >
          Verifieer uw account
        </Text>
        <Text
          style={{ fontFamily: "Mulish-medium" }}
          className="text-base text-center text-deepMarine-700"
        >
          Voordat u verder kunt gaan, moet u eerst uw e-mailadres verifiëren. Ga
          naar uw mailbox en volg de stappen. Kijk zeker ook uw spambox na.
        </Text>

        <View className="absolute left-0 right-0 bottom-2 m-auto flex flex-col justify-center">
          <PrimaryButton
            label="Oké"
            onPress={checkVerifyEmail}
            isLoading={isLoading}
          />
          <TertiairyButton label="Stuur verificatie e-mail opnieuw." />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
