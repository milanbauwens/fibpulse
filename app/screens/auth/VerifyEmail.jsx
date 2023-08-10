import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../../components/common/Buttons';
import { Paragraph, Title } from '../../components/common/Typography';
import VerifiedEmail from '../../components/svg/VerifiedEmail';
import { useTranslations } from '../../core/i18n/LocaleProvider';

const VerifyEmail = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();

  return (
    <SafeAreaView className="px-5 w-full h-screen bg-white">
      <VerifiedEmail />
      <Title size="large" textCenter>
        {t('verifyEmail.title')}
      </Title>
      <Paragraph styles="text-center">{t('verifyEmail.description')}</Paragraph>

      <View
        style={{ bottom: bottom + 32 }}
        className="px-4 absolute left-0 right-0 m-auto flex flex-col justify-center"
      >
        <PrimaryButton label={t('verifyEmail.cta')} onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;
