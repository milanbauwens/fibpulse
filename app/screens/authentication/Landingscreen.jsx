import { Link, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import { signInWithProvider } from "../../db/modules/auth/api";
import LogoWhite from "../../components/icons/LogoWhite";

const Landingscreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleProviderLogin = async (provider) => {
    setIsLoading(true);
    try {
      await signInWithProvider(provider);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/landing_people_smiling_and_being_happy.jpg")}
      fadeDuration={100}
      style={{}}
    >
      <SafeAreaView className="h-full px-5 relative flex items-center">
        <LogoWhite />
        <Text
          style={{ fontFamily: "Bitter-bold" }}
          className="text-2xl text-white mt-2"
        >
          Fibpulse{" "}
        </Text>
        <View className="absolute bottom-8 w-full">
          <AuthProviderButton
            disabled={isLoading}
            provider="google"
            onPress={() => handleProviderLogin("google")}
          />
          <AuthProviderButton
            disabled={isLoading}
            provider="facebook"
            onPress={() => handleProviderLogin("facebook")}
          />
          <AuthProviderButton
            disabled={isLoading}
            provider="e-mail"
            onPress={() => navigation.navigate("Register")}
          />
          <Text
            className="text-sm text-white mb-8 text-center"
            style={{ fontFamily: "Mulish-medium" }}
          >
            Door zich te registreren, gaat u akkoord met onze{" "}
            <Link to="/Login">
              <Text
                className="text-sm text-white"
                style={{ fontFamily: "Mulish-bold" }}
              >
                Gebruiksvoorwaarden
              </Text>
            </Link>{" "}
            en{" "}
            <Link to="/Login">
              <Text
                className="text-sm text-white"
                style={{ fontFamily: "Mulish-bold" }}
              >
                Privacy verklaring.
              </Text>
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Landingscreen;
