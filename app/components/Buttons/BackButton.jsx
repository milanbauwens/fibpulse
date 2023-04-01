import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ArrowLeft from "../icons/ArrowLeft";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center px-4 gap-3 mb-7">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={
          onPress
            ? onPress
            : () => {
                navigation.goBack();
              }
        }
        className="p-2 bg-turquoise-200 rounded-full"
      >
        <ArrowLeft />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "Mulish-medium" }}
        className="text-base text-deepMarine-900"
      >
        Ga Terug
      </Text>
    </View>
  );
};

export default BackButton;
