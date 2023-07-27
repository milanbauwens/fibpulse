import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Paragraph, Title } from '../../components/common/Typography';
import { supabase } from '../../core/db/initSupabase';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const ResetPassword = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState();

  const handleResetPassword = async (formData) => {
    setIsLoading(true);
    try {
      const redirectURL = Linking.createURL('/Login');

      const { data, error } = await supabase.auth.resetPasswordForEmail(formData.userEmail, {
        redirectTo: redirectURL,
      });
      if (error) {
        const authError = handleAuthError(error);
        setResetPasswordError(authError);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className=" bg-white h-full px-5">
      <BackButton onPress={() => navigation.navigate('Login')} />
      <Title size="large">Wachtwoord vergeten</Title>
      <Paragraph styles="mb-12">
        Vul uw e-mail in en wij sturen u een mail om uw wachtwoord te herstellen.
      </Paragraph>

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
              required: 'Vul een e-mail in.',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Vul een geldig e-mailadres in.',
              },
            }}
            control={control}
            label="E-mail"
            returnKeyType="done"
            autoCapitalize="none"
            keyboardType="email-address"
            inputName="userEmail"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View>
          <PrimaryButton
            onPress={handleSubmit(handleResetPassword)}
            isLoading={isLoading}
            label="Herstel wachtwoord"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;
