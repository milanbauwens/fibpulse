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
  const [data] = useState(hasMeasuredPulse ? slides.slice(1) : slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState();

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
      queryClient.invalidateQueries(['episodes']);
      setSelected();
    },
  });

  const handleUpdate = async () => {
    await mutation.mutateAsync(selected);
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <FlatlistPaginator
        currentSlide={currentSlide}
        data={data}
        scrollX={scrollX}
        scrollTo={scrollTo}
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
          label={currentSlide === data.length - 1 ? ' Hartmoment afronden' : 'Volgende'}
          onPress={scrollTo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create;
