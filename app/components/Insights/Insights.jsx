import { ScrollView, useWindowDimensions } from 'react-native';

import InsightCard from '../InsightCard/InsightCard';
import { Paragraph } from '../common/Typography';

const Insights = () => {
  const { width } = useWindowDimensions();

  const cardWith = width * 0.75;

  return (
    <ScrollView
      horizontal
      style={{ paddingBottom: 24 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      decelerationRate={0}
      snapToInterval={cardWith}
    >
      <InsightCard width={cardWith} variant="turquoise" icon="calendar-heart-outline">
        Al <Paragraph isStrong>4 dagen</Paragraph> geen onregelmatige hartslag.
      </InsightCard>
      <InsightCard width={cardWith} variant="ochre" icon="run">
        Al <Paragraph isStrong>2 keer</Paragraph> een moment na het sporten.
      </InsightCard>
      <InsightCard isLast variant="success" width={cardWith} icon="trend-down">
        U had dit jaar <Paragraph isStrong>minder</Paragraph> momenten dan in 2022.
      </InsightCard>
    </ScrollView>
  );
};

export default Insights;
