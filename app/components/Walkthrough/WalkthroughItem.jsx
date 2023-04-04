import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import Display from "../Typograhy/Display";
import Paragraph from "../Typograhy/Paragraph";

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
        <Display>{item.title}</Display>
        <Paragraph className="mb-4">
          {item.description}
        </Paragraph>
      </View>
    </View>
  );
}
