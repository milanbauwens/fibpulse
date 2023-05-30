import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const Error = ({ error }) => {
  return (
    <View
      className="flex flex-row items-center bg-red-600 borde px-4 py-3 rounded-lg relative"
      role="alert"
    >
      <MaterialCommunityIcons
        name="alert-circle-outline"
        size={24}
        color="#FFF"
      />
      <Text
        style={{ fontFamily: "Mulish-bold" }}
        className="ml-3 block text-sm text-white"
      >
        {error}
      </Text>
    </View>
  );
};

export default Error;
