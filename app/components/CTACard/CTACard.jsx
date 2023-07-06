import { TouchableOpacity, View } from 'react-native';

import Card from '../common/Card/Card';
import { Icon } from '../common/Icon/Icon';
import { Paragraph, Title } from '../common/Typography';

const CTACard = ({ title, description, onPress }) => (
  <Card onPress={onPress} className="w-full bg-deepMarine-500 rounded-lg p-4 shadow-card-md">
    <View className="flex flex-row items-top justify-between ">
      <View className="w-[80%]">
        <Title color="text-white" size="medium">
          {title}
        </Title>
        <Paragraph textColor="text-white">{description}</Paragraph>
      </View>
      <View>
        <TouchableOpacity
          className="w-8 h-8 flex justify-center items-center bg-deepMarine-600 rounded-full"
          onPress={onPress}
        >
          <Icon name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

export default CTACard;
