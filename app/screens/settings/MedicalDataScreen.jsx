import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import {
  EPISODE_AMOUNTS,
  EPISODE_DURATIONS,
  GENDERS,
  HEART_DISORDERS,
  RISK_FACTORS,
} from '../../__content/medicalProfile.js';
import DataView from '../../components/DataView/DataView';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import FeedbackMessage from '../../components/common/FeedbackMessage/FeedbackMessage.jsx';
import LoadingIndicator from '../../components/common/Loading/Loading';
import IntakeIllustration from '../../components/svg/IntakeIllustration';
import {
  getMedicalProfile,
  updateMedicalProfile,
} from '../../core/db/modules/medical_profiles/api';
import { useTranslations } from '../../core/i18n/LocaleProvider.jsx';

const MedicalDataScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslations();

  const [errorVisible, setErrorVisible] = useState(!!error);

  const {
    data: medicalProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['medical_profile'],
    queryFn: getMedicalProfile,
  });

  const formattedData = {
    gender: {
      data: medicalProfile?.data?.gender,
      options: GENDERS,
      type: 'single',
      column: 'gender',
      tag: 'gender',
      method: updateMedicalProfile,
    },
    birthYear: {
      data: medicalProfile?.data?.year_of_birth,
      column: 'year_of_birth',
      type: 'date',
      tag: 'birthYear',
      method: updateMedicalProfile,
    },
    heartdisease: {
      data: medicalProfile?.data?.heart_disorder,
      options: HEART_DISORDERS,
      column: 'heart_disorder',
      type: 'single',
      tag: 'heartDisease',
      method: updateMedicalProfile,
    },
    ...(medicalProfile?.data?.heart_disorder !== 'none' && {
      episodeFrequency: {
        data: medicalProfile?.data?.episode_frequency,
        options: EPISODE_AMOUNTS,
        column: 'episode_frequency',
        type: 'single',
        tag: 'frequency',
        method: updateMedicalProfile,
      },
      episodeDuration: {
        data: medicalProfile?.data?.episode_duration,
        options: EPISODE_DURATIONS,
        column: 'episode_duration',
        type: 'single',
        tag: 'duration',
        method: updateMedicalProfile,
      },
    }),
    riskfactors: {
      data: medicalProfile?.data?.risk_factors,
      options: RISK_FACTORS,
      column: 'risk_factors',
      type: 'multi',
      tag: 'riskfactors',
      method: updateMedicalProfile,
    },
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        scrollEventThrottle={16}
        className="bg-white h-full w-full pt-4"
      >
        <View className="px-4 bg-white h-full">
          {isLoading ? (
            <View className="h-5/6 w-full flex items-center justify-center">
              <LoadingIndicator />
            </View>
          ) : (
            <>
              {medicalProfile.data.passed_intake ? (
                <DataView data={formattedData} />
              ) : (
                <EmptyState
                  illustration={<IntakeIllustration />}
                  title={t('medicalProfile.emptyState.title')}
                  description={t('medicalProfile.emptyState.description')}
                  cta={t('medicalProfile.emptyState.cta')}
                  onPress={() => navigation.navigate('MedicalIntakeStart', { fromSettings: true })}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>
      <FeedbackMessage
        isVisible={errorVisible}
        icon="alert-triangle"
        type="error"
        endY={-50}
        content={t('error.generic')}
        onHide={() => setErrorVisible(false)}
      />
    </>
  );
};

export default MedicalDataScreen;
