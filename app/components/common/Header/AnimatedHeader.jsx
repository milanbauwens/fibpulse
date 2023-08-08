import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedHeader = ({ title, headerRight, scrollY }) => {
  const { top } = useSafeAreaInsets();

  const animatedScrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (scrollY) {
      animatedScrollY.setValue(scrollY);
    }
  }, [scrollY]);

  const headerRightComponent = headerRight && headerRight();

  // Calculate the opacity of the text based on the scroll position
  const opacity = animatedScrollY.interpolate({
    inputRange: [65, 75],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={{
          paddingTop: top + 8,
          paddingBottom: 8,
        }}
        className={`w-full relative bg-white flex-row ${
          headerRight ? 'justify-between' : 'justify-center'
        } items-center px-5`}
      >
        {headerRight && <View className="w-8 h-8" />}

        <Animated.Text
          style={{ fontFamily: 'Mulish-bold', opacity }}
          className="text-base text-turquoise-700"
        >
          {title}
        </Animated.Text>
        {headerRight && <Animated.View>{headerRightComponent}</Animated.View>}
      </Animated.View>
    </>
  );
};
export default AnimatedHeader;
