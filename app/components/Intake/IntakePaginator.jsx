import React from "react";
import {
  View,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import ArrowLeft from "../svg/icons/ArrowLeft";
import colors from "../../theme/colors";
import BackButton from "../Buttons/BackButton";

const IntakePaginator = ({ data, currentSlide, scrollX, scrollBack }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full relative flex justify-center items-center">
      {currentSlide > 0 && (
        <View className="absolute left-4 top-6">
          <BackButton onPress={scrollBack} />
        </View>
      )}
      <View className="flex flex-row items-center justify-between px-4 h-12 mt-6">
        <View className="flex flex-row gap-x-3">
          {data.map((_, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const color = scrollX.interpolate({
              inputRange,
              outputRange: [
                colors.turquoise[200],
                colors.deepMarine[500],
                colors.deepMarine[500],
              ],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={{ backgroundColor: color }}
                className="h-[10px] w-11 rounded-full"
                key={index.toString()}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default IntakePaginator;
