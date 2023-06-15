import { useNavigation } from '@react-navigation/native';
import { signOut } from 'core/db/modules/auth/api';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from 'components/auth/AuthProvider';
import Header from 'components/common/Header/Header';
import { Paragraph, Title } from 'components/common/Typography';
import SettingsItem from 'components/screens/settings/SettingsItem/SettingsItem';

const Settings = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const [notifactionState, setNotificationState] = useState(false);

  const toggleSwitch = () => setNotificationState((previousState) => !previousState);

  return (
    <SafeAreaView className="bg-white">
      <Header title="Instellingen" withClose />
      <ScrollView className="mb-6 px-4">
        <View className="mb-12">
          <Title size="large">{user.name ? user.name : `${user.firstname} ${user.lastname}`}</Title>
          <Paragraph>{user.email}</Paragraph>
        </View>

        <View className="mb-6">
          <Text className="text-sm text-deepMarine-400 mb-6">Profiel</Text>
          <SettingsItem
            iconName="account"
            title="Account"
            onPress={() => navigation.navigate('AccountScreen')}
          />
          <SettingsItem
            iconName="heart"
            title="Medische gegevens"
            onPress={() => navigation.navigate('MedicalDataScreen')}
          />
        </View>

        <View className="mb-6">
          <Text className="text-sm text-deepMarine-400 mb-6">Instellingen & voorkeuren</Text>
          <SettingsItem
            iconName="bell"
            title="Meldingen"
            withToggle
            toggleState={notifactionState}
          />
          <SettingsItem iconName="translate" title="Taal" />
          <SettingsItem iconName="lock-check" title="Beveiliging" />
        </View>

        <View className="mb-16">
          <Text className="text-sm text-deepMarine-400 mb-6">Help</Text>
          <SettingsItem iconName="flag" title="Rapporteer een probleem" />
          <SettingsItem iconName="information" title="Privacy verklaring" />
          <SettingsItem iconName="information" title="Gebruikersvoorwaarden" />
          <SettingsItem
            type="error"
            iconName="exit-to-app"
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
    </SafeAreaView>
  );
};

export default Settings;
