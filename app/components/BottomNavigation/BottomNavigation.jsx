import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Icons
import Home from "../svg/icons/Home";
import Heart from "../svg/icons/Heart";
import Health from "../svg/icons/Health";
import Pill from "../svg/icons/Pill";
import colors from "../../theme/colors";

const NAVIGATION_ITEMS = [
  {
    title: "Overzicht",
    icon: Home,
    screen: "Dashboard",
  },
  {
    title: "Episodes",
    icon: Heart,
    screen: "Episodes",
  },
  {
    title: "Levensstijl",
    icon: Health,
    screen: "Lifestyle",
  },
  {
    title: "Medicatie",
    icon: Pill,
    screen: "Medication",
  },
];

const BottomNavigation = () => {
  const navigation = useNavigation();
  const currentRoute = useRoute();

  return (
    <View className="pt-2 bg-white bottom-0 absolute left-[-50%] right-[-50%] h-[90px] justify-center items-start flex flex-row gap-x-9 z-50 shadow-top-xl">
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
              currentRoute.name === item.screen
                ? colors.deepMarine[700]
                : colors.deepMarine[300]
            }
          />
          <Text
            style={{ fontFamily: "Mulish-regular" }}
            className={`text-xs ${
              currentRoute.name === item.screen
                ? "text-deepMarine-700"
                : "text-deepMarine-300"
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
