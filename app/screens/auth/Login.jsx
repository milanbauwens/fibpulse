import { useNavigation } from '@react-navigation/native';
import React, { createRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Title } from '../../components/common/Typography';
import Error from '../../components/errors/Error';
import { supabase } from '../../core/db/initSupabase';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const Login = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  const { control, handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [signInError, setSignInError] = useState();

  const passwordInputRef = createRef();

  const handleLogin = async (formData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.userEmail,
        password: formData.userPassword,
      });
      if (error) {
        const authError = handleAuthError(error);
        setSignInError(authError);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full px-5">
      <BackButton onPress={() => navigation.navigate('Landing')} />
      <View className="bg-white z-[2] mb-6">
        <Title size="large">{t('login.title')}</Title>
      </View>
      <KeyboardAwareScrollView
        overScrollMode="never"
        bounces={false}
        extraHeight={0}
        className="flex flex-col gap-y-6"
      >
        {signInError && (
          <View className="mt-2">
            <Error error={signInError} />
          </View>
        )}

        <View>
          <Formgroup
            rules={{
              required: t('error.email.required'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('error.email.invalid'),
              },
            }}
            control={control}
            label={t('input.email')}
            returnKeyType="next"
            autoCapitalize="none"
            keyboardType="email-address"
            inputName="userEmail"
            onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
          />
        </View>

        <View>
          <Formgroup
            rules={{
              required: t('error.password.required'),
              minLength: {
                value: 6,
                message: t('error.password.length'),
              },
            }}
            control={control}
            label={t('input.password')}
            inputName="userPassword"
            ref={passwordInputRef}
            returnKeyType="done"
            autoCapitalize="none"
            keyboardType="default"
            type="password"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>

        <View className="mb-2">
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              className="mb-4 w-full mt-4"
              onPress={() => navigation.navigate('ResetPassword')}
            >
              <Text
                className="text-right pr-2 text-base text-deepMarine-900"
                style={{ fontFamily: 'Mulish-medium' }}
              >
                {t('login.forgot')}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mb-2">
            <PrimaryButton
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
              label={t('login.cta')}
            />
          </View>
          <TertiairyButton
            label={t('login.noAccount')}
            action={t('login.register')}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
