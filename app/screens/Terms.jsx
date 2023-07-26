import { ScrollView, View } from 'react-native';

import Card from '../components/common/Card/Card';
import { Paragraph } from '../components/common/Typography';
import Title from '../components/common/Typography/Title';
import PrivacyIllustration from '../components/svg/PrivacyIllustration';
import { useTranslations } from '../core/i18n/LocaleProvider';

const Terms = () => {
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
        <Title size="small">{t('terms.acceptance.title')}</Title>
        <Paragraph>{t('terms.acceptance.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.personalInformation.title')}</Title>
        <Paragraph>{t('terms.personalInformation.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.medicalInformation.title')}</Title>
        <Paragraph>{t('terms.medicalInformation.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.security.title')}</Title>
        <Paragraph>{t('terms.security.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.prohibitedConduct.title')}</Title>
        <Paragraph>{t('terms.prohibitedConduct.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.intellectualProperty.title')}</Title>
        <Paragraph>{t('terms.intellectualProperty.description')}</Paragraph>
      </View>
      <View className="mb-6">
        <Title size="small">{t('terms.disclaimer.title')}</Title>
        <Paragraph>{t('terms.disclaimer.description')}</Paragraph>
      </View>
      <View className="mb-12">
        <Title size="small">{t('terms.changes.title')}</Title>
        <Paragraph>{t('terms.changes.description')}</Paragraph>
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

export default Terms;
