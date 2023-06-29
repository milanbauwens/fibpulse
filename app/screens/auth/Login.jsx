import { useNavigation } from '@react-navigation/native';
import React, { createRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BackButton, PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import { Title } from '../../components/common/Typography';
import Error from '../../components/errors/Error';
import { supabase } from '../../core/db/initSupabase';
import { handleAuthError } from '../../core/utils/auth/handleAuthError';

const Login = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [signInError, setSignInError] = useState();

  const passwordInputRef = createRef();

  const handleLogin = async (formData) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
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
        <Title size="large">Log in bij uw account</Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        className="flex flex-col gap-y-6"
      >
        {signInError && <Error error={signInError} />}

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
              required: 'Vul een wachtwoord in.',
              minLength: {
                value: 6,
                message: 'Wachtwoord moet minstens 6 karakters lang zijn.',
              },
            }}
            control={control}
            label="Wachtwoord"
            inputName="userPassword"
            ref={passwordInputRef}
            returnKeyType="done"
            autoCapitalize="none"
            keyboardType="default"
            type="password"
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>

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
              Wachtwoord vergeten?
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View className="mb-6">
        <PrimaryButton onPress={handleSubmit(handleLogin)} isLoading={isLoading} label="Inloggen" />
      </View>
      <TertiairyButton
        label="Nog geen account?"
        action="Registreren."
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
};

export default Login;
