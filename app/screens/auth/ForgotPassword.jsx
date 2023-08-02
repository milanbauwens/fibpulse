import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Icon } from '../../components/common/Icon/Icon';
import { Paragraph, Title } from '../../components/common/Typography';
import { sendResetPasswordEmail } from '../../core/db/modules/auth/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  const { control, handleSubmit } = useForm();
  const { isSubmitSuccessful } = useFormState({ control });

  const [isLoading, setIsLoading] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState();

  const handleResetPassword = async ({ email }) => {
    setIsLoading(true);
    try {
      const redirectURL = Linking.createURL('/ResetPassword');

      await sendResetPasswordEmail(email, redirectURL);
    } catch (error) {
      const authError = handleAuthError(error);
      setResetPasswordError(authError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className=" bg-white h-full px-5">
      <BackButton onPress={() => navigation.navigate('Login')} />
      <Title size="large">{t('forgotPassword.title')}</Title>
      <Paragraph styles="mb-12">{t('forgotPassword.description')} </Paragraph>

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
              required: t('error.email.required'),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('error.email.invalid'),
              },
            }}
            control={control}
            label={t('input.email')}
            returnKeyType="done"
            autoCapitalize="none"
            keyboardType="email-address"
            inputName="email"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View>
          <PrimaryButton
            icon={isSubmitSuccessful ? <Icon name="check" size={20} color="white" /> : null}
            onPress={handleSubmit(handleResetPassword)}
            isLoading={isLoading}
            label={isSubmitSuccessful ? t('forgotPassword.succes') : t('forgotPassword.cta')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
