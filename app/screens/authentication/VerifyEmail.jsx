import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../db/initSupabase";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifiedEmail from "../../components/icons/VerifiedEmail";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const VerifyEmail = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const resendVerificationEmail = async () => {
    try {
      const { error } = await supabase.auth.api.updateUser(
        supabase.auth.user().id,
        {
          email: supabase.auth.user().email,
        }
      );
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkVerifyEmail = async () => {
    setIsLoading(true);
    try {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          if (event === "MFA_CHALLENGE_VERIFIED") {
            navigation.navigate("Intake");
          } else {
            console.log("Email not verified");
          }
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="px-4 h-screen bg-white">
      <View className="flex h-full flex-col items-center">
        <VerifiedEmail className="mb-14 mt-2" />
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
          <TouchableOpacity
            className="w-full"
            onPress={resendVerificationEmail}
            activeOpacity={0.8}
          >
            <Text
              style={{ fontFamily: "Mulish-semibold" }}
              className="text-base text-center text-neutral-900 mb-4"
            >
              Stuur verificatie e-mail opnieuw.
            </Text>
          </TouchableOpacity>
          <PrimaryButton
            label="E-mail geverifiëerd"
            onPress={() => {
              navigation.navigate("Intake");
            }}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
