import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={{ padding: 2 }} className="bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 196 }}
        className="w-full h-screen mb-40"
      >
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
