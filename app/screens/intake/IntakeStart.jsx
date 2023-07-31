import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import { PrimaryButton, SecondaryButton } from '../../components/common/Buttons';
import { Icon } from '../../components/common/Icon/Icon';
import { Paragraph, Title } from '../../components/common/Typography';
import IntakeIllustration from '../../components/svg/IntakeIllustration';
import { supabase } from '../../core/db/initSupabase';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';

const IntakeStart = ({ route }) => {
  const { fromSettings } = route.params || { fromSettings: false };

  const navigation = useNavigation();
  const { user } = useAuthContext();
  const { t } = useTranslations();
  const { bottom } = useSafeAreaInsets();

  const createMedicalProfile = async () => {
    const { error } = await supabase.from('medical_profiles').upsert({
      user_id: user.id,
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <IntakeIllustration className="mb-6" />
      <View className="w-3/4 mx-auto">
        <Title size="large" textCenter>
          {t('medicalProfile.start.title')}
        </Title>
      </View>
      <Paragraph styles="text-center">{t('medicalProfile.start.description')}</Paragraph>
      <View className="flex items-center justify-center flex-row mt-5">
        <View className="rounded-full bg-turquoise-200 w-8 h-8 flex items-center justify-center">
          <Icon name="clock-outline" size={20} color={colors.turquoise[700]} />
        </View>
        <Paragraph styles="ml-3" textColor="text-deepMarine-900" isStrong>
          {t('medicalProfile.start.time', { start: 5, end: 8 })}
        </Paragraph>
      </View>
      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton
            label={t('medicalProfile.start.cta.secondary')}
            onPress={async () => {
              await createMedicalProfile();
              navigation.navigate('Main');
            }}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label={t('medicalProfile.start.cta.primary')}
            onPress={async () => {
              await createMedicalProfile();

              if (fromSettings) {
                navigation.navigate('MedicalIntake');
              } else {
                navigation.navigate('Intake', { fromSettings });
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntakeStart;
