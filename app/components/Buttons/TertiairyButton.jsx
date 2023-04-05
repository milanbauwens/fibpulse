import { Text, TouchableOpacity } from "react-native";
import React from "react";

const TertiairyButton = ({ type, label, action, onPress, props }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} {...props}>
      <Text
        style={{ fontFamily: "Mulish-bold" }}
        className={`${
          type === "error" ? "text-red-600" : "text-deepMarine-500"
        } text-center text-base `}
      >
        {label}{" "}
        <Text
          className={`${
            type === "error" ? "text-red-600" : "text-deepMarine-500"
          } `}
          style={{ fontFamily: "Mulish-bold" }}
        >
          {action}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default TertiairyButton;
