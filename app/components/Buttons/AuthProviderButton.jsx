import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
import { supabase } from "../../db/initSupabase";
import { useNavigation } from "@react-navigation/native";

const AuthProviderButton = ({ provider = "google" | "facebook", onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full border border-neutral-900 py-[12px] px-[16px] rounded-full mb-4"
    >
      <View className="flex flex-row gap-x-3 justify-center items-center">
        {provider === "google" ? <Google /> : <Facebook />}
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-lg text-center text-neutral-900"
        >
          Ga verder met {provider.charAt(0).toUpperCase() + provider.slice(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthProviderButton;
