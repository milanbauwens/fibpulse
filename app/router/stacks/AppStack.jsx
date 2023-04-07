import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthContext } from "../../components/Auth/AuthProvider";

// Screens
import Dashboard from "../../screens/Dashboard";
import VerifyEmail from "../../screens/authentication/VerifyEmail";
import Intake from "../../screens/onboarding/Intake";
import IntakeExplainer from "../../screens/onboarding/IntakeExplainer";
import Settings from "../../screens/settings";
import PersonalInformation from "../../screens/settings/PersonalInformation";
import MedicalInformation from "../../screens/settings/MedicalInformation";

export default function AppStack() {
  const Stack = createNativeStackNavigator();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [userIsVerified, setUserIsVerified] = useState(false);
  const [userPassedIntake, setUserPassedIntake] = useState(false);

  const checkUserProgress = async () => {
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="VerifyEmail"
          component={VerifyEmail}
        />
      )}
      {!isLoading && !userPassedIntake && (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="IntakeExplainer"
            component={IntakeExplainer}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Intake"
            component={Intake}
          />
        </>
      )}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MedicalInformation"
          component={MedicalInformation}
        />
      </>
    </Stack.Navigator>
  );
}
