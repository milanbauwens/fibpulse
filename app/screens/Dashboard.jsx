import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import Header from "../components/Header/Header";
import CTACard from "../components/CTACard/CTACard";
import Medication from "../components/svg/Medication";
import HeartWarning from "../components/svg/HeartWarning";
import LifestyleCard from "../components/LifestyleCard/LifestyleCard";

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
          <Header title="Overzicht" withSettings />
          <CTACard
            title="Aanval vaststellen"
            description="Een onregelmatige hartslag? Deel uw symptomen en meet uw hartslag."
            image={<HeartWarning />}
            buttonLabel="Registreer aanval"
          />
          <View className="mt-10 mb-6">
            <View className="flex flex-row items-center mb-4">
              <View className="w-1 h-6 bg-ochre-500 mr-2" />
              <Text
                style={{ fontFamily: "Bitter-semibold" }}
                className="text-[20px]"
              >
                Hart activiteit
              </Text>
            </View>
          </View>
          <View className="mt-10 mb-6">
            <View className="flex flex-row items-center mb-4">
              <View className="w-1 h-6 bg-ochre-500 mr-2" />
              <Text
                style={{ fontFamily: "Bitter-semibold" }}
                className="text-[20px]"
              >
                Tips voor een gezond hart
              </Text>
            </View>
            <LifestyleCard
              imageURL="https://images.pexels.com/photos/1612847/pexels-photo-1612847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              category="Beweging"
              content="Dagelijks bewegen erg goed is voor de bloedsomloop en dus ook voor je hart."
            />
          </View>
          <View className="mt-10 mb-6">
            <View className="flex flex-row items-center mb-4">
              <View className="w-1 h-6 bg-ochre-500 mr-2" />
              <Text
                style={{ fontFamily: "Bitter-semibold" }}
                className="text-[20px]"
              >
                Medicatie
              </Text>
            </View>
            <CTACard
              title="Medicatie instellen"
              description="Al uw hartmedicatie op één plek. Stel een tijdstip in en houd bij wat u inneemt."
              image={<Medication />}
              iconName="plus"
              buttonLabel="Voeg medicatie toe"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
