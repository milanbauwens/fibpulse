import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { Animated, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { SOURCES } from '../__content/sources';
import DiscoverSlider from '../components/DiscoverSlider/DiscoverSlider';
import { Icon } from '../components/common/Icon/Icon';
import Popover from '../components/common/Popover/Popover';
import { Paragraph, Title } from '../components/common/Typography';
import { useTranslations } from '../core/i18n/LocaleProvider';
import colors from '../theme/colors';

const categories = ['health', 'activity', 'food'];

const Discover = ({ navigation }) => {
  const scrollY = new Animated.Value(0);
  const { t, locale } = useTranslations();

  const [isSourcesVisible, setIsSourcesVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          className="w-8 h-8 bg-white flex items-center justify-center"
          activeOpacity={0.8}
          onPress={() => setIsSourcesVisible(true)}
        >
          <Icon name="info-circle-outline" size={24} />
        </TouchableOpacity>
      ),
    });
  });

  const { width } = useWindowDimensions();

  const cardWith = width * 0.75;

  return (
    <>
      <Popover isVisible={isSourcesVisible} transparent animationType="slide">
        <View style={{ width: width - 32 }} className="bg-white shadow-top-lg h-fit rounded-xl p-4">
          <View className="flex flex-row justify-between items-center mb-2 ">
            <Title size="medium">{t('discover.sources')}</Title>
            <TouchableOpacity
              onPress={() => setIsSourcesVisible(false)}
              activeOpacity={0.8}
              className="w-8 h-8 flex items-center justify-center rounded-full"
            >
              <Icon name="close" size={24} />
            </TouchableOpacity>
          </View>

          <View>
            {SOURCES.map(({ title, url }, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                className="py-3 pr-2 flex flex-row items-center justify-between bg-white"
                onPress={() => Linking.openURL(url)}
              >
                <Paragraph>{locale.includes('nl') ? title.nl : title.en}</Paragraph>
                <Icon name="external-outline" size={16} color={colors.turquoise[400]} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Popover>

      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
          listener: (event) => {
            navigation.setOptions({
              scrollY: event.nativeEvent.contentOffset.y,
            });
          },
        })}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        className="w-full h-screen bg-white"
      >
        <View className="mb-4 px-5">
          <Title size="large">{t('discover.title')}</Title>
        </View>

        {categories.map((category) => (
          <DiscoverSlider
            width={cardWith}
            key={category}
            category={category}
            title={t(`discover.categories.${category}`)}
          />
        ))}
      </Animated.ScrollView>
    </>
  );
};

export default Discover;
