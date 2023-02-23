import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Login from "../screens/authentication/Login";
import Register from "../screens/authentication/Register";
import Landingscreen from "../screens/authentication/Landingscreen";
import VerifyEmail from "../screens/authentication/VerifyEmail";

export default function AuthStackScreens() {
  const navigation = useNavigation();
  const AuthStack = createNativeStackNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Landing"
        component={Landingscreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={Register}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="VerifyEmail"
        component={VerifyEmail}
      />
    </AuthStack.Navigator>
  );
}
