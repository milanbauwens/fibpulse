import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import { useAuthContext } from "../Auth/AuthProvider";
import { supabase } from "../../db/initSupabase";
import colors from "../../theme/colors";
import CheckCircle from "../svg/icons/CheckCircle";
import Title from "../Typograhy/Title";
import Paragraph from "../Typograhy/Paragraph";
import DatePicker from "../Input/DatePicker";

const IntakeItem = ({ data, currentSlide }) => {
  const { width } = useWindowDimensions();
  const { user } = useAuthContext();

  const [selectedRisks, setSelectedRisks] = useState([]);
  const [selectedEpisodeAmount, setSelectedEpisodeAmount] = useState();
  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState();

  // Date input states
  const [dayAN, setDayAN] = useState();
  const [monthAN, setMonthAN] = useState();
  const [yearAN, setYearAN] = useState();

  const handleDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
    setDate(date);
  };

  const handleFormSubmit = async () => {
    const { error } = await supabase.from("medical_profiles").upsert({
      user_id: user.id,
      date_of_birth: date,
      gender: selectedGender,
      vkf_frequency: selectedEpisodeAmount,
      risk_factors: selectedRisks,
      passed_intake: true,
    });
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [selectedRisks, selectedEpisodeAmount, selectedGender]);

  return (
    <View style={{ width }} className="h-full bg-white mt-8 px-4">
      <View className="flex w-full items-center">
        <Title centered>{data.question}</Title>
        {data.multiselect && (
          <Paragraph className="text-center">
            U kunt meerdere opties selecteren.
          </Paragraph>
        )}
      </View>

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
                    className="px-4 py-3 min-h-[62px] w-fit rounded-lg flex flex-row items-center justify-between bg-deepMarine-100"
                  >
                    <Text
                      style={{ fontFamily: "Mulish-medium" }}
                      className="text-base text-deepMarine-900"
                    >
                      {option}
                    </Text>
                    {selectedGender === option ||
                    selectedEpisodeAmount === option ? (
                      <CheckCircle />
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
          <DatePicker
            value={date}
            onChange={handleDate}
            onMonthChange={(text) => {
              setMonthAN(text);
              if (text.length === 2) {
                monthRef.current.focus();
              }
            }}
            onYearChange={(text) => {
              setYearAN(text);
              if (text.length === 4) {
                monthRef.current.focus();
              }
              setDate(new Date(yearAN, monthAN, dayAN));
            }}
            onDayChange={(text) => {
              setDayAN(text);
              if (text.length === 2) {
                monthRef.current.focus();
              }
            }}
          />
        </View>
      )}
    </View>
  );
};

export default IntakeItem;
