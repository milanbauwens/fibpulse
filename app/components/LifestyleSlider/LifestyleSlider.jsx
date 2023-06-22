import { useRef } from 'react';
import { Animated, FlatList, View } from 'react-native';

import LifestyleCard from '../LifestyleCard/LifestyleCard';
import LifestyleNavigator from '../LifestyleSlider/LifestyleNavigator';

const LifestyleSlider = () => {
  const data = [
    {
      id: 1,
      category: 'Bewegen',
      content: 'Dagelijks bewegen erg goed is voor de bloedsomloop en dus ook voor je hart.',
      imageURL:
        'https://images.pexels.com/photos/1612847/pexels-photo-1612847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      category: 'Voeding',
      content: 'Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?',
      imageURL:
        'https://images.pexels.com/photos/4152610/pexels-photo-4152610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      category: 'Alcohol',
      content: 'Je maximum 7 eenheden alcohol per week mag nuttigen om je hart niet te belasten?',
      imageURL:
        'https://images.pexels.com/photos/1785864/pexels-photo-1785864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View className="pb-10">
      <View>
        <FlatList
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 16,
          }}
          data={data}
          renderItem={({ item }) => (
            <LifestyleCard
              category={item.category}
              content={item.content}
              imageURL={item.imageURL}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <LifestyleNavigator scrollX={scrollX} data={data} />
    </View>
  );
};

export default LifestyleSlider;
