import React from "react";
import {
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ArrowRight from "../icons/arrowRight";

export default function WalkthroughNavigator({ data, scrollX, scrollTo }) {
  const { width } = useWindowDimensions();

  return (
    <View className=" flex flex-row items-center justify-between px-4 h-12 mt-8">
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
        className="flex rounded-full justify-center items-center w-[72px] h-[72px] bg-deepMarine-300"
      >
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
}
