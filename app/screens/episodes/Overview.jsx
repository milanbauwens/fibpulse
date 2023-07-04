import { ScrollView, View } from 'react-native';

import { Title } from '../../components/common/Typography';

const Overview = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">Opnames</Title>
      </View>
    </ScrollView>
  );
};

export default Overview;
