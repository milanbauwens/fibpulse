import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTranslations } from '../../../core/i18n/LocaleProvider';

const MultiSelect = ({ data, initialData, translationKey, onChange }) => {
  const { t } = useTranslations();

  const [selected, setSelected] = useState(initialData ? initialData : []);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <View className="flex flex-row flex-wrap gap-4">
      {data.map((option, index) => {
        const handleSelect = () => {
          setSelected([...selected, option]);
        };

        const handleDeselect = () => {
          setSelected(selected.filter((risk) => risk !== option));
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={selected.includes(option) ? handleDeselect : handleSelect}
            activeOpacity={1}
            className={`px-4 py-3 flex items-center justify-center w-fit rounded-lg ${
              selected.includes(option) ? 'bg-deepMarine-500' : 'bg-deepMarine-100'
            }`}
          >
            <Text
              style={{ fontFamily: 'Mulish-medium' }}
              className={`text-base text-center ${
                selected.includes(option) ? 'text-white' : 'text-deepMarine-900'
              }`}
            >
              {t(`${translationKey}${option}`)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MultiSelect;
