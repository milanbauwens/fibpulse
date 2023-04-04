import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntakeIllustration from "../../components/svg/IntakeIllustration";
import Title from "../../components/Typograhy/Title";
import Paragraph from "../../components/Typograhy/Paragraph";

const IntakeExplainer = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="px-4 relative w-full h-screen bg-white">
      <View className="flex flex-col items-center">
        <IntakeIllustration className="mb-12 mt-20" />
        <Title centered>
          Eerst enkele vragen om uw medisch profiel te schetsen
        </Title>
        <Paragraph className="text-center">
          We doen dit om een beter beeld te kunnen schetsen van uw medisch
          profiel. Zo kunnen we u de best mogelijke ervaring geven.
        </Paragraph>
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
