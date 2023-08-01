import { View } from 'react-native';

import colors from '../../theme/colors';
import Card from '../common/Card/Card';
import { Icon } from '../common/Icon/Icon';
import Label from '../common/Label/Label';
import Paragraph from '../common/Typography/Paragraph';

const IconComponent = ({ category }) => {
  let backgroundColor;
  let color;
  let icon;

  switch (category) {
    case 'activity':
      backgroundColor = colors.ochre[200];
      color = colors.ochre[600];
      icon = 'zap-outline';
      break;
    case 'food':
      backgroundColor = colors.deepMarine[700];
      color = colors.deepMarine[100];
      icon = 'food';
      break;
    case 'health':
      backgroundColor = colors.turquoise[200];
      color = colors.deepMarine[500];
      icon = 'medical-cross-outline';
      break;
  }

  return (
    <View
      style={{ backgroundColor }}
      className="w-8 h-8 rounded-full mr-3 flex flex-row items-center justify-center"
    >
      <Icon name={icon} size={20} color={color} />
    </View>
  );
};

const DiscoverCard = ({ width, category, title, content, source }) => {
  let color;

  switch (category) {
    case 'activity':
      color = 'text-ochre-600';
      break;
    case 'food':
      color = 'text-deepMarine-700';
      break;
    case 'health':
      color = 'text-deepMarine-500';
      break;
  }

  return (
    <Card
      style={{ width: width - 12 }}
      className="p-4 flex justify-between shadow-card-md mr-3 bg-white border border-deepMarine-100"
    >
      <View className="mb-6">
        <View className="w-full flex flex-row items-center mb-2">
          <IconComponent category={category} />
          <View className="mb-[-8]">
            <Label textColor={color} title={title} />
          </View>
        </View>
        <Paragraph textColor="text-turquoise-700">{content}</Paragraph>
      </View>
      <View className="mb-[-8]">
        <Label textColor="text-turquoise-700" title={source} />
      </View>
    </Card>
  );
};

export default DiscoverCard;
