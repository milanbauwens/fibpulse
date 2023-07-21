import React, { forwardRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../../common/Icon/Icon';
import Label from '../Label/Label';

const Formgroup = forwardRef(
  (
    {
      rules = {},
      type,
      value,
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
    const [isSecure, setIsSecure] = useState(true);

    return (
      <View>
        <Label title={label} />
        <View className="relative">
          <Controller
            control={control}
            name={inputName}
            rules={rules}
            defaultValue={value}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <TextInput
                  className={`w-full rounded-lg bg-deepMarine-100 h-12 px-4 text-base  text-deepMarine-900 ${
                    error ? 'border-red-500 border bg-red-100' : ''
                  }  outline-none transition-all duration-300`}
                  style={{
                    fontFamily: 'Mulish-medium',
                    paddingTop: 0,
                    paddingBottom: 0,
                    lineHeight: 20,
                  }}
                  value={value}
                  ref={ref}
                  autoComplete={autoComplete}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={onSubmitEditing}
                  secureTextEntry={type === 'password' ? isSecure : false}
                  autoCapitalize={autoCapitalize}
                  blurOnSubmit={false}
                  returnKeyType={returnKeyType}
                  keyboardType={keyboardType}
                />
                {error && <Text className="text-red-500 mt-1 text-sm">{error.message}</Text>}
              </>
            )}
          />

          {type === 'password' && (
            <TouchableOpacity
              activeOpacity={0.8}
              className="absolute right-2 h-6 w-6 top-3 flex items-center justify-center text-turquoise-700"
              onPress={() => setIsSecure(!isSecure)}
            >
              <Icon
                name={isSecure ? 'eye-outline' : 'eye-off-outline'}
                size={24}
                color={colors.turquoise[700]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

export default Formgroup;
