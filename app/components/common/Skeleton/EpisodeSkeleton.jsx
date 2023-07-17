import { View } from 'react-native';

import Card from '../Card/Card';

const EpisodeSkeleton = ({ count = 4 }) => (
  <>
    {[...Array(count)].map((_, index) => (
      <Card
        key={index}
        className="w-full mb-4 rounded-lg bg-[#F7F9F9] p-4 shadow-card-md border border-deepMarine-100"
      >
        <View className="w-2/3 h-4 mb-4 bg-[#DDE3E2] rounded-full" />
        <View className="flex flex-row items-center">
          <View className="w-1/5 h-6 bg-[#DDE3E2] rounded-full mr-2 " />
          <View className="w-1/5 h-6 bg-[#DDE3E2] rounded-full " />
        </View>
      </Card>
    ))}
  </>
);

export default EpisodeSkeleton;
