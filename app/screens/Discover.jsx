import { Animated, View } from 'react-native';

import DiscoverCard from '../components/DiscoverCard/DiscoverCard';

const Discover = ({ navigation }) => {
  const scrollY = new Animated.Value(0);

  return (
    <Animated.ScrollView
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
        listener: (event) => {
          navigation.setOptions({
            scrollY: event.nativeEvent.contentOffset.y,
          });
        },
      })}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
      style={{ paddingTop: 8 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mt-2">
        <DiscoverCard
          category="Voeding"
          content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
          source={require('../../assets/images/woman-running.jpg')}
        />
        <DiscoverCard
          category="Voeding"
          content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
          source={require('../../assets/images/woman-running.jpg')}
        />
        <DiscoverCard
          category="Voeding"
          content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
          source={require('../../assets/images/woman-running.jpg')}
        />
      </View>
    </Animated.ScrollView>
  );
};

export default Discover;
