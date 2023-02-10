import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";

export default function WalkthroughItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }} className="flex">
      <View className="basis-[55%] relative w-full flex">
        <Image
          className="absolute w-full h-full overflow-hidden"
          style={{ resizeMode: "cover" }}
          source={item.image}
        />
      </View>
      <View className="mt-6 px-4">
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-[28px] text-neutral-900 mb-4 leading-10 "
        >
          {item.title}
        </Text>
        <Text
          style={{ fontFamily: "Mulish-regular" }}
          className="text-neutral-900 text-[16px] mb-4 leading-6"
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
}
