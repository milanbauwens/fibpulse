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
      });

      if (error) {
        const errorMessage = handleSupabaseError(error.status);
        setSignUpError(errorMessage);
        return;
      } else {
        const { error } = await supabase.from("profiles").upsert([
          {
            user_id: data.user?.id,
            lastname: formData.userName,
            firstname: formData.userFirstname,
          },
        ]);

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

  // async function signInWithProvider() {
  //   await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: "http://localhost:19000/Intake",
  //     },
  //   });
  // }

  return (
    <SafeAreaView className="mt-2 bg-white h-full">
      <BackButton />
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
          className="overflow-hidden flex flex-col gap-y-8"
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

          <View className="flex flex-row gap-x-4">
            <View className="basis-[38%]">
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

            <View className="basis-[65%] ">
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
        <Text
          className="text-sm text-deepMarine-900 mt-3 mb-8"
          style={{ fontFamily: "Mulish-regular" }}
        >
          Door zich te registreren, gaat u akkoord met onze{" "}
          <Link to="/Login">
            <Text
              className="text-sm text-deepMarine-500"
              style={{ fontFamily: "Mulish-bold" }}
            >
              Gebruiksvoorwaarden
            </Text>
          </Link>{" "}
          en{" "}
          <Link to="/Login">
            <Text
              className="text-sm text-deepMarine-500"
              style={{ fontFamily: "Mulish-bold" }}
            >
              Privacy verklaring.
            </Text>
          </Link>
        </Text>
        <View>
          <PrimaryButton
            isLoading={isLoading}
            label="Registreren"
            onPress={handleSubmit(handleRegister)}
          />
        </View>

        <View className="relative flex flex-row py-5 items-center mt-2 mb-4">
          <View className="flex-grow border-t border-deepMarine-500" />
          <Text
            style={{ fontFamily: "Mulish-medium" }}
            className="flex-shrink mx-4 text-deepMarine-900 text-base"
          >
            Of ga verder met
          </Text>
          <View className="flex-grow border-t border-gray-400" />
        </View>
        <View className="content-center flex-row flex-nowrap flex align-middle justify-between">
          <AuthProviderButton provider="google" />
          <AuthProviderButton provider="facebook" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
