import { Text } from 'react-native';

const Display = ({ children, textCenter, props }) => {
  return (
    <Text
      style={{ fontFamily: 'Bitter-semibold' }}
      className={`text-[28px] md:text-2xl leading-[42px] text-deepMarine-900 mb-1 ${
        textCenter && 'text-center'
      }`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Display;
