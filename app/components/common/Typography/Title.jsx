import { Text } from 'react-native';

const Title = ({
  size = 'small' || 'large' || 'medium',
  children,
  textCenter,
  color = 'text-deepMarine-900',
}) => {
  let variant;

  switch (size) {
    case 'small':
      variant = 'text-lg sm:text-base';
      break;
    case 'medium':
      variant = 'text-xl sm:text-lg';
      break;
    case 'large':
      variant = 'text-2xl small:text-lg';
      break;
    default:
      variant = 'text-lg sm:text-base';
      break;
  }

  return (
    <Text
      style={{ fontFamily: 'Bitter-semibold' }}
      className={`${variant} ${color} mb-1 ${textCenter && 'text-center'}`}
    >
      {children}
    </Text>
  );
};

export default Title;
