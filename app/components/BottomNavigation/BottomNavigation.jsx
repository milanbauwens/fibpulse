import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';

import Home from '../../screens/Home';
import { Settings } from '../../screens/settings';
import colors from '../../theme/colors';
import { Icon } from '../Icon/Icon';

const BottomNavigation = () => {
  const bottomTab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: colors.deepMarine[500],
    tabBarInactiveTintColor: '#5C524B',
    tabBarShowLabel: true,
    tabBarStyle: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: colors.deepMarine[700],
      shadowOpacity: 0.15,
      shadowRadius: 8.0,
      backgroundColor: 'white',
      borderTopWidth: 0,
      height: 84,
      paddingTop: 8,
      paddingHorizontal: 40,
    },

    tabBarLabel: ({ focused }) => {
      let label = 'Overzicht';

      switch (route.name) {
        case 'Home':
          label = 'Overzicht';
          break;
        case 'Episodes':
          label = 'Opnames';
          break;
        case 'Discover':
          label = 'Ontdekken';
          break;
        case 'Settings':
          label = 'Profiel';
          break;
      }

      return (
        <Text
          style={{ fontFamily: 'Mulish-bold', color: focused ? colors.deepMarine[500] : '#5C524B' }}
          className="text-xs"
        >
          {label}
        </Text>
      );
    },

    tabBarIcon: ({ focused, color, size }) => {
      let iconName = 'home';

      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Episodes':
          iconName = 'date';
          break;
        case 'Discover':
          iconName = 'discover';
          break;
        case 'Settings':
          iconName = 'user';
          break;
      }

      return <Icon name={focused ? iconName : `${iconName}-outline`} size={24} color={color} />;
    },
  });

  return (
    <bottomTab.Navigator screenOptions={screenOptions}>
      <bottomTab.Screen name="Overview" component={Home} />
      <bottomTab.Screen name="Settings" component={Settings} />
    </bottomTab.Navigator>
  );
};

export default BottomNavigation;
