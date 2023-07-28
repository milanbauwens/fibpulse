import { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

import DiscoverCard from '../components/DiscoverCard/DiscoverCard';

const Discover = ({ navigation }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      scrollY,
    });
  }, [scrollY]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY < 60) {
      setScrollY(offsetY);
    }
  };

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
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
