import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import React from 'react';
import { View } from 'react-native';

import { useTranslations } from '../../core/i18n/LocaleProvider';
import Discover from '../../screens/Discover';
import Home from '../../screens/Home';
import { Episodes } from '../../screens/episodes';
import { Settings } from '../../screens/settings';
import colors from '../../theme/colors';
import { useAuthContext } from '../auth/AuthProvider';
import Header from '../common/Header/Header';
import { Icon } from '../common/Icon/Icon';

const BottomNavigation = () => {
  const bottomTab = createBottomTabNavigator();

  const { t } = useTranslations();
  const { user } = useAuthContext();

  const screenOptions = ({ route }) => ({
    headerShown: true,
    headerStyle: {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowColor: colors.deepMarine[700],
      shadowOpacity: 0.15,
      shadowRadius: 8.0,
      backgroundColor: 'white',
      elevation: 0,
    },
    headerTitleStyle: {
      fontFamily: 'Mulish-bold',
      fontSize: 18,
    },
    headerTitleAlign: 'center',
    tabBarActiveTintColor: colors.deepMarine[500],
    tabBarInactiveTintColor: '#5C524B',
    tabBarShowLabel: true,
    tabBarLabelStyle: {
      fontFamily: 'Mulish-bold',
      fontSize: 12,
    },
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
      paddingHorizontal: 24,
    },

    header: ({ navigation, route, options }) => {
      const title = getHeaderTitle(options, route.name);

      return <Header {...navigation} title={title} />;
    },

    tabBarIcon: ({ focused, color }) => {
      let iconName = 'home';

      switch (route.name) {
        case 'Home':
          iconName = 'home';
          break;
        case 'Episodes':
          iconName = 'calendar-heart';
          break;
        case 'Discover':
          iconName = 'compass';
          break;
        case 'Settings':
          iconName = 'user';
          break;
      }

      return (
        <View className="pt-2">
          <Icon name={focused ? iconName : `${iconName}-outline`} size={24} color={color} />
        </View>
      );
    },
  });

  return (
    <bottomTab.Navigator screenOptions={screenOptions}>
      <bottomTab.Screen
        name="Overview"
        component={Home}
        options={{ title: t('navigation.home'), headerTitle: t('navigation.home') }}
      />
      <bottomTab.Screen
        name="Episodes"
        component={Episodes}
        options={{ title: t('navigation.episodes'), headerTitle: t('navigation.episodes') }}
      />
      <bottomTab.Screen
        name="Discover"
        component={Discover}
        options={{ title: t('navigation.discover'), headerTitle: t('navigation.discover') }}
      />
      <bottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: t('navigation.profile'),
          headerTitle: `${user.firstname} ${user.lastname}`,
        }}
      />
    </bottomTab.Navigator>
  );
};

export default BottomNavigation;
