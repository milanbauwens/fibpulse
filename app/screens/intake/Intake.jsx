import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../../__content/intake.js';
import IntakeItem from '../../components/Intake/IntakeItem.jsx';
import IntakePaginator from '../../components/Intake/IntakePaginator.jsx';
import { PrimaryButton } from '../../components/common/Buttons/index.jsx';

const Intake = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const scrollTo = async () => {
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      navigation.navigate('Main');
    }
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <IntakePaginator
        currentSlide={currentSlide}
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        scrollBack={scrollBack}
      />

      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <IntakeItem currentSlide={currentSlide} data={item} />}
        bounces={false}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <View
        style={{ bottom: bottom + 32 }}
        className="px-4 absolute left-0 right-0 m-auto flex flex-col justify-center"
      >
        <PrimaryButton
          label={currentSlide === slides.length - 1 ? ' Voltooi uw profiel' : 'Volgende'}
          onPress={scrollTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Intake;
