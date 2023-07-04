import { TouchableOpacity } from 'react-native';

const Card = ({ children, className, onPress, ...props }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={1}
    className={`rounded-lg relative ${className}`}
    {...props}
  >
    {children}
  </TouchableOpacity>
);

export default Card;
