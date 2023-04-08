import { useRef } from "react";

const DateInput = ({ onDayChange, onMonthChange, onYearChange }) => {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  return (
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
  );
};

export default DateInput;
