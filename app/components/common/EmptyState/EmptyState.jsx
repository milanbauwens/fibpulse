import { View } from 'react-native';

import { PrimaryButton } from '../Buttons';
import { Paragraph, Title } from '../Typography';

const EmptyState = ({ illustration, title, description, icon, cta, onPress }) => (
  <View>
    {illustration}
    <View className="mb-6">
      <Title size="medium" textCenter>
        {title}
      </Title>
      <Paragraph className="text-center">{description}</Paragraph>
    </View>
    <PrimaryButton icon={icon} label={cta} onPress={onPress} />
  </View>
);

export default EmptyState;
