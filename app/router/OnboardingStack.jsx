import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// Screens
import Walkthrough from "../screens/onboarding/Walkthrough";
import Landingscreen from "../screens/authentication/Landingscreen";

const OnboardingStack = createNativeStackNavigator();

export default function OnboardingStackScreens() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        options={{ headerShown: false }}
        name="Walktrough"
        component={Walkthrough}
      />

    </OnboardingStack.Navigator>
  );
}
