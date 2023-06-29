import { Text } from 'react-native';

const Title = ({ size = 'small' || 'large' || 'medium', children, textCenter, props }) => (
  <Text
    style={{ fontFamily: 'Bitter-semibold' }}
    className={`
      ${size === 'small' && 'text-lg sm:text-base'} 
      ${size === 'medium' && 'text-xl sm:text-lg'} 
      ${size === 'large' && 'text-2xl sm:text-lg'}
     text-deepMarine-900 mb-1 ${textCenter && 'text-center'}`}
    {...props}
  >
    {children}
  </Text>
);

export default Title;
