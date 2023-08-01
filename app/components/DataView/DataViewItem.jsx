import { Picker } from '@react-native-picker/picker';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { YEARS } from '../../__content/ages';
import Label from '../../components/common/Label/Label';
import { useTranslations } from '../../core/i18n/LocaleProvider';
import colors from '../../theme/colors';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import { Icon } from '../common/Icon/Icon';
import MultiSelect from '../common/MultiSelect/MultiSelect';
import Popover from '../common/Popover/Popover';
import { Title } from '../common/Typography';

const DataViewItem = ({ data, options, label, method, tag, column, type, hasBorder = true }) => {
  const { t } = useTranslations();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(type === 'multi' ? [] : '');
  const [localizedArray, setLocalizedArray] = useState([]);

  const pickerRef = useRef();

  useEffect(() => {
    // Localize data in Array
    if (type === 'multi') {
      const localizedData = data && data.map((item) => t(`medicalProfile.${tag}.options.${item}`));
      setLocalizedArray(localizedData);
    }
  }, [data]);

  useEffect(() => {
    if (type === 'multi') {
      setSelectedValue(data ? [...data] : []);
    } else {
      setSelectedValue(data);
    }
  }, [data]);

  // Update data
  const queryClient = useQueryClient();
  const mutation = useMutation((value) => method(column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries('medical_profile');
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

  const showData = () => {
    if (data) {
      if (type === 'multi') {
        return localizedArray.join(', ');
      } else if (type === 'date') {
        return data;
      } else {
        return t(`medicalProfile.${tag}.options.${selectedValue}`);
      }
    }
  };

  return (
    <>
      <Popover animationType="slide" isVisible={isVisible}>
        <View className="bg-white shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6 pb-12">
          <View className="flex flex-row justify-between items-center ">
            <Title size="medium">{t(`input.${label}`)}</Title>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              activeOpacity={0.8}
              className="w-8 h-8 flex items-center justify-center rounded-full"
            >
              <Icon name="close" size={24} color={colors.turquoise[700]} />
            </TouchableOpacity>
          </View>

          {type === 'single' && (
            <TouchableOpacity activeOpacity={0.8} onPress={() => pickerRef.current.focus()}>
              <Picker
                style={Platform.OS === 'ios' ? styles.iosStyles : styles.androidStyles}
                ref={pickerRef}
                onBlur={() => pickerRef.current.blur()}
                selectionColor="rgba(22, 128, 135, 0.05)"
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                {options.map(({ label, value }, index) => (
                  <Picker.Item
                    color={colors.deepMarine[900]}
                    key={index}
                    label={t(`medicalProfile.${tag}.options.${label}`)}
                    value={value}
                  />
                ))}
              </Picker>
            </TouchableOpacity>
          )}
          {type === 'date' && (
            <TouchableOpacity activeOpacity={0.8} onPress={() => pickerRef.current.focus()}>
              <Picker
                ref={pickerRef}
                style={Platform.OS === 'ios' ? styles.iosStyles : styles.androidStyles}
                selectionColor="rgba(22, 128, 135, 0.05)"
                itemStyle={{ fontFamily: 'Mulish-medium' }}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                {YEARS.map(({ label, value }) => (
                  <Picker.Item
                    color={colors.deepMarine[900]}
                    key={value}
                    label={label}
                    value={value}
                  />
                ))}
              </Picker>
            </TouchableOpacity>
          )}

          {type === 'multi' && (
            <View className=" mt-8">
              <MultiSelect
                data={options}
                initialData={selectedValue}
                translationKey={`medicalProfile.${tag}.options.`}
                onChange={(value) => setSelectedValue(value)}
              />
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
        className={`${hasBorder && 'border-b border-deepMarine-200'} py-4`}
      >
        <Label title={t(`input.${label}`)} />
        <View className="flex flex-row justify-between">
          <Text className="text-deepMarine-900 text-base max-w-[65vw]">{showData()}</Text>
          <Icon name="chevron-right" size={20} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  androidStyles: {
    marginTop: 32,
    width: '100%',
    backgroundColor: colors.deepMarine[100],
    color: colors.turquoise[700],
    fontFamily: 'Mulish-medium',
    borderRadius: 8,
  },
  iosStyles: {
    fontFamily: 'Mulish-medium',
  },
});

export default DataViewItem;
