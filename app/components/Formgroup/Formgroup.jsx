import React, { forwardRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Eye from "../icons/Eye";
import EyeOff from "../icons/EyeOff";

const Formgroup = forwardRef(
  (
    {
      type,
      label,
      value,
      onChangeText,
      returnKeyType,
      keyboardType,
      autoCapitalize,
      onSubmitEditing,
      ...props
    },
    ref
  ) => {
    const [secure, setSecure] = useState(true);

    return (
      <View>
        <Text className="text-base text-neutral-900">{label}</Text>
        <View className="relative">
          <TextInput
            className="w-full h-10 border-spacing-x-2 pt-1 text-base text-neutral-900 border-b-2 border-deepMarine-300 outline-none focus:border-deepMarine-500 transition-all duration-300"
            style={{ fontFamily: "Mulish-semibold" }}
            value={value}
            ref={ref}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={type === "password" ? secure : false}
            autoCapitalize={autoCapitalize}
            blurOnSubmit={false}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            {...props}
          />
          {type === "password" && (
            <TouchableOpacity
              activeOpacity={0.8}
              className="absolute right-2 h-6 w-6 top-2 flex items-center justify-center text-neutral-900"
              onPress={() => setSecure(!secure)}
            >
              {secure ? <Eye /> : <EyeOff />}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

export default Formgroup;
