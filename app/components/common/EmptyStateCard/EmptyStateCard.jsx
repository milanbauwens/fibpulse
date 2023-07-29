import { View } from 'react-native';

import colors from '../../../theme/colors';
import Card from '../Card/Card';
import { Icon } from '../Icon/Icon';
import { Paragraph, Title } from '../Typography';

const EmptyStateCard = ({ icon, title, description }) => {
  return (
    <Card className="w-full h-64 rounded-lg bg-deepMarine-100 flex items-center justify-center p-5">
      <View className="bg-turquoise-200 w-12 rounded-full h-12 flex flex-row items-center justify-center mb-4">
        <Icon name={icon} size={28} color={colors.deepMarine[500]} />
      </View>

      <View>
        <Title size="small" textCenter>
          {title}
        </Title>
        <Paragraph textColor="text-turquoise-700" styles="text-center">
          {description}
        </Paragraph>
      </View>
    </Card>
  );
};

export default EmptyStateCard;
