import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header/Header";
import { signOut } from "../db/modules/auth/api";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../components/Auth/AuthProvider";
import Paragraph from "../components/Typograhy/Paragraph";
import { View, Text, ScrollView } from "react-native";
import Title from "../components/Typograhy/Title";
import SettingsItem from "../components/SettingsItem/SettingsItem";
import { useState } from "react";

const Settings = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const [notifactionState, setNotificationState] = useState(false);
  const toggleSwitch = () =>
    setNotificationState((previousState) => !previousState);

  return (
    <SafeAreaView>
      <Header title="Instellingen" withClose />
      <ScrollView className="mb-6 px-4">
        <View className="mb-12">
          <Title>{user.name}</Title>
          <Paragraph>{user.email}</Paragraph>
        </View>

        <View className="mb-6">
          <Text className="text-sm text-deepMarine-400 mb-6">Profiel</Text>
          <SettingsItem iconName="account" title="Persoonlijke gegevens" />
          <SettingsItem iconName="cards-heart" title="Hart gegevens" />
        </View>

        <View className="mb-6">
          <Text className="text-sm text-deepMarine-400 mb-6">
            Instellingen & voorkeuren
          </Text>
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
          <SettingsItem iconName="information" title="Privacy verklaring" />
          <SettingsItem
            type="error"
            iconName="exit-to-app"
            title="Afmelden"
            onPress={async () => await signOut()}
          />
        </View>

        <Text className="text-xs text-center text-deepMarine-400 mb-12">
          Fibpulse v1.0.0{" "}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
