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
import { supabase } from '../../core/db/initSupabase';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const Register = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState();

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const nameInputRef = createRef();
  const firstnameInputRef = createRef();

  async function handleRegister(formData) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.userEmail,
        password: formData.userPassword,
        options: {
          data: {
            firstname: formData.userFirstname,
            lastname: formData.userName,
          },
        },
      });
      if (error) {
        const authError = handleAuthError(error);
        setSignUpError(authError);
      }
    } catch (error) {
      console.error(error);
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
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        extraHeight={0}
      >
        {signUpError && (
          <View className="mt-2">
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
              inputName="userFirstname"
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
              inputName="userName"
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
        </View>

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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
