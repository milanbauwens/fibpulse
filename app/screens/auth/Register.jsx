import { useNavigation } from "@react-navigation/native";
import React, { createRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, View } from "react-native";

import { supabase } from "../../core/db/initSupabase";
import { useForm } from "react-hook-form";
import { handleAuthError } from "../../core/utils/auth/handleAuthError";

// Components
import {
  PrimaryButton,
  Formgroup,
  BackButton,
  TertiairyButton,
} from "../../components/common/Buttons";
import Title from "../../components/common/Typograhy/Title";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Error from "../../components/errors/Error";

const Register = () => {
  const navigation = useNavigation();
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
      } else {
        navigation.navigate("VerifyEmail");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-white h-full px-4">
      <BackButton onPress={() => navigation.navigate("Landing")} />
      <View className="bg-white z-[2] mb-6">
        <Title size="large">Maak een nieuw profiel</Title>
      </View>
      <KeyboardAwareScrollView
        overScrollMode="never"
        bounces={false}
        extraHeight={0}
      >
        {signUpError && <Error error={signUpError} />}
        <View className=" flex gap-y-6">
          <View>
            <Formgroup
              rules={{ required: "Vul een voornaam in." }}
              control={control}
              label="Voornaam"
              ref={firstnameInputRef}
              returnKeyType="next"
              autoCapitalize="words"
              keyboardType="default"
              inputName="userFirstname"
              onSubmitEditing={() =>
                nameInputRef.current && nameInputRef.current.focus()
              }
            />
          </View>
          <View>
            <Formgroup
              rules={{ required: "Vul een naam in." }}
              control={control}
              label="Naam"
              ref={nameInputRef}
              returnKeyType="next"
              autoCapitalize="words"
              keyboardType="default"
              inputName="userName"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
            />
          </View>
          <View>
            <Formgroup
              rules={{
                required: "Vul een e-mail in.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Vul een geldig e-mailadres in.",
                },
              }}
              control={control}
              label="E-mail"
              ref={emailInputRef}
              returnKeyType="next"
              autoComplete="off"
              autoCapitalize="none"
              keyboardType="email-address"
              inputName="userEmail"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
            />
          </View>
          <View>
            <Formgroup
              rules={{
                required: "Vul een wachtwoord in.",
                minLength: {
                  value: 6,
                  message: "Wachtwoord moet minstens 6 karakters lang zijn.",
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
        </View>
        <View className="mb-6 mt-12">
          <PrimaryButton
            isLoading={isLoading}
            label="Registreren"
            onPress={handleSubmit(handleRegister)}
          />
        </View>
        <TertiairyButton
          label="Heeft u al een profiel?"
          action="Inloggen."
          onPress={() => navigation.navigate("Login")}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
