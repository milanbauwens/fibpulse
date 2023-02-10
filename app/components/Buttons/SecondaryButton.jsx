import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const SecondaryButton = ({ label, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="p-4 w-fit rounded-lg active:bg-deepMarine-500 border-2 border-deepMarine-500 "
    >
      {!isLoading ? (
        <Text
          style={{ fontFamily: "Mulish-semibold" }}
          className="text-lg text-center text-deepMarine-500"
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
