import React from "react";
import {
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import ArrowRight from "../icons/ArrowRight";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WalkthroughNavigator({ data, scrollX, scrollTo }) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View
      className="w-full absolute flex flex-row items-center justify-between px-4 h-12 mt-8"
      style={{ bottom: insets.bottom + 32 }}
    >
      <View className="flex flex-row gap-x-3">
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });

          const color = scrollX.interpolate({
            inputRange,
            outputRange: ["#D6E7EB", "#336666", "#D6E7EB"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{ width: dotWidth, backgroundColor: color }}
              className="h-[10px] rounded-full"
              key={index.toString()}
            />
          );
        })}
      </View>
      <TouchableOpacity
        onPress={scrollTo}
        activeOpacity={0.8}
        className="flex rounded-full justify-center items-center w-[72px] h-[72px] bg-turquoise-200"
      >
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}
