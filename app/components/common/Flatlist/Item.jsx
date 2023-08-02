import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { YEARS } from '../../../__content/ages';
import { useTranslations } from '../../../core/i18n/LocaleProvider';
import colors from '../../../theme/colors';
import {
  SpotOther,
  SpotSitting,
  SpotSleeping,
  SpotSports,
  SpotStanding,
  SpotWalking,
} from '../../svg/spotIllustrations';
import { PrimaryButton } from '../Buttons';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import { Icon } from '../Icon/Icon';
import Input from '../Input/Input';
import Label from '../Label/Label';
import MultiSelect from '../MultiSelect/MultiSelect';
import Popover from '../Popover/Popover';
import { Paragraph, Title } from '../Typography';

const Item = ({ type, data, onSelect }) => {
  const { width } = useWindowDimensions();
  const { t } = useTranslations();
  const { bottom } = useSafeAreaInsets();

  const [selected, setSelected] = useState(data.type === 'multiselect' ? [] : '');

  const [isVisible, setIsVisible] = useState(false);

  const [seconds, setSeconds] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  // stopwatch function based on chat-gpt input
  useEffect(() => {
    let interval;

    if (data.type === 'measurement') {
      if (timerActive) {
        interval = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
              clearInterval(interval);
              setTimerActive(false);
              return 0;
            } else {
              return prevSeconds - 1;
            }
          });
        }, 1000);
      } else if (seconds !== 60) {
        clearInterval(interval);
      }
    }

    return () => {
      clearInterval(interval);
      if (seconds === 0) {
        setTimerActive(false);
      }
    };
  }, [timerActive, seconds]);

  const handleTimerStartPause = () => {
    setTimerActive((prevTimerActive) => !prevTimerActive);
  };

  const handleTimerReset = () => {
    setTimerActive(false);
    setSeconds(60);
  };

  useEffect(() => {
    onSelect(selected);
  }, [selected]);

  return (
    <View style={{ width }} className="h-full bg-white mt-8">
      <View className="px-5">
        <Title size="large">{t(`${type}.${data.question}.question`)}</Title>
        {data.description && <Paragraph>{t(`${type}.${data.question}.description`)}</Paragraph>}
      </View>

      {(data.type === 'select' || data.type === 'spot-select') && (
        <View className="mt-8">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250, paddingHorizontal: 20 }}
            className="w-full flex h-full flex-col"
          >
            {data.options.map((option, index) => {
              const isSelected = selected === option;

              const handleSelect = () => {
                setSelected(option);
              };

              const handleDeselect = () => {
                setSelected();
              };

              // Determine the spot illustration
              let spotIllustration;
              switch (option) {
                case 'sleeping':
                  spotIllustration = <SpotSleeping />;
                  break;
                case 'sitting':
                  spotIllustration = <SpotSitting />;
                  break;
                case 'standing':
                  spotIllustration = <SpotStanding />;
                  break;
                case 'other':
                  spotIllustration = <SpotOther />;
                  break;
                case 'walking':
                  spotIllustration = <SpotWalking />;
                  break;
                case 'sports':
                  spotIllustration = <SpotSports />;
                  break;
              }

              return (
                <TouchableOpacity
                  key={index}
                  onPress={isSelected ? handleDeselect : handleSelect}
                  activeOpacity={1}
                  className={`px-4 py-3 w-fit rounded-lg border border-deepMarine-100 flex shadow-card-md flex-row items-center justify-between mb-4 ${
                    data.type === 'spot-select' ? 'bg-white' : 'bg-deepMarine-100'
                  } `}
                >
                  <View className="flex flex-row items-center">
                    {data.type === 'spot-select' && (
                      <View className="mr-4">{spotIllustration}</View>
                    )}
                    <Text
                      style={{ fontFamily: 'Mulish-medium' }}
                      className="text-base text-turquoise-900"
                    >
                      {t(`${type}.${data.question}.options.${option}`)}
                    </Text>
                  </View>

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
          </ScrollView>
        </View>
      )}

      <View className="px-5">
        <View className="mt-8">
          {data.type === 'multiselect' && (
            <MultiSelect
              data={data.options}
              onChange={(values) => setSelected(values)}
              translationKey={data.translationKey}
            />
          )}

          {data.type === 'measurement' && (
            <View className="w-full flex flex-row items-center justify-around">
              <TouchableOpacity activeOpacity={0.8} onPress={handleTimerStartPause}>
                <Icon
                  name={timerActive ? 'pause' : 'play-outline'}
                  size={24}
                  color={colors.turquoise[700]}
                />
              </TouchableOpacity>
              <View className="flex flex-row items-center">
                <View className="p-3 bg-ochre-300 rounded-lg">
                  <Title size="large">{Math.floor(seconds / 10)}</Title>
                </View>
                <View className="p-3 bg-ochre-300 rounded-lg ml-2">
                  <Title size="large">{seconds % 10}</Title>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={handleTimerReset}>
                <Icon name="loop" size={24} color={colors.turquoise[700]} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {data.type === 'picker' && (
          <View>
            <Label title={t(`${type}.${data.question}.label`)} />
            <Input
              inputMode="none"
              value={selected ? `${selected}` : ''}
              icon="chevron-right"
              onPressIn={() => setIsVisible(true)}
              disabled
            />

            <Popover animationType="slide" isVisible={isVisible}>
              <View className="bg-white border border-deepMarine-100 shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6">
                <View className="flex flex-row justify-between items-center ">
                  <Text
                    style={{ fontFamily: 'Bitter-semibold' }}
                    className="text-deepMarine-800 text-xl"
                  >
                    {t(`${type}.${data.question}.label`)}
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
                  {YEARS.map(({ label, value }) => (
                    <Picker.Item
                      color={colors.deepMarine[900]}
                      key={value}
                      label={label}
                      value={value}
                    />
                  ))}
                </Picker>
                <View style={{ paddingBottom: bottom + 8 }} className="mt-8 pb-[-24]">
                  <PrimaryButton onPress={() => setIsVisible(false)} label={t('actions.save')} />
                </View>
              </View>
            </Popover>
          </View>
        )}

        {data.type === 'datetime' && (
          <DateTimePicker
            initialDate={new Date()}
            onChange={(dateTime) => {
              setSelected(dateTime);
            }}
          />
        )}

        {data.type === 'textarea' && (
          <View>
            <Label title={data.label} />
            <Input
              returnKeyType="done"
              onChangeText={(text) => setSelected(text)}
              placeholder={t('input.textarea.placeholder')}
              onSubmitEditing={() => Keyboard.dismiss()}
              variant="textarea"
              inputMode="text"
            />
          </View>
        )}

        {data.type === 'number' && (
          <View>
            <Label title={t(`${type}.${data.question}.label`)} />
            <Input
              onChangeText={(text) => setSelected(text)}
              inputMode="numeric"
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Item;
