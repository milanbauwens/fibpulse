import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../../theme/colors';

const SecondaryButton = ({ label, onPress, isLoading, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="flex flex-row items-center justify-center h-12 bg-turquoise-200 px-[16px] rounded-lg "
    >
      {!isLoading ? (
        <>
          {icon && <View className="mr-3">{icon}</View>}
          <Text
            style={{ fontFamily: 'Bitter-semibold' }}
            className="text-base text-center text-turquoise-700"
          >
            {label}
          </Text>
        </>
      ) : (
        <ActivityIndicator color={colors.turquoise[700]} className="my-[6px]" />
      )}
    </TouchableOpacity>
  );
};

export default SecondaryButton;
