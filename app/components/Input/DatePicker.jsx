import { useState, useRef } from "react";
import { DateTimePicker } from "@react-native-community/datetimepicker";

import {
  View,
  Text,
  TextInput,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import colors from "../../theme/colors";

const DatePicker = ({ onChange, date }) => {
  // // Android date formatter
  const [dayAN, setDayAN] = useState();
  const [monthAN, setMonthAN] = useState();
  const [yearAN, setYearAN] = useState();

  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  return (
    <View>
      {/* {Platform.OS === "android" ? ( */}
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
          }}
          keyboardType="number-pad"
        />
      </View>
      {/* ) : ( */}
      {/* <DateTimePicker
        minimumDate={new Date(1900, 0, 1)}
        maximumDate={new Date()}
        value={date || new Date()}
        display="spinner"
        textColor={colors.deepMarine[700]}
        mode="date"
        onChange={onChange}
      /> */}
      {/* )} */}
    </View>
  );
};

export default DatePicker;
