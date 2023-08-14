import { useQuery, useQueryClient } from '@tanstack/react-query';
import Constants from 'expo-constants';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/Auth/AuthProvider';
import SettingsItem from '../../components/SettingsItem/SettingsItem';
import Label from '../../components/common/Label/Label';
import { Paragraph, Title } from '../../components/common/Typography';
import { signOut } from '../../core/db/modules/auth/api';
import { getIntakeCompletion } from '../../core/db/modules/medical_profiles/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';

const Settings = ({ navigation }) => {
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();
  const QueryClient = useQueryClient();

  // Check medical profile status
  const { data: medicalProfile, isLoading } = useQuery({
    queryKey: ['medical_profile'],
    queryFn: getIntakeCompletion,
  });

  const scrollY = new Animated.Value(0);

  return (
    <Animated.ScrollView
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
        listener: (event) => {
          navigation.setOptions({
            scrollY: event.nativeEvent.contentOffset.y,
          });
        },
      })}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      className="bg-white h-screen px-5"
    >
      <View className="mb-10">
        <Title size="large">{`${user.firstname} ${user.lastname}`}</Title>
        <Paragraph>{user.email}</Paragraph>
      </View>

      <View className="mb-6">
        <View className="mb-1">
          <Label title={t('settings.profile.title')} />
        </View>
        <SettingsItem
          iconName="user-outline"
          title={t('settings.profile.account')}
          onPress={() => navigation.navigate('Profile')}
        />
        <SettingsItem
          requiresAttention={!isLoading && !medicalProfile?.data.passed_intake}
          iconName="medical-cross-outline"
          title={t('settings.profile.medicalProfile')}
          onPress={() => navigation.navigate('MedicalProfile')}
        />
      </View>

      <View className="mb-6">
        <View className="mb-1">
          <Label title={t('settings.settings.title')} />
        </View>
        <SettingsItem
          iconName="translate"
          title={t('settings.settings.language')}
          onPress={() => navigation.navigate('Language')}
        />
        <SettingsItem
          iconName="lock-unlocked-outline"
          title={t('settings.settings.security')}
          onPress={() => navigation.navigate('Security')}
        />
      </View>

      <View className="mb-16">
        <View className="mb-1">
          <Label title={t('settings.help.title')} />
        </View>

        <SettingsItem
          iconName="file-check-outline"
          title={t('settings.help.privacy')}
          onPress={() => navigation.navigate('Privacy')}
        />
        <SettingsItem
          iconName="file-check-outline"
          title={t('settings.help.terms')}
          onPress={() => navigation.navigate('Terms')}
        />
        <SettingsItem
          type="error"
          iconName="log-out"
          title={t('settings.logout')}
          onPress={async () => {
            QueryClient.removeQueries();
            await signOut();
          }}
        />
      </View>

      <Text
        style={{ marginBottom: bottom + 8 }}
        className="text-xs text-center text-deepMarine-400"
      >
        {`Fibpulse v${Constants.expoConfig.version}`}
      </Text>
    </Animated.ScrollView>
  );
};

export default Settings;
