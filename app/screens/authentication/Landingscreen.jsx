import { Link, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { signInWithProvider } from "../../db/modules/auth/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

// Components
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import Logo from "../../components/svg/Logo";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import TertiairyButton from "../../components/Buttons/TertiairyButton";
import Ellipse from "../../components/svg/Ellipse";
import CircleMd from "../../components/svg/CircleMd";
import CircleSm from "../../components/svg/CircleSm";
import Display from "../../components/Typograhy/Display";
import Paragraph from "../../components/Typograhy/Paragraph";

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
    <SafeAreaView className="bg-white h-full px-5 relative flex items-center">
      <Logo
        className="mt-2 mb-16"
        onPress={async () => await AsyncStorage.removeItem("@viewedOnboarding")}
      />

      <Ellipse
        className="absolute top-12 right-0"
        onPress={() => navigation.navigate("IntakeExplainer")}
      />
      <CircleMd className="absolute bottom-1/2 left-0" />
      <CircleSm className="absolute bottom-4 right-0" />

      <View>
        <Display>Laat uw hartritmestoornis niet de bovenhand nemen.</Display>
        <Paragraph>
          Begin vandaag nog met het zorg dragen voor uw hart.
        </Paragraph>
      </View>

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

        <View className="relative flex flex-row items-center mb-4">
          <View className="flex-grow border-t border-deepMarine-300" />
          <Text
            style={{ fontFamily: "Mulish-regular" }}
            className="flex-shrink mx-4 text-deepMarine-300 text-sm"
          >
            Of
          </Text>
          <View className="flex-grow border-t border-gray-400" />
        </View>

        <PrimaryButton
          icon={<MaterialIcons name="email" size={24} color="#FFF" />}
          label={"Doorgaan met E-mail"}
          onPress={() => navigation.navigate("Register")}
        />
        <Text
          className="text-xs text-deepMarine-700 mb-10 mt-[-16px] text-center"
          style={{ fontFamily: "Mulish-regular" }}
        >
          Door zich te registreren, gaat u akkoord met onze{" "}
          <Link to="/Login">
            <Text
              className="text-xs text-deepMarine-500"
              style={{ fontFamily: "Mulish-bold" }}
            >
              Gebruiksvoorwaarden
            </Text>
          </Link>{" "}
          en{" "}
          <Link to="/Login">
            <Text
              className="text-xs text-deepMarine-500"
              style={{ fontFamily: "Mulish-bold" }}
            >
              Privacy verklaring.
            </Text>
          </Link>
        </Text>
        <View className="mb-2">
          <TertiairyButton
            label="Heeft u al een account?"
            action="Inloggen."
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landingscreen;
