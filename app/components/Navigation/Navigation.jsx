import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Icons
import Home from "../icons/Home";
import Heart from "../icons/Heart";
import Pill from "../icons/Pill";
import Health from "../icons/Health";

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

const Navigation = () => {
  const navigation = useNavigation();
  const currentRoute = useRoute();

  return (
    <View className="bottom-0 absolute left-[-50%] right-[-50%] h-[90px] justify-center items-start flex flex-row gap-x-9 z-50">
      {NAVIGATION_ITEMS.map((item) => (
        <TouchableOpacity
          className="flex flex-col items-center justify-center"
          onPress={() => {
            navigation.navigate(item.screen);
          }}
          key={item.title}
        >
          <item.icon
            color={currentRoute.name === item.screen ? "#252525" : "#809393"}
          />
          <Text
            style={{ fontFamily: "Mulish-regular" }}
            className={`text-xs ${
              currentRoute.name === item.screen
                ? "text-neutral-900"
                : "text-[#809393]"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navigation;
