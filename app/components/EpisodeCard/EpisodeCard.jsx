import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import Badge from '../common/Badge/Badge';
import Card from '../common/Card/Card';

const EpisodeCard = ({ date, startHour, endHour, pulse, activity, id }) => {
  const navigation = useNavigation();

  return (
    <Card
      onPress={() =>
        navigation.navigate('EpisodesDetail', {
          id,
        })
      }
      className="bg-white border shadow-card-md border-deepMarine-100 p-4 rounded-lg"
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
        <Badge marginLeft="ml-2" variant="ochre" icon="run" label={activity} />
      </View>
    </Card>
  );
};

export default EpisodeCard;
