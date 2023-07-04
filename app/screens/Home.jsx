import { ScrollView, Text, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import SectionCard from '../components/SectionCard/SectionCard';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Paragraph, Title } from '../components/common/Typography';

const Home = () => {
  const { user } = useAuthContext();

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
          geen opname
        </Paragraph>
      </View>
      <View className="mb-6">
        <CTACard
          title="Opname toevoegen"
          description="Maak steeds een nieuwe opname bij een onregelmatige hartslag."
        />
      </View>
      <SectionCard
        label="Dagboek"
        title="Mijn opnames"
        description="Door uw opnames bij te houden creëert u een beter overzicht over uw ritmestoornis."
        cta="Bekijk alle opnames"
        icon="calendar-heart-outline"
      />
      <SectionCard
        withImage
        label="Tips & tricks"
        title="Ontdek welke tips uw hart ten goede komen."
        description="Wees bewust van de zaken die nefast zijn voor uw hart. Zo draagt u zorg voor uzelf."
        cta="Bekijk alle tips"
        icon="calendar-heart-outline"
      />
    </ScrollView>
  );
};

export default Home;
