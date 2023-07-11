import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import slides from '../../../__content/episode.js';
import { PrimaryButton } from '../../../components/common/Buttons/index.jsx';
import { FlatlistItem, FlatlistPaginator } from '../../../components/common/Flatlist/index.js';
import { updateEpisode } from '../../../core/db/modules/episodes/api.js';

const Create = ({ route }) => {
  const { hasMeasuredPulse, episodeId } = route.params;

  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(hasMeasuredPulse ? 1 : 0);
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
      navigation.navigate('EpisodesCreateConfirmation', { episodeId });
    }
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
  };

  // Update data
  const column = slides[currentSlide].column;
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => updateEpisode(episodeId, column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(['episodes']);
      setSelected();
    },
  });

  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync(selected);
    } catch (error) {
      console.log('handleUpdate', error);
    }
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <FlatlistPaginator
        currentSlide={currentSlide}
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        scrollBack={
          (!hasMeasuredPulse && currentSlide === 0) || (hasMeasuredPulse && currentSlide === 1)
            ? () => navigation.navigate('EpisodesCreatePulse', { episodeId })
            : scrollBack
        }
      />

      <FlatList
        initialScrollIndex={hasMeasuredPulse ? 1 : 0}
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <FlatlistItem onSelect={(selected) => setSelected(selected)} data={item} />
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
          label={currentSlide === slides.length - 1 ? ' Hartmoment afronden' : 'Volgende'}
          onPress={scrollTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create;
