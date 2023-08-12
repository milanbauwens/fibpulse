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
      variant = 'text-lg large:text-base';
      break;
    case 'medium':
      variant = 'text-xl large:text-lg';
      break;
    case 'large':
      variant = 'text-2xl large:text-xl';
      break;
    default:
      variant = 'text-xl medium:text-base';
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
