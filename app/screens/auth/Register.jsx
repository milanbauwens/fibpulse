import { Link, useNavigation } from '@react-navigation/native';
import React, { createRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Title } from '../../components/common/Typography';
import Error from '../../components/errors/Error';
import { SignUp } from '../../core/db/modules/auth/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const Register = () => {
  const navigation = useNavigation();
  const { t, locale } = useTranslations();

  const { control, handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState();

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const nameInputRef = createRef();
  const firstnameInputRef = createRef();

  async function handleRegister({ email, password, firstname, lastname }) {
    setIsLoading(true);
    try {
      await SignUp(email, password, { firstname, lastname });
    } catch (error) {
      console.log(error);
      console.log(error.message);
      const authError = handleAuthError(error, locale);
      setSignUpError(authError);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-white h-full px-5">
      <BackButton onPress={() => navigation.navigate('Landing')} />
      <View className="bg-white z-[2] mb-6">
        <Title size="large">{t('register.title')}</Title>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingBottom: 48 }}
        showsVerticalScrollIndicator={false}
      >
        {signUpError && (
          <View className="mt-2 mb-6">
            <Error error={signUpError} />
          </View>
        )}
        <View className=" flex gap-y-6">
          <View>
            <Formgroup
              rules={{ required: t('error.firstname.required') }}
              control={control}
              label={t('input.firstname')}
              ref={firstnameInputRef}
              returnKeyType="next"
              autoCapitalize="words"
              keyboardType="default"
              inputName="firstname"
              onSubmitEditing={() => nameInputRef.current && nameInputRef.current.focus()}
            />
          </View>
          <View>
            <Formgroup
              rules={{ required: t('error.lastname.required') }}
              control={control}
              label={t('input.lastname')}
              ref={nameInputRef}
              returnKeyType="next"
              autoCapitalize="words"
              keyboardType="default"
              inputName="lastname"
              onSubmitEditing={() => emailInputRef.current && emailInputRef.current.focus()}
            />
          </View>
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
              ref={emailInputRef}
              returnKeyType="next"
              autoComplete="off"
              autoCapitalize="none"
              keyboardType="email-address"
              inputName="email"
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
              inputName="password"
              ref={passwordInputRef}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              type="password"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View className="mb-6 mt-12">
        <Text
          className="text-xs text-deepMarine-700 mb-4 text-center"
          style={{ fontFamily: 'Mulish-medium' }}
        >
          {t('landing.agreement')}{' '}
          <Link to="/Terms">
            <Text className="text-xs text-deepMarine-500" style={{ fontFamily: 'Mulish-bold' }}>
              {t('landing.terms')}
            </Text>
          </Link>{' '}
          {t('landing.and')}{' '}
          <Link to="/Privacy">
            <Text className="text-xs text-deepMarine-500" style={{ fontFamily: 'Mulish-bold' }}>
              {t('landing.privacy')}
            </Text>
          </Link>
        </Text>
        <View className="mb-2">
          <PrimaryButton
            isLoading={isLoading}
            label={t('register.cta')}
            onPress={handleSubmit(handleRegister)}
          />
        </View>
        <TertiairyButton
          label={t('register.doAccount')}
          action={t('register.login')}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
