import { View } from "react-native";
import Card from "../Card/Card";
import PrimaryButton from "../Buttons/PrimaryButton";
import CheckHeartRythm from "../svg/CheckHeartRythm";
import Title from "../Typograhy/Title";
import Paragraph from "../Typograhy/Paragraph";

const HeartCheckCard = () => (
  <Card className="px-4 py-6 bg-deepMarine-100 rounded-lg">
    <View className="flex flex-row items-center gap-4 mb-6">
      <CheckHeartRythm />
      <View>
        <Title size="small">Onregelmatige hartslag?</Title>
        <Paragraph>Vul de vragenlijst in en leg de VKF-episode vast.</Paragraph>
      </View>
    </View>
    <PrimaryButton label="Registreer VKF-episode" />
  </Card>
);

export default HeartCheckCard;
