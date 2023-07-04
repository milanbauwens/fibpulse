import { ScrollView, View } from 'react-native';

import { Title } from '../components/common/Typography';

const Discover = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">Ontdek</Title>
      </View>
    </ScrollView>
  );
};

export default Discover;
