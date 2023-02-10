import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import slides from "../../content/walkthrough";
import IntakeItem from "../../components/Intake/IntakeItem";

const Intake = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <IntakeItem question={item} />}
      />
    </SafeAreaView>
  );
};

export default Intake;
