import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Google from "../svg/icons/Google";
import Facebook from "../svg/icons/Facebook";

const AuthProviderButton = ({
  provider = "google" | "facebook",
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      className="flex justify-center items-center border border-deepMarine-700 py-[12px] px-[16px] min-h-12 rounded-full mb-6 w-full bg-white"
    >
      <View className="flex flex-row gap-x-3 justify-center items-center">
        {provider === "google" && <Google />}
        {provider === "facebook" && <Facebook />}
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-base text-center text-deepMarine-700"
        >
          Doorgaan met {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthProviderButton;
