import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';

import { Paragraph, Title } from '../../components/common/Typography';
import { useTranslations } from '../../core/i18n/LocaleProvider';

const LanguageScreen = () => {
  const { t } = useTranslations();

  const [platform, setPlatform] = useState('ios');

  useEffect(() => {
    if (Platform.OS === 'android') {
      setPlatform('android');
    } else if (Platform.OS === 'ios') {
      setPlatform('ios');
    }
  }, []);

  return (
    <View className="bg-white h-full w-full pt-4">
      <View className="px-4 ">
        <View className="mb-8">
          <Title size="medium">{t('settings.language.title')}</Title>
          <Paragraph>{t('settings.language.description')}</Paragraph>
        </View>

        <View className="w-[90%]">
          <View className="flex flex-row mb-8">
            <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
              <Paragraph textColor="text-deepMarine-500" isStrong>
                1
              </Paragraph>
            </View>
            <View className="pl-3">
              <Paragraph isStrong>{t('settings.language.navigate.title')} </Paragraph>
              <Paragraph>{t(`settings.language.navigate.description.${platform}`)} </Paragraph>
            </View>
          </View>

          <View className="flex flex-row mb-8">
            <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
              <Paragraph textColor="text-deepMarine-500" isStrong>
                2
              </Paragraph>
            </View>
            <View className="pl-3">
              <Paragraph isStrong>{t('settings.language.set.title')} </Paragraph>
              <Paragraph>{t(`settings.language.set.description.${platform}`)} </Paragraph>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LanguageScreen;
