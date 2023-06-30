import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../../Icon/Icon';

const BackButton = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={
        onPress
          ? onPress
          : () => {
              navigation.goBack();
            }
      }
      className="mb-8 mt-2"
    >
      <Icon name="arrow-left" size={32} color={colors.turquoise[700]} />
    </TouchableOpacity>
  );
};

export default BackButton;
