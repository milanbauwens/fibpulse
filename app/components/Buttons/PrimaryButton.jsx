import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import React from "react";

const PrimaryButton = ({ label, onPress, isLoading, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className=" flex flex-row items-center justify-center w-full min-h-12 bg-deepMarine-500 py-[12px] px-[16px] rounded-full mb-6"
    >
      {!isLoading ? (
        <>
          <View className="mr-3">{icon}</View>
          <Text
            style={{ fontFamily: "Bitter-semibold" }}
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
