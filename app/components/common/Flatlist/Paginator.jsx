import React from 'react';
import { Animated, View, useWindowDimensions } from 'react-native';

import colors from '../../../theme/colors';
import BackButton from '../Buttons/BackButton';
import { Icon } from '../Icon/Icon';

const Paginator = ({ data, scrollX, scrollBack, onClose }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full relative flex justify-center items-center">
      <View className="absolute left-5 top-6">
        <BackButton onPress={scrollBack} />
      </View>
      <View className="flex flex-row items-center justify-between px-2 h-12 mt-6">
        <View className="flex flex-row gap-x-1">
          {data.map((_, index) => {
            const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

            const color = scrollX.interpolate({
              inputRange,
              outputRange: [colors.turquoise[200], colors.deepMarine[500], colors.deepMarine[500]],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                style={{ backgroundColor: color }}
                className="h-2 w-6 rounded-full"
                key={index.toString()}
              />
            );
          })}
        </View>
      </View>
      <View className="absolute right-5 top-8">
        <Icon name="close" size={32} color={colors.turquoise[700]} onPress={onClose} />
      </View>
    </View>
  );
};

export default Paginator;
