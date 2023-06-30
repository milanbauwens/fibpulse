import React from 'react';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, headerLeft }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top + 8;

  const headerLeftComponent = headerLeft && headerLeft();

  return (
    <Animated.View
      style={{ paddingTop }}
      className="w-full relative bg-white flex items-center justify-center pb-4 left-0"
    >
      <View style={{ paddingTop: paddingTop + 12 }} className="absolute left-5">
        {headerLeftComponent}
      </View>
      <Text style={{ fontFamily: 'Mulish-semibold' }} className="text-center text-lg">
        {title}
      </Text>
    </Animated.View>
  );
};

export default Header;
