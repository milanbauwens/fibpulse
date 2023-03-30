import React from "react";
import {
  View,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import ArrowLeft from "../icons/ArrowLeft";

const IntakePaginator = ({
  data,
  currentSlide,
  scrollX,
  scrollTo,
  scrollBack,
}) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full relative flex justify-center items-center">
      {currentSlide > 0 && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={scrollBack}
          className="absolute left-4 bottom-1 p-2 bg-deepMarine-300 rounded-full"
        >
          <ArrowLeft />
        </TouchableOpacity>
      )}
      <View className="flex flex-row items-center justify-between px-4 h-12 mt-4">
        <View className="flex flex-row gap-x-3">
          {data.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const color = scrollX.interpolate({
              inputRange,
              outputRange: ["#D6E7EB", "#336666", "#336666"],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={{ backgroundColor: color }}
                className="h-[10px] w-11 rounded-full"
                key={index.toString()}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default IntakePaginator;
