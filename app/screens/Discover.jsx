import { ScrollView, View } from 'react-native';

import DiscoverCard from '../components/DiscoverCard/DiscoverCard';
import { Title } from '../components/common/Typography';
import { useTranslations } from '../core/i18n/LocaleProvider';

const Discover = () => {
  const { t } = useTranslations();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 64 }}
      style={{ paddingTop: 16 }}
      className="w-full h-screen bg-white px-5"
    >
      <View className="mb-8">
        <Title size="large">{t('discover.title')}</Title>
      </View>

      <DiscoverCard
        category="Voeding"
        content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
        source={require('../../assets/images/woman-running.jpg')}
      />
      <DiscoverCard
        category="Voeding"
        content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
        source={require('../../assets/images/woman-running.jpg')}
      />
      <DiscoverCard
        category="Voeding"
        content="Gevarieerde voeding even belangrijk is dan dagelijks dezelfde gezonde voeding?"
        source={require('../../assets/images/woman-running.jpg')}
      />
    </ScrollView>
  );
};

export default Discover;
