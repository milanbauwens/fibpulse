import { Link, useNavigation } from "@react-navigation/native";
import React, { createRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { supabase } from "../../db/initSupabase";
import { useForm } from "react-hook-form";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";
import handleSupabaseError from "../../utils/handleSupabaseError";
import TertiairyButton from "../../components/Buttons/TertiairyButton";
import { useAuthContext } from "../../components/Auth/AuthProvider";
import AppStack from "../../router/stacks/AppStack";

const Register = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
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
      });
      if (error) {
        const errorMessage = handleSupabaseError(error.status);
        setSignUpError(errorMessage);
        return;
      } else {
        const { error } = await supabase
          .from("profiles")
          .update({
            lastname: formData.userName,
            firstname: formData.userFirstname,
          })
          .eq("user_id", data.user.id);
        if (error) {
          const errorMessage = handleSupabaseError(error.status);
          setSignUpError(errorMessage);
          return;
        } else {
          navigation.navigate("VerifyEmail");
        }
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView className="mt-2 bg-white h-full">
      <BackButton onPress={() => navigation.navigate("Landing")} />
      <View className="px-4">
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-deepMarine-900 mb-8"
        >
          Maak een nieuw profiel
        </Text>

        {/*  Form */}
        <KeyboardAvoidingView
          enabled
          className="overflow-hidden flex flex-col gap-y-8 mb-12"
        >
          {signUpError && (
            <View
              className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <Text className="block text-red-700 text-center sm:inline">
                {signUpError}
              </Text>
            </View>
          )}

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
        </KeyboardAvoidingView>
        <PrimaryButton
          isLoading={isLoading}
          label="Registreren"
          onPress={handleSubmit(handleRegister)}
        />
        <TertiairyButton
          label="Heeft u al een profiel?"
          action="Inloggen."
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;
