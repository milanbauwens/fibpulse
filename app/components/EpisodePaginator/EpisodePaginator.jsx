import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon } from '../common/Icon/Icon';
import { Paragraph } from '../common/Typography';

const EpisodePaginator = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevious = () => {
    const previousDate = new Date(currentDate);
    previousDate.setMonth(previousDate.getMonth() - 1);
    setCurrentDate(previousDate);
  };

  const handleNext = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(nextDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  const handleReset = () => {
    setCurrentDate(new Date());
  };

  const getFormattedMonthYear = () => {
    const options = { month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString('nl', options);
  };

  return (
    <View className=" relative w-full flex flex-row justify-between items-center mb-6">
      <View className="flex flex-row ">
        <TouchableOpacity activeOpacity={0.8} onPress={handlePrevious}>
          <Icon name="chevron-left" size={24} />
        </TouchableOpacity>
        <Icon size={24} />
      </View>
      <Paragraph className="">{getFormattedMonthYear()}</Paragraph>
      <View className="flex flex-row ">
        <TouchableOpacity activeOpacity={0.8} className="mr-2" onPress={handleNext}>
          <Icon name="chevron-right" size={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleReset}>
          <Icon name="chevron-skip-back" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EpisodePaginator;
