import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../../__content/intake.js';
import { PrimaryButton, TertiairyButton } from '../../components/common/Buttons/index.js';
import { FlatlistItem, FlatlistPaginator } from '../../components/common/Flatlist/index.js';
import Popover from '../../components/common/Popover/Popover.jsx';
import Paragraph from '../../components/common/Typography/Paragraph.jsx';
import Title from '../../components/common/Typography/Title.jsx';
import { updateMedicalProfile } from '../../core/db/modules/medical_profiles/api.js';
import { useTranslations } from '../../core/i18n/LocaleProvider.jsx';

const Intake = ({ route }) => {
  const { fromSettings } = route.params || false;

  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { t } = useTranslations();

  const slidesRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const scrollTo = async () => {
    handleUpdate();
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
      setIsDisabled(true);
    } else {
      await setPassedIntake.mutateAsync();
    }
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
  };

  const column = slides[currentSlide].column;
  const passedIntakeColumn = 'passed_intake';

  // Update data
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateMedicalProfile(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries('medical_profile');
      setSelected();
    },
  });
  const setPassedIntake = useMutation(() => updateMedicalProfile(passedIntakeColumn, true), {
    onSuccess: () => {
      queryClient.invalidateQueries('medical_profile');
      if (fromSettings) {
        navigation.navigate('MedicalProfile');
      } else {
        navigation.navigate('Main');
      }
    },
    onError: () => {
      throw new Error(t('error.generic'));
    },
  });

  // handle disabled state
  useEffect(() => {
    if (selected && (selected.length > 0 || typeof selected !== 'object')) {
      setIsDisabled(false);
    }
  }, [selected]);

  const handleUpdate = async () => {
    await mutation.mutateAsync(selected);
  };

  const handleClose = () => {
    setIsVisible(false);
    if (fromSettings) {
      navigation.navigate('Main', { screen: 'Settings' });
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <Popover animationType="slide" isVisible={isVisible}>
        <View
          style={{ width: width - 32 }}
          className="bg-white border border-deepMarine-100 shadow-card-md absolute rounded-lg p-4"
        >
          <Title size="medium">{t('medicalProfile.cancel.title')}</Title>
          <Paragraph styles="mb-8">{t('medicalProfile.cancel.description')} </Paragraph>
          <View className="flex-1 flex flex-row items-center justify-center">
            <View className="flex-1 mr-4">
              <PrimaryButton
                label={t('medicalProfile.cancel.cta.primary')}
                onPress={() => setIsVisible(false)}
              />
            </View>
            <View className="flex-1">
              <TertiairyButton
                action={t('medicalProfile.cancel.cta.secondary')}
                onPress={handleClose}
                type="error"
              />
            </View>
          </View>
        </View>
      </Popover>

      <FlatlistPaginator
        currentSlide={currentSlide}
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        scrollBack={
          currentSlide === 0
            ? fromSettings
              ? () => navigation.navigate('MedicalIntakeStart', { fromSettings })
              : () => navigation.navigate('IntakeStart', { fromSettings })
            : scrollBack
        }
        onClose={() => setIsVisible(true)}
      />

      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FlatlistItem
            type="medicalProfile"
            onSelect={(selected) => setSelected(selected)}
            data={item}
          />
        )}
        bounces={false}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <View
        style={{ bottom: bottom + 32 }}
        className="px-4 absolute left-0 right-0 m-auto flex flex-col justify-center"
      >
        <PrimaryButton
          isDisabled={isDisabled}
          label={
            currentSlide === slides.length - 1
              ? t('medicalProfile.finish')
              : t('medicalProfile.next')
          }
          onPress={scrollTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Intake;
