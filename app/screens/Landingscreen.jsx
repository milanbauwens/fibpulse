import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../__content/walkthrough';
import { OnboardingItem, OnboardingNavigator } from '../components/Onboarding';
import { PrimaryButton, TertiairyButton } from '../components/common/Buttons';
import { Icon } from '../components/common/Icon/Icon';
import { Title } from '../components/common/Typography';
import Logo from '../components/svg/Logo';
import { useTranslations } from '../core/i18n/LocaleProvider';

const Landingscreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  const { bottom } = useSafeAreaInsets();

  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView className="bg-white h-full relative">
      <View className="mt-4 w-full flex flex-row items-center justify-center mb-8">
        <Logo className="mr-3" />
        <Title size="small" color="text-deepMarine-600">
          Fibpulse
        </Title>
      </View>

      <View>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          keyExtractor={(_, index) => index.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={16}
          ref={slidesRef}
        />
      </View>

      <View style={{ bottom: bottom + 8 }} className="absolute w-full mx-auto px-5">
        <View className="mb-6">
          <OnboardingNavigator data={slides} scrollX={scrollX} />
        </View>

        <View className="mb-2">
          <PrimaryButton
            icon={<Icon name="mail-outline" size={24} color="white" />}
            label={t('landing.continue', { provider: 'E-mail' })}
            onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
          />
        </View>

        <TertiairyButton
          label={t('landing.cta')}
          action={t('landing.login')}
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Landingscreen;
