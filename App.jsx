import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthProvider from './app/components/auth/AuthProvider';
import LocaleProvider from './app/core/i18n/LocaleProvider';
import { Stack } from './app/core/router/AppStack';
import { SplashscreenLoader } from './app/screens/Splashscreen';

// Keep the splash screen visible while app is loading
SplashScreen.preventAutoHideAsync().catch();

// Creates a Provider that allows us to use React Query
const queryClient = new QueryClient();

// Set navigation bar color for Android
if (Platform.OS === 'android') {
  NavigationBar.setBackgroundColorAsync('white');
}

export default function App() {
  return (
    <SplashscreenLoader>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <LocaleProvider>
            <AuthProvider>
              <NavigationContainer>
                <Stack />
              </NavigationContainer>
            </AuthProvider>
          </LocaleProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </SplashscreenLoader>
  );
}
