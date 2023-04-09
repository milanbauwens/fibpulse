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
        onChangeText={onDayChange}
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
        onChangeText={onMonthChange}
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
        onChangeText={onYearChange}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default DateInput;
