import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { SplashscreenLoader } from "./app/screens/onboarding/Splashscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Stacks
import Dashboard from "./app/screens/Dashboard";
import AuthStackScreens from "./app/router/AuthStack";
import OnboardingStackScreens from "./app/router/OnboardingStack";
// import { AuthContext } from "./app/database/providor/AuthProvidor";

// Keep the splash screen visible while app is loading
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const Stack = createNativeStackNavigator();
  const [isLoading, setIsLoading] = useState(true);
  const [passedOnboarding, setPassedOnboarding] = useState(false);

  // const auth = useContext(AuthContext);
  // const user = auth.user;

  const checkOnboarding = async () => {
    const onboardingAsyncStorage = await AsyncStorage.getItem(
      "@viewedOnboarding"
    );

    if (onboardingAsyncStorage !== null) {
      setPassedOnboarding(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <SplashscreenLoader>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!isLoading && passedOnboarding ? (
              <Stack.Screen name="Auth" component={AuthStackScreens} />
            ) : (
              <Stack.Screen
                name="Onboarding"
                component={OnboardingStackScreens}
              />
            )}
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SplashscreenLoader>
  );
}
