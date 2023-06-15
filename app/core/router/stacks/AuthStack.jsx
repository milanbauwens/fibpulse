import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Register from 'screens/auth/Register';

import Landingscreen from '../../../screens/auth/Landingscreen';
// Screens
import Login from '../../../screens/auth/Login';
import ResetPassword from '../../../screens/auth/ResetPassword';
import VerifyEmail from '../../../screens/auth/VerifyEmail';
import Walkthrough from '../../../screens/onboarding/Walkthrough';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [passedOnboarding, setPassedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const onboardingAsyncStorage = await AsyncStorage.getItem('@viewedOnboarding');
      if (onboardingAsyncStorage !== null) {
        setPassedOnboarding(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <>
      {!isLoading && (
        <Stack.Navigator>
          {!passedOnboarding && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Walktrough"
              component={Walkthrough}
            />
          )}
          <Stack.Screen options={{ headerShown: false }} name="Landing" component={Landingscreen} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="ResetPassword"
            component={ResetPassword}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="VerifyEmail"
            component={VerifyEmail}
          />
        </Stack.Navigator>
      )}
    </>
  );
}
