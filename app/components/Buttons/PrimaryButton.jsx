import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const PrimaryButton = ({ label, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full bg-turquoise-200 py-[12px] px-[16px] rounded-full mb-4"
    >
      {!isLoading ? (
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-center text-deepMarine-500"
        >
          {label}
        </Text>
      ) : (
        <ActivityIndicator color="#336666" className="my-[6px]" />
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
