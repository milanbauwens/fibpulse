import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Home from '../../screens/Home';
import { Settings } from '../../screens/settings';
import colors from '../../theme/colors';

const BottomNavigation = () => {
  const bottomTab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.turquoise[500],
    tabBarInactiveTintColor: 'lightgray',
    tabBarShowLabel: false,
    tabBarStyle: {
      showLabel: false,
      backgroundColor: colors.turquoise[500],
      height: 80,
      borderTopWidth: 0,
      paddingTop: 10,
      paddingHorizontal: 10,
    },

    // tabBarIcon: ({ focused, color, size }) => {
    //   let iconName = 'ios-home';

    //   switch (route.name) {
    //     case 'Home':
    //       iconName = focused ? 'grid' : 'grid-outline';
    //       break;
    //     case 'BudgetCategories':
    //       iconName = focused ? 'wallet' : 'wallet-outline';
    //       break;
    //     case 'GoalsCategories':
    //       iconName = focused ? 'golf' : 'golf-outline';
    //       break;
    //     case 'Educational':
    //       iconName = focused ? 'school' : 'school-outline';
    //       break;
    //   }

    //   return <Ionicons name={iconName} size={size} color={color} />;
    // },
  });

  return (
    <bottomTab.Navigator screenOptions={screenOptions}>
      <bottomTab.Screen name="Overview" component={Home} />
      <bottomTab.Screen name="Settings" component={Settings} />
    </bottomTab.Navigator>
  );
};

export default BottomNavigation;
