import { Text } from 'react-native';

const Paragraph = ({
  children,
  isStrong,
  textColor = 'text-turquoise-700',
  className,
  ...props
}) => {
  return (
    <Text
      style={{ fontFamily: isStrong ? 'Mulish-bold' : 'Mulish-medium' }}
      className={`text-base ${textColor} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
