import React from 'react';
import { Image, View, useWindowDimensions } from 'react-native';

import { Display, Paragraph } from '../common/Typography';

export default function WalkthroughItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }} className="flex">
      <View className="basis-[55vh] relative w-full flex">
        <Image
          className="absolute w-full h-full overflow-hidden"
          style={{ resizeMode: 'cover' }}
          source={item.image}
        />
      </View>
      <View className="mt-6 px-5">
        <Display>{item.title}</Display>
        <Paragraph className="mb-4 max-w-xs">{item.description}</Paragraph>
      </View>
    </View>
  );
}
