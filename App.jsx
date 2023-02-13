import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import Constants from "expo-constants";
import { SplashscreenLoader } from "./app/screens/onboarding/Splashscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Screens
import Walkthrough from "./app/screens/onboarding/Walkthrough";
import Landingscreen from "./app/screens/authentication/Landingscreen";
import Register from "./app/screens/authentication/Register";
import Login from "./app/screens/authentication/Login";
import Intake from "./app/screens/onboarding/Intake";
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
    <SplashscreenLoader image={{ uri: Constants.manifest.splash.imageUrl }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!isLoading && passedOnboarding ? (
              <>
                <Stack.Screen name="Landing" component={Landingscreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="Walkthrough" component={Walkthrough} />
                <Stack.Screen name="Landing" component={Landingscreen} />
              </>
            )}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="Intake" component={Intake} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SplashscreenLoader>
  );
}
