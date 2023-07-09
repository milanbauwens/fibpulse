import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Detail = ({ route }) => {
  const { id } = route.params;

  // Get episode by ID

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default Detail;
