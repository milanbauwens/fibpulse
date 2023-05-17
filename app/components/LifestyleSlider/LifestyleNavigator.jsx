import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";
import colors from "../../theme/colors";

const LifestyleNavigator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full z-10 flex flex-row items-center justify-center">
      <View className="flex flex-row gap-x-2">
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const color = scrollX.interpolate({
            inputRange,
            outputRange: [
              colors.ochre[300],
              colors.ochre[500],
              colors.ochre[300],
            ],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{ backgroundColor: color }}
              className="h-2 w-2 rounded-full"
              key={index.toString()}
            />
          );
        })}
      </View>
    </View>
  );
};

export default LifestyleNavigator;
