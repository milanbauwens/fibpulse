import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';

import { useTranslations } from '../../../core/i18n/LocaleProvider';
import Input from '../Input/Input';
import Label from '../Label/Label';

const DateTimePicker = ({ initialDate, initialTime, onChange }) => {
  const { t, locale } = useTranslations();

  const [date, setDate] = useState(initialDate ? new Date(initialDate) : new Date());
  const [time, setTime] = useState(initialTime ? new Date(initialTime) : undefined);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleDateConfirm = (date) => {
    setDate(new Date(date));
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setTime(new Date(time));
    setTimePickerVisibility(false);
  };

  useEffect(() => {
    onChange(date);
  }, [date]);

  useEffect(() => {
    if (time && date) {
      date.setHours(time.getHours(), time.getMinutes());
      onChange(date.toISOString());
    }
  }, [time, date]);

  return (
    <View>
      <View className="mb-6">
        <Label title={t('input.date')} />
        <Input
          inputMode="none"
          value={
            date
              ? date.toLocaleDateString(locale, {
                  month: '2-digit',
                  year: 'numeric',
                  day: '2-digit',
                })
              : ''
          }
          icon="calendar-outline"
          showSoftInputOnFocus={false}
          onFocus={() => setDatePickerVisibility(true)}
        />
        <DateTimePickerModal
          date={date}
          isVisible={isDatePickerVisible}
          mode="date"
          locale={locale}
          onConfirm={handleDateConfirm}
          onCancel={() => setDatePickerVisibility(false)}
        />
      </View>

      <View>
        <Label title={t('input.time')} />
        <Input
          inputMode="none"
          value={
            time
              ? time.toLocaleTimeString(locale, {
                  hour: '2-digit',
                  minute: '2-digit',
                  hourCycle: 'h23',
                })
              : ''
          }
          icon="clock-outline"
          showSoftInputOnFocus={false}
          onPressIn={() => setTimePickerVisibility(true)}
          onFocus={() => setTimePickerVisibility(true)}
        />
        <DateTimePickerModal
          date={time}
          isVisible={isTimePickerVisible}
          mode="time"
          locale="en_GB"
          onConfirm={handleTimeConfirm}
          onCancel={() => setTimePickerVisibility(false)}
        />
      </View>
    </View>
  );
};

export default DateTimePicker;
