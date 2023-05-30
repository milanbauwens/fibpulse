import { View } from "react-native";
import Card from "../Card/Card";
import Paragraph from "../common/Typograhy/Paragraph";
import Title from "../common/Typograhy/Title";
import PrimaryButton from "../common/Buttons/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CTACard = ({
  title,
  description,
  image,
  buttonLabel,
  buttonIconName,
  onPress,
}) => (
  <Card className="w-full p-4 bg-white rounded-lg shadow-card">
    <View className="flex flex-row items-center mb-6">
      <View className="mr-4">{image}</View>
      <View className="w-8/12">
        <Title size="small">{title}</Title>
        <Paragraph textColor="text-deepMarine-700">{description}</Paragraph>
      </View>
    </View>
    <PrimaryButton
      onPress={onPress}
      icon={
        buttonIconName && (
          <MaterialCommunityIcons
            name={buttonIconName}
            size={24}
            color="#FFF"
          />
        )
      }
      label={buttonLabel}
    />
  </Card>
);

export default CTACard;
