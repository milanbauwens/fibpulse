import { Animated, TouchableOpacity, View } from "react-native";

function TabBar({ state, descriptors, navigation, position }) {
  return (
    <View className="flex-row items-center justify-start w-full border-b border-gray-200 h-20 gap-4">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        });

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            className={`flex items-center justify-center h-16 px-4 ${
              isFocused ? "border-b-2 border-turquoise-500" : ""
            }`}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Animated.Text
              className="text-base text-deepMarine-900"
              style={{ opacity, fontFamily: "Bitter-semibold" }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
