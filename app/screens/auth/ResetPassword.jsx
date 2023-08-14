import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/Auth/AuthProvider';
import { BackButton, PrimaryButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Paragraph, Title } from '../../components/common/Typography';
import { useTranslations } from '../../core/i18n/LocaleProvider';

const ResetPassword = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();
  const { user } = useAuthContext();

  const { control, handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState();

  return (
    <SafeAreaView className=" bg-white h-full px-5">
      <BackButton onPress={() => navigation.navigate('Login')} />
      <Title size="large">{t('resetPassword.title')}</Title>
      <Paragraph styles="mb-12">{t('resetPassword.description', { email: user.email })} </Paragraph>

      <KeyboardAvoidingView enabled className="flex flex-col gap-y-8">
        {resetPasswordError && (
          <View
            className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <Text className="block text-center text-red-700 sm:inline">{resetPasswordError}</Text>
          </View>
        )}

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
            returnKeyType="done"
            autoCapitalize="none"
            keyboardType="default"
            inputName="password"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View>
          <PrimaryButton
            onPress={handleSubmit()}
            isLoading={isLoading}
            label={t('resetPassword.cta')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;
