import React from 'react';
import { View, useWindowDimensions } from 'react-native';

import { useTranslations } from '../../core/i18n/LocaleProvider';
import { Paragraph, Title } from '../common/Typography';

export const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslations();

  return (
    <View style={{ width }} className="flex items-center px-5">
      {item.illustration}
      <View style={{ marginTop: -24 }} className="mb-8">
        <Title size="large" textCenter>
          {t(`onboarding.${item.key}.title`)}
        </Title>
        <Paragraph styles="text-center" textCenter>
          {t(`onboarding.${item.key}.description`)}
        </Paragraph>
      </View>
    </View>
  );
};
