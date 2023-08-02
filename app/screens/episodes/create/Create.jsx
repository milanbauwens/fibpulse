import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../../../__content/episode.js';
import { PrimaryButton, TertiairyButton } from '../../../components/common/Buttons/index.js';
import { FlatlistItem, FlatlistPaginator } from '../../../components/common/Flatlist/index.js';
import Popover from '../../../components/common/Popover/Popover.jsx';
import Paragraph from '../../../components/common/Typography/Paragraph.jsx';
import Title from '../../../components/common/Typography/Title.jsx';
import { deleteEpisodeById, updateEpisode } from '../../../core/db/modules/episodes/api.js';
import { useTranslations } from '../../../core/i18n/LocaleProvider.jsx';

const Create = ({ route }) => {
  const { hasMeasuredPulse, episodeId } = route.params;

  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();
  const { t } = useTranslations();
  const { width } = useWindowDimensions();

  const slidesRef = useRef(null);
  const [data] = useState(hasMeasuredPulse ? slides.slice(1) : slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selected, setSelected] = useState();

  const [isVisible, setIsVisible] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentSlide(viewableItems[0].index);
    }
  }).current;

  const scrollTo = async () => {
    handleUpdate();
    if (currentSlide < data.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
      setIsDisabled(true);
    } else if (currentSlide === data.length - 1) {
      navigation.navigate('EpisodesCreateConfirmation', { episodeId });
    }
  };

  const scrollBack = async () => {
    if (currentSlide < data.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
  };

  // Update data
  const column = data[currentSlide].column;
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateEpisode(episodeId, column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries('episodes');
      setSelected();
    },
  });
  const deletion = useMutation((id) => deleteEpisodeById(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('episodes');
      setIsVisible(false);
      navigation.navigate('Main');
    },
  });

  useEffect(() => {
    if (!column || column === 'notes') {
      setIsDisabled(false);
    }
    if (selected && (selected.length > 0 || typeof selected !== 'object')) {
      setIsDisabled(false);
    }
  }, [selected, column]);

  const handleUpdate = async () => {
    await mutation.mutateAsync(selected);
  };

  const handleDelete = async () => {
    await deletion.mutateAsync(episodeId);
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <Popover animationType="slide" isVisible={isVisible}>
        <View
          style={{ width: width - 32 }}
          className="bg-white border border-deepMarine-100 shadow-card-md absolute rounded-lg p-4"
        >
          <Title size="medium">{t('episodes.create.cancel.title')}</Title>
          <Paragraph styles="mb-8">{t('episodes.create.cancel.description')} </Paragraph>
          <View className="flex-1 flex flex-row items-center justify-center">
            <View className="flex-1 mr-4">
              <PrimaryButton
                label={t('episodes.create.cancel.cta.primary')}
                onPress={() => setIsVisible(false)}
              />
            </View>
            <View className="flex-1">
              <TertiairyButton
                action={t('episodes.create.cancel.cta.secondary')}
                onPress={handleDelete}
                type="error"
              />
            </View>
          </View>
        </View>
      </Popover>

      <FlatlistPaginator
        currentSlide={currentSlide}
        data={data}
        scrollX={scrollX}
        scrollTo={scrollTo}
        onClose={() => setIsVisible(true)}
        scrollBack={
          currentSlide === 0
            ? () => navigation.navigate('EpisodesCreatePulse', { episodeId })
            : scrollBack
        }
      />
      <FlatList
        data={data}
        onScrollToIndexFailed={() => {
          slidesRef.current.scrollToIndex({ index: 0, animated: true });
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FlatlistItem
            type="episodes.intake"
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
            currentSlide === data.length - 1
              ? t('episodes.create.finish')
              : t('episodes.create.next')
          }
          onPress={scrollTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create;
