import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import {
  getMedicalProfile,
  updateMedicalProfile,
} from "../../core/db/modules/medical_profiles/api";
import LoadingIndicator from "../../components/common/Loading/Loading";
import DataView from "../../components/DataView/DataView";
import {
  EPISODE_AMOUNTS,
  GENDERS,
  RISK_FACTORS,
  HEART_DISORDERS,
  EPISODE_DURATIONS,
} from "../../__content/medicalProfile";

const MedicalDataScreen = () => {
  const {
    data: medicalProfile,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["medical_profile"],
    queryFn: getMedicalProfile,
  });

  const formattedData = {
    Geslacht: {
      data: medicalProfile?.data?.gender,
      options: GENDERS,
      type: "single",
      column: "gender",
      method: updateMedicalProfile,
    },
    Geboortedatum: {
      data: medicalProfile?.data?.date_of_birth,
      column: "date_of_birth",
      type: "date",
      method: updateMedicalProfile,
    },
    Ritmestoornis: {
      data: medicalProfile?.data?.heart_disorder,
      options: HEART_DISORDERS,
      column: "heart_disorder",
      type: "single",
      method: updateMedicalProfile,
    },
    "Episode frequentie": {
      data: medicalProfile?.data?.episode_frequency,
      options: EPISODE_AMOUNTS,
      column: "episode_frequency",
      type: "single",
      method: updateMedicalProfile,
    },
    "Episode duur": {
      data: medicalProfile?.data?.episode_duration,
      options: EPISODE_DURATIONS,
      column: "episode_duration",
      type: "single",
      method: updateMedicalProfile,
    },
    Risicofactoren: {
      data: medicalProfile?.data?.risk_factors,
      options: RISK_FACTORS,
      column: "risk_factors",
      type: "multi",
      method: updateMedicalProfile,
    },
  };

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Header title="Medische gegevens" withPrevious />
      <View className="px-4 bg-white h-full">
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

export default MedicalDataScreen;
