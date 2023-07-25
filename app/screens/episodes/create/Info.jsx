import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import { useTranslations } from '../../../core/i18n/LocaleProvider';

const Info = ({ route }) => {
  const { episodeId } = route.params;
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { t } = useTranslations();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="mt-6 mb-8">
        <Title size="large">{t('episodes.create.info.title')}</Title>
      </View>

      <View className="w-[90%]">
        <View className="flex flex-row mb-8">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              1
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>{t('episodes.create.info.safety.title')} </Paragraph>
            <Paragraph>{t('episodes.create.info.safety.description')} </Paragraph>
          </View>
        </View>

        <View className="flex flex-row mb-8">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              2
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>{t('episodes.create.info.help.title')} </Paragraph>
            <Paragraph>{t('episodes.create.info.help.description')} </Paragraph>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full">
            <Paragraph textColor="text-deepMarine-500" isStrong>
              3
            </Paragraph>
          </View>
          <View className="pl-3">
            <Paragraph isStrong>{t('episodes.create.info.doctor.title')} </Paragraph>
            <Paragraph>{t('episodes.create.info.doctor.description')}</Paragraph>
          </View>
        </View>
      </View>

      <View style={{ bottom: bottom + 32 }} className="px-5 absolute left-0 right-0 m-auto">
        <PrimaryButton
          label={t('episodes.create.info.cta')}
          onPress={() => navigation.navigate('EpisodesCreatePulse', { episodeId })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Info;
