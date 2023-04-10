import { useNavigation } from "@react-navigation/native";
import React, { createRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { supabase } from "../../db/initSupabase";
import { useForm } from "react-hook-form";
import { handleAuthError } from "../../utils/auth/handleAuthError";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";
import TertiairyButton from "../../components/Buttons/TertiairyButton";
import Title from "../../components/Typograhy/Title";

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
      <Title>Maak een nieuw profiel</Title>
      <KeyboardAvoidingView enabled className="flex gap-y-8 mt-2 mb-12">
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
      <View className="mb-6">
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
    </SafeAreaView>
  );
};

export default Register;
