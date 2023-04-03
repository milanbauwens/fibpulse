import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useAuthContext } from "../Auth/AuthProvider";
import { supabase } from "../../db/initSupabase";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../theme/colors";

const IntakeItem = ({ data, currentSlide }) => {
  const { width } = useWindowDimensions();
  const { user } = useAuthContext();

  const [selectedRisks, setSelectedRisks] = useState([]);
  const [selectedEpisodeAmount, setSelectedEpisodeAmount] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState();

  const handleFormSubmit = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({
        date_of_birth: date,
        gender: selectedGender,
        vkf_frequency: selectedEpisodeAmount,
        risk_factors: selectedRisks,
        passed_intake: true,
      })
      .eq("user_id", user?.id);
    if (error) {
      console.log(error);
    }
  };

  if (currentSlide === 3) {
    handleFormSubmit();
  }

  const handleDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    setDate(date);
  };

  return (
    <View style={{ width }} className="h-full bg-white mt-8 px-4">
      <Text
        style={{ fontFamily: "Bitter-semibold" }}
        className="text-deepMarine-900 text-2xl mb-2 text-center"
      >
        {data.question}
      </Text>
      {data.multiselect && (
        <Text
          style={{ fontFamily: "Mulish-medium" }}
          className="text-deepMarine-700 text-base text-center"
        >
          U kunt meerdere factoren selecteren.
        </Text>
      )}

      {data.options ? (
        <View className="mt-12">
          {data.options && data.options.length > 5 ? (
            <View className="flex flex-row flex-wrap gap-4">
              {data.options.map((option, index) => {
                const handleSelect = () => {
                  setSelectedRisks([...selectedRisks, option]);
                };

                const handleDeselect = () => {
                  setSelectedRisks(
                    selectedRisks.filter((risk) => risk !== option)
                  );
                };

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={
                      selectedRisks.includes(option)
                        ? handleDeselect
                        : handleSelect
                    }
                    activeOpacity={1}
                    className={`px-4 py-3 min-h-[62px] flex items-center justify-center w-fit rounded-lg ${
                      selectedRisks.includes(option)
                        ? "bg-deepMarine-500"
                        : "bg-deepMarine-100"
                    }`}
                  >
                    <Text
                      style={{ fontFamily: "Mulish-medium" }}
                      className={`text-base text-center ${
                        selectedRisks.includes(option)
                          ? "text-white"
                          : "text-deepMarine-900"
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View className="flex flex-col gap-4">
              {data.options.map((option, index) => {
                const handleSelect = () => {
                  if (data.question === "Wat is uw geslacht?") {
                    setSelectedGender(option);
                  } else {
                    setSelectedEpisodeAmount(option);
                  }
                };

                const handleDeselect = () => {
                  if (data.question === "Wat is uw geslacht?") {
                    setSelectedGender("");
                  } else {
                    setSelectedEpisodeAmount("");
                  }
                };

                return (
                  <TouchableOpacity
                    key={index}
                    onPress={
                      selectedGender === option ||
                      selectedEpisodeAmount === option
                        ? handleDeselect
                        : handleSelect
                    }
                    activeOpacity={1}
                    className={`px-4 py-3 min-h-[62px] w-fit rounded-lg flex flex-row items-center justify-between ${
                      selectedGender === option ||
                      selectedEpisodeAmount === option
                        ? "bg-deepMarine-500"
                        : "bg-deepMarine-100"
                    }`}
                  >
                    <Text
                      style={{ fontFamily: "Mulish-medium" }}
                      className={`text-base ${
                        selectedGender === option ||
                        selectedEpisodeAmount === option
                          ? "text-white"
                          : "text-deepMarine-900"
                      }`}
                    >
                      {option}
                    </Text>
                    {selectedGender === option ||
                    selectedEpisodeAmount === option ? (
                      <Ionicons
                        name="md-checkmark-circle"
                        size={32}
                        color={colors.green[500]}
                      />
                    ) : (
                      <View className="w-8 h-8 rounded-full bg-white border border-turquoise-200"></View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      ) : (
        <View className="mt-28">
          <DateTimePicker
            minimumDate={new Date(1900, 0, 1)}
            maximumDate={new Date()}
            value={date || new Date()}
            display="spinner"
            textColor={colors.deepMarine[700]}
            mode="date"
            onChange={handleDate}
          />
        </View>
      )}
    </View>
  );
};

export default IntakeItem;
