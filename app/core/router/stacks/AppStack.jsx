import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../../../components/auth/AuthProvider';
// Screens
import Dashboard from '../../../screens/Dashboard';
import VerifyEmail from '../../../screens/auth/VerifyEmail';
import Intake from '../../../screens/onboarding/Intake';
import IntakeExplainer from '../../../screens/onboarding/IntakeExplainer';
import Settings from '../../../screens/settings';
import AccountScreen from '../../../screens/settings/AccountScreen';
import MedicalDataScreen from '../../../screens/settings/MedicalDataScreen';

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [userIsVerified, setUserIsVerified] = useState(false);
  const [userPassedIntake, setUserPassedIntake] = useState(false);

  const checkUserProgress = () => {
    try {
      if (user.emailVerified) {
        setUserIsVerified(true);
      }
      if (user.passedIntake) {
        setUserPassedIntake(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUserProgress();
  }, []);

  return (
    <Stack.Navigator>
      {!isLoading && !userIsVerified && (
        <Stack.Screen options={{ headerShown: false }} name="VerifyEmail" component={VerifyEmail} />
      )}
      {!isLoading && !userPassedIntake && (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="IntakeExplainer"
            component={IntakeExplainer}
          />
          <Stack.Screen options={{ headerShown: false }} name="Intake" component={Intake} />
        </>
      )}
      <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
      <>
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        {/* Settings */}
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="AccountScreen"
            component={AccountScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MedicalDataScreen"
            component={MedicalDataScreen}
          />
        </>
      </>
    </Stack.Navigator>
  );
}
