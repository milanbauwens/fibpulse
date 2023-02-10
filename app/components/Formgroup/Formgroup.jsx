import React, { forwardRef } from "react";
import { Text, View, TextInput } from "react-native";

const Formgroup = forwardRef(
  (
    {
      label,
      value,
      onChangeText,
      secure,
      returnKeyType,
      keyboardType,
      autoCapitalize,
      onSubmitEditing,
      ...props
    },
    ref
  ) => (
    <View>
      <Text className="text-base text-neutral-900">{label}</Text>
      <TextInput
        className="w-full h-10 border-spacing-x-2 pt-1 text-base text-neutral-900 border-b-2 border-deepMarine-300 outline-none focus:border-deepMarine-500 transition-all duration-300"
        style={{ fontFamily: "Mulish-semibold" }}
        value={value}
        ref={ref}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        blurOnSubmit={false}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        {...props}
      />
    </View>
  )
);

export default Formgroup;
