import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAuthContext } from '../../components/auth/AuthProvider';
import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons';
import Formgroup from '../../components/common/Formgroup/Formgroup';
import Popover from '../../components/common/Popover/Popover';
import { Paragraph } from '../../components/common/Typography';
import DeleteAccount from '../../components/svg/DeleteAccount';
import { supabase } from '../../core/db/initSupabase';
import { deleteUser, signOut } from '../../core/db/modules/auth/api';

const AccountScreen = () => {
  const { user } = useAuthContext();
  const { bottom } = useSafeAreaInsets();
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async ({ firstname, lastname, email }) => {
    setIsLoading(true);
    try {
      await supabase.auth.updateUser({
        email,
        data: {
          firstname,
          lastname,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
        <View className="bg-white shadow-top-lg mx-4 h-fit rounded-xl p-4">
          <DeleteAccount />
          <Text
            style={{ fontFamily: 'Bitter-semibold' }}
            className="text-xl text-deepMarine-900 mb-2 mt-8"
          >
            Account Verwijderen?
          </Text>
          <Paragraph styles="mb-10" textColor="text-deepMarine-700">
            Wees voorzichtig! Deze stap is definitief en alle gegevens zullen verloren gaan.
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
        <View className="px-4 ">
          <View className="mb-6">
            <Formgroup
              value={user.firstname}
              rules={{
                required: 'Uw voornaam is verplicht.',
              }}
              control={control}
              label="Voornaam"
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              inputName="firstname"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>

          <View className="mb-6">
            <Formgroup
              value={user.lastname}
              rules={{
                required: 'Uw achternaam is verplicht.',
              }}
              control={control}
              label="Achternaam"
              returnKeyType="done"
              autoCapitalize="none"
              keyboardType="default"
              inputName="lastname"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          <View className="mb-8">
            <View>
              <Formgroup
                value={user.email}
                rules={{
                  required: 'Vul een e-mail in.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Vul een geldig e-mailadres in.',
                  },
                }}
                control={control}
                label="E-mail"
                returnKeyType="done"
                autoCapitalize="none"
                keyboardType="email-address"
                inputName="email"
                onSubmitEditing={() => Keyboard.dismiss()}
              />
            </View>
          </View>
          <PrimaryButton
            label="Opslaan"
            onPress={handleSubmit(handleUpdateProfile)}
            isLoading={isLoading}
          />
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
