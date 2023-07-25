import React from 'react';
import { Image, View, useWindowDimensions } from 'react-native';

import { useTranslations } from '../../core/i18n/LocaleProvider';
import { Display, Paragraph } from '../common/Typography';

export const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslations();

  return (
    <View style={{ width }} className="flex">
      <View className="basis-[55vh] relative w-full flex">
        <Image
          className="absolute w-full h-full overflow-hidden"
          style={{ resizeMode: 'cover' }}
          source={item.image}
        />
      </View>
      <View className="mt-6 px-5">
        <Display>{t(`onboarding.${item.key}.title`)}</Display>
        <Paragraph styles="mb-4 max-w-xs">{t(`onboarding.${item.key}.description`)}</Paragraph>
      </View>
    </View>
  );
};
