import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import AccountDataView from "../../components/AccountDataView/AccountDataView";
import PersonalDataView from "../../components/PersonalDataView/PersonalDataView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabBar from "../../components/TabBar/TabBar";

const AccountScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Header title="Profiel" withPrevious />
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="Account" component={AccountDataView} />
        <Tab.Screen name="Persoonlijke gegevens" component={PersonalDataView} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default AccountScreen;
