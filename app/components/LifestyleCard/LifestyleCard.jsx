import { Dimensions, Image, Text, View } from 'react-native';

import Card from '../Card/Card';
import { Paragraph, Title } from '../common/Typography';

const LifestyleCard = ({ category, content, imageURL }) => {
  const { width } = Dimensions.get('window');

  return (
    <Card style={{ width: width - 16 * 2 }} className="bg-white min-h-[212] flex flex-row mx-4">
      <View className="p-4 basis-[60%]">
        <Text
          style={{ fontFamily: 'Mulish-semibold' }}
          className="text-sm text-deepMarine-400 mb-2"
        >
          {category}
        </Text>
        <Title size="medium">Wist je dat...</Title>
        <Paragraph styles="mt-[-4]">{content}</Paragraph>
      </View>
      <Image
        source={{ uri: imageURL }}
        style={{
          width: '100%',
          flexBasis: '40%',
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        }}
      />
    </Card>
  );
};

export default LifestyleCard;
