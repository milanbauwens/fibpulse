import React, { forwardRef, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Eye from "../icons/Eye";
import EyeOff from "../icons/EyeOff";
import { Controller } from "react-hook-form";

const Formgroup = forwardRef(
  (
    {
      rules = {},
      type,
      inputName,
      label,
      control,
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
        <Text className="text-base text-neutral-900">{label}</Text>
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
                  className={`w-full h-10 border-spacing-x-2 pt-1 text-base text-neutral-900 ${
                    error
                      ? "border-red-500  focus:border-red-500"
                      : " border-deepMarine-300  focus:border-deepMarine-500"
                  } border-b-2 outline-none transition-all duration-300`}
                  style={{ fontFamily: "Mulish-semibold" }}
                  value={value}
                  ref={ref}
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
                  <Text className="text-red-500 text-sm">{error.message}</Text>
                )}
              </>
            )}
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
