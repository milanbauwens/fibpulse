import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { useForm } from "react-hook-form";
import { supabase } from "../../core/db/initSupabase";
import { handleAuthError } from "../../core/utils/auth/handleAuthError";

// Components
import Formgroup from "../../components/common/Formgroup/Formgroup";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import BackButton from "../../components/common/Buttons/BackButton";
import Paragraph from "../../components/common/Typograhy/Paragraph";
import Title from "../../components/common/Typograhy/Title";

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
        const authError = handleAuthError(error);
        setResetPasswordError(authError);
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
    <SafeAreaView className=" bg-white h-full px-4">
      <BackButton onPress={() => navigation.navigate("Login")} />
      <Title size="large">Wachtwoord vergeten</Title>
      <Paragraph className="mb-12">
        Geen probleem! Vul je e-mail in en we sturen je een mail om je
        wachtwoord te herstellen.
      </Paragraph>

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
