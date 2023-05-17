import { useNavigation } from "@react-navigation/native";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import Header from "../components/Header/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabBar from "../components/TabBar/TabBar";
import Medication from "../components/svg/Medication";

const MedicationScreen = () => {
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

  return (
    <>
      <SafeAreaView className="bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 196 }}
          className="w-full h-screen mb-40"
        >
          <Header title="Medicatie" withSettings />
          <View className="px-4">
            <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
              <Tab.Screen name="Test" component={Medication} />
              <Tab.Screen name="Tester" component={Medication} />
            </Tab.Navigator>
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default MedicationScreen;
