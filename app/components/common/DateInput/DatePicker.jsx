// import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from 'react-native';

import DateInput from './DateInput';

const DatePicker = ({
  onChange, // ios
  value, // ios
  onDayChange, // android
  onMonthChange, // android
  onYearChange, // android
}) => {
  return (
    <View>
      {/* {Platform.OS === "android" ? ( */}
      <DateInput
        onDayChange={onDayChange}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
    </View>
  );
};

export default DatePicker;

//<DateTimePicker
//   minimumDate={new Date(1900, 0, 1)}
//   maximumDate={new Date()}
//   value={value}
//   display="spinner"
//   textColor={colors.deepMarine[700]}
//   mode="date"
//   onChange={onChange}
// />
// )}
