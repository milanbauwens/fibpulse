import { useNavigation } from "@react-navigation/native";
import React, { createRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from "react-hook-form";
import { supabase } from "../../db/initSupabase";
import handleSupabaseError from "../../utils/handleSupabaseError";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";
import TertiairyButton from "../../components/Buttons/TertiairyButton";

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
        const errorMessage = handleSupabaseError(error.status);
        setSignInError(errorMessage);
      } else {
        navigation.navigate("Dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="mt-2 bg-white h-full">
      <BackButton onPress={() => navigation.navigate("Landing")} />
      <View className="px-4">
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-deepMarine-900 mb-8"
        >
          Log in bij uw account
        </Text>

        <KeyboardAvoidingView enabled className="flex flex-col gap-y-8">
          {signInError && (
            <View
              className=" bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <Text className="block text-center text-red-700 sm:inline">
                {signInError}
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

          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              className="mb-4 w-full mt-4"
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text
                className="text-right pr-2 text-base text-deepMarine-900"
                style={{ fontFamily: "Mulish-medium" }}
              >
                Wachtwoord vergeten?
              </Text>
            </TouchableOpacity>

            <PrimaryButton
              onPress={handleSubmit(handleLogin)}
              isLoading={isLoading}
              label="Log in"
            />
          </View>
        </KeyboardAvoidingView>
        <TertiairyButton
          label="Nog geen account?"
          action="Registreer."
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
