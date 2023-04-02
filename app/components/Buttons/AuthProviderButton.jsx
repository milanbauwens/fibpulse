import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
import { MaterialIcons } from "@expo/vector-icons";

const AuthProviderButton = ({
  provider = "google" | "facebook" | "e-mail",
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      className=" py-[12px] px-[16px] rounded-full mb-6 w-full bg-white"
    >
      <View className="flex flex-row gap-x-3 justify-center items-center">
        {provider === "google" && <Google />}
        {provider === "facebook" && <Facebook />}
        {provider === "e-mail" && (
          <MaterialIcons name="email" size={32} color="#1B3C43" />
        )}
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-lg text-center text-deepMarine-700"
        >
          Doorgaan met {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthProviderButton;
