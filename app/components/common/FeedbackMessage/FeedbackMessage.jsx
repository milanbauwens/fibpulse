import { useEffect } from 'react';
import { Animated, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../Icon/Icon';
import Label from '../Label/Label';

const FeedbackMessage = ({ isVisible, icon, content, onHide }) => {
  const animation = new Animated.Value(0);

  useEffect(() => {
    if (isVisible) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Slide down after 3 seconds
        setTimeout(() => {
          Animated.timing(animation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start(() => {
            onHide(); // Call onHide function when the animation is completed
          });
        }, 3000); // Wait for 3 seconds before sliding down
      });
    }
  }, [isVisible]);

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, -132],
        }),
      },
    ],
  };

  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  return (
    <Animated.View
      style={[animatedStyle]}
      className="w-full px-5 absolute bottom-0 left-0 right-0 m-auto flex-col justify-center"
    >
      <View className="p-3 w-full flex justify-center flex-row items-center bg-deepMarine-700 border border-deepMarine-600 rounded-lg">
        <Icon name={icon} size={24} color={colors.deepMarine[100]} />
        <View className="ml-2 mb-[-8]">
          <Label textColor="text-white" title={content} />
        </View>
      </View>
    </Animated.View>
  );
};

export default FeedbackMessage;
