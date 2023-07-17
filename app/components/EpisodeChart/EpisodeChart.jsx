import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Animated, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getEpisodesByDate } from '../../core/db/modules/episodes/api';
import colors from '../../theme/colors';
import { Paragraph } from '../common/Typography';

const EpisodeChart = () => {
  const { width } = useWindowDimensions();

  const daysOfTheWeek = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
  const WeeksOfTheMonth = ['W1', 'W2', 'W3', 'W4'];

  // Determine start of the week
  const dateObj = new Date();
  const startOfWeek = dateObj.getDate() - dateObj.getDay() + 1;

  // Get the dates for the start and end of the week
  const startOfWeekDate = new Date(dateObj.setDate(startOfWeek));
  const endOfWeekDate = new Date(dateObj.setDate(startOfWeekDate.getDate() + 6));

  const [selectedView, setSelectedView] = useState('week');

  const handleViewSelection = (view) => {
    if (view === 'week') {
      setSelectedView('week');
    } else {
      setSelectedView('month');
    }
  };

  const [date] = useState(new Date());

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['episodes', date.toISOString()],
    queryFn: ({ queryKey }) => getEpisodesByDate(queryKey[1]),
  });

  // Remap the episodes count to the days of the week (0-6)
  const episodesByDay =
    !isLoading &&
    episodes.data.reduce((acc, episode) => {
      const date = new Date(episode.created_at);
      const day = date.getDay();

      acc[day] = acc[day] ? acc[day] + 1 : 1;

      // set value to 0 if there are no episodes on that day
      for (let i = 0; i < 7; i++) {
        if (!acc[i]) {
          acc[i] = 0;
        }
      }

      return acc;
    }, {});

  return (
    <>
      <View className="flex flex-row items-center justify-between mb-7">
        <Paragraph isStrong textColor="text-turquoise-500">
          {startOfWeekDate.toLocaleDateString('nl', {
            day: 'numeric',
          })}
          - {endOfWeekDate.toLocaleDateString('nl', { day: 'numeric', month: 'long' })}
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
              selectedView === 'month' ? 'bg-deepMarine-600' : ''
            } px-6 h-7 rounded-full flex items-center justify-center`}
            onPress={() => handleViewSelection('month')}
          >
            <Paragraph textColor={selectedView === 'month' ? 'text-white' : 'text-turquoise-500'}>
              Maand
            </Paragraph>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <LineChart
        data={{
          labels: selectedView === 'week' ? daysOfTheWeek : WeeksOfTheMonth,
          datasets: [
            {
              data: !isLoading ? Object.values(episodesByDay) : [0, 0, 0, 0, 0, 0, 0],
            },
          ],
        }}
        width={width - 40 - 32} // minus screen padding and card padding
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
            r: '6',
            strokeWidth: '2',
            stroke: colors.ochre[500],
          },
        }}
        bezier
      />
    </>
  );
};

export default EpisodeChart;
