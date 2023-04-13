import { View } from "react-native";
import Card from "../Card/Card";
import Paragraph from "../Typograhy/Paragraph";
import Title from "../Typograhy/Title";
import Medication from "../svg/Medication";
import PrimaryButton from "../Buttons/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MedicationSetupCard = () => (
  <Card className="px-4 py-6 bg-deepMarine-100 rounded-lg">
    <View>
      <View className="flex items-center justify-center mb-6">
        <Medication />
      </View>
      <View className="mb-4">
        <Title size="small">Medicatie instellen</Title>
        <Paragraph>
          Al uw hartmedicatie op één plek. Stel een tijdstip in en houd bij wat
          u inneemt.
        </Paragraph>
      </View>
      <PrimaryButton
        icon={<MaterialCommunityIcons name="plus" size={24} color="#FFF" />}
        label="Voeg medicatie toe"
      />
    </View>
  </Card>
);

export default MedicationSetupCard;
