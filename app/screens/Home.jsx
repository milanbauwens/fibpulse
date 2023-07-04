import { ScrollView, Text, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Paragraph, Title } from '../components/common/Typography';

const Home = () => {
  const { user } = useAuthContext();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 196 }}
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
      <View>
        <CTACard
          title="Opname toevoegen"
          description="Maak steeds een nieuwe opname bij een onregelmatige hartslag."
          onPress={() => console.log('CTA pressed')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
