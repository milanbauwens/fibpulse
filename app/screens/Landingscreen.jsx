import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import AuthProviderButton from '../components/common/Buttons/AuthProviderButton';
import PrimaryButton from '../components/common/Buttons/PrimaryButton';
import TertiairyButton from '../components/common/Buttons/TertiairyButton';
import { Display, Paragraph } from '../components/common/Typography';
import CircleMd from '../components/svg/CircleMd';
import CircleSm from '../components/svg/CircleSm';
import Ellipse from '../components/svg/Ellipse';
import Logo from '../components/svg/Logo';
import { signInWithProvider } from '../core/db/modules/auth/api';
import { handleAuthError } from '../core/utils/auth/handleAuthError';

const Landingscreen = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleProviderLogin = async (provider) => {
    setIsLoading(true);
    try {
      await signInWithProvider(provider);
    } catch (error) {
      const authError = handleAuthError(error);
      setError(authError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full relative">
      <Logo
        className="mt-2 mb-16 mx-auto md:mb-8 sm:mb-4"
        onPress={async () => await AsyncStorage.removeItem('@viewedOnboarding')}
      />

      <Ellipse className="absolute top-12 right-0" />
      <CircleMd className="absolute bottom-1/2 left-0" />
      <CircleSm className="absolute bottom-4 right-0" />

      <View className="mx-auto px-5">
        <Display>Laat uw hartritmestoornis niet de bovenhand nemen.</Display>
        <Paragraph>
          Begin vandaag nog met een dagboek bij te houden over uw hartritmestoornis.
        </Paragraph>
      </View>

      <View style={{ bottom: bottom + 8 }} className="absolute w-full mx-auto px-5">
        <AuthProviderButton
          disabled={isLoading}
          provider="google"
          onPress={() => handleProviderLogin('google')}
        />
        <AuthProviderButton
          disabled={isLoading}
          provider="facebook"
          onPress={() => handleProviderLogin('facebook')}
        />

        <View className="relative flex flex-row items-center mb-4">
          <View className="flex-grow border-t border-deepMarine-200" />
          <Text
            style={{ fontFamily: 'Mulish-regular' }}
            className="flex-shrink mx-4 text-deepMarine-200 text-sm"
          >
            Of
          </Text>
          <View className="flex-grow border-t border-deepMarine-200" />
        </View>

        <View className="mb-2">
          <PrimaryButton
            icon={<MaterialIcons name="email" size={24} color="#FFF" />}
            label="Doorgaan met E-mail"
            onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          />
        </View>
        <Text
          className="text-xs text-deepMarine-700 mb-10 text-center"
          style={{ fontFamily: 'Mulish-medium' }}
        >
          Door zich te registreren, gaat u akkoord met onze{' '}
          <Link to="/Login">
            <Text className="text-xs text-deepMarine-500" style={{ fontFamily: 'Mulish-bold' }}>
              Gebruiksvoorwaarden
            </Text>
          </Link>{' '}
          en{' '}
          <Link to="/Login">
            <Text className="text-xs text-deepMarine-500" style={{ fontFamily: 'Mulish-bold' }}>
              Privacy verklaring.
            </Text>
          </Link>
        </Text>

        <TertiairyButton
          label="Heeft u al een account?"
          action="Inloggen."
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Landingscreen;
