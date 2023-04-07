import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Popover from "../Popover/Popover";
import { Picker } from "@react-native-picker/picker";
import colors from "../../theme/colors";

const DataViewItem = ({ item, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(item);

  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        <View className="bg-white shadow-top-xl absolute bottom-0 w-full h-1/3 rounded-t-3xl px-4 py-6">
          <View className="flex flex-row justify-between items-center ">
            <Text
              style={{ fontFamily: "Bitter-semibold" }}
              className="text-deepMarine-800 text-xl"
            >
              {label}
            </Text>
            <TouchableOpacity className="bg-deepMarine-500 rounded-full px-4 py-2">
              <Text
                onPress={() => setIsVisible(false)}
                className=" text-white text-base"
                style={{ fontFamily: "Mulish-semibold" }}
              >
                Gereed
              </Text>
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Man" value="Man" />
            <Picker.Item label="Vrouw" value="Vrouw" />
            <Picker.Item
              label="Zeg ik liever niet"
              value="Zeg ik liever niet"
            />
          </Picker>
        </View>
      </Popover>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsVisible(true)}
        className="border-b border-deepMarine-300 py-4 flex flex-row items-center justify-between"
      >
        <Text className="text-deepMarine-400 text-base">
          {label && label.length > 15 ? `${label.substring(0, 15)}...` : label}
        </Text>
        <Text className="text-deepMarine-900 text-base">
          {item && item.length > 16
            ? `${item.toString().substring(0, 17)}...`
            : item}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DataViewItem;
