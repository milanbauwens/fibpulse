import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import Header from "../components/Header/Header";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import CheckHeartRythm from "../components/svg/CheckHeartRythm";
import Card from "../components/Card/Card";
import HeartCheckCard from "../components/HeartCheckCard.jsx/HeartCheckCard";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="px-4 w-full h-full bg-white">
        <Header title="Huidige week" withSettings />
        <HeartCheckCard />
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
