import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const SecondaryButton = ({ label, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="py-[12px] px-[16px] min-h-12 flex flex-row items-center justify-center border rounded-full border-deepMarine-700 mb-6"
    >
      {!isLoading ? (
        <Text
          style={{ fontFamily: "Mulish-semibold" }}
          className="text-base text-center text-deepMarine-700"
        >
          {label}
        </Text>
      ) : (
        <ActivityIndicator color="#336666" className="my-[6px]" />
      )}
    </TouchableOpacity>
  );
};

export default SecondaryButton;
