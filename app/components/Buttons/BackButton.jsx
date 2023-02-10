import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../icons/arrowLeft";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center px-4 gap-3 mb-7">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        className="p-2 bg-deepMarine-300 rounded-full"
      >
        <ArrowLeft />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "Mulish-medium" }}
        className="text-base text-neutral-900"
      >
        Ga Terug
      </Text>
    </View>
  );
};

export default BackButton;
