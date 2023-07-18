import { Image, TouchableOpacity, View } from 'react-native';

import Card from '../common/Card/Card';
import { Icon } from '../common/Icon/Icon';
import Label from '../common/Label/Label';
import Line from '../common/Line/Line';
import { Paragraph, Title } from '../common/Typography';

const SectionCard = ({
  withImage = false,
  source,
  title,
  label,
  description,
  cta,
  onPress,
  children,
}) => (
  <Card className="w-full bg-white rounded-lg relative shadow-card-md border border-deepMarine-100 mb-6">
    {withImage && (
      <Image className="w-full h-36 rounded-t-lg" style={{ resizeMode: 'cover' }} source={source} />
    )}
    <View>
      <View className="p-4">
        <Label title={label} />
        <Title size="medium">{title}</Title>
        <Paragraph styles={children ? 'mb-4' : ''}>{description}</Paragraph>
      </View>
      {children}
      <View className="p-4">
        <Line />
        <TouchableOpacity
          className="bg-deepMarine-500 p-3 rounded-lg flex flex-row justify-between items-center"
          activeOpacity={1}
          onPress={onPress}
        >
          <View className="flex flex-row">
            <Icon name="calendar-outline" size={24} color="white" />
            <Paragraph styles="ml-2" textColor="text-white">
              {cta}
            </Paragraph>
          </View>
          <Icon name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </Card>
);

export default SectionCard;
