import { Text } from 'react-native';

const Paragraph = ({ children, isStrong, textColor = 'text-turquoise-700', styles }) => {
  const fontFamily = isStrong ? 'Mulish-bold' : 'Mulish-medium';

  return (
    <Text style={{ fontFamily }} className={`text-base medium:text-sm  ${textColor} ${styles}`}>
      {children}
    </Text>
  );
};

export default Paragraph;
