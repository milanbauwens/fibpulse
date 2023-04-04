import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ArrowLeft from "../svg/icons/ArrowLeft";
import UserCircle from "../svg/icons/UserCircle";

const Header = ({ withPrevious = false, withClose = false, title }) => {
  const navigation = useNavigation();

  return (
    <View className="w-full relative mt-2 mb-8">
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
      <Text
        style={{ fontFamily: "Mulish-semibold" }}
        className="text-center text-xl text-deepMarine-900 "
      >
        {title}
      </Text>
      {!withClose && (
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
