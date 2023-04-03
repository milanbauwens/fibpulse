import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntakeIllustration from "../../components/svg/IntakeIllustration";
import ButtonGroup from "../../components/Buttons/ButtonGroup";

const IntakeExplainer = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="px-4 relative w-full h-screen bg-white">
      <View className="flex flex-col items-center">
        <IntakeIllustration className="mb-12 mt-20" />
        <Text
          style={{ fontFamily: "Bitter-semibold" }}
          className="text-2xl text-center text-deepMarine-900 mb-2 "
        >
          Om te beginnen stellen we u enkele vragen.
        </Text>
        <Text
          style={{ fontFamily: "Mulish-medium" }}
          className="text-base text-center text-deepMarine-700"
        >
          We doen dit om een beter beeld te kunnen schetsen van uw medisch
          profiel. Zo kunnen we u de best mogelijke ervaring geven.
        </Text>
      </View>
      <View className="px-4 absolute left-0 right-0 bottom-14 m-auto flex flex-col justify-center">
        <PrimaryButton
          label="Ga van start"
          onPress={() => navigation.navigate("Intake")}
        />
      </View>
    </SafeAreaView>
  );
};

export default IntakeExplainer;
