import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Animated, Dimensions, Easing, StyleSheet, View } from "react-native";

export function SplashscreenLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false);
  const [fontsLoaded] = useFonts({
    //Mulish Fonts
    "Mulish-regular": require("../../../assets/fonts/Mulish-Regular.ttf"),
    "Mulish-medium": require("../../../assets/fonts/Mulish-Medium.ttf"),
    "Mulish-semibold": require("../../../assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-bold": require("../../../assets/fonts/Mulish-Bold.ttf"),
    // //Bitter Fonts
    "Bitter-regular": require("../../../assets/fonts/Bitter-Regular.ttf"),
    "Bitter-medium": require("../../../assets/fonts/Bitter-Medium.ttf"),
    "Bitter-semibold": require("../../../assets/fonts/Bitter-SemiBold.ttf"),
    "Bitter-bold": require("../../../assets/fonts/Bitter-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Asset.fromURI(image.uri).downloadAsync();

      } catch (e) {
        console.error("Error:", e);
      } finally {
        setSplashReady(true);
      }
    }

    prepare();
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return (
      <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, image }) {
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
          toValue: -Dimensions.get("window").width,
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
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
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
              backgroundColor: Constants.manifest.splash.backgroundColor,
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
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
              opacity: fadeOut,
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
