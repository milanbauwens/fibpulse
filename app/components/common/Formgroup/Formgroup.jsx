import React, { forwardRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Eye from "../../svg/icons/Eye";
import EyeOff from "../../svg/icons/EyeOff";
import { Controller } from "react-hook-form";

const Formgroup = forwardRef(
  (
    {
      rules = {},
      type,
      inputName,
      label,
      control,
      autoComplete,
      returnKeyType,
      keyboardType,
      autoCapitalize,
      onSubmitEditing,
    },
    ref
  ) => {
    const [secure, setSecure] = useState(true);

    return (
      <View>
        <Text
          style={{ fontFamily: "Mulish-bold" }}
          className="text-sm text-turquoise-500 mb-2"
        >
          {label}
        </Text>
        <View className="relative">
          <Controller
            control={control}
            name={inputName}
            rules={rules}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <>
                <TextInput
                  className={`w-full rounded-lg bg-deepMarine-100 h-12 px-4 text-base  text-deepMarine-900 ${
                    error ? "border-red-500 border bg-red-100" : ""
                  }  outline-none transition-all duration-300`}
                  style={{
                    fontFamily: "Mulish-medium",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  value={value}
                  ref={ref}
                  autoComplete={autoComplete}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={onSubmitEditing}
                  secureTextEntry={type === "password" ? secure : false}
                  autoCapitalize={autoCapitalize}
                  blurOnSubmit={false}
                  returnKeyType={returnKeyType}
                  keyboardType={keyboardType}
                />
                {error && (
                  <Text className="text-red-500 mt-1 text-sm">
                    {error.message}
                  </Text>
                )}
              </>
            )}
          />

          {type === "password" && (
            <TouchableOpacity
              activeOpacity={0.8}
              className="absolute right-2 h-6 w-6 top-3 flex items-center justify-center text-turquoise-700"
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
