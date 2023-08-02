import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Text, View, useWindowDimensions } from 'react-native';

import { PrimaryButton, SecondaryButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Icon } from '../../components/common/Icon/Icon';
import Popover from '../../components/common/Popover/Popover';
import { Paragraph, Title } from '../../components/common/Typography';
import { UpdateUserPassword } from '../../core/db/modules/auth/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const Security = () => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { t, locale } = useTranslations();

  const [isVisible, setIsVisible] = useState(true);

  const { control, handleSubmit } = useForm();
  const { control: checkPassword, handleSubmit: handleCheckSubmmit } = useForm();

  const { isSubmitSuccessful } = useFormState({ control });

  const updateUserPassword = async ({ password }) => {
    setIsLoading(true);
    try {
      await UpdateUserPassword(password);
    } catch (error) {
      const authError = handleAuthError(error, locale);
      setChangePasswordError(authError);
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [changePasswordError, setChangePasswordError] = useState();

  const handleCheckPassword = async ({ password }) => {
    if (password) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        <View
          style={{ width: width - 32 }}
          className="bg-white border border-deepMarine-100 shadow-card-md absolute rounded-lg p-4"
        >
          <Title size="medium">{t('settings.changePassword.check.title')}</Title>
          <Paragraph styles="mb-4">{t('settings.changePassword.check.description')} </Paragraph>

          <View className="mb-8">
            <Formgroup
              rules={{
                required: t('error.password.required'),
                minLength: {
                  value: 6,
                  message: t('error.password.length'),
                },
              }}
              control={checkPassword}
              label={t('input.currentPassword')}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              type="password"
              inputName="password"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>

          <View className="flex-1 flex flex-row items-center justify-center">
            <View className="flex-1 mr-4">
              <SecondaryButton
                label={t('settings.changePassword.check.cta.secondary')}
                onPress={() => navigation.goBack()}
              />
            </View>
            <View className="flex-1">
              <PrimaryButton
                label={t('settings.changePassword.check.cta.primary')}
                onPress={handleCheckSubmmit(handleCheckPassword)}
                type="error"
              />
            </View>
          </View>
        </View>
      </Popover>

      <View className=" bg-white h-full px-5 pt-4">
        <Title size="large">{t('settings.changePassword.title')}</Title>
        <Paragraph styles="mb-12">{t('settings.changePassword.description')} </Paragraph>

        <KeyboardAvoidingView enabled className="flex flex-col gap-y-8">
          {changePasswordError && (
            <View
              className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <Text className="block text-center text-red-700 sm:inline">
                {changePasswordError}
              </Text>
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
              label={t('input.newPassword')}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              type="password"
              inputName="password"
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <View>
            <PrimaryButton
              onPress={handleSubmit(updateUserPassword)}
              isLoading={isLoading}
              icon={isSubmitSuccessful ? <Icon name="check" size={20} /> : null}
              label={
                isSubmitSuccessful
                  ? t('settings.changePassword.success')
                  : t('settings.changePassword.cta')
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Security;
