import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

const PrimaryButton = ({ label, onPress, isLoading, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="flex flex-row items-center justify-center h-12 bg-deepMarine-500 px-[16px] rounded-lg "
    >
      {!isLoading ? (
        <>
          {icon && <View className="mr-3">{icon}</View>}
          <Text
            style={{ fontFamily: 'Bitter-semibold' }}
            className="text-base text-center text-white"
          >
            {label}
          </Text>
        </>
      ) : (
        <ActivityIndicator color="#FFF" className="my-[6px]" />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
