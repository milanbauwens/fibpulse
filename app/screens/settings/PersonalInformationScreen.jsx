import { useQuery } from '@tanstack/react-query';
import { LoadingIndicator } from 'app/components/common/Loading/Loading';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DataView from '../../components/DataView/DataView';
import Header from '../../components/common/Header/Header';
import { EPISODE_AMOUNTS, GENDERS, RISK_FACTORS } from '../../content/medicalProfile';
import {
  getMedicalProfile,
  updateMedicalProfile,
} from '../../core/db/modules/medical_profiles/api';

const PersonalInformationScreen = () => {
  const { data: medicalProfile, isLoading } = useQuery({
    queryKey: ['medical_profile'],
    queryFn: getMedicalProfile,
  });

  const formattedData = {
    Geslacht: {
      data: medicalProfile?.data?.gender,
      options: GENDERS,
      type: 'single',
      column: 'gender',
      method: updateMedicalProfile,
    },
    Geboortedatum: {
      data: medicalProfile?.data?.date_of_birth,
      column: 'date_of_birth',
      type: 'date',
      method: updateMedicalProfile,
    },
    'VKF frequentie': {
      data: medicalProfile?.data?.vkf_frequency,
      options: EPISODE_AMOUNTS,
      column: 'vkf_frequency',
      type: 'single',
      method: updateMedicalProfile,
    },
    Risicofactoren: {
      data: medicalProfile?.data?.risk_factors,
      options: RISK_FACTORS,
      column: 'risk_factors',
      type: 'multi',
      method: updateMedicalProfile,
    },
  };

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Header title="Persoonlijke gegevens" withPrevious />
      <View style={{ padding: 3 }} className="px-4">
        {isLoading ? (
          <View className="h-5/6 w-full flex items-center justify-center">
            <LoadingIndicator />
          </View>
        ) : (
          <DataView data={formattedData} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default PersonalInformationScreen;
