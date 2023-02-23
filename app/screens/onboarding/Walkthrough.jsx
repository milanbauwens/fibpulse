import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { View, Text, FlatList, Animated, TouchableOpacity } from "react-native";
import WalkthroughItem from "../../components/Walkthrough/WalkthroughItem";
import WalkthroughNavigator from "../../components/Walkthrough/WalkthroughNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import slides from "../../content/walkthrough";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Walkthrough() {
  const authStackNavigation = useNavigation();
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
        await AsyncStorage.setItem("@viewedOnboarding", "true");
      } catch (err) {
        console.error("Error @setAsyncStorage:", err);
      } finally {
        authStackNavigation.navigate("Auth", { screen: "Landing" });
      }
    }
    return;
  };

  return (
    <View className="h-full bg-white relative">
      <View
        className="absolute z-10 bg-white py-[12px] px-[16px] right-4 rounded-full text-[20px]"
        style={{ marginTop: insets.top + 16 }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={async () => {
            try {
              await AsyncStorage.setItem("@viewedOnboarding", "true");
            } catch (err) {
              console.error("Error @setAsyncStorage:", err);
            } finally {
              authStackNavigation.navigate("Landing");
            }
          }}
        >
          <Text
            className="text-neutral-900 text-[14px]"
            style={{ fontFamily: "Mulish-regular" }}
          >
            Overslaan
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={slides}
        renderItem={({ item }) => <WalkthroughItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
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

      <WalkthroughNavigator
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
      />
    </View>
  );
}
