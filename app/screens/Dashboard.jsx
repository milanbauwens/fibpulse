import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "../components/Navigation/Navigation";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { SignOut } from "../db/modules/auth/api";

const Dashboard = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogout = async () => {
    const { error } = await SignOut();
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Dashboard</Text>
        </View>
        <PrimaryButton label="Logout" onPress={handleLogout} />
      </SafeAreaView>
      <Navigation />
    </>
  );
};

export default Dashboard;
