import React from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';

import colors from '../../theme/colors';

export const OnboardingNavigator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View className=" w-full flex items-center justify-between px-5">
      <View className="flex flex-row gap-x-3">
        {data.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: 'clamp',
          });

          const color = scrollX.interpolate({
            inputRange,
            outputRange: [colors.turquoise[200], colors.deepMarine[500], colors.turquoise[200]],
            extrapolate: 'clamp',
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
    </View>
  );
};
