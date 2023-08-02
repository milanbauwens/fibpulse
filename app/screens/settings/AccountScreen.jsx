import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Icon } from '../../components/common/Icon/Icon';
import Popover from '../../components/common/Popover/Popover';
import { Paragraph } from '../../components/common/Typography';
import Error from '../../components/errors/Error';
import DeleteAccount from '../../components/svg/DeleteAccount';
import { UpdateUser, deleteUser, signOut } from '../../core/db/modules/auth/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import { getErrorMessage } from '../../core/utils/global/getErrorMessage';

const AccountScreen = () => {
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const { t, locale } = useTranslations();

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileError, setUpdateProfileError] = useState();

  const { control, handleSubmit } = useForm();

  const [updatedSuccesfully, setUpdatedSuccesfully] = useState(false);

  const handleUpdateProfile = async ({ firstname, lastname, email }) => {
    setIsLoading(true);
    try {
      await UpdateUser(email, { firstname, lastname });
      setUpdatedSuccesfully(true);
    } catch (error) {
      const errorMessage = getErrorMessage(error, locale);
      setUpdateProfileError(errorMessage);
      setUpdatedSuccesfully(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await deleteUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      signOut();
      setIsVisible(false);
    }
  };

  return (
    <>
      <Popover isVisible={isVisible} transparent animationType="slide">
        <View className="bg-white shadow-top-lg mx-4 h-fit rounded-xl p-4">
          <DeleteAccount />
          <Text
            style={{ fontFamily: 'Bitter-semibold' }}
            className="text-xl text-deepMarine-900 mb-2 mt-8"
          >
            {t('settings.account.cta.title')}
          </Text>
          <Paragraph styles="mb-10" textColor="text-deepMarine-700">
            {t('settings.account.cta.description')}
          </Paragraph>
          <View className="w-full flex flex-row items-center ">
            <View className="mr-2 flex-1">
              <PrimaryButton
                label={t('settings.account.cta.secondary')}
                onPress={() => setIsVisible(false)}
              />
            </View>
            <View className="flex-1">
              <TertiairyButton
                action={t('settings.account.cta.primary')}
                type="error"
                onPress={handleDeleteAccount}
              />
            </View>
          </View>
        </View>
      </Popover>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        className="bg-white h-full w-full pt-4"
      >
        <View className="px-4 ">
          {updateProfileError && (
            <View className="mt-2 mb-6">
              <Error error={updateProfileError} />
            </View>
          )}

          <View className="mb-6">
            <Formgroup
              value={user.firstname}
              rules={{
                required: t('error.firstname.required'),
              }}
              control={control}
              label={t('input.firstname')}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              inputName="firstname"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>

          <View className="mb-6">
            <Formgroup
              value={user.lastname}
              rules={{
                required: t('error.lastname.required'),
              }}
              control={control}
              label={t('input.lastname')}
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              inputName="lastname"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          <View className="mb-8">
            <View>
              <Formgroup
                value={user.email}
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
                onSubmitEditing={() => Keyboard.dismiss()}
              />
            </View>
          </View>
          <PrimaryButton
            icon={updatedSuccesfully ? <Icon name="check" size={24} color="white" /> : null}
            label={updatedSuccesfully ? t('edit.success') : t('settings.account.save')}
            onPress={handleSubmit(handleUpdateProfile)}
            isLoading={isLoading}
          />
        </View>

        <View style={{ bottom: bottom + 8 }} className="absolute w-full z-10">
          <TertiairyButton
            type="error"
            action={t('settings.account.delete')}
            onPress={() => setIsVisible(true)}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default AccountScreen;
