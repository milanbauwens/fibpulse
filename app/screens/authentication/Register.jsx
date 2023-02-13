import { Link, useNavigation } from "@react-navigation/native";
import React, { createRef, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";

// Components
import Formgroup from "../../components/Formgroup/Formgroup";
import AuthProviderButton from "../../components/Buttons/AuthProviderButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import BackButton from "../../components/Buttons/BackButton";
import { supabase } from "../../db/initSupabase";

const Register = () => {
  const navigation = useNavigation();
  const [userFirstname, setUserFirstname] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errortext, setErrortext] = useState("");
  const [secure, setSecure] = useState(true);

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const nameInputRef = createRef();
  const firstnameInputRef = createRef();

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!userName.trim()) {
      alert("Please Enter Name");
      return false;
    }
    //Check for the Firstname TextInput
    if (!userFirstname.trim()) {
      alert("Please Enter Name");
      return false;
    }
    //Check for the Email TextInput
    if (!userEmail.trim()) {
      alert("Please Enter Email");
      return false;
    }
    //Check for the Password TextInput
    if (!userPassword.trim()) {
      alert("Please Enter Email ");
      return false;
    }

    return true;
  };

  async function register() {
    setIsLoading(true);
    if (checkTextInput()) {
      try {
        // Create a new user
        const { user, error } = await supabase.auth.signUp({
          email: userEmail,
          password: userPassword,
        });
        // Acd name and surname to the user
        await supabase
          .from("profiles")
          .insert([
            { user_id: user.id, name: userName, surname: userFirstname },
          ]);
      } catch (error) {
        setIsLoading(false);
        setErrortext(error.message);
      } finally {
        setIsLoading(false);
        navigation.navigate("Intake");
      }
    } else {
      setIsLoading(false);
    }
  }

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
                label="Voornaam"
                ref={firstnameInputRef}
                value={userFirstname}
                onChangeText={(UserFirstname) =>
                  setUserFirstname(UserFirstname)
                }
                returnKeyType="next"
                autoCapitalize={true}
                keyboardType="default"
                onSubmitEditing={() =>
                  nameInputRef.current && nameInputRef.current.focus()
                }
              />
            </View>

            <View className="basis-[65%] ">
              <Formgroup
                label="Naam"
                ref={nameInputRef}
                value={userName}
                onChangeText={(UserName) => setUserName(UserName)}
                returnKeyType="next"
                autoCapitalize={true}
                keyboardType="default"
                onSubmitEditing={() =>
                  emailInputRef.current && emailInputRef.current.focus()
                }
              />
            </View>
          </View>

          <View>
            <Formgroup
              label="E-mail"
              value={userEmail}
              autoCapitalize="none"
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              returnKeyType="next"
              keyboardType="email-address"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              ref={emailInputRef}
            />
          </View>

          <View>
            <Formgroup
              type="password"
              label="Wachtwoord"
              value={userPassword}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              passwordRules={true}
              secure={secure}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              returnKeyType="done"
              ref={passwordInputRef}
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
            onPress={register}
          />
        </View>

        <View className="mt-6">
          <AuthProviderButton provider="Google" />
          <AuthProviderButton provider="Facebook" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
