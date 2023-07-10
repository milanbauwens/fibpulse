import { View } from 'react-native';

import colors from '../../theme/colors';
import Card from '../common/Card/Card';
import { Icon } from '../common/Icon/Icon';
import { Paragraph } from '../common/Typography';

const InsightCard = ({ variant, width, icon, children, isLast }) => {
  return (
    <Card
      style={{ width: width - 24 }}
      className={`bg-white border border-deepMarine-100 p-4 flex flex-row items-center ${
        isLast ? '' : 'mr-6'
      }`}
    >
      <View className="mr-3">
        <View
          style={{ backgroundColor: colors[variant][200] }}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <Icon name={icon} size={24} color={colors[variant][700]} />
        </View>
      </View>

      <Paragraph className="flex-shrink">{children}</Paragraph>
    </Card>
  );
};

export default InsightCard;
