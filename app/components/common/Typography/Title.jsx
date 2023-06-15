import { Text } from 'react-native';

const Title = ({ size = 'small' || 'large' || 'medium', children, textCenter, props }) => (
  <Text
    style={{ fontFamily: 'Bitter-semibold' }}
    className={`
      ${size === 'small' && 'text-lg'} 
      ${size === 'medium' && 'text-xl'} 
      ${size === 'large' && 'text-2xl'}
     text-deepMarine-900 mb-2 ${textCenter && 'text-center'}`}
    {...props}
  >
    {children}
  </Text>
);

export default Title;
