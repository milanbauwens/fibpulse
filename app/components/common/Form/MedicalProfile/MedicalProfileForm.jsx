import { useQuery } from '@tanstack/react-query';
import { View } from 'react-native';

import { getMedicalProfile } from '../../../../core/db/modules/medical_profiles/api';
import DataView from '../../../DataView/DataView';
import LoadingIndicator from '../../Loading/Loading';

const MedicalProfileForm = () => {
  const {
    data: medicalProfile,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['medical_profile'],
    queryFn: getMedicalProfile,
  });

  const formattedData = {
    Geslacht: medicalProfile?.data?.gender,
    Geboortedatum: medicalProfile?.data?.date_of_birth,
    'VKF frequentie': medicalProfile?.data?.vkf_frequency,
    Risicofactoren: medicalProfile?.data?.risk_factors.join(', '),
  };

  return (
    <View>
      {isLoading ? (
        <View className="h-full w-full flex items-center justify-center">
          <LoadingIndicator />
        </View>
      ) : (
        <DataView data={formattedData} />
      )}
    </View>
  );
};

export default MedicalProfileForm;
