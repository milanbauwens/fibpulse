import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { supabase } from "../../db/initSupabase";
import handleSupabaseError from "../../utils/handleSupabaseError";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";

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
      const { data, error } = await supabase.auth.resetPasswordForEmail(
        formData.userEmail
      );
      if (error) {
        const errorMessage = handleSupabaseError(error.status);
        setResetPasswordError(errorMessage);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full px-4">
      <BackButton onPress={() => navigation.navigate("Login")} />
      <Text
        style={{ fontFamily: "Bitter-semibold" }}
        className="text-2xl text-deepMarine-900 mb-2"
      >
        Wachtwoord vergeten
      </Text>
      <Text
        style={{ fontFamily: "Mulish-medium" }}
        className="text-base text-deepMarine-700 mb-8"
      >
        Geen probleem! Vul je e-mail in en we sturen je een mail om je
        wachtwoord te herstellen.
      </Text>

      <KeyboardAvoidingView enabled className="flex flex-col gap-y-8">
        {resetPasswordError && (
          <View
            className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <Text className="block text-center text-red-700 sm:inline">
              {resetPasswordError}
            </Text>
          </View>
        )}

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
