import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import colors from '../../theme/colors';
import Heart from '../svg/icons/Heart';
import Home from '../svg/icons/Home';
import Pill from '../svg/icons/Pill';

const NAVIGATION_ITEMS = [
  {
    title: 'Overzicht',
    icon: Home,
    screen: 'Dashboard',
  },
  {
    title: 'Aanvallen',
    icon: Heart,
    screen: 'Episodes',
  },
  {
    title: 'Medicatie',
    icon: Pill,
    screen: 'Medication',
  },
];

const BottomNavigation = () => {
  const navigation = useNavigation();
  const currentRoute = useRoute();

  return (
    <View className="w-full pt-2 bg-white bottom-0 absolute h-[90px] items-start flex flex-row justify-evenly z-50 shadow-top-lg">
      {NAVIGATION_ITEMS.map((item) => (
        <TouchableOpacity
          className="flex flex-col items-center justify-center"
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          key={item.title}
        >
          <item.icon
            color={
              currentRoute.name === item.screen ? colors.deepMarine[700] : colors.deepMarine[300]
            }
          />
          <Text
            style={{ fontFamily: 'Mulish-regular' }}
            className={`text-xs ${
              currentRoute.name === item.screen ? 'text-deepMarine-700' : 'text-deepMarine-300'
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavigation;
