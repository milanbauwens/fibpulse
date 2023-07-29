import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedHeader = ({ title, headerRight, scrollY }) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = top + 12;
  const animatedScrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (scrollY) {
      animatedScrollY.setValue(scrollY);
    }
  }, [scrollY]);

  const headerRightComponent = headerRight && headerRight();

  // The maximum height of the header when it is fully expanded
  const MAX_HEADER_HEIGHT = 112;

  // The minimum height of the header when it is fully collapsed
  const MIN_HEADER_HEIGHT = 32;

  // Calculate the header height based on the scroll position
  const headerHeight = animatedScrollY.interpolate({
    inputRange: [0, 45],
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // Calculate the opacity of the text based on the scroll position
  const opacity = animatedScrollY.interpolate({
    inputRange: [0, 20],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={{
          paddingTop,
          height: headerHeight,
        }}
        className="w-full relative bg-white flex-row  justify-between px-5"
      >
        <Animated.Text
          style={{ fontFamily: 'Bitter-semibold', opacity }}
          className="text-2xl text-deepMarine-900"
        >
          {title}
        </Animated.Text>
        <Animated.View style={{ opacity }}>{headerRightComponent}</Animated.View>
      </Animated.View>
    </>
  );
};
export default AnimatedHeader;
