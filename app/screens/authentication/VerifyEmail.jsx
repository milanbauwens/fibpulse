import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifiedEmail from "../../components/icons/VerifiedEmail";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useAuthContext } from "../../components/Auth/AuthProvider";

const VerifyEmail = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();

  const checkVerifyEmail = () => {
    setIsLoading(true);
    try {
      if (user.email_verified) {
        navigation.navigate("Dashboard");
      } else {
        console.log("Email not verified");
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
        <VerifiedEmail className="mb-8 mt-8" />
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-[28px] text-center text-neutral-900 mb-4 leading-10 "
        >
          Verifiëer uw account
        </Text>
        <Text
          style={{ fontFamily: "Mulish-regular" }}
          className="text-base text-center text-neutral-900 mb-4"
        >
          Voordat u verder kunt gaan, dient u uw e-mailadres te verifiëren. Ga
          naar uw mailbox en volg de stappen. Check zeker ook uw spambox, indien
          u geen e-mail terugvindt.
        </Text>
        <View className="w-full px-4 absolute bottom-6">
          <PrimaryButton
            label="E-mail geverifiëerd"
            onPress={checkVerifyEmail}
            isLoading={isLoading}
          />
          <TouchableOpacity className="w-full mt-2" activeOpacity={0.8}>
            <Text
              style={{ fontFamily: "Mulish-semibold" }}
              className="text-base text-center text-neutral-900"
            >
              Stuur verificatie e-mail opnieuw.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
