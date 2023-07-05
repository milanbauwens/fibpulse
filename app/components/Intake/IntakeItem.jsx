import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import { AGES } from '../../__content/ages';
import { supabase } from '../../core/db/initSupabase';
import colors from '../../theme/colors';
import { Icon } from '../Icon/Icon';
import { useAuthContext } from '../auth/AuthProvider';
import Input from '../common/Input/Input';
import Popover from '../common/Popover/Popover';
import { Paragraph, Title } from '../common/Typography';

const IntakeItem = ({ data }) => {
  const { width } = useWindowDimensions();
  const { user } = useAuthContext();

  const [selectedGender, setSelectedGender] = useState();
  const [age, setAge] = useState();
  const [selectedEpisodeFrequency, setSelectedEpisodeFrequency] = useState();
  const [selectedEpisodeDuration, setSelectedEpisodeDuration] = useState();
  const [selectedHeartDisorder, setSelectedHeartDisorder] = useState();
  const [selectedRisks, setSelectedRisks] = useState([]);

  const [ageIsFocused, setAgeIsFocused] = useState(false);

  const handleFormSubmit = async () => {
    const { error } = await supabase.from('medical_profiles').upsert({
      user_id: user.id,
      age,
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
          <Input
            inputMode="none"
            value={age ? `${age} jaar` : ''}
            icon="chevron-right"
            onPressIn={() => setAgeIsFocused(true)}
            disabled
          />
          {ageIsFocused && (
            <Popover animationType="slide" isVisible={ageIsFocused}>
              <View className="bg-white border border-deepMarine-100 shadow-top-md absolute bottom-0 w-full h-fit rounded-t-3xl px-4 py-6">
                <View className="flex flex-row justify-between items-center ">
                  <Text
                    style={{ fontFamily: 'Bitter-semibold' }}
                    className="text-deepMarine-800 text-xl"
                  >
                    Leeftijd
                  </Text>
                  <TouchableOpacity
                    onPress={() => setAgeIsFocused(false)}
                    activeOpacity={0.8}
                    className="w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <Icon name="close" size={24} color={colors.deepMarine[700]} />
                  </TouchableOpacity>
                </View>
                <Picker
                  selectionColor="rgba(22, 128, 135, 0.05)"
                  itemStyle={{ fontFamily: 'Mulish-medium' }}
                  selectedValue={age ? age : 40}
                  onValueChange={(itemValue) => setAge(itemValue)}
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
