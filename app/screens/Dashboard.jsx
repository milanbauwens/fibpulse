import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import { signOut } from "../db/modules/auth/api";
import Header from "../components/Header/Header";

const Dashboard = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <>
      <SafeAreaView className="px-4">
        <Header title="Huidige week" />
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
