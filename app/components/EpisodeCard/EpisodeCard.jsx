import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { useTranslations } from '../../core/i18n/LocaleProvider';
import Badge from '../common/Badge/Badge';
import Card from '../common/Card/Card';

const EpisodeCard = ({ date, startHour, endHour, pulse = '???', activity, id }) => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  let icon;
  switch (activity) {
    case 'sleeping':
      icon = 'night-outline';
      break;
    case 'sitting':
      icon = 'chair-outline';
      break;
    case 'standing':
      icon = 'cactus-outline';
      break;
    case 'walking':
      icon = 'walk-outline';
      break;
    case 'sports':
      icon = 'kayak-outline';
      break;
    case 'other':
      icon = 'dots-horizontal';
      break;
  }

  return (
    <Card
      onPress={() =>
        navigation.navigate('EpisodesDetail', {
          episodeId: id,
        })
      }
      className="bg-white border shadow-card-md border-deepMarine-100 p-4 rounded-lg mb-3"
    >
      <View className="flex flex-row items-baseline mb-4">
        <Text
          style={{ fontFamily: 'Mulish-semibold' }}
          className="text-lg text-deepMarine-900 mr-2"
        >
          {date}
        </Text>
        <Text style={{ fontFamily: 'Mulish-bold' }} className="text-sm text-turquoise-500">
          {startHour} - {endHour}
        </Text>
      </View>
      <View className="flex flex-row items-center">
        <Badge variant="turquoise" icon="activity-heart-outline" label={`${pulse} spm`} />
        {activity && (
          <Badge
            marginLeft="ml-2"
            variant="ochre"
            icon={icon}
            label={t(`episodes.intake.activity.options.${activity}`)}
          />
        )}
      </View>
    </Card>
  );
};

export default EpisodeCard;
