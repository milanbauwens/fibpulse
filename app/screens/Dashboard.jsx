import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import { signOut } from "../db/modules/auth/api";
import Header from "../components/Header/Header";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="px-4 w-full h-full bg-white">
        <Header title="Huidige week" withSettings />
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
