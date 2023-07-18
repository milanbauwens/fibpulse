import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Animated, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getEpisodesByDateRange } from '../../core/db/modules/episodes/api';
import colors from '../../theme/colors';
import ChartSkeleton from '../common/Skeleton/ChartSkeleton';
import { Paragraph } from '../common/Typography';
import { SpotEpisodes } from '../svg/spotIllustrations';
import { getEpisodesCountByWeek } from './helpers/getEpisodesCountByWeek';
import { getEpisodesCountByYear } from './helpers/getEpisodesCountByYear';

const EpisodeChart = () => {
  const { width } = useWindowDimensions();
  const dateObj = new Date();

  const [selectedView, setSelectedView] = useState('week');

  const daysOfTheWeek = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
  const WeeksOfTheMonth = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  // Determine start of the week
  const startOfWeek = dateObj.getDate() - dateObj.getDay() + 1;

  // Get the dates for the start and end of the week
  const startOfWeekDate = new Date(dateObj);
  startOfWeekDate.setDate(startOfWeek);
  startOfWeekDate.setHours(0, 0, 0, 0);

  const endOfWeek = startOfWeek + 6;
  const endOfWeekDate = new Date(dateObj);
  endOfWeekDate.setDate(endOfWeek);
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
      <View className=" px-4 flex flex-row items-center justify-between mb-7">
        <Paragraph isStrong textColor="text-turquoise-500">
          {selectedView === 'week'
            ? `${startOfWeekDate.toLocaleDateString('nl', {
                day: 'numeric',
              })} - ${endOfWeekDate.toLocaleDateString('nl', { day: 'numeric', month: 'long' })}`
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
              Week
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
              Jaar
            </Paragraph>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {!isLoading ? (
        <View className="relative w-full">
          {episodes && episodes.data.length > 0 ? (
            <LineChart
              className="w-full ml-[-20px]"
              data={{
                labels: selectedView === 'week' ? daysOfTheWeek : WeeksOfTheMonth,
                datasets: [
                  {
                    data: selectedView === 'week' ? weekData : yearData,
                  },
                ],
              }}
              width={width - 40} // minus screen padding
              height={228}
              chartConfig={{
                propsForLabels: {
                  fontSize: 14,
                  fontWeight: 'semibold',
                },
                backgroundColor: 'white',
                fillShadowGradientFrom: colors.ochre[500],
                fillShadowGradientOpacity: 0.5,
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                backgroundGradientFromOpacity: 0,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: () => colors.ochre[400],
                labelColor: () => colors.turquoise[700],
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '4',
                  strokeWidth: '1',
                  stroke: colors.ochre[500],
                },
              }}
              bezier
            />
          ) : (
            <View className="h-56 flex flex-col bg-deepMarine-100 rounded-lg p-3 items-center justify-center">
              <SpotEpisodes />
              <Paragraph styles="text-center mt-2" textColor="text-turquoise-500">
                Geen hartmomenten voor deze periode
              </Paragraph>
            </View>
          )}
        </View>
      ) : (
        <ChartSkeleton />
      )}
    </>
  );
};

export default EpisodeChart;
