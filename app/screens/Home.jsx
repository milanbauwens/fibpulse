import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import Insights from '../components/Insights/Insights';
import SectionCard from '../components/SectionCard/SectionCard';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Paragraph, Title } from '../components/common/Typography';

const Home = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">{`Dag ${user.firstname}`}</Title>
        <Paragraph>
          Al{' '}
          <Text style={{ fontFamily: 'Mulish-bold' }}>{`${
            // TODO: Replace with actual days since last admission
            user.daysSinceLastAdmission || 4
          } dagen`}</Text>{' '}
          geen onregelmatige hartslag
        </Paragraph>
      </View>
      <View className="mb-6">
        <CTACard
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          title="Hartmoment toevoegen"
          description="Leg steeds een moment vast, bij een onregelmatige hartslag."
        />
      </View>
      <SectionCard
        label="Dagboek"
        title="Mijn Hartmomenten"
        description="Houd uw momenten bij en creëer een beter overzicht over uw ritmestoornis."
        cta="Bekijk alle hartmomenten"
        icon="calendar-heart-outline"
      />
      <Insights />
      <SectionCard
        withImage
        label="Ontdek"
        title="Een gezond hart nastreven"
        description="Wees bewust van de zaken die nefast zijn voor uw hart."
        cta="Bekijk alle tips"
        icon="calendar-heart-outline"
      />
    </ScrollView>
  );
};

export default Home;
