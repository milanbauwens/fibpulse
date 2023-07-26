import { ScrollView, View } from 'react-native';

import Card from '../components/common/Card/Card';
import { Paragraph } from '../components/common/Typography';
import Title from '../components/common/Typography/Title';
import PrivacyIllustration from '../components/svg/PrivacyIllustration';
import { useTranslations } from '../core/i18n/LocaleProvider';

const Privacy = () => {
  const { t } = useTranslations();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <PrivacyIllustration />
      </View>

      <View className="mb-6">
        <Paragraph>{t('privacy.description')}</Paragraph>
      </View>

      <View className="mb-6">
        <Title size="small">{t('privacy.collect.title')}</Title>
        <Paragraph>{t('privacy.collect.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('privacy.use.title')}</Title>
        <Paragraph>{t('privacy.use.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('privacy.security.title')}</Title>
        <Paragraph>{t('privacy.security.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('privacy.storage.title')}</Title>
        <Paragraph>{t('privacy.storage.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('privacy.thirdParty.title')}</Title>
        <Paragraph>{t('privacy.thirdParty.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('privacy.changes.title')}</Title>
        <Paragraph>{t('privacy.changes.description')}</Paragraph>
      </View>
      <View className="mb-12">
        <Title size="small">{t('privacy.updates.title')}</Title>
        <Paragraph>{t('privacy.updates.description')}</Paragraph>
      </View>

      <Card className="bg-deepMarine-100 p-4 rounded-lg">
        <View className="mb-2">
          <Title size="small">{t('privacy.contact')}</Title>
        </View>
        <Paragraph>milabauw@student.arteveldehs.be</Paragraph>
        <Paragraph>+32 474 77 81 96</Paragraph>
        <Paragraph>Hovenierstraat 70, 9940 Evergem </Paragraph>
      </Card>
    </ScrollView>
  );
};

export default Privacy;
