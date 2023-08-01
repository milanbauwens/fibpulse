import { useQuery } from '@tanstack/react-query';
import { ScrollView, View } from 'react-native';

import { getRandomTips } from '../../core/db/modules/discover/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import DiscoverCard from '../DiscoverCard/DiscoverCard';
import Label from '../common/Label/Label';
import { DiscoverSkeleton } from '../common/Skeleton';

const DiscoverSlider = ({ category, title, width }) => {
  const { locale } = useTranslations();

  // Get random activity tips
  const { data: tips, isLoading } = useQuery({
    queryKey: [category],
    queryFn: ({ queryKey }) => getRandomTips(queryKey[0]),
  });

  return (
    <View>
      <View className="mb-[-12] px-5">
        <Label title={title} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
        style={{ paddingBottom: 4 }}
        snapToInterval={width}
      >
        {!isLoading ? (
          <>
            {tips.map(({ category, title, content, source }, index) => (
              <DiscoverCard
                key={index}
                width={width}
                category={category}
                title={locale.includes('nl') ? title.nl : title.en}
                content={locale.includes('nl') ? content.nl : content.en}
                source={source}
              />
            ))}
          </>
        ) : (
          <>
            {[...Array(3)].map((_, index) => (
              <DiscoverSkeleton key={index} width={width} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default DiscoverSlider;
