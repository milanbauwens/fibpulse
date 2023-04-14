import { Image, Text } from "react-native";
import Card from "../Card/Card";
import { View } from "react-native";
import Title from "../Typograhy/Title";
import Paragraph from "../Typograhy/Paragraph";

const LifestyleCard = ({ category, content, imageURL }) => (
  <Card className="bg-white min-h-[212] flex flex-row">
    <View className="p-4 basis-[60%]">
      <Text
        style={{ fontFamily: "Mulish-semibold" }}
        className="text-sm text-deepMarine-400 mb-2"
      >
        {category}
      </Text>
      <Title size="medium">Wist je dat...</Title>
      <Paragraph className="mt-[-4]">{content}</Paragraph>
    </View>
    <Image
      source={{ uri: imageURL }}
      style={{
        width: "100%",
        flexBasis: "40%",
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      }}
    />
  </Card>
);

export default LifestyleCard;
