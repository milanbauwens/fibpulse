import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";

const AuthProviderButton = ({ provider = "google" | "facebook", onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="border border-neutral-900 py-[12px] px-[16px] rounded-full min-w-[165px]"
    >
      <View className="flex flex-row gap-x-3 justify-center items-center">
        {provider === "google" ? <Google /> : <Facebook />}
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-lg text-center text-neutral-900"
        >
          {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthProviderButton;
