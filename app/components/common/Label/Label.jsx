import { Text } from 'react-native';

const Label = ({ title, textColor = 'text-turquoise-500', ...props }) => (
  <Text {...props} style={{ fontFamily: 'Mulish-bold' }} className={`text-sm ${textColor} mb-2`}>
    {title}
  </Text>
);

export default Label;
