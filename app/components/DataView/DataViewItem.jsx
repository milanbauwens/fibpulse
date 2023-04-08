import { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Popover from "../Popover/Popover";
import { Picker } from "@react-native-picker/picker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

const DataViewItem = ({ data, options, label, method, column }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data);
  const [dayAN, setDayAN] = useState();
  const [monthAN, setMonthAN] = useState();
  const [yearAN, setYearAN] = useState();

  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const queryClient = useQueryClient();
  const navigation = useNavigation();

  // const { mutate, isError, isLoading, error } = useMutation({
  //   mutationFn: method,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["medical_profile"]);
  //     setIsVisible(false);
  //   },
  //   onError: () => {
  //     console.log(error);
  //   },
  // });

  const mutation = useMutation((value) => method(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(["medical_profile"]);
      setIsVisible(false);
    },
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
        <View className="bg-white shadow-top-xl absolute bottom-0 w-full h-2/5 rounded-t-3xl px-4 py-6">
          <View className="flex flex-row justify-between items-center ">
            <Text
              style={{ fontFamily: "Bitter-semibold" }}
              className="text-deepMarine-800 text-xl"
            >
              {label}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              className="bg-deepMarine-500 rounded-full px-4 py-2"
            >
              <Text
                onPress={handleUpdate}
                className=" text-white text-base"
                style={{ fontFamily: "Mulish-semibold" }}
              >
                Opslaan
              </Text>
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            {options ? (
              options.map(({ label, value }) => (
                <Picker.Item key={value} label={label} value={value} />
              ))
            ) : (
              <View className="bg-deepMarine-100 flex flex-row w-2/3 mx-auto items-center">
                <TextInput
                  value={dayAN}
                  ref={dayRef}
                  className={`mx-auto w-16 p-4 text-2xl text-deepMarine-900 bg-deepMarine-100 rounded-lg`}
                  style={{ fontFamily: "Bitter-semibold" }}
                  secureTextEntry={false}
                  maxLength={2}
                  keyboardType="number-pad"
                  onChangeText={(text) => {
                    setDayAN(text);
                    if (text.length === 2) {
                      monthRef.current.focus();
                    }
                  }}
                />
                <Text
                  style={{ fontFamily: "Mulish-medium" }}
                  className="mx-4 text-[48px] text-deepMarine-300 "
                >
                  /
                </Text>
                <TextInput
                  value={monthAN}
                  ref={monthRef}
                  className={`mx-auto w-16 p-4 text-2xl text-deepMarine-900 bg-deepMarine-100 rounded-lg`}
                  style={{ fontFamily: "Bitter-semibold" }}
                  secureTextEntry={false}
                  maxLength={2}
                  onChangeText={(text) => {
                    setMonthAN(text);
                    if (text.length === 2) {
                      yearRef.current.focus();
                    }
                  }}
                  keyboardType="number-pad"
                />
                <Text
                  style={{ fontFamily: "Mulish-medium" }}
                  className="mx-4 text-[48px] text-deepMarine-300 "
                >
                  /
                </Text>
                <TextInput
                  value={yearAN}
                  ref={yearRef}
                  className={`mx-auto w-24 p-4 text-2xl text-deepMarine-900 bg-deepMarine-100 rounded-lg`}
                  style={{ fontFamily: "Bitter-semibold" }}
                  secureTextEntry={false}
                  maxLength={4}
                  onChangeText={(text) => {
                    setYearAN(text);
                    if (text.length === 4) {
                      Keyboard.dismiss();
                    }
                    setDate(new Date(dayAN, monthAN, yearAN));
                  }}
                  keyboardType="number-pad"
                />
              </View>
            )}
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
          {data && data.length > 16
            ? `${data.toString().substring(0, 17)}...`
            : data}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DataViewItem;
