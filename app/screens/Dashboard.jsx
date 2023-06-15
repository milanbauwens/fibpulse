import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import CTACard from '../components/CTACard/CTACard';
import LifestyleSlider from '../components/LifestyleSlider/LifestyleSlider';
import Header from '../components/common/Header/Header';
import { Title } from '../components/common/Typography';
import { HeartWarning } from '../components/svg/HeartWarning.jsx';
import Medication from '../components/svg/Medication';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{ padding: 2 }} className="bg-white">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 196 }}
          className="w-full h-screen mb-40"
        >
          <Header title="Overzicht" withSettings />
          <View className="px-4">
            <CTACard
              title="Aanval vaststellen"
              description="Een onregelmatige hartslag? Deel uw symptomen en meet uw hartslag."
              image={<HeartWarning />}
              buttonIconName="plus"
              buttonLabel="Voeg aanval toe"
            />
            <View className="mt-10 mb-6">
              <View className="mb-4">
                <Title size="medium">Hart activiteit</Title>
              </View>
            </View>
          </View>

          <View className="mt-10">
            <View className="px-4">
              <Title size="medium">Tips voor een gezond hart</Title>
            </View>
            <LifestyleSlider />
          </View>

          <View className="px-4">
            <View className="mb-12">
              <View className="mb-4 px-4">
                <Title size="medium">Aankomende medicatie</Title>
              </View>
              <CTACard
                title="Medicatie instellen"
                description="Al uw hartmedicatie op één plek. Stel een tijdstip in en houd bij wat u inneemt."
                image={<Medication />}
                buttonIconName="plus"
                buttonLabel="Voeg medicatie toe"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <BottomNavigation />
    </>
  );
};

export default Dashboard;
