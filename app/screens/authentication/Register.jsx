import { Link, useNavigation } from "@react-navigation/native";
import React, { createRef, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { supabase } from "../../db/initSupabase";
import { useForm, Controller } from "react-hook-form";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";

const Register = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const nameInputRef = createRef();
  const firstnameInputRef = createRef();

  async function register(data) {
    setIsLoading(true);
    try {
      // Create a new user
      const { user, error } = await supabase.auth.signUp({
        email: data.userEmail,
        password: data.userPassword,
      });
      // Acd name and surname to userData table
      await supabase.from("userData").insert([
        {
          user_id: user.id,
          name: data.userName,
          firstname: data.userFirstname,
        },
      ]);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      navigation.navigate("Intake");
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="mt-2 bg-white h-full">
      <BackButton />
      <View className="px-4">
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-neutral-900 mb-8"
        >
          Maak een nieuw profiel
        </Text>

        {/*  Form */}
        <KeyboardAvoidingView
          enabled
          className="overflow-hidden flex flex-col gap-y-8"
        >
          <View className="flex flex-row gap-x-4">
            <View className="basis-[38%]">
              <Formgroup
                rules={{ required: "Vul een voornaam in." }}
                control={control}
                label="Voornaam"
                ref={firstnameInputRef}
                returnKeyType="next"
                autoCapitalize={true}
                keyboardType="default"
                inputName="userFirstname"
                onSubmitEditing={() =>
                  firstnameInputRef.current && firstnameInputRef.current.focus()
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
                autoCapitalize={true}
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
              rules={{ required: "Vul een e-mail in." }}
              control={control}
              label="E-mail"
              ref={emailInputRef}
              returnKeyType="next"
              autoCapitalize={false}
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
              autoCapitalize={true}
              keyboardType="default"
              type="password"
            />
          </View>
        </KeyboardAvoidingView>
        <Text
          className="text-sm text-neutral-600 mt-3 mb-8"
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
            onPress={handleSubmit(register)}
          />
        </View>

        <View className="mt-6">
          <AuthProviderButton
            onPress={() => signInWithProvider()}
            provider="google"
          />
          {/* <AuthProviderButton
            onPress={() => signInWithProvider("facebook")}
            provider="faceboook"
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
