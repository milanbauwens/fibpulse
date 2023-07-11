import AsyncStorage from '@react-native-async-storage/async-storage';
import { getHeaderTitle } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { useAuthContext } from '../../components/auth/AuthProvider';
import { BackButton } from '../../components/common/Buttons';
import Header from '../../components/common/Header/Header';
import Home from '../../screens/Home';
import Landingscreen from '../../screens/Landingscreen';
import { Onboarding } from '../../screens/Onboarding';
import {
  EpisodeConfirmationScreen,
  EpisodeCreateScreen,
  EpisodeInfoScreen,
  EpisodePulseScreen,
  EpisodeStartScreen,
  Episodes,
  EpisodesDetail,
} from '../../screens/episodes';
import { Intake, IntakeStart } from '../../screens/intake';
import { MedicalDataScreen, PersonalInformationScreen, Settings } from '../../screens/settings';
import colors from '../../theme/colors';
import AuthStack from './AuthStack';

export const AppStack = () => {
  const navigation = useNavigation();
  const AppStack = createNativeStackNavigator();
  const { isLoggedIn } = useAuthContext();
  const [completedOnboarding, setCompletedOnboarding] = useState(false);

  const routes = navigation.getState()?.routes;
  const prevRoute = routes && routes[routes.length - 2]; // -2 because -1 is the current route

  const checkOnboarding = async () => {
    try {
      const onboarding = await AsyncStorage.getItem('@viewedOnboarding');
      if (onboarding !== null) {
        setCompletedOnboarding(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

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

    header: ({ navigation, route, options }) => {
      const title = getHeaderTitle(options, route.name);

      return <Header headerLeft={options.headerLeft} {...navigation} title={title} />;
    },
  });

  if (isLoggedIn) {
    return (
      <AppStack.Navigator screenOptions={screenOptions}>
        {/* {prevRoute?.name === 'Register' ? (
          <>
            <AppStack.Screen
              name="IntakeStart"
              component={IntakeStart}
              options={{
                presentation: 'modal',
              }}
            />
            <AppStack.Screen name="Intake" component={Intake} />
          </>
        ) : (
          <AppStack.Screen name="Main" component={BottomNavigation} />
        )} */}

        <AppStack.Screen
          name="IntakeStart"
          component={IntakeStart}
          options={{
            presentation: 'modal',
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="Intake"
          component={Intake}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="Main"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        {/* Home */}
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        {/* Episodes */}
        <AppStack.Screen
          name="Episodes"
          component={Episodes}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="EpisodesCreateStart"
          component={EpisodeStartScreen}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="EpisodesCreateInfo"
          component={EpisodeInfoScreen}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="EpisodesCreatePulse"
          component={EpisodePulseScreen}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="EpisodesCreateConfirmation"
          component={EpisodeConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="EpisodesCreate"
          component={EpisodeCreateScreen}
          options={{
            headerShown: false,
          }}
        />

        <AppStack.Screen
          name="EpisodesDetail"
          component={EpisodesDetail}
          options={{
            title: 'Hartmoment',
            headerTitle: 'Hartmoment',
            headerLeft: () => <BackButton />,
          }}
        />

        {/* Settings */}
        <AppStack.Screen name="Settings" component={Settings} />
        <AppStack.Screen
          name="MedicalProfile"
          component={MedicalDataScreen}
          options={{
            title: 'Medisch profiel',
            headerTitle: 'Medisch profiel',
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Profile"
          component={PersonalInformationScreen}
          options={{
            title: 'Account',
            headerTitle: 'Account',
            headerLeft: () => <BackButton />,
          }}
        />
      </AppStack.Navigator>
    );
  } else {
    return (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {completedOnboarding ? null : <AppStack.Screen name="Onboarding" component={Onboarding} />}
        <AppStack.Screen name="Landing" component={Landingscreen} />
        <AppStack.Screen name="Auth" component={AuthStack} />
      </AppStack.Navigator>
    );
  }
};
