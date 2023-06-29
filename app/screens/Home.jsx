import { ScrollView, Text } from 'react-native';

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
      <Title size="large">{`Dag ${user.firstname}`}</Title>
      <Paragraph>
        Al{' '}
        <Text style={{ fontFamily: 'Mulish-bold' }}>{`${
          // TODO: Replace with actual days since last admission
          user.daysSinceLastAdmission || 4
        } dagen`}</Text>{' '}
        geen opname
      </Paragraph>
    </ScrollView>
  );
};

export default Home;
