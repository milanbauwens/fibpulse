import { TextInput, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../../common/Icon/Icon';

const Input = ({
  variant,
  value,
  icon,
  placeholder,
  error,
  inputMode,
  onFocus,
  onPressIn,
  onChangeText,
  onSubmitEditing,
  disabled,
}) => (
  <View className="relative">
    <TextInput
      onChangeText={onChangeText}
      multiline={variant === 'textarea'}
      numberOfLines={variant === 'textarea' ? 4 : 1}
      editable={!disabled}
      placeholder={placeholder}
      className={`w-full ${
        variant === 'textarea' ? 'h-48' : 'h-12 '
      } rounded-lg bg-deepMarine-100 px-2 text-base text-deepMarine-900 ${
        error ? 'border-red-500 border bg-red-100' : ''
      }  outline-none transition-all duration-300`}
      style={{
        fontFamily: 'Mulish-medium',
        paddingTop: variant === 'textarea' ? 8 : 0,
        paddingBottom: variant === 'textarea' ? 8 : 0,
        lineHeight: variant === 'textarea' ? 24 : 20,
      }}
      value={value}
      inputMode={inputMode}
      onFocus={onFocus}
      secureTextEntry={false}
      onPressIn={onPressIn}
      onSubmitEditing={onSubmitEditing}
      aria-disabled={disabled}
    />
    <View className="absolute right-2 h-6 w-6 top-3 flex items-center justify-center text-turquoise-700">
      <Icon name={icon} size={24} color={colors.turquoise[700]} />
    </View>
  </View>
);

export default Input;
