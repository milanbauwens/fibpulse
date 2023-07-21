import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import CTACard from '../components/CTACard/CTACard';
import EpisodeChart from '../components/EpisodeChart/EpisodeChart';
import Insights from '../components/Insights/Insights';
import SectionCard from '../components/SectionCard/SectionCard';
import { useAuthContext } from '../components/auth/AuthProvider';
import { Paragraph, Title } from '../components/common/Typography';
import { getLatestEpisode } from '../core/db/modules/episodes/api';
import { getDaysSinceLastEpisode } from '../core/utils/episode/getDaysSinceLastEpisode';

const Home = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation();

  const [daysSince, setDaysSince] = useState(0); // TODO: Replace with actual days since last admission

  // Get latest episode
  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes'],
    queryFn: getLatestEpisode,
  });

  useEffect(() => {
    if (!isLoading && episodes.data) {
      setDaysSince(getDaysSinceLastEpisode(episodes.data.created_at));
    }
  }, [episodes, isLoading]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">{`Dag ${user.firstname}`}</Title>
        <Paragraph>
          Al <Text style={{ fontFamily: 'Mulish-bold' }}>{`${daysSince} dagen`}</Text> geen
          onregelmatige hartslag
        </Paragraph>
      </View>
      <View className="mb-6">
        <CTACard
          onPress={() => navigation.navigate('EpisodesCreateStart')}
          title="Hartmoment toevoegen"
          description="Leg steeds een moment vast, bij een onregelmatige hartslag."
        />
      </View>
      <SectionCard
        label="Dagboek"
        title="Mijn Hartmomenten"
        description="Houd uw momenten bij en creëer een beter overzicht over uw ritmestoornis."
        cta="Bekijk alle hartmomenten"
        icon="calendar-heart-outline"
        onPress={() => navigation.navigate('Episodes')}
      >
        <EpisodeChart />
      </SectionCard>
      <Insights />
      <SectionCard
        withImage
        source={require('../../assets/images/woman-running.jpg')}
        label="Ontdek"
        title="Een gezond hart nastreven"
        description="Wees bewust van de zaken die nefast zijn voor uw hart."
        cta="Bekijk alle tips"
        icon="calendar-heart-outline"
        onPress={() => navigation.navigate('Discover')}
      />
    </ScrollView>
  );
};

export default Home;
