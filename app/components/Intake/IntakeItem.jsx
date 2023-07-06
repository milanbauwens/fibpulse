import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { AGES } from '../../__content/ages';
import colors from '../../theme/colors';
import { Icon } from '../common/Icon/Icon';
import Input from '../common/Input/Input';
import Popover from '../common/Popover/Popover';
import { Paragraph, Title } from '../common/Typography';

const IntakeItem = ({ data, onSelect }) => {
  const { width } = useWindowDimensions();

  const [selected, setSelected] = useState(data.type === 'multiselect' ? [] : '');

  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ width }} className="h-full bg-white mt-8 px-5">
      <View>
        <Title size="large">{data.question}</Title>
        {data.type === 'multiselect' && <Paragraph>U kan meerdere factoren selecteren.</Paragraph>}
      </View>
      <View className="mt-8">
        {data.type === 'multiselect' && (
          <View className="flex flex-row flex-wrap gap-4">
            {data.options.map((option, index) => {
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
                  className={`px-4 py-3 min-h-[62px] flex items-center justify-center w-fit rounded-lg ${
                    selected.includes(option) ? 'bg-deepMarine-500' : 'bg-deepMarine-100'
                  }`}
                >
                  <Text
                    style={{ fontFamily: 'Mulish-medium' }}
                    className={`text-base text-center ${
                      selected.includes(option) ? 'text-white' : 'text-deepMarine-900'
                    }`}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {data.type === 'select' && (
          <View className="flex flex-col gap-4">
            {data.options.map((option, index) => {
              const isSelected = selected === option;

              const handleSelect = () => {
                setSelected(option);
              };

              const handleDeselect = () => {
                setSelected('');
              };

              return (
                <TouchableOpacity
                  key={index}
                  onPress={isSelected ? handleDeselect : handleSelect}
                  activeOpacity={1}
                  className="px-4 py-3 min-h-[62px] w-fit rounded-lg flex flex-row items-center justify-between bg-deepMarine-100"
                >
                  <Text
                    style={{ fontFamily: 'Mulish-medium' }}
                    className="text-base text-turquoise-900"
                  >
                    {option}
                  </Text>

                  {isSelected ? (
                    <View className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-deepMarine-500">
                      <View className="w-4 h-4 rounded-full bg-deepMarine-500" />
                    </View>
                  ) : (
                    <View className="w-8 h-8 rounded-full bg-white border border-turquoise-200" />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
      {data.type === 'date' && (
        <View>
          <Input
            inputMode="none"
            value={selected ? `${selected} jaar` : ''}
            icon="chevron-right"
            onPressIn={() => setIsVisible(true)}
            disabled
          />
          {isVisible && (
            <Popover animationType="slide" isVisible={isVisible}>
              <View className="bg-white border border-deepMarine-100 shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6">
                <View className="flex flex-row justify-between items-center ">
                  <Text
                    style={{ fontFamily: 'Bitter-semibold' }}
                    className="text-deepMarine-800 text-xl"
                  >
                    Leeftijd
                  </Text>
                  <TouchableOpacity
                    onPress={() => setIsVisible(false)}
                    activeOpacity={0.8}
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <Icon name="close" size={24} color={colors.deepMarine[700]} />
                  </TouchableOpacity>
                </View>
                <Picker
                  selectionColor="rgba(22, 128, 135, 0.05)"
                  itemStyle={{ fontFamily: 'Mulish-medium' }}
                  selectedValue={selected ? selected : 40}
                  onValueChange={(itemValue) => setSelected(itemValue)}
                >
                  {AGES.map(({ label, value }) => (
                    <Picker.Item
                      color={colors.deepMarine[900]}
                      key={value}
                      label={label}
                      value={value}
                    />
                  ))}
                </Picker>
              </View>
            </Popover>
          )}
        </View>
      )}
    </View>
  );
};

export default IntakeItem;
