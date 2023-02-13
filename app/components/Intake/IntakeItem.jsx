import DatePicker from "@dietime/react-native-date-picker";
import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
} from "react-native";

const IntakeItem = ({ data, currentSlide }) => {
  const { width } = useWindowDimensions();

  const [selectedRisks, setSelectedRisks] = useState([]);
  const [selectedEpisodeAmount, setSelectedEpisodeAmount] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState();

  return (
    <View style={{ width }} className="h-full bg-white">
      <View className="mt-8 px-4">
        <Text
          style={{ fontFamily: "Mulish-regular" }}
          className="text-base text-neutral-900 mb-4 text-center"
        >
          Enkele vragen om u beter te leren kennen
        </Text>

        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-neutral-900 text-2xl text-center"
        >
          {data.question}
        </Text>
      </View>

      {data.options ? (
        <View className="mt-12">
          {data.options && data.options.length > 5 ? (
            <View className="px-4 flex flex-row flex-wrap gap-4">
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
                    className={`p-4 w-fit rounded-lg border-2 border-deepMarine-500 ${
                      selectedRisks.includes(option)
                        ? "bg-deepMarine-500"
                        : "bg-neutral-50"
                    }`}
                  >
                    <Text
                      style={{ fontFamily: "Mulish-semibold" }}
                      className={`text-lg text-center ${
                        selectedRisks.includes(option)
                          ? "text-neutral-100"
                          : "text-deepMarine-500"
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View className="px-4 flex flex-col gap-4">
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
                    className={`p-4 w-fit rounded-lg border-2 border-deepMarine-500 ${
                      selectedGender === option ||
                      selectedEpisodeAmount === option
                        ? "bg-deepMarine-500"
                        : "bg-neutral-50"
                    }`}
                  >
                    <Text
                      style={{ fontFamily: "Mulish-semibold" }}
                      className={`text-lg text-center ${
                        selectedGender === option ||
                        selectedEpisodeAmount === option
                          ? "text-neutral-100"
                          : "text-deepMarine-500"
                      }`}
                    >
                      {option}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      ) : (
        <View className="mt-28">
          <DatePicker
            value={date}
            textColor="#336666"
            markColor="#D6E7EB"
            onChange={(date) => setDate(date)}
          />
        </View>
      )}
    </View>
  );
};

export default IntakeItem;
