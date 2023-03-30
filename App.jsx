import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SplashscreenLoader } from "./app/screens/onboarding/Splashscreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContent from "./app/router/AppContent";
import AuthProvider from "./app/components/Auth/AuthProvider";
// import { Buffer } from "buffer";

// Keep the splash screen visible while app is loading
SplashScreen.preventAutoHideAsync().catch(() => {});

// Set global.Buffer to use in supabase-js
// global.Buffer = Buffer;

export default function App() {
  return (
    <SplashscreenLoader>
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaProvider>
    </SplashscreenLoader>
  );
}
