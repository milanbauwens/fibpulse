import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import WalkthroughItem from "../../components/Walkthrough/WalkthroughItem";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const landingContent = {
  title: "Neem vandaag nog de controle over uw hart",
  description: "Maak een nieuw profiel aan of log in met een bestaand profiel.",
  image: require("../../../assets/images/walkthrough-medical-bloodpressure.jpg"),
};

const Landingscreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <WalkthroughItem item={landingContent} />
      <View className="px-4 mt-10">
        <PrimaryButton
          onPress={() => navigation.navigate("Register")}
          label="Maak een profiel"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          activeOpacity={1}
        >
          <Text
            style={{ fontFamily: "Mulish-regular" }}
            className="text-center text-lg text-neutral-900"
          >
            Heeft u al een profiel?{" "}
            <Text
              className="text-deepMarine-500"
              style={{ fontFamily: "Mulish-bold" }}
            >
              Log in.
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landingscreen;
