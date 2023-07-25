import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';

import {
  EPISODE_AMOUNTS,
  EPISODE_DURATIONS,
  GENDERS,
  HEART_DISORDERS,
  RISK_FACTORS,
} from '../../__content/medicalProfile.js';
import DataView from '../../components/DataView/DataView';
import EmptyState from '../../components/common/EmptyState/EmptyState';
import LoadingIndicator from '../../components/common/Loading/Loading';
import IntakeIllustration from '../../components/svg/IntakeIllustration';
import {
  getMedicalProfile,
  updateMedicalProfile,
} from '../../core/db/modules/medical_profiles/api';

const MedicalDataScreen = () => {
  const navigation = useNavigation();

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
    age: {
      data: medicalProfile?.data?.age,
      column: 'age',
      type: 'date',
      tag: 'age',
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
    <View className="bg-white h-full w-full pt-4">
      <View className="px-4 bg-white h-full">
        {isLoading ? (
          <View className="h-5/6 w-full flex items-center justify-center">
            <LoadingIndicator />
          </View>
        ) : (
          <>
            {!error ? (
              <DataView data={formattedData} />
            ) : (
              <EmptyState
                illustration={<IntakeIllustration />}
                title="Nog geen Medische gegevens"
                description="Om uw profiel te vervolledigen, willen we nog graag enkele zaken over u weten. "
                cta="voltooi uw medisch profiel"
                onPress={() => navigation.navigate('MedicalIntakeStart')}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default MedicalDataScreen;
