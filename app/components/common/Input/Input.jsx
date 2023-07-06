import { TextInput, View } from 'react-native';

import colors from '../../../theme/colors';
import { Icon } from '../../common/Icon/Icon';

const Input = ({ value, icon, error, inputMode, onFocus, onPressIn, disabled }) => (
  <View className="relative">
    <TextInput
      editable={!disabled}
      className={`w-full rounded-lg bg-deepMarine-100 h-12 px-4 text-base text-deepMarine-900 ${
        error ? 'border-red-500 border bg-red-100' : ''
      }  outline-none transition-all duration-300`}
      style={{
        fontFamily: 'Mulish-medium',
        paddingTop: 0,
        paddingBottom: 0,
      }}
      value={value}
      inputMode={inputMode}
      onFocus={onFocus}
      secureTextEntry={false}
      onPressIn={onPressIn}
      aria-disabled={disabled}
    />
    <View className="absolute right-2 h-6 w-6 top-3 flex items-center justify-center text-turquoise-700">
      <Icon name={icon} size={24} color={colors.turquoise[700]} />
    </View>
  </View>
);

export default Input;
