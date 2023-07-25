import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton, SecondaryButton } from '../../../components/common/Buttons';
import { Paragraph, Title } from '../../../components/common/Typography';
import EpisodeConfirmation from '../../../components/svg/EpisodeConfirmation';
import { useTranslations } from '../../../core/i18n/LocaleProvider';

const Confirmation = ({ route }) => {
  const { episodeId } = route.params;

  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { t } = useTranslations();

  return (
    <SafeAreaView className="px-5 relative w-full h-screen bg-white">
      <View>
        <EpisodeConfirmation />
      </View>

      <View>
        <Title textCenter size="large">
          {t('episodes.confirmation.title')}
        </Title>
        <Paragraph styles="text-center max-w-[90%] mx-auto">
          {t('episodes.confirmation.description')}
        </Paragraph>
      </View>

      <View
        style={{ bottom: bottom + 32 }}
        className="flex-1 flex flex-row items-center px-5 absolute left-0 right-0 m-auto justify-center"
      >
        <View className="flex-1 mr-4">
          <SecondaryButton
            label={t('episodes.confirmation.cta.secondary')}
            onPress={() => navigation.navigate('Main')}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label={t('episodes.confirmation.cta.primary')}
            onPress={() =>
              navigation.navigate('EpisodesDetail', {
                episodeId,
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
