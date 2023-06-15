import { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Header from '../../components/common/Header/Header';
import Popover from '../../components/common/Popover/Popover';
import { Paragraph } from '../../components/common/Typography';
import DeleteAccount from '../../components/svg/DeleteAccount';
import { deleteUser, signOut } from '../../core/db/modules/auth/api';

const AccountScreen = () => {
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);

  const created_at = new Date(user.created_at).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleDeleteAccount = async () => {
    try {
      await deleteUser(user);
    } catch (error) {
      console.error(error);
    } finally {
      signOut();
      setIsVisible(false);
    }
  };

  return (
    <>
      <Popover isVisible={isVisible} transparent animationType="slide">
        <View className="bg-white shadow-top-xl mx-4 h-fit rounded-xl px-4 py-6">
          <DeleteAccount />
          <Text
            style={{ fontFamily: 'Bitter-semibold' }}
            className="text-xl text-deepMarine-900 mb-2 mt-8"
          >
            Account Verwijderen?
          </Text>
          <Paragraph className="mb-10" textColor="text-deepMarine-700">
            Bent u zeker dat u uw account wil verwijderen? Deze stap is onomkeerbaar en alle
            vooruitgang zal verloren gaan.
          </Paragraph>
          <View className="w-full flex flex-row items-center ">
            <View className="mr-2 flex-1">
              <PrimaryButton label="Annuleren" onPress={() => setIsVisible(false)} />
            </View>
            <View className="flex-1">
              <TertiairyButton
                action="Verwijder account"
                type="error"
                onPress={handleDeleteAccount}
              />
            </View>
          </View>
        </View>
      </Popover>

      <SafeAreaView className="bg-white h-full w-full">
        <Header title="Account" withPrevious />
        <View className="px-4 ">
          <View className="mb-6">
            <Text
              style={{ fontFamily: 'Mulish-semibold' }}
              className="text-sm text-deepMarine-400 mb-1"
            >
              Volledige naam
            </Text>
            <Text style={{ fontFamily: 'Mulish-medium' }} className="text-base text-deepMarine-900">
              {user.name ? user.name : `${user.firstname} ${user.lastname}`}
            </Text>
          </View>
          <View className="mb-6">
            <Text
              style={{ fontFamily: 'Mulish-semibold' }}
              className="text-sm text-deepMarine-400 mb-1"
            >
              E-mail
            </Text>
            <Text style={{ fontFamily: 'Mulish-medium' }} className="text-base text-deepMarine-900">
              {user.email}
            </Text>
          </View>
          <View className="mb-6">
            <Text
              style={{ fontFamily: 'Mulish-semibold' }}
              className="text-sm text-deepMarine-400 mb-1"
            >
              Actief sinds
            </Text>
            <Text style={{ fontFamily: 'Mulish-medium' }} className="text-base text-deepMarine-900">
              {created_at}
            </Text>
          </View>
          <View className="mb-6">
            <Text
              style={{ fontFamily: 'Mulish-semibold' }}
              className="text-sm text-deepMarine-400 mb-1"
            >
              Loginmethode
            </Text>
            <Text className="text-base text-deepMarine-900" style={{ fontFamily: 'Mulish-medium' }}>
              {user.app_metadata.provider.charAt(0).toUpperCase() +
                user.app_metadata.provider.slice(1)}
            </Text>
          </View>
        </View>
        <View style={{ bottom: bottom + 8 }} className="absolute w-full z-10">
          <TertiairyButton
            type="error"
            action="Verwijder account"
            onPress={() => setIsVisible(true)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default AccountScreen;
