import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '../../../components/common/Buttons';
import DateTimePicker from '../../../components/common/DateTimePicker/DateTimePicker';
import FeedbackMessage from '../../../components/common/FeedbackMessage/FeedbackMessage';
import Input from '../../../components/common/Input/Input';
import Label from '../../../components/common/Label/Label';
import MultiSelect from '../../../components/common/MultiSelect/MultiSelect';
import { Paragraph, Title } from '../../../components/common/Typography';
import { getEpisodeById, updateEpisode } from '../../../core/db/modules/episodes/api';
import { useTranslations } from '../../../core/i18n/LocaleProvider';

const activityOptions = ['sleeping', 'sitting', 'walking', 'standing', 'sports', 'other'];
const symptomsOptions = [
  'none',
  'chestPain',
  'lightHeaded',
  'breathing',
  'faint',
  'dizzy',
  'fatigued',
  'confused',
  'other',
];

const Question = ({ number, title, description }) => (
  <>
    {description ? (
      <View className="flex flex-row items-center mb-3">
        <View className="w-8 h-8 flex mr-3 items-center justify-center bg-turquoise-200 rounded-full">
          <Paragraph textColor="text-deepMarine-500" isStrong>
            {number}
          </Paragraph>
        </View>
        <Text style={{ fontFamily: 'Mulish-medium' }} className="text-sm text-turquoise-700">
          {description}
        </Text>
      </View>
    ) : (
      <View className="w-8 h-8 flex items-center justify-center bg-turquoise-200 rounded-full mb-3">
        <Paragraph textColor="text-deepMarine-500" isStrong>
          {number}
        </Paragraph>
      </View>
    )}

    <View className="mb-4">
      <Title size="medium">{title}</Title>
    </View>
  </>
);

const Edit = ({ route }) => {
  const { episodeId } = route.params;

  const { t } = useTranslations();
  const { bottom } = useSafeAreaInsets();

  // Fetch data of the episode
  const { data: episode, isLoading } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: ({ queryKey }) => getEpisodeById(queryKey[1]),
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [startDate, setStartDate] = useState(!isLoading ? episode.data.start_date : new Date());
  const [endDate, setEndDate] = useState(!isLoading ? episode.data.end_date : new Date());
  const [pulse, setPulse] = useState(!isLoading ? episode.data.pulse.toString() : 0);
  const [activity, setActivity] = useState(!isLoading ? episode.data.activity : '');
  const [symptoms, setSymptoms] = useState(!isLoading ? episode.data.symptoms : '');
  const [notes, setNotes] = useState(!isLoading ? episode.data.notes : '');

  // Update data
  const queryClient = useQueryClient();
  const mutation = useMutation(({ column, value }) => updateEpisode(episodeId, column, value), {
    onSuccess: () => {
      queryClient.invalidateQueries('episode', 'episodes');
      setHasError(false);
    },
  });

  const handleSubmit = async () => {
    await mutation.mutateAsync({ column: 'start_date', value: startDate });
    await mutation.mutateAsync({ column: 'end_date', value: endDate });
    await mutation.mutateAsync({ column: 'pulse', value: Number(pulse) });
    await mutation.mutateAsync({ column: 'activity', value: activity });
    await mutation.mutateAsync({ column: 'symptoms', value: symptoms });
    await mutation.mutateAsync({ column: 'notes', value: notes });

    if (!hasError) setIsVisible(true);
  };

  return (
    <>
      {!isLoading && (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 164 }}
          style={{ paddingTop: 16 }}
          className="w-full h-screen bg-white px-5"
          overScrollMode="never"
        >
          <View className="mb-11">
            <Question number={1} title={t('episodes.intake.pulse.question')} />
            <Label title={t('episodes.intake.pulse.label')} />
            <Input
              inputMode="numeric"
              value={pulse}
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              onChangeText={(value) => setPulse(value)}
            />
          </View>
          <View className="mb-11">
            <Question number={2} title={t('episodes.intake.start.question')} />
            <DateTimePicker
              initialDate={startDate}
              initialTime={startDate}
              onChange={(dateTime) => setStartDate(dateTime)}
            />
          </View>
          <View className="mb-11">
            <Question number={3} title={t('episodes.intake.end.question')} />
            <DateTimePicker
              initialDate={endDate}
              initialTime={endDate}
              onChange={(dateTime) => setEndDate(dateTime)}
            />
          </View>
          <View className="mb-11">
            <Question number={5} title={t('episodes.intake.activity.question')} />
            <View className="flex flex-row flex-wrap gap-4">
              {activityOptions.map((option, index) => {
                const isSelected = activity === option;

                const handleSelect = () => {
                  setActivity(option);
                };

                const handleDeselect = () => {
                  setActivity('');
                };

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={isSelected ? handleDeselect : handleSelect}
                    activeOpacity={1}
                    className={`px-4 py-3 flex items-center justify-center w-fit rounded-lg ${
                      isSelected ? 'bg-deepMarine-500' : 'bg-deepMarine-100'
                    }`}
                  >
                    <Text
                      style={{ fontFamily: 'Mulish-medium' }}
                      className={`text-base text-center ${
                        isSelected ? 'text-white' : 'text-deepMarine-900'
                      }`}
                    >
                      {t(`episodes.intake.activity.options.${option}`)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View className="mb-11">
            <Question
              number={4}
              title={t('episodes.intake.symptoms.question')}
              description={t('episodes.intake.symptoms.description')}
            />
            <MultiSelect
              data={symptomsOptions}
              initialData={symptoms}
              onChange={(values) => setSymptoms(values)}
              translationKey="episodes.intake.symptoms.options."
            />
          </View>
          <View>
            <Question
              number={6}
              title={t('episodes.intake.notes.question')}
              description={t('episodes.intake.notes.description')}
            />
            <Input
              placeholder={t('input.textarea.placeholder')}
              variant="textarea"
              inputMode="text"
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              value={notes}
              onChangeText={(value) => setNotes(value)}
            />
          </View>
        </KeyboardAwareScrollView>
      )}

      <FeedbackMessage
        isVisible={isVisible}
        icon="check"
        content="Wijzigingen succesvol opgeslagen"
        onHide={() => setIsVisible(false)}
      />

      <View className="w-full h-32 bg-white absolute bottom-0 shadow-top-md ">
        <View
          style={{ bottom: bottom + 32 }}
          className=" px-5 absolute w-full left-0 right-0 m-auto flex-col justify-center"
        >
          <PrimaryButton label="Wijzigingen opslaan" onPress={handleSubmit} />
        </View>
      </View>
    </>
  );
};

export default Edit;
