import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthProvider from './app/components/auth/AuthProvider';
import AppContent from './app/core/router/AppContent';
import { SplashscreenLoader } from './app/screens/onboarding/Splashscreen';

// Keep the splash screen visible while app is loading
SplashScreen.preventAutoHideAsync().catch();

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
