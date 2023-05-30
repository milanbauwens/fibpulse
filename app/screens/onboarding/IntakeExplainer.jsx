import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IntakeIllustration from "../../components/svg/IntakeIllustration";
import Title from "../../components/common/Typograhy/Title";
import Paragraph from "../../components/common/Typograhy/Paragraph";
import SecondaryButton from "../../components/common/Buttons/SecondaryButton";

const IntakeExplainer = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="px-4 relative w-full h-screen bg-white">
      <View className="flex flex-col items-center">
        <IntakeIllustration className="mb-12 mt-20" />
        <Title size="large" textCenter>
          Uw medisch profiel in kaart brengen
        </Title>
        <Paragraph className="text-center">
          Met uw medische gegevens, kunnen we u een gerichtere ervaring
          aanbieden.
        </Paragraph>
      </View>
      <View className="flex-1 flex flex-row items-center px-4 absolute left-0 right-0 bottom-12 m-auto justify-center">
        <View className="flex-1 mr-4">
          <SecondaryButton
            label="Doe dit later"
            onPress={() => navigation.navigate("Dashboard")}
          />
        </View>
        <View className="flex-1">
          <PrimaryButton
            label="Ga van start"
            onPress={() => navigation.navigate("Intake")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IntakeExplainer;
