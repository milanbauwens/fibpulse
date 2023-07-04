import { Text } from 'react-native';

const Title = ({
  size = 'small' || 'large' || 'medium',
  children,
  textCenter,
  props,
  color = 'text-deepMarine-900',
}) => (
  <Text
    style={{ fontFamily: 'Bitter-semibold' }}
    className={`
      ${size === 'small' && 'text-lg sm:text-base'} 
      ${size === 'medium' && 'text-xl sm:text-lg'} 
      ${size === 'large' && 'text-2xl sm:text-lg'}
     ${color} mb-1 ${textCenter && 'text-center'}`}
    {...props}
  >
    {children}
  </Text>
);

export default Title;
