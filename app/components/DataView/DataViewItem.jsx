import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from 'react-native-web';

import colors from '../../theme/colors';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import Popover from '../common/Popover/Popover';

const DataViewItem = ({ data, options, label, method, column, type, hasBorder = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    type === 'multi' ? [] : type === 'data' ? new Date() : ''
  );

  useEffect(() => {
    if (type === 'date' && isValidDate(data)) {
      setSelectedValue(new Date(data));
    } else if (type === 'multi') {
      setSelectedValue(data ? [...data] : []);
    } else {
      setSelectedValue(data);
    }
  }, [data]);

  function isValidDate(dateString) {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
  }

  // Update data
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => method(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries(['medical_profile']);
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

  // Date input states
  // const [dayAN, setDayAN] = useState();
  // const [monthAN, setMonthAN] = useState();
  // const [yearAN, setYearAN] = useState();

  // const handleDate = (event, date) => {
  //   const {
  //     type,
  //     nativeEvent: { timestamp },
  //   } = event;
  //   setSelectedValue(date);
  // };

  // Formatted data
  const formattedRisks =
    type === 'multi' && data && data.toString().length > 17
      ? `${data.join(',').toString().substring(0, 17)}...`
      : data;

  const formattedData =
    data && data.toString().length > 17 ? `${data.toString().substring(0, 17)}...` : data;

  const formattedDateOfBirth = new Date(data).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        <View className="bg-white shadow-top-lg absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6 pb-12">
          <View className="flex flex-row justify-between items-center ">
            <Text style={{ fontFamily: 'Bitter-semibold' }} className="text-deepMarine-800 text-xl">
              {label}
            </Text>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              activeOpacity={0.8}
              className="w-8 h-8 flex items-center justify-center bg-deepMarine-200 rounded-full"
            >
              <MaterialCommunityIcons name="close" size={20} color={colors.deepMarine[700]} />
            </TouchableOpacity>
          </View>
          {type === 'single' && (
            <Picker
              selectionColor={colors.deepMarine[900]}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
          )}
          {type === 'date' && (
            <KeyboardAvoidingView className="mt-12">
              {/* <DatePicker
                value={selectedValue}
                onChange={handleDate}
                onMonthChange={(text) => {
                  setMonthAN(text);
                  if (text.length === 2) {
                    monthRef.current.focus();
                  }
                }}
                onYearChange={(text) => {
                  setYearAN(text);
                  if (text.length === 4) {
                    monthRef.current.focus();
                  }
                  setSelectedValue(new Date(yearAN, monthAN, dayAN));
                }}
                onDayChange={(text) => {
                  setDayAN(text);
                  if (text.length === 2) {
                    monthRef.current.focus();
                  }
                }}
              /> */}
            </KeyboardAvoidingView>
          )}

          {type === 'multi' && (
            <View className="flex flex-row flex-wrap gap-4 mt-8">
              {options.map(({ label, value }, index) => {
                const handleSelect = () => {
                  setSelectedValue([...selectedValue, value]);
                };

                const handleDeselect = () => {
                  setSelectedValue(selectedValue.filter((risk) => risk !== value));
                };

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={selectedValue.includes(value) ? handleDeselect : handleSelect}
                    activeOpacity={1}
                    className={`px-4 py-3 min-h-[62px] flex items-center justify-center w-fit rounded-lg ${
                      selectedValue.includes(value) ? 'bg-deepMarine-500' : 'bg-deepMarine-100'
                    }`}
                  >
                    <Text
                      style={{ fontFamily: 'Mulish-medium' }}
                      className={`text-base text-center ${
                        selectedValue.includes(value) ? 'text-white' : 'text-deepMarine-900'
                      }`}
                    >
                      {label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
          <View className="mt-12">
            <PrimaryButton onPress={handleUpdate} label="Opslaan" />
          </View>
        </View>
      </Popover>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsVisible(true)}
        className={`${
          hasBorder && 'border-b border-deepMarine-200'
        } py-4 flex flex-row items-center justify-between`}
      >
        <Text className="text-deepMarine-400 text-base">
          {label && label.length > 15 ? `${label.substring(0, 15)}...` : label}
        </Text>
        <Text className="text-deepMarine-900 text-base">
          {type === 'multi' && formattedRisks}
          {type === 'date' && formattedDateOfBirth}
          {type === 'single' && formattedData}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DataViewItem;
