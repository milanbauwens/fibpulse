import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';
import { Icon } from '../common/Icon/Icon';
import { Paragraph } from '../common/Typography';

const EpisodePaginator = ({ onChange }) => {
  const { locale } = useTranslations();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    onChange(currentDate);
  }, [currentDate, onChange]);

  const handlePrevious = () => {
    const previousDate = new Date(currentDate);
    previousDate.setMonth(previousDate.getMonth() - 1);
    setCurrentDate(previousDate);
  };

  const isInFuture = () => {
    if (
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleNext = () => {
    // Check if the next month and year is not in the future
    if (isInFuture()) return;

    const nextDate = new Date(currentDate);
    nextDate.setMonth(nextDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  const handleReset = () => {
    // Check if the next month and year is not in the future
    if (isInFuture()) return;

    setCurrentDate(new Date());
  };

  const getFormattedMonthYear = () => {
    const options = { month: 'long', year: 'numeric' };
    return currentDate.toLocaleDateString(locale, options);
  };

  return (
    <View className=" relative w-full flex flex-row justify-between items-center mb-6">
      <View className="flex flex-row ">
        <TouchableOpacity activeOpacity={0.8} onPress={handlePrevious}>
          <Icon name="chevron-left" size={24} />
        </TouchableOpacity>
        <Icon size={24} />
      </View>
      <Paragraph isStrong>{getFormattedMonthYear()}</Paragraph>
      <View className="flex flex-row ">
        <TouchableOpacity activeOpacity={0.8} className="mr-2" onPress={handleNext}>
          <Icon
            name="chevron-right"
            size={24}
            color={
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? colors.turquoise[400]
                : colors.turquoise[700]
            }
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={handleReset}>
          <Icon
            name="chevron-skip-back"
            size={24}
            color={
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
                ? colors.turquoise[400]
                : colors.turquoise[700]
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EpisodePaginator;
