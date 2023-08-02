import { Text, TouchableOpacity } from 'react-native';

const TertiairyButton = ({ type, label, action, onPress, props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      className="flex flex-row items-center justify-center h-12 px-[16px] "
      {...props}
    >
      <Text
        style={{ fontFamily: 'Bitter-semibold' }}
        className={`${
          type === 'error' ? 'text-[#FF3B30]' : 'text-deepMarine-900'
        } text-center text-base `}
      >
        {label}{' '}
        <Text
          className={`${type === 'error' ? 'text-[#FF3B30]' : 'text-deepMarine-500'} `}
          style={{ fontFamily: 'Bitter-semibold' }}
        >
          {action}
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

export default TertiairyButton;
