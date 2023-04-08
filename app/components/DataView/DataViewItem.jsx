import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Popover from "../Popover/Popover";
import { Picker } from "@react-native-picker/picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import PrimaryButton from "../Buttons/PrimaryButton";
import DateTimePicker from "@react-native-community/datetimepicker";

const DataViewItem = ({ data, options, label, method, column }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    column === "date_of_birth" ? new Date(data) : data
  );


  const handleDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    setSelectedValue(date);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation((value) => method(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(["medical_profile"]);
      setIsVisible(false);
    },
  });

  const formattedData =
    data && data.length > 16 ? `${data.toString().substring(0, 17)}...` : data;

  const formattedDateOfBirth = new Date(data).toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleUpdate = async () => {
    try {
      await mutation.mutateAsync(selectedValue);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        <View className="bg-white shadow-top-xl absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6 pb-12">
          <View className="flex flex-row justify-between items-center ">
            <Text
              style={{ fontFamily: "Bitter-semibold" }}
              className="text-deepMarine-800 text-xl"
            >
              {label}
            </Text>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              activeOpacity={0.8}
              className="w-8 h-8 flex items-center justify-center bg-deepMarine-100 rounded-full"
            >
              <MaterialCommunityIcons
                name="close"
                size={20}
                color={colors.deepMarine[500]}
              />
            </TouchableOpacity>
          </View>
          {options ? (
            <Picker
              selectionColor={colors.deepMarine[900]}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              {options.map(({ label, value }, index) => (
                <Picker.Item
                  color={colors.deepMarine[900]}
                  key={index}
                  label={label}
                  value={value}
                />
              ))}
            </Picker>
          ) : (
            <KeyboardAvoidingView className="mt-12">
              <DateTimePicker
                minimumDate={new Date(1900, 0, 1)}
                maximumDate={new Date()}
                value={selectedValue || new Date()}
                display="spinner"
                textColor={colors.deepMarine[700]}
                mode="date"
                onChange={handleDate}
              />
              {/* )} */}
            </KeyboardAvoidingView>
          )}

          <View className="mt-12">
            <PrimaryButton onPress={handleUpdate} label="Opslaan" />
          </View>
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
          {column === "date_of_birth" ? formattedDateOfBirth : formattedData}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DataViewItem;
