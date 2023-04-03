import React, { View } from "react-native";

const ButtonGroup = ({ PrimaryButton, SecondaryButton, TertiairyButton }) => (
  <View className="flex flex-col items-center">
    {PrimaryButton && <View className="mb-4"> PrimaryButton</View>}
    {SecondaryButton && <View className="mb-4"> SecondaryButton</View>}
    <View className="mb-2">{TertiairyButton}</View>
  </View>
);

export default ButtonGroup;
