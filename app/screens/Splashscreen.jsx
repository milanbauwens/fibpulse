import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';

import colors from '../theme/colors';

export function SplashscreenLoader({ children }) {
  const [isSplashReady, setSplashReady] = useState(false);
  const [loaded, error] = useFonts({
    // Mulish Fonts
    'Mulish-regular': require('../../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-medium': require('../../assets/fonts/Mulish-Medium.ttf'),
    'Mulish-semibold': require('../../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-bold': require('../../assets/fonts/Mulish-Bold.ttf'),
    // Bitter Fonts
    'Bitter-regular': require('../../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-medium': require('../../assets/fonts/Bitter-Medium.ttf'),
    'Bitter-semibold': require('../../assets/fonts/Bitter-SemiBold.ttf'),
    'Bitter-bold': require('../../assets/fonts/Bitter-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded) {
        setSplashReady(true);
      } else if (error) {
        console.log(error);
      }
    }

    prepare();
  }, [loaded]);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children }) {
  const fadeOut = useMemo(() => new Animated.Value(1), []);
  const moveX = useMemo(() => new Animated.Value(0));
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.parallel([
        Animated.timing(fadeOut, {
          delay: 300,
          toValue: 0,
          duration: 600,
          easing: Easing.exp,
          useNativeDriver: true,
        }),
        Animated.timing(moveX, {
          delay: 300,
          toValue: -Dimensions.get('window').width,
          duration: 900,
          easing: Easing.exp,
          useNativeDriver: true,
        }),
      ]).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      console.error('Error:', e);
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: colors.turquoise[200],
              transform: [
                {
                  translateX: moveX,
                },
              ],
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              marginBottom: 28,
              resizeMode: 'contain',
              opacity: fadeOut,
            }}
            source={require('../../assets/splash.png')}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
