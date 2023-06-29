import React from 'react';
import { Animated, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title }) => {
  const { top } = useSafeAreaInsets();

  return (
    <Animated.View
      style={{ paddingTop: top + 8 }}
      className="w-full bg-white flex items-center justify-center pb-4 left-0"
    >
      <Text style={{ fontFamily: 'Mulish-semibold' }} className="text-center text-lg">
        {title}
      </Text>
    </Animated.View>
  );
};

export default Header;
