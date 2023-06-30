import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { supabase } from '../../core/db/initSupabase';
import colors from '../../theme/colors';
import { Icon } from '../Icon/Icon';
import { useAuthContext } from '../auth/AuthProvider';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';
import Popover from '../common/Popover/Popover';
import { Paragraph, Title } from '../common/Typography';

// import DatePicker from "../Input/DatePicker";

const IntakeItem = ({ data }) => {
  const { width } = useWindowDimensions();
  const { user } = useAuthContext();

  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState();
  const [selectedEpisodeFrequency, setSelectedEpisodeFrequency] = useState();
  const [selectedEpisodeDuration, setSelectedEpisodeDuration] = useState();
  const [selectedHeartDisorder, setSelectedHeartDisorder] = useState();
  const [selectedRisks, setSelectedRisks] = useState([]);

  const [dateIsFocused, setDateIsFocused] = useState(false);

  // Date input states
  // const [dayAN, setDayAN] = useState();
  // const [monthAN, setMonthAN] = useState();
  // const [yearAN, setYearAN] = useState();

  // const handleDate = (event, date) => {
  //   const {
  //     type,
  //     nativeEvent: { timestamp },
  //   } = event;
  //   setDate(date);
  // };

  const handleFormSubmit = async () => {
    const { error } = await supabase.from('medical_profiles').upsert({
      user_id: user.id,
      date_of_birth: date,
      gender: selectedGender,
      episode_frequency: selectedEpisodeFrequency,
      episode_duration: selectedEpisodeDuration,
      heart_disorder: selectedHeartDisorder,
      risk_factors: selectedRisks,
      passed_intake: true,
    });
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [
    selectedRisks,
    selectedEpisodeFrequency,
    selectedEpisodeDuration,
    selectedHeartDisorder,
    selectedGender,
  ]);

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
                setSelectedRisks([...selectedRisks, option]);
              };

              const handleDeselect = () => {
                setSelectedRisks(selectedRisks.filter((risk) => risk !== option));
              };

              return (
                <TouchableOpacity
                  key={index}
                  onPress={selectedRisks.includes(option) ? handleDeselect : handleSelect}
                  activeOpacity={1}
                  className={`px-4 py-3 min-h-[62px] flex items-center justify-center w-fit rounded-lg ${
                    selectedRisks.includes(option) ? 'bg-deepMarine-500' : 'bg-deepMarine-100'
                  }`}
                >
                  <Text
                    style={{ fontFamily: 'Mulish-medium' }}
                    className={`text-base text-center ${
                      selectedRisks.includes(option) ? 'text-white' : 'text-deepMarine-900'
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
              const isSelected =
                selectedGender === option ||
                selectedEpisodeFrequency === option ||
                selectedEpisodeDuration === option ||
                selectedHeartDisorder === option;

              const handleSelect = () => {
                switch (data.question) {
                  case 'Wat is uw geslacht?':
                    setSelectedGender(option);
                    break;
                  case 'Welke hartritmestoornis werd bij u reeds vastgesteld?':
                    setSelectedHeartDisorder(option);
                    break;
                  case 'Hoe lang duren deze momenten gemiddeld?':
                    setSelectedEpisodeDuration(option);
                    break;
                  case 'Hoe vaak heeft u last van uw ritmestoornis?':
                    setSelectedEpisodeFrequency(option);
                    break;
                }
              };

              const handleDeselect = () => {
                switch (data.question) {
                  case 'Wat is uw geslacht?':
                    setSelectedGender('');
                    break;
                  case 'Welke hartritmestoornis werd bij u reeds vastgesteld?':
                    setSelectedHeartDisorder('');
                    break;
                  case 'Hoe lang duren deze momenten gemiddeld?':
                    setSelectedEpisodeDuration('');
                    break;
                  case 'Hoe vaak heeft u last van uw ritmestoornis?':
                    setSelectedEpisodeFrequency('');
                    break;
                }
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
          <Label title="Datum" />
          <Input
            inputMode="none"
            value="23"
            icon="calendar-outline"
            onPressIn={() => setDateIsFocused(true)}
            disabled
          />
          {dateIsFocused && (
            <Popover animationType="slide" isVisible={dateIsFocused}>
              <View className="bg-white border border-deepMarine-100 shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6 pb-24">
                <View className="flex flex-row justify-between items-center ">
                  <Text
                    style={{ fontFamily: 'Bitter-semibold' }}
                    className="text-deepMarine-800 text-xl"
                  >
                    Geboortedatum
                  </Text>
                  <TouchableOpacity
                    onPress={() => setDateIsFocused(false)}
                    activeOpacity={0.8}
                    className="w-8 h-8 flex items-center justify-center bg-deepMarine-200 rounded-full"
                  >
                    <Icon name="close" size={20} color={colors.deepMarine[700]} />
                  </TouchableOpacity>
                </View>
              </View>
            </Popover>
          )}
        </View>
      )}
    </View>
  );
};

export default IntakeItem;
