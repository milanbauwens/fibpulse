import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { getMedicalProfile } from "../../db/modules/medical_profiles/api";
import LoadingIndicator from "../../components/Loading/Loading";
import DataView from "../../components/DataView/DataView";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const MedicalInformation = () => {
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
    Geslacht: medicalProfile?.data?.gender,
    Geboortedatum: medicalProfile?.data?.date_of_birth,
    "VKF frequentie": medicalProfile?.data?.vkf_frequency,
    Risicofactoren: medicalProfile?.data?.risk_factors.join(", "),
  };

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <Header title="Medische gegevens" withPrevious />
      <View className="px-4">
        {isLoading ? (
          <View className="h-full w-full flex items-center justify-center">
            <LoadingIndicator />
          </View>
        ) : (
          <DataView data={formattedData} />
        )}
      </View>
      <View className="px-4 absolute left-0 right-0 bottom-14 m-auto flex flex-col justify-center">
        <View className="mb-6">
          <PrimaryButton label="Opslaan" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MedicalInformation;
