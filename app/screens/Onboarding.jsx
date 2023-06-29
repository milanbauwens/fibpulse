import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../__content/walkthrough';
import { OnboardingItem, OnboardingNavigator } from '../components/Onboarding';

export const Onboarding = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (err) {
        console.error('Error @setAsyncStorage:', err);
      } finally {
        navigation.navigate('Landing');
      }
    }
  };

  return (
    <View className="h-full bg-white relative">
      {/* Skip component */}
      <View
        style={{ marginTop: insets.top + 8 }}
        className="absolute z-10 bg-white p-3 right-5 rounded-full text-base shadow-card-md"
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={async () => {
            try {
              await AsyncStorage.setItem('@viewedOnboarding', 'true');
            } catch (err) {
              console.error('Error @setAsyncStorage:', err);
            } finally {
              navigation.navigate('Landing');
            }
          }}
        >
          <Text className="text-deepMarine-900 text-sm" style={{ fontFamily: 'Mulish-medium' }}>
            Overslaan
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <OnboardingNavigator data={slides} scrollX={scrollX} scrollTo={scrollTo} />
    </View>
  );
};

export default Onboarding;
