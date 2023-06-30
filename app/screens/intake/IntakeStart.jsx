import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icon } from '../../components/Icon/Icon';
import { PrimaryButton, SecondaryButton } from '../../components/common/Buttons';
import { Paragraph, Title } from '../../components/common/Typography';
import IntakeIllustration from '../../components/svg/IntakeIllustration';
import colors from '../../theme/colors';

const IntakeStart = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View className="flex flex-col items-center">
        <IntakeIllustration className="mb-12 mt-20" />
        <View className="w-3/4">
          <Title size="large" textCenter>
            Uw medisch profiel in kaart brengen
          </Title>
        </View>
        <Paragraph className="text-center">
          Met uw medische gegevens, proberen we meer inzichten te krijgen in hoe uw ritmestoornis in
          elkaar zit.
        </Paragraph>
        <View className="flex items-center justify-center flex-row mt-5">
          <View className="rounded-full bg-turquoise-200 w-8 h-8 flex items-center justify-center">
            <Icon name="clock-outline" size={20} color={colors.turquoise[700]} />
          </View>
          <Paragraph className="ml-3" textColor="text-deepMarine-900" isStrong>
            5-8 minuten
          </Paragraph>
        </View>
      </View>
      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton label="Doe dit later" onPress={() => navigation.navigate('Main')} />
        </View>
        <View className="flex-1">
          <PrimaryButton label="Ga van start" onPress={() => navigation.navigate('Intake')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntakeStart;
