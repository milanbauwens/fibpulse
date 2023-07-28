import { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import Label from '../../components/common/Label/Label';
import { Paragraph } from '../../components/common/Typography';
import SettingsItem from '../../components/screens/settings/SettingsItem/SettingsItem';
import { signOut } from '../../core/db/modules/auth/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';

const Settings = ({ navigation }) => {
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      scrollY,
    });
  }, [scrollY]);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY < 60) {
      setScrollY(offsetY);
    }
  };

  return (
    <Animated.ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 0 }}
      className="bg-white h-screen px-5"
    >
      <View className="mb-10">
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
        <SettingsItem iconName="lock-unlocked-outline" title={t('settings.settings.security')} />
      </View>

      <View className="mb-16">
        <View className="mb-1">
          <Label title={t('settings.help.title')} />
        </View>

        <SettingsItem iconName="announcement-outline" title={t('settings.help.bug')} />
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
          onPress={async () => await signOut()}
        />
      </View>

      <Text
        style={{ marginBottom: bottom + 8 }}
        className="text-xs text-center text-deepMarine-400"
      >
        Fibpulse v1.0.0{' '}
      </Text>
    </Animated.ScrollView>
  );
};

export default Settings;
