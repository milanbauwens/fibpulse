import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../components/Auth/AuthProvider";
import { View, Text } from "react-native";
import { useState } from "react";

const PersonalInformation = () => {
  const { user } = useAuthContext();
  const [notifactionState, setNotificationState] = useState(false);
  const toggleSwitch = () =>
    setNotificationState((previousState) => !previousState);

  const created_at = new Date(user.created_at).toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Header title="Persoonlijke gegevens" withPrevious />
      <View className="px-4">
        <View className="mb-6">
          <Text
            style={{ fontFamily: "Mulish-semibold" }}
            className="text-sm text-deepMarine-400 mb-2"
          >
            Volledige naam
          </Text>
          <Text
            style={{ fontFamily: "Mulish-medium" }}
            className="text-base text-deepMarine-900"
          >
            {user.name}
          </Text>
        </View>
        <View className="mb-6">
          <Text
            style={{ fontFamily: "Mulish-semibold" }}
            className="text-sm text-deepMarine-400 mb-2"
          >
            E-mail
          </Text>
          <Text
            style={{ fontFamily: "Mulish-medium" }}
            className="text-base text-deepMarine-900"
          >
            {user.email}
          </Text>
        </View>
        <View className="mb-6">
          <Text
            style={{ fontFamily: "Mulish-semibold" }}
            className="text-sm text-deepMarine-400 mb-2"
          >
            Actief sinds
          </Text>
          <Text
            style={{ fontFamily: "Mulish-medium" }}
            className="text-base text-deepMarine-900"
          >
            {created_at}
          </Text>
        </View>
        <View className="mb-6">
          <Text
            style={{ fontFamily: "Mulish-semibold" }}
            className="text-sm text-deepMarine-400 mb-2"
          >
            Loginmethode
          </Text>
          <Text
            className="text-base text-deepMarine-900"
            style={{ fontFamily: "Mulish-medium" }}
          >
            {user.app_metadata.provider.charAt(0).toUpperCase() +
              user.app_metadata.provider.slice(1)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInformation;
