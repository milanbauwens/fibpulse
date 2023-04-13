import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import Header from "../components/Header/Header";
import HeartCheckCard from "../components/HeartCheckCard.jsx/HeartCheckCard";
import Title from "../components/Typograhy/Title";
import MedicationSetupCard from "../components/MedicationSetupCard/MedicationSetupCard";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 196 }}
          className="px-4 w-full h-screen mb-40"
        >
          <Header title="Huidige week" withSettings />
          <HeartCheckCard />
          <View className="mt-12 mb-6">
            <View className="flex flex-row items-center mb-4">
              <View className="w-1 h-6 bg-ochre-500 mr-2" />
              <Text
                style={{ fontFamily: "Bitter-semibold" }}
                className="text-[20px]"
              >
                Medicatie
              </Text>
            </View>
            <MedicationSetupCard />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
