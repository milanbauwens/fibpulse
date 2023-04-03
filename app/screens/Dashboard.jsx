import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { signOut } from "../db/modules/auth/api";

const Dashboard = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Dashboard</Text>
        </View>
        <PrimaryButton label="Logout" onPress={handleLogout} />
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
