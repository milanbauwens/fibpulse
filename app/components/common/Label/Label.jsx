import { Text } from 'react-native';

const Label = ({ title, ...props }) => (
  <Text
    {...props}
    style={{ fontFamily: 'Mulish-bold' }}
    className="text-sm text-turquoise-500 mb-2"
  >
    {title}
  </Text>
);

export default Label;
