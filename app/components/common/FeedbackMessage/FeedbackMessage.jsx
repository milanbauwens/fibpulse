import { useEffect } from 'react';
import { Animated, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../Icon/Icon';
import Label from '../Label/Label';

const FeedbackMessage = ({ type, isVisible, icon, endY = -20, content, onHide }) => {
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
          outputRange: [50, endY],
        }),
      },
    ],
  };

  if (!isVisible) {
    return null; // Don't render anything if not visible
  }

  let primaryColor;
  let backgroundColor;
  let borderColor;
  let textColor;
  switch (type) {
    case 'success':
      primaryColor = colors.success[700];
      backgroundColor = colors.success[100];
      borderColor = colors.success[300];
      textColor = 'text-success-700';
      break;
    case 'error':
      primaryColor = colors.red[600];
      backgroundColor = colors.red[100];
      borderColor = colors.red[300];
      textColor = 'text-red-600';
      break;
    case 'general':
      primaryColor = colors.turquoise[600];
      backgroundColor = colors.deepMarine[100];
      borderColor = colors.deepMarine[200];
      textColor = 'text-turquoise-600';

      break;
    default:
      primaryColor = colors.turquoise[600];
      textColor = 'text-turquoise-600';

      break;
  }

  return (
    <Animated.View
      style={[animatedStyle]}
      className="w-full px-5 absolute bottom-0 left-0 right-0 m-auto flex-col justify-center"
    >
      <View
        style={{ backgroundColor, borderColor }}
        className="p-3 w-full flex flex-row items-center border shadow-card-md rounded-lg"
      >
        <Icon name={icon} size={24} color={primaryColor} />
        <View className="ml-3 mb-[-8]">
          <Label textColor={textColor} title={content} />
        </View>
      </View>
    </Animated.View>
  );
};

export default FeedbackMessage;
