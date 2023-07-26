import React from 'react';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ title, headerLeft, headerRight }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top + 8;

  const headerLeftComponent = headerLeft && headerLeft();
  const headerRightComponent = headerRight && headerRight();

  return (
    <Animated.View
      style={{ paddingTop }}
      className="w-full relative bg-white flex items-center justify-center pb-4"
    >
      <View style={{ paddingTop: paddingTop + 12 }} className="absolute left-5">
        {headerLeftComponent}
      </View>
      <Text style={{ fontFamily: 'Mulish-semibold' }} className="text-center text-lg">
        {title}
      </Text>
      <View style={{ paddingTop: paddingTop + 12 }} className="absolute right-5">
        {headerRightComponent}
      </View>
    </Animated.View>
  );
};

export default Header;
