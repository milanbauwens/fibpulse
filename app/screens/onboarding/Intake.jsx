import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { Animated, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import slides from "../../content/intake.js";
import IntakeItem from "../../components/Intake/IntakeItem";
import IntakePaginator from "../../components/Intake/IntakePaginator";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Intake = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const scrollTo = async () => {
    if (currentSlide < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentSlide + 1 });
    } else {
      navigation.navigate("Dashboard");
    }
    return;
  };

  const scrollBack = async () => {
    if (currentSlide < slides.length) {
      slidesRef.current.scrollToIndex({ index: currentSlide - 1 });
    }
    return;
  };

  return (
    <SafeAreaView className="relative h-full bg-white">
      <IntakePaginator
        currentSlide={currentSlide}
        data={slides}
        scrollX={scrollX}
        scrollTo={scrollTo}
        scrollBack={scrollBack}
      />

      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <IntakeItem currentSlide={currentSlide} data={item} />
        )}
        bounces={false}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <View className="px-4 absolute left-0 right-0 bottom-14 m-auto flex flex-col justify-center">
        <View className="mb-6">
          <PrimaryButton
            label={
              currentSlide === slides.length - 1
                ? " Voltooi uw profiel"
                : "Volgende"
            }
            onPress={scrollTo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Intake;
