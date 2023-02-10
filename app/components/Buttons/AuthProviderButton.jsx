import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";

const AuthProviderButton = ({ provider = "Google" | "Facebook", onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full border border-neutral-900 py-[12px] px-[16px] rounded-full mb-4"
    >
      <View className="flex flex-row gap-x-3 justify-center items-center">
        {provider === "Google" ? <Google /> : <Facebook />}
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-lg text-center text-neutral-900"
        >
          Ga verder met {provider}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthProviderButton;
