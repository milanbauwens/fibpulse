import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../svg/icons/ArrowLeft";
import UserCircle from "../svg/icons/UserCircle";
import LogoSmall from "../svg/logoSmall";

const Header = ({
  withPrevious = false,
  withClose = false,
  withSettings = false,
  title,
}) => {
  const navigation = useNavigation();

  return (
    <View className="w-full relative mt-2 mb-10">
      {withPrevious && (
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute z-10 left-3 top-0"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft />
        </TouchableOpacity>
      )}
      {withClose && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute z-10 left-3 top-0"
        >
          <Ionicons name="md-close" size={24} color={colors.turquoise[700]} />
        </TouchableOpacity>
      )}
      {!withClose && !withPrevious && (
        <View className="absolute z-10 left-3 top-0">
          <LogoSmall />
        </View>
      )}
      <Text
        style={{ fontFamily: "Mulish-bold" }}
        className="text-center text-lg text-deepMarine-700"
      >
        {title}
      </Text>
      {withSettings && (
        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute z-10 right-4 top-0"
          onPress={() => navigation.navigate("Settings")}
        >
          <UserCircle />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
