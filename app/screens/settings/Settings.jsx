import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import Label from '../../components/common/Label/Label';
import { Paragraph, Title } from '../../components/common/Typography';
import SettingsItem from '../../components/screens/settings/SettingsItem/SettingsItem';
import { signOut } from '../../core/db/modules/auth/api';

const Settings = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();

  const [notifactionState, setNotificationState] = useState(false);

  const toggleSwitch = () => setNotificationState((previousState) => !previousState);

  return (
    <ScrollView style={{ paddingTop: 16 }} className="bg-white h-screen px-4">
      <View className="mb-12">
        <Title size="large">{user.name ? user.name : `${user.firstname} ${user.lastname}`}</Title>
        <Paragraph>{user.email}</Paragraph>
      </View>

      <View className="mb-6">
        <View className="mb-2">
          <Label title="Profiel" />
        </View>
        <SettingsItem
          iconName="user-outline"
          title="Account"
          onPress={() => navigation.navigate('Profile')}
        />
        <SettingsItem
          iconName="medical-cross-outline"
          title="Medisch profiel"
          onPress={() => navigation.navigate('MedicalProfile')}
        />
      </View>

      <View className="mb-6">
        <View className="mb-2">
          <Label title="Instellingen & voorkeuren" />
        </View>
        <SettingsItem
          iconName="bell-outline"
          title="Meldingen"
          withToggle
          toggleState={notifactionState}
        />
        <SettingsItem iconName="translate" title="Taal" />
        <SettingsItem iconName="lock-unlocked-outline" title="Beveiliging" />
      </View>

      <View className="mb-16">
        <View className="mb-2">
          <Label title="Help" />
        </View>

        <SettingsItem iconName="announcement-outline" title="Rapporteer een probleem" />
        <SettingsItem iconName="file-check-outline" title="Privacy verklaring" />
        <SettingsItem iconName="file-check-outline" title="Gebruikersvoorwaarden" />
        <SettingsItem
          type="error"
          iconName="log-out"
          title="Afmelden"
          onPress={async () => await signOut()}
        />
      </View>

      <Text
        style={{ marginBottom: bottom + 8 }}
        className="text-xs text-center text-deepMarine-400"
      >
        Fibpulse v1.0.0{' '}
      </Text>
    </ScrollView>
  );
};

export default Settings;
