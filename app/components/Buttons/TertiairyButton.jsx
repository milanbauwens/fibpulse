import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

const TertiairyButton = ({ label, action, onPress }) => {
  return (
    <TouchableOpacity className="mt-2" onPress={onPress} activeOpacity={1}>
      <Text
        style={{ fontFamily: "Mulish-bold" }}
        className="text-center text-base text-deepMarine-700"
      >
        {label}{" "}
        <Text
          className="text-deepMarine-500"
          style={{ fontFamily: "Mulish-bold" }}
        >
          {action}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default TertiairyButton;
