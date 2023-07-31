import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Animated, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getEpisodesByDateRange } from '../../core/db/modules/episodes/api';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';
import { ChartSkeleton } from '../common/Skeleton';
import { Paragraph } from '../common/Typography';
import { getEpisodesCountByWeek } from './helpers/getEpisodesCountByWeek';
import { getEpisodesCountByYear } from './helpers/getEpisodesCountByYear';

const EpisodeChart = () => {
  const { width } = useWindowDimensions();
  const { t, locale } = useTranslations();

  const [selectedView, setSelectedView] = useState('week');

  const daysOfTheWeek = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
  const WeeksOfTheMonth = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  // Get the date for the start of the week (Monday) on the current week
  const dateObj = new Date();

  const startOfWeekDate = new Date(
    dateObj.setDate(dateObj.getDate() - dateObj.getDay() + (dateObj.getDay() === 0 ? -6 : 1))
  );
  startOfWeekDate.setHours(0, 0, 0, 0);

  // Get the date for the end of the week (Sunday) on the current week
  const endOfWeekDate = new Date(
    dateObj.setDate(dateObj.getDate() - dateObj.getDay() + (dateObj.getDay() === 0 ? 0 : 7))
  );
  endOfWeekDate.setHours(23, 59, 59, 999);

  const handleViewSelection = (view) => {
    if (view === 'week') {
      setSelectedView('week');
    } else {
      setSelectedView('year');
    }
  };

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes', selectedView, dateObj.getFullYear(), startOfWeekDate, endOfWeekDate],
    queryFn: ({ queryKey }) =>
      getEpisodesByDateRange(queryKey[1], queryKey[2], queryKey[3], queryKey[4]),
  });

  // Remap the data to the correct view (week or year)
  const weekData = !isLoading && getEpisodesCountByWeek(episodes.data);
  const yearData = !isLoading && getEpisodesCountByYear(episodes.data, 'year');

  return (
    <>
      <View className="flex flex-row items-center justify-between mb-7">
        <Paragraph isStrong textColor="text-turquoise-500">
          {selectedView === 'week'
            ? `${startOfWeekDate.toLocaleDateString(locale, {
                day: 'numeric',
              })} - ${endOfWeekDate.toLocaleDateString(locale, {
                day: 'numeric',
              })} ${endOfWeekDate.toLocaleDateString(locale, { month: 'long' })}`
            : dateObj.getFullYear()}
        </Paragraph>
        <Animated.View className="rounded-full p-1 bg-deepMarine-100 flex flex-row">
          <TouchableOpacity
            activeOpacity={0.8}
            className={`${
              selectedView === 'week' ? 'bg-deepMarine-600' : ''
            } px-6 h-7 rounded-full flex items-center justify-center`}
            onPress={() => handleViewSelection('week')}
          >
            <Paragraph textColor={selectedView === 'week' ? 'text-white' : 'text-turquoise-500'}>
              {t('time.week')}
            </Paragraph>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            className={`${
              selectedView === 'year' ? 'bg-deepMarine-600' : ''
            } px-6 h-7 rounded-full flex items-center justify-center`}
            onPress={() => handleViewSelection('year')}
          >
            <Paragraph textColor={selectedView === 'year' ? 'text-white' : 'text-turquoise-500'}>
              {t('time.year')}
            </Paragraph>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {!isLoading ? (
        <View className="relative w-full">
          <LineChart
            className="w-full ml-[-35px]"
            data={{
              labels: selectedView === 'week' ? daysOfTheWeek : WeeksOfTheMonth,
              datasets: [
                {
                  data:
                    selectedView === 'week'
                      ? weekData.length > 0
                        ? weekData
                        : [0, 0, 0, 0, 0, 0, 0]
                      : yearData.length > 0
                      ? yearData
                      : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
              ],
            }}
            width={width - 50} // minus screen padding
            height={228}
            chartConfig={{
              propsForLabels: {
                fontSize: 14,
                fontWeight: 400,
              },
              backgroundColor: '#FFF',
              fillShadowGradientFrom: colors.ochre[500],
              fillShadowGradientOpacity: 0.5,
              backgroundGradientFrom: '#FFF',
              backgroundGradientTo: '#FFF',
              backgroundGradientFromOpacity: 0, // optional, defaults to 2dp
              backgroundGradientToOpacity: 0.5,
              style: {
                borderRadius: 16,
              },
              decimalPlaces: 0,
              color: () => colors.ochre[400],
              labelColor: () => colors.turquoise[700],

              propsForDots: {
                r: 4,
                strokeWidth: 2,
                stroke: colors.ochre[500],
              },
            }}
            bezier
          />
        </View>
      ) : (
        <ChartSkeleton />
      )}
    </>
  );
};

export default EpisodeChart;
