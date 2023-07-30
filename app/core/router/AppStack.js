import { getHeaderTitle } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { useAuthContext } from '../../components/auth/AuthProvider';
import { BackButton } from '../../components/common/Buttons';
import Header from '../../components/common/Header/Header';
import Home from '../../screens/Home';
import Landingscreen from '../../screens/Landingscreen';
import Privacy from '../../screens/Privacy';
import Terms from '../../screens/Terms';
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
import {
  LanguageScreen,
  MedicalDataScreen,
  PersonalInformationScreen,
  Settings,
} from '../../screens/settings';
import colors from '../../theme/colors';
import { useTranslations } from '../i18n/LocaleProvider';
import AuthStack from './AuthStack';

export const AppStack = () => {
  const navigation = useNavigation();
  const { isLoggedIn } = useAuthContext();
  const { t } = useTranslations();

  const AppStack = createNativeStackNavigator();

  const routes = navigation.getState()?.routes;
  const prevRoute = routes && routes[routes.length - 1];

  const screenOptions = () => ({
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

      return (
        <Header
          headerLeft={options.headerLeft}
          headerRight={options.headerRight}
          {...navigation}
          title={title}
        />
      );
    },
  });

  if (isLoggedIn) {
    return (
      <AppStack.Navigator screenOptions={screenOptions}>
        {prevRoute?.params?.screen === 'Register' ? (
          <>
            <AppStack.Screen
              name="IntakeStart"
              component={IntakeStart}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen
              name="Intake"
              options={{
                headerShown: false,
              }}
              component={Intake}
            />
          </>
        ) : null}

        {/* Main */}
        <AppStack.Screen
          name="Main"
          options={{
            headerShown: false,
          }}
          component={BottomNavigation}
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
            headerLeft: () => <BackButton />,
          }}
        />
        {/* Settings */}
        <AppStack.Screen name="Settings" component={Settings} />
        <AppStack.Screen
          name="MedicalProfile"
          component={MedicalDataScreen}
          options={{
            title: t('navigation.medicalProfile'),
            headerTitle: t('navigation.medicalProfile'),
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Profile"
          component={PersonalInformationScreen}
          options={{
            title: t('navigation.account'),
            headerTitle: t('navigation.account'),
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Language"
          component={LanguageScreen}
          options={{
            title: t('navigation.language'),
            headerTitle: t('navigation.language'),
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            title: t('navigation.privacy'),
            headerTitle: t('navigation.privacy'),
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Terms"
          component={Terms}
          options={{
            title: t('navigation.terms'),
            headerTitle: t('navigation.terms'),
            headerLeft: () => <BackButton />,
          }}
        />

        {/* Medical Profile */}
        <AppStack.Screen
          name="MedicalIntakeStart"
          component={IntakeStart}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="MedicalIntake"
          options={{
            headerShown: false,
          }}
          component={Intake}
        />
      </AppStack.Navigator>
    );
  } else {
    return (
      <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen
          name="Landing"
          component={Landingscreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />

        <AppStack.Screen
          name="Privacy"
          component={Privacy}
          options={{
            title: t('navigation.privacy'),
            headerTitle: t('navigation.privacy'),
            headerLeft: () => <BackButton />,
          }}
        />
        <AppStack.Screen
          name="Terms"
          component={Terms}
          options={{
            title: t('navigation.terms'),
            headerTitle: t('navigation.terms'),
            headerLeft: () => <BackButton />,
          }}
        />
      </AppStack.Navigator>
    );
  }
};
