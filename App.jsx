import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SplashscreenLoader } from "./app/screens/onboarding/Splashscreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppContent from "./app/core/router/AppContent";
import AuthProvider from "./app/components/auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Keep the splash screen visible while app is loading
SplashScreen.preventAutoHideAsync().catch(() => {});

// Creates a Provider that allows us to use React Query
const queryClient = new QueryClient();

export default function App() {
  return (
    <SplashscreenLoader>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <NavigationContainer>
              <AppContent />
            </NavigationContainer>
          </AuthProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </SplashscreenLoader>
  );
}
