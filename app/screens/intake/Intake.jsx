import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../../__content/intake.js';
import { PrimaryButton } from '../../components/common/Buttons/index.jsx';
import { FlatlistItem, FlatlistPaginator } from '../../components/common/Flatlist/index.js';
import { updateMedicalProfile } from '../../core/db/modules/medical_profiles/api.js';
import { useTranslations } from '../../core/i18n/LocaleProvider.jsx';

const Intake = () => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();

  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState();

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const scrollTo = async () => {
    handleUpdate();
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      navigation.navigate('Main');
    }
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
  };

  const column = slides[currentSlide].column;

  // Update data
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateMedicalProfile(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(['medical_profile']);
      setSelected();
    },
  });

  // TODO
  // When all slides are completed, update Medical Profile with status passed_intake to True

  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync(selected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <FlatlistPaginator
        currentSlide={currentSlide}
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        scrollBack={currentSlide === 0 ? () => navigation.navigate('IntakeStart') : scrollBack}
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
        keyExtractor={(item, index) => index.toString()}
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
