import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Dashboard from "../../screens/Dashboard";
import VerifyEmail from "../../screens/authentication/VerifyEmail";
import Intake from "../../screens/onboarding/Intake";

export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyEmail"
        component={VerifyEmail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Intake"
        component={Intake}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
    </Stack.Navigator>
  );
}
