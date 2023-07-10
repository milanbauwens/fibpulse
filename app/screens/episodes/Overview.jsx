import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import EpisodePaginator from '../../components/EpisodePaginator/EpisodePaginator';
import { Icon } from '../../components/common/Icon/Icon';
import { Title } from '../../components/common/Typography';
import colors from '../../theme/colors';

const Overview = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8 flex flex-row justify-between items-center">
        <Title size="large">Hartmomenten</Title>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          className="bg-turquoise-200 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <Icon name="plus" size={24} color={colors.deepMarine[500]} />
        </TouchableOpacity>
      </View>

      <EpisodePaginator current="Januari 2023" />

      <EpisodeCard
        id={1}
        startHour="7:45"
        endHour="8:00"
        date="7 Januari"
        activity="Sporten"
        pulse={187}
      />
    </ScrollView>
  );
};

export default Overview;
