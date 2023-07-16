import { View } from 'react-native';

import Card from '../common/Card/Card';
import { Icon } from '../common/Icon/Icon';
import { Paragraph } from '../common/Typography';

const MeasureCard = ({ icon, title, description, children }) => {
  return (
    <Card className="p-4 rounded-lg shadow-card-md bg-white border border-deepMarine-100">
      <Paragraph>{description}</Paragraph>
      <View className="rounded-lg p-3 mt-4 bg-deepMarine-100">
        {title && icon && (
          <View className="flex flex-row items-center mb-4">
            <Icon name={icon} size={20} />
            <Paragraph isStrong styles="ml-2">
              {title}
            </Paragraph>
          </View>
        )}
        <View>{children}</View>
      </View>
    </Card>
  );
};

export default MeasureCard;
