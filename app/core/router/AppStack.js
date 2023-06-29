import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { useAuthContext } from '../../components/auth/AuthProvider';
import Home from '../../screens/Home';
import Landingscreen from '../../screens/Landingscreen';
import { Onboarding } from '../../screens/Onboarding';
import { Intake, IntakeStart } from '../../screens/intake';
import { MedicalDataScreen, PersonalInformationScreen, Settings } from '../../screens/settings';
import AuthStack from './AuthStack';

export const AppStack = () => {
  const AppStack = createNativeStackNavigator();
  const { isLoggedIn } = useAuthContext();
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const onboarding = await AsyncStorage.getItem('@viewedOnboarding');
      if (onboarding !== null) {
        setCompletedOnboarding(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  if (isLoggedIn) {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Medical Intake */}
        {/* TODO: Check if user has completed intake. If so, skip to Main*/}
        <AppStack.Screen name="IntakeStart" component={IntakeStart} />
        <AppStack.Screen name="Intake" component={Intake} />

        {/* Bottom Tab Navigator */}
        <AppStack.Screen name="Main" component={BottomNavigation} />

        {/* Home */}
        <AppStack.Screen name="Home" component={Home} />

        {/* Settings */}
        <AppStack.Screen name="Settings" component={Settings} />
        <AppStack.Screen name="MedicalProfile" component={MedicalDataScreen} />
        <AppStack.Screen name="Profile" component={PersonalInformationScreen} />

        {/* <AppStack.Screen
          name="IndGoal"
          component={IndividualGoalScreen}
          options={{
            presentation: 'modal',
          }}
        /> */}
      </AppStack.Navigator>
    );
  } else {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {completedOnboarding ? null : <AppStack.Screen name="Onboarding" component={Onboarding} />}
        <AppStack.Screen name="Landing" component={Landingscreen} />
        <AppStack.Screen name="Auth" component={AuthStack} />
      </AppStack.Navigator>
    );
  }
};
