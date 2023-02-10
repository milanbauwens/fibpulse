import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Animated, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import slides from "../../content/intake.js";
import IntakeItem from "../../components/Intake/IntakeItem";
import IntakePaginator from "../../components/Intake/IntakePaginator";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { View } from "react-native";

const Intake = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;
  `
`;
  const scrollTo = async () => {
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      try {
        console.log("intake done");
      } catch (err) {
        console.error("Error intake error:", err);
      } finally {
        navigation.navigate("Landing");
      }
    }
    return;
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
    return;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
        renderItem={({ item }) => <IntakeItem data={item} />}
        bounces={false}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <View className="w-full px-4 absolute bottom-6">
        <PrimaryButton label="Volgende" onPress={scrollTo} />
      </View>
    </SafeAreaView>
  );
};

export default Intake;
