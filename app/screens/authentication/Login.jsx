import { useNavigation } from "@react-navigation/native";
import React, { createRef, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";

const Login = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [secure, setSecure] = useState(true);

  const passwordInputRef = createRef();

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
          Log in bij uw account
        </Text>

        {/*  Form */}
        <KeyboardAvoidingView enabled className="flex flex-col gap-y-8">
          <View>
            <Formgroup
              label="E-mail"
              value={userEmail}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
            />
          </View>

          <View>
            <Formgroup
              type="password"
              label="Wachtwoord"
              value={userPassword}
              ref={passwordInputRef}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              onSubmitEditing={Keyboard.dismiss}
              returnKeyType="done"
            />
          </View>

          <View>
            <TouchableOpacity activeOpacity={0.8} className="mb-4 w-full">
              <Text
                className="text-right pr-2 text-base text-neutral-900"
                style={{ fontFamily: "Mulish-medium" }}
              >
                Wachtwoord vergeten?
              </Text>
            </TouchableOpacity>

            <PrimaryButton isLoading={isLoading} label="Log in" />
          </View>
        </KeyboardAvoidingView>
        <View className="mt-11">
          <AuthProviderButton provider="Google" />
          <AuthProviderButton provider="Facebook" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
