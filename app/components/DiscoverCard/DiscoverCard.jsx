import { Image, View } from 'react-native';

import Card from '../common/Card/Card';
import Label from '../common/Label/Label';
import { Paragraph, Title } from '../common/Typography';

const DiscoverCard = ({ category, content, source }) => (
  <Card className="bg-white shadow-card-md border mb-6 border-deepMarine-100 max-h-52 overflow-hidden flex flex-row">
    <View className="p-4 basis-[60%]">
      <Label title={category} />
      <Title size="medium">Wist je dat...</Title>
      <Paragraph>{content}</Paragraph>
    </View>
    <Image className="w-full h-52 basis-[40%] rounded-r-lg" resizeMode="cover" source={source} />
  </Card>
);

export default DiscoverCard;
