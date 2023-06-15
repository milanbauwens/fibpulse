import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import ArrowLeft from '../../svg/icons/ArrowLeft';

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
      <ArrowLeft />
    </TouchableOpacity>
  );
};

export default BackButton;
